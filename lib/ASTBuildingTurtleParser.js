// $ANTLR 3.3 Nov 30, 2010 12:50:56 ASTBuildingTurtle.g 2013-01-31 14:58:47

var ASTBuildingTurtleParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){


          // We´re overriding both methods as we only want to 
          // accept syntactically correct turtle files. If those
          // contain any errors they should fix their files.

          this.mismatch = function(input, ttype, follow){
            ;
          }

          this.recoverFromMismatchedSet = function(input, e, follow){
            ;
          }

    }).call(this);

    ASTBuildingTurtleParser.superclass.constructor.call(this, input, state);

    this.dfa14 = new ASTBuildingTurtleParser.DFA14(this);
    this.dfa26 = new ASTBuildingTurtleParser.DFA26(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(ASTBuildingTurtleParser, {
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
// public class variables
var EOF= -1,
    DEF_EMPTY_BLANK= 4,
    DEF_TRIPLES= 5,
    DEF_COLLECTION= 6,
    DEF_BNPL= 7,
    WS= 8,
    DOT= 9,
    PREFIX= 10,
    PNAME_NS= 11,
    IRIREF= 12,
    BASE= 13,
    SEMI= 14,
    A= 15,
    COMMA= 16,
    PAREN_ROUND_OPEN= 17,
    PAREN_ROUND_CLOSE= 18,
    BLANK_NODE_LABEL= 19,
    PAREN_BRACKETS_OPEN= 20,
    PAREN_BRACKETS_CLOSE= 21,
    TRUE= 22,
    FALSE= 23,
    INTEGER= 24,
    DECIMAL= 25,
    DOUBLE= 26,
    LANGTAG= 27,
    EYES= 28,
    STRING_LITERAL_QUOTE= 29,
    STRING_LITERAL_SINGLE_QUOTE= 30,
    STRING_LITERAL_LONG_SINGLE_QUOTE= 31,
    STRING_LITERAL_LONG_QUOTE= 32,
    PNAME_LN= 33,
    UCHAR= 34,
    PN_PREFIX= 35,
    PN_LOCAL= 36,
    ECHAR= 37,
    PN_CHARS_U= 38,
    PN_CHARS= 39,
    EXPONENT= 40,
    COMMENT= 41,
    PLX= 42,
    PERCENT= 43,
    PN_LOCAL_ESC= 44,
    HEX= 45,
    PN_CHARS_BASE= 46;

// public instance methods/vars
org.antlr.lang.extend(ASTBuildingTurtleParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return ASTBuildingTurtleParser.tokenNames; },
    getGrammarFileName: function() { return "ASTBuildingTurtle.g"; }
});
org.antlr.lang.augmentObject(ASTBuildingTurtleParser.prototype, {

    // inline static return class
    turtleDoc_return: (function() {
        ASTBuildingTurtleParser.turtleDoc_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.turtleDoc_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:67:1: turtleDoc : ( WS )* ( statement )* -> ( statement )* ;
    // $ANTLR start "turtleDoc"
    turtleDoc: function() {
        var retval = new ASTBuildingTurtleParser.turtleDoc_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var WS1 = null;
         var statement2 = null;

        var WS1_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_statement=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule statement");
        try {
            // ASTBuildingTurtle.g:68:4: ( ( WS )* ( statement )* -> ( statement )* )
            // ASTBuildingTurtle.g:68:6: ( WS )* ( statement )*
            // ASTBuildingTurtle.g:68:6: ( WS )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==WS) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ASTBuildingTurtle.g:68:6: WS
                    WS1=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_turtleDoc90);  
                    stream_WS.add(WS1);



                    break;

                default :
                    break loop1;
                }
            } while (true);

            // ASTBuildingTurtle.g:68:10: ( statement )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>=PREFIX && LA2_0<=BASE)||LA2_0==PAREN_ROUND_OPEN||(LA2_0>=BLANK_NODE_LABEL && LA2_0<=PAREN_BRACKETS_OPEN)||LA2_0==PNAME_LN) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // ASTBuildingTurtle.g:68:10: statement
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_statement_in_turtleDoc93);
                    statement2=this.statement();

                    this.state._fsp--;

                    stream_statement.add(statement2.getTree());


                    break;

                default :
                    break loop2;
                }
            } while (true);



            // AST REWRITE
            // elements: statement
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 68:21: -> ( statement )*
            {
                // ASTBuildingTurtle.g:68:24: ( statement )*
                while ( stream_statement.hasNext() ) {
                    this.adaptor.addChild(root_0, stream_statement.nextTree());

                }
                stream_statement.reset();

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    statement_return: (function() {
        ASTBuildingTurtleParser.statement_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:71:1: statement : ( directive (ws1= WS )* dot= DOT (ws2= WS )* -> directive | triples ( WS )* DOT ( WS )* -> triples );
    // $ANTLR start "statement"
    statement: function() {
        var retval = new ASTBuildingTurtleParser.statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ws1 = null;
        var dot = null;
        var ws2 = null;
        var WS5 = null;
        var DOT6 = null;
        var WS7 = null;
         var directive3 = null;
         var triples4 = null;

        var ws1_tree=null;
        var dot_tree=null;
        var ws2_tree=null;
        var WS5_tree=null;
        var DOT6_tree=null;
        var WS7_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_DOT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token DOT");
        var stream_triples=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule triples");
        var stream_directive=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule directive");
        try {
            // ASTBuildingTurtle.g:72:4: ( directive (ws1= WS )* dot= DOT (ws2= WS )* -> directive | triples ( WS )* DOT ( WS )* -> triples )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==PREFIX||LA7_0==BASE) ) {
                alt7=1;
            }
            else if ( ((LA7_0>=PNAME_NS && LA7_0<=IRIREF)||LA7_0==PAREN_ROUND_OPEN||(LA7_0>=BLANK_NODE_LABEL && LA7_0<=PAREN_BRACKETS_OPEN)||LA7_0==PNAME_LN) ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // ASTBuildingTurtle.g:72:6: directive (ws1= WS )* dot= DOT (ws2= WS )*
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_directive_in_statement114);
                    directive3=this.directive();

                    this.state._fsp--;

                    stream_directive.add(directive3.getTree());
                    // ASTBuildingTurtle.g:72:19: (ws1= WS )*
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( (LA3_0==WS) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // ASTBuildingTurtle.g:72:19: ws1= WS
                            ws1=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_statement118);  
                            stream_WS.add(ws1);



                            break;

                        default :
                            break loop3;
                        }
                    } while (true);

                    dot=this.match(this.input,DOT,ASTBuildingTurtleParser.FOLLOW_DOT_in_statement123);  
                    stream_DOT.add(dot);

                    // ASTBuildingTurtle.g:72:35: (ws2= WS )*
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( (LA4_0==WS) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // ASTBuildingTurtle.g:72:35: ws2= WS
                            ws2=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_statement127);  
                            stream_WS.add(ws2);



                            break;

                        default :
                            break loop4;
                        }
                    } while (true);



                    // AST REWRITE
                    // elements: directive
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 72:40: -> directive
                    {
                        this.adaptor.addChild(root_0, stream_directive.nextTree());

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ASTBuildingTurtle.g:73:6: triples ( WS )* DOT ( WS )*
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_triples_in_statement139);
                    triples4=this.triples();

                    this.state._fsp--;

                    stream_triples.add(triples4.getTree());
                    // ASTBuildingTurtle.g:73:14: ( WS )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( (LA5_0==WS) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // ASTBuildingTurtle.g:73:14: WS
                            WS5=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_statement141);  
                            stream_WS.add(WS5);



                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    DOT6=this.match(this.input,DOT,ASTBuildingTurtleParser.FOLLOW_DOT_in_statement144);  
                    stream_DOT.add(DOT6);

                    // ASTBuildingTurtle.g:73:22: ( WS )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0==WS) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // ASTBuildingTurtle.g:73:22: WS
                            WS7=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_statement146);  
                            stream_WS.add(WS7);



                            break;

                        default :
                            break loop6;
                        }
                    } while (true);



                    // AST REWRITE
                    // elements: triples
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 73:26: -> triples
                    {
                        this.adaptor.addChild(root_0, stream_triples.nextTree());

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    directive_return: (function() {
        ASTBuildingTurtleParser.directive_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.directive_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:77:1: directive : ( prefixID | base );
    // $ANTLR start "directive"
    directive: function() {
        var retval = new ASTBuildingTurtleParser.directive_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var prefixID8 = null;
         var base9 = null;


        try {
            // ASTBuildingTurtle.g:78:4: ( prefixID | base )
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0==PREFIX) ) {
                alt8=1;
            }
            else if ( (LA8_0==BASE) ) {
                alt8=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 8, 0, this.input);

                throw nvae;
            }
            switch (alt8) {
                case 1 :
                    // ASTBuildingTurtle.g:78:6: prefixID
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_prefixID_in_directive167);
                    prefixID8=this.prefixID();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, prefixID8.getTree());


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:79:6: base
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_base_in_directive174);
                    base9=this.base();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, base9.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    prefixID_return: (function() {
        ASTBuildingTurtleParser.prefixID_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.prefixID_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:82:1: prefixID : prefix= PREFIX (ws1= WS )+ namens= PNAME_NS (ws2= WS )* iriref= IRIREF -> ^( PREFIX PNAME_NS IRIREF ) ;
    // $ANTLR start "prefixID"
    prefixID: function() {
        var retval = new ASTBuildingTurtleParser.prefixID_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var prefix = null;
        var ws1 = null;
        var namens = null;
        var ws2 = null;
        var iriref = null;

        var prefix_tree=null;
        var ws1_tree=null;
        var namens_tree=null;
        var ws2_tree=null;
        var iriref_tree=null;
        var stream_PREFIX=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PREFIX");
        var stream_PNAME_NS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PNAME_NS");
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_IRIREF=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IRIREF");

        try {
            // ASTBuildingTurtle.g:83:4: (prefix= PREFIX (ws1= WS )+ namens= PNAME_NS (ws2= WS )* iriref= IRIREF -> ^( PREFIX PNAME_NS IRIREF ) )
            // ASTBuildingTurtle.g:83:6: prefix= PREFIX (ws1= WS )+ namens= PNAME_NS (ws2= WS )* iriref= IRIREF
            prefix=this.match(this.input,PREFIX,ASTBuildingTurtleParser.FOLLOW_PREFIX_in_prefixID191);  
            stream_PREFIX.add(prefix);

            // ASTBuildingTurtle.g:83:23: (ws1= WS )+
            var cnt9=0;
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( (LA9_0==WS) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // ASTBuildingTurtle.g:83:23: ws1= WS
                    ws1=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_prefixID195);  
                    stream_WS.add(ws1);



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

            namens=this.match(this.input,PNAME_NS,ASTBuildingTurtleParser.FOLLOW_PNAME_NS_in_prefixID200);  
            stream_PNAME_NS.add(namens);

            // ASTBuildingTurtle.g:83:47: (ws2= WS )*
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( (LA10_0==WS) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // ASTBuildingTurtle.g:83:47: ws2= WS
                    ws2=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_prefixID204);  
                    stream_WS.add(ws2);



                    break;

                default :
                    break loop10;
                }
            } while (true);

            iriref=this.match(this.input,IRIREF,ASTBuildingTurtleParser.FOLLOW_IRIREF_in_prefixID209);  
            stream_IRIREF.add(iriref);



            // AST REWRITE
            // elements: PNAME_NS, PREFIX, IRIREF
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 83:66: -> ^( PREFIX PNAME_NS IRIREF )
            {
                // ASTBuildingTurtle.g:83:69: ^( PREFIX PNAME_NS IRIREF )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(stream_PREFIX.nextNode(), root_1);

                this.adaptor.addChild(root_1, stream_PNAME_NS.nextNode());
                this.adaptor.addChild(root_1, stream_IRIREF.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    base_return: (function() {
        ASTBuildingTurtleParser.base_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.base_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:86:1: base : base1= BASE (ws= WS )* iriref= IRIREF -> ^( BASE IRIREF ) ;
    // $ANTLR start "base"
    base: function() {
        var retval = new ASTBuildingTurtleParser.base_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var base1 = null;
        var ws = null;
        var iriref = null;

        var base1_tree=null;
        var ws_tree=null;
        var iriref_tree=null;
        var stream_BASE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token BASE");
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_IRIREF=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IRIREF");

        try {
            // ASTBuildingTurtle.g:87:4: (base1= BASE (ws= WS )* iriref= IRIREF -> ^( BASE IRIREF ) )
            // ASTBuildingTurtle.g:87:6: base1= BASE (ws= WS )* iriref= IRIREF
            base1=this.match(this.input,BASE,ASTBuildingTurtleParser.FOLLOW_BASE_in_base236);  
            stream_BASE.add(base1);

            // ASTBuildingTurtle.g:87:19: (ws= WS )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0==WS) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // ASTBuildingTurtle.g:87:19: ws= WS
                    ws=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_base240);  
                    stream_WS.add(ws);



                    break;

                default :
                    break loop11;
                }
            } while (true);

            iriref=this.match(this.input,IRIREF,ASTBuildingTurtleParser.FOLLOW_IRIREF_in_base245);  
            stream_IRIREF.add(iriref);



            // AST REWRITE
            // elements: IRIREF, BASE
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 87:38: -> ^( BASE IRIREF )
            {
                // ASTBuildingTurtle.g:87:41: ^( BASE IRIREF )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(stream_BASE.nextNode(), root_1);

                this.adaptor.addChild(root_1, stream_IRIREF.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    triples_return: (function() {
        ASTBuildingTurtleParser.triples_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.triples_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:90:1: triples : ( subject ( WS )* predicateObjectList -> ^( DEF_TRIPLES subject ( predicateObjectList )+ ) | blankNodePropertyList ( predicateObjectList )? -> ^( DEF_TRIPLES blankNodePropertyList ( predicateObjectList )? ) );
    // $ANTLR start "triples"
    triples: function() {
        var retval = new ASTBuildingTurtleParser.triples_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var WS11 = null;
         var subject10 = null;
         var predicateObjectList12 = null;
         var blankNodePropertyList13 = null;
         var predicateObjectList14 = null;

        var WS11_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_subject=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule subject");
        var stream_blankNodePropertyList=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule blankNodePropertyList");
        var stream_predicateObjectList=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule predicateObjectList");
        try {
            // ASTBuildingTurtle.g:91:5: ( subject ( WS )* predicateObjectList -> ^( DEF_TRIPLES subject ( predicateObjectList )+ ) | blankNodePropertyList ( predicateObjectList )? -> ^( DEF_TRIPLES blankNodePropertyList ( predicateObjectList )? ) )
            var alt14=2;
            alt14 = this.dfa14.predict(this.input);
            switch (alt14) {
                case 1 :
                    // ASTBuildingTurtle.g:91:7: subject ( WS )* predicateObjectList
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_subject_in_triples269);
                    subject10=this.subject();

                    this.state._fsp--;

                    stream_subject.add(subject10.getTree());
                    // ASTBuildingTurtle.g:91:15: ( WS )*
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( (LA12_0==WS) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // ASTBuildingTurtle.g:91:15: WS
                            WS11=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_triples271);  
                            stream_WS.add(WS11);



                            break;

                        default :
                            break loop12;
                        }
                    } while (true);

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_predicateObjectList_in_triples274);
                    predicateObjectList12=this.predicateObjectList();

                    this.state._fsp--;

                    stream_predicateObjectList.add(predicateObjectList12.getTree());


                    // AST REWRITE
                    // elements: subject, predicateObjectList
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 91:39: -> ^( DEF_TRIPLES subject ( predicateObjectList )+ )
                    {
                        // ASTBuildingTurtle.g:91:42: ^( DEF_TRIPLES subject ( predicateObjectList )+ )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(DEF_TRIPLES, "DEF_TRIPLES"), root_1);

                        this.adaptor.addChild(root_1, stream_subject.nextTree());
                        if ( !(stream_predicateObjectList.hasNext()) ) {
                            throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                        }
                        while ( stream_predicateObjectList.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_predicateObjectList.nextTree());

                        }
                        stream_predicateObjectList.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ASTBuildingTurtle.g:92:7: blankNodePropertyList ( predicateObjectList )?
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_blankNodePropertyList_in_triples293);
                    blankNodePropertyList13=this.blankNodePropertyList();

                    this.state._fsp--;

                    stream_blankNodePropertyList.add(blankNodePropertyList13.getTree());
                    // ASTBuildingTurtle.g:92:29: ( predicateObjectList )?
                    var alt13=2;
                    var LA13_0 = this.input.LA(1);

                    if ( ((LA13_0>=PNAME_NS && LA13_0<=IRIREF)||LA13_0==A||LA13_0==PNAME_LN) ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // ASTBuildingTurtle.g:92:29: predicateObjectList
                            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_predicateObjectList_in_triples295);
                            predicateObjectList14=this.predicateObjectList();

                            this.state._fsp--;

                            stream_predicateObjectList.add(predicateObjectList14.getTree());


                            break;

                    }



                    // AST REWRITE
                    // elements: predicateObjectList, blankNodePropertyList
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 92:50: -> ^( DEF_TRIPLES blankNodePropertyList ( predicateObjectList )? )
                    {
                        // ASTBuildingTurtle.g:92:53: ^( DEF_TRIPLES blankNodePropertyList ( predicateObjectList )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(DEF_TRIPLES, "DEF_TRIPLES"), root_1);

                        this.adaptor.addChild(root_1, stream_blankNodePropertyList.nextTree());
                        // ASTBuildingTurtle.g:92:89: ( predicateObjectList )?
                        if ( stream_predicateObjectList.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_predicateObjectList.nextTree());

                        }
                        stream_predicateObjectList.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    subject_return: (function() {
        ASTBuildingTurtleParser.subject_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.subject_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:95:1: subject : ( iri | blank );
    // $ANTLR start "subject"
    subject: function() {
        var retval = new ASTBuildingTurtleParser.subject_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var iri15 = null;
         var blank16 = null;


        try {
            // ASTBuildingTurtle.g:96:4: ( iri | blank )
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( ((LA15_0>=PNAME_NS && LA15_0<=IRIREF)||LA15_0==PNAME_LN) ) {
                alt15=1;
            }
            else if ( (LA15_0==PAREN_ROUND_OPEN||(LA15_0>=BLANK_NODE_LABEL && LA15_0<=PAREN_BRACKETS_OPEN)) ) {
                alt15=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 15, 0, this.input);

                throw nvae;
            }
            switch (alt15) {
                case 1 :
                    // ASTBuildingTurtle.g:96:6: iri
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_iri_in_subject323);
                    iri15=this.iri();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, iri15.getTree());


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:96:10: blank
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_blank_in_subject325);
                    blank16=this.blank();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, blank16.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    predicateObjectList_return: (function() {
        ASTBuildingTurtleParser.predicateObjectList_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.predicateObjectList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:99:1: predicateObjectList : verb ( WS )+ objectList ( WS )* ( SEMI ( WS )* ( predicateObjectList )? )* -> ^( verb objectList ) ( predicateObjectList )* ;
    // $ANTLR start "predicateObjectList"
    predicateObjectList: function() {
        var retval = new ASTBuildingTurtleParser.predicateObjectList_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var WS18 = null;
        var WS20 = null;
        var SEMI21 = null;
        var WS22 = null;
         var verb17 = null;
         var objectList19 = null;
         var predicateObjectList23 = null;

        var WS18_tree=null;
        var WS20_tree=null;
        var SEMI21_tree=null;
        var WS22_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_SEMI=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token SEMI");
        var stream_verb=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule verb");
        var stream_predicateObjectList=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule predicateObjectList");
        var stream_objectList=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule objectList");
        try {
            // ASTBuildingTurtle.g:100:6: ( verb ( WS )+ objectList ( WS )* ( SEMI ( WS )* ( predicateObjectList )? )* -> ^( verb objectList ) ( predicateObjectList )* )
            // ASTBuildingTurtle.g:100:8: verb ( WS )+ objectList ( WS )* ( SEMI ( WS )* ( predicateObjectList )? )*
            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_verb_in_predicateObjectList342);
            verb17=this.verb();

            this.state._fsp--;

            stream_verb.add(verb17.getTree());
            // ASTBuildingTurtle.g:100:13: ( WS )+
            var cnt16=0;
            loop16:
            do {
                var alt16=2;
                var LA16_0 = this.input.LA(1);

                if ( (LA16_0==WS) ) {
                    alt16=1;
                }


                switch (alt16) {
                case 1 :
                    // ASTBuildingTurtle.g:100:13: WS
                    WS18=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_predicateObjectList344);  
                    stream_WS.add(WS18);



                    break;

                default :
                    if ( cnt16 >= 1 ) {
                        break loop16;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(16, this.input);
                        throw eee;
                }
                cnt16++;
            } while (true);

            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_objectList_in_predicateObjectList347);
            objectList19=this.objectList();

            this.state._fsp--;

            stream_objectList.add(objectList19.getTree());
            // ASTBuildingTurtle.g:100:28: ( WS )*
            loop17:
            do {
                var alt17=2;
                var LA17_0 = this.input.LA(1);

                if ( (LA17_0==WS) ) {
                    alt17=1;
                }


                switch (alt17) {
                case 1 :
                    // ASTBuildingTurtle.g:100:28: WS
                    WS20=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_predicateObjectList349);  
                    stream_WS.add(WS20);



                    break;

                default :
                    break loop17;
                }
            } while (true);

            // ASTBuildingTurtle.g:100:32: ( SEMI ( WS )* ( predicateObjectList )? )*
            loop20:
            do {
                var alt20=2;
                var LA20_0 = this.input.LA(1);

                if ( (LA20_0==SEMI) ) {
                    alt20=1;
                }


                switch (alt20) {
                case 1 :
                    // ASTBuildingTurtle.g:100:33: SEMI ( WS )* ( predicateObjectList )?
                    SEMI21=this.match(this.input,SEMI,ASTBuildingTurtleParser.FOLLOW_SEMI_in_predicateObjectList353);  
                    stream_SEMI.add(SEMI21);

                    // ASTBuildingTurtle.g:100:38: ( WS )*
                    loop18:
                    do {
                        var alt18=2;
                        var LA18_0 = this.input.LA(1);

                        if ( (LA18_0==WS) ) {
                            alt18=1;
                        }


                        switch (alt18) {
                        case 1 :
                            // ASTBuildingTurtle.g:100:38: WS
                            WS22=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_predicateObjectList355);  
                            stream_WS.add(WS22);



                            break;

                        default :
                            break loop18;
                        }
                    } while (true);

                    // ASTBuildingTurtle.g:100:42: ( predicateObjectList )?
                    var alt19=2;
                    var LA19_0 = this.input.LA(1);

                    if ( ((LA19_0>=PNAME_NS && LA19_0<=IRIREF)||LA19_0==A||LA19_0==PNAME_LN) ) {
                        alt19=1;
                    }
                    switch (alt19) {
                        case 1 :
                            // ASTBuildingTurtle.g:100:42: predicateObjectList
                            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_predicateObjectList_in_predicateObjectList358);
                            predicateObjectList23=this.predicateObjectList();

                            this.state._fsp--;

                            stream_predicateObjectList.add(predicateObjectList23.getTree());


                            break;

                    }



                    break;

                default :
                    break loop20;
                }
            } while (true);



            // AST REWRITE
            // elements: objectList, verb, predicateObjectList
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 100:65: -> ^( verb objectList ) ( predicateObjectList )*
            {
                // ASTBuildingTurtle.g:100:68: ^( verb objectList )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(stream_verb.nextNode(), root_1);

                this.adaptor.addChild(root_1, stream_objectList.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }
                // ASTBuildingTurtle.g:100:87: ( predicateObjectList )*
                while ( stream_predicateObjectList.hasNext() ) {
                    this.adaptor.addChild(root_0, stream_predicateObjectList.nextTree());

                }
                stream_predicateObjectList.reset();

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    verb_return: (function() {
        ASTBuildingTurtleParser.verb_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.verb_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:103:1: verb : ( predicate | A );
    // $ANTLR start "verb"
    verb: function() {
        var retval = new ASTBuildingTurtleParser.verb_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var A25 = null;
         var predicate24 = null;

        var A25_tree=null;

        try {
            // ASTBuildingTurtle.g:104:5: ( predicate | A )
            var alt21=2;
            var LA21_0 = this.input.LA(1);

            if ( ((LA21_0>=PNAME_NS && LA21_0<=IRIREF)||LA21_0==PNAME_LN) ) {
                alt21=1;
            }
            else if ( (LA21_0==A) ) {
                alt21=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 21, 0, this.input);

                throw nvae;
            }
            switch (alt21) {
                case 1 :
                    // ASTBuildingTurtle.g:104:7: predicate
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_predicate_in_verb390);
                    predicate24=this.predicate();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, predicate24.getTree());


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:105:7: A
                    root_0 = this.adaptor.nil();

                    A25=this.match(this.input,A,ASTBuildingTurtleParser.FOLLOW_A_in_verb398); 
                    A25_tree = this.adaptor.create(A25);
                    this.adaptor.addChild(root_0, A25_tree);



                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    predicate_return: (function() {
        ASTBuildingTurtleParser.predicate_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.predicate_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:108:1: predicate : iri ;
    // $ANTLR start "predicate"
    predicate: function() {
        var retval = new ASTBuildingTurtleParser.predicate_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var iri26 = null;


        try {
            // ASTBuildingTurtle.g:109:4: ( iri )
            // ASTBuildingTurtle.g:109:6: iri
            root_0 = this.adaptor.nil();

            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_iri_in_predicate414);
            iri26=this.iri();

            this.state._fsp--;

            this.adaptor.addChild(root_0, iri26.getTree());



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    objectList_return: (function() {
        ASTBuildingTurtleParser.objectList_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.objectList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:112:1: objectList : object ( WS )* ( COMMA ( WS )* object ( WS )* )* -> ( object )+ ;
    // $ANTLR start "objectList"
    objectList: function() {
        var retval = new ASTBuildingTurtleParser.objectList_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var WS28 = null;
        var COMMA29 = null;
        var WS30 = null;
        var WS32 = null;
         var object27 = null;
         var object31 = null;

        var WS28_tree=null;
        var COMMA29_tree=null;
        var WS30_tree=null;
        var WS32_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_COMMA=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token COMMA");
        var stream_object=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule object");
        try {
            // ASTBuildingTurtle.g:113:4: ( object ( WS )* ( COMMA ( WS )* object ( WS )* )* -> ( object )+ )
            // ASTBuildingTurtle.g:113:6: object ( WS )* ( COMMA ( WS )* object ( WS )* )*
            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_object_in_objectList429);
            object27=this.object();

            this.state._fsp--;

            stream_object.add(object27.getTree());
            // ASTBuildingTurtle.g:113:13: ( WS )*
            loop22:
            do {
                var alt22=2;
                var LA22_0 = this.input.LA(1);

                if ( (LA22_0==WS) ) {
                    alt22=1;
                }


                switch (alt22) {
                case 1 :
                    // ASTBuildingTurtle.g:113:13: WS
                    WS28=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_objectList431);  
                    stream_WS.add(WS28);



                    break;

                default :
                    break loop22;
                }
            } while (true);

            // ASTBuildingTurtle.g:113:17: ( COMMA ( WS )* object ( WS )* )*
            loop25:
            do {
                var alt25=2;
                var LA25_0 = this.input.LA(1);

                if ( (LA25_0==COMMA) ) {
                    alt25=1;
                }


                switch (alt25) {
                case 1 :
                    // ASTBuildingTurtle.g:113:18: COMMA ( WS )* object ( WS )*
                    COMMA29=this.match(this.input,COMMA,ASTBuildingTurtleParser.FOLLOW_COMMA_in_objectList435);  
                    stream_COMMA.add(COMMA29);

                    // ASTBuildingTurtle.g:113:24: ( WS )*
                    loop23:
                    do {
                        var alt23=2;
                        var LA23_0 = this.input.LA(1);

                        if ( (LA23_0==WS) ) {
                            alt23=1;
                        }


                        switch (alt23) {
                        case 1 :
                            // ASTBuildingTurtle.g:113:24: WS
                            WS30=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_objectList437);  
                            stream_WS.add(WS30);



                            break;

                        default :
                            break loop23;
                        }
                    } while (true);

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_object_in_objectList440);
                    object31=this.object();

                    this.state._fsp--;

                    stream_object.add(object31.getTree());
                    // ASTBuildingTurtle.g:113:35: ( WS )*
                    loop24:
                    do {
                        var alt24=2;
                        var LA24_0 = this.input.LA(1);

                        if ( (LA24_0==WS) ) {
                            alt24=1;
                        }


                        switch (alt24) {
                        case 1 :
                            // ASTBuildingTurtle.g:113:35: WS
                            WS32=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_objectList442);  
                            stream_WS.add(WS32);



                            break;

                        default :
                            break loop24;
                        }
                    } while (true);



                    break;

                default :
                    break loop25;
                }
            } while (true);



            // AST REWRITE
            // elements: object
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 113:41: -> ( object )+
            {
                if ( !(stream_object.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_object.hasNext() ) {
                    this.adaptor.addChild(root_0, stream_object.nextTree());

                }
                stream_object.reset();

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    object_return: (function() {
        ASTBuildingTurtleParser.object_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.object_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:116:1: object : ( iri | literal | blankNodePropertyList | blank ) ;
    // $ANTLR start "object"
    object: function() {
        var retval = new ASTBuildingTurtleParser.object_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var iri33 = null;
         var literal34 = null;
         var blankNodePropertyList35 = null;
         var blank36 = null;


        try {
            // ASTBuildingTurtle.g:117:4: ( ( iri | literal | blankNodePropertyList | blank ) )
            // ASTBuildingTurtle.g:117:6: ( iri | literal | blankNodePropertyList | blank )
            root_0 = this.adaptor.nil();

            // ASTBuildingTurtle.g:117:6: ( iri | literal | blankNodePropertyList | blank )
            var alt26=4;
            alt26 = this.dfa26.predict(this.input);
            switch (alt26) {
                case 1 :
                    // ASTBuildingTurtle.g:117:7: iri
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_iri_in_object466);
                    iri33=this.iri();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, iri33.getTree());


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:117:11: literal
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_literal_in_object468);
                    literal34=this.literal();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, literal34.getTree());


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:117:19: blankNodePropertyList
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_blankNodePropertyList_in_object470);
                    blankNodePropertyList35=this.blankNodePropertyList();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, blankNodePropertyList35.getTree());


                    break;
                case 4 :
                    // ASTBuildingTurtle.g:117:41: blank
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_blank_in_object472);
                    blank36=this.blank();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, blank36.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    blank_return: (function() {
        ASTBuildingTurtleParser.blank_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.blank_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:120:1: blank : ( blankNode | collection );
    // $ANTLR start "blank"
    blank: function() {
        var retval = new ASTBuildingTurtleParser.blank_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var blankNode37 = null;
         var collection38 = null;


        try {
            // ASTBuildingTurtle.g:121:4: ( blankNode | collection )
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( ((LA27_0>=BLANK_NODE_LABEL && LA27_0<=PAREN_BRACKETS_OPEN)) ) {
                alt27=1;
            }
            else if ( (LA27_0==PAREN_ROUND_OPEN) ) {
                alt27=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 27, 0, this.input);

                throw nvae;
            }
            switch (alt27) {
                case 1 :
                    // ASTBuildingTurtle.g:121:6: blankNode
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_blankNode_in_blank488);
                    blankNode37=this.blankNode();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, blankNode37.getTree());


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:122:6: collection
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_collection_in_blank495);
                    collection38=this.collection();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, collection38.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    collection_return: (function() {
        ASTBuildingTurtleParser.collection_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.collection_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:126:1: collection : PAREN_ROUND_OPEN ( WS )* ( object ( WS )* )* PAREN_ROUND_CLOSE ( WS )* -> ^( DEF_COLLECTION ( object )* ) ;
    // $ANTLR start "collection"
    collection: function() {
        var retval = new ASTBuildingTurtleParser.collection_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PAREN_ROUND_OPEN39 = null;
        var WS40 = null;
        var WS42 = null;
        var PAREN_ROUND_CLOSE43 = null;
        var WS44 = null;
         var object41 = null;

        var PAREN_ROUND_OPEN39_tree=null;
        var WS40_tree=null;
        var WS42_tree=null;
        var PAREN_ROUND_CLOSE43_tree=null;
        var WS44_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_PAREN_ROUND_OPEN=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PAREN_ROUND_OPEN");
        var stream_PAREN_ROUND_CLOSE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PAREN_ROUND_CLOSE");
        var stream_object=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule object");
        try {
            // ASTBuildingTurtle.g:127:4: ( PAREN_ROUND_OPEN ( WS )* ( object ( WS )* )* PAREN_ROUND_CLOSE ( WS )* -> ^( DEF_COLLECTION ( object )* ) )
            // ASTBuildingTurtle.g:127:6: PAREN_ROUND_OPEN ( WS )* ( object ( WS )* )* PAREN_ROUND_CLOSE ( WS )*
            PAREN_ROUND_OPEN39=this.match(this.input,PAREN_ROUND_OPEN,ASTBuildingTurtleParser.FOLLOW_PAREN_ROUND_OPEN_in_collection511);  
            stream_PAREN_ROUND_OPEN.add(PAREN_ROUND_OPEN39);

            // ASTBuildingTurtle.g:127:23: ( WS )*
            loop28:
            do {
                var alt28=2;
                var LA28_0 = this.input.LA(1);

                if ( (LA28_0==WS) ) {
                    alt28=1;
                }


                switch (alt28) {
                case 1 :
                    // ASTBuildingTurtle.g:127:23: WS
                    WS40=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_collection513);  
                    stream_WS.add(WS40);



                    break;

                default :
                    break loop28;
                }
            } while (true);

            // ASTBuildingTurtle.g:127:27: ( object ( WS )* )*
            loop30:
            do {
                var alt30=2;
                var LA30_0 = this.input.LA(1);

                if ( ((LA30_0>=PNAME_NS && LA30_0<=IRIREF)||LA30_0==PAREN_ROUND_OPEN||(LA30_0>=BLANK_NODE_LABEL && LA30_0<=PAREN_BRACKETS_OPEN)||(LA30_0>=TRUE && LA30_0<=DOUBLE)||(LA30_0>=STRING_LITERAL_QUOTE && LA30_0<=PNAME_LN)) ) {
                    alt30=1;
                }


                switch (alt30) {
                case 1 :
                    // ASTBuildingTurtle.g:127:28: object ( WS )*
                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_object_in_collection517);
                    object41=this.object();

                    this.state._fsp--;

                    stream_object.add(object41.getTree());
                    // ASTBuildingTurtle.g:127:35: ( WS )*
                    loop29:
                    do {
                        var alt29=2;
                        var LA29_0 = this.input.LA(1);

                        if ( (LA29_0==WS) ) {
                            alt29=1;
                        }


                        switch (alt29) {
                        case 1 :
                            // ASTBuildingTurtle.g:127:35: WS
                            WS42=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_collection519);  
                            stream_WS.add(WS42);



                            break;

                        default :
                            break loop29;
                        }
                    } while (true);



                    break;

                default :
                    break loop30;
                }
            } while (true);

            PAREN_ROUND_CLOSE43=this.match(this.input,PAREN_ROUND_CLOSE,ASTBuildingTurtleParser.FOLLOW_PAREN_ROUND_CLOSE_in_collection524);  
            stream_PAREN_ROUND_CLOSE.add(PAREN_ROUND_CLOSE43);

            // ASTBuildingTurtle.g:127:59: ( WS )*
            loop31:
            do {
                var alt31=2;
                var LA31_0 = this.input.LA(1);

                if ( (LA31_0==WS) ) {
                    alt31=1;
                }


                switch (alt31) {
                case 1 :
                    // ASTBuildingTurtle.g:127:59: WS
                    WS44=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_collection526);  
                    stream_WS.add(WS44);



                    break;

                default :
                    break loop31;
                }
            } while (true);



            // AST REWRITE
            // elements: object
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 127:63: -> ^( DEF_COLLECTION ( object )* )
            {
                // ASTBuildingTurtle.g:127:66: ^( DEF_COLLECTION ( object )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(DEF_COLLECTION, "DEF_COLLECTION"), root_1);

                // ASTBuildingTurtle.g:127:83: ( object )*
                while ( stream_object.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_object.nextTree());

                }
                stream_object.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    blankNode_return: (function() {
        ASTBuildingTurtleParser.blankNode_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.blankNode_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:130:1: blankNode : ( BLANK_NODE_LABEL | PAREN_BRACKETS_OPEN ( WS )* PAREN_BRACKETS_CLOSE -> ^( DEF_EMPTY_BLANK ) );
    // $ANTLR start "blankNode"
    blankNode: function() {
        var retval = new ASTBuildingTurtleParser.blankNode_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var BLANK_NODE_LABEL45 = null;
        var PAREN_BRACKETS_OPEN46 = null;
        var WS47 = null;
        var PAREN_BRACKETS_CLOSE48 = null;

        var BLANK_NODE_LABEL45_tree=null;
        var PAREN_BRACKETS_OPEN46_tree=null;
        var WS47_tree=null;
        var PAREN_BRACKETS_CLOSE48_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_PAREN_BRACKETS_OPEN=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PAREN_BRACKETS_OPEN");
        var stream_PAREN_BRACKETS_CLOSE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PAREN_BRACKETS_CLOSE");

        try {
            // ASTBuildingTurtle.g:131:4: ( BLANK_NODE_LABEL | PAREN_BRACKETS_OPEN ( WS )* PAREN_BRACKETS_CLOSE -> ^( DEF_EMPTY_BLANK ) )
            var alt33=2;
            var LA33_0 = this.input.LA(1);

            if ( (LA33_0==BLANK_NODE_LABEL) ) {
                alt33=1;
            }
            else if ( (LA33_0==PAREN_BRACKETS_OPEN) ) {
                alt33=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                throw nvae;
            }
            switch (alt33) {
                case 1 :
                    // ASTBuildingTurtle.g:131:6: BLANK_NODE_LABEL
                    root_0 = this.adaptor.nil();

                    BLANK_NODE_LABEL45=this.match(this.input,BLANK_NODE_LABEL,ASTBuildingTurtleParser.FOLLOW_BLANK_NODE_LABEL_in_blankNode551); 
                    BLANK_NODE_LABEL45_tree = this.adaptor.create(BLANK_NODE_LABEL45);
                    this.adaptor.addChild(root_0, BLANK_NODE_LABEL45_tree);



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:132:6: PAREN_BRACKETS_OPEN ( WS )* PAREN_BRACKETS_CLOSE
                    PAREN_BRACKETS_OPEN46=this.match(this.input,PAREN_BRACKETS_OPEN,ASTBuildingTurtleParser.FOLLOW_PAREN_BRACKETS_OPEN_in_blankNode558);  
                    stream_PAREN_BRACKETS_OPEN.add(PAREN_BRACKETS_OPEN46);

                    // ASTBuildingTurtle.g:132:26: ( WS )*
                    loop32:
                    do {
                        var alt32=2;
                        var LA32_0 = this.input.LA(1);

                        if ( (LA32_0==WS) ) {
                            alt32=1;
                        }


                        switch (alt32) {
                        case 1 :
                            // ASTBuildingTurtle.g:132:26: WS
                            WS47=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_blankNode560);  
                            stream_WS.add(WS47);



                            break;

                        default :
                            break loop32;
                        }
                    } while (true);

                    PAREN_BRACKETS_CLOSE48=this.match(this.input,PAREN_BRACKETS_CLOSE,ASTBuildingTurtleParser.FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNode563);  
                    stream_PAREN_BRACKETS_CLOSE.add(PAREN_BRACKETS_CLOSE48);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 132:51: -> ^( DEF_EMPTY_BLANK )
                    {
                        // ASTBuildingTurtle.g:132:54: ^( DEF_EMPTY_BLANK )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(DEF_EMPTY_BLANK, "DEF_EMPTY_BLANK"), root_1);

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    blankNodePropertyList_return: (function() {
        ASTBuildingTurtleParser.blankNodePropertyList_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.blankNodePropertyList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:135:1: blankNodePropertyList : PAREN_BRACKETS_OPEN ( WS )* predicateObjectList ( WS )* PAREN_BRACKETS_CLOSE ( WS )* -> ^( DEF_BNPL ( predicateObjectList )+ ) ;
    // $ANTLR start "blankNodePropertyList"
    blankNodePropertyList: function() {
        var retval = new ASTBuildingTurtleParser.blankNodePropertyList_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var PAREN_BRACKETS_OPEN49 = null;
        var WS50 = null;
        var WS52 = null;
        var PAREN_BRACKETS_CLOSE53 = null;
        var WS54 = null;
         var predicateObjectList51 = null;

        var PAREN_BRACKETS_OPEN49_tree=null;
        var WS50_tree=null;
        var WS52_tree=null;
        var PAREN_BRACKETS_CLOSE53_tree=null;
        var WS54_tree=null;
        var stream_WS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token WS");
        var stream_PAREN_BRACKETS_OPEN=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PAREN_BRACKETS_OPEN");
        var stream_PAREN_BRACKETS_CLOSE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token PAREN_BRACKETS_CLOSE");
        var stream_predicateObjectList=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule predicateObjectList");
        try {
            // ASTBuildingTurtle.g:136:4: ( PAREN_BRACKETS_OPEN ( WS )* predicateObjectList ( WS )* PAREN_BRACKETS_CLOSE ( WS )* -> ^( DEF_BNPL ( predicateObjectList )+ ) )
            // ASTBuildingTurtle.g:136:6: PAREN_BRACKETS_OPEN ( WS )* predicateObjectList ( WS )* PAREN_BRACKETS_CLOSE ( WS )*
            PAREN_BRACKETS_OPEN49=this.match(this.input,PAREN_BRACKETS_OPEN,ASTBuildingTurtleParser.FOLLOW_PAREN_BRACKETS_OPEN_in_blankNodePropertyList584);  
            stream_PAREN_BRACKETS_OPEN.add(PAREN_BRACKETS_OPEN49);

            // ASTBuildingTurtle.g:136:26: ( WS )*
            loop34:
            do {
                var alt34=2;
                var LA34_0 = this.input.LA(1);

                if ( (LA34_0==WS) ) {
                    alt34=1;
                }


                switch (alt34) {
                case 1 :
                    // ASTBuildingTurtle.g:136:26: WS
                    WS50=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_blankNodePropertyList586);  
                    stream_WS.add(WS50);



                    break;

                default :
                    break loop34;
                }
            } while (true);

            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_predicateObjectList_in_blankNodePropertyList589);
            predicateObjectList51=this.predicateObjectList();

            this.state._fsp--;

            stream_predicateObjectList.add(predicateObjectList51.getTree());
            // ASTBuildingTurtle.g:136:50: ( WS )*
            loop35:
            do {
                var alt35=2;
                var LA35_0 = this.input.LA(1);

                if ( (LA35_0==WS) ) {
                    alt35=1;
                }


                switch (alt35) {
                case 1 :
                    // ASTBuildingTurtle.g:136:50: WS
                    WS52=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_blankNodePropertyList591);  
                    stream_WS.add(WS52);



                    break;

                default :
                    break loop35;
                }
            } while (true);

            PAREN_BRACKETS_CLOSE53=this.match(this.input,PAREN_BRACKETS_CLOSE,ASTBuildingTurtleParser.FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNodePropertyList594);  
            stream_PAREN_BRACKETS_CLOSE.add(PAREN_BRACKETS_CLOSE53);

            // ASTBuildingTurtle.g:136:75: ( WS )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( (LA36_0==WS) ) {
                    alt36=1;
                }


                switch (alt36) {
                case 1 :
                    // ASTBuildingTurtle.g:136:75: WS
                    WS54=this.match(this.input,WS,ASTBuildingTurtleParser.FOLLOW_WS_in_blankNodePropertyList596);  
                    stream_WS.add(WS54);



                    break;

                default :
                    break loop36;
                }
            } while (true);



            // AST REWRITE
            // elements: predicateObjectList
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 136:79: -> ^( DEF_BNPL ( predicateObjectList )+ )
            {
                // ASTBuildingTurtle.g:136:82: ^( DEF_BNPL ( predicateObjectList )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(DEF_BNPL, "DEF_BNPL"), root_1);

                if ( !(stream_predicateObjectList.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_predicateObjectList.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_predicateObjectList.nextTree());

                }
                stream_predicateObjectList.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    literal_return: (function() {
        ASTBuildingTurtleParser.literal_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.literal_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:139:1: literal : ( rdfLiteral | numericLiteral | booleanLiteral );
    // $ANTLR start "literal"
    literal: function() {
        var retval = new ASTBuildingTurtleParser.literal_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var rdfLiteral55 = null;
         var numericLiteral56 = null;
         var booleanLiteral57 = null;


        try {
            // ASTBuildingTurtle.g:140:4: ( rdfLiteral | numericLiteral | booleanLiteral )
            var alt37=3;
            switch ( this.input.LA(1) ) {
            case STRING_LITERAL_QUOTE:
            case STRING_LITERAL_SINGLE_QUOTE:
            case STRING_LITERAL_LONG_SINGLE_QUOTE:
            case STRING_LITERAL_LONG_QUOTE:
                alt37=1;
                break;
            case INTEGER:
            case DECIMAL:
            case DOUBLE:
                alt37=2;
                break;
            case TRUE:
            case FALSE:
                alt37=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 37, 0, this.input);

                throw nvae;
            }

            switch (alt37) {
                case 1 :
                    // ASTBuildingTurtle.g:140:6: rdfLiteral
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_rdfLiteral_in_literal621);
                    rdfLiteral55=this.rdfLiteral();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, rdfLiteral55.getTree());


                    break;
                case 2 :
                    // ASTBuildingTurtle.g:140:17: numericLiteral
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_numericLiteral_in_literal623);
                    numericLiteral56=this.numericLiteral();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, numericLiteral56.getTree());


                    break;
                case 3 :
                    // ASTBuildingTurtle.g:140:32: booleanLiteral
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_booleanLiteral_in_literal625);
                    booleanLiteral57=this.booleanLiteral();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, booleanLiteral57.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    booleanLiteral_return: (function() {
        ASTBuildingTurtleParser.booleanLiteral_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.booleanLiteral_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:143:1: booleanLiteral : tok= ( TRUE | FALSE ) ;
    // $ANTLR start "booleanLiteral"
    booleanLiteral: function() {
        var retval = new ASTBuildingTurtleParser.booleanLiteral_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var tok = null;

        var tok_tree=null;

        try {
            // ASTBuildingTurtle.g:144:4: (tok= ( TRUE | FALSE ) )
            // ASTBuildingTurtle.g:144:6: tok= ( TRUE | FALSE )
            root_0 = this.adaptor.nil();

            tok=this.input.LT(1);
            if ( (this.input.LA(1)>=TRUE && this.input.LA(1)<=FALSE) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(tok));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    numericLiteral_return: (function() {
        ASTBuildingTurtleParser.numericLiteral_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.numericLiteral_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:147:1: numericLiteral : tok= ( INTEGER | DECIMAL | DOUBLE ) ;
    // $ANTLR start "numericLiteral"
    numericLiteral: function() {
        var retval = new ASTBuildingTurtleParser.numericLiteral_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var tok = null;

        var tok_tree=null;

        try {
            // ASTBuildingTurtle.g:148:4: (tok= ( INTEGER | DECIMAL | DOUBLE ) )
            // ASTBuildingTurtle.g:148:6: tok= ( INTEGER | DECIMAL | DOUBLE )
            root_0 = this.adaptor.nil();

            tok=this.input.LT(1);
            if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=DOUBLE) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(tok));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    rdfLiteral_return: (function() {
        ASTBuildingTurtleParser.rdfLiteral_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.rdfLiteral_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:151:1: rdfLiteral : string ( LANGTAG | EYES iri )? ;
    // $ANTLR start "rdfLiteral"
    rdfLiteral: function() {
        var retval = new ASTBuildingTurtleParser.rdfLiteral_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LANGTAG59 = null;
        var EYES60 = null;
         var string58 = null;
         var iri61 = null;

        var LANGTAG59_tree=null;
        var EYES60_tree=null;

        try {
            // ASTBuildingTurtle.g:152:4: ( string ( LANGTAG | EYES iri )? )
            // ASTBuildingTurtle.g:152:6: string ( LANGTAG | EYES iri )?
            root_0 = this.adaptor.nil();

            this.pushFollow(ASTBuildingTurtleParser.FOLLOW_string_in_rdfLiteral684);
            string58=this.string();

            this.state._fsp--;

            root_0 = this.adaptor.becomeRoot(string58.getTree(), root_0);
            // ASTBuildingTurtle.g:152:14: ( LANGTAG | EYES iri )?
            var alt38=3;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==LANGTAG) ) {
                alt38=1;
            }
            else if ( (LA38_0==EYES) ) {
                alt38=2;
            }
            switch (alt38) {
                case 1 :
                    // ASTBuildingTurtle.g:152:15: LANGTAG
                    LANGTAG59=this.match(this.input,LANGTAG,ASTBuildingTurtleParser.FOLLOW_LANGTAG_in_rdfLiteral688); 
                    LANGTAG59_tree = this.adaptor.create(LANGTAG59);
                    this.adaptor.addChild(root_0, LANGTAG59_tree);



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:152:23: EYES iri
                    EYES60=this.match(this.input,EYES,ASTBuildingTurtleParser.FOLLOW_EYES_in_rdfLiteral690); 
                    EYES60_tree = this.adaptor.create(EYES60);
                    this.adaptor.addChild(root_0, EYES60_tree);

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_iri_in_rdfLiteral692);
                    iri61=this.iri();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, iri61.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    string_return: (function() {
        ASTBuildingTurtleParser.string_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.string_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:155:1: string : tok= ( STRING_LITERAL_QUOTE | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE ) ;
    // $ANTLR start "string"
    string: function() {
        var retval = new ASTBuildingTurtleParser.string_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var tok = null;

        var tok_tree=null;

        try {
            // ASTBuildingTurtle.g:156:4: (tok= ( STRING_LITERAL_QUOTE | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE ) )
            // ASTBuildingTurtle.g:156:6: tok= ( STRING_LITERAL_QUOTE | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE )
            root_0 = this.adaptor.nil();

            tok=this.input.LT(1);
            if ( (this.input.LA(1)>=STRING_LITERAL_QUOTE && this.input.LA(1)<=STRING_LITERAL_LONG_QUOTE) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(tok));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    iri_return: (function() {
        ASTBuildingTurtleParser.iri_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.iri_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:159:1: iri : ( IRIREF | prefixedName );
    // $ANTLR start "iri"
    iri: function() {
        var retval = new ASTBuildingTurtleParser.iri_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IRIREF62 = null;
         var prefixedName63 = null;

        var IRIREF62_tree=null;

        try {
            // ASTBuildingTurtle.g:160:4: ( IRIREF | prefixedName )
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( (LA39_0==IRIREF) ) {
                alt39=1;
            }
            else if ( (LA39_0==PNAME_NS||LA39_0==PNAME_LN) ) {
                alt39=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 39, 0, this.input);

                throw nvae;
            }
            switch (alt39) {
                case 1 :
                    // ASTBuildingTurtle.g:160:6: IRIREF
                    root_0 = this.adaptor.nil();

                    IRIREF62=this.match(this.input,IRIREF,ASTBuildingTurtleParser.FOLLOW_IRIREF_in_iri735); 
                    IRIREF62_tree = this.adaptor.create(IRIREF62);
                    this.adaptor.addChild(root_0, IRIREF62_tree);



                    break;
                case 2 :
                    // ASTBuildingTurtle.g:161:6: prefixedName
                    root_0 = this.adaptor.nil();

                    this.pushFollow(ASTBuildingTurtleParser.FOLLOW_prefixedName_in_iri742);
                    prefixedName63=this.prefixedName();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, prefixedName63.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },

    // inline static return class
    prefixedName_return: (function() {
        ASTBuildingTurtleParser.prefixedName_return = function(){};
        org.antlr.lang.extend(ASTBuildingTurtleParser.prefixedName_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ASTBuildingTurtle.g:164:1: prefixedName : tok= ( PNAME_LN | PNAME_NS ) ;
    // $ANTLR start "prefixedName"
    prefixedName: function() {
        var retval = new ASTBuildingTurtleParser.prefixedName_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var tok = null;

        var tok_tree=null;

        try {
            // ASTBuildingTurtle.g:165:4: (tok= ( PNAME_LN | PNAME_NS ) )
            // ASTBuildingTurtle.g:165:6: tok= ( PNAME_LN | PNAME_NS )
            root_0 = this.adaptor.nil();

            tok=this.input.LT(1);
            if ( this.input.LA(1)==PNAME_NS||this.input.LA(1)==PNAME_LN ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(tok));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(ASTBuildingTurtleParser, {
    DFA14_eotS:
        "\u0005\uffff",
    DFA14_eofS:
        "\u0005\uffff",
    DFA14_minS:
        "\u0001\u000b\u0001\uffff\u0002\u0008\u0001\uffff",
    DFA14_maxS:
        "\u0001\u0021\u0001\uffff\u0002\u0021\u0001\uffff",
    DFA14_acceptS:
        "\u0001\uffff\u0001\u0001\u0002\uffff\u0001\u0002",
    DFA14_specialS:
        "\u0005\uffff}>",
    DFA14_transitionS: [
            "\u0002\u0001\u0004\uffff\u0001\u0001\u0001\uffff\u0001\u0001"+
            "\u0001\u0002\u000c\uffff\u0001\u0001",
            "",
            "\u0001\u0003\u0002\uffff\u0002\u0004\u0002\uffff\u0001\u0004"+
            "\u0005\uffff\u0001\u0001\u000b\uffff\u0001\u0004",
            "\u0001\u0003\u0002\uffff\u0002\u0004\u0002\uffff\u0001\u0004"+
            "\u0005\uffff\u0001\u0001\u000b\uffff\u0001\u0004",
            ""
    ]
});

org.antlr.lang.augmentObject(ASTBuildingTurtleParser, {
    DFA14_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA14_eotS),
    DFA14_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA14_eofS),
    DFA14_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleParser.DFA14_minS),
    DFA14_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleParser.DFA14_maxS),
    DFA14_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA14_acceptS),
    DFA14_special:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA14_specialS),
    DFA14_transition: (function() {
        var a = [],
            i,
            numStates = ASTBuildingTurtleParser.DFA14_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA14_transitionS[i]));
        }
        return a;
    })()
});

ASTBuildingTurtleParser.DFA14 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 14;
    this.eot = ASTBuildingTurtleParser.DFA14_eot;
    this.eof = ASTBuildingTurtleParser.DFA14_eof;
    this.min = ASTBuildingTurtleParser.DFA14_min;
    this.max = ASTBuildingTurtleParser.DFA14_max;
    this.accept = ASTBuildingTurtleParser.DFA14_accept;
    this.special = ASTBuildingTurtleParser.DFA14_special;
    this.transition = ASTBuildingTurtleParser.DFA14_transition;
};

org.antlr.lang.extend(ASTBuildingTurtleParser.DFA14, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "90:1: triples : ( subject ( WS )* predicateObjectList -> ^( DEF_TRIPLES subject ( predicateObjectList )+ ) | blankNodePropertyList ( predicateObjectList )? -> ^( DEF_TRIPLES blankNodePropertyList ( predicateObjectList )? ) );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(ASTBuildingTurtleParser, {
    DFA26_eotS:
        "\u0007\uffff",
    DFA26_eofS:
        "\u0007\uffff",
    DFA26_minS:
        "\u0001\u000b\u0002\uffff\u0001\u0008\u0001\uffff\u0001\u0008\u0001"+
    "\uffff",
    DFA26_maxS:
        "\u0001\u0021\u0002\uffff\u0001\u0021\u0001\uffff\u0001\u0021\u0001"+
    "\uffff",
    DFA26_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\uffff\u0001\u0004\u0001"+
    "\uffff\u0001\u0003",
    DFA26_specialS:
        "\u0007\uffff}>",
    DFA26_transitionS: [
            "\u0002\u0001\u0004\uffff\u0001\u0004\u0001\uffff\u0001\u0004"+
            "\u0001\u0003\u0001\uffff\u0005\u0002\u0002\uffff\u0004\u0002"+
            "\u0001\u0001",
            "",
            "",
            "\u0001\u0005\u0002\uffff\u0002\u0006\u0002\uffff\u0001\u0006"+
            "\u0005\uffff\u0001\u0004\u000b\uffff\u0001\u0006",
            "",
            "\u0001\u0005\u0002\uffff\u0002\u0006\u0002\uffff\u0001\u0006"+
            "\u0005\uffff\u0001\u0004\u000b\uffff\u0001\u0006",
            ""
    ]
});

org.antlr.lang.augmentObject(ASTBuildingTurtleParser, {
    DFA26_eot:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA26_eotS),
    DFA26_eof:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA26_eofS),
    DFA26_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleParser.DFA26_minS),
    DFA26_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ASTBuildingTurtleParser.DFA26_maxS),
    DFA26_accept:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA26_acceptS),
    DFA26_special:
        org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA26_specialS),
    DFA26_transition: (function() {
        var a = [],
            i,
            numStates = ASTBuildingTurtleParser.DFA26_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(ASTBuildingTurtleParser.DFA26_transitionS[i]));
        }
        return a;
    })()
});

ASTBuildingTurtleParser.DFA26 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 26;
    this.eot = ASTBuildingTurtleParser.DFA26_eot;
    this.eof = ASTBuildingTurtleParser.DFA26_eof;
    this.min = ASTBuildingTurtleParser.DFA26_min;
    this.max = ASTBuildingTurtleParser.DFA26_max;
    this.accept = ASTBuildingTurtleParser.DFA26_accept;
    this.special = ASTBuildingTurtleParser.DFA26_special;
    this.transition = ASTBuildingTurtleParser.DFA26_transition;
};

org.antlr.lang.extend(ASTBuildingTurtleParser.DFA26, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "117:6: ( iri | literal | blankNodePropertyList | blank )";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(ASTBuildingTurtleParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "DEF_EMPTY_BLANK", "DEF_TRIPLES", "DEF_COLLECTION", "DEF_BNPL", "WS", "DOT", "PREFIX", "PNAME_NS", "IRIREF", "BASE", "SEMI", "A", "COMMA", "PAREN_ROUND_OPEN", "PAREN_ROUND_CLOSE", "BLANK_NODE_LABEL", "PAREN_BRACKETS_OPEN", "PAREN_BRACKETS_CLOSE", "TRUE", "FALSE", "INTEGER", "DECIMAL", "DOUBLE", "LANGTAG", "EYES", "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", "STRING_LITERAL_LONG_SINGLE_QUOTE", "STRING_LITERAL_LONG_QUOTE", "PNAME_LN", "UCHAR", "PN_PREFIX", "PN_LOCAL", "ECHAR", "PN_CHARS_U", "PN_CHARS", "EXPONENT", "COMMENT", "PLX", "PERCENT", "PN_LOCAL_ESC", "HEX", "PN_CHARS_BASE"],
    FOLLOW_WS_in_turtleDoc90: new org.antlr.runtime.BitSet([0x001A3D02, 0x00000002]),
    FOLLOW_statement_in_turtleDoc93: new org.antlr.runtime.BitSet([0x001A3C02, 0x00000002]),
    FOLLOW_directive_in_statement114: new org.antlr.runtime.BitSet([0x00000300, 0x00000000]),
    FOLLOW_WS_in_statement118: new org.antlr.runtime.BitSet([0x00000300, 0x00000000]),
    FOLLOW_DOT_in_statement123: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_WS_in_statement127: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_triples_in_statement139: new org.antlr.runtime.BitSet([0x00000300, 0x00000000]),
    FOLLOW_WS_in_statement141: new org.antlr.runtime.BitSet([0x00000300, 0x00000000]),
    FOLLOW_DOT_in_statement144: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_WS_in_statement146: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_prefixID_in_directive167: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_base_in_directive174: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PREFIX_in_prefixID191: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_WS_in_prefixID195: new org.antlr.runtime.BitSet([0x00000900, 0x00000000]),
    FOLLOW_PNAME_NS_in_prefixID200: new org.antlr.runtime.BitSet([0x00001100, 0x00000000]),
    FOLLOW_WS_in_prefixID204: new org.antlr.runtime.BitSet([0x00001100, 0x00000000]),
    FOLLOW_IRIREF_in_prefixID209: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BASE_in_base236: new org.antlr.runtime.BitSet([0x00001100, 0x00000000]),
    FOLLOW_WS_in_base240: new org.antlr.runtime.BitSet([0x00001100, 0x00000000]),
    FOLLOW_IRIREF_in_base245: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_subject_in_triples269: new org.antlr.runtime.BitSet([0x00009900, 0x00000002]),
    FOLLOW_WS_in_triples271: new org.antlr.runtime.BitSet([0x00009900, 0x00000002]),
    FOLLOW_predicateObjectList_in_triples274: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNodePropertyList_in_triples293: new org.antlr.runtime.BitSet([0x00009902, 0x00000002]),
    FOLLOW_predicateObjectList_in_triples295: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iri_in_subject323: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blank_in_subject325: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_verb_in_predicateObjectList342: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_WS_in_predicateObjectList344: new org.antlr.runtime.BitSet([0xE7DA3D00, 0x00000003]),
    FOLLOW_objectList_in_predicateObjectList347: new org.antlr.runtime.BitSet([0x00004102, 0x00000000]),
    FOLLOW_WS_in_predicateObjectList349: new org.antlr.runtime.BitSet([0x00004102, 0x00000000]),
    FOLLOW_SEMI_in_predicateObjectList353: new org.antlr.runtime.BitSet([0x0000D902, 0x00000002]),
    FOLLOW_WS_in_predicateObjectList355: new org.antlr.runtime.BitSet([0x0000D902, 0x00000002]),
    FOLLOW_predicateObjectList_in_predicateObjectList358: new org.antlr.runtime.BitSet([0x00004002, 0x00000000]),
    FOLLOW_predicate_in_verb390: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_A_in_verb398: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iri_in_predicate414: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_object_in_objectList429: new org.antlr.runtime.BitSet([0x00010102, 0x00000000]),
    FOLLOW_WS_in_objectList431: new org.antlr.runtime.BitSet([0x00010102, 0x00000000]),
    FOLLOW_COMMA_in_objectList435: new org.antlr.runtime.BitSet([0xE7DA3D00, 0x00000003]),
    FOLLOW_WS_in_objectList437: new org.antlr.runtime.BitSet([0xE7DA3D00, 0x00000003]),
    FOLLOW_object_in_objectList440: new org.antlr.runtime.BitSet([0x00010102, 0x00000000]),
    FOLLOW_WS_in_objectList442: new org.antlr.runtime.BitSet([0x00010102, 0x00000000]),
    FOLLOW_iri_in_object466: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_literal_in_object468: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNodePropertyList_in_object470: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blank_in_object472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNode_in_blank488: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_collection_in_blank495: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PAREN_ROUND_OPEN_in_collection511: new org.antlr.runtime.BitSet([0xE7DE3D00, 0x00000003]),
    FOLLOW_WS_in_collection513: new org.antlr.runtime.BitSet([0xE7DE3D00, 0x00000003]),
    FOLLOW_object_in_collection517: new org.antlr.runtime.BitSet([0xE7DE3D00, 0x00000003]),
    FOLLOW_WS_in_collection519: new org.antlr.runtime.BitSet([0xE7DE3D00, 0x00000003]),
    FOLLOW_PAREN_ROUND_CLOSE_in_collection524: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_WS_in_collection526: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_BLANK_NODE_LABEL_in_blankNode551: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_OPEN_in_blankNode558: new org.antlr.runtime.BitSet([0x00200100, 0x00000000]),
    FOLLOW_WS_in_blankNode560: new org.antlr.runtime.BitSet([0x00200100, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNode563: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_OPEN_in_blankNodePropertyList584: new org.antlr.runtime.BitSet([0x00009900, 0x00000002]),
    FOLLOW_WS_in_blankNodePropertyList586: new org.antlr.runtime.BitSet([0x00009900, 0x00000002]),
    FOLLOW_predicateObjectList_in_blankNodePropertyList589: new org.antlr.runtime.BitSet([0x00200100, 0x00000000]),
    FOLLOW_WS_in_blankNodePropertyList591: new org.antlr.runtime.BitSet([0x00200100, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNodePropertyList594: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_WS_in_blankNodePropertyList596: new org.antlr.runtime.BitSet([0x00000102, 0x00000000]),
    FOLLOW_rdfLiteral_in_literal621: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_numericLiteral_in_literal623: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_booleanLiteral_in_literal625: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_booleanLiteral642: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_numericLiteral663: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_rdfLiteral684: new org.antlr.runtime.BitSet([0x18000002, 0x00000000]),
    FOLLOW_LANGTAG_in_rdfLiteral688: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_EYES_in_rdfLiteral690: new org.antlr.runtime.BitSet([0x00001800, 0x00000002]),
    FOLLOW_iri_in_rdfLiteral692: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_string711: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IRIREF_in_iri735: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_prefixedName_in_iri742: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_prefixedName759: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();