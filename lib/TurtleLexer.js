// $ANTLR 3.3 Nov 30, 2010 12:50:56 Turtle.g 2013-01-29 16:19:24

var TurtleLexer = function(input, state) {
// alternate constructor @todo
// public TurtleLexer(CharStream input)
// public TurtleLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){

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



    }).call(this);

    this.dfa24 = new TurtleLexer.DFA24(this);
    this.dfa30 = new TurtleLexer.DFA30(this);
    this.dfa37 = new TurtleLexer.DFA37(this);
    TurtleLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(TurtleLexer, {
    EOF: -1,
    WS: 4,
    DOT: 5,
    PREFIX: 6,
    PNAME_NS: 7,
    IRIREF: 8,
    BASE: 9,
    SEMI: 10,
    A: 11,
    COMMA: 12,
    PAREN_ROUND_OPEN: 13,
    PAREN_ROUND_CLOSE: 14,
    BLANK_NODE_LABEL: 15,
    PAREN_BRACKETS_OPEN: 16,
    PAREN_BRACKETS_CLOSE: 17,
    TRUE: 18,
    FALSE: 19,
    INTEGER: 20,
    DECIMAL: 21,
    DOUBLE: 22,
    LANGTAG: 23,
    EYES: 24,
    STRING_LITERAL_QUOTE: 25,
    STRING_LITERAL_SINGLE_QUOTE: 26,
    STRING_LITERAL_LONG_SINGLE_QUOTE: 27,
    STRING_LITERAL_LONG_QUOTE: 28,
    PNAME_LN: 29,
    UCHAR: 30,
    PN_PREFIX: 31,
    PN_LOCAL: 32,
    ECHAR: 33,
    PN_CHARS_U: 34,
    PN_CHARS: 35,
    EXPONENT: 36,
    COMMENT: 37,
    PLX: 38,
    PERCENT: 39,
    PN_LOCAL_ESC: 40,
    HEX: 41,
    PN_CHARS_BASE: 42
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(TurtleLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    WS : 4,
    DOT : 5,
    PREFIX : 6,
    PNAME_NS : 7,
    IRIREF : 8,
    BASE : 9,
    SEMI : 10,
    A : 11,
    COMMA : 12,
    PAREN_ROUND_OPEN : 13,
    PAREN_ROUND_CLOSE : 14,
    BLANK_NODE_LABEL : 15,
    PAREN_BRACKETS_OPEN : 16,
    PAREN_BRACKETS_CLOSE : 17,
    TRUE : 18,
    FALSE : 19,
    INTEGER : 20,
    DECIMAL : 21,
    DOUBLE : 22,
    LANGTAG : 23,
    EYES : 24,
    STRING_LITERAL_QUOTE : 25,
    STRING_LITERAL_SINGLE_QUOTE : 26,
    STRING_LITERAL_LONG_SINGLE_QUOTE : 27,
    STRING_LITERAL_LONG_QUOTE : 28,
    PNAME_LN : 29,
    UCHAR : 30,
    PN_PREFIX : 31,
    PN_LOCAL : 32,
    ECHAR : 33,
    PN_CHARS_U : 34,
    PN_CHARS : 35,
    EXPONENT : 36,
    COMMENT : 37,
    PLX : 38,
    PERCENT : 39,
    PN_LOCAL_ESC : 40,
    HEX : 41,
    PN_CHARS_BASE : 42,
    getGrammarFileName: function() { return "Turtle.g"; }
});
org.antlr.lang.augmentObject(TurtleLexer.prototype, {
    // $ANTLR start TRUE
    mTRUE: function()  {
        try {
            var _type = this.TRUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Turtle.g:343:5: ( 'true' )
            // Turtle.g:343:7: 'true'
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
            // Turtle.g:344:6: ( 'false' )
            // Turtle.g:344:8: 'false'
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
            // Turtle.g:345:4: ( '.' )
            // Turtle.g:345:6: '.'
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
            // Turtle.g:346:2: ( 'a' )
            // Turtle.g:346:4: 'a'
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
            // Turtle.g:347:6: ( ',' )
            // Turtle.g:347:8: ','
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
            // Turtle.g:348:5: ( ';' )
            // Turtle.g:348:7: ';'
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
            // Turtle.g:349:5: ( '@base' )
            // Turtle.g:349:7: '@base'
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
            // Turtle.g:350:7: ( '@prefix' )
            // Turtle.g:350:9: '@prefix'
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
            // Turtle.g:351:17: ( '(' )
            // Turtle.g:351:19: '('
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
            // Turtle.g:352:18: ( ')' )
            // Turtle.g:352:20: ')'
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
            // Turtle.g:353:20: ( '[' )
            // Turtle.g:353:22: '['
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
            // Turtle.g:354:21: ( ']' )
            // Turtle.g:354:23: ']'
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
            // Turtle.g:355:5: ( '^^' )
            // Turtle.g:355:7: '^^'
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
            // Turtle.g:356:7: ( '<' (~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' ) | UCHAR )* '>' )
            // Turtle.g:356:9: '<' (~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' ) | UCHAR )* '>'
            this.match('<'); 
            // Turtle.g:356:13: (~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' ) | UCHAR )*
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
                    // Turtle.g:356:14: ~ ( '\\u0000' .. '\\u0020' | '<' | '>' | '\"' | '{' | '}' | '|' | '^' | '`' | '\\\\' )
                    if ( this.input.LA(1)=='!'||(this.input.LA(1)>='#' && this.input.LA(1)<=';')||this.input.LA(1)=='='||(this.input.LA(1)>='?' && this.input.LA(1)<='[')||this.input.LA(1)==']'||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||(this.input.LA(1)>='~' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // Turtle.g:356:73: UCHAR
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
            // Turtle.g:357:9: ( ( PN_PREFIX )? ':' )
            // Turtle.g:357:11: ( PN_PREFIX )? ':'
            // Turtle.g:357:11: ( PN_PREFIX )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( ((LA2_0>='A' && LA2_0<='Z')||(LA2_0>='a' && LA2_0<='z')) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // Turtle.g:357:11: PN_PREFIX
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
            // Turtle.g:358:9: ( PNAME_NS PN_LOCAL )
            // Turtle.g:358:11: PNAME_NS PN_LOCAL
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
            // Turtle.g:359:28: ( '\\'' (~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\\'' )
            // Turtle.g:359:30: '\\'' (~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\\''
            this.match('\''); 
            // Turtle.g:359:35: (~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )*
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
                    // Turtle.g:359:36: ~ ( '\\u0027' | '\\u005C' | '\\u000A' | '\\u000D' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // Turtle.g:359:75: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // Turtle.g:359:81: UCHAR
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
            // Turtle.g:360:21: ( '\"' (~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\"' )
            // Turtle.g:360:23: '\"' (~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )* '\"'
            this.match('\"'); 
            // Turtle.g:360:27: (~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' ) | ECHAR | UCHAR )*
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
                    // Turtle.g:360:28: ~ ( '\\u0022' | '\\u005C' | '\\u000A' | '\\u000D' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // Turtle.g:360:67: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // Turtle.g:360:73: UCHAR
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
            // Turtle.g:361:33: ( '\\'\\'\\'' ( ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' ) | ECHAR | UCHAR )* '\\'\\'\\'' )
            // Turtle.g:361:35: '\\'\\'\\'' ( ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' ) | ECHAR | UCHAR )* '\\'\\'\\''
            this.match("'''"); 

            // Turtle.g:361:44: ( ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' ) | ECHAR | UCHAR )*
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
                    // Turtle.g:361:45: ( '\\'' | '\\'\\'' )? ~ ( '\\'' | '\\\\' )
                    // Turtle.g:361:45: ( '\\'' | '\\'\\'' )?
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
                            // Turtle.g:361:46: '\\''
                            this.match('\''); 


                            break;
                        case 2 :
                            // Turtle.g:361:51: '\\'\\''
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
                    // Turtle.g:361:73: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // Turtle.g:361:79: UCHAR
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
            // Turtle.g:362:26: ( '\"\"\"' ( ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' ) | ECHAR | UCHAR )* '\"\"\"' )
            // Turtle.g:362:28: '\"\"\"' ( ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' ) | ECHAR | UCHAR )* '\"\"\"'
            this.match("\"\"\""); 

            // Turtle.g:362:34: ( ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' ) | ECHAR | UCHAR )*
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
                    // Turtle.g:362:35: ( '\"' | '\"\"' )? ~ ( '\"' | '\\\\' )
                    // Turtle.g:362:35: ( '\"' | '\"\"' )?
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
                            // Turtle.g:362:36: '\"'
                            this.match('\"'); 


                            break;
                        case 2 :
                            // Turtle.g:362:40: '\"\"'
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
                    // Turtle.g:362:59: ECHAR
                    this.mECHAR(); 


                    break;
                case 3 :
                    // Turtle.g:362:65: UCHAR
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
            // Turtle.g:363:8: ( '@' ( 'a' .. 'z' | 'A' .. 'Z' )+ ( '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+ )* )
            // Turtle.g:363:10: '@' ( 'a' .. 'z' | 'A' .. 'Z' )+ ( '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+ )*
            this.match('@'); 
            // Turtle.g:363:14: ( 'a' .. 'z' | 'A' .. 'Z' )+
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
                    // Turtle.g:
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

            // Turtle.g:363:35: ( '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+ )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0=='-') ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // Turtle.g:363:36: '-' ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+
                    this.match('-'); 
                    // Turtle.g:363:40: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' )+
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
                            // Turtle.g:
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
            // Turtle.g:364:17: ( '_:' ( PN_CHARS_U | '0' .. '9' ) ( ( PN_CHARS | '.' )* PN_CHARS )? )
            // Turtle.g:364:19: '_:' ( PN_CHARS_U | '0' .. '9' ) ( ( PN_CHARS | '.' )* PN_CHARS )?
            this.match("_:"); 

            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // Turtle.g:364:46: ( ( PN_CHARS | '.' )* PN_CHARS )?
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( ((LA13_0>='-' && LA13_0<='.')||(LA13_0>='0' && LA13_0<='9')||(LA13_0>='A' && LA13_0<='Z')||LA13_0=='_'||(LA13_0>='a' && LA13_0<='z')||LA13_0=='\u00B7'||(LA13_0>='\u0300' && LA13_0<='\u036F')||(LA13_0>='\u203F' && LA13_0<='\u2040')) ) {
                alt13=1;
            }
            switch (alt13) {
                case 1 :
                    // Turtle.g:364:47: ( PN_CHARS | '.' )* PN_CHARS
                    // Turtle.g:364:47: ( PN_CHARS | '.' )*
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
                            // Turtle.g:
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
            // Turtle.g:370:8: ( ( '+' | '-' )? ( '0' .. '9' )+ )
            // Turtle.g:370:10: ( '+' | '-' )? ( '0' .. '9' )+
            // Turtle.g:370:10: ( '+' | '-' )?
            var alt14=2;
            var LA14_0 = this.input.LA(1);

            if ( (LA14_0=='+'||LA14_0=='-') ) {
                alt14=1;
            }
            switch (alt14) {
                case 1 :
                    // Turtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // Turtle.g:370:21: ( '0' .. '9' )+
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
                    // Turtle.g:370:21: '0' .. '9'
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
            // Turtle.g:371:8: ( ( '+' | '-' )? ( '0' .. '9' )* '.' ( '0' .. '9' )+ )
            // Turtle.g:371:10: ( '+' | '-' )? ( '0' .. '9' )* '.' ( '0' .. '9' )+
            // Turtle.g:371:10: ( '+' | '-' )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0=='+'||LA16_0=='-') ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // Turtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // Turtle.g:371:21: ( '0' .. '9' )*
            loop17:
            do {
                var alt17=2;
                var LA17_0 = this.input.LA(1);

                if ( ((LA17_0>='0' && LA17_0<='9')) ) {
                    alt17=1;
                }


                switch (alt17) {
                case 1 :
                    // Turtle.g:371:21: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    break loop17;
                }
            } while (true);

            this.match('.'); 
            // Turtle.g:371:35: ( '0' .. '9' )+
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
                    // Turtle.g:371:35: '0' .. '9'
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
            // Turtle.g:374:7: ( ( '+' | '-' )? ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT ) )
            // Turtle.g:374:9: ( '+' | '-' )? ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT )
            // Turtle.g:374:9: ( '+' | '-' )?
            var alt19=2;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0=='+'||LA19_0=='-') ) {
                alt19=1;
            }
            switch (alt19) {
                case 1 :
                    // Turtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // Turtle.g:374:20: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT )
            var alt24=3;
            alt24 = this.dfa24.predict(this.input);
            switch (alt24) {
                case 1 :
                    // Turtle.g:374:21: ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT
                    // Turtle.g:374:21: ( '0' .. '9' )+
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
                            // Turtle.g:374:21: '0' .. '9'
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
                    // Turtle.g:374:35: ( '0' .. '9' )*
                    loop21:
                    do {
                        var alt21=2;
                        var LA21_0 = this.input.LA(1);

                        if ( ((LA21_0>='0' && LA21_0<='9')) ) {
                            alt21=1;
                        }


                        switch (alt21) {
                        case 1 :
                            // Turtle.g:374:35: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop21;
                        }
                    } while (true);

                    this.mEXPONENT(); 


                    break;
                case 2 :
                    // Turtle.g:374:54: '.' ( '0' .. '9' )+ EXPONENT
                    this.match('.'); 
                    // Turtle.g:374:58: ( '0' .. '9' )+
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
                            // Turtle.g:374:58: '0' .. '9'
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
                    // Turtle.g:374:77: ( '0' .. '9' )+ EXPONENT
                    // Turtle.g:374:77: ( '0' .. '9' )+
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
                            // Turtle.g:374:77: '0' .. '9'
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
            // Turtle.g:377:3: ( '\\u0020' | '\\u0009' | '\\u000D' | '\\u000A' )
            // Turtle.g:
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
            // Turtle.g:378:8: ( '#' ( options {greedy=false; } : . )* ( '\\r' )+ )
            // Turtle.g:378:10: '#' ( options {greedy=false; } : . )* ( '\\r' )+
            this.match('#'); 
            // Turtle.g:378:14: ( options {greedy=false; } : . )*
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
                    // Turtle.g:378:41: .
                    this.matchAny(); 


                    break;

                default :
                    break loop25;
                }
            } while (true);

            // Turtle.g:378:46: ( '\\r' )+
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
                    // Turtle.g:378:46: '\\r'
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
            // Turtle.g:380:18: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // Turtle.g:380:20: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // Turtle.g:380:30: ( '+' | '-' )?
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0=='+'||LA27_0=='-') ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // Turtle.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // Turtle.g:380:41: ( '0' .. '9' )+
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
                    // Turtle.g:380:41: '0' .. '9'
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
            // Turtle.g:382:15: ( '\\\\' ( 't' | 'b' | 'n' | 'r' | 'f' | '\\\\' | '\"' | '\\'' ) )
            // Turtle.g:382:17: '\\\\' ( 't' | 'b' | 'n' | 'r' | 'f' | '\\\\' | '\"' | '\\'' )
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
            // Turtle.g:383:18: ( ( PN_CHARS_U | '0' .. '9' | PLX ) ( ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX ) )? )
            // Turtle.g:383:20: ( PN_CHARS_U | '0' .. '9' | PLX ) ( ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX ) )?
            // Turtle.g:383:20: ( PN_CHARS_U | '0' .. '9' | PLX )
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
                    // Turtle.g:383:21: PN_CHARS_U
                    this.mPN_CHARS_U(); 


                    break;
                case 2 :
                    // Turtle.g:383:32: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;
                case 3 :
                    // Turtle.g:383:41: PLX
                    this.mPLX(); 


                    break;

            }

            // Turtle.g:383:46: ( ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX ) )?
            var alt32=2;
            var LA32_0 = this.input.LA(1);

            if ( (LA32_0=='%'||(LA32_0>='-' && LA32_0<='.')||(LA32_0>='0' && LA32_0<='9')||(LA32_0>='A' && LA32_0<='Z')||LA32_0=='\\'||LA32_0=='_'||(LA32_0>='a' && LA32_0<='z')||LA32_0=='\u00B7'||(LA32_0>='\u0300' && LA32_0<='\u036F')||(LA32_0>='\u203F' && LA32_0<='\u2040')) ) {
                alt32=1;
            }
            switch (alt32) {
                case 1 :
                    // Turtle.g:383:47: ( PN_CHARS | '.' | PLX )* ( PN_CHARS | PLX )
                    // Turtle.g:383:47: ( PN_CHARS | '.' | PLX )*
                    loop30:
                    do {
                        var alt30=4;
                        alt30 = this.dfa30.predict(this.input);
                        switch (alt30) {
                        case 1 :
                            // Turtle.g:383:48: PN_CHARS
                            this.mPN_CHARS(); 


                            break;
                        case 2 :
                            // Turtle.g:383:57: '.'
                            this.match('.'); 


                            break;
                        case 3 :
                            // Turtle.g:383:61: PLX
                            this.mPLX(); 


                            break;

                        default :
                            break loop30;
                        }
                    } while (true);

                    // Turtle.g:383:67: ( PN_CHARS | PLX )
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
                            // Turtle.g:383:68: PN_CHARS
                            this.mPN_CHARS(); 


                            break;
                        case 2 :
                            // Turtle.g:383:77: PLX
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
            // Turtle.g:384:13: ( PERCENT | PN_LOCAL_ESC )
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
                    // Turtle.g:384:15: PERCENT
                    this.mPERCENT(); 


                    break;
                case 2 :
                    // Turtle.g:384:23: PN_LOCAL_ESC
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
            // Turtle.g:385:17: ( '%' HEX HEX )
            // Turtle.g:385:19: '%' HEX HEX
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
            // Turtle.g:387:22: ( '\\\\' ( '_' | '~' | '.' | '-' | '!' | '$' | '&' | '\\'' | '(' | ')' | '*' | '+' | ',' | ';' | '=' | '/' | '?' | '#' | '@' | '%' ) )
            // Turtle.g:387:24: '\\\\' ( '_' | '~' | '.' | '-' | '!' | '$' | '&' | '\\'' | '(' | ')' | '*' | '+' | ',' | ';' | '=' | '/' | '?' | '#' | '@' | '%' )
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
            // Turtle.g:391:20: ( PN_CHARS_BASE | '_' )
            // Turtle.g:
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
            // Turtle.g:392:18: ( PN_CHARS_U | '-' | '0' .. '9' | '\\u00B7' | '\\u0300' .. '\\u036F' | '\\u203F' .. '\\u2040' )
            // Turtle.g:
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
            // Turtle.g:395:23: ( 'A' .. 'Z' | 'a' .. 'z' )
            // Turtle.g:
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
            // Turtle.g:396:19: ( PN_CHARS_BASE ( ( PN_CHARS | '.' )* PN_CHARS )? )
            // Turtle.g:396:21: PN_CHARS_BASE ( ( PN_CHARS | '.' )* PN_CHARS )?
            this.mPN_CHARS_BASE(); 
            // Turtle.g:396:35: ( ( PN_CHARS | '.' )* PN_CHARS )?
            var alt35=2;
            var LA35_0 = this.input.LA(1);

            if ( ((LA35_0>='-' && LA35_0<='.')||(LA35_0>='0' && LA35_0<='9')||(LA35_0>='A' && LA35_0<='Z')||LA35_0=='_'||(LA35_0>='a' && LA35_0<='z')||LA35_0=='\u00B7'||(LA35_0>='\u0300' && LA35_0<='\u036F')||(LA35_0>='\u203F' && LA35_0<='\u2040')) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // Turtle.g:396:36: ( PN_CHARS | '.' )* PN_CHARS
                    // Turtle.g:396:36: ( PN_CHARS | '.' )*
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
                            // Turtle.g:
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
            // Turtle.g:398:15: ( '\\\\u' HEX HEX HEX HEX | '\\\\U' HEX HEX HEX HEX HEX HEX HEX HEX )
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
                    // Turtle.g:398:17: '\\\\u' HEX HEX HEX HEX
                    this.match("\\u"); 

                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 
                    this.mHEX(); 


                    break;
                case 2 :
                    // Turtle.g:398:41: '\\\\U' HEX HEX HEX HEX HEX HEX HEX HEX
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
            // Turtle.g:401:13: ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' )
            // Turtle.g:
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
        // Turtle.g:1:8: ( TRUE | FALSE | DOT | A | COMMA | SEMI | BASE | PREFIX | PAREN_ROUND_OPEN | PAREN_ROUND_CLOSE | PAREN_BRACKETS_OPEN | PAREN_BRACKETS_CLOSE | EYES | IRIREF | PNAME_NS | PNAME_LN | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE | LANGTAG | BLANK_NODE_LABEL | INTEGER | DECIMAL | DOUBLE | WS | COMMENT )
        var alt37=27;
        alt37 = this.dfa37.predict(this.input);
        switch (alt37) {
            case 1 :
                // Turtle.g:1:10: TRUE
                this.mTRUE(); 


                break;
            case 2 :
                // Turtle.g:1:15: FALSE
                this.mFALSE(); 


                break;
            case 3 :
                // Turtle.g:1:21: DOT
                this.mDOT(); 


                break;
            case 4 :
                // Turtle.g:1:25: A
                this.mA(); 


                break;
            case 5 :
                // Turtle.g:1:27: COMMA
                this.mCOMMA(); 


                break;
            case 6 :
                // Turtle.g:1:33: SEMI
                this.mSEMI(); 


                break;
            case 7 :
                // Turtle.g:1:38: BASE
                this.mBASE(); 


                break;
            case 8 :
                // Turtle.g:1:43: PREFIX
                this.mPREFIX(); 


                break;
            case 9 :
                // Turtle.g:1:50: PAREN_ROUND_OPEN
                this.mPAREN_ROUND_OPEN(); 


                break;
            case 10 :
                // Turtle.g:1:67: PAREN_ROUND_CLOSE
                this.mPAREN_ROUND_CLOSE(); 


                break;
            case 11 :
                // Turtle.g:1:85: PAREN_BRACKETS_OPEN
                this.mPAREN_BRACKETS_OPEN(); 


                break;
            case 12 :
                // Turtle.g:1:105: PAREN_BRACKETS_CLOSE
                this.mPAREN_BRACKETS_CLOSE(); 


                break;
            case 13 :
                // Turtle.g:1:126: EYES
                this.mEYES(); 


                break;
            case 14 :
                // Turtle.g:1:131: IRIREF
                this.mIRIREF(); 


                break;
            case 15 :
                // Turtle.g:1:138: PNAME_NS
                this.mPNAME_NS(); 


                break;
            case 16 :
                // Turtle.g:1:147: PNAME_LN
                this.mPNAME_LN(); 


                break;
            case 17 :
                // Turtle.g:1:156: STRING_LITERAL_SINGLE_QUOTE
                this.mSTRING_LITERAL_SINGLE_QUOTE(); 


                break;
            case 18 :
                // Turtle.g:1:184: STRING_LITERAL_QUOTE
                this.mSTRING_LITERAL_QUOTE(); 


                break;
            case 19 :
                // Turtle.g:1:205: STRING_LITERAL_LONG_SINGLE_QUOTE
                this.mSTRING_LITERAL_LONG_SINGLE_QUOTE(); 


                break;
            case 20 :
                // Turtle.g:1:238: STRING_LITERAL_LONG_QUOTE
                this.mSTRING_LITERAL_LONG_QUOTE(); 


                break;
            case 21 :
                // Turtle.g:1:264: LANGTAG
                this.mLANGTAG(); 


                break;
            case 22 :
                // Turtle.g:1:272: BLANK_NODE_LABEL
                this.mBLANK_NODE_LABEL(); 


                break;
            case 23 :
                // Turtle.g:1:289: INTEGER
                this.mINTEGER(); 


                break;
            case 24 :
                // Turtle.g:1:297: DECIMAL
                this.mDECIMAL(); 


                break;
            case 25 :
                // Turtle.g:1:305: DOUBLE
                this.mDOUBLE(); 


                break;
            case 26 :
                // Turtle.g:1:312: WS
                this.mWS(); 


                break;
            case 27 :
                // Turtle.g:1:315: COMMENT
                this.mCOMMENT(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(TurtleLexer, {
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

org.antlr.lang.augmentObject(TurtleLexer, {
    DFA24_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA24_eotS),
    DFA24_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA24_eofS),
    DFA24_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleLexer.DFA24_minS),
    DFA24_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleLexer.DFA24_maxS),
    DFA24_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA24_acceptS),
    DFA24_special:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA24_specialS),
    DFA24_transition: (function() {
        var a = [],
            i,
            numStates = TurtleLexer.DFA24_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA24_transitionS[i]));
        }
        return a;
    })()
});

TurtleLexer.DFA24 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 24;
    this.eot = TurtleLexer.DFA24_eot;
    this.eof = TurtleLexer.DFA24_eof;
    this.min = TurtleLexer.DFA24_min;
    this.max = TurtleLexer.DFA24_max;
    this.accept = TurtleLexer.DFA24_accept;
    this.special = TurtleLexer.DFA24_special;
    this.transition = TurtleLexer.DFA24_transition;
};

org.antlr.lang.extend(TurtleLexer.DFA24, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "374:20: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* EXPONENT | '.' ( '0' .. '9' )+ EXPONENT | ( '0' .. '9' )+ EXPONENT )";
    },
    dummy: null
});
org.antlr.lang.augmentObject(TurtleLexer, {
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

org.antlr.lang.augmentObject(TurtleLexer, {
    DFA30_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA30_eotS),
    DFA30_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA30_eofS),
    DFA30_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleLexer.DFA30_minS),
    DFA30_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleLexer.DFA30_maxS),
    DFA30_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA30_acceptS),
    DFA30_special:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA30_specialS),
    DFA30_transition: (function() {
        var a = [],
            i,
            numStates = TurtleLexer.DFA30_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA30_transitionS[i]));
        }
        return a;
    })()
});

