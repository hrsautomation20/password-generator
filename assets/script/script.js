var characterLength = 8;
var choice = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var newPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (newPrompts) {
    var password = generatePassword();

    passwordText.value = password;
  } else {
    passwordText = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Functions
//Reference: https://www.asciitable.com/
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  var symbols = "!#$%&'()*+/<=>?@[]^{}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getPrompts() {
  choice = [];
  characterLength = parseInt(
    prompt(
      "How many characters do you want your password to be? (8-128 characters)"
    )
  );
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 digits. Please try again."
    );
    return false;
  }
  if (confirm("Would you like lowercase letter in your password?")) {
    choice = choice.getRandomLower();
  }
  if (confirm("Would you like uppercase letter in your password?")) {
    choice = choice.getRandomUpper();
  }
  if (confirm("Would you like number letter in your password?")) {
    choice = choice.getRandomNumber();
  }
  if (confirm("Would you like symbol letter in your password?")) {
    choice = choice.getRandomSymbol();
  }
  return true;
}
