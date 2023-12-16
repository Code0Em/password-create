// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// 2.1: Array of lowercase and uppercase to be included in password
const lowerUpperCasedCharacters = lowerCasedCharacters.concat(upperCasedCharacters)
// console.log(lowerUpperCasedCharacters)
// expected result: CORRECT

// 2.1: Array of lowercase, uppercase and numbers to be included in password
const lowerUpperNumsCharacters = lowerUpperCasedCharacters.concat(numericCharacters)
// console.log(lowerUpperNumsCharacters)
// expected result: CORRECT

// 2.1: Array of lowercase, uppercase and special characters to be included in password
const lowerUpperSpecCharacters = lowerUpperCasedCharacters.concat(specialCharacters)
// console.log(lowerUpperSpecCharacters)
// expected result: CORRECT

// 2.1: Array of lowercase, uppercase, numbers and special characters to be included in password
const lowerUpperNumsSpecCharacters = lowerUpperNumsCharacters.concat(specialCharacters)
// console.log(lowerUpperNumsSpecCharacters)
// expected result: CORRECT

// 2.1: Array of lowercase and numbers to be included in password
const lowerNumsCharacters = lowerCasedCharacters.concat(numericCharacters)
// console.log(lowerNumsCharacters)
// expected result: CORRECT

// 2.1: Array of lowercase, numbers and special characters to be included in password
const lowerNumsSpecCharacters = lowerNumsCharacters.concat(specialCharacters)
// console.log(lowerNumsSpecCharacters)
// expected result: CORRECT

// 2.1: Array of lowercase and special characters to be included in password
const lowerSpecCharacters = lowerCasedCharacters.concat(specialCharacters)
// console.log(lowerSpecCharacters)
// expected result: CORRECT

// 1.1: Object to "collect" the user's password options (to be used with getPasswordOptions function)
let userChoice = {
  pwIncUpperCase: false,
  pwIncNumeric: false,
  pwIncSpecial: false,
  pwLength: 0,
};

// 2.3: Variable to "collect" the randomly generated elements (i.e. characters) (which will become the user's password)
let thePassword = ""

// **TASK 1: Present a series of prompts for password criteria, prompting for length of password (at least 8 characters but no more than 128) and character types (lowercase, uppercase, numeric, and special characters).

// *TASK 1.1: Create object to store user's password options.

// *TASK 1.2: Create function to prompt the user for password options.

// *TASK 1.2.1: Use confirm method to ask questions with yes/no answers (i.e. questions about password characters).
// WORKINGS: Character type questions all require a yes or no answer (i.e. true or false). Confirm method returns true (if user selects OK) or otherwise returns false, so we can use this method to ask these questions.

// *TASK 1.2.2: Use prompt method to ask question that requires user input in answer (i.e. question about password length).
// WORKINGS: The prompt method returns a string (as the data type). However, we need the returned value to be a number type (so that we can use this in later functions). The parseInt method ‘parses’ a value as a string and returns the first ‘integer’ (i.e. number). In simplistic terms, we can therefore use this method to ‘convert’ the string into a number.

// *TASK 1.2.3: Use if/else statement and do/while loop to validate user’s input (i.e. check the answer is a number between 8 and 128, and keep asking if not).
// WORKINGS: Length question requires a number as the answer (i.e. user input). Prompt method returns user’s input value (if user selects OK) otherwise it returns null, so we can use this method to ask the length question. However, we need to validate this to ensure a number (within our specified range) is inputted by the user. If/else statement(s) check condition(s) and only run the code block if the condition(s) are met, so we can use this to set our conditions (i.e. length must be between 8 and 128, and cannot not be a number). But we then need to keep asking this question until the user’s input meets our conditions. We can use a do/while loop for this. Do/while loops will execute the code block once (i.e. ask the question once) before checking if the condition is true (i.e. does the answer meet our conditions) and if not, will loop through again (i.e. keep asking the question) and so on, until the condition(s) are met (i.e. until the user inputs a number between 8 and 128).

