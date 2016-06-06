$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var listItems = ["One","Two", "Three", "Four"];
    var userInput = [];
    listItems.forEach(function(item) {
      var groceryItem = $("#" + item).val();
      userInput.push(groceryItem);
    });
    userInput.sort();
    var inputUpper = userInput.map(function(x) {
      return x.toUpperCase();
    });
    $(".inputtedItems").hide();
    var inputString = inputUpper.toString();
    debugger;
    inputUpper.forEach(function(term) {
      $("ul").append("<li>" + term + "</li>");
    });
  });
});
