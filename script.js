// Start working code here
// Step 1: Prompt the user.
  //Password length between 8-128.
  //Lowercase, Uppercase, Numerical and Special Characters.
// Step 2: Input Validation
// Step 3: Generate password based on criteria.
// Step 4: Display the password where the "your secure password is."

//Start Coding
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
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// returns True or False
// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");
  console.log("newPassword")

// Create a function to generate a password closing
// generatePassword bases on prompt
  if (correctPrompts) { 
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
  passwordText.value = "newPassword";
  }

}


function generatePassword() {
  var password = "" ;
  for(var i = 0; i < lengthOfPass; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;

}
  
// Using "window.prompt" instead of only "prompt",  "window" represents the whole list, or the global script.
function getPrompts(){
  choiceArr =[];
  
  // Prompt the User
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
