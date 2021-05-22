// Assignment code here

// define the arrays of the elements
var lowerCaseChars = 'abcedfghijklmnopqrstuvwxyz';
var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChars = '0123456789';
var symbolChars = '!@#$%^&*()+-';

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
// console.log(randomSymb());

//**generates a random lowercase character
function randomLower() {
  var value = lowerCaseChars[randomNumber(0, (lowerCaseChars.length) - 1)];
  return value;
};
// console.log(randomLower());

//**generates a random uppercase character
function randomUpper() {
  var value = upperCaseChars[randomNumber(0, (upperCaseChars.length) - 1)];
  return value;
}
// console.log(randomUpper());

//**generates a random numeric character
function randomNumChar() {
  var value = numberChars[randomNumber(0, (numberChars.length) - 1)];
  return value;
}
// console.log(randomNumChar());

// Prompt to identify how long the password should be
var findPassLength = function () {
  var passLength = prompt("How many characters do you want your password to contain?");
  if (typeof (parseInt(passLength)) !== 'number' || passLength < 8 || passLength > 128 || !passLength) {
    alert("Please enter a Number between 8 and 128");
    return findPassLength();
  } 
  // console.log(passLength)
  return passLength;
};

// creating conditions for password:
var passConditions = function () {
  //initializes an empty array
  var passArray = [];
  //checks the length of the array 
  // console.log(passArray);

  while (passArray.length === 0) {
    var lowerCase = confirm("Would you like your password to include lowercase characters?");
    if (lowerCase === true) {
      //adds the randomLower function
      passArray.push(randomLower);
      // window.alert("Your password will include lowercase characters.")
    } else {
      // window.alert("Your password will NOT include lowercase characters ")
    };
    var upperCase = confirm("Would you like your password to include uppercase characters?");
    if (upperCase === true) {
      //adds the randomUpper function
      passArray.push(randomUpper);
      // window.alert("Your password will include upper-case characters.");
    } else {
      // window.alert("Your password will NOT include upper-case characters.")
    };
    var specChar = confirm("Would you like your password to include special characters/symbols?");
    if (specChar === true) {
      //adds the randomSymb function
      passArray.push(randomSymb);
      // window.alert("Your password will include  special characters/symbols");
    } else {
      // window.alert("Your password will NOT include special characters/symbols")
    };
    var numb = confirm("Would you like your password to include numbers?")
    if (numb === true) {
      //adds the randomNumChar function
      passArray.push(randomNumChar);
      // window.alert("Your password will include numbers")
    } else {
      // window.alert("Your password will NOT include numbers.")
    };
    //checks to see if there is at least one item in the array
    if (passArray.length === 0) {
      alert("I'm sorry, you need to have at least one character type to generate a password, please try again");
    }
    else {
      return passArray;
    }
  }
};

// generate password function
function generatePassword() {
  var specLength = findPassLength();
  passArray = passConditions();
  password = "";
  //ensures at least one type of character is in the password
  for (var i = 0; i < passArray.length; i++) {
    var passChar = passArray[i]();
    password = password + passChar;
  }
  //resets the password length variable
  var runningLength = password.length;
  //addresses the rest of the variable
  for (var i = 0; i < specLength - runningLength; i++) {
    var passChar = passArray[randomNumber(0, (passArray.length - 1))]();
    password = password + passChar;
  }
  console.log(password, password.length);
  console.log("end of generate Password function");
  return password;
};

// // Write password to the #password input
function writePassword() {
  var password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
