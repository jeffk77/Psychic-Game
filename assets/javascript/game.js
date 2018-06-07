var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

for (var i = 0; i < letters.length; i++) {
  var letterBtn = $("<button>");
  letterBtn.addClass("letter-button letter letter-button-color")
  letterBtn.attr("data-letter", letters[i]);
  letterBtn.text(letters[i]);
  $("#buttons").append(letterBtn);
}

$("#buttons").on("click", ".letter-button", function () {
  var fridgeMagnet = $("<div>");
  fridgeMagnet.addClass("letter fridge-color");
  fridgeMagnet.text($(this).attr("data-letter"));
  $("#display").append(fridgeMagnet);
});

$("#clear").on("click", function () {
  $("#display").empty();
});