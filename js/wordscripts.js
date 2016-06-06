$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var inputString = $("#inputString").val();
    var inputArray = inputString.split(' ');
    var newArray = []
    inputArray.forEach(function(term) {
      if (term.length > 3) {
        newArray.push(term);
      }

    });
    newArray.reverse();
    var newString = newArray.join();
    alert(newString);
  });
});
