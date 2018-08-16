$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
  $(".well").show();
  var numberInput = $("input#plainNumber").val();

   var romanString = '';
   var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
   var numeral = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
   for (var i =0; i < numeral.length; i++) {
   	while ( numberInput >= numeral[i] ) {
       	romanString += roman[i];
           numberInput -= numeral[i];
       }
   }

   $(".answer").text(romanString)

  });
});
