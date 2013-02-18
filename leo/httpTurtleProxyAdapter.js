importScripts("/lib/antlr3-all.js");
importScripts("/lib/ASTBuildingTurtleLexer.js");
importScripts("/lib/ASTBuildingTurtleParser.js");
importScripts("/lib/ASTWalker.js");


// register listner for 'message'
self.addEventListener("message", function(e) {
  var cmd = e.data.cmd, uri = e.data.uri;
  if(cmd === "adapt") {
    // start the xhr request to the local webserver with 
    // the proper http parameter to the vocabulary
    var xhr = new XMLHttpRequest();
    xhr.open("get", "/lookup/?url="+uri, true);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        var data = xhr.responseText;
        if(data === undefined)
          return;

        // parse the server´s response by using the ASTBuildingTurtleParser
        // together with the ASTWalker.
        var stream = new org.antlr.runtime.ANTLRStringStream(data);
        var lexer = new ASTBuildingTurtleLexer(stream);

        var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
        var parser = new ASTBuildingTurtleParser(tstream);
        var r = parser.turtleDoc();

        var nodes = new org.antlr.runtime.tree.CommonTreeNodeStream(r.getTree());
        nodes.setTokenStream(tstream);
        var walker = new ASTWalker(nodes);
        walker.turtleDoc();
        var result = [];
        // Instrument the public API method 'each' for translating every
        // triple to the datastructure the application expects. 
        walker.each(function(s, p, o) {
          result.push({s: s, p: p, o: o});
        });
        // signal that the adaption is complete
        self.postMessage({cmd: "adaptResult", result: result});
      }
    };
    xhr.send(null);

  }
}, false);