// 1.2: Function to prompt the user for password options.
function getPasswordChoices() {
  // 1.2.1: Confirm methods for questions about password characters. (Used template templates).
  userChoice.pwIncUpperCase = confirm(`Do you want to include uppercases in your password?

To answer yes, select 'OK'. To answer no, select 'Cancel'.`);
  userChoice.pwIncNumeric = confirm(`Do you want to include numbers in your password?
  
To answer yes, select 'OK'. To answer no, select 'Cancel'.`);
  userChoice.pwIncSpecial = confirm(`Do you want to include special characters in your password?
  
To answer yes, select 'OK'. To answer no, select 'Cancel'.`);
  // 1.2.2: Prompt method for question about password length, and parseInt method to return number data type.
  userChoice.pwLength = parseInt(prompt("Choose the length of your password (from 8 to 128)"));
  // 1.2.3: Do/while loop inside of the function, to continue prompting the user until they've inputted an accepted value (i.e a number from 8 to 128)
  do{
  if(userChoice.pwLength < 8 || userChoice.pwLength > 128 || isNaN(userChoice.pwLength)) {
    userChoice.pwLength = parseInt(prompt("Try again! Choose the length of your password (from 8 to 128)"))
  } else {
    alert(`Thanks for making your password choices.
 
To generate your password, select 'OK' and then select the 'Generate Password' button in the browser.`);
  }
  } while(userChoice.pwLength < 8 || userChoice.pwLength > 128 || isNaN(userChoice.pwLength));
  }

// 1.2: Call getPasswordChoices function (so that the user is asked for their password choices)
getPasswordChoices()
// console.log(userChoice)
// expected result: CORRECT

// **TASK 2: Once prompts are answered then the password should be generated.

// *TASK 2.1: Create arrays containing elements (i.e. characters) with all possible user choices (i.e. lowercase and uppercase; lowercase, uppercase and numbers; lowercase, uppercase and special; lowercase, uppercase, numbers and special; lowercase and numbers; lowercase, numbers and special characters; lowercase and special characters).
// WORKINGS: Starter code included separate arrays of lowercase characters, uppercase, numbers and special characters so we can join these to make the new arrays. Array concat method joins two or more arrays and returns a new array (without altering the original array). As our new arrays need to be made up of our existing arrays, we can use the concat method.

// *TASK 2.2: Create a function which will return a random element from an array (i.e. a random character).
// WORKINGS: Math.random method returns a random number between 0 and 1. We need higher than this to be returned though, because our arrays are longer than this. When we use Math.random used with the Math.floor method, it can return random ‘integers’ (i.e. numbers). We therefore set it to return a number that is up to the length of our array.

// 2.2: Function for getting a random element from an array (i.e. a random character) (these randomly selected character will then be used to build the user's password)
function getRandom(arr) {
  return (arr[(Math.floor(Math.random() * arr.length))]);
}

// 2.2: Call getRandom function (to test it's working on all of our arrays)
// console.log(getRandom(lowerCasedCharacters))
// expected result: CORRECT
//console.log(getRandom(lowerUpperCasedCharacters))
// expected result: CORRECT
// console.log(getRandom(lowerUpperNumsCharacters))
// expected result: CORRECT
// console.log(getRandom(lowerUpperSpecCharacters))
// expected result: CORRECT
// console.log(getRandom(lowerUpperNumsSpecCharacters))
// expected result: CORRECT
// console.log(getRandom(lowerNumsCharacters))
// expected result: CORRECT
// console.log(getRandom(lowerNumsSpecCharacters))
// expected result: CORRECT
// console.log(getRandom(lowerSpecCharacters))
// expected result: CORRECT

// *TASK 2.3: Create variable to store the user's generated password.

// *TASK 2.4: Create a function to generate a password based on the user’s choices (i.e. their preferences for characters and specified length).

// *TASK 2.4.1: Password based on the user’s chosen characters.
// WORKINGS: We need the password to meet the user’s character choices and length choice (i.e. meet the conditions stored in userChoice object). So to begin, the password needs to be generated from the array that contains the user’s character choices (e.g. just lowercase characters, or lowercase and uppercase characters; etc). Switch statements are similar to if/else statements; they check for strict equality between the case and the expression, and if one of the cases matches the expression, then the code inside that case will run. We can therefore use this to say: if the user’s choice(s) are met, run the getRandom function through the array that contains the user’s character choice(s) and add the returned element (i.e. character) to thePassword variable (i.e. the user’s generated password). For example, if the user said no to uppercase, no to numbers and no to special character; the randomly generated element from the lowercaseCharacters array will be returned and added to the user’s generated password.

