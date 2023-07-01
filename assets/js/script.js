// Assignment code here


// function generatePassword() {

  
//   let pass = " ";
//   const symbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
// "abcdefghijklmnopqrstuvwxyz" + "0123456789@#$";
//   for( i=0; i < symbol.length; i++) {
//     var character = Math.floor(Math.random() * symbol.length + 1);
//     pass += symbol.charAt(character)
//   }
//   return pass;
// }

function generatePassword() {
  let pass = " ";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const NUM_SYM = "0123456789@#$";

  let upperCase = prompt("Include uppercase letters, Y/N?");
  let lowerCase = prompt("Include lowercase letters, Y/N?");
  let numberSym = prompt("Include numbers and special characters, Y/N?");
}

//Refer to function at top of page to write this function

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