$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var inputString = $("#inputString").val();
    var inputArray = inputString.split(' ');
    //filter method we learned later
    function isBigEnough(value) {
      return value.length > 3;
    }

    var newString = inputArray.filter(isBigEnough);

//  Original method we came up with
    // var newArray = []
    // inputArray.forEach(function(term) {
    //   if (term.length > 3) {
    //     newArray.push(term);
    //   }
    //
    // });
    // newArray.reverse();
    // var newString = newArray.join();
    alert(newString);
  });
});

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
