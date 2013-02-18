/*jslint white: true, vars: true*/
/*global leo, console*/


define(["leo/ns", "leo/util"], function(leo, util) {

  "use strict";

  leo.pubsub = {};
  var ns = leo.pubsub;


  // Creates an event bus object which manages
  // channels that can be subscribed to or received
  // a message from.
  ns.createEventbus = function() {

    var abonnements = {};

    var createOrGet = function(key, fn) {
      var newQueue;
      if(key in abonnements) {
        fn(abonnements[key]);
      } else {
        newQueue = util.createQueue();
        abonnements[key] = newQueue;
        fn(newQueue);
      }
    };

    return {
      /*
       * Subscribe to messages in 'key' and call for every
       * sent message the listener 'fn'.
       * @param {string} key The name of the channel
       * @param {fn} The callback function
       */
      subscribe: function(key, fn) {
        createOrGet(key, function(queue) {
          queue.enqueue(fn);
        });
      },

      /*
       * Publish a message in a channel. This method supports
       * arguments variable length. The first argument is used
       * as channel. The remaining arguments will be used as 
       * arguments to the callback function.
       */
      publish: function() {
        var q = abonnements[arguments[0]],
            payload = Array.prototype.slice.call(arguments, 1);
        if(q !== undefined) {
          q.each(function(fn) {
            fn.apply(this, payload);
          });
        }
      }
    };
  };

  // Establish the application´s global eventbus
  var eventbus = ns.createEventbus();
  leo.subscribe = eventbus.subscribe;
  leo.publish = eventbus.publish;


  return ns;

});