// 2.4.1: Function to generate password based on user's choices
function generatePassword() {
  switch(true) {
    // Case for lowercase only
    case(userChoice.pwIncUpperCase === false && userChoice.pwIncNumeric === false && userChoice.pwIncSpecial === false):
    thePassword += getRandom(lowerCasedCharacters);
    break;
    // Case for lowercase and uppercase
    case(userChoice.pwIncUpperCase === true && userChoice.pwIncNumeric === false && userChoice.pwIncSpecial === false):
    thePassword += getRandom(lowerUpperCasedCharacters);
    break;
    // Case for lowercase, uppercase and numbers
    case(userChoice.pwIncUpperCase === true && userChoice.pwIncNumeric === true && userChoice.pwIncSpecial === false):
    thePassword += getRandom(lowerUpperNumsCharacters);
    break;
    // Case for lowercase, uppercase and special characters
    case(userChoice.pwIncUpperCase === true && userChoice.pwIncNumeric === false && userChoice.pwIncSpecial === true):
    thePassword += getRandom(lowerUpperSpecCharacters);
    break;
    // Case for lowercase, uppercase and special characters
    case(userChoice.pwIncUpperCase === true && userChoice.pwIncNumeric === true && userChoice.pwIncSpecial === true):
    thePassword += getRandom(lowerUpperNumsSpecCharacters);
    break;
    // Case for lowercase and numbers
    case(userChoice.pwIncUpperCase === false && userChoice.pwIncNumeric === true && userChoice.pwIncSpecial === false):
    thePassword += getRandom(lowerNumsCharacters);
    break;
    // Case for lowercase, numbers and special characters
    case(userChoice.pwIncUpperCase === false && userChoice.pwIncNumeric === true && userChoice.pwIncSpecial === true):
    thePassword += getRandom(lowerNumsSpecCharacters);
    break;
    // Case for lowercase and special characters
    case(userChoice.pwIncUpperCase === false && userChoice.pwIncNumeric === false && userChoice.pwIncSpecial === true):
    thePassword += getRandom(lowerSpecCharacters);
    break;
    default:
      console.log("A bug! Something must have gone wrong. Time to look at the code.");
  }
}

// *TASK 2.4.2: Password of user’s chosen length.
// WORKINGS: However, the above (2.4.1) would only give us one character (i.e. the password would be a length of 1). Therefore we also need to meet the user’s choice of length. We can use a do/while loop to say: continue running the generatePassword function until the thePassword variable is the same length as the userChoice.pwLength property (i.e. is the same as the user’s choice of length).

// 2.4.2: Do/while loop to interate through the generatePassword function, until a password of the user's chosen length has been generated
do{generatePassword()}while(thePassword.length<userChoice.pwLength)
// console.log(thePassword)
// expected result: CORRECT (checked for all cases)

// **TASK 3: Write generated password to the page.
// *TASK: 3.1: When user selects button, generated password is written to page.
// WORKINGS: Starter code included functionality for this task, so only need to update password variable with thePassword variable.

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// 3.1: Write password to the #password input
function writePassword() {
  const password = thePassword;
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

/* CREDITS: With thanks to the following, which built upon coder’s existing knowledge of the methods cited/used throughout:

freeCodeCamp (2021) JavaScript Switch Case – JS Switch Statement Example (https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/)

GeeksforGeeks (2023) How to select a random element from array in JavaScript? (https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)

W3Schools (no date) JavaScript parseInt() Method (https://www.w3schools.com/jsref/jsref_parseint.asp#gsc.tab=0)

W3Schools (no date) JavaScript Random Integers (https://www.w3schools.com/js/js_random.asp)

W3Schools (no date) JavaScript String concat() Method (https://www.w3schools.com/jsref/jsref_concat_string.asp) */
