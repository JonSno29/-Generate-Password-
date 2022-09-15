// Start working code here
// User input variables
// Start password variable values
// Special characters arrays
var lengthOfPass = 8-128;
var choiceArr =[];

// Special characters
var SpecialCharArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// lowerCase alphabet characters
var LowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// upperCase alphabet characters
var UpperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Numeric characters
var NumbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Get references to generate element
generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create a function to generate a password closing
// Using "window.prompt" instead of only "prompt",  "window" represents the whole list, or the global script.
//generatePassword bases on prompt
function generatePassword() {
  console.log("clicked button")
  
}
  
function getPrompts(){
  lengthOfPass = parseInt(window.prompt("Password must be between 8-128 characters \n Use UPPERCASE and lowercase LeTtErS \n Use a Numer1c va1ue \n Use $pec|al Ch@racter$"));

  // Used "if" statements to check progress
  if(isNaN(lengthOfPass) || lengthOfPass < 8 || lengthOfPass > 128) {
    alert("The length of Password must be between 8-128 characters, Take another stab at it.");
    return false;
  }

  if (confirm("Do you want to use Numbers?")) {
    choiceArr = choiceArr.concat(NumbersArr);
  }
  if (confirm("Do you want to use lowercase letters?")) {
    choiceArr = choiceArr.concat (LowerCaseArr);
  }
  
  if  (confirm("Do you want to use UPPERCASE letters?")) {
    choiceArr = choiceArr.concat (UpperCaseArr);
  }
  
  if (confirm("Do you want to use SpecialCharacters?!@#$*")) {
    choiceArr = choiceArr.concat (SpecialCharArr);
}
  
  return true;
  
}