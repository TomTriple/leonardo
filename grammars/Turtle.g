grammar Turtle;


options {
  language=JavaScript;
}


@members {

  /**
  * 
  * Contains a reference to the root of the generated parsetree.
  * @public
  */
  this.parseTree;

  /**
  *
  * Contains at any time a reference to the
  * current rule node.
  * @private
  */
  this.currentNode;


  /**
  * Loads the vocabulary for the prefix. This only happens, 
  * if the vocabulary is not already present in the cache.
  *
  * @private
  */
  this.loadVocabulary = function(prefix, uri) {
    prefix = prefix.substr(0, prefix.length - 1);
    uri = uri.substr(0, uri.length - 1);
    uri = uri.substr(1);

    // Test the cache, if a vocabulary is present
    if(this.vocabCache.miss(prefix)) {
      this.vocabCache.addVocab(prefix, uri);
      var worker = new Worker("leo/httpTurtleProxyAdapter.js");
      var th = this;
      // Initiate communication with the worker
      worker.addEventListener("message", function(e) {
        var result = e.data.result;
        console.debug("results: "+result.length);
        th.vocabCache.addTriples(result);
      });
      worker.postMessage({
        cmd: "adapt",
        uri: uri
      });
    }
  }



  /**
  *
  *  Save a reference to the overwritten version of 'match'
  *  @private
  */
  this.matchOriginal = this.match;

  /**
  *
  * Overwrite 'match' in order to generate a parse tree node 
  * for every token the parser encounters.
  * @private
  */
  this.match = function(input, ttype, follow){
    var node = leo.ir.createTokenNode(input.LT(1)); 
    this.currentNode.addChild(node);
    return this.matchOriginal(input, ttype, follow);
  };

  /**
  *
  * Perform that action before the starting the normal 
  * rules processsing. Generates a parse tree node for every
  * invocation, which represents a rule reference in the grammar.
  *
  */
  this.beforeRuleProcessing = function(type){
    var r = leo.ir.createRuleNode(type);
    if(this.parseTree === undefined) 
      this.parseTree = r;
    else 
      this.currentNode.addChild(r);
    var save = this.currentNode;
    this.currentNode = r;
    return save;
  };

  /**
  *  Delegate application specific error handling to listeners
  *  in the channel 'parserError'.
  *
  */
  this.reportError = function(ex) {
     var tok = this.input.LT(1);
     leo.publish("parserError", tok.getLine(), tok.getCharPositionInLine(), ex.message);
  }
/*
  this.mismatch = function(input, ttype, follow){
    ;
  }

  this.recoverFromMismatchedSet = function(input, e, follow){
    ;
  }
*/
}


@rulecatch {
  catch(ex) {
    throw ex;
  }
}



@lexer::members {
// How can I make the lexer exit upon first lexical error?
// - Problem war die Lexer-Endlosschleife bei z.B. "@prefix wsd". Die bin ich somit los, muss aber 
//   auf Error-Recovery im Lexer verzichten. Wie es scheint ist das in ANTLR JavaScript ohnehin noch
//   gar nicht implementiert, siehe dafuer antlr-all.js, Zeile 5675
// http://www.antlr.org/wiki/pages/viewpage.action?pageId=5341217 

    this.nextToken = function() {
        while (true) {
            this.state.token = null;
            this.state.channel = org.antlr.runtime.Token.DEFAULT_CHANNEL;
            this.state.tokenStartCharIndex = this.input.index();
            this.state.tokenStartCharPositionInLine = this.input.getCharPositionInLine();
            this.state.tokenStartLine = this.input.getLine();
            this.state.text = null;
            if ( this.input.LA(1)===org.antlr.runtime.CharStream.EOF ) {
                return org.antlr.runtime.Token.EOF_TOKEN;
            }
            try {
                this.mTokens();
                if ( !org.antlr.lang.isValue(this.state.token) ) {
                    this.emit();
                }
                else if ( this.state.token==org.antlr.runtime.Token.SKIP_TOKEN ) {
                    continue;
                }
                return this.state.token;
            }
            catch (re) {
                if ( re instanceof org.antlr.runtime.RecognitionException ) {
                    this.reportError(re);
                    this.input.consume();
                }
            }
        }
    }

   this.reportError = function(ex) {
     leo.publish("lexerError", this.state.tokenStartLine, this.state.tokenStartCharPositionInLine, ex.message);
   }


}

turtleDoc
@init { var save = this.beforeRuleProcessing("TurtleDoc"); }
@after { this.currentNode = save; }
   : WS* statement*
   ;
  catch[ex] {
    if(ex instanceof org.antlr.runtime.RecognitionException) {
      this.reportError(ex);
      var la = this.input.LA(1);
      while(la !== DOT && la !== EOF) {
        this.input.consume();
        la = this.input.LA(1);
      }
      this.input.consume();
      this.turtleDoc();
    } else {
      throw ex;
    }
  }

