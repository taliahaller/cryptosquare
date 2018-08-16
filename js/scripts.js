$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
  $(".well").show();
  var numberInput = $("input#plainNumber").val();
  $(".answer").text(numberInput);

  function romanize(num) {
   var romanString = '';
   var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
   var numeral = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
   for ( var i in numeral ) {
   	while ( num >= numeral[i] ) {
       	romanString += roman[i];
           num -= numeral[i];
       }
   }
   return romanString;

}

  });
});
