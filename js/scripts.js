$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
  $(".result").show();

  var numberInput = $("input#plainNumber").val();
  $(".answer").text(numberInput);


  });
});
