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

// **TASK 1: Present a series of prompts for password criteria, prompting for length of password (at least 8 characters but no more than 128) and character types (lowercase, uppercase, numeric, and special characters).

// *TASK 1.1: Create object to store user's password options.
// 1.1: Object to "collect" the user's password options (to be used with getPasswordOptions function)
let userChoice = {
  pwIncUpperCase: false,
  pwIncNumeric: false,
  pwIncSpecial: false,
  pwLength: 0,
};

// *TASK 1.2: Create function to prompt the user for password options.
// *TASK 1.2.1: Use confirm length to ask questions with yes/no answers (i.e. questions about password characters).
// WORKINGS: Character type questions all require a yes or no answer (i.e. true or false). Confirm method returns true (if user selects OK) or otherwise returns false, so we can use this method to ask these questions.

// *TASK 1.2.2: Use prompt method to ask question which requires user input in answer (i.e. question about password length).
// *TASK 1.2.3: Use if/else statement and do/while loop to validate user’s input (i.e. check the answer is a number between 8 and 128, and keep asking if not).
// WORKINGS: Length question requires a number as the answer (i.e. user input). Prompt method returns user’s input value (if user selects OK) otherwise it returns null, so we can use this method to ask the length question. However, we need to validate this to ensure a number (within our specified range) is inputted by the user. If/else statement(s) check condition(s) and only run the code block if the condition(s) are met, so we can use this to set our conditions (i.e. length must be between 8 and 128, and cannot not be a number). But we then need to keep asking this question until the user’s input meets our conditions. We can use a do/while loop for this. Do/while loops will execute the code block once (i.e. ask the question once) before checking if the condition is true (i.e. does the answer meet our conditions) and if not, will loop through again (i.e. keep asking the question) and so on, until the condition(s) are met (i.e. until the user inputs a number between 8 and 128).
// 1.2: Function to prompt the user for password options.
function getPasswordOptions() {
  // 1.2.1: Confirm methods for questions about password characters.
  userChoice.pwIncUpperCase = confirm(`Do you want to include uppercases in your password?

To answer yes, select 'OK'. To answer no, select 'Cancel'.`)
  userChoice.pwIncNumeric = confirm(`Do you want to include numbers in your password?
  
To answer yes, select 'OK'. To answer no, select 'Cancel'.`)
  userChoice.pwIncSpecial = confirm(`Do you want to include special characters in your password?
  
To answer yes, select 'OK'. To answer no, select 'Cancel'.`)
  // 1.2.2: Prompt method for question about password length.
  userChoice.pwLength = parseInt(prompt("Choose the length of your password (from 8 to 128)"))
  // 1.2.3: Do/while loop inside of the function, to continue prompting the user until they've inputted an accepted value (i.e a number from 8 to 128)
  do{
  if(userChoice.pwLength < 8 || userChoice.pwLength > 128 || isNaN(userChoice.pwLength)) {
    userChoice.pwLength = parseInt(prompt("Try again! Choose the length of your password (from 8 to 128)"))
  } else {
    alert(`Thanks for making your password choices.
 
To generate your password, select 'OK' and then select the 'Generate Password' button in the browser.`)
  }
  } while(userChoice.pwLength < 8 || userChoice.pwLength > 128 || isNaN(userChoice.pwLength));
  }

// 1.2: Call getPasswordOptions function (so that the user is asked for their password options)
getPasswordOptions()
console.log(userChoice)
// expected result: CORRECT

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);