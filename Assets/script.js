// Assignment code here

// define the arrays of the elements
var lowerCaseChars = 'abcedfghijklmnopqrstuvwxyz';
var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChars = '0123456789';
var symbolChars = '!@#$%^&*()+-';

// Prompt to identify how long the password should be
function findPassLength() {
  var passLength = prompt("How many characters do you want your password to contain?");
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a number between 8 and 128");
    return findPassLength();
  } console.log(passLength)
  return passLength;

};

// passLength = parseInt(findPassLength());

//random number generator function
function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// random character generator functions
//**generates a random special character
function randomSymb() {
  var value = symbolChars[randomNumber(0, (symbolChars.length) - 1)];
  return value;
};
console.log(randomSymb());

//**generates a random lowercase character
function randomLower() {
  var value = lowerCaseChars[randomNumber(0, (lowerCaseChars.length) - 1)];
  return value;
};
console.log(randomLower());

//**generates a random uppercase character
function randomUpper() {
  var value = upperCaseChars[randomNumber(0, (upperCaseChars.length) - 1)];
  return value;
}
console.log(randomUpper());

//**generates a random numeric character
function randomNumChar() {
  var value = numberChars[randomNumber(0, (numberChars.length) - 1)];
  return value;
}
console.log(randomNumChar());


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
