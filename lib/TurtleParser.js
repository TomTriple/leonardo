// $ANTLR 3.3 Nov 30, 2010 12:50:56 Turtle.g 2013-01-29 16:19:23

var TurtleParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){


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

    }).call(this);

    TurtleParser.superclass.constructor.call(this, input, state);

    this.dfa14 = new TurtleParser.DFA14(this);
    this.dfa26 = new TurtleParser.DFA26(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(TurtleParser, {
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
// public class variables
var EOF= -1,
    WS= 4,
    DOT= 5,
    PREFIX= 6,
    PNAME_NS= 7,
    IRIREF= 8,
    BASE= 9,
    SEMI= 10,
    A= 11,
    COMMA= 12,
    PAREN_ROUND_OPEN= 13,
    PAREN_ROUND_CLOSE= 14,
    BLANK_NODE_LABEL= 15,
    PAREN_BRACKETS_OPEN= 16,
    PAREN_BRACKETS_CLOSE= 17,
    TRUE= 18,
    FALSE= 19,
    INTEGER= 20,
    DECIMAL= 21,
    DOUBLE= 22,
    LANGTAG= 23,
    EYES= 24,
    STRING_LITERAL_QUOTE= 25,
    STRING_LITERAL_SINGLE_QUOTE= 26,
    STRING_LITERAL_LONG_SINGLE_QUOTE= 27,
    STRING_LITERAL_LONG_QUOTE= 28,
    PNAME_LN= 29,
    UCHAR= 30,
    PN_PREFIX= 31,
    PN_LOCAL= 32,
    ECHAR= 33,
    PN_CHARS_U= 34,
    PN_CHARS= 35,
    EXPONENT= 36,
    COMMENT= 37,
    PLX= 38,
    PERCENT= 39,
    PN_LOCAL_ESC= 40,
    HEX= 41,
    PN_CHARS_BASE= 42;

// public instance methods/vars
org.antlr.lang.extend(TurtleParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return TurtleParser.tokenNames; },
    getGrammarFileName: function() { return "Turtle.g"; }
});
org.antlr.lang.augmentObject(TurtleParser.prototype, {


    // Turtle.g:168:1: turtleDoc : ( WS )* ( statement )* ;
    // $ANTLR start "turtleDoc"
    turtleDoc: function() {
         var save = this.beforeRuleProcessing("TurtleDoc"); 
        try {
            // Turtle.g:171:4: ( ( WS )* ( statement )* )
            // Turtle.g:171:6: ( WS )* ( statement )*
            // Turtle.g:171:6: ( WS )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==WS) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // Turtle.g:171:6: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_turtleDoc61); 


                    break;

                default :
                    break loop1;
                }
            } while (true);

            // Turtle.g:171:10: ( statement )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>=PREFIX && LA2_0<=BASE)||LA2_0==PAREN_ROUND_OPEN||(LA2_0>=BLANK_NODE_LABEL && LA2_0<=PAREN_BRACKETS_OPEN)||LA2_0==PNAME_LN) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // Turtle.g:171:10: statement
                    this.pushFollow(TurtleParser.FOLLOW_statement_in_turtleDoc64);
                    this.statement();

                    this.state._fsp--;



                    break;

                default :
                    break loop2;
                }
            } while (true);




             this.currentNode = save; 
        }
        catch (ex) {

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
        finally {
        }
        return ;
    },


    // Turtle.g:188:1: statement : ( directive (ws1= WS )* dot= DOT (ws2= WS )* | triples ( WS )* DOT ( WS )* );
    // $ANTLR start "statement"
    statement: function() {
        var ws1 = null;
        var dot = null;
        var ws2 = null;

         var save = this.beforeRuleProcessing("Statement"); 
        try {
            // Turtle.g:191:4: ( directive (ws1= WS )* dot= DOT (ws2= WS )* | triples ( WS )* DOT ( WS )* )
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
                    // Turtle.g:191:6: directive (ws1= WS )* dot= DOT (ws2= WS )*
                    this.pushFollow(TurtleParser.FOLLOW_directive_in_statement97);
                    this.directive();

                    this.state._fsp--;

                    // Turtle.g:191:19: (ws1= WS )*
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( (LA3_0==WS) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // Turtle.g:191:19: ws1= WS
                            ws1=this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_statement101); 


                            break;

                        default :
                            break loop3;
                        }
                    } while (true);

                    dot=this.match(this.input,DOT,TurtleParser.FOLLOW_DOT_in_statement106); 
                    // Turtle.g:191:35: (ws2= WS )*
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( (LA4_0==WS) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // Turtle.g:191:35: ws2= WS
                            ws2=this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_statement110); 


                            break;

                        default :
                            break loop4;
                        }
                    } while (true);



                    break;
                case 2 :
                    // Turtle.g:192:6: triples ( WS )* DOT ( WS )*
                    this.pushFollow(TurtleParser.FOLLOW_triples_in_statement118);
                    this.triples();

                    this.state._fsp--;

                    // Turtle.g:192:14: ( WS )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( (LA5_0==WS) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // Turtle.g:192:14: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_statement120); 


                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    this.match(this.input,DOT,TurtleParser.FOLLOW_DOT_in_statement123); 
                    // Turtle.g:192:22: ( WS )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0==WS) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // Turtle.g:192:22: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_statement125); 


                            break;

                        default :
                            break loop6;
                        }
                    } while (true);



                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:195:1: directive : ( prefixID | base );
    // $ANTLR start "directive"
    directive: function() {
         var save = this.beforeRuleProcessing("Directive"); 
        try {
            // Turtle.g:198:4: ( prefixID | base )
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
                    // Turtle.g:198:6: prefixID
                    this.pushFollow(TurtleParser.FOLLOW_prefixID_in_directive151);
                    this.prefixID();

                    this.state._fsp--;



                    break;
                case 2 :
                    // Turtle.g:199:6: base
                    this.pushFollow(TurtleParser.FOLLOW_base_in_directive158);
                    this.base();

                    this.state._fsp--;



                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:202:1: prefixID : prefix= PREFIX (ws1= WS )+ PNAME_NS (ws2= WS )* IRIREF ;
    // $ANTLR start "prefixID"
    prefixID: function() {
        var prefix = null;
        var ws1 = null;
        var ws2 = null;
        var PNAME_NS1 = null;
        var IRIREF2 = null;

         var save = this.beforeRuleProcessing("PrefixID"); 
        try {
            // Turtle.g:205:4: (prefix= PREFIX (ws1= WS )+ PNAME_NS (ws2= WS )* IRIREF )
            // Turtle.g:205:6: prefix= PREFIX (ws1= WS )+ PNAME_NS (ws2= WS )* IRIREF
            prefix=this.match(this.input,PREFIX,TurtleParser.FOLLOW_PREFIX_in_prefixID185); 
            // Turtle.g:205:23: (ws1= WS )+
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
                    // Turtle.g:205:23: ws1= WS
                    ws1=this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_prefixID189); 


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

            PNAME_NS1=this.match(this.input,PNAME_NS,TurtleParser.FOLLOW_PNAME_NS_in_prefixID192); 
            // Turtle.g:205:40: (ws2= WS )*
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( (LA10_0==WS) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // Turtle.g:205:40: ws2= WS
                    ws2=this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_prefixID196); 


                    break;

                default :
                    break loop10;
                }
            } while (true);

            IRIREF2=this.match(this.input,IRIREF,TurtleParser.FOLLOW_IRIREF_in_prefixID199); 

                   this.loadVocabulary((PNAME_NS1?PNAME_NS1.getText():null), (IRIREF2?IRIREF2.getText():null));
                 



             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:210:1: base : base1= BASE (ws= WS )* iriref= IRIREF ;
    // $ANTLR start "base"
    base: function() {
        var base1 = null;
        var ws = null;
        var iriref = null;

         var save = this.beforeRuleProcessing("Base"); 
        try {
            // Turtle.g:213:4: (base1= BASE (ws= WS )* iriref= IRIREF )
            // Turtle.g:213:6: base1= BASE (ws= WS )* iriref= IRIREF
            base1=this.match(this.input,BASE,TurtleParser.FOLLOW_BASE_in_base228); 
            // Turtle.g:213:19: (ws= WS )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0==WS) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // Turtle.g:213:19: ws= WS
                    ws=this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_base232); 


                    break;

                default :
                    break loop11;
                }
            } while (true);

            iriref=this.match(this.input,IRIREF,TurtleParser.FOLLOW_IRIREF_in_base237); 



             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:216:1: triples : ( subject ( WS )+ predicateObjectList | blankNodePropertyList ( predicateObjectList )? );
    // $ANTLR start "triples"
    triples: function() {
         var save = this.beforeRuleProcessing("Triples"); 
        try {
            // Turtle.g:219:5: ( subject ( WS )+ predicateObjectList | blankNodePropertyList ( predicateObjectList )? )
            var alt14=2;
            alt14 = this.dfa14.predict(this.input);
            switch (alt14) {
                case 1 :
                    // Turtle.g:219:7: subject ( WS )+ predicateObjectList
                    this.pushFollow(TurtleParser.FOLLOW_subject_in_triples263);
                    this.subject();

                    this.state._fsp--;

                    // Turtle.g:219:15: ( WS )+
                    var cnt12=0;
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( (LA12_0==WS) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // Turtle.g:219:15: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_triples265); 


                            break;

                        default :
                            if ( cnt12 >= 1 ) {
                                break loop12;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                                throw eee;
                        }
                        cnt12++;
                    } while (true);

                    this.pushFollow(TurtleParser.FOLLOW_predicateObjectList_in_triples268);
                    this.predicateObjectList();

                    this.state._fsp--;



                    break;
                case 2 :
                    // Turtle.g:220:7: blankNodePropertyList ( predicateObjectList )?
                    this.pushFollow(TurtleParser.FOLLOW_blankNodePropertyList_in_triples276);
                    this.blankNodePropertyList();

                    this.state._fsp--;

                    // Turtle.g:220:29: ( predicateObjectList )?
                    var alt13=2;
                    var LA13_0 = this.input.LA(1);

                    if ( ((LA13_0>=PNAME_NS && LA13_0<=IRIREF)||LA13_0==A||LA13_0==PNAME_LN) ) {
                        alt13=1;
                    }
                    switch (alt13) {
                        case 1 :
                            // Turtle.g:220:29: predicateObjectList
                            this.pushFollow(TurtleParser.FOLLOW_predicateObjectList_in_triples278);
                            this.predicateObjectList();

                            this.state._fsp--;



                            break;

                    }



                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:223:1: subject : ( iri | blank );
    // $ANTLR start "subject"
    subject: function() {
         var save = this.beforeRuleProcessing("Subject"); 
        try {
            // Turtle.g:226:4: ( iri | blank )
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
                    // Turtle.g:226:6: iri
                    this.pushFollow(TurtleParser.FOLLOW_iri_in_subject305);
                    this.iri();

                    this.state._fsp--;



                    break;
                case 2 :
                    // Turtle.g:226:10: blank
                    this.pushFollow(TurtleParser.FOLLOW_blank_in_subject307);
                    this.blank();

                    this.state._fsp--;



                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:230:1: predicateObjectList : verb ( WS )+ objectList ( WS )* ( SEMI ( WS )* ( predicateObjectList )? )* ;
    // $ANTLR start "predicateObjectList"
    predicateObjectList: function() {
         var save = this.beforeRuleProcessing("PredicateObjectList"); 
        try {
            // Turtle.g:233:6: ( verb ( WS )+ objectList ( WS )* ( SEMI ( WS )* ( predicateObjectList )? )* )
            // Turtle.g:233:8: verb ( WS )+ objectList ( WS )* ( SEMI ( WS )* ( predicateObjectList )? )*
            this.pushFollow(TurtleParser.FOLLOW_verb_in_predicateObjectList335);
            this.verb();

            this.state._fsp--;

            // Turtle.g:233:13: ( WS )+
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
                    // Turtle.g:233:13: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_predicateObjectList337); 


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

            this.pushFollow(TurtleParser.FOLLOW_objectList_in_predicateObjectList340);
            this.objectList();

            this.state._fsp--;

            // Turtle.g:233:28: ( WS )*
            loop17:
            do {
                var alt17=2;
                var LA17_0 = this.input.LA(1);

                if ( (LA17_0==WS) ) {
                    alt17=1;
                }


                switch (alt17) {
                case 1 :
                    // Turtle.g:233:28: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_predicateObjectList342); 


                    break;

                default :
                    break loop17;
                }
            } while (true);

            // Turtle.g:233:32: ( SEMI ( WS )* ( predicateObjectList )? )*
            loop20:
            do {
                var alt20=2;
                var LA20_0 = this.input.LA(1);

                if ( (LA20_0==SEMI) ) {
                    alt20=1;
                }


                switch (alt20) {
                case 1 :
                    // Turtle.g:233:33: SEMI ( WS )* ( predicateObjectList )?
                    this.match(this.input,SEMI,TurtleParser.FOLLOW_SEMI_in_predicateObjectList346); 
                    // Turtle.g:233:38: ( WS )*
                    loop18:
                    do {
                        var alt18=2;
                        var LA18_0 = this.input.LA(1);

                        if ( (LA18_0==WS) ) {
                            alt18=1;
                        }


                        switch (alt18) {
                        case 1 :
                            // Turtle.g:233:38: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_predicateObjectList348); 


                            break;

                        default :
                            break loop18;
                        }
                    } while (true);

                    // Turtle.g:233:42: ( predicateObjectList )?
                    var alt19=2;
                    var LA19_0 = this.input.LA(1);

                    if ( ((LA19_0>=PNAME_NS && LA19_0<=IRIREF)||LA19_0==A||LA19_0==PNAME_LN) ) {
                        alt19=1;
                    }
                    switch (alt19) {
                        case 1 :
                            // Turtle.g:233:42: predicateObjectList
                            this.pushFollow(TurtleParser.FOLLOW_predicateObjectList_in_predicateObjectList351);
                            this.predicateObjectList();

                            this.state._fsp--;



                            break;

                    }



                    break;

                default :
                    break loop20;
                }
            } while (true);




             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:236:1: verb : ( predicate | A );
    // $ANTLR start "verb"
    verb: function() {
         var predicate3 = null;

         var save = this.beforeRuleProcessing("Verb"); 
        try {
            // Turtle.g:239:5: ( predicate | A )
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
                    // Turtle.g:239:7: predicate
                    this.pushFollow(TurtleParser.FOLLOW_predicate_in_verb382);
                    predicate3=this.predicate();

                    this.state._fsp--;


                           var prefix = (predicate3?this.input.toString(predicate3.start,predicate3.stop):null);
                           prefix = prefix.substr(0, prefix.length - 1);
                           if(this.vocabCache.prefix2uri(prefix) !== undefined) {
                             leo.publish("isPrefix", (predicate3?predicate3.start:null));
                           }
                          


                    break;
                case 2 :
                    // Turtle.g:246:7: A
                    this.match(this.input,A,TurtleParser.FOLLOW_A_in_verb392); 


                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },

    // inline static return class
    predicate_return: (function() {
        TurtleParser.predicate_return = function(){};
        org.antlr.lang.extend(TurtleParser.predicate_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // Turtle.g:249:1: predicate : iri ;
    // $ANTLR start "predicate"
    predicate: function() {
        var retval = new TurtleParser.predicate_return();
        retval.start = this.input.LT(1);

         var save = this.beforeRuleProcessing("Predicate"); 
        try {
            // Turtle.g:252:4: ( iri )
            // Turtle.g:252:6: iri
            this.pushFollow(TurtleParser.FOLLOW_iri_in_predicate419);
            this.iri();

            this.state._fsp--;




            retval.stop = this.input.LT(-1);

             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },


    // Turtle.g:255:1: objectList : object ( WS )* ( COMMA ( WS )* object ( WS )* )* ;
    // $ANTLR start "objectList"
    objectList: function() {
         var save = this.beforeRuleProcessing("ObjectList"); 
        try {
            // Turtle.g:258:4: ( object ( WS )* ( COMMA ( WS )* object ( WS )* )* )
            // Turtle.g:258:6: object ( WS )* ( COMMA ( WS )* object ( WS )* )*
            this.pushFollow(TurtleParser.FOLLOW_object_in_objectList444);
            this.object();

            this.state._fsp--;

            // Turtle.g:258:13: ( WS )*
            loop22:
            do {
                var alt22=2;
                var LA22_0 = this.input.LA(1);

                if ( (LA22_0==WS) ) {
                    alt22=1;
                }


                switch (alt22) {
                case 1 :
                    // Turtle.g:258:13: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_objectList446); 


                    break;

                default :
                    break loop22;
                }
            } while (true);

            // Turtle.g:258:17: ( COMMA ( WS )* object ( WS )* )*
            loop25:
            do {
                var alt25=2;
                var LA25_0 = this.input.LA(1);

                if ( (LA25_0==COMMA) ) {
                    alt25=1;
                }


                switch (alt25) {
                case 1 :
                    // Turtle.g:258:18: COMMA ( WS )* object ( WS )*
                    this.match(this.input,COMMA,TurtleParser.FOLLOW_COMMA_in_objectList450); 
                    // Turtle.g:258:24: ( WS )*
                    loop23:
                    do {
                        var alt23=2;
                        var LA23_0 = this.input.LA(1);

                        if ( (LA23_0==WS) ) {
                            alt23=1;
                        }


                        switch (alt23) {
                        case 1 :
                            // Turtle.g:258:24: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_objectList452); 


                            break;

                        default :
                            break loop23;
                        }
                    } while (true);

                    this.pushFollow(TurtleParser.FOLLOW_object_in_objectList455);
                    this.object();

                    this.state._fsp--;

                    // Turtle.g:258:35: ( WS )*
                    loop24:
                    do {
                        var alt24=2;
                        var LA24_0 = this.input.LA(1);

                        if ( (LA24_0==WS) ) {
                            alt24=1;
                        }


                        switch (alt24) {
                        case 1 :
                            // Turtle.g:258:35: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_objectList457); 


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




             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:261:1: object : ( iri | literal | blankNodePropertyList | blank );
    // $ANTLR start "object"
    object: function() {
         var iri4 = null;

         var save = this.beforeRuleProcessing("Object"); 
        try {
            // Turtle.g:264:4: ( iri | literal | blankNodePropertyList | blank )
            var alt26=4;
            alt26 = this.dfa26.predict(this.input);
            switch (alt26) {
                case 1 :
                    // Turtle.g:264:6: iri
                    this.pushFollow(TurtleParser.FOLLOW_iri_in_object485);
                    iri4=this.iri();

                    this.state._fsp--;


                           var prefix = (iri4?this.input.toString(iri4.start,iri4.stop):null);
                           prefix = prefix.substr(0, prefix.length - 1);
                           if(this.vocabCache.prefix2uri(prefix) !== undefined) {
                             leo.publish("isPrefix", (iri4?iri4.start:null));
                           }
                         


                    break;
                case 2 :
                    // Turtle.g:271:6: literal
                    this.pushFollow(TurtleParser.FOLLOW_literal_in_object494);
                    this.literal();

                    this.state._fsp--;



                    break;
                case 3 :
                    // Turtle.g:272:6: blankNodePropertyList
                    this.pushFollow(TurtleParser.FOLLOW_blankNodePropertyList_in_object501);
                    this.blankNodePropertyList();

                    this.state._fsp--;



                    break;
                case 4 :
                    // Turtle.g:273:6: blank
                    this.pushFollow(TurtleParser.FOLLOW_blank_in_object508);
                    this.blank();

                    this.state._fsp--;



                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:276:1: blank : ( blankNode | collection );
    // $ANTLR start "blank"
    blank: function() {
         var save = this.beforeRuleProcessing("Blank"); 
        try {
            // Turtle.g:279:4: ( blankNode | collection )
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
                    // Turtle.g:279:6: blankNode
                    this.pushFollow(TurtleParser.FOLLOW_blankNode_in_blank533);
                    this.blankNode();

                    this.state._fsp--;



                    break;
                case 2 :
                    // Turtle.g:279:16: collection
                    this.pushFollow(TurtleParser.FOLLOW_collection_in_blank535);
                    this.collection();

                    this.state._fsp--;



                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:282:1: collection : PAREN_ROUND_OPEN ( WS )* ( object ( WS )* )* PAREN_ROUND_CLOSE ( WS )* ;
    // $ANTLR start "collection"
    collection: function() {
         var save = this.beforeRuleProcessing("Collection"); 
        try {
            // Turtle.g:285:4: ( PAREN_ROUND_OPEN ( WS )* ( object ( WS )* )* PAREN_ROUND_CLOSE ( WS )* )
            // Turtle.g:285:6: PAREN_ROUND_OPEN ( WS )* ( object ( WS )* )* PAREN_ROUND_CLOSE ( WS )*
            this.match(this.input,PAREN_ROUND_OPEN,TurtleParser.FOLLOW_PAREN_ROUND_OPEN_in_collection560); 
            // Turtle.g:285:23: ( WS )*
            loop28:
            do {
                var alt28=2;
                var LA28_0 = this.input.LA(1);

                if ( (LA28_0==WS) ) {
                    alt28=1;
                }


                switch (alt28) {
                case 1 :
                    // Turtle.g:285:23: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_collection562); 


                    break;

                default :
                    break loop28;
                }
            } while (true);

            // Turtle.g:285:27: ( object ( WS )* )*
            loop30:
            do {
                var alt30=2;
                var LA30_0 = this.input.LA(1);

                if ( ((LA30_0>=PNAME_NS && LA30_0<=IRIREF)||LA30_0==PAREN_ROUND_OPEN||(LA30_0>=BLANK_NODE_LABEL && LA30_0<=PAREN_BRACKETS_OPEN)||(LA30_0>=TRUE && LA30_0<=DOUBLE)||(LA30_0>=STRING_LITERAL_QUOTE && LA30_0<=PNAME_LN)) ) {
                    alt30=1;
                }


                switch (alt30) {
                case 1 :
                    // Turtle.g:285:28: object ( WS )*
                    this.pushFollow(TurtleParser.FOLLOW_object_in_collection566);
                    this.object();

                    this.state._fsp--;

                    // Turtle.g:285:35: ( WS )*
                    loop29:
                    do {
                        var alt29=2;
                        var LA29_0 = this.input.LA(1);

                        if ( (LA29_0==WS) ) {
                            alt29=1;
                        }


                        switch (alt29) {
                        case 1 :
                            // Turtle.g:285:35: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_collection568); 


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

            this.match(this.input,PAREN_ROUND_CLOSE,TurtleParser.FOLLOW_PAREN_ROUND_CLOSE_in_collection573); 
            // Turtle.g:285:59: ( WS )*
            loop31:
            do {
                var alt31=2;
                var LA31_0 = this.input.LA(1);

                if ( (LA31_0==WS) ) {
                    alt31=1;
                }


                switch (alt31) {
                case 1 :
                    // Turtle.g:285:59: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_collection575); 


                    break;

                default :
                    break loop31;
                }
            } while (true);




             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:288:1: blankNode : ( BLANK_NODE_LABEL | PAREN_BRACKETS_OPEN ( WS )* PAREN_BRACKETS_CLOSE );
    // $ANTLR start "blankNode"
    blankNode: function() {
         var save = this.beforeRuleProcessing("BlankNode"); 
        try {
            // Turtle.g:291:4: ( BLANK_NODE_LABEL | PAREN_BRACKETS_OPEN ( WS )* PAREN_BRACKETS_CLOSE )
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
                    // Turtle.g:291:6: BLANK_NODE_LABEL
                    this.match(this.input,BLANK_NODE_LABEL,TurtleParser.FOLLOW_BLANK_NODE_LABEL_in_blankNode601); 


                    break;
                case 2 :
                    // Turtle.g:292:6: PAREN_BRACKETS_OPEN ( WS )* PAREN_BRACKETS_CLOSE
                    this.match(this.input,PAREN_BRACKETS_OPEN,TurtleParser.FOLLOW_PAREN_BRACKETS_OPEN_in_blankNode608); 
                    // Turtle.g:292:26: ( WS )*
                    loop32:
                    do {
                        var alt32=2;
                        var LA32_0 = this.input.LA(1);

                        if ( (LA32_0==WS) ) {
                            alt32=1;
                        }


                        switch (alt32) {
                        case 1 :
                            // Turtle.g:292:26: WS
                            this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_blankNode610); 


                            break;

                        default :
                            break loop32;
                        }
                    } while (true);

                    this.match(this.input,PAREN_BRACKETS_CLOSE,TurtleParser.FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNode613); 


                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:295:1: blankNodePropertyList : PAREN_BRACKETS_OPEN ( WS )* predicateObjectList ( WS )* PAREN_BRACKETS_CLOSE ( WS )* ;
    // $ANTLR start "blankNodePropertyList"
    blankNodePropertyList: function() {
         var save = this.beforeRuleProcessing("BlankNodePropertyList"); 
        try {
            // Turtle.g:298:4: ( PAREN_BRACKETS_OPEN ( WS )* predicateObjectList ( WS )* PAREN_BRACKETS_CLOSE ( WS )* )
            // Turtle.g:298:6: PAREN_BRACKETS_OPEN ( WS )* predicateObjectList ( WS )* PAREN_BRACKETS_CLOSE ( WS )*
            this.match(this.input,PAREN_BRACKETS_OPEN,TurtleParser.FOLLOW_PAREN_BRACKETS_OPEN_in_blankNodePropertyList638); 
            // Turtle.g:298:26: ( WS )*
            loop34:
            do {
                var alt34=2;
                var LA34_0 = this.input.LA(1);

                if ( (LA34_0==WS) ) {
                    alt34=1;
                }


                switch (alt34) {
                case 1 :
                    // Turtle.g:298:26: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_blankNodePropertyList640); 


                    break;

                default :
                    break loop34;
                }
            } while (true);

            this.pushFollow(TurtleParser.FOLLOW_predicateObjectList_in_blankNodePropertyList643);
            this.predicateObjectList();

            this.state._fsp--;

            // Turtle.g:298:50: ( WS )*
            loop35:
            do {
                var alt35=2;
                var LA35_0 = this.input.LA(1);

                if ( (LA35_0==WS) ) {
                    alt35=1;
                }


                switch (alt35) {
                case 1 :
                    // Turtle.g:298:50: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_blankNodePropertyList645); 


                    break;

                default :
                    break loop35;
                }
            } while (true);

            this.match(this.input,PAREN_BRACKETS_CLOSE,TurtleParser.FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNodePropertyList648); 
            // Turtle.g:298:75: ( WS )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( (LA36_0==WS) ) {
                    alt36=1;
                }


                switch (alt36) {
                case 1 :
                    // Turtle.g:298:75: WS
                    this.match(this.input,WS,TurtleParser.FOLLOW_WS_in_blankNodePropertyList650); 


                    break;

                default :
                    break loop36;
                }
            } while (true);




             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:301:1: literal : ( rdfLiteral | numericLiteral | booleanLiteral );
    // $ANTLR start "literal"
    literal: function() {
         var save = this.beforeRuleProcessing("Literal"); 
        try {
            // Turtle.g:304:4: ( rdfLiteral | numericLiteral | booleanLiteral )
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
                    // Turtle.g:304:6: rdfLiteral
                    this.pushFollow(TurtleParser.FOLLOW_rdfLiteral_in_literal676);
                    this.rdfLiteral();

                    this.state._fsp--;



                    break;
                case 2 :
                    // Turtle.g:304:17: numericLiteral
                    this.pushFollow(TurtleParser.FOLLOW_numericLiteral_in_literal678);
                    this.numericLiteral();

                    this.state._fsp--;



                    break;
                case 3 :
                    // Turtle.g:304:32: booleanLiteral
                    this.pushFollow(TurtleParser.FOLLOW_booleanLiteral_in_literal680);
                    this.booleanLiteral();

                    this.state._fsp--;



                    break;

            }
             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:307:1: booleanLiteral : tok= ( TRUE | FALSE ) ;
    // $ANTLR start "booleanLiteral"
    booleanLiteral: function() {
        var tok = null;

         var save = this.beforeRuleProcessing("BooleanLiteral"); 
        try {
            // Turtle.g:310:4: (tok= ( TRUE | FALSE ) )
            // Turtle.g:310:6: tok= ( TRUE | FALSE )
            tok=this.input.LT(1);
            if ( (this.input.LA(1)>=TRUE && this.input.LA(1)<=FALSE) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }

             this.currentNode.addChild(leo.ir.createTokenNode(tok)); 



             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:313:1: numericLiteral : tok= ( INTEGER | DECIMAL | DOUBLE ) ;
    // $ANTLR start "numericLiteral"
    numericLiteral: function() {
        var tok = null;

         var save = this.beforeRuleProcessing("NumericLiteral"); 
        try {
            // Turtle.g:316:4: (tok= ( INTEGER | DECIMAL | DOUBLE ) )
            // Turtle.g:316:6: tok= ( INTEGER | DECIMAL | DOUBLE )
            tok=this.input.LT(1);
            if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=DOUBLE) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }

             this.currentNode.addChild(leo.ir.createTokenNode(tok)); 



             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:319:1: rdfLiteral : string ( LANGTAG | EYES iri )? ;
    // $ANTLR start "rdfLiteral"
    rdfLiteral: function() {
         var save = this.beforeRuleProcessing("RdfLiteral"); 
        try {
            // Turtle.g:322:4: ( string ( LANGTAG | EYES iri )? )
            // Turtle.g:322:6: string ( LANGTAG | EYES iri )?
            this.pushFollow(TurtleParser.FOLLOW_string_in_rdfLiteral773);
            this.string();

            this.state._fsp--;

            // Turtle.g:322:13: ( LANGTAG | EYES iri )?
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
                    // Turtle.g:322:14: LANGTAG
                    this.match(this.input,LANGTAG,TurtleParser.FOLLOW_LANGTAG_in_rdfLiteral776); 


                    break;
                case 2 :
                    // Turtle.g:322:22: EYES iri
                    this.match(this.input,EYES,TurtleParser.FOLLOW_EYES_in_rdfLiteral778); 
                    this.pushFollow(TurtleParser.FOLLOW_iri_in_rdfLiteral780);
                    this.iri();

                    this.state._fsp--;



                    break;

            }




             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },


    // Turtle.g:325:1: string : tok= ( STRING_LITERAL_QUOTE | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE ) ;
    // $ANTLR start "string"
    string: function() {
        var tok = null;

         var save = this.beforeRuleProcessing("String"); 
        try {
            // Turtle.g:328:4: (tok= ( STRING_LITERAL_QUOTE | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE ) )
            // Turtle.g:328:6: tok= ( STRING_LITERAL_QUOTE | STRING_LITERAL_SINGLE_QUOTE | STRING_LITERAL_LONG_SINGLE_QUOTE | STRING_LITERAL_LONG_QUOTE )
            tok=this.input.LT(1);
            if ( (this.input.LA(1)>=STRING_LITERAL_QUOTE && this.input.LA(1)<=STRING_LITERAL_LONG_QUOTE) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }

             this.currentNode.addChild(leo.ir.createTokenNode(tok)); 



             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    },

    // inline static return class
    iri_return: (function() {
        TurtleParser.iri_return = function(){};
        org.antlr.lang.extend(TurtleParser.iri_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // Turtle.g:331:1: iri : ( IRIREF | prefixedName );
    // $ANTLR start "iri"
    iri: function() {
        var retval = new TurtleParser.iri_return();
        retval.start = this.input.LT(1);

         var save = this.beforeRuleProcessing("Iri"); 
        try {
            // Turtle.g:334:4: ( IRIREF | prefixedName )
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
                    // Turtle.g:334:6: IRIREF
                    this.match(this.input,IRIREF,TurtleParser.FOLLOW_IRIREF_in_iri844); 


                    break;
                case 2 :
                    // Turtle.g:334:13: prefixedName
                    this.pushFollow(TurtleParser.FOLLOW_prefixedName_in_iri846);
                    this.prefixedName();

                    this.state._fsp--;



                    break;

            }
            retval.stop = this.input.LT(-1);

             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return retval;
    },


    // Turtle.g:337:1: prefixedName : tok= ( PNAME_LN | PNAME_NS ) ;
    // $ANTLR start "prefixedName"
    prefixedName: function() {
        var tok = null;

         var save = this.beforeRuleProcessing("PrefixedName"); 
        try {
            // Turtle.g:340:4: (tok= ( PNAME_LN | PNAME_NS ) )
            // Turtle.g:340:6: tok= ( PNAME_LN | PNAME_NS )
            tok=this.input.LT(1);
            if ( this.input.LA(1)==PNAME_NS||this.input.LA(1)==PNAME_LN ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }

             this.currentNode.addChild(leo.ir.createTokenNode(tok)); 



             this.currentNode = save; 
        }

          catch(ex) {
            throw ex;
          }
        finally {
        }
        return ;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(TurtleParser, {
    DFA14_eotS:
        "\u0005\uffff",
    DFA14_eofS:
        "\u0005\uffff",
    DFA14_minS:
        "\u0001\u0007\u0001\uffff\u0002\u0004\u0001\uffff",
    DFA14_maxS:
        "\u0001\u001d\u0001\uffff\u0002\u001d\u0001\uffff",
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

org.antlr.lang.augmentObject(TurtleParser, {
    DFA14_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA14_eotS),
    DFA14_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA14_eofS),
    DFA14_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleParser.DFA14_minS),
    DFA14_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleParser.DFA14_maxS),
    DFA14_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA14_acceptS),
    DFA14_special:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA14_specialS),
    DFA14_transition: (function() {
        var a = [],
            i,
            numStates = TurtleParser.DFA14_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA14_transitionS[i]));
        }
        return a;
    })()
});

TurtleParser.DFA14 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 14;
    this.eot = TurtleParser.DFA14_eot;
    this.eof = TurtleParser.DFA14_eof;
    this.min = TurtleParser.DFA14_min;
    this.max = TurtleParser.DFA14_max;
    this.accept = TurtleParser.DFA14_accept;
    this.special = TurtleParser.DFA14_special;
    this.transition = TurtleParser.DFA14_transition;
};

org.antlr.lang.extend(TurtleParser.DFA14, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "216:1: triples : ( subject ( WS )+ predicateObjectList | blankNodePropertyList ( predicateObjectList )? );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(TurtleParser, {
    DFA26_eotS:
        "\u0007\uffff",
    DFA26_eofS:
        "\u0007\uffff",
    DFA26_minS:
        "\u0001\u0007\u0002\uffff\u0001\u0004\u0001\uffff\u0001\u0004\u0001"+
    "\uffff",
    DFA26_maxS:
        "\u0001\u001d\u0002\uffff\u0001\u001d\u0001\uffff\u0001\u001d\u0001"+
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

org.antlr.lang.augmentObject(TurtleParser, {
    DFA26_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA26_eotS),
    DFA26_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA26_eofS),
    DFA26_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleParser.DFA26_minS),
    DFA26_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TurtleParser.DFA26_maxS),
    DFA26_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA26_acceptS),
    DFA26_special:
        org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA26_specialS),
    DFA26_transition: (function() {
        var a = [],
            i,
            numStates = TurtleParser.DFA26_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TurtleParser.DFA26_transitionS[i]));
        }
        return a;
    })()
});

TurtleParser.DFA26 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 26;
    this.eot = TurtleParser.DFA26_eot;
    this.eof = TurtleParser.DFA26_eof;
    this.min = TurtleParser.DFA26_min;
    this.max = TurtleParser.DFA26_max;
    this.accept = TurtleParser.DFA26_accept;
    this.special = TurtleParser.DFA26_special;
    this.transition = TurtleParser.DFA26_transition;
};

org.antlr.lang.extend(TurtleParser.DFA26, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "261:1: object : ( iri | literal | blankNodePropertyList | blank );";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(TurtleParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "WS", "DOT", "PREFIX", "PNAME_NS", "IRIREF", "BASE", "SEMI", "A", "COMMA", "PAREN_ROUND_OPEN", "PAREN_ROUND_CLOSE", "BLANK_NODE_LABEL", "PAREN_BRACKETS_OPEN", "PAREN_BRACKETS_CLOSE", "TRUE", "FALSE", "INTEGER", "DECIMAL", "DOUBLE", "LANGTAG", "EYES", "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", "STRING_LITERAL_LONG_SINGLE_QUOTE", "STRING_LITERAL_LONG_QUOTE", "PNAME_LN", "UCHAR", "PN_PREFIX", "PN_LOCAL", "ECHAR", "PN_CHARS_U", "PN_CHARS", "EXPONENT", "COMMENT", "PLX", "PERCENT", "PN_LOCAL_ESC", "HEX", "PN_CHARS_BASE"],
    FOLLOW_WS_in_turtleDoc61: new org.antlr.runtime.BitSet([0x2001A3D2, 0x00000000]),
    FOLLOW_statement_in_turtleDoc64: new org.antlr.runtime.BitSet([0x2001A3C2, 0x00000000]),
    FOLLOW_directive_in_statement97: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_WS_in_statement101: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_DOT_in_statement106: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_WS_in_statement110: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_triples_in_statement118: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_WS_in_statement120: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_DOT_in_statement123: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_WS_in_statement125: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_prefixID_in_directive151: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_base_in_directive158: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PREFIX_in_prefixID185: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_WS_in_prefixID189: new org.antlr.runtime.BitSet([0x00000090, 0x00000000]),
    FOLLOW_PNAME_NS_in_prefixID192: new org.antlr.runtime.BitSet([0x00000110, 0x00000000]),
    FOLLOW_WS_in_prefixID196: new org.antlr.runtime.BitSet([0x00000110, 0x00000000]),
    FOLLOW_IRIREF_in_prefixID199: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BASE_in_base228: new org.antlr.runtime.BitSet([0x00000110, 0x00000000]),
    FOLLOW_WS_in_base232: new org.antlr.runtime.BitSet([0x00000110, 0x00000000]),
    FOLLOW_IRIREF_in_base237: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_subject_in_triples263: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_WS_in_triples265: new org.antlr.runtime.BitSet([0x20000990, 0x00000000]),
    FOLLOW_predicateObjectList_in_triples268: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNodePropertyList_in_triples276: new org.antlr.runtime.BitSet([0x20000982, 0x00000000]),
    FOLLOW_predicateObjectList_in_triples278: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iri_in_subject305: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blank_in_subject307: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_verb_in_predicateObjectList335: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_WS_in_predicateObjectList337: new org.antlr.runtime.BitSet([0x3E7DA3D0, 0x00000000]),
    FOLLOW_objectList_in_predicateObjectList340: new org.antlr.runtime.BitSet([0x00000412, 0x00000000]),
    FOLLOW_WS_in_predicateObjectList342: new org.antlr.runtime.BitSet([0x00000412, 0x00000000]),
    FOLLOW_SEMI_in_predicateObjectList346: new org.antlr.runtime.BitSet([0x20000D92, 0x00000000]),
    FOLLOW_WS_in_predicateObjectList348: new org.antlr.runtime.BitSet([0x20000D92, 0x00000000]),
    FOLLOW_predicateObjectList_in_predicateObjectList351: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_predicate_in_verb382: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_A_in_verb392: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iri_in_predicate419: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_object_in_objectList444: new org.antlr.runtime.BitSet([0x00001012, 0x00000000]),
    FOLLOW_WS_in_objectList446: new org.antlr.runtime.BitSet([0x00001012, 0x00000000]),
    FOLLOW_COMMA_in_objectList450: new org.antlr.runtime.BitSet([0x3E7DA3D0, 0x00000000]),
    FOLLOW_WS_in_objectList452: new org.antlr.runtime.BitSet([0x3E7DA3D0, 0x00000000]),
    FOLLOW_object_in_objectList455: new org.antlr.runtime.BitSet([0x00001012, 0x00000000]),
    FOLLOW_WS_in_objectList457: new org.antlr.runtime.BitSet([0x00001012, 0x00000000]),
    FOLLOW_iri_in_object485: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_literal_in_object494: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNodePropertyList_in_object501: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blank_in_object508: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNode_in_blank533: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_collection_in_blank535: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PAREN_ROUND_OPEN_in_collection560: new org.antlr.runtime.BitSet([0x3E7DE3D0, 0x00000000]),
    FOLLOW_WS_in_collection562: new org.antlr.runtime.BitSet([0x3E7DE3D0, 0x00000000]),
    FOLLOW_object_in_collection566: new org.antlr.runtime.BitSet([0x3E7DE3D0, 0x00000000]),
    FOLLOW_WS_in_collection568: new org.antlr.runtime.BitSet([0x3E7DE3D0, 0x00000000]),
    FOLLOW_PAREN_ROUND_CLOSE_in_collection573: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_WS_in_collection575: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_BLANK_NODE_LABEL_in_blankNode601: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_OPEN_in_blankNode608: new org.antlr.runtime.BitSet([0x00020010, 0x00000000]),
    FOLLOW_WS_in_blankNode610: new org.antlr.runtime.BitSet([0x00020010, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNode613: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_OPEN_in_blankNodePropertyList638: new org.antlr.runtime.BitSet([0x20000990, 0x00000000]),
    FOLLOW_WS_in_blankNodePropertyList640: new org.antlr.runtime.BitSet([0x20000990, 0x00000000]),
    FOLLOW_predicateObjectList_in_blankNodePropertyList643: new org.antlr.runtime.BitSet([0x00020010, 0x00000000]),
    FOLLOW_WS_in_blankNodePropertyList645: new org.antlr.runtime.BitSet([0x00020010, 0x00000000]),
    FOLLOW_PAREN_BRACKETS_CLOSE_in_blankNodePropertyList648: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_WS_in_blankNodePropertyList650: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_rdfLiteral_in_literal676: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_numericLiteral_in_literal678: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_booleanLiteral_in_literal680: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_booleanLiteral707: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_numericLiteral740: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_rdfLiteral773: new org.antlr.runtime.BitSet([0x01800002, 0x00000000]),
    FOLLOW_LANGTAG_in_rdfLiteral776: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_EYES_in_rdfLiteral778: new org.antlr.runtime.BitSet([0x20000180, 0x00000000]),
    FOLLOW_iri_in_rdfLiteral780: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_string809: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IRIREF_in_iri844: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_prefixedName_in_iri846: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_prefixedName873: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();