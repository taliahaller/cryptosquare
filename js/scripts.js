$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
  $(".well").show();

  var textInput = ($("input#inputSentence").val()).toLowerCase();
  var noSpaceStr = textInput.replace(/\W/g, '');

  var sqrtInput = Math.sqrt(noSpaceStr.length);
  console.log(sqrtInput);

  var rowXcolumn = Math.ceil(sqrtInput);
  console.log(rowXcolumn);

  var array = noSpacesStr.split('',rowXcolumn);
  console.log()







   $(".answer").text(noSpaceStr);

  });
});
