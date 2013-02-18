/*jslint white:true vars:true*/
/*globals leo, document, console*/


define(["leo/ns"], function(leo) {

  "use strict"; 

  leo.ir = {};
  var ns = leo.ir;

  // Prototype of all parse tree nodes
  var parseTreeNode = {
    addChild: function(it) {
      this.children.push(it);
    },
    info: function() {
      return "rule: "+this.name;
    }
  };

  // Base of all parse tree´s nodes
  var baseNode = function() {
    _.extend(this, {
      children: []
    });
  };

  // Represents a rule node that has a list with children
  ns.createRuleNode = function(name) {
    var that = Object.create(parseTreeNode);
    baseNode.apply(that);
    _.extend(that, {
      name: name,
      visit: function(visitor) {
        visitor.visitRule(this);
      }
    });
    return that;
  };

  // Represents a token in the resulting parse tree.
  ns.createTokenNode = function(token) {
    var that = Object.create(parseTreeNode);
    baseNode.apply(that);
    _.extend(that, {
      token: token, 
      info: function() {
        return this.token.getText();
      },
      visit: function(visitor) {
        visitor.visitToken(this);
      }
    });
    return that;
  };

  // Creates an object that can be used to visit all nodes in 
  // the parsetree.
  ns.createHighlighter = function(highlights) {
    return {
      // this methods is being called for every rule reference
      visitRule: function(node) {
        var that = this;
        _.each(node.children, function(node) {
          node.visit(that);
        });
      },
      // this method is being called for every token
      visitToken: function(node) {
        var token = node.token, resultNode, attrClass, char, attrStyle;
        // console.debug("token: '"+token.getText()+"', type: "+token.getType()+", pos: ");
        // console.debug(token);
        //
        // Generate code according to the actual token type
        switch(token.getType()) {
          case leo.T.WS:
            char = token.getText().charCodeAt(0);
            // TODO: remove magic number
            if(char === 10) {
              resultNode = document.createElement("BR");
            } else {
              resultNode = document.createTextNode(String.fromCharCode(160));
            }
            highlights.enqueue({node: resultNode, token: token});
          break;
          case leo.T.PREFIX:
          case leo.T.BASE:
            resultNode = document.createElement("SPAN");
            resultNode.appendChild(document.createTextNode(token.getText()));
            attrClass = document.createAttribute("class");
            attrClass.nodeValue = "key";
            resultNode.setAttributeNode(attrClass);
            highlights.enqueue({node: resultNode, token: token});
          break;
          case leo.T.PNAME_NS:
          case leo.T.PNAME_LN:
            resultNode = document.createElement("SPAN");
            resultNode.appendChild(document.createTextNode(token.getText()));
            attrClass = document.createAttribute("class");
            attrClass.nodeValue = "pname";
            resultNode.setAttributeNode(attrClass);
            highlights.enqueue({node: resultNode, token: token});
          break;
          case leo.T.STRING_LITERAL_QUOTE:
          case leo.T.STRING_LITERAL_SINGLE_QUOTE:
          case leo.T.STRING_LITERAL_LONG_SINGLE_QUOTE:
          case leo.T.STRING_LITERAL_LONG_QUOTE:
          case leo.T.TRUE:
          case leo.T.FALSE:
          case leo.T.INTEGER:
          case leo.T.DECIMAL:
          case leo.T.DOUBLE:
            resultNode = document.createElement("SPAN");
            resultNode.appendChild(document.createTextNode(token.getText()));
            attrClass = document.createAttribute("class");
            attrClass.nodeValue = "literal";
            resultNode.setAttributeNode(attrClass);
            highlights.enqueue({node: resultNode, token: token});
          break;
          case leo.T.LANGTAG:
          case leo.T.EYES:
            resultNode = document.createElement("SPAN");
            resultNode.appendChild(document.createTextNode(token.getText()));
            attrClass = document.createAttribute("class");
            attrClass.nodeValue = "literal";
            resultNode.setAttributeNode(attrClass);
            attrStyle = document.createAttribute("style");
            attrStyle.nodeValue = "font-weight:bold;";
            resultNode.setAttributeNode(attrStyle);
            highlights.enqueue({node: resultNode, token: token});
          break;
          case leo.T.DOT:
            resultNode = document.createElement("SPAN");
            resultNode.appendChild(document.createTextNode(token.getText()));
            attrClass = document.createAttribute("class");
            attrClass.nodeValue = "dot";
            resultNode.setAttributeNode(attrClass);
            highlights.enqueue({node: resultNode, token: token});
          break;
          case leo.T.IRIREF:
            resultNode = document.createTextNode(token.getText());
            highlights.enqueue({node: resultNode, token: token});
          break;
          default:
            if(token.getText() !== null) {
              resultNode = document.createElement("SPAN");
              resultNode.appendChild(document.createTextNode(token.getText().replace("<", "&lt;").replace(">", "&gt;")));
              highlights.enqueue({node: resultNode, token: token});
            }
        }
      }
    };
  };


  // Creates an object that can be used to debug the parse tree. Debugging 
  // writes to console.debug so be sure to actually check the console.
  ns.createDebugVisitor = function() {
    return {
      visitRule: function(node) {
        console.debug("+++ start rule "+node.name+" ("+node.children.length+") +++ ");
        if(node.children.length === 0) {
          console.debug("childless rule-node?: " + node);
        }
        var that = this;
        _.each(node.children, function(node) {
          node.visit(that);
        });
        console.debug("+++ ende rule "+node.name+" +++ ");
      }, 
      visitToken: function(node) {
        console.debug("token: '"+node.token.getText()+"'");
      }
    };
  };


  return ns;
});

