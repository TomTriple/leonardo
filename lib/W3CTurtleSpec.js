describe("W3C Turtle Tests", function() {

  var newStream = function(input) {
    return new org.antlr.runtime.ANTLRStringStream(input);
  }
  var newLexer = function(stream) {
    return new ASTBuildingTurtleLexer(stream);
  }
  var useInput = function(input) {
    stream = newStream(input);
    lexer = newLexer(stream);
  }

  var tstream, parser, r, stream, lexer;

  // This function uses jasmine to verify that the given
  // code is a valid turtle document.
  var good = function() {
    useInput(arguments[0]);
    var validInput;
    try {
      tstream = new org.antlr.runtime.CommonTokenStream(lexer);
      parser = new ASTBuildingTurtleParser(tstream);
      r = parser.turtleDoc();
      validInput = true;
    } catch(e) {
      console.debug(e);
      validInput = false;
    }
    expect(validInput).toBe(true); 
//    console.debug(r.getTree());
  }


  // This function uses jasmine to verify that the given
  // code is _not_ a valid turtle document.
  var bad = function() {
    useInput(arguments[0]);
    var invalidInput;
    try {
      var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
      var parser = new ASTBuildingTurtleParser(tstream);
      var r = parser.turtleDoc();
      invalidInput = false;
    } catch(e) {
      // console.debug(e);
      invalidInput = true;
    }
    expect(invalidInput).toBe(true);
//    console.debug(r.getTree());
  }

  var toString = function() {
    var nodes = new org.antlr.runtime.tree.CommonTreeNodeStream(r.getTree());
    nodes.setTokenStream(tstream);
    var walker = new ASTWalker(nodes);
    walker.turtleDoc();
    return walker.toString();
  };


  it("it should recognize the data in test-00.ttl", function() {
    good("@prefix : <#> .\r[] :x :y .")
    expect(toString()).toEqual("_:genid1 <#x> <#y> .");
  });

  it("it should translate the data in test-01.ttl", function() {
    var input = "@prefix :  <http://example.org/base1#> . ";
    input += "@prefix a: <http://example.org/base2#> . ";
    input += "@prefix b: <http://example.org/base3#> . ";
    input += ":a :b :c . ";
    input += "a:a a:b a:c . ";
    input += ":a a:a b:a . ";
    good(input);
    expect(toString()).toEqual("<http://example.org/base1#a> <http://example.org/base1#b> <http://example.org/base1#c> .\r<http://example.org/base2#a> <http://example.org/base2#b> <http://example.org/base2#c> .\r<http://example.org/base1#a> <http://example.org/base2#a> <http://example.org/base3#a> .");
  });

  it("it should translate the data in test-02.ttl", function() {
    var input = "@prefix : <http://example.org/base#> . ";
    input += ":a :b :c,      :d,       :e      . ";
    good(input);
    expect(toString()).toEqual("<http://example.org/base#a> <http://example.org/base#b> <http://example.org/base#c> .\r<http://example.org/base#a> <http://example.org/base#b> <http://example.org/base#d> .\r<http://example.org/base#a> <http://example.org/base#b> <http://example.org/base#e> .");
  });

  it("it should translate the data in test-03.ttl", function() {
    var input = "@prefix : <http://example.org/base#> . ";
    input += ":a :b :c ; ";
    input += " :d :e ; ";
    input += " :f :g . ";
    good(input);
    expect(toString()).toEqual("<http://example.org/base#a> <http://example.org/base#b> <http://example.org/base#c> .\r<http://example.org/base#a> <http://example.org/base#d> <http://example.org/base#e> .\r<http://example.org/base#a> <http://example.org/base#f> <http://example.org/base#g> .");
  });


  it("it should translate the data in test-04.ttl", function() {
    var input = "@prefix : <http://example.org/base#> . ";
    input += "[] :a :b . "
    input += ":c :d [] . ";
    good(input);
    expect(toString()).toEqual("_:genid1 <http://example.org/base#a> <http://example.org/base#b> .\r<http://example.org/base#c> <http://example.org/base#d> _:genid2 .");
  });


  it("it should recognize the data in test-05.ttl", function() {
    var input = "@prefix : <http://example.org/base#> . ";
    input += "[ :a :b ] :c :d . "
    input += ":e :f [ :g :h ] . "
    good(input);

  });

  it("it should recognize the data in test-06.ttl", function() {
    var input = "@prefix : <http://example.org/base#> . ";
    input += ":a a :b . "
    good(input);
  });

  it("it should recognize the data in test-07.ttl", function() {
    var input = "@prefix : <http://example.org/stuff/1.0/> . "
    input += ":a :b ( \"apple\" \"banana\" ) . ";
    good(input);
  });

  it("it should recognize the data in test-08.ttl", function() {
    var input = "@prefix : <http://example.org/stuff/1.0/> . "
    input += ":a :b ( ) . ";
    good(input);
  });

  it("it should recognize the data in test-09.ttl", function() {
    var input = "@prefix owl: <http://www.w3.org/2002/07/owl#> ."
    input += "_:hasParent a owl:ObjectProperty ."
    input += "\r\r"
    input += "[] a owl:Restriction ;"
    input += "  owl:onProperty _:hasParent ;"
    input += "  owl:maxCardinality 2 ."
    good(input);
  });

  it("it should recognize the data in test-10.ttl", function() {
    var input = "";
    input += "<http://example.org/res1> <http://example.org/prop1> 000000 . "
    input += "<http://example.org/res2> <http://example.org/prop2> 0 . "
    input += "<http://example.org/res3> <http://example.org/prop3> 000001 . "
    input += "<http://example.org/res4> <http://example.org/prop4> 2 . "
    input += "<http://example.org/res5> <http://example.org/prop5> 4 . "
    good(input);
  });

  it("it should recognize the data in test-11.ttl", function() {
    var input = "";
    input += "@prefix ex1: <http://example.org/ex1#> . "
    input += "@prefix ex-2: <http://example.org/ex2#> . "
    input += "@prefix ex3_: <http://example.org/ex3#> . "
    input += "@prefix ex4-: <http://example.org/ex4#> . "
    input += " "
    input += "ex1:foo-bar ex1:foo_bar \"a\" . "
    input += "ex-2:foo-bar ex-2:foo_bar \"b\" . "
    input += "ex3_:foo-bar ex3_:foo_bar \"c\" . "
    input += "ex4-:foo-bar ex4-:foo_bar \"d\" . "
    good(input);
  });


  it("it should recognize the data in test-12.ttl", function() {
    var input = "";
    input += "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . "
    input += "@prefix ex:  <http://example.org/ex#> . "
    input += "@prefix :    <http://example.org/myprop#> . "
    input += " "
    input += "ex:foo rdf:_1 \"1\" . "
    input += "ex:foo rdf:_2 \"2\" . "
    input += "ex:foo :_abc \"def\" . "
    input += "ex:foo :_345 \"678\" . "
    good(input);
  });
  
  it("it should recognize the data in test-13.ttl", function() {
    var input = "";
    input += "@prefix :    <http://example.org/ron> . "
    input += " "
    input += "[] : [] . "
    input += " "
    input += ": : : . "
    good(input);
  });

  // 14-16 unnötig

  it("it should recognize the data in test-17.ttl", function() {
    var input = "";
    input += "@prefix :  <http://example.org/ex#> . "
    input += ":a :b \"\"\"a long "
    input += "	literal "
    input += "with "
    input += "newlines\"\"\" . "
    good(input);
  });

  it("it should recognize the data in test-18.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org/foo#> . "
    input += " "
    input += ":a :b \"\"\"\\nthis \\ris a \\U00015678long\\t "
    input += "literal\\uABCD "
    input += "\"\"\" . "
    input += " "
    input += ":d :e \"\"\"\\tThis \\uABCDis\\r \\U00015678another\\n "
    input += "one "
    input += "\"\"\" . "
    good(input);
  });

  it("it should recognize the data in test-19.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org/#> . "
    input += " "
    input += ":a :b  1.0 . "
    good(input);
  });

  it("it should recognize the data in test-20.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org/#> . "
    input += " "
    input += ":a :b \"\" . "
    input += " "
    input += ":c :d \"\"\"\"\"\" . "
    good(input);
  });

  it("it should recognize the data in test-21.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org#> . "
    input += ":a :b 1.0 . "
    input += ":c :d 1 . "
    input += ":e :f 1.0e0 . "
    good(input);
  });

  it("it should recognize the data in test-22.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org#> . "
    input += ":a :b -1.0 . "
    input += ":c :d -1 . "
    input += ":e :f -1.0e0 . "
    good(input);
  });

  it("it should recognize the data in test-23.ttl", function() {
    var input = "";
    input += "@prefix :  <http://example.org/ex#> . "
    input += ':a :b """John said: "Hello World!\\"""" . ';
    good(input);
  });

  it("it should recognize the data in test-24.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org#> . "
    input += ":a :b true . "
    input += ":c :d false . "
    good(input);
  });

  it("it should recognize the data in test-25.ttl", function() {
    var input = "";
    input += '# comment test \r'
    input += '@prefix : <http://example.org/#> . \r'
    input += ':a :b :c . # end of line comment \r'
    input += ':d # ignore me \r'
    input += '  :e # and me \r'
    input += '      :f # and me \r'
    input += '        . \r'
    input += ':g :h #ignore me \r'
    input += '     :i,  # and me \r'
    input += '     :j . # and me \r'
    input += ' \r'
    input += ':k :l :m ; #ignore me \r'
    input += '   :n :o ; # and me \r'
    input += '   :p :q . # and me \r' // \r at the end of the line...
    good(input);
  });

  it("it should recognize the data in test-26.ttl", function() {
    var input = "";
    input += "# comment line with no final newline test \r"
    input += "@prefix : <http://example.org/#> . "
    input += ":a :b :c . "
    input += "#foo \r" // \r at the end of the line should not be necessary
    good(input);
  });

  it("it should recognize the data in test-27.ttl", function() {
    var input = "";
    input += "@prefix foo: <http://example.org/foo#>  . "
    input += "@prefix foo: <http://example.org/bar#>  . "
    input += " "
    input += "foo:blah foo:blah foo:blah . "
    good(input);
  });

  it("it should recognize the data in test-28.ttl", function() {
    var input = "";
    input += "<http://example.org/foo> <http://example.org/bar> \"2.345\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"1\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"1.0\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"1.\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"1.000000000\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.3\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.234000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.2340000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.23400000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.234000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.2340000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.23400000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.234000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.2340000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.23400000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.234000000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.2340000000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.23400000000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.234000000000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.2340000000000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"2.23400000000000000000005\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    input += "<http://example.org/foo> <http://example.org/bar> \"1.2345678901234567890123457890\"^^<http://www.w3.org/2001/XMLSchema#decimal> . "
    good(input);
  });

  /*
   seltsam... 
   testdaten in 29.ttl machen es erforderlich \r \t \n und leerzeichen wieder als akzeptable zeichen mitaufzunehmen obwohl
   das zeichen \ explizit verboten ist
   
  it("it should recognize the data in test-29.ttl", function() {
  
    var input = '<http://example.org/node> <http://example.org/prop> <scheme:\\u0001\\u0002\\u0003\\u0004\\u0005\\u0006\\u0007 asdf> . ';

<http://example.org/node> <http://example.org/prop> <scheme:\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\t\n\u000B\u000C\r\u000E\u000F\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001A\u001B\u001C\u001D\u001E\u001F !"#$%&'()*+,-./0123456789:/<=\u003E?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u007F> .

alert(input);
    good(input);
  });
 */

  it("it should recognize the data in test-30.ttl", function() {
    var input = "";
    input += "# In-scope base URI is http://www.w3.org/2001/sw/DataAccess/df1/tests/ at this point \r"
    input += "<a1> <b1> <c1> . \r"
    input += "@base <http://example.org/ns/> . \r"
    input += "# In-scope base URI is http://example.org/ns/ at this point \r"
    input += "<a2> <http://example.org/ns/b2> <c2> . \r"
    input += "@base <foo/> . \r"
    input += "# In-scope base URI is http://example.org/ns/foo/ at this point \r"
    input += "<a3> <b3> <c3> . \r"
    input += "@prefix : <bar#> . \r"
    input += ":a4 :b4 :c4 . \r"
    input += "@prefix : <http://example.org/ns2#> . \r"
    input += ":a5 :b5 :c5 . \r"
    good(input);
  });


  it("it should recognize the bad data in bad-00.ttl", function() {
    var input = "";
    input += "# prefix name must end in a : \r"
    input += "@prefix a <#> . "
    bad(input);
  });

  it("it should recognize the bad data in bad-01.ttl", function() {
    var input = "";
    input += "# Forbidden by RDF - predicate cannot be blank \r"
    input += "@prefix : <http://example.org/base#> . \r"
    input += ":a [ :b :c ] :d . "
    bad(input);
  });


  it("it should recognize the bad data in bad-02.ttl", function() {
    var input = "";
    input += "# Forbidden by RDF - predicate cannot be blank \r"
    input += "@prefix : <http://example.org/base#> . \r"
    input += ":a [] :b . "
    bad(input);
  });

  return;

  // nochmal anschauen
  /*
  it("it should recognize the bad data in bad-03.ttl", function() {
    var input = "";
    input += "# 'a' only allowed as a predicate \r"
    input += "@prefix : <http://example.org/base#> . \r"
    input += "a :a :b . "
    bad(input);
  });
*/
  it("it should recognize the bad data in bad-04.ttl", function() {
    var input = "";
    input += "# No comma is allowed in collections \r"
    input += "@prefix : <http://example.org/stuff/1.0/> . \r"
    input += ":a :b ( \"apple\", \"banana\" ) . "
    bad(input);
  });


  it("it should recognize the bad data in bad-05.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org/stuff/1.0/> . \r";
    input += "{ :a :b :c . } :d :e .";
    bad(input);
  });

  it("it should recognize the bad data in bad-06.ttl", function() {
    var input = "";
    input += "# is and of are not in turtle \r"
    input += "@prefix : <http://example.org/stuff/1.0/> . \r"
    input += ":a is :b of :c . "
    bad(input);
  });

  it("it should recognize the bad data in bad-07.ttl", function() {
    var input = "";
    input += "@prefix : <http://example.org/stuff/1.0/> . \r"
    input += ":a.:b.:c . \r";
    input += ":a^:b^:c .";
    bad(input);
  });

  it("it should recognize the bad data in bad-08.ttl", function() {
    var input = "@keywords something";
    bad(input);
  });

  it("it should recognize the bad data in bad-09.ttl", function() {
    var input = "@keywords something";
    bad(input);
  });

  it("it should recognize the bad data in bad-09.ttl", function() {
    var input = "# implies is not in turtle";
    input += "@prefix : <http://example.org/stuff/1.0/> . ";
    input += ":a => :b .";
    bad(input);
  });

})


