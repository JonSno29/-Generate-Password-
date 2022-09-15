# Password Generator Starter Code


## MOCK UP:

/Users/jonsnover/Desktop/UofM-VIRT-FSF-PT-08-2022-U-LOLC-ENTG/03-JavaScript/02-Challenge/Assets/03-javascript-homework-demo.png
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

var selectedOptions = [];
  var finalPass = "";



}



var lengthOfPass = window.prompt ()
  lengthOfPass = parseInt(lengthOfPass);
  console.log(lengthOfPass);

// prompt user to choose password length
if (!lengthOfPass) {
  alert("Enter a valid number.");
  return "Password length has not been set."
} else if (lengthOfPass < 8) {
  alert("That is not within the password limit. Please try again.");
  return "Invalid password length. Please try again.";
} else if (lengthOfPass> 128) {
  alert("That is not within the password limit. Please try again.");
  return "Invalid password length. Please try again.";
}

// Prompt user to ask if they want lowercase, uppercase, numerical, special charaters.
  if {

  

 // Use "if" statement to make sure the user chooses at least one of four character choices.
 if (confirmLower === false && confirmUpper === false && confirmSpecial === false) { 
  window.alert("Please select at least ONE ch@r@ct3r! type. \n Please click Generate Password button & try again!") 
  return "No password generated";
}

 // validate user input 
 if (hasLower) {
   selectedOptions.push(...LowerCase);
}
 if (hasUpper) {
   selectedOptions.push(...UpperCase);
}
 if (hasNumber) {
   selectedOptions.push(... Number);
}
 if (hasCharacter) {
   selectedOptions.push(...SpecialChar);
}

 // Returns the randomly generated user password
 for (let i = 0; i < lengthOfPass; i++) {
  var randomIndex = Math.floor(Math.random() * userChar.length);
  var randomCharacter = userChar [randomIndex]
  finalPass = finalPass + randomCharacter;
}

}

return finalPass;





// Get references to the #generate element

// Write password to the #password input


  
};

