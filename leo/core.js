/*jslint vars: true, white: true, plusplus: true */
/*globals leo, document, rangy, org, TurtleLexer, TurtleParser*/


define(["leo/ns", "leo/util", "leo/ir", "leo/pubsub", "leo/vocabCache"], function(leo, util, ir, pubsub, vocabCache) {

  "use strict";

  // Establish the module for this file.
  leo.core = {};
  var ns = leo.core;


  /**
   * Creates a new instance of the editor 
   */
  ns.createEditor = function(ide) {

    // Holds a reference to the console of the editor.
    var cons = document.getElementById("console");

    // Register a listener for lexical errors in order to
    // display them in the console.
    leo.subscribe("lexerError", function(line, column, message) {
      var tr = $("<tr><td>Lexer-Error</td><td>Line: "+line+"</td><td>Column: "+(column + 1)+"</td><td>"+message+"</td></tr>").get(0);
      cons.firstChild.appendChild(tr);
    });


    // Register a listener for syntactical errors in order to
    // display them in the console.
    leo.subscribe("parserError", function(line, column, message) {
      var tr = $("<tr><td>Parser-Error</td><td>Line: "+line+"</td><td>Column: "+column+"</td><td>"+message+"</td></tr>").get(0);
      cons.firstChild.appendChild(tr);
    });


    // Register a click listener if one wants to retrieve more
    // infos by the code completion box.
    $("#cc").click(function(e) {
      var t = $(e.target).parent(), h = parseInt(t.css("height"));
      util.debug(t);
      // TODO: magic number
      if(h > 18) {
        t.css("height", "18px");
      } else {
        t.css("height", "auto");
      }
    });

    // Register a listener if a prefix is found during the parse. The listener
    // triggers code completion, if the cursor position matches the position of 
    // the current token.
    leo.subscribe("isPrefix", function(token) {
      if(token.getLine() === caret.line && token.getCharPositionInLine()+token.getText().length === caret.column) {
        var prefix = token.getText();
        prefix = prefix.substr(0, prefix.length - 1);
        var triples = {};
        vocabCache.filterBySubject(prefix, function(triple) {
          triples[triple.s] = util.getOrElse(triples[triple.s], []);
          triples[triple.s].push(triple);
        });
        var list = "<ul>";
        var clean = function(value) {
          return value.replace(">", "").replace("<", "");
        };
        for(var prop in triples) {
          list += "<li><a href='#'>"+clean(prop).replace(vocabCache.prefix2uri(prefix), "")+"</a><table style='' cellpadding='0' cellspacing='0'>";
          var predList = triples[prop];
          for(var i = 0; i < predList.length; i++) {
            list += "<tr valign='top'><td width='250px;'>"+clean(predList[i].p)+"</td><td style='width:250px;'>"+clean(predList[i].o)+"</td></tr>";
          }
          list += "</table></li>";
        }
        list += "</ul>";

        var ul = $("#cc");
        ul.html(list).css({
          left: caret.column * 8 + 10, 
          top: (caret.line - 1) * 15 + 6
        }).fadeIn(200);
      }
    });



    // attributes for cursor repositioning
    var targetNode, targetNodeOffset, applyRange;

    // attributes of the editor
    var turtleCode, caret, lines, line;

    // attributes which drive code completion
    var vocabCache = leo.vocabCache.createCache();

    // TODO: really needed?!
    var that = this;

    var rangeTextWithOffset = (function() {
      var applyRange = function() {
        var s = rangy.getSelection();
        var r = rangy.createRange();
        r.setStart(that.targetNode, that.targetNodeOffset);
        r.collapse(true);
        s.setSingleRange(r);
      };
      return function(textNode, textNodeOffset) {
        that.targetNode = textNode;
        that.targetNodeOffset = textNodeOffset;
        return applyRange;
      };
    }());


    var rangeAfterNode = (function() {
      var that = this;
      var applyRange = function() {
        var s = rangy.getSelection();
        var r = rangy.createRange();
        r.setStartAfter(that.targetNode);
        s.setSingleRange(r);
      };
      return function(targetNode) {
        that.targetNode = targetNode;
        return applyRange;
      };
    }());


    // Detranslates the content of the editor
    var detranslate = function() {
      var selection = rangy.getSelection();
      var detranslator = leo.core.createDetranslator(ide, selection);
      var result = detranslator.detranslate();

      leo.util.debug("result-text:'" + result.text+"'");
      leo.util.debug("position: "+result.caret.line+"x"+result.caret.column);

      turtleCode = result.text;
      caret = result.caret;

      var c = document.getElementById("caret");
      if(c.firstChild)
        c.removeChild(c.firstChild);
      c.appendChild(document.createTextNode(caret.line+" x "+(caret.column + 1)));
    };


    var parseTurtleCode = function() {
      var highlightsQueue = leo.util.createQueue();
      try {
        var stream = new org.antlr.runtime.ANTLRStringStream(turtleCode);
        var lexer = new TurtleLexer(stream);
        var tstream = new org.antlr.runtime.CommonTokenStream(lexer); 
        var parser = new TurtleParser(tstream);
        parser.vocabCache = vocabCache;
        var r = parser.turtleDoc();
        // var debugVisitor = leo.ir.createDebugVisitor();
        var highlightVisitor = leo.ir.createHighlighter(highlightsQueue);
        parser.parseTree.visit(highlightVisitor);
      } catch(ex) {
        leo.util.debug(ex);
      }
      return highlightsQueue;
    };

    // updates the editor´s content with the 
    // new syntax-highlighting.
    var updateContent = function() {
      var i;
      while(ide.firstChild) {
        ide.removeChild(ide.firstChild);
      }
      for(i = 0; i < lines.length; i++) {
        ide.appendChild(lines[i]);
      }
    };


    var addLine = function() {
      var i;
      line = document.createElement("DIV");
      lines.push(line);
      for(i = 0; i < arguments.length; i++) {
        line.appendChild(arguments[i]);
      }
    };


    var newLineBuffer = function() {
      lines = [];
      addLine();
    };


    // the basic idea is as follows: whatever the user types in the editor
    // will stay there, if the highlights-queue doesn´t contain a highlight
    // on the current position. 

    var update = function() {
      $("#cc").hide();
      while(cons.firstChild.firstChild) {
        cons.firstChild.removeChild(cons.firstChild.firstChild);
      }
      detranslate();
      newLineBuffer();
      var highlights = parseTurtleCode();
      var highlight = highlights.length() === 0 ? undefined : highlights.dequeue();
      var currentTextNode, textStartColumn, currLine = 1, currColumn = 0;
      var targetContainer;

      var i, c, cc;
      
      var isLineBreak = function() {
        return cc === 10;
      };

      // traverse the de-translated turtle code and check for ever character
      // if a highlight could be integrated at the character´s position.
      for(i = 0; i < turtleCode.length; i++) {
        c = turtleCode.charAt(i);
        cc = turtleCode.charCodeAt(i);
        // true if a highlight exists at the current position
        if(highlight !== undefined && highlight.token.getLine() === currLine && highlight.token.getCharPositionInLine() === currColumn) {
          i += highlight.token.getText().length - 1;
          leo.util.debug("seeing change...");
          currentTextNode = undefined;
          if(isLineBreak()) {
            addLine(highlight.node);
          } else {
            if(line.firstChild && line.firstChild.nodeName === "BR") {
              line.removeChild(line.firstChild);
            }
            line.appendChild(highlight.node);
          }
          // example: change starts e.g. at 1x7 with a break
          // due to the fact that the token is a break one can see that the cursor must
          // be at line 2 and column 0 when the token starts at 1x7
          if(isLineBreak() && caret.line === currLine+1 && caret.column === 0 ) {
            if(highlights.peek() && highlights.peek().node.nodeName === "BR") {
              applyRange = rangeAfterNode(highlight.node);
            } else {
              targetContainer = highlights.peek().node.firstChild || highlights.peek().node;
              applyRange = rangeTextWithOffset(targetContainer, 0);
            }
          } else {
            // the cursor´s original position was between the token´s characters? 
            // If yes save the corresponding parameters
            if(currLine === caret.line && caret.column > currColumn && caret.column <= currColumn+highlight.token.getText().length) {
              targetContainer = highlight.node.firstChild || highlight.node;
              applyRange = rangeTextWithOffset(targetContainer, caret.column - currColumn);
            }
          }
          // modify state according to whether we´ve found a break or sth else. 
          if(isLineBreak()) {
            currLine += 1;
            currColumn = 0;
          } else {
            currColumn += highlight.token.getText().length;
          }
          highlight = highlights.dequeue();
          leo.util.debug("after --> line:"+currLine+", col:"+currColumn);

        } else {
          // Create a new text node to which all the characters are written to, until
          // a highlight applies.
          if(isLineBreak()) {
            currLine+=1;
            currColumn = 0;
            addLine(document.createElement("BR"));
            currentTextNode = undefined;
            if(caret.line === currLine && caret.column === 0) {
              if(turtleCode[i+1].charCodeAt(0) === 10) {
                applyRange = rangeAfterNode(line.firstChild);
              } else {
                currentTextNode = document.createTextNode("");
                line.removeChild(line.firstChild);
                line.appendChild(currentTextNode);
                applyRange = rangeTextWithOffset(currentTextNode, 0);
              }
            }
          } else {
            if(currentTextNode === undefined) {
              if(line.firstChild && line.firstChild.nodeName === "BR") {
                line.removeChild(line.firstChild);
              }
              currentTextNode = document.createTextNode("");
              textStartColumn = currColumn;
              line.appendChild(currentTextNode);
            }
            currColumn+=1;
            if(caret.line === currLine && caret.column === currColumn) {
              applyRange = rangeTextWithOffset(currentTextNode, currColumn - textStartColumn);
            } else if(caret.line === 1 && caret.column === 0 && currLine === 1 && currColumn === 1) {
              applyRange = rangeTextWithOffset(currentTextNode, 0);
            }
            currentTextNode.nodeValue += cc === 32 ? String.fromCharCode(160) : c;

            }
          }
        }

        updateContent();
        applyRange();
    };


    return {
      update: update
    };
  };




  /**
   * Allocates a new Detranslator
   * @public 
   */
  ns.createDetranslator = function(ide, selection) {

    var currRange = selection.getRangeAt(0);
    var currNode = currRange.startContainer;
    var text = "",
        line = 1,
        column = 0, 
        foundCaretNode = false,
        firstDiv = true,
        root = true;


    var traverseDepthFirst = function(node) {

      var i = 0, child;

      // checking for a div implies only selecting nodes that have a depth of 1
      if(firstDiv === false && root === false && node.nodeName === "DIV") {
        text += String.fromCharCode(10);
        if(foundCaretNode === false) {
          line += 1;
          column = 0;
        }
        if(currNode && node === currNode) {
          foundCaretNode = true;
        }
      }

      if(root === false && firstDiv) {
        firstDiv = false;
      }

      while((child = node.childNodes.item(i++))) {
        if(child.hasChildNodes() === false) {
          if(child.nodeType === 3) {
            // TODO: magic number
            var re = new RegExp(String.fromCharCode(160), "g");
            text += child.data.replace(re, String.fromCharCode(32));
            if(currNode && child === currNode) {
              column += currRange.startOffset;
              foundCaretNode = true; 
            }
            if(foundCaretNode === false) {
              column += child.data.length;
            }
          }
        } else {
          if(root === true) {
            root = false;
          }
          traverseDepthFirst(child);
        }
      }
    };


    return {
      detranslate: function() {
        traverseDepthFirst(ide);
        return { 
          text: text, 
          caret: {
            line: line, 
            column: column
          }
        };
      }
    };
  };

  return ns;

});


