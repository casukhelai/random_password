// Assignment Code
let generateBtn = document.querySelector("#generate");

// Create arrays of special characters & numbers & letters
let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "(", ")","<",">","[","]","{","}","|","/", "-", "_", "=", "+"];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
               
// avoid creating a new array of strings --> make them
let upperLetters = lowerLetters.map(letters => letters.toUpperCase());

// Write password to the #password input
function writePassword() {
  
    // add prompt, want to accept a NUMERIC value
  userInput = parseInt(window.prompt("How many characters are in your password? (Choose a number between 8-128):"));
    
    // if user does not type a number ∈ [8,128] then throw an error prompt
    while (isNaN(userInput) || (userInput < 8 || userInput > 128)  ) {
        if(isNaN(userInput)){
          window.alert("Please enter a number!");
        } else {
          window.alert("Please enter a valid number");
        }
        userInput = parseInt(window.prompt("How many characters are in your password? (Choose a number between 8-128):"));
    }
      // create the four conditions
      let lowerCase = window.confirm("Do you want lowercase letters in your password?");
      let upperCase = window.confirm("Do you want uppercase letters in your password?");
      let specialChar = window.confirm("Do you want any special characters in your password?");
      let addNum = window.confirm("Do you want numbers in your password?");
    
  
  
  // for concatenating the choices
  let choices = [];

  // 4! (four factorial) = 24 choices. Do not want to write all 24 options out, find way to condense options
  if(!lowerCase && !upperCase && !specialChar && !addNum){
    choices = window.alert("Please choose at least one condition for your password");
    lowerCase = window.confirm("Do you want lowercase letters in your password?");
    upperCase = window.confirm("Do you want uppercase letters in your password?");
    specialChar = window.confirm("Do you want any special characters in your password?");
    addNum = window.confirm("Do you want numbers in your password?");
    
  }

 // make four INDEPENDENT if statements, so if one is not true, then simply doesn't run

  if(lowerCase){
    choices = choices.concat(lowerLetters);
  }
  if(upperCase){
    choices = choices.concat(upperLetters);
  }
  if(specialChar){
    choices = choices.concat(characters);
  }
  if(addNum){
    choices = choices.concat(numbers);
  }
 
// need to take choices array and generate a random password from the chosen criteria
// loop through userInput and store into new var for choices[Math.floor(Math.random() * choices.length)]
let pass_init= [];
for (var i = 0; i < userInput; i++) {
  let pickChoices = choices[Math.floor(Math.random() * choices.length)];
  pass_init.push(pickChoices);

}
  // convert the pass_init array into a string
  let password = pass_init.join("");
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // This shows the password in the box
  passwordText.setAttribute("placeholder", password);

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
