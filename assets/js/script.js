/*Current Functionality: page is displaying invalid input when you click button.
page is running through prompts twice before generating password.
generatePassword function is missing length option.*/

function generatePassword() {
  let charPool = " ";
  let pass = " ";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const NUM_SYM = "0123456789@#$";

  function upperCase () {
    return prompt("Include uppercase letters, Y/N?");
  };

  function lowerCase () {
    return prompt("Include lowercase letters, Y/N?");
    };
  
  function numberSym () {
    return prompt("Include numbers and special characters, Y/N?");
    };

  function collectInput() {
    if (upperCase().toUpperCase() === "Y") {
      charPool += UPPER;
    }
    if (lowerCase().toUpperCase() === "Y") {
      charPool += LOWER;
    }
    if (numberSym().toUpperCase() === "Y") {
      charPool += NUM_SYM;
    }
  }
// changed while-loop syntax issue (bracket placement). this is what was causing the invalid message and the double-call of collectinput
  function processInput () {
    while (charPool === " ") {
    alert("Invalid input. Please select at least one option");
    collectInput();
    }
  };
//changed +1 to -1 after charpool.length (line 45) so that the range would fall within the index
 function makePass () {
  for ( let i = 0; i < charPool.length; i++) {
    let charSelect = Math.floor(Math.random() * charPool.length - 1);
    pass += charPool.charAt(charSelect);
   }
   return pass;
  }
  
  collectInput();
  processInput ();
  makePass ();

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