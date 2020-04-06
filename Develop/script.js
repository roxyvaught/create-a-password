// password variables
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let special = "!@#$%^&*()_+-=?[]<>,.".split("");

// set password length between 8 and 128 characters
function lengthPrompt() {
  let userResponse = prompt("How long would you like your password to be? A minimum of 8 and maximum of 128 characters can be chosen.");
  let numberResponse = Number(userResponse);
  while (isNaN(numberResponse) || numberResponse > 128 || numberResponse < 8) {
    if (isNaN(numberResponse)) {
      userResponse = prompt("You must enter a number.");
    }
    else if(numberResponse > 128) {
      userResponse = prompt("That's too many characters. Enter less than 128.");
    }
    else if (numberResponse < 8) {
      userResponse = prompt("That's not enough characters. Enter more than 8.");
    }
    numberResponse = Number(userResponse);
} 
return numberResponse;   
}

// characters type
function typePrompt(question) {
  let response = prompt(question).toLowerCase();
  do {
    if(response === "yes" || "YES" {
      return true;
    }
    else {
      response = prompt("Please enter a valid response." + question).toLowerCase();
    }
  } while (true);
}

//start generating pw 

function generatePassword() {
  let length = lengthPrompt();
  let useNumbers = false;
  let useLowerCase = false;
  let useUpperCase = false;
  let useSpecial = false;

  do {
    useNumbers = typePrompt("Would you like to use numbers? (yes or no)");
    useLowerCase = typePrompt("Would you like to use lower case letters? (yes or no)");
    useUpperCase = typePrompt("Would you like to use upper case letters? (yes or no)");
    useSpecial = typePrompt("Would you like to use special characters? (yes or no)");
    if(!useNumbers && !useLowerCase && !useUpperCase && !useSpecial) {
      alert("You need to choose at least one character type.");
    }
  } while(!useNumbers && !useLowerCase && !useUpperCase && !useSpecial);

      let passArray = [];

      if (useNumbers) {
        passArray(0,0,...numbers);
      }

      if (useLowerCase) {
        passArray(0,0...lowerCase);
      }

      if (useUpperCase) {
        passArray(0,0...upperCase);
      }

      if (special) {
        passArray(0,0...special);
      }
    
      let password = "";

      for (i=0; i<=length; i++) {
        let randomNum = math.floor(math.random() * passArray.length);
        password += passArray[randomNum];
      }
      return password;
  }

function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = "";
    var password = generatePassword();
    passwordText.value = password;
}

var generateBtn = document.querySelector("#generate")

generateBtn.addEventListener("click, writePassword");
