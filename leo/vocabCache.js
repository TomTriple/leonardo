/*jslint white: true, vars: true*/
/*global leo, console*/


define(["leo/util"], function(util) {

  "use strict";

  leo.vocabCache = {};
  var ns = leo.vocabCache;


  ns.createCache = function() {

    var vocabs = {};
    var tripleStore = [];

    return {
      filterBySubject: function(prefix, fn) {
        var predicate = vocabs[prefix];
        var tmp = [];
        for(var i = 0; i < tripleStore.length; i++) {
          var triple = tripleStore[i];
          var cmp = triple.s.substr(1);
          cmp = cmp.substr(0, predicate.length);
          if(predicate === cmp) {
            fn(triple);
          }
        }
      },
      addTriples: function(triples) {
        tripleStore = tripleStore.concat(triples);
      }, 
      addVocab: function(prefix, uri) {
        vocabs[prefix] = uri;
      }, 
      miss: function(prefixTest) {
        return vocabs[prefixTest] === undefined;
      },
      prefix2uri: function(prefix) {
        return vocabs[prefix];
      }
    };
  };

  return ns;

});


