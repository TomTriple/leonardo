/*jslint white: true, vars: true*/
/*global leo, console*/


require(["leo/core"], function() {
  $(document).ready(function() {
    var ide = document.getElementById("ide");
    var editor = leo.core.createEditor(ide);
    $("#ide").keyup(editor.update);
  });
});



