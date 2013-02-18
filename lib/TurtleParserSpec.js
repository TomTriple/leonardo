describe("Turtle Parser", function() {

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
      console.debug("fehler: "+arguments[0]);
      console.debug(e);
      validInput = false;
    }
    expect(validInput).toBe(true); 
  }


  it("it should recognize @base statements", function() {
    good("@base<asdf>.");
    good("@base <asdf>.");
    good("@base    <asdf>.");
    good("@base <asdf> .");
    good("   @base  <asdf>       .");
    good("@base <asdf> .  ");
  });

  it("it should recognize @prefix statements", function() {
    good("@prefix foaf:<http://rdfs.org/ns/void#>.");
    good("@prefix   foaf: <http://rdfs.org/ns/void#>.");
    good("@prefix foaf: <http://rdfs.org/ns/void#> .    ");
    good("    @prefix foaf: <http://rdfs.org/ns/void#> . ");
  });

  it("it should recognize @triple statements -- simple triples", function() {
    good("<#green-goblin> rel:enemyOf <#spiderman>.");
    good("<#green-goblin>rel:enemyOf <#spiderman>.");
    good(" <#green-goblin>   rel:enemyOf   <#spiderman>   .    ");
  });


  it("it should recognize @triple statements -- subject repetition and 'a'", function() {
    good("<#green-goblin> rel:enemyOf <#spiderman>;a foaf:person .");
    good("<#green-goblin> rel:enemyOf <#spiderman>  ;   a foaf:person .");
    good("<#green-goblin> rel:enemyOf <#spiderman>; rdfs:type foaf:person .");
    good("<#green-goblin> rel:enemyOf <#spiderman>  ;   rdfs:type foaf:person .");
  });


  it("it should recognize @triple statements -- subject-predicate and subject repetition", function() {
    good("<#green-goblin> rel:enemyOf <#spiderman> ; a foaf:person, owl:class ; rel:name 'Goblin 1', 'Goblin 2', 'Goblin 3' .");
  });

  it("it should recognize @triple statements -- string literals", function() {
    good("<#green-goblin> foaf:name '''Green Goblin 1''', 'Green Goblin 2', \"Green Goblin 3\", \"\"\"Green Goblin 4\"\"\" . ");
    good("<#green-goblin> foaf:name '''Green 'Gobl'in 1''', 'Green \"Goblin\" 2', \"Green Goblin 3\"@de, \"\"\"Green Goblin 4\"\"\"@en-us . ");
  });


  it("it should recognize @triple statements -- numeric literals", function() {
    good("<#green-goblin> foaf:age 44; foaf:amount 34.23, 4.2E9, -934, -34.24, -.4 . ");
  });

  it("it should recognize @triple statements -- boolean literals", function() {
    good("<#green-goblin> <#truth> true ; <#wrong> false . ");
  });

  it("it should recognize @triple statements -- blank nodes", function() {
    good(":bob foaf:knows _:alice .");
    good("_:bob foaf:knows :alice .");
    good("_:alice foaf:knows _:bob . _:bob foaf:knows _:alice .");
  });

  it("it should recognize @triple statements -- unlabeled blank nodes", function() {
    good(":goblin foaf:knows [ foaf:name 'Bob' ] .");
    good("[] foaf:knows [ foaf:name 'Bob' ] .");
    good(" [ foaf:name 'Alice' ] foaf:knows [ foaf:name 'Bob' ; foaf:knows [ foaf:name 'Eve' ] ; foaf:mbox <bob@example.com> ] .");
  });

  it("it should recognize @triple statements -- collections", function() {
    good(":subject :predicate ( :a :b :c ) .");
    good(":subject :predicate () .");
    good(":subject :predicate ((((())))) .");
    good(":subject :predicate (() ( )) .");
    good(":a :b ( 'apple' 'banana' ) .");
    good(":a :b [ rdf:first 'apple'; rdf:rest [ rdf:first 'banana'; rdf:rest rdf:nil ] ] .");
    good("(1 2.0 3E1) :p 'w' . ");
    // good("(1 [:p :q] ( 2 ) ) . ");
  });

  it("it should recognize @triple statements -- various", function() {
    good('<http://www.w3.org/TR/rdf-syntax-grammar>   dc:title "RDF/XML Syntax Specification (Revised)" ;   ex:editor [     ex:fullname "Dave Beckett";     ex:homePage <http://purl.org/net/dajobe/>   ] .');
  });

})


