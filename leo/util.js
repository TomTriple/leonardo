/*jslint white: true, vars: true*/
/*global leo, console*/


define(["leo/ns"], function(leo) {

  "use strict";

  leo.util = {};
  var ns = leo.util;


  // Use this function as abstraction over the actual 
  // debugging implementation.
  ns.debug = function(message) {
    // console.debug(">>L.DEBUG: " + message);
  };

  // Small helper method
  ns.getOrElse = function(test, defvalue) {
    if(test === undefined)
      return defvalue;
    return test;
  };

  // Creates a new queue implementation
  ns.createQueue = function() {
    var q = [], position = 0;
    return {
      /**
       * Puts 'item' in the queue
       * @param {object} item The item
       */
      enqueue: function(item) {
        if(undefined === item) {
          throw new Error("inserting 'undefined' is disallowed");
        }
        q.push(item);
      }, 
      /*
       * Returns the item at the head of the queue
       */
      dequeue: function() {
        if(this.length() > 0) {
          var item = q[position];
          position+=1;
          return item;
        }
      }, 
      /**
       * Returns the length of the queue
       */
      length: function() {
        return q.length;
      },
      /**
       * Gets the item at the head of the queue without
       * removing it.
       */
      peek: function() {
        if(this.length() > 0) {
          return q[position];
        }
      }, 
      /**
       * Calls 'fn' for every item in the queue
       * @param {function} fn That function gets every item
       * from the queue as argument.
       */
      each: function(fn) {
        _.each(q, fn);
      },
      debug: function() {
        var i;
        for(i = 0; i < q.length; i+=1) {
          console.debug(q[i]);
        }
      }
    };
  };

  return ns;

});