TurtleLexer.DFA30 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 30;
    this.eot = TurtleLexer.DFA30_eot;
    this.eof = TurtleLexer.DFA30_eof;
    this.min = TurtleLexer.DFA30_min;
    this.max = TurtleLexer.DFA30_max;
    this.accept = TurtleLexer.DFA30_accept;
    this.special = TurtleLexer.DFA30_special;
    this.transition = TurtleLexer.DFA30_transition;
};

org.antlr.lang.extend(TurtleLexer.DFA30, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 383:47: ( PN_CHARS | '.' | PLX )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(TurtleLexer, {
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

org.antlr.lang.augmentObject(TurtleLexer, {
    DFA37_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA37_eotS),
    DFA37_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA37_eofS),
    DFA37_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleLexer.DFA37_minS),
    DFA37_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleLexer.DFA37_maxS),
    DFA37_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA37_acceptS),
    DFA37_special:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA37_specialS),
    DFA37_transition: (function() {
        var a = [],
            i,
            numStates = TurtleLexer.DFA37_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TurtleLexer.DFA37_transitionS[i]));
        }
        return a;
    })()
});

TurtleLexer.DFA37 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 37;
    this.eot = TurtleLexer.DFA37_eot;
    this.eof = TurtleLexer.DFA37_eof;
    this.min = TurtleLexer.DFA37_min;
    this.max = TurtleLexer.DFA37_max;
    this.accept = TurtleLexer.DFA37_accept;
    this.special = TurtleLexer.DFA37_special;
    this.transition = TurtleLexer.DFA37_transition;
};

org.antlr.lang.extend(TurtleLexer.DFA37, org.antlr.runtime.DFA, {
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