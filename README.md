TURTLE
======

This is a JavaScript based editor for the RDF serialization language
[Turtle](http://www.w3.org/TR/2012/WD-turtle-20120710/). I tested the
editor only in Google Chrome. The editor uses ANTLR´s JavaScript
backend to recognize input.  


Features
--------
* Browser based editing support (with contentEditable) with respect to syntax highlighting.
* Syntax highlighting with respect to syntax-/lexer-errors. 
* Resynchronization after syntax-/lexer-errors. 
* Code completion.

Semantic reasoning is currently not implemented.


Implementation overview for syntax highlighting and code completion
--------------------------------------------------------------------
From the user input it generates a parse tree (not an AST!) and traverses that as part of a classic 
visitor strategy (Turtle.g). After that the generated code is being integrated in
the editor. Editor integration involves two things: Replacing
a fragment of turtle-code with generated code for the exact same (but
syntaxhighlighted) code fragment but also preserving incorrect code for 
which there no representing node in the parse tree. 

If the cursor position is at a position that refers to a prefix
definition for a vocabulary it tries to show all components of that
vocabulary e.g. all definitions from FOAF. In order to display a
vocabulary in the appropriate way it´s a prerequisite to recognize and 
translate a vocabulary (now with an AST!) to a JavaScript datastructure (ASTBuildingTurtle.g and ASTWalker.g). 
This datastructure serves as the basis for syntax-highlighting. In this 
respect there are two things of note:

* A vocabulary can be deployed on any domain which is inherently
  incompatible with the [Same Origin
Policy](http://en.wikipedia.org/wiki/Same_origin_policy). Code completion uses a 
local webserver to work around that restriction. The webserver component 
uses Sinatra and acts lika a proxy to the actual vocabulary resource. 
A nice replacement for this would use [CORS](http://www.w3.org/TR/cors/) to perform a lookup.
CORS doesn´t need a local webserver. 

* Indeed that ajax request itself is asynchronous but the callback
  handler needs to instantiate a new parser instance to perform the
translation. To prevent a user from typical blocking effects I
decided to implement that component with a 
[WebWorker](http://www.w3.org/TR/workers/).


Starting the local webserver
----------------------------
If you want to use code completion you´ve to start a local webserver
which uses Ruby 1.9 with Sinatra. If these dependencies are available
just type "make s" to start the webserver. 

If you don´t start the webserver you can still rely on syntax
highlighting in the editor.


Screenshot
----------
![](https://raw.github.com/thoefer/leonardo/master/screenshot.png "")



