function generatePassword() {
  //These variables contain the blank character pool and the characters that can be added to it.
  let charPool = "";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const NUM_SYM = "0123456789@#$";

  //The following four functions prompt the user for password parameters.
  const lengthChoose = function() {
    return prompt("Select password length (8-128 characters).")
  }

  function upperCase () {
    return prompt("Include uppercase letters, Y/N?");
  };

  function lowerCase () {
    return prompt("Include lowercase letters, Y/N?");
    };
  
  function numberSym () {
    return prompt("Include numbers and special characters, Y/N?");
    };

  //Calls the three prompts that have to do with character type, converts the string to uppercase, and then checks for strict equality.
  //If value returned from function is strictly equal to "Y", concatenates the variable to the character pool.
  function collectInput() {
    if (upperCase().toUpperCase() === "Y") {
      charPool += UPPER;
    };
    if (lowerCase().toUpperCase() === "Y") {
      charPool += LOWER;
    };
    if (numberSym().toUpperCase() === "Y") {
      charPool += NUM_SYM;
    };
  }
//Checks if charPool is empty. If this is the case, alerts user, and calls collectInput function again.
  function processInput () {
    if (charPool === "") {
    alert("Invalid input. Please select at least one option");
    collectInput();
    }
  };
// Declares an empty string variable for the password, then declares a variable function which calls the lengthChoose funciton and parses a number
// from the value it receives. This variable is then passed into a for-loop. The for-loop iterates the number of times that the user has entered.
// The variable function charSelect uses the Math.floor/Math.random method to select a random integer. This integer is then
// is then used as the parameter for the charAt method, which selects a character from the pool. This character is concatenated onto the password variable.
 function makePass () {
  let pass = ""
  const passLength = parseFloat(lengthChoose());
  for ( let i = 0; i < passLength; i++) {
    let charSelect = Math.floor(Math.random() * charPool.length);
    pass += charPool.charAt(charSelect);
   }
   return pass;
  }
  
  //Calls the above functions. Password variable is declared and is equal to the value returned from makePass.
  collectInput();
  processInput ();
  const pass = makePass ();

  //Returns value to the code below.
  return pass;
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);