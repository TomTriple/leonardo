// $ANTLR 3.3 Nov 30, 2010 12:50:56 ASTBuildingTurtle.g 2013-01-31 14:58:47

var ASTBuildingTurtleLexer = function(input, state) {
// alternate constructor @todo
// public ASTBuildingTurtleLexer(CharStream input)
// public ASTBuildingTurtleLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){

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

    }).call(this);

    this.dfa24 = new ASTBuildingTurtleLexer.DFA24(this);
    this.dfa30 = new ASTBuildingTurtleLexer.DFA30(this);
    this.dfa37 = new ASTBuildingTurtleLexer.DFA37(this);
    ASTBuildingTurtleLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(ASTBuildingTurtleLexer, {
    EOF: -1,
    DEF_EMPTY_BLANK: 4,
    DEF_TRIPLES: 5,
    DEF_COLLECTION: 6,
    DEF_BNPL: 7,
    WS: 8,
    DOT: 9,
    PREFIX: 10,
    PNAME_NS: 11,
    IRIREF: 12,
    BASE: 13,
    SEMI: 14,
    A: 15,
    COMMA: 16,
    PAREN_ROUND_OPEN: 17,
    PAREN_ROUND_CLOSE: 18,
    BLANK_NODE_LABEL: 19,
    PAREN_BRACKETS_OPEN: 20,
    PAREN_BRACKETS_CLOSE: 21,
    TRUE: 22,
    FALSE: 23,
    INTEGER: 24,
    DECIMAL: 25,
    DOUBLE: 26,
    LANGTAG: 27,
    EYES: 28,
    STRING_LITERAL_QUOTE: 29,
    STRING_LITERAL_SINGLE_QUOTE: 30,
    STRING_LITERAL_LONG_SINGLE_QUOTE: 31,
    STRING_LITERAL_LONG_QUOTE: 32,
    PNAME_LN: 33,
    UCHAR: 34,
    PN_PREFIX: 35,
    PN_LOCAL: 36,
    ECHAR: 37,
    PN_CHARS_U: 38,
    PN_CHARS: 39,
    EXPONENT: 40,
    COMMENT: 41,
    PLX: 42,
    PERCENT: 43,
    PN_LOCAL_ESC: 44,
    HEX: 45,
    PN_CHARS_BASE: 46
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(ASTBuildingTurtleLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    DEF_EMPTY_BLANK : 4,
    DEF_TRIPLES : 5,
    DEF_COLLECTION : 6,
    DEF_BNPL : 7,
    WS : 8,
    DOT : 9,
    PREFIX : 10,
    PNAME_NS : 11,
    IRIREF : 12,
    BASE : 13,
    SEMI : 14,
    A : 15,
    COMMA : 16,
    PAREN_ROUND_OPEN : 17,
    PAREN_ROUND_CLOSE : 18,
    BLANK_NODE_LABEL : 19,
    PAREN_BRACKETS_OPEN : 20,
    PAREN_BRACKETS_CLOSE : 21,
    TRUE : 22,
    FALSE : 23,
    INTEGER : 24,
    DECIMAL : 25,
    DOUBLE : 26,
    LANGTAG : 27,
    EYES : 28,
    STRING_LITERAL_QUOTE : 29,
    STRING_LITERAL_SINGLE_QUOTE : 30,
    STRING_LITERAL_LONG_SINGLE_QUOTE : 31,
    STRING_LITERAL_LONG_QUOTE : 32,
    PNAME_LN : 33,
    UCHAR : 34,
    PN_PREFIX : 35,
    PN_LOCAL : 36,
    ECHAR : 37,
    PN_CHARS_U : 38,
    PN_CHARS : 39,
    EXPONENT : 40,
    COMMENT : 41,
    PLX : 42,
    PERCENT : 43,
    PN_LOCAL_ESC : 44,
    HEX : 45,
    PN_CHARS_BASE : 46,
    getGrammarFileName: function() { return "ASTBuildingTurtle.g"; }
});
org.antlr.lang.augmentObject(ASTBuildingTurtleLexer.prototype, {
    // $ANTLR start TRUE
    mTRUE: function()  {
        try {
            var _type = this.TRUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:168:5: ( 'true' )
            // ASTBuildingTurtle.g:168:7: 'true'
            this.match("true"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TRUE",

    // $ANTLR start FALSE
    mFALSE: function()  {
        try {
            var _type = this.FALSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:169:6: ( 'false' )
            // ASTBuildingTurtle.g:169:8: 'false'
            this.match("false"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FALSE",

    // $ANTLR start DOT
    mDOT: function()  {
        try {
            var _type = this.DOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:170:4: ( '.' )
            // ASTBuildingTurtle.g:170:6: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DOT",

    // $ANTLR start A
    mA: function()  {
        try {
            var _type = this.A;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:171:2: ( 'a' )
            // ASTBuildingTurtle.g:171:4: 'a'
            this.match('a'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "A",

    // $ANTLR start COMMA
    mCOMMA: function()  {
        try {
            var _type = this.COMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:172:6: ( ',' )
            // ASTBuildingTurtle.g:172:8: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMA",

    // $ANTLR start SEMI
    mSEMI: function()  {
        try {
            var _type = this.SEMI;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:173:5: ( ';' )
            // ASTBuildingTurtle.g:173:7: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SEMI",

    // $ANTLR start BASE
    mBASE: function()  {
        try {
            var _type = this.BASE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:174:5: ( '@base' )
            // ASTBuildingTurtle.g:174:7: '@base'
            this.match("@base"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BASE",

    // $ANTLR start PREFIX
    mPREFIX: function()  {
        try {
            var _type = this.PREFIX;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:175:7: ( '@prefix' )
            // ASTBuildingTurtle.g:175:9: '@prefix'
            this.match("@prefix"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PREFIX",

    // $ANTLR start PAREN_ROUND_OPEN
    mPAREN_ROUND_OPEN: function()  {
        try {
            var _type = this.PAREN_ROUND_OPEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:176:17: ( '(' )
            // ASTBuildingTurtle.g:176:19: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PAREN_ROUND_OPEN",

    // $ANTLR start PAREN_ROUND_CLOSE
    mPAREN_ROUND_CLOSE: function()  {
        try {
            var _type = this.PAREN_ROUND_CLOSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:177:18: ( ')' )
            // ASTBuildingTurtle.g:177:20: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PAREN_ROUND_CLOSE",

    // $ANTLR start PAREN_BRACKETS_OPEN
    mPAREN_BRACKETS_OPEN: function()  {
        try {
            var _type = this.PAREN_BRACKETS_OPEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:178:20: ( '[' )
            // ASTBuildingTurtle.g:178:22: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PAREN_BRACKETS_OPEN",

    // $ANTLR start PAREN_BRACKETS_CLOSE
    mPAREN_BRACKETS_CLOSE: function()  {
        try {
            var _type = this.PAREN_BRACKETS_CLOSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:179:21: ( ']' )
            // ASTBuildingTurtle.g:179:23: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PAREN_BRACKETS_CLOSE",

    // $ANTLR start EYES
    mEYES: function()  {
        try {
            var _type = this.EYES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:180:5: ( '^^' )
            // ASTBuildingTurtle.g:180:7: '^^'
            this.match("^^"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EYES",

    // $ANTLR start IRIREF
    mIRIREF: function()  {
        try {
            var _type = this.IRIREF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:181:7: ( '<' (~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' ) | UCHAR )* '>' )
            // ASTBuildingTurtle.g:181:9: '<' (~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' ) | UCHAR )* '>'
            this.match('<'); 
            // ASTBuildingTurtle.g:181:13: (~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' ) | UCHAR )*
            loop1:
            do {
                var alt1=3;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0=='!'||(LA1_0>='#' && LA1_0<=';')||LA1_0=='='||(LA1_0>='?' && LA1_0<='[')||LA1_0==']'||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')||(LA1_0>='~' && LA1_0<='\uFFFF')) ) {
                    alt1=1;
                }
                else if ( (LA1_0=='\\') ) {
                    alt1=2;
                }


                switch (alt1) {
                case 1 :
                    // ASTBuildingTurtle.g:181:14: ~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' )
                    if ( this.input.LA(1)=='!'||(this.input.LA(1)>='#' && this.input.LA(1)<=';')||this.input.LA(1)=='='||(this.input.LA(1)>='?' && this.input.LA(1)<='[')||this.input.LA(1)==']'||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||(this.input.LA(1)>='~' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:181:73: UCHAR
                    this.mUCHAR(); 


                    break;

                default :
                    break loop1;
                }
            } while (true);

            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IRIREF",

    // $ANTLR start PNAME_NS
    mPNAME_NS: function()  {
        try {
            var _type = this.PNAME_NS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:182:9: ( ( PN_PREFIX )? ':' )
            // ASTBuildingTurtle.g:182:11: ( PN_PREFIX )? ':'
            // ASTBuildingTurtle.g:182:11: ( PN_PREFIX )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( ((LA2_0>='A' && LA2_0<='Z')||(LA2_0>='a' && LA2_0<='z')) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // ASTBuildingTurtle.g:182:11: PN_PREFIX
                    this.mPN_PREFIX(); 


                    break;

            }

            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PNAME_NS",

    // $ANTLR start PNAME_LN
    mPNAME_LN: function()  {
        try {
            var _type = this.PNAME_LN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:183:9: ( PNAME_NS PN_LOCAL )
            // ASTBuildingTurtle.g:183:11: PNAME_NS PN_LOCAL
            this.mPNAME_NS(); 
            this.mPN_LOCAL(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PNAME_LN",

    // $ANTLR start STRING_LITERAL_SINGLE_QUOTE
    mSTRING_LITERAL_SINGLE_QUOTE: function()  {
        try {
            var _type = this.STRING_LITERAL_SINGLE_QUOTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:184:28: ( '\\'' (~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\\'' )
            // ASTBuildingTurtle.g:184:30: '\\'' (~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\\''
            this.match('\''); 
            // ASTBuildingTurtle.g:184:35: (~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )*
            loop3:
            do {
                var alt3=4;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='\u0000' && LA3_0<='\t')||(LA3_0>='\u000B' && LA3_0<='\f')||(LA3_0>='\u000E' && LA3_0<='&')||(LA3_0>='(' && LA3_0<='[')||(LA3_0>=']' && LA3_0<='\uFFFF')) ) {
                    alt3=1;
                }
                else if ( (LA3_0=='\\') ) {
                    var LA3_3 = this.input.LA(2);

                    if ( (LA3_3=='\"'||LA3_3=='\''||LA3_3=='\\'||LA3_3=='b'||LA3_3=='f'||LA3_3=='n'||LA3_3=='r'||LA3_3=='t') ) {
                        alt3=2;
                    }
                    else if ( (LA3_3=='U'||LA3_3=='u') ) {
                        alt3=3;
                    }


                }


                switch (alt3) {
                case 1 :
                    // ASTBuildingTurtle.g:184:36: ~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:184:75: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:184:81: UCHAR
                    this.mUCHAR(); 


                    break;

                default :
                    break loop3;
                }
            } while (true);

            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING_LITERAL_SINGLE_QUOTE",

    // $ANTLR start STRING_LITERAL_QUOTE
    mSTRING_LITERAL_QUOTE: function()  {
        try {
            var _type = this.STRING_LITERAL_QUOTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:185:21: ( '\"' (~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\"' )
            // ASTBuildingTurtle.g:185:23: '\"' (~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\"'
            this.match('\"'); 
            // ASTBuildingTurtle.g:185:27: (~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )*
            loop4:
            do {
                var alt4=4;
                var LA4_0 = this.input.LA(1);

                if ( ((LA4_0>='\u0000' && LA4_0<='\t')||(LA4_0>='\u000B' && LA4_0<='\f')||(LA4_0>='\u000E' && LA4_0<='!')||(LA4_0>='#' && LA4_0<='[')||(LA4_0>=']' && LA4_0<='\uFFFF')) ) {
                    alt4=1;
                }
                else if ( (LA4_0=='\\') ) {
                    var LA4_3 = this.input.LA(2);

                    if ( (LA4_3=='\"'||LA4_3=='\''||LA4_3=='\\'||LA4_3=='b'||LA4_3=='f'||LA4_3=='n'||LA4_3=='r'||LA4_3=='t') ) {
                        alt4=2;
                    }
                    else if ( (LA4_3=='U'||LA4_3=='u') ) {
                        alt4=3;
                    }


                }


                switch (alt4) {
                case 1 :
                    // ASTBuildingTurtle.g:185:28: ~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:185:67: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:185:73: UCHAR
                    this.mUCHAR(); 


                    break;

                default :
                    break loop4;
                }
            } while (true);

            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING_LITERAL_QUOTE",

    // $ANTLR start STRING_LITERAL_LONG_SINGLE_QUOTE
    mSTRING_LITERAL_LONG_SINGLE_QUOTE: function()  {
        try {
            var _type = this.STRING_LITERAL_LONG_SINGLE_QUOTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:186:33: ( '\\'\\'\\'' ( ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' ) | ECHAR | UCHAR )* '\\'\\'\\'' )
            // ASTBuildingTurtle.g:186:35: '\\'\\'\\'' ( ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' ) | ECHAR | UCHAR )* '\\'\\'\\''
            this.match("'''"); 

            // ASTBuildingTurtle.g:186:44: ( ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' ) | ECHAR | UCHAR )*
            loop6:
            do {
                var alt6=4;
                var LA6_0 = this.input.LA(1);

                if ( (LA6_0=='\'') ) {
                    var LA6_1 = this.input.LA(2);

                    if ( (LA6_1=='\'') ) {
                        var LA6_4 = this.input.LA(3);

                        if ( ((LA6_4>='\u0000' && LA6_4<='&')||(LA6_4>='(' && LA6_4<='[')||(LA6_4>=']' && LA6_4<='\uFFFF')) ) {
                            alt6=1;
                        }


                    }
                    else if ( ((LA6_1>='\u0000' && LA6_1<='&')||(LA6_1>='(' && LA6_1<='[')||(LA6_1>=']' && LA6_1<='\uFFFF')) ) {
                        alt6=1;
                    }


                }
                else if ( ((LA6_0>='\u0000' && LA6_0<='&')||(LA6_0>='(' && LA6_0<='[')||(LA6_0>=']' && LA6_0<='\uFFFF')) ) {
                    alt6=1;
                }
                else if ( (LA6_0=='\\') ) {
                    var LA6_3 = this.input.LA(2);

                    if ( (LA6_3=='\"'||LA6_3=='\''||LA6_3=='\\'||LA6_3=='b'||LA6_3=='f'||LA6_3=='n'||LA6_3=='r'||LA6_3=='t') ) {
                        alt6=2;
                    }
                    else if ( (LA6_3=='U'||LA6_3=='u') ) {
                        alt6=3;
                    }


                }


                switch (alt6) {
                case 1 :
                    // ASTBuildingTurtle.g:186:45: ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' )
                    // ASTBuildingTurtle.g:186:45: ( '\\'' | '\\'\\'' )?
                    var alt5=3;
                    var LA5_0 = this.input.LA(1);

                    if ( (LA5_0=='\'') ) {
                        var LA5_1 = this.input.LA(2);

                        if ( (LA5_1=='\'') ) {
                            alt5=2;
                        }
                        else if ( ((LA5_1>='\u0000' && LA5_1<='&')||(LA5_1>='(' && LA5_1<='[')||(LA5_1>=']' && LA5_1<='\uFFFF')) ) {
                            alt5=1;
                        }
                    }
                    switch (alt5) {
                        case 1 :
                            // ASTBuildingTurtle.g:186:46: '\\''
                            this.match('\''); 


                            break;
                        case 2 :
                            // ASTBuildingTurtle.g:186:51: '\\'\\''
                            this.match("''"); 



                            break;

                    }

                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:186:73: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:186:79: UCHAR
                    this.mUCHAR(); 


                    break;

                default :
                    break loop6;
                }
            } while (true);

            this.match("'''"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING_LITERAL_LONG_SINGLE_QUOTE",

    // $ANTLR start STRING_LITERAL_LONG_QUOTE
    mSTRING_LITERAL_LONG_QUOTE: function()  {
        try {
            var _type = this.STRING_LITERAL_LONG_QUOTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:187:26: ( '\"\"\"' ( ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' ) | ECHAR | UCHAR )* '\"\"\"' )
            // ASTBuildingTurtle.g:187:28: '\"\"\"' ( ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' ) | ECHAR | UCHAR )* '\"\"\"'
            this.match("\"\"\""); 

            // ASTBuildingTurtle.g:187:34: ( ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' ) | ECHAR | UCHAR )*
            loop8:
            do {
                var alt8=4;
                var LA8_0 = this.input.LA(1);

                if ( (LA8_0=='\"') ) {
                    var LA8_1 = this.input.LA(2);

                    if ( (LA8_1=='\"') ) {
                        var LA8_4 = this.input.LA(3);

                        if ( ((LA8_4>='\u0000' && LA8_4<='!')||(LA8_4>='#' && LA8_4<='[')||(LA8_4>=']' && LA8_4<='\uFFFF')) ) {
                            alt8=1;
                        }


                    }
                    else if ( ((LA8_1>='\u0000' && LA8_1<='!')||(LA8_1>='#' && LA8_1<='[')||(LA8_1>=']' && LA8_1<='\uFFFF')) ) {
                        alt8=1;
                    }


                }
                else if ( ((LA8_0>='\u0000' && LA8_0<='!')||(LA8_0>='#' && LA8_0<='[')||(LA8_0>=']' && LA8_0<='\uFFFF')) ) {
                    alt8=1;
                }
                else if ( (LA8_0=='\\') ) {
                    var LA8_3 = this.input.LA(2);

                    if ( (LA8_3=='\"'||LA8_3=='\''||LA8_3=='\\'||LA8_3=='b'||LA8_3=='f'||LA8_3=='n'||LA8_3=='r'||LA8_3=='t') ) {
                        alt8=2;
                    }
                    else if ( (LA8_3=='U'||LA8_3=='u') ) {
                        alt8=3;
                    }


                }


                switch (alt8) {
                case 1 :
                    // ASTBuildingTurtle.g:187:35: ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' )
                    // ASTBuildingTurtle.g:187:35: ( '\"' | '\"\"' )?
                    var alt7=3;
                    var LA7_0 = this.input.LA(1);

                    if ( (LA7_0=='\"') ) {
                        var LA7_1 = this.input.LA(2);

                        if ( (LA7_1=='\"') ) {
                            alt7=2;
                        }
                        else if ( ((LA7_1>='\u0000' && LA7_1<='!')||(LA7_1>='#' && LA7_1<='[')||(LA7_1>=']' && LA7_1<='\uFFFF')) ) {
                            alt7=1;
                        }
                    }
                    switch (alt7) {
                        case 1 :
                            // ASTBuildingTurtle.g:187:36: '\"'
                            this.match('\"'); 


                            break;
                        case 2 :
                            // ASTBuildingTurtle.g:187:40: '\"\"'
                            this.match("\"\""); 



                            break;

                    }

                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:187:59: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:187:65: UCHAR
                    this.mUCHAR(); 


                    break;

                default :
                    break loop8;
                }
            } while (true);

            this.match("\"\"\""); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING_LITERAL_LONG_QUOTE",

    // $ANTLR start LANGTAG
    mLANGTAG: function()  {
        try {
            var _type = this.LANGTAG;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:188:8: ( '@' ( 'a' .. 'z' | 'A' .. 'Z' )+ ( '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+ )* )
            // ASTBuildingTurtle.g:188:10: '@' ( 'a' .. 'z' | 'A' .. 'Z' )+ ( '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+ )*
            this.match('@'); 
            // ASTBuildingTurtle.g:188:14: ( 'a' .. 'z' | 'A' .. 'Z' )+
            var cnt9=0;
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>='A' && LA9_0<='Z')||(LA9_0>='a' && LA9_0<='z')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // ASTBuildingTurtle.g:
                    if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt9 >= 1 ) {
                        break loop9;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(9, this.input);
                        throw eee;
                }
                cnt9++;
            } while (true);

            // ASTBuildingTurtle.g:188:35: ( '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+ )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0=='-') ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // ASTBuildingTurtle.g:188:36: '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+
                    this.match('-'); 
                    // ASTBuildingTurtle.g:188:40: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+
                    var cnt10=0;
                    loop10:
                    do {
                        var alt10=2;
                        var LA10_0 = this.input.LA(1);

                        if ( ((LA10_0>='0' && LA10_0<='9')||(LA10_0>='A' && LA10_0<='Z')||(LA10_0>='a' && LA10_0<='z')) ) {
                            alt10=1;
                        }


                        switch (alt10) {
                        case 1 :
                            // ASTBuildingTurtle.g:
                            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            if ( cnt10 >= 1 ) {
                                break loop10;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(10, this.input);
                                throw eee;
                        }
                        cnt10++;
                    } while (true);



                    break;

                default :
                    break loop11;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LANGTAG",

    // $ANTLR start BLANK_NODE_LABEL
    mBLANK_NODE_LABEL: function()  {
        try {
            var _type = this.BLANK_NODE_LABEL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:189:17: ( '_:' ( PN_CHARS_U | '0' .. '9' ) ( ( PN_CHARS | '.' )* PN_CHARS )? )
            // ASTBuildingTurtle.g:189:19: '_:' ( PN_CHARS_U | '0' .. '9' ) ( ( PN_CHARS | '.' )* PN_CHARS )?
            this.match("_:"); 

            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // ASTBuildingTurtle.g:189:46: ( ( PN_CHARS | '.' )* PN_CHARS )?
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( ((LA13_0>='-' && LA13_0<='.')||(LA13_0>='0' && LA13_0<='9')||(LA13_0>='A' && LA13_0<='Z')||LA13_0=='_'||(LA13_0>='a' && LA13_0<='z')||LA13_0=='\u00B7'||(LA13_0>='\u0300' && LA13_0<='\u036F')||(LA13_0>='\u203F' && LA13_0<='\u2040')) ) {
                alt13=1;
            }
            switch (alt13) {
                case 1 :
                    // ASTBuildingTurtle.g:189:47: ( PN_CHARS | '.' )* PN_CHARS
                    // ASTBuildingTurtle.g:189:47: ( PN_CHARS | '.' )*
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( (LA12_0=='-'||(LA12_0>='0' && LA12_0<='9')||(LA12_0>='A' && LA12_0<='Z')||LA12_0=='_'||(LA12_0>='a' && LA12_0<='z')||LA12_0=='\u00B7'||(LA12_0>='\u0300' && LA12_0<='\u036F')||(LA12_0>='\u203F' && LA12_0<='\u2040')) ) {
                            var LA12_1 = this.input.LA(2);

                            if ( ((LA12_1>='-' && LA12_1<='.')||(LA12_1>='0' && LA12_1<='9')||(LA12_1>='A' && LA12_1<='Z')||LA12_1=='_'||(LA12_1>='a' && LA12_1<='z')||LA12_1=='\u00B7'||(LA12_1>='\u0300' && LA12_1<='\u036F')||(LA12_1>='\u203F' && LA12_1<='\u2040')) ) {
                                alt12=1;
                            }


                        }
                        else if ( (LA12_0=='.') ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // ASTBuildingTurtle.g:
                            if ( (this.input.LA(1)>='-' && this.input.LA(1)<='.')||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||this.input.LA(1)=='\u00B7'||(this.input.LA(1)>='\u0300' && this.input.LA(1)<='\u036F')||(this.input.LA(1)>='\u203F' && this.input.LA(1)<='\u2040') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop12;
                        }
                    } while (true);

                    this.mPN_CHARS(); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BLANK_NODE_LABEL",

    // $ANTLR start INTEGER
    mINTEGER: function()  {
        try {
            var _type = this.INTEGER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:191:8: ( ( '+' | '-' )? ( '0' .. '9' )+ )
            // ASTBuildingTurtle.g:191:10: ( '+' | '-' )? ( '0' .. '9' )+
            // ASTBuildingTurtle.g:191:10: ( '+' | '-' )?
            var alt14=2;
            var LA14_0 = this.input.LA(1);

            if ( (LA14_0=='+'||LA14_0=='-') ) {
                alt14=1;
            }
            switch (alt14) {
                case 1 :
                    // ASTBuildingTurtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // ASTBuildingTurtle.g:191:21: ( '0' .. '9' )+
            var cnt15=0;
            loop15:
            do {
                var alt15=2;
                var LA15_0 = this.input.LA(1);

                if ( ((LA15_0>='0' && LA15_0<='9')) ) {
                    alt15=1;
                }


                switch (alt15) {
                case 1 :
                    // ASTBuildingTurtle.g:191:21: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt15 >= 1 ) {
                        break loop15;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(15, this.input);
                        throw eee;
                }
                cnt15++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INTEGER",

    // $ANTLR start DECIMAL
    mDECIMAL: function()  {
        try {
            var _type = this.DECIMAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:192:8: ( ( '+' | '-' )? ( '0' .. '9' )* '.' ( '0' .. '9' )+ )
            // ASTBuildingTurtle.g:192:10: ( '+' | '-' )? ( '0' .. '9' )* '.' ( '0' .. '9' )+
            // ASTBuildingTurtle.g:192:10: ( '+' | '-' )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0=='+'||LA16_0=='-') ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // ASTBuildingTurtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // ASTBuildingTurtle.g:192:21: ( '0' .. '9' )*
            loop17:
            do {
                var alt17=2;
                var LA17_0 = this.input.LA(1);

                if ( ((LA17_0>='0' && LA17_0<='9')) ) {
                    alt17=1;
                }


                switch (alt17) {
                case 1 :
                    // ASTBuildingTurtle.g:192:21: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    break loop17;
                }
            } while (true);

            this.match('.'); 
            // ASTBuildingTurtle.g:192:35: ( '0' .. '9' )+
            var cnt18=0;
            loop18:
            do {
                var alt18=2;
                var LA18_0 = this.input.LA(1);

                if ( ((LA18_0>='0' && LA18_0<='9')) ) {
                    alt18=1;
                }


                switch (alt18) {
                case 1 :
                    // ASTBuildingTurtle.g:192:35: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt18 >= 1 ) {
                        break loop18;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(18, this.input);
                        throw eee;
                }
                cnt18++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DECIMAL",

    // $ANTLR start DOUBLE
    mDOUBLE: function()  {
        try {
            var _type = this.DOUBLE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:195:7: ( ( '+' | '-' )? ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT ) )
            // ASTBuildingTurtle.g:195:9: ( '+' | '-' )? ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT )
            // ASTBuildingTurtle.g:195:9: ( '+' | '-' )?
            var alt19=2;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0=='+'||LA19_0=='-') ) {
                alt19=1;
            }
            switch (alt19) {
                case 1 :
                    // ASTBuildingTurtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // ASTBuildingTurtle.g:195:20: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT )
            var alt24=3;
            alt24 = this.dfa24.predict(this.input);
            switch (alt24) {
                case 1 :
                    // ASTBuildingTurtle.g:195:21: ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT
                    // ASTBuildingTurtle.g:195:21: ( '0' .. '9' )+
                    var cnt20=0;
                    loop20:
                    do {
                        var alt20=2;
                        var LA20_0 = this.input.LA(1);

                        if ( ((LA20_0>='0' && LA20_0<='9')) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                        case 1 :
                            // ASTBuildingTurtle.g:195:21: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt20 >= 1 ) {
                                break loop20;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(20, this.input);
                                throw eee;
                        }
                        cnt20++;
                    } while (true);

                    this.match('.'); 
                    // ASTBuildingTurtle.g:195:35: ( '0' .. '9' )*
                    loop21:
                    do {
                        var alt21=2;
                        var LA21_0 = this.input.LA(1);

                        if ( ((LA21_0>='0' && LA21_0<='9')) ) {
                            alt21=1;
                        }


                        switch (alt21) {
                        case 1 :
                            // ASTBuildingTurtle.g:195:35: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop21;
                        }
                    } while (true);

                    this.mEXPONENT(); 


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:195:54: '.' ( '0' .. '9' )+ EXPONENT
                    this.match('.'); 
                    // ASTBuildingTurtle.g:195:58: ( '0' .. '9' )+
                    var cnt22=0;
                    loop22:
                    do {
                        var alt22=2;
                        var LA22_0 = this.input.LA(1);

                        if ( ((LA22_0>='0' && LA22_0<='9')) ) {
                            alt22=1;
                        }


                        switch (alt22) {
                        case 1 :
                            // ASTBuildingTurtle.g:195:58: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt22 >= 1 ) {
                                break loop22;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(22, this.input);
                                throw eee;
                        }
                        cnt22++;
                    } while (true);

                    this.mEXPONENT(); 


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:195:77: ( '0' .. '9' )+ EXPONENT
                    // ASTBuildingTurtle.g:195:77: ( '0' .. '9' )+
                    var cnt23=0;
                    loop23:
                    do {
                        var alt23=2;
                        var LA23_0 = this.input.LA(1);

                        if ( ((LA23_0>='0' && LA23_0<='9')) ) {
                            alt23=1;
                        }


                        switch (alt23) {
                        case 1 :
                            // ASTBuildingTurtle.g:195:77: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt23 >= 1 ) {
                                break loop23;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(23, this.input);
                                throw eee;
                        }
                        cnt23++;
                    } while (true);

                    this.mEXPONENT(); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DOUBLE",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:198:3: ( '\\u0020' | '\\u0009' | '\\u000D' | '\\u000A' )
            // ASTBuildingTurtle.g:
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ASTBuildingTurtle.g:199:8: ( '#' ( options {greedy=false; } : . )* ( '\\r' )+ )
            // ASTBuildingTurtle.g:199:10: '#' ( options {greedy=false; } : . )* ( '\\r' )+
            this.match('#'); 
            // ASTBuildingTurtle.g:199:14: ( options {greedy=false; } : . )*
            loop25:
            do {
                var alt25=2;
                var LA25_0 = this.input.LA(1);

                if ( (LA25_0=='\r') ) {
                    alt25=2;
                }
                else if ( ((LA25_0>='\u0000' && LA25_0<='\f')||(LA25_0>='\u000E' && LA25_0<='\uFFFF')) ) {
                    alt25=1;
                }


                switch (alt25) {
                case 1 :
                    // ASTBuildingTurtle.g:199:41: .
                    this.matchAny(); 


                    break;

                default :
                    break loop25;
                }
            } while (true);

            // ASTBuildingTurtle.g:199:46: ( '\\r' )+
            var cnt26=0;
            loop26:
            do {
                var alt26=2;
                var LA26_0 = this.input.LA(1);

                if ( (LA26_0=='\r') ) {
                    alt26=1;
                }


                switch (alt26) {
                case 1 :
                    // ASTBuildingTurtle.g:199:46: '\\r'
                    this.match('\r'); 


                    break;

                default :
                    if ( cnt26 >= 1 ) {
                        break loop26;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(26, this.input);
                        throw eee;
                }
                cnt26++;
            } while (true);

            this.skip();



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start EXPONENT
    mEXPONENT: function()  {
        try {
            // ASTBuildingTurtle.g:201:18: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // ASTBuildingTurtle.g:201:20: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // ASTBuildingTurtle.g:201:30: ( '+' | '-' )?
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0=='+'||LA27_0=='-') ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // ASTBuildingTurtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // ASTBuildingTurtle.g:201:41: ( '0' .. '9' )+
            var cnt28=0;
            loop28:
            do {
                var alt28=2;
                var LA28_0 = this.input.LA(1);

                if ( ((LA28_0>='0' && LA28_0<='9')) ) {
                    alt28=1;
                }


                switch (alt28) {
                case 1 :
                    // ASTBuildingTurtle.g:201:41: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt28 >= 1 ) {
                        break loop28;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(28, this.input);
                        throw eee;
                }
                cnt28++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "EXPONENT",

    // $ANTLR start ECHAR
    mECHAR: function()  {
        try {
            // ASTBuildingTurtle.g:204:15: ( '\\\\' ( 't' | 'b' | 'n' | 'r' | 'f' | '\\\\' | '\"' | '\\'' ) )
            // ASTBuildingTurtle.g:204:17: '\\\\' ( 't' | 'b' | 'n' | 'r' | 'f' | '\\\\' | '\"' | '\\'' )
            this.match('\\'); 
            if ( this.input.LA(1)=='\"'||this.input.LA(1)=='\''||this.input.LA(1)=='\\'||this.input.LA(1)=='b'||this.input.LA(1)=='f'||this.input.LA(1)=='n'||this.input.LA(1)=='r'||this.input.LA(1)=='t' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "ECHAR",

    // $ANTLR start PN_LOCAL
    mPN_LOCAL: function()  {
        try {
            // ASTBuildingTurtle.g:205:18: ( ( PN_CHARS_U | '0' .. '9' | PLX ) ( ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX ) )? )
            // ASTBuildingTurtle.g:205:20: ( PN_CHARS_U | '0' .. '9' | PLX ) ( ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX ) )?
            // ASTBuildingTurtle.g:205:20: ( PN_CHARS_U | '0' .. '9' | PLX )
            var alt29=3;
            switch ( this.input.LA(1) ) {
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case 'G':
            case 'H':
            case 'I':
            case 'J':
            case 'K':
            case 'L':
            case 'M':
            case 'N':
            case 'O':
            case 'P':
            case 'Q':
            case 'R':
            case 'S':
            case 'T':
            case 'U':
            case 'V':
            case 'W':
            case 'X':
            case 'Y':
            case 'Z':
            case '_':
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case 'g':
            case 'h':
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'o':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                alt29=1;
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                alt29=2;
                break;
            case '%':
            case '\\':
                alt29=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 29, 0, this.input);

                throw nvae;
            }

            switch (alt29) {
                case 1 :
                    // ASTBuildingTurtle.g:205:21: PN_CHARS_U
                    this.mPN_CHARS_U(); 


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:205:32: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:205:41: PLX
                    this.mPLX(); 


                    break;

            }

            // ASTBuildingTurtle.g:205:46: ( ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX ) )?
            var alt32=2;
            var LA32_0 = this.input.LA(1);

            if ( (LA32_0=='%'||(LA32_0>='-' && LA32_0<='.')||(LA32_0>='0' && LA32_0<='9')||(LA32_0>='A' && LA32_0<='Z')||LA32_0=='\\'||LA32_0=='_'||(LA32_0>='a' && LA32_0<='z')||LA32_0=='\u00B7'||(LA32_0>='\u0300' && LA32_0<='\u036F')||(LA32_0>='\u203F' && LA32_0<='\u2040')) ) {
                alt32=1;
            }
            switch (alt32) {
                case 1 :
                    // ASTBuildingTurtle.g:205:47: ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX )
                    // ASTBuildingTurtle.g:205:47: ( PN_CHARS | '.' | PLX )*
                    loop30:
                    do {
                        var alt30=4;
                        alt30 = this.dfa30.predict(this.input);
                        switch (alt30) {
                        case 1 :
                            // ASTBuildingTurtle.g:205:48: PN_CHARS
                            this.mPN_CHARS(); 


                            break;
                        case 2 :
                            // ASTBuildingTurtle.g:205:57: '.'
                            this.match('.'); 


                            break;
                        case 3 :
                            // ASTBuildingTurtle.g:205:61: PLX
                            this.mPLX(); 


                            break;

                        default :
                            break loop30;
                        }
                    } while (true);

                    // ASTBuildingTurtle.g:205:67: ( PN_CHARS | PLX )
                    var alt31=2;
                    var LA31_0 = this.input.LA(1);

                    if ( (LA31_0=='-'||(LA31_0>='0' && LA31_0<='9')||(LA31_0>='A' && LA31_0<='Z')||LA31_0=='_'||(LA31_0>='a' && LA31_0<='z')||LA31_0=='\u00B7'||(LA31_0>='\u0300' && LA31_0<='\u036F')||(LA31_0>='\u203F' && LA31_0<='\u2040')) ) {
                        alt31=1;
                    }
                    else if ( (LA31_0=='%'||LA31_0=='\\') ) {
                        alt31=2;
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 31, 0, this.input);

                        throw nvae;
                    }
                    switch (alt31) {
                        case 1 :
                            // ASTBuildingTurtle.g:205:68: PN_CHARS
                            this.mPN_CHARS(); 


                            break;
                        case 2 :
                            // ASTBuildingTurtle.g:205:77: PLX
                            this.mPLX(); 


                            break;

                    }



                    break;

            }




        }
        finally {
        }
    },
    // $ANTLR end "PN_LOCAL",

    // $ANTLR start PLX
    mPLX: function()  {
        try {
            // ASTBuildingTurtle.g:206:13: ( PERCENT | PN_LOCAL_ESC )
            var alt33=2;
            var LA33_0 = this.input.LA(1);

            if ( (LA33_0=='%') ) {
                alt33=1;
            }
            else if ( (LA33_0=='\\') ) {
                alt33=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                throw nvae;
            }
            switch (alt33) {
                case 1 :
                    // ASTBuildingTurtle.g:206:15: PERCENT
                    this.mPERCENT(); 


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:206:23: PN_LOCAL_ESC
                    this.mPN_LOCAL_ESC(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "PLX",

    // $ANTLR start PERCENT
    mPERCENT: function()  {
        try {
            // ASTBuildingTurtle.g:207:17: ( '%' HEX HEX )
            // ASTBuildingTurtle.g:207:19: '%' HEX HEX
            this.match('%'); 
            this.mHEX(); 
            this.mHEX(); 



        }
        finally {
        }
    },
    // $ANTLR end "PERCENT",

    // $ANTLR start PN_LOCAL_ESC
    mPN_LOCAL_ESC: function()  {
        try {
            // ASTBuildingTurtle.g:209:22: ( '\\\\' ( '_' | '~' | '.' | '-' | '!' | '$' | '&' | '\\'' | '(' | ')' | '*' | '+' | ',' | ';' | '=' | '/' | '?' | '#' | '@' | '%' ) )
            // ASTBuildingTurtle.g:209:24: '\\\\' ( '_' | '~' | '.' | '-' | '!' | '$' | '&' | '\\'' | '(' | ')' | '*' | '+' | ',' | ';' | '=' | '/' | '?' | '#' | '@' | '%' )
            this.match('\\'); 
            if ( this.input.LA(1)=='!'||(this.input.LA(1)>='#' && this.input.LA(1)<='/')||this.input.LA(1)==';'||this.input.LA(1)=='='||(this.input.LA(1)>='?' && this.input.LA(1)<='@')||this.input.LA(1)=='_'||this.input.LA(1)=='~' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "PN_LOCAL_ESC",

    // $ANTLR start PN_CHARS_U
    mPN_CHARS_U: function()  {
        try {
            // ASTBuildingTurtle.g:213:20: ( PN_CHARS_BASE | '_' )
            // ASTBuildingTurtle.g:
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "PN_CHARS_U",

    // $ANTLR start PN_CHARS
    mPN_CHARS: function()  {
        try {
            // ASTBuildingTurtle.g:214:18: ( PN_CHARS_U | '-' | '0' .. '9' | '\\u00B7' | '\\u0300' .. '\\u036F' | '\\u203F' .. '\\u2040' )
            // ASTBuildingTurtle.g:
            if ( this.input.LA(1)=='-'||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||this.input.LA(1)=='\u00B7'||(this.input.LA(1)>='\u0300' && this.input.LA(1)<='\u036F')||(this.input.LA(1)>='\u203F' && this.input.LA(1)<='\u2040') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "PN_CHARS",

    // $ANTLR start PN_CHARS_BASE
    mPN_CHARS_BASE: function()  {
        try {
            // ASTBuildingTurtle.g:217:23: ( 'A' .. 'Z' | 'a' .. 'z' )
            // ASTBuildingTurtle.g:
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "PN_CHARS_BASE",

    // $ANTLR start PN_PREFIX
    mPN_PREFIX: function()  {
        try {
            // ASTBuildingTurtle.g:218:19: ( PN_CHARS_BASE ( ( PN_CHARS | '.' )* PN_CHARS )? )
            // ASTBuildingTurtle.g:218:21: PN_CHARS_BASE ( ( PN_CHARS | '.' )* PN_CHARS )?
            this.mPN_CHARS_BASE(); 
            // ASTBuildingTurtle.g:218:35: ( ( PN_CHARS | '.' )* PN_CHARS )?
            var alt35=2;
            var LA35_0 = this.input.LA(1);

            if ( ((LA35_0>='-' && LA35_0<='.')||(LA35_0>='0' && LA35_0<='9')||(LA35_0>='A' && LA35_0<='Z')||LA35_0=='_'||(LA35_0>='a' && LA35_0<='z')||LA35_0=='\u00B7'||(LA35_0>='\u0300' && LA35_0<='\u036F')||(LA35_0>='\u203F' && LA35_0<='\u2040')) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // ASTBuildingTurtle.g:218:36: ( PN_CHARS | '.' )* PN_CHARS
                    // ASTBuildingTurtle.g:218:36: ( PN_CHARS | '.' )*
                    loop34:
                    do {
                        var alt34=2;
                        var LA34_0 = this.input.LA(1);

                        if ( (LA34_0=='-'||(LA34_0>='0' && LA34_0<='9')||(LA34_0>='A' && LA34_0<='Z')||LA34_0=='_'||(LA34_0>='a' && LA34_0<='z')||LA34_0=='\u00B7'||(LA34_0>='\u0300' && LA34_0<='\u036F')||(LA34_0>='\u203F' && LA34_0<='\u2040')) ) {
                            var LA34_1 = this.input.LA(2);

                            if ( ((LA34_1>='-' && LA34_1<='.')||(LA34_1>='0' && LA34_1<='9')||(LA34_1>='A' && LA34_1<='Z')||LA34_1=='_'||(LA34_1>='a' && LA34_1<='z')||LA34_1=='\u00B7'||(LA34_1>='\u0300' && LA34_1<='\u036F')||(LA34_1>='\u203F' && LA34_1<='\u2040')) ) {
                                alt34=1;
                            }


                        }
                        else if ( (LA34_0=='.') ) {
                            alt34=1;
                        }


                        switch (alt34) {
                        case 1 :
                            // ASTBuildingTurtle.g:
                            if ( (this.input.LA(1)>='-' && this.input.LA(1)<='.')||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||this.input.LA(1)=='\u00B7'||(this.input.LA(1)>='\u0300' && this.input.LA(1)<='\u036F')||(this.input.LA(1)>='\u203F' && this.input.LA(1)<='\u2040') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop34;
                        }
                    } while (true);

                    this.mPN_CHARS(); 


                    break;

            }




        }
        finally {
        }
    },
    // $ANTLR end "PN_PREFIX",

    // $ANTLR start UCHAR
    mUCHAR: function()  {
        try {
            // ASTBuildingTurtle.g:220:15: ( '\\\\u' HEX HEX HEX HEX | '\\\\U' HEX HEX HEX HEX HEX HEX HEX HEX )
            var alt36=2;
            var LA36_0 = this.input.LA(1);

            if ( (LA36_0=='\\') ) {
                var LA36_1 = this.input.LA(2);

                if ( (LA36_1=='u') ) {
                    alt36=1;
                }
                else if ( (LA36_1=='U') ) {
                    alt36=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 36, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 36, 0, this.input);

                throw nvae;
            }
            switch (alt36) {
                case 1 :
                    // ASTBuildingTurtle.g:220:17: '\\\\u' HEX HEX HEX HEX
                    this.match("\\u"); 

                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:220:41: '\\\\U' HEX HEX HEX HEX HEX HEX HEX HEX
                    this.match("\\U"); 

                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "UCHAR",

    // $ANTLR start HEX
    mHEX: function()  {
        try {
            // ASTBuildingTurtle.g:223:13: ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' )
            // ASTBuildingTurtle.g:
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HEX",

    mTokens: function() {
        // ASTBuildingTurtle.g:1:8: ( TRUE | FALSE | DOT | A | COMMA | SEMI | BASE | PREFIX | PAREN_ROUND_OPEN | PAREN_ROUND_CLOSE | PAREN_BRACKETS_OPEN | PAREN_BRACKETS_CLOSE | EYES | IRIREF | PNAME_NS | PNAME_LN | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE | LANGTAG | BLANK_NODE_LABEL | INTEGER | DECIMAL | DOUBLE | WS | COMMENT )
        var alt37=27;
        alt37 = this.dfa37.predict(this.input);
        switch (alt37) {
            case 1 :
                // ASTBuildingTurtle.g:1:10: TRUE
                this.mTRUE(); 


                break;
            case 2 :
                // ASTBuildingTurtle.g:1:15: FALSE
                this.mFALSE(); 


                break;
            case 3 :
                // ASTBuildingTurtle.g:1:21: DOT
                this.mDOT(); 


                break;
            case 4 :
                // ASTBuildingTurtle.g:1:25: A
                this.mA(); 


                break;
            case 5 :
                // ASTBuildingTurtle.g:1:27: COMMA
                this.mCOMMA(); 


                break;
            case 6 :
                // ASTBuildingTurtle.g:1:33: SEMI
                this.mSEMI(); 


                break;
            case 7 :
                // ASTBuildingTurtle.g:1:38: BASE
                this.mBASE(); 


                break;
            case 8 :
                // ASTBuildingTurtle.g:1:43: PREFIX
                this.mPREFIX(); 


                break;
            case 9 :
                // ASTBuildingTurtle.g:1:50: PAREN_ROUND_OPEN
                this.mPAREN_ROUND_OPEN(); 


                break;
            case 10 :
                // ASTBuildingTurtle.g:1:67: PAREN_ROUND_CLOSE
                this.mPAREN_ROUND_CLOSE(); 


                break;
            case 11 :
                // ASTBuildingTurtle.g:1:85: PAREN_BRACKETS_OPEN
                this.mPAREN_BRACKETS_OPEN(); 


                break;
            case 12 :
                // ASTBuildingTurtle.g:1:105: PAREN_BRACKETS_CLOSE
                this.mPAREN_BRACKETS_CLOSE(); 


                break;
            case 13 :
                // ASTBuildingTurtle.g:1:126: EYES
                this.mEYES(); 


                break;
            case 14 :
                // ASTBuildingTurtle.g:1:131: IRIREF
                this.mIRIREF(); 


                break;
            case 15 :
                // ASTBuildingTurtle.g:1:138: PNAME_NS
                this.mPNAME_NS(); 


                break;
            case 16 :
                // ASTBuildingTurtle.g:1:147: PNAME_LN
                this.mPNAME_LN(); 


                break;
            case 17 :
                // ASTBuildingTurtle.g:1:156: STRING_LITERAL_SINGLE_QUOTE
                this.mSTRING_LITERAL_SINGLE_QUOTE(); 


                break;
            case 18 :
                // ASTBuildingTurtle.g:1:184: STRING_LITERAL_QUOTE
                this.mSTRING_LITERAL_QUOTE(); 


                break;
            case 19 :
                // ASTBuildingTurtle.g:1:205: STRING_LITERAL_LONG_SINGLE_QUOTE
                this.mSTRING_LITERAL_LONG_SINGLE_QUOTE(); 


                break;
            case 20 :
                // ASTBuildingTurtle.g:1:238: STRING_LITERAL_LONG_QUOTE
                this.mSTRING_LITERAL_LONG_QUOTE(); 


                break;
            case 21 :
                // ASTBuildingTurtle.g:1:264: LANGTAG
                this.mLANGTAG(); 


                break;
            case 22 :
                // ASTBuildingTurtle.g:1:272: BLANK_NODE_LABEL
                this.mBLANK_NODE_LABEL(); 


                break;
            case 23 :
                // ASTBuildingTurtle.g:1:289: INTEGER
                this.mINTEGER(); 


                break;
            case 24 :
                // ASTBuildingTurtle.g:1:297: DECIMAL
                this.mDECIMAL(); 


                break;
            case 25 :
                // ASTBuildingTurtle.g:1:305: DOUBLE
                this.mDOUBLE(); 


                break;
            case 26 :
                // ASTBuildingTurtle.g:1:312: WS
                this.mWS(); 


                break;
            case 27 :
                // ASTBuildingTurtle.g:1:315: COMMENT
                this.mCOMMENT(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(ASTBuildingTurtleLexer, {
    DFA24_eotS:
        "\u0005\uffff",
    DFA24_eofS:
        "\u0005\uffff",
    DFA24_minS:
        "\u0002\u002e\u0003\uffff",
    DFA24_maxS:
        "\u0001\u0039\u0001\u0065\u0003\uffff",
    DFA24_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\u0003",
    DFA24_specialS:
        "\u0005\uffff}>",
    DFA24_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0003\u0001\uffff\u000a\u0001\u000b\uffff\u0001\u0004"+
            "\u001f\uffff\u0001\u0004",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(ASTBuildingTurtleLexer, {
    DFA24_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA24_eotS),
    DFA24_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA24_eofS),
    DFA24_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleLexer.DFA24_minS),
    DFA24_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleLexer.DFA24_maxS),
    DFA24_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA24_acceptS),
    DFA24_special:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA24_specialS),
    DFA24_transition: (function() {
        var a = [],
            i,
            numStates = ASTBuildingTurtleLexer.DFA24_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA24_transitionS[i]));
        }
        return a;
    })()
});

ASTBuildingTurtleLexer.DFA24 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 24;
    this.eot = ASTBuildingTurtleLexer.DFA24_eot;
    this.eof = ASTBuildingTurtleLexer.DFA24_eof;
    this.min = ASTBuildingTurtleLexer.DFA24_min;
    this.max = ASTBuildingTurtleLexer.DFA24_max;
    this.accept = ASTBuildingTurtleLexer.DFA24_accept;
    this.special = ASTBuildingTurtleLexer.DFA24_special;
    this.transition = ASTBuildingTurtleLexer.DFA24_transition;
};

org.antlr.lang.extend(ASTBuildingTurtleLexer.DFA24, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "195:20: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT )";
    },
    dummy: null
});
org.antlr.lang.augmentObject(ASTBuildingTurtleLexer, {
    DFA30_eotS:
        "\u0001\uffff\u0001\u0005\u0006\uffff\u0002\u0005\u0001\uffff",
    DFA30_eofS:
        "\u000b\uffff",
    DFA30_minS:
        "\u0002\u0025\u0001\u0030\u0001\u0021\u0003\uffff\u0001\u0030\u0002"+
    "\u0025\u0001\uffff",
    DFA30_maxS:
        "\u0002\u2040\u0001\u0066\u0001\u007e\u0003\uffff\u0001\u0066\u0002"+
    "\u2040\u0001\uffff",
    DFA30_acceptS:
        "\u0004\uffff\u0001\u0002\u0001\u0004\u0001\u0001\u0003\uffff\u0001"+
    "\u0003",
    DFA30_specialS:
        "\u000b\uffff}>",
    DFA30_transitionS: [
            "\u0001\u0002\u0007\uffff\u0001\u0001\u0001\u0004\u0001\uffff"+
            "\u000a\u0001\u0007\uffff\u001a\u0001\u0001\uffff\u0001\u0003"+
            "\u0002\uffff\u0001\u0001\u0001\uffff\u001a\u0001\u003c\uffff"+
            "\u0001\u0001\u0248\uffff\u0070\u0001\u1ccf\uffff\u0002\u0001",
            "\u0001\u0006\u0007\uffff\u0002\u0006\u0001\uffff\u000a\u0006"+
            "\u0007\uffff\u001a\u0006\u0001\uffff\u0001\u0006\u0002\uffff"+
            "\u0001\u0006\u0001\uffff\u001a\u0006\u003c\uffff\u0001\u0006"+
            "\u0248\uffff\u0070\u0006\u1ccf\uffff\u0002\u0006",
            "\u000a\u0007\u0007\uffff\u0006\u0007\u001a\uffff\u0006\u0007",
            "\u0001\u0008\u0001\uffff\u000d\u0008\u000b\uffff\u0001\u0008"+
            "\u0001\uffff\u0001\u0008\u0001\uffff\u0002\u0008\u001e\uffff"+
            "\u0001\u0008\u001e\uffff\u0001\u0008",
            "",
            "",
            "",
            "\u000a\u0009\u0007\uffff\u0006\u0009\u001a\uffff\u0006\u0009",
            "\u0001\u000a\u0007\uffff\u0002\u000a\u0001\uffff\u000a\u000a"+
            "\u0007\uffff\u001a\u000a\u0001\uffff\u0001\u000a\u0002\uffff"+
            "\u0001\u000a\u0001\uffff\u001a\u000a\u003c\uffff\u0001\u000a"+
            "\u0248\uffff\u0070\u000a\u1ccf\uffff\u0002\u000a",
            "\u0001\u000a\u0007\uffff\u0002\u000a\u0001\uffff\u000a\u000a"+
            "\u0007\uffff\u001a\u000a\u0001\uffff\u0001\u000a\u0002\uffff"+
            "\u0001\u000a\u0001\uffff\u001a\u000a\u003c\uffff\u0001\u000a"+
            "\u0248\uffff\u0070\u000a\u1ccf\uffff\u0002\u000a",
            ""
    ]
});

org.antlr.lang.augmentObject(ASTBuildingTurtleLexer, {
    DFA30_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA30_eotS),
    DFA30_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA30_eofS),
    DFA30_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleLexer.DFA30_minS),
    DFA30_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleLexer.DFA30_maxS),
    DFA30_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA30_acceptS),
    DFA30_special:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA30_specialS),
    DFA30_transition: (function() {
        var a = [],
            i,
            numStates = ASTBuildingTurtleLexer.DFA30_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA30_transitionS[i]));
        }
        return a;
    })()
});

ASTBuildingTurtleLexer.DFA30 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 30;
    this.eot = ASTBuildingTurtleLexer.DFA30_eot;
    this.eof = ASTBuildingTurtleLexer.DFA30_eof;
    this.min = ASTBuildingTurtleLexer.DFA30_min;
    this.max = ASTBuildingTurtleLexer.DFA30_max;
    this.accept = ASTBuildingTurtleLexer.DFA30_accept;
    this.special = ASTBuildingTurtleLexer.DFA30_special;
    this.transition = ASTBuildingTurtleLexer.DFA30_transition;
};

org.antlr.lang.extend(ASTBuildingTurtleLexer.DFA30, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 205:47: ( PN_CHARS | '.' | PLX )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(ASTBuildingTurtleLexer, {
    DFA37_eotS:
        "\u0003\uffff\u0001\u001b\u0001\u001d\u000a\uffff\u0001\u0021\u0004"+
    "\uffff\u0001\u0028\u0007\uffff\u0001\u002d\u0001\uffff\u0002\u0020\u0003"+
    "\uffff\u0001\u0024\u0001\uffff\u0001\u0026\u0008\uffff\u0002\u0020\u0002"+
    "\uffff\u0001\u002d\u0001\u0037\u0001\uffff\u0002\u0020\u0001\uffff\u0001"+
    "\u003b\u0001\u003c\u0001\u0020\u0002\uffff\u0001\u0020\u0001\u003f\u0001"+
    "\uffff",
    DFA37_eofS:
        "\u0040\uffff",
    DFA37_minS:
        "\u0001\u0009\u0002\u002d\u0001\u0030\u0001\u002d\u0002\uffff\u0001"+
    "\u0041\u0006\uffff\u0001\u002d\u0001\u0025\u0002\u0000\u0001\uffff\u0002"+
    "\u002e\u0002\uffff\u0004\u002d\u0001\uffff\u0001\u0030\u0001\uffff\u0001"+
    "\u0061\u0001\u0072\u0003\uffff\u0001\u0027\u0001\uffff\u0001\u0022\u0001"+
    "\uffff\u0001\u0030\u0001\uffff\u0001\u0030\u0001\uffff\u0002\u002d\u0001"+
    "\uffff\u0001\u0073\u0001\u0065\u0002\uffff\u0001\u0030\u0002\u002d\u0001"+
    "\u0065\u0001\u0066\u0001\uffff\u0002\u002d\u0001\u0069\u0002\uffff\u0001"+
    "\u0078\u0001\u002d\u0001\uffff",
    DFA37_maxS:
        "\u0001\u007a\u0002\u2040\u0001\u0039\u0001\u2040\u0002\uffff\u0001"+
    "\u007a\u0006\uffff\u0001\u2040\u0001\u007a\u0002\uffff\u0001\uffff\u0001"+
    "\u0039\u0001\u0065\u0002\uffff\u0004\u2040\u0001\uffff\u0001\u0065\u0001"+
    "\uffff\u0001\u0061\u0001\u0072\u0003\uffff\u0001\u0027\u0001\uffff\u0001"+
    "\u0022\u0001\uffff\u0001\u0039\u0001\uffff\u0001\u0065\u0001\uffff\u0002"+
    "\u2040\u0001\uffff\u0001\u0073\u0001\u0065\u0002\uffff\u0001\u0065\u0002"+
    "\u2040\u0001\u0065\u0001\u0066\u0001\uffff\u0001\u2040\u0001\u007a\u0001"+
    "\u0069\u0002\uffff\u0001\u0078\u0001\u007a\u0001\uffff",
    DFA37_acceptS:
        "\u0005\uffff\u0001\u0005\u0001\u0006\u0001\uffff\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0004\uffff\u0001"+
    "\u0016\u0002\uffff\u0001\u001a\u0001\u001b\u0004\uffff\u0001\u0003\u0001"+
    "\uffff\u0001\u0004\u0002\uffff\u0001\u0015\u0001\u000f\u0001\u0010\u0001"+
    "\uffff\u0001\u0011\u0001\uffff\u0001\u0012\u0001\uffff\u0001\u0017\u0001"+
    "\uffff\u0001\u0019\u0002\uffff\u0001\u0018\u0002\uffff\u0001\u0013\u0001"+
    "\u0014\u0005\uffff\u0001\u0001\u0003\uffff\u0001\u0002\u0001\u0007\u0002"+
    "\uffff\u0001\u0008",
    DFA37_specialS:
        "\u0010\uffff\u0001\u0000\u0001\u0001\u002e\uffff}>",
    DFA37_transitionS: [
            "\u0002\u0015\u0002\uffff\u0001\u0015\u0012\uffff\u0001\u0015"+
            "\u0001\uffff\u0001\u0011\u0001\u0016\u0003\uffff\u0001\u0010"+
            "\u0001\u0008\u0001\u0009\u0001\uffff\u0001\u0013\u0001\u0005"+
            "\u0001\u0013\u0001\u0003\u0001\uffff\u000a\u0014\u0001\u000f"+
            "\u0001\u0006\u0001\u000d\u0003\uffff\u0001\u0007\u001a\u000e"+
            "\u0001\u000a\u0001\uffff\u0001\u000b\u0001\u000c\u0001\u0012"+
            "\u0001\uffff\u0001\u0004\u0004\u000e\u0001\u0002\u000d\u000e"+
            "\u0001\u0001\u0006\u000e",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u0011\u0018\u0001\u0017\u0008\u0018\u003c\uffff\u0001\u0018"+
            "\u0248\uffff\u0070\u0018\u1ccf\uffff\u0002\u0018",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u0001\u001a\u0019\u0018\u003c\uffff\u0001\u0018\u0248\uffff"+
            "\u0070\u0018\u1ccf\uffff\u0002\u0018",
            "\u000a\u001c",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u001a\u0018\u003c\uffff\u0001\u0018\u0248\uffff\u0070\u0018"+
            "\u1ccf\uffff\u0002\u0018",
            "",
            "",
            "\u001a\u0020\u0006\uffff\u0001\u0020\u0001\u001e\u000d\u0020"+
            "\u0001\u001f\u000a\u0020",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u001a\u0018\u003c\uffff\u0001\u0018\u0248\uffff\u0070\u0018"+
            "\u1ccf\uffff\u0002\u0018",
            "\u0001\u0022\u000a\uffff\u000a\u0022\u0007\uffff\u001a\u0022"+
            "\u0001\uffff\u0001\u0022\u0002\uffff\u0001\u0022\u0001\uffff"+
            "\u001a\u0022",
            "\u000a\u0024\u0001\uffff\u0002\u0024\u0001\uffff\u0019\u0024"+
            "\u0001\u0023\uffd8\u0024",
            "\u000a\u0026\u0001\uffff\u0002\u0026\u0001\uffff\u0014\u0026"+
            "\u0001\u0025\uffdd\u0026",
            "",
            "\u0001\u0027\u0001\uffff\u000a\u0014",
            "\u0001\u0029\u0001\uffff\u000a\u0014\u000b\uffff\u0001\u002a"+
            "\u001f\uffff\u0001\u002a",
            "",
            "",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u0014\u0018\u0001\u002b\u0005\u0018\u003c\uffff\u0001\u0018"+
            "\u0248\uffff\u0070\u0018\u1ccf\uffff\u0002\u0018",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u001a\u0018\u003c\uffff\u0001\u0018\u0248\uffff\u0070\u0018"+
            "\u1ccf\uffff\u0002\u0018",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0007\uffff"+
            "\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff\u001a\u0018"+
            "\u003c\uffff\u0001\u0018\u0248\uffff\u0070\u0018\u1ccf\uffff"+
            "\u0002\u0018",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u000b\u0018\u0001\u002c\u000e\u0018\u003c\uffff\u0001\u0018"+
            "\u0248\uffff\u0070\u0018\u1ccf\uffff\u0002\u0018",
            "",
            "\u000a\u001c\u000b\uffff\u0001\u002a\u001f\uffff\u0001\u002a",
            "",
            "\u0001\u002e",
            "\u0001\u002f",
            "",
            "",
            "",
            "\u0001\u0030",
            "",
            "\u0001\u0031",
            "",
            "\u000a\u001c",
            "",
            "\u000a\u0032\u000b\uffff\u0001\u002a\u001f\uffff\u0001\u002a",
            "",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u0004\u0018\u0001\u0033\u0015\u0018\u003c\uffff\u0001\u0018"+
            "\u0248\uffff\u0070\u0018\u1ccf\uffff\u0002\u0018",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u0012\u0018\u0001\u0034\u0007\u0018\u003c\uffff\u0001\u0018"+
            "\u0248\uffff\u0070\u0018\u1ccf\uffff\u0002\u0018",
            "",
            "\u0001\u0035",
            "\u0001\u0036",
            "",
            "",
            "\u000a\u0032\u000b\uffff\u0001\u002a\u001f\uffff\u0001\u002a",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u001a\u0018\u003c\uffff\u0001\u0018\u0248\uffff\u0070\u0018"+
            "\u1ccf\uffff\u0002\u0018",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u0004\u0018\u0001\u0038\u0015\u0018\u003c\uffff\u0001\u0018"+
            "\u0248\uffff\u0070\u0018\u1ccf\uffff\u0002\u0018",
            "\u0001\u0039",
            "\u0001\u003a",
            "",
            "\u0001\u0018\u0001\u0019\u0001\uffff\u000a\u0018\u0001\u000f"+
            "\u0006\uffff\u001a\u0018\u0004\uffff\u0001\u0018\u0001\uffff"+
            "\u001a\u0018\u003c\uffff\u0001\u0018\u0248\uffff\u0070\u0018"+
            "\u1ccf\uffff\u0002\u0018",
            "\u0001\u0020\u0013\uffff\u001a\u0020\u0006\uffff\u001a\u0020",
            "\u0001\u003d",
            "",
            "",
            "\u0001\u003e",
            "\u0001\u0020\u0013\uffff\u001a\u0020\u0006\uffff\u001a\u0020",
            ""
    ]
});

org.antlr.lang.augmentObject(ASTBuildingTurtleLexer, {
    DFA37_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA37_eotS),
    DFA37_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA37_eofS),
    DFA37_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleLexer.DFA37_minS),
    DFA37_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleLexer.DFA37_maxS),
    DFA37_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA37_acceptS),
    DFA37_special:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA37_specialS),
    DFA37_transition: (function() {
        var a = [],
            i,
            numStates = ASTBuildingTurtleLexer.DFA37_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleLexer.DFA37_transitionS[i]));
        }
        return a;
    })()
});

ASTBuildingTurtleLexer.DFA37 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 37;
    this.eot = ASTBuildingTurtleLexer.DFA37_eot;
    this.eof = ASTBuildingTurtleLexer.DFA37_eof;
    this.min = ASTBuildingTurtleLexer.DFA37_min;
    this.max = ASTBuildingTurtleLexer.DFA37_max;
    this.accept = ASTBuildingTurtleLexer.DFA37_accept;
    this.special = ASTBuildingTurtleLexer.DFA37_special;
    this.transition = ASTBuildingTurtleLexer.DFA37_transition;
};

org.antlr.lang.extend(ASTBuildingTurtleLexer.DFA37, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( TRUE | FALSE | DOT | A | COMMA | SEMI | BASE | PREFIX | PAREN_ROUND_OPEN | PAREN_ROUND_CLOSE | PAREN_BRACKETS_OPEN | PAREN_BRACKETS_CLOSE | EYES | IRIREF | PNAME_NS | PNAME_LN | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE | LANGTAG | BLANK_NODE_LABEL | INTEGER | DECIMAL | DOUBLE | WS | COMMENT );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA37_16 = input.LA(1);

                            s = -1;
                            if ( (LA37_16=='\'') ) {s = 35;}

                            else if ( ((LA37_16>='\u0000' && LA37_16<='\t')||(LA37_16>='\u000B' && LA37_16<='\f')||(LA37_16>='\u000E' && LA37_16<='&')||(LA37_16>='(' && LA37_16<='\uFFFF')) ) {s = 36;}

                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA37_17 = input.LA(1);

                            s = -1;
                            if ( (LA37_17=='\"') ) {s = 37;}

                            else if ( ((LA37_17>='\u0000' && LA37_17<='\t')||(LA37_17>='\u000B' && LA37_17<='\f')||(LA37_17>='\u000E' && LA37_17<='!')||(LA37_17>='#' && LA37_17<='\uFFFF')) ) {s = 38;}

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 37, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();