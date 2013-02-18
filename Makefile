.PHONY: parsers p update s lint

CP=export CLASSPATH=../bin/antlr-3.3-complete.jar:$$CLASSPATH
JANTLR=java org.antlr.Tool -dfa
PALL=Turtle.g ASTBuildingTurtle.g ASTWalker.g
MOVE_PARSERS=mv *.js ../lib/


# TODO: target for testsuite 


# this target builds all parsers
parsers:
	${CP} && cd grammars && ${JANTLR} ${PALL} && ${MOVE_PARSERS}
	@echo All Parsers from ${PALL} successfully built.


# this target builds the parser from the specified grammar in macro G
p:
	${CP} && cd grammars && ${JANTLR} ${G}.g && ${MOVE_PARSERS}
	@echo Parser from ./grammars/${G}.g successfully built.


# this target updates the token definitions from generated
# ASTBuildingTurtle.tokens. See the referenced shellscript for more
# precise information. 
update:
	./bin/updateTT


# this target starts a small http proxy server
s:
	@echo Starting http-proxy at localhost:4567...
	ruby bin/proxy.rb &


# this target lets one perform static code analysis of the javascript file
# specified at the macro f
lint:
	java -jar bin/jslint4java-2.0.2/jslint4java-2.0.2.jar ${f}

