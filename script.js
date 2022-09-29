
// Assignment Code
var generateBtn = document.querySelector("#generate");
var result = "";

// array of numbers, specials, uppercase, lowercase
var numbers = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0-9 index
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", ":", ";"]; // 0-9 index
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //0-25 index
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //0-25 index
var characterPool = []
var userLength = 0
var userNum = false;
var userSpecial = false;
var userLowercase = false;
var userUppercase = false;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// prompts user to input a number value 8-128; will alert user if does not fit parameters
function lengthSelection () {
  while (userLength < 8 || userLength > 128) {userLength = prompt("How many characters do you want your password to be? (Must be between 8-128)");
  if (userLength < 8 || userLength > 128) {
    alert("Please choose a value between 8 and 128.");
    } 
  }
}

// prompts user to make selections what ind of characters are included in password generation
function characterSelection () {
  while (!userLowercase && !userNum && !userUppercase && !userSpecial) {userNum = confirm("Do you want to include numbers? Click OK to confirm.");
  userLowercase = confirm("Do you wnat to incllude lowercase letters? Click OK to confirm.");
  userUppercase = confirm("Do you want tto include uppercase letters? Click OK to confirm.");
  userSpecial = confirm("Do you want to include special characters? Click OK to confirm.");
  if (!userLowercase && !userNum && !userUppercase && !userSpecial) {
    alert("You have to select at least one of the character options"); 
    }
  }
}

// looks at boolean value of user input for character selection and adds that content to the empty character pool array
function combineArray () {
  if (userNum) {
    characterPool = characterPool.concat(numbers);
  } 
  if (userLowercase) {
    characterPool =  characterPool.concat(lowercase);
  }
  if (userUppercase) {
    characterPool = characterPool.concat(uppercase);
  } 
  if (userSpecial) {
    characterPool = characterPool.concat(specials)
  }
}

// create generate password function
function generatePassword () {
  // resets password back to blank every time function is run
  result = ""
  lengthSelection();
  console.log(userLength);
  characterSelection();
  console.log(userNum, userLowercase, userUppercase, userSpecial);
  combineArray()
  console.log(characterPool);
  // randomizes characterPool index selection
  for (let i = 0; i < userLength; i++) {
    result += characterPool[Math.floor(Math.random()*characterPool.length)];
  }
  console.log(result);
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);