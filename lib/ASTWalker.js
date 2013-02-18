// $ANTLR 3.3 Nov 30, 2010 12:50:56 ASTWalker.g 2013-01-29 14:56:54

var ASTWalker = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){


          /**
          *
          * This section contains parser extensions for translating
          * Turtle to JavaScript. The 'root' of the translation can
          * be obtained by traversing 'this.subjectLists'.
          *
          */

          /** 
          * Symbol table mapping from prefix to target-uri
          *
          * @private
          */
          this.symtabPrefixes = {};

          /**
          *
          * Contains the currently used base uri
          *
          * @private
          */
          this.currentBase = undefined;

          /**
          * contains all references to lists of subjects
          *
          * @private
          */
          this.subjectLists = [];

          /**
          * used for automatic ID generation in blank nodes
          *
          * @private
          */
          this.anonLabelCounter = 1;


          /**
          * Provides access to the translation. Expects a function
          * that will be called with three parameters: subject, 
          * predicate and object.
          *
          * @param {function} The callback function
          * @public
          */
          this.each = function(fn) {
            for(var i = 0; i < this.subjectLists.length; i++) {
              var subject = this.subjectLists[i].subject;
              var plist = this.subjectLists[i].predicateList;
              for(var j = 0; j < plist.length; j++) {
                var predicate = plist[j].predicate;
                var olist = plist[j].objectList;
                for(var k = 0; k < olist.length; k++) {
                  fn(subject, predicate, olist[k]);
                }
              }
            }
          }


          /**
          *
          * Generates a string representation of the translated
          * triples.
          *
          * @public
          * @return {string}
          */
          this.toString = function() {
            var str = "";
            this.each(function(s, p, o) {
              str += s+" "+p+" "+o+" .\r";
            });
            return str.substr(0, str.length - 1);
          }


          /**
          *
          * Increments and returns a label counter
          *
          */
          this.generateID = function() {
            return this.anonLabelCounter++;
          }



    }).call(this);

    ASTWalker.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(ASTWalker, {
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
var UP = org.antlr.runtime.Token.UP,
    DOWN = org.antlr.runtime.Token.DOWN;

// public instance methods/vars
org.antlr.lang.extend(ASTWalker, org.antlr.runtime.tree.TreeParser, {
        

    getTokenNames: function() { return ASTWalker.tokenNames; },
    getGrammarFileName: function() { return "ASTWalker.g"; }
});
org.antlr.lang.augmentObject(ASTWalker.prototype, {


    // ASTWalker.g:102:1: turtleDoc : ( statement )* ;
    // $ANTLR start "turtleDoc"
    turtleDoc: function() {
        try {
            // ASTWalker.g:103:4: ( ( statement )* )
            // ASTWalker.g:103:6: ( statement )*
            // ASTWalker.g:103:6: ( statement )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==DEF_TRIPLES||LA1_0==PREFIX||LA1_0==BASE) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ASTWalker.g:103:6: statement
                    this.pushFollow(ASTWalker.FOLLOW_statement_in_turtleDoc48);
                    this.statement();

                    this.state._fsp--;



                    break;

                default :
                    break loop1;
                }
            } while (true);




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ASTWalker.g:106:1: statement : ( directive | triples );
    // $ANTLR start "statement"
    statement: function() {
         var triples1 = null;

        try {
            // ASTWalker.g:107:4: ( directive | triples )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==PREFIX||LA2_0==BASE) ) {
                alt2=1;
            }
            else if ( (LA2_0==DEF_TRIPLES) ) {
                alt2=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // ASTWalker.g:107:6: directive
                    this.pushFollow(ASTWalker.FOLLOW_directive_in_statement64);
                    this.directive();

                    this.state._fsp--;



                    break;
                case 2 :
                    // ASTWalker.g:108:6: triples
                    this.pushFollow(ASTWalker.FOLLOW_triples_in_statement71);
                    triples1=this.triples();

                    this.state._fsp--;


                         this.subjectLists.push(triples1);
                       


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ASTWalker.g:113:1: directive : ( prefixID | base );
    // $ANTLR start "directive"
    directive: function() {
        try {
            // ASTWalker.g:114:4: ( prefixID | base )
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0==PREFIX) ) {
                alt3=1;
            }
            else if ( (LA3_0==BASE) ) {
                alt3=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }
            switch (alt3) {
                case 1 :
                    // ASTWalker.g:114:6: prefixID
                    this.pushFollow(ASTWalker.FOLLOW_prefixID_in_directive88);
                    this.prefixID();

                    this.state._fsp--;



                    break;
                case 2 :
                    // ASTWalker.g:115:6: base
                    this.pushFollow(ASTWalker.FOLLOW_base_in_directive95);
                    this.base();

                    this.state._fsp--;



                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ASTWalker.g:119:1: prefixID : ^( PREFIX PNAME_NS IRIREF ) ;
    // $ANTLR start "prefixID"
    prefixID: function() {
        var PNAME_NS2 = null;
        var IRIREF3 = null;

        try {
            // ASTWalker.g:126:4: ( ^( PREFIX PNAME_NS IRIREF ) )
            // ASTWalker.g:126:6: ^( PREFIX PNAME_NS IRIREF )
            this.match(this.input,PREFIX,ASTWalker.FOLLOW_PREFIX_in_prefixID114); 

            this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
            PNAME_NS2=this.match(this.input,PNAME_NS,ASTWalker.FOLLOW_PNAME_NS_in_prefixID116); 
            IRIREF3=this.match(this.input,IRIREF,ASTWalker.FOLLOW_IRIREF_in_prefixID118); 

            this.match(this.input, org.antlr.runtime.Token.UP, null); 

                   var key = (PNAME_NS2?PNAME_NS2.getText():null), value = (IRIREF3?IRIREF3.getText():null);
                   value = value.substr(1);
                   value = value.substr(0, value.length - 1)
                   this.symtabPrefixes[key] = value;
                 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ASTWalker.g:134:1: base : ^( BASE IRIREF ) ;
    // $ANTLR start "base"
    base: function() {
        var IRIREF4 = null;

        try {
            // ASTWalker.g:138:4: ( ^( BASE IRIREF ) )
            // ASTWalker.g:138:6: ^( BASE IRIREF )
            this.match(this.input,BASE,ASTWalker.FOLLOW_BASE_in_base139); 

            this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
            IRIREF4=this.match(this.input,IRIREF,ASTWalker.FOLLOW_IRIREF_in_base141); 

            this.match(this.input, org.antlr.runtime.Token.UP, null); 

                   var base = (IRIREF4?IRIREF4.getText():null);
                   base = base.substr(1);
                   base = base.substr(0, base.length - 1);
                   this.currentBase = base;
                 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ASTWalker.g:146:1: triples returns [value] : ( ^( DEF_TRIPLES subject (plist= predicateObjectList[predicateList] )+ ) | ^( DEF_TRIPLES bnplList= blankNodePropertyList (plist= predicateObjectList[predicateList] )? ) );
    // $ANTLR start "triples"
    triples: function() {
        var value = null;

         var plist = null;
         var bnplList = null;
         var subject5 = null;

         var predicateList = []; 
        try {
            // ASTWalker.g:153:5: ( ^( DEF_TRIPLES subject (plist= predicateObjectList[predicateList] )+ ) | ^( DEF_TRIPLES bnplList= blankNodePropertyList (plist= predicateObjectList[predicateList] )? ) )
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0==DEF_TRIPLES) ) {
                var LA6_1 = this.input.LA(2);

                if ( (LA6_1==DOWN) ) {
                    var LA6_2 = this.input.LA(3);

                    if ( (LA6_2==DEF_EMPTY_BLANK||LA6_2==DEF_COLLECTION||(LA6_2>=PNAME_NS && LA6_2<=IRIREF)||LA6_2==BLANK_NODE_LABEL||LA6_2==PNAME_LN) ) {
                        alt6=1;
                    }
                    else if ( (LA6_2==DEF_BNPL) ) {
                        alt6=2;
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 6, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 6, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // ASTWalker.g:153:7: ^( DEF_TRIPLES subject (plist= predicateObjectList[predicateList] )+ )
                    this.match(this.input,DEF_TRIPLES,ASTWalker.FOLLOW_DEF_TRIPLES_in_triples172); 

                    this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
                    this.pushFollow(ASTWalker.FOLLOW_subject_in_triples174);
                    subject5=this.subject();

                    this.state._fsp--;

                    // ASTWalker.g:153:34: (plist= predicateObjectList[predicateList] )+
                    var cnt4=0;
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( ((LA4_0>=PNAME_NS && LA4_0<=IRIREF)||LA4_0==A||LA4_0==PNAME_LN) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // ASTWalker.g:153:34: plist= predicateObjectList[predicateList]
                            this.pushFollow(ASTWalker.FOLLOW_predicateObjectList_in_triples178);
                            plist=this.predicateObjectList(predicateList);

                            this.state._fsp--;



                            break;

                        default :
                            if ( cnt4 >= 1 ) {
                                break loop4;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(4, this.input);
                                throw eee;
                        }
                        cnt4++;
                    } while (true);


                    this.match(this.input, org.antlr.runtime.Token.UP, null); 

                            var val = {
                              subject: subject5,
                              predicateList: plist
                            };
                            value = val;
                          


                    break;
                case 2 :
                    // ASTWalker.g:160:7: ^( DEF_TRIPLES bnplList= blankNodePropertyList (plist= predicateObjectList[predicateList] )? )
                    this.match(this.input,DEF_TRIPLES,ASTWalker.FOLLOW_DEF_TRIPLES_in_triples192); 

                    this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
                    this.pushFollow(ASTWalker.FOLLOW_blankNodePropertyList_in_triples196);
                    bnplList=this.blankNodePropertyList();

                    this.state._fsp--;

                    // ASTWalker.g:160:57: (plist= predicateObjectList[predicateList] )?
                    var alt5=2;
                    var LA5_0 = this.input.LA(1);

                    if ( ((LA5_0>=PNAME_NS && LA5_0<=IRIREF)||LA5_0==A||LA5_0==PNAME_LN) ) {
                        alt5=1;
                    }
                    switch (alt5) {
                        case 1 :
                            // ASTWalker.g:160:57: plist= predicateObjectList[predicateList]
                            this.pushFollow(ASTWalker.FOLLOW_predicateObjectList_in_triples200);
                            plist=this.predicateObjectList(predicateList);

                            this.state._fsp--;



                            break;

                    }


                    this.match(this.input, org.antlr.runtime.Token.UP, null); 

                            var val = {
                              subject: "_:genid"+this.generateID(),
                              predicateList: bnplList
                            };
                            val.predicateList = val.predicateList.concat(plist);
                            value = val;
                          


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:170:1: subject returns [value] : ( iri | blank );
    // $ANTLR start "subject"
    subject: function() {
        var value = null;

         var iri6 = null;
         var blank7 = null;

        try {
            // ASTWalker.g:171:4: ( iri | blank )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( ((LA7_0>=PNAME_NS && LA7_0<=IRIREF)||LA7_0==PNAME_LN) ) {
                alt7=1;
            }
            else if ( (LA7_0==DEF_EMPTY_BLANK||LA7_0==DEF_COLLECTION||LA7_0==BLANK_NODE_LABEL) ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // ASTWalker.g:171:6: iri
                    this.pushFollow(ASTWalker.FOLLOW_iri_in_subject225);
                    iri6=this.iri();

                    this.state._fsp--;


                           value = iri6;
                         


                    break;
                case 2 :
                    // ASTWalker.g:174:6: blank
                    this.pushFollow(ASTWalker.FOLLOW_blank_in_subject234);
                    blank7=this.blank();

                    this.state._fsp--;


                           value = blank7;
                         


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:180:1: predicateObjectList[predicateList] returns [value] : ^( verb (olist= objectList[objectList] )+ ) ;
    // $ANTLR start "predicateObjectList"
    predicateObjectList: function(predicateList) {
        var value = null;

         var olist = null;
         var verb8 = null;

         var objectList = []; 
        try {
            // ASTWalker.g:182:4: ( ^( verb (olist= objectList[objectList] )+ ) )
            // ASTWalker.g:182:6: ^( verb (olist= objectList[objectList] )+ )
            this.pushFollow(ASTWalker.FOLLOW_verb_in_predicateObjectList263);
            verb8=this.verb();

            this.state._fsp--;


            this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
            // ASTWalker.g:182:19: (olist= objectList[objectList] )+
            var cnt8=0;
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( (LA8_0==DEF_EMPTY_BLANK||(LA8_0>=DEF_COLLECTION && LA8_0<=DEF_BNPL)||(LA8_0>=PNAME_NS && LA8_0<=IRIREF)||LA8_0==BLANK_NODE_LABEL||(LA8_0>=TRUE && LA8_0<=DOUBLE)||(LA8_0>=STRING_LITERAL_QUOTE && LA8_0<=PNAME_LN)) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // ASTWalker.g:182:19: olist= objectList[objectList]
                    this.pushFollow(ASTWalker.FOLLOW_objectList_in_predicateObjectList268);
                    olist=this.objectList(objectList);

                    this.state._fsp--;



                    break;

                default :
                    if ( cnt8 >= 1 ) {
                        break loop8;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                        throw eee;
                }
                cnt8++;
            } while (true);


            this.match(this.input, org.antlr.runtime.Token.UP, null); 

                   var val = {
                     predicate: verb8,
                     objectList: olist
                   }
                   predicateList.push(val);
                   value = predicateList;
                 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:192:1: verb returns [value] : ( predicate | A );
    // $ANTLR start "verb"
    verb: function() {
        var value = null;

         var predicate9 = null;

        try {
            // ASTWalker.g:193:3: ( predicate | A )
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( ((LA9_0>=PNAME_NS && LA9_0<=IRIREF)||LA9_0==PNAME_LN) ) {
                alt9=1;
            }
            else if ( (LA9_0==A) ) {
                alt9=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                throw nvae;
            }
            switch (alt9) {
                case 1 :
                    // ASTWalker.g:193:5: predicate
                    this.pushFollow(ASTWalker.FOLLOW_predicate_in_verb291);
                    predicate9=this.predicate();

                    this.state._fsp--;


                        value = predicate9;
                      


                    break;
                case 2 :
                    // ASTWalker.g:196:5: A
                    this.match(this.input,A,ASTWalker.FOLLOW_A_in_verb299); 

                        value = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
                      


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:201:1: predicate returns [value] : iri ;
    // $ANTLR start "predicate"
    predicate: function() {
        var value = null;

         var iri10 = null;

        try {
            // ASTWalker.g:202:2: ( iri )
            // ASTWalker.g:202:4: iri
            this.pushFollow(ASTWalker.FOLLOW_iri_in_predicate317);
            iri10=this.iri();

            this.state._fsp--;

             value = iri10; 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:205:1: objectList[objectList] returns [value] : object ;
    // $ANTLR start "objectList"
    objectList: function(objectList) {
        var value = null;

         var object11 = null;

        try {
            // ASTWalker.g:206:2: ( object )
            // ASTWalker.g:206:4: object
            this.pushFollow(ASTWalker.FOLLOW_object_in_objectList335);
            object11=this.object();

            this.state._fsp--;


                 objectList.push(object11);
                 value = objectList;
               



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:212:1: object returns [value] : ( iri | literal | plist= blankNodePropertyList | blank );
    // $ANTLR start "object"
    object: function() {
        var value = null;

         var plist = null;
         var iri12 = null;
         var literal13 = null;
         var blank14 = null;

        try {
            // ASTWalker.g:213:2: ( iri | literal | plist= blankNodePropertyList | blank )
            var alt10=4;
            switch ( this.input.LA(1) ) {
            case PNAME_NS:
            case IRIREF:
            case PNAME_LN:
                alt10=1;
                break;
            case TRUE:
            case FALSE:
            case INTEGER:
            case DECIMAL:
            case DOUBLE:
            case STRING_LITERAL_QUOTE:
            case STRING_LITERAL_SINGLE_QUOTE:
            case STRING_LITERAL_LONG_SINGLE_QUOTE:
            case STRING_LITERAL_LONG_QUOTE:
                alt10=2;
                break;
            case DEF_BNPL:
                alt10=3;
                break;
            case DEF_EMPTY_BLANK:
            case DEF_COLLECTION:
            case BLANK_NODE_LABEL:
                alt10=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 10, 0, this.input);

                throw nvae;
            }

            switch (alt10) {
                case 1 :
                    // ASTWalker.g:213:4: iri
                    this.pushFollow(ASTWalker.FOLLOW_iri_in_object352);
                    iri12=this.iri();

                    this.state._fsp--;

                     value = iri12; 


                    break;
                case 2 :
                    // ASTWalker.g:214:4: literal
                    this.pushFollow(ASTWalker.FOLLOW_literal_in_object359);
                    literal13=this.literal();

                    this.state._fsp--;

                     value = literal13; 


                    break;
                case 3 :
                    // ASTWalker.g:215:4: plist= blankNodePropertyList
                    this.pushFollow(ASTWalker.FOLLOW_blankNodePropertyList_in_object368);
                    plist=this.blankNodePropertyList();

                    this.state._fsp--;


                         var triple = {
                           subject: "_:genid"+this.generateID(), 
                           predicateList: plist
                         };
                         this.subjectLists.push(triple);
                         value = triple.subject;
                       


                    break;
                case 4 :
                    // ASTWalker.g:223:4: blank
                    this.pushFollow(ASTWalker.FOLLOW_blank_in_object375);
                    blank14=this.blank();

                    this.state._fsp--;

                     value = blank14; 


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:226:1: blank returns [value] : ( blankNode | collection );
    // $ANTLR start "blank"
    blank: function() {
        var value = null;

         var blankNode15 = null;

        try {
            // ASTWalker.g:227:2: ( blankNode | collection )
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0==DEF_EMPTY_BLANK||LA11_0==BLANK_NODE_LABEL) ) {
                alt11=1;
            }
            else if ( (LA11_0==DEF_COLLECTION) ) {
                alt11=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 11, 0, this.input);

                throw nvae;
            }
            switch (alt11) {
                case 1 :
                    // ASTWalker.g:227:4: blankNode
                    this.pushFollow(ASTWalker.FOLLOW_blankNode_in_blank392);
                    blankNode15=this.blankNode();

                    this.state._fsp--;

                     value = blankNode15; 


                    break;
                case 2 :
                    // ASTWalker.g:228:4: collection
                    this.pushFollow(ASTWalker.FOLLOW_collection_in_blank399);
                    this.collection();

                    this.state._fsp--;



                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:233:1: collection : ^( DEF_COLLECTION ( object )+ ) ;
    // $ANTLR start "collection"
    collection: function() {
        try {
            // ASTWalker.g:234:4: ( ^( DEF_COLLECTION ( object )+ ) )
            // ASTWalker.g:234:6: ^( DEF_COLLECTION ( object )+ )
            this.match(this.input,DEF_COLLECTION,ASTWalker.FOLLOW_DEF_COLLECTION_in_collection415); 

            this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
            // ASTWalker.g:234:23: ( object )+
            var cnt12=0;
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( (LA12_0==DEF_EMPTY_BLANK||(LA12_0>=DEF_COLLECTION && LA12_0<=DEF_BNPL)||(LA12_0>=PNAME_NS && LA12_0<=IRIREF)||LA12_0==BLANK_NODE_LABEL||(LA12_0>=TRUE && LA12_0<=DOUBLE)||(LA12_0>=STRING_LITERAL_QUOTE && LA12_0<=PNAME_LN)) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // ASTWalker.g:234:23: object
                    this.pushFollow(ASTWalker.FOLLOW_object_in_collection417);
                    this.object();

                    this.state._fsp--;



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


            this.match(this.input, org.antlr.runtime.Token.UP, null); 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ASTWalker.g:238:1: blankNode returns [value] : ( BLANK_NODE_LABEL | DEF_EMPTY_BLANK );
    // $ANTLR start "blankNode"
    blankNode: function() {
        var value = null;

        var BLANK_NODE_LABEL16 = null;

        try {
            // ASTWalker.g:239:4: ( BLANK_NODE_LABEL | DEF_EMPTY_BLANK )
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0==BLANK_NODE_LABEL) ) {
                alt13=1;
            }
            else if ( (LA13_0==DEF_EMPTY_BLANK) ) {
                alt13=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 13, 0, this.input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // ASTWalker.g:239:6: BLANK_NODE_LABEL
                    BLANK_NODE_LABEL16=this.match(this.input,BLANK_NODE_LABEL,ASTWalker.FOLLOW_BLANK_NODE_LABEL_in_blankNode439); 
                     value = (BLANK_NODE_LABEL16?BLANK_NODE_LABEL16.getText():null); 


                    break;
                case 2 :
                    // ASTWalker.g:240:6: DEF_EMPTY_BLANK
                    this.match(this.input,DEF_EMPTY_BLANK,ASTWalker.FOLLOW_DEF_EMPTY_BLANK_in_blankNode448); 

                           value = "_:genid"+this.generateID();
                         


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:250:1: blankNodePropertyList returns [value] : ^( DEF_BNPL (plist= predicateObjectList[predicateList] )+ ) ;
    // $ANTLR start "blankNodePropertyList"
    blankNodePropertyList: function() {
        var value = null;

         var plist = null;

         var predicateList = []; 
        try {
            // ASTWalker.g:252:4: ( ^( DEF_BNPL (plist= predicateObjectList[predicateList] )+ ) )
            // ASTWalker.g:252:6: ^( DEF_BNPL (plist= predicateObjectList[predicateList] )+ )
            this.match(this.input,DEF_BNPL,ASTWalker.FOLLOW_DEF_BNPL_in_blankNodePropertyList480); 

            this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
            // ASTWalker.g:252:22: (plist= predicateObjectList[predicateList] )+
            var cnt14=0;
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( ((LA14_0>=PNAME_NS && LA14_0<=IRIREF)||LA14_0==A||LA14_0==PNAME_LN) ) {
                    alt14=1;
                }


                switch (alt14) {
                case 1 :
                    // ASTWalker.g:252:22: plist= predicateObjectList[predicateList]
                    this.pushFollow(ASTWalker.FOLLOW_predicateObjectList_in_blankNodePropertyList484);
                    plist=this.predicateObjectList(predicateList);

                    this.state._fsp--;



                    break;

                default :
                    if ( cnt14 >= 1 ) {
                        break loop14;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(14, this.input);
                        throw eee;
                }
                cnt14++;
            } while (true);


            this.match(this.input, org.antlr.runtime.Token.UP, null); 
             value = plist; 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:255:1: literal returns [value] : ( rdfLiteral | numericLiteral | booleanLiteral );
    // $ANTLR start "literal"
    literal: function() {
        var value = null;

         var rdfLiteral17 = null;
         var numericLiteral18 = null;
         var booleanLiteral19 = null;

        try {
            // ASTWalker.g:256:4: ( rdfLiteral | numericLiteral | booleanLiteral )
            var alt15=3;
            switch ( this.input.LA(1) ) {
            case STRING_LITERAL_QUOTE:
            case STRING_LITERAL_SINGLE_QUOTE:
            case STRING_LITERAL_LONG_SINGLE_QUOTE:
            case STRING_LITERAL_LONG_QUOTE:
                alt15=1;
                break;
            case INTEGER:
            case DECIMAL:
            case DOUBLE:
                alt15=2;
                break;
            case TRUE:
            case FALSE:
                alt15=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 15, 0, this.input);

                throw nvae;
            }

            switch (alt15) {
                case 1 :
                    // ASTWalker.g:256:6: rdfLiteral
                    this.pushFollow(ASTWalker.FOLLOW_rdfLiteral_in_literal508);
                    rdfLiteral17=this.rdfLiteral();

                    this.state._fsp--;

                     value = rdfLiteral17; 


                    break;
                case 2 :
                    // ASTWalker.g:257:6: numericLiteral
                    this.pushFollow(ASTWalker.FOLLOW_numericLiteral_in_literal517);
                    numericLiteral18=this.numericLiteral();

                    this.state._fsp--;

                     value = (numericLiteral18?(this.input.getTokenStream().toString(
                      this.input.getTreeAdaptor().getTokenStartIndex(numericLiteral18.start),
                      this.input.getTreeAdaptor().getTokenStopIndex(numericLiteral18.start))):null); 


                    break;
                case 3 :
                    // ASTWalker.g:258:6: booleanLiteral
                    this.pushFollow(ASTWalker.FOLLOW_booleanLiteral_in_literal526);
                    booleanLiteral19=this.booleanLiteral();

                    this.state._fsp--;

                     value = (booleanLiteral19?(this.input.getTokenStream().toString(
                      this.input.getTreeAdaptor().getTokenStartIndex(booleanLiteral19.start),
                      this.input.getTreeAdaptor().getTokenStopIndex(booleanLiteral19.start))):null); 


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },

    // inline static return class
    booleanLiteral_return: (function() {
        ASTWalker.booleanLiteral_return = function(){};
        org.antlr.lang.extend(ASTWalker.booleanLiteral_return,
                          org.antlr.runtime.tree.TreeRuleReturnScope,
        {
        });
        return;
    })(),

    // ASTWalker.g:261:1: booleanLiteral : ( TRUE | FALSE );
    // $ANTLR start "booleanLiteral"
    booleanLiteral: function() {
        var retval = new ASTWalker.booleanLiteral_return();
        retval.start = this.input.LT(1);

        try {
            // ASTWalker.g:262:4: ( TRUE | FALSE )
            // ASTWalker.g:
            if ( (this.input.LA(1)>=TRUE && this.input.LA(1)<=FALSE) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    numericLiteral_return: (function() {
        ASTWalker.numericLiteral_return = function(){};
        org.antlr.lang.extend(ASTWalker.numericLiteral_return,
                          org.antlr.runtime.tree.TreeRuleReturnScope,
        {
        });
        return;
    })(),

    // ASTWalker.g:266:1: numericLiteral : ( INTEGER | DECIMAL | DOUBLE );
    // $ANTLR start "numericLiteral"
    numericLiteral: function() {
        var retval = new ASTWalker.numericLiteral_return();
        retval.start = this.input.LT(1);

        try {
            // ASTWalker.g:267:4: ( INTEGER | DECIMAL | DOUBLE )
            // ASTWalker.g:
            if ( (this.input.LA(1)>=INTEGER && this.input.LA(1)<=DOUBLE) ) {
                this.input.consume();
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },


    // ASTWalker.g:272:1: rdfLiteral returns [value] : ^( string ( LANGTAG | EYES iri )? ) ;
    // $ANTLR start "rdfLiteral"
    rdfLiteral: function() {
        var value = null;

        var LANGTAG21 = null;
         var string20 = null;
         var iri22 = null;

        try {
            // ASTWalker.g:273:4: ( ^( string ( LANGTAG | EYES iri )? ) )
            // ASTWalker.g:273:6: ^( string ( LANGTAG | EYES iri )? )
            this.pushFollow(ASTWalker.FOLLOW_string_in_rdfLiteral599);
            string20=this.string();

            this.state._fsp--;


             value = string20; 

            if ( this.input.LA(1)==org.antlr.runtime.Token.DOWN ) {
                this.match(this.input, org.antlr.runtime.Token.DOWN, null); 
                // ASTWalker.g:273:43: ( LANGTAG | EYES iri )?
                var alt16=3;
                var LA16_0 = this.input.LA(1);

                if ( (LA16_0==LANGTAG) ) {
                    alt16=1;
                }
                else if ( (LA16_0==EYES) ) {
                    alt16=2;
                }
                switch (alt16) {
                    case 1 :
                        // ASTWalker.g:273:44: LANGTAG
                        LANGTAG21=this.match(this.input,LANGTAG,ASTWalker.FOLLOW_LANGTAG_in_rdfLiteral604); 
                         value += (LANGTAG21?LANGTAG21.getText():null); 


                        break;
                    case 2 :
                        // ASTWalker.g:273:82: EYES iri
                        this.match(this.input,EYES,ASTWalker.FOLLOW_EYES_in_rdfLiteral609); 
                        this.pushFollow(ASTWalker.FOLLOW_iri_in_rdfLiteral611);
                        iri22=this.iri();

                        this.state._fsp--;

                         value += iri22; 


                        break;

                }


                this.match(this.input, org.antlr.runtime.Token.UP, null); 
            }



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:276:1: string returns [value] : (s= STRING_LITERAL_QUOTE | s= STRING_LITERAL_SINGLE_QUOTE | s= STRING_LITERAL_LONG_SINGLE_QUOTE | s= STRING_LITERAL_LONG_QUOTE );
    // $ANTLR start "string"
    string: function() {
        var value = null;

        var s = null;

        try {
            // ASTWalker.g:277:4: (s= STRING_LITERAL_QUOTE | s= STRING_LITERAL_SINGLE_QUOTE | s= STRING_LITERAL_LONG_SINGLE_QUOTE | s= STRING_LITERAL_LONG_QUOTE )
            var alt17=4;
            switch ( this.input.LA(1) ) {
            case STRING_LITERAL_QUOTE:
                alt17=1;
                break;
            case STRING_LITERAL_SINGLE_QUOTE:
                alt17=2;
                break;
            case STRING_LITERAL_LONG_SINGLE_QUOTE:
                alt17=3;
                break;
            case STRING_LITERAL_LONG_QUOTE:
                alt17=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 17, 0, this.input);

                throw nvae;
            }

            switch (alt17) {
                case 1 :
                    // ASTWalker.g:277:6: s= STRING_LITERAL_QUOTE
                    s=this.match(this.input,STRING_LITERAL_QUOTE,ASTWalker.FOLLOW_STRING_LITERAL_QUOTE_in_string638); 
                     value = (s?s.getText():null); 


                    break;
                case 2 :
                    // ASTWalker.g:278:6: s= STRING_LITERAL_SINGLE_QUOTE
                    s=this.match(this.input,STRING_LITERAL_SINGLE_QUOTE,ASTWalker.FOLLOW_STRING_LITERAL_SINGLE_QUOTE_in_string649); 
                     value = (s?s.getText():null); 


                    break;
                case 3 :
                    // ASTWalker.g:279:6: s= STRING_LITERAL_LONG_SINGLE_QUOTE
                    s=this.match(this.input,STRING_LITERAL_LONG_SINGLE_QUOTE,ASTWalker.FOLLOW_STRING_LITERAL_LONG_SINGLE_QUOTE_in_string660); 
                     value = (s?s.getText():null) 


                    break;
                case 4 :
                    // ASTWalker.g:280:6: s= STRING_LITERAL_LONG_QUOTE
                    s=this.match(this.input,STRING_LITERAL_LONG_QUOTE,ASTWalker.FOLLOW_STRING_LITERAL_LONG_QUOTE_in_string671); 
                     value = (s?s.getText():null) 


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:283:1: iri returns [value] : ( IRIREF | prefixedName );
    // $ANTLR start "iri"
    iri: function() {
        var value = null;

        var IRIREF23 = null;
         var prefixedName24 = null;

        try {
            // ASTWalker.g:284:4: ( IRIREF | prefixedName )
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0==IRIREF) ) {
                alt18=1;
            }
            else if ( (LA18_0==PNAME_NS||LA18_0==PNAME_LN) ) {
                alt18=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }
            switch (alt18) {
                case 1 :
                    // ASTWalker.g:284:6: IRIREF
                    IRIREF23=this.match(this.input,IRIREF,ASTWalker.FOLLOW_IRIREF_in_iri692); 
                     value = (IRIREF23?IRIREF23.getText():null); 


                    break;
                case 2 :
                    // ASTWalker.g:285:6: prefixedName
                    this.pushFollow(ASTWalker.FOLLOW_prefixedName_in_iri701);
                    prefixedName24=this.prefixedName();

                    this.state._fsp--;

                     value = prefixedName24; 


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    },


    // ASTWalker.g:288:1: prefixedName returns [value] : ( PNAME_LN | PNAME_NS );
    // $ANTLR start "prefixedName"
    prefixedName: function() {
        var value = null;

        var PNAME_LN25 = null;
        var PNAME_NS26 = null;

        try {
            // ASTWalker.g:289:4: ( PNAME_LN | PNAME_NS )
            var alt19=2;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0==PNAME_LN) ) {
                alt19=1;
            }
            else if ( (LA19_0==PNAME_NS) ) {
                alt19=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 19, 0, this.input);

                throw nvae;
            }
            switch (alt19) {
                case 1 :
                    // ASTWalker.g:289:6: PNAME_LN
                    PNAME_LN25=this.match(this.input,PNAME_LN,ASTWalker.FOLLOW_PNAME_LN_in_prefixedName722); 

                           var pref = (PNAME_LN25?PNAME_LN25.getText():null), first = pref.charAt(0), result = "";
                           if(first === ':') {
                             result = this.symtabPrefixes[first] + pref.substr(1);
                           } else {
                             var ix = pref.indexOf(':'), prefix = pref.substring(0, ix+1), local = pref.substr(ix + 1);
                             result = this.symtabPrefixes[prefix] + local;
                           }
                           value = "<" + result + ">";
                         


                    break;
                case 2 :
                    // ASTWalker.g:299:6: PNAME_NS
                    PNAME_NS26=this.match(this.input,PNAME_NS,ASTWalker.FOLLOW_PNAME_NS_in_prefixedName731); 

                           value = (PNAME_NS26?PNAME_NS26.getText():null);
                         


                    break;

            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return value;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(ASTWalker, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "DEF_EMPTY_BLANK", "DEF_TRIPLES", "DEF_COLLECTION", "DEF_BNPL", "WS", "DOT", "PREFIX", "PNAME_NS", "IRIREF", "BASE", "SEMI", "A", "COMMA", "PAREN_ROUND_OPEN", "PAREN_ROUND_CLOSE", "BLANK_NODE_LABEL", "PAREN_BRACKETS_OPEN", "PAREN_BRACKETS_CLOSE", "TRUE", "FALSE", "INTEGER", "DECIMAL", "DOUBLE", "LANGTAG", "EYES", "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", "STRING_LITERAL_LONG_SINGLE_QUOTE", "STRING_LITERAL_LONG_QUOTE", "PNAME_LN", "UCHAR", "PN_PREFIX", "PN_LOCAL", "ECHAR", "PN_CHARS_U", "PN_CHARS", "EXPONENT", "COMMENT", "PLX", "PERCENT", "PN_LOCAL_ESC", "HEX", "PN_CHARS_BASE"],
    FOLLOW_statement_in_turtleDoc48: new org.antlr.runtime.BitSet([0x00002422, 0x00000000]),
    FOLLOW_directive_in_statement64: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_triples_in_statement71: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_prefixID_in_directive88: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_base_in_directive95: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PREFIX_in_prefixID114: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_PNAME_NS_in_prefixID116: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_IRIREF_in_prefixID118: new org.antlr.runtime.BitSet([0x00000008, 0x00000000]),
    FOLLOW_BASE_in_base139: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_IRIREF_in_base141: new org.antlr.runtime.BitSet([0x00000008, 0x00000000]),
    FOLLOW_DEF_TRIPLES_in_triples172: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_subject_in_triples174: new org.antlr.runtime.BitSet([0x00009800, 0x00000002]),
    FOLLOW_predicateObjectList_in_triples178: new org.antlr.runtime.BitSet([0x00009808, 0x00000002]),
    FOLLOW_DEF_TRIPLES_in_triples192: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_blankNodePropertyList_in_triples196: new org.antlr.runtime.BitSet([0x00009808, 0x00000002]),
    FOLLOW_predicateObjectList_in_triples200: new org.antlr.runtime.BitSet([0x00000008, 0x00000000]),
    FOLLOW_iri_in_subject225: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blank_in_subject234: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_verb_in_predicateObjectList263: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_objectList_in_predicateObjectList268: new org.antlr.runtime.BitSet([0xE7C818D8, 0x00000003]),
    FOLLOW_predicate_in_verb291: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_A_in_verb299: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iri_in_predicate317: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_object_in_objectList335: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iri_in_object352: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_literal_in_object359: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNodePropertyList_in_object368: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blank_in_object375: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_blankNode_in_blank392: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_collection_in_blank399: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DEF_COLLECTION_in_collection415: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_object_in_collection417: new org.antlr.runtime.BitSet([0xE7C818D8, 0x00000003]),
    FOLLOW_BLANK_NODE_LABEL_in_blankNode439: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DEF_EMPTY_BLANK_in_blankNode448: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DEF_BNPL_in_blankNodePropertyList480: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_predicateObjectList_in_blankNodePropertyList484: new org.antlr.runtime.BitSet([0x00009808, 0x00000002]),
    FOLLOW_rdfLiteral_in_literal508: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_numericLiteral_in_literal517: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_booleanLiteral_in_literal526: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_booleanLiteral0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_numericLiteral0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_string_in_rdfLiteral599: new org.antlr.runtime.BitSet([0x00000004, 0x00000000]),
    FOLLOW_LANGTAG_in_rdfLiteral604: new org.antlr.runtime.BitSet([0x00000008, 0x00000000]),
    FOLLOW_EYES_in_rdfLiteral609: new org.antlr.runtime.BitSet([0x00001800, 0x00000002]),
    FOLLOW_iri_in_rdfLiteral611: new org.antlr.runtime.BitSet([0x00000008, 0x00000000]),
    FOLLOW_STRING_LITERAL_QUOTE_in_string638: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_LITERAL_SINGLE_QUOTE_in_string649: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_LITERAL_LONG_SINGLE_QUOTE_in_string660: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_LITERAL_LONG_QUOTE_in_string671: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IRIREF_in_iri692: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_prefixedName_in_iri701: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PNAME_LN_in_prefixedName722: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PNAME_NS_in_prefixedName731: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();