/*

  That ANTLR grammar is based on the
  W3C specification of Turtle and generates
  an AST from the Turtle input.

*/

grammar ASTBuildingTurtle;


options {
  output=AST;
  language=JavaScript;
}


// Imaginary nodes needed for building an AST. They are needed
// to resolve some non LL(*) situations.
tokens {
  DEF_EMPTY_BLANK;
  DEF_TRIPLES;
  DEF_COLLECTION;
  DEF_BNPL;
}


@members {

  // We´re overriding both methods as we only want to 
  // accept syntactically correct turtle files. If those
  // contain any errors they should fix their files.

  this.mismatch = function(input, ttype, follow){
    ;
  }

  this.recoverFromMismatchedSet = function(input, e, follow){
    ;
  }
}


// Rethrow every exception again instead of error recovery
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

/* 
   // endless loop if active...
   this.reportError = function(ex) {
     console.debug(ex);
   } */
}


turtleDoc
   : WS* statement* -> statement*
   ;

statement
   : directive ws1=WS* dot=DOT ws2=WS* -> directive
   | triples WS* DOT WS* -> triples
   ;

// dec8:
directive
   : prefixID
   | base
   ;

prefixID
   : prefix=PREFIX ws1=WS+ namens=PNAME_NS ws2=WS* iriref=IRIREF -> ^(PREFIX PNAME_NS IRIREF)
   ;

base
   : base1=BASE ws=WS* iriref=IRIREF -> ^(BASE IRIREF)
   ;

triples
    : subject WS* predicateObjectList -> ^(DEF_TRIPLES subject predicateObjectList+)
    | blankNodePropertyList predicateObjectList? -> ^(DEF_TRIPLES blankNodePropertyList predicateObjectList?)
    ;

subject
   : iri|blank
   ;

predicateObjectList
     : verb WS+ objectList WS* (SEMI WS* predicateObjectList?)* -> ^(verb objectList) predicateObjectList*
     ;

verb
    : predicate
    | A
    ;

predicate
   : iri
   ;

objectList
   : object WS* (COMMA WS* object WS*)* -> object+
   ;

object
   : (iri|literal|blankNodePropertyList|blank)
   ;

blank
   : blankNode
   | collection
   ;

// wenn object* ist die regel Non-LL(*)
collection
   : PAREN_ROUND_OPEN WS* (object WS*)* PAREN_ROUND_CLOSE WS* -> ^(DEF_COLLECTION object*)
   ;

blankNode
   : BLANK_NODE_LABEL
   | PAREN_BRACKETS_OPEN WS* PAREN_BRACKETS_CLOSE -> ^(DEF_EMPTY_BLANK)
   ;

blankNodePropertyList
   : PAREN_BRACKETS_OPEN WS* predicateObjectList WS* PAREN_BRACKETS_CLOSE WS* -> ^(DEF_BNPL predicateObjectList+)
   ;

literal
   : rdfLiteral|numericLiteral|booleanLiteral
   ;

booleanLiteral
   : tok=(TRUE|FALSE)
   ;

numericLiteral
   : tok=(INTEGER|DECIMAL|DOUBLE)
   ;

rdfLiteral
   : string^ (LANGTAG|EYES iri)?
   ;

string
   : tok=(STRING_LITERAL_QUOTE|STRING_LITERAL_SINGLE_QUOTE|STRING_LITERAL_LONG_SINGLE_QUOTE|STRING_LITERAL_LONG_QUOTE) 
   ;

iri
   : IRIREF
   | prefixedName
   ;

prefixedName
   : tok=(PNAME_LN|PNAME_NS)
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

INTEGER: ('+'|'-')? '0'..'9'+;
DECIMAL: ('+'|'-')? '0'..'9'* '.' '0'..'9'+;

// zwei subrules fangen mit 0-9 an - woher weiss ANTLR welche er nehmen muss sofern k=1 ist?! 
DOUBLE: ('+'|'-')? ('0'..'9'+ '.' '0'..'9'* EXPONENT|'.' '0'..'9'+ EXPONENT|'0'..'9'+ EXPONENT);

// unicode escapes muessen vierstellig angegeben werden sonst keine parser-generierung
WS: '\u0020'|'\u0009'|'\u000D'|'\u000A';
COMMENT: '#' ( options {greedy=false;}: . )* '\r'+ {this.skip();};

fragment EXPONENT: ('e'|'E') ('+'|'-')? '0'..'9'+;

// backslash muss escaped werden?! checken!!!
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



