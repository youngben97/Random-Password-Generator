// turn charPool into an array
// splice array randomly
// revert array to string (toString method)
// plug string into makePass


function generatePassword() {
  let charPool = " ";
  let pass = " ";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const NUM_SYM = "0123456789@#$";

  // const lengthChoose = function() {
  //   return prompt("Select password length (8-128 characters).")
  // };
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
    // lengthChoose();

    if (upperCase().toUpperCase() === "Y") {
      charPool += UPPER;
    }
    if (lowerCase().toUpperCase() === "Y") {
      charPool += LOWER;
    }
    if (numberSym().toUpperCase() === "Y") {
      charPool += NUM_SYM;
    }
  };
  // string from lengthChoose needs to be converted from string to number

  //changed this to a conditional statement
  function processInput () {
    if (charPool === " ") {
    alert("Invalid input. Please select at least one option");
    collectInput();
    // } else {
    //   parseFloat(lengthChoose);
    //   let charArray = charPool.split(" ");
    //   for (let i=0; i < charArray.length; i++) {
    //     let spliceSelect = Math.floor(Math.random() * lengthChoose);
    //     charArray.splice(spliceSelect);
    //   } charPool = charArray.toString();
    //   return charPool;
    }
  };

  function makePass () {
  for ( let i = 0; i < charPool; i++) {
    let charSelect = Math.floor(Math.random() * processInput.charPool - 1);
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