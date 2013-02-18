/*jslint white: true vars: true*/
/*global leo*/


define(function() {
  
  // Employs the application´s only global variable. That serves
  // as namespace for all other components in order to minimize 
  // global namespace pollution.
  leo = {};

  "use strict";

  // These definitions are generated automatically by 'make update'
  // If you want to regenerate them remove the right hand side of leo.T with '@@TT@@'
  leo.T = { WS: 4, DOT: 5, PREFIX: 6, PNAME_NS: 7, IRIREF: 8, BASE: 9, SEMI: 10, A: 11, COMMA: 12, PAREN_ROUND_OPEN: 13, PAREN_ROUND_CLOSE: 14, BLANK_NODE_LABEL: 15, PAREN_BRACKETS_OPEN: 16, PAREN_BRACKETS_CLOSE: 17, TRUE: 18, FALSE: 19, INTEGER: 20, DECIMAL: 21, DOUBLE: 22, LANGTAG: 23, EYES: 24, STRING_LITERAL_QUOTE: 25, STRING_LITERAL_SINGLE_QUOTE: 26, STRING_LITERAL_LONG_SINGLE_QUOTE: 27, STRING_LITERAL_LONG_QUOTE: 28, PNAME_LN: 29, UCHAR: 30, PN_PREFIX: 31, PN_LOCAL: 32, ECHAR: 33, PN_CHARS_U: 34, PN_CHARS: 35, EXPONENT: 36, COMMENT: 37, PLX: 38, PERCENT: 39, PN_LOCAL_ESC: 40, HEX: 41, PN_CHARS_BASE: 42 } ;

  // TODO: used?
  if(!Object.create) {
    Object.create = function(o) {
      if(arguments.length > 1) {
        throw new Error("Object.create implementation only accepts the first parameter.");
      }
      function F() {};
      F.prototype = o;
      return new F();
    };
  }

  return leo;
});