statement
@init { var save = this.beforeRuleProcessing("Statement"); }
@after { this.currentNode = save; }
   : directive ws1=WS* dot=DOT ws2=WS*
   | triples WS* DOT WS*
   ;

directive
@init { var save = this.beforeRuleProcessing("Directive"); }
@after { this.currentNode = save; }
   : prefixID
   | base
   ;

prefixID
@init { var save = this.beforeRuleProcessing("PrefixID"); }
@after { this.currentNode = save; }
   : prefix=PREFIX ws1=WS+ PNAME_NS ws2=WS* IRIREF {
       this.loadVocabulary($PNAME_NS.text, $IRIREF.text);
     }
   ;

base
@init { var save = this.beforeRuleProcessing("Base"); }
@after { this.currentNode = save; }
   : base1=BASE ws=WS* iriref=IRIREF
   ;

triples
@init { var save = this.beforeRuleProcessing("Triples"); }
@after { this.currentNode = save; }
    : subject WS+ predicateObjectList
    | blankNodePropertyList predicateObjectList?
    ;

subject
@init { var save = this.beforeRuleProcessing("Subject"); }
@after { this.currentNode = save; }
   : iri|blank
   ;


predicateObjectList
@init { var save = this.beforeRuleProcessing("PredicateObjectList"); }
@after { this.currentNode = save; }
     : verb WS+ objectList WS* (SEMI WS* predicateObjectList?)*
     ;

verb
@init { var save = this.beforeRuleProcessing("Verb"); }
@after { this.currentNode = save; }
    : predicate {
       var prefix = $predicate.text;
       prefix = prefix.substr(0, prefix.length - 1);
       if(this.vocabCache.prefix2uri(prefix) !== undefined) {
         leo.publish("isPrefix", $predicate.start);
       }
      }
    | A 
    ;

predicate
@init { var save = this.beforeRuleProcessing("Predicate"); }
@after { this.currentNode = save; }
   : iri
   ;

objectList
@init { var save = this.beforeRuleProcessing("ObjectList"); }
@after { this.currentNode = save; }
   : object WS* (COMMA WS* object WS*)*
   ;

object
@init { var save = this.beforeRuleProcessing("Object"); }
@after { this.currentNode = save; }
   : iri {
       var prefix = $iri.text;
       prefix = prefix.substr(0, prefix.length - 1);
       if(this.vocabCache.prefix2uri(prefix) !== undefined) {
         leo.publish("isPrefix", $iri.start);
       }
     }
   | literal
   | blankNodePropertyList
   | blank
   ;

blank
@init { var save = this.beforeRuleProcessing("Blank"); }
@after { this.currentNode = save; }
   : blankNode|collection
   ;

collection
@init { var save = this.beforeRuleProcessing("Collection"); }
@after { this.currentNode = save; }
   : PAREN_ROUND_OPEN WS* (object WS*)* PAREN_ROUND_CLOSE WS*
   ;

blankNode
@init { var save = this.beforeRuleProcessing("BlankNode"); }
@after { this.currentNode = save; }
   : BLANK_NODE_LABEL
   | PAREN_BRACKETS_OPEN WS* PAREN_BRACKETS_CLOSE
   ;

blankNodePropertyList
@init { var save = this.beforeRuleProcessing("BlankNodePropertyList"); }
@after { this.currentNode = save; }
   : PAREN_BRACKETS_OPEN WS* predicateObjectList WS* PAREN_BRACKETS_CLOSE WS*
   ;

literal
@init { var save = this.beforeRuleProcessing("Literal"); }
@after { this.currentNode = save; }
   : rdfLiteral|numericLiteral|booleanLiteral
   ;

booleanLiteral
@init { var save = this.beforeRuleProcessing("BooleanLiteral"); }
@after { this.currentNode = save; }
   : tok=(TRUE|FALSE) { this.currentNode.addChild(leo.ir.createTokenNode($tok)); }
   ;

numericLiteral
@init { var save = this.beforeRuleProcessing("NumericLiteral"); }
@after { this.currentNode = save; }
   : tok=(INTEGER|DECIMAL|DOUBLE) { this.currentNode.addChild(leo.ir.createTokenNode($tok)); }
   ;

rdfLiteral
@init { var save = this.beforeRuleProcessing("RdfLiteral"); }
@after { this.currentNode = save; }
   : string (LANGTAG|EYES iri)?
   ;

string
@init { var save = this.beforeRuleProcessing("String"); }
@after { this.currentNode = save; }
   : tok=(STRING_LITERAL_QUOTE|STRING_LITERAL_SINGLE_QUOTE|STRING_LITERAL_LONG_SINGLE_QUOTE|STRING_LITERAL_LONG_QUOTE) { this.currentNode.addChild(leo.ir.createTokenNode($tok)); }
   ;

iri
@init { var save = this.beforeRuleProcessing("Iri"); }
@after { this.currentNode = save; }
   : IRIREF|prefixedName
   ;

