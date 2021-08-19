var characterLength = 8;
var choiceArray = [];

// Arrays created for lowerCase,uppercase, symbol and numbers
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var gen_password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    gen_password = gen_password + choiceArray[randomIndex];
  }
  return gen_password;
}

// Prompt function created for user's choice/selection
// parseInt given to change the string to integer
function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(
    prompt(
      "How many characters would you like your password to contain? (8-128 characters)"
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password length must be between 8 - 128 characters");
    return false;
  }
  if (
    confirm("Would you like lowercase in your password? Click OK to confirm")
  ) {
    choiceArray = choiceArray.concat(lowerCase);
  }
  if (
    confirm("Would you like uppercase in your password? Click OK to confirm")
  ) {
    choiceArray = choiceArray.concat(upperCase);
  }
  if (confirm("Would you like number in your password? Click OK to confirm")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  if (
    confirm(
      "Would you like special characters in your password? Click OK to confirm"
    )
  ) {
    choiceArray = choiceArray.concat(symbolArray);
  }
  return true;
}
