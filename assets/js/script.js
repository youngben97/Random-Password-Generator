function generatePassword() {
  let charPool = "";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const NUM_SYM = "0123456789@#$";

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

  function processInput () {
    if (charPool === "") {
    alert("Invalid input. Please select at least one option");
    collectInput();
    }
  };

 function makePass () {
  let pass = ""
  const passLength = parseFloat(lengthChoose());
  for ( let i = 0; i < passLength; i++) {
    let charSelect = Math.floor(Math.random() * charPool.length);
    pass += charPool.charAt(charSelect);
   }
   return pass;
  }
  
  collectInput();
  processInput ();
  const pass = makePass ();

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