// Assignment code here
var generateBtn = document.querySelector("#generate");


var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
 var lengthofpass = prompt ("Password must be 8-128 characters")
 console.log (lengthofpass)
 if (lengthofpass <=128 && lengthofpass >=8){
  console.log ("passwordcheck")
  var confirmNumber = confirm("Do you want numbers?")
  console.log (confirmNumber)
  var confirmLower = confirm("Do you want lower case letters?")
  if (confirmNumber){ 
    
  }
 } else {
 generatePassword()
 }
  return "Generated password will go here!";
  
}

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


