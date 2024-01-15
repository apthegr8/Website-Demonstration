document.addEventListener("DOMContentLoaded", function () {
  var userForm = document.getElementById("userForm");
  var outputDiv = document.getElementById("output");

  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    displayOutput(username);
  });

  function displayOutput(username) {
    // Helper function to reverse a string
    function reverseString(str) {
      return str.split("").reverse().join("");
    }

    // Helper function to check if a string is a palindrome
    function isPalindrome(str) {
      var cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");
      var reversedStr = reverseString(cleanedStr);
      return cleanedStr === reversedStr;
    }

    // Display output messages
    var lengthMessage = `Name Length: ${username.length}`;
    var reversedMessage = `Reversed Name: ${reverseString(username)}`;
    var upperCaseMessage = `Uppercase Name: ${username.toUpperCase()}`;
    var palindromeMessage = `Palindrome: ${
      isPalindrome(username) ? "Yes" : "No"
    }`;

    var outputMessage = `
      Hello, ${username}! Thanks for submitting the form.<br>
      ${lengthMessage}<br>
      ${reversedMessage}<br>
      ${upperCaseMessage}<br>
      ${palindromeMessage}
    `;

    outputDiv.innerHTML = outputMessage;

    // Send username to animation.html using localStorage
    localStorage.setItem("username", username);
  }
});
