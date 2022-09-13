// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];var upperCase = ["A"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function generatePassword() {
 var lengthofpass = prompt ("password must be 8-128 characters")
 console.log (lengthofpass)
 if (lengthofpass <=128 && lengthofpass >=8){
  console.log ("passwordcheck")
  var confirmNumber = confirm("do you want numbers")
  console.log (confirmNumber)
  var confirmLower = confirm ("do you want lower case letters")
  if (confirmNumber){ 
    
  }
 } else {
 generatePassword()
 }
  return "hello"
  
}

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
