// Assignment code here
var specialChar = ["!","@","#","$","%","&"]
var lowerCase = ["a","b"]
var upperCase = ["A"]
var numbers = ["1"]
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
