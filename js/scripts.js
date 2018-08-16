$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
  $(".well").show();

  var textInput = ($("input#inputSentence").val()).toLowerCase();
  var noSpaceStr = textInput.replace(/\W/g, '');
  var noSpaceStrArray = noSpaceStr.split('')
  var newSentence = [];

console.log(noSpaceStrArray);

  var sqrtInput = Math.sqrt(noSpaceStr.length);
  console.log(sqrtInput);

  var rowXcolumn = Math.ceil(sqrtInput);
  console.log(rowXcolumn);

loop1:
  for (var i = 0; i < rowXcolumn; i++) {
    newSentence += noSpaceStrArray[i];
    console.log(newSentence);
    // break loop1;

loop2:
    for(var j = 0; j < rowXcolumn; j+rowXcolumn-1) {
      newSentence +=  newSentence[j];
        newSentence.push(newSentence);
console.log(newSentence);
console.log(rowXcolumn);
  break loop2;
  }
  }

  console.log(newSentence);

  // Need method that will extract characters at specified interval



  newSentence = newSentence.join(" ");
        newSentence = newSentence.toLowerCase();
        newSentence = newSentence.replace(/^\w/, function (cap) {
          return cap.toUpperCase();
        });






   $(".answer").text(noSpaceStr);

  });
});