prefixedName
@init { var save = this.beforeRuleProcessing("PrefixedName"); }
@after { this.currentNode = save; }
   : tok=(PNAME_LN|PNAME_NS) { this.currentNode.addChild(leo.ir.createTokenNode($tok)); }
   ;

TRUE: 'true';
FALSE: 'false';
DOT: '.';
A: 'a';
COMMA: ',';
SEMI: ';';
BASE: '@base';
PREFIX: '@prefix';
PAREN_ROUND_OPEN: '(';
PAREN_ROUND_CLOSE: ')';
PAREN_BRACKETS_OPEN: '[';
PAREN_BRACKETS_CLOSE: ']'; 
EYES: '^^';
IRIREF: '<' (~('\u0000'..'\u0020'|'<'|'>'|'"'|'{'|'}'|'|'|'^'|'`'|'\\')|UCHAR)* '>';
PNAME_NS: PN_PREFIX? ':';
PNAME_LN: PNAME_NS PN_LOCAL;
STRING_LITERAL_SINGLE_QUOTE: '\'' (~('\u0027'|'\u005C'|'\u000A'|'\u000D')|ECHAR|UCHAR)* '\'';
STRING_LITERAL_QUOTE: '"' (~('\u0022'|'\u005C'|'\u000A'|'\u000D')|ECHAR|UCHAR)* '"';
STRING_LITERAL_LONG_SINGLE_QUOTE: '\'\'\'' (('\''|'\'\'')? ~('\''|'\\')|ECHAR|UCHAR)* '\'\'\'';
STRING_LITERAL_LONG_QUOTE: '"""' (('"'|'""')? ~('"'|'\\')|ECHAR|UCHAR)* '"""';
LANGTAG: '@' ('a'..'z'|'A'..'Z')+ ('-' ('a'..'z'|'A'..'Z'|'0'..'9')+)*;
BLANK_NODE_LABEL: '_:' (PN_CHARS_U|'0'..'9') ((PN_CHARS|'.')* PN_CHARS)?;
// {} sind die falschen zeichen - das ist nur eine voruebergehende loesung, da ansonsten ein gemeinsamer
// prefix mit blankNodePropertyList entsteht. loesung: rechtsfaktorisieren oder semantic predicates? 
// ANON: '[' WS* ']';

// wieso kann ANTLR diese beiden Token bei einem lookahead von k=1 unterscheiden?! 
INTEGER: ('+'|'-')? '0'..'9'+;
DECIMAL: ('+'|'-')? '0'..'9'* '.' '0'..'9'+;

// zwei subrules fangen mit 0-9 an - woher weiss ANTLR welche er nehmen muss sofern k=1 ist?! 
DOUBLE: ('+'|'-')? ('0'..'9'+ '.' '0'..'9'* EXPONENT|'.' '0'..'9'+ EXPONENT|'0'..'9'+ EXPONENT);

// unicode escapes muessen vierstellig angegeben werden sonst keine parser-generierung
WS: '\u0020'|'\u0009'|'\u000D'|'\u000A';
COMMENT: '#' ( options {greedy=false;}: . )* '\r'+ {this.skip();};

fragment EXPONENT: ('e'|'E') ('+'|'-')? '0'..'9'+;

fragment ECHAR: '\\' ('t'|'b'|'n'|'r'|'f'|'\\'|'"'|'\'');
fragment PN_LOCAL: (PN_CHARS_U|'0'..'9'|PLX) ((PN_CHARS|'.'|PLX)* (PN_CHARS|PLX))?;
fragment PLX: PERCENT|PN_LOCAL_ESC;
fragment PERCENT: '%' HEX HEX;

fragment PN_LOCAL_ESC: '\\' ('_' | '~' | '.' | '-' | '!' | '$' | '&' | '\'' | '(' | ')' | '*' | '+' | ',' | ';' | '=' | '/' | '?' | '#' | '@' | '%');

// TODO: incomplete; we must recognize a ':' here too.
// currently that conflicts with the semicolon in PNAME_NS.
fragment PN_CHARS_U: PN_CHARS_BASE|'_';
fragment PN_CHARS: PN_CHARS_U|'-'|'0'..'9'|'\u00B7'|'\u0300'..'\u036F'|'\u203F'..'\u2040';

// TODO: incomplete; currently only the first two ranges are implemented.
fragment PN_CHARS_BASE: 'A'..'Z'|'a'..'z';
fragment PN_PREFIX: PN_CHARS_BASE ((PN_CHARS|'.')* PN_CHARS)?;

fragment UCHAR: '\\u' HEX HEX HEX HEX | '\\U' HEX HEX HEX HEX HEX HEX HEX HEX;

// TODO: incomplete; currently the ranges in 'x'..'y' are not recognized
fragment HEX: '0'..'9'|'A'..'F'|'a'..'f';



