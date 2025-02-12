// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called "name" and set it to the string 'Dane'
// We check if the name variable is set to the string 'Mary', however since our variable is set to Dane, it moves to the else condition.
// We console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable secret but do not assign a value. 
// We make a variable code and set to 123 as a number.
// We then check if code is explicitly equal to 123 and since it is currently, 
// you set the variable secret to the string 'super'
// then multiple 123 by 2 which equals 246. We then console.log the word 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We set the variable isStudent to true as a boolean, variable age to 34 as a number, and variable zip to 55407 as a number as well.
// We then check if isStudent is true as well as if the zip is greater than 80000, which it is not, and moves onto the next.
// We check if isStudent is false OR if the age is less than 30, which we do not meet, and moves to the next again.
// We then check if the iStudent is true, and since it is, we return the console.log of 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - change colorOne = 'blue' and colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// FIX - add colorTwo = 'purple' within the conditional statement underneath colorOne
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - The conditional is asking if the temp variable and time variable are set to specific values
// However the conditional is currently checking either temp OR time are set to those values.
// Changing it to an and comparison (&&) fixes the statement
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.


/*
let age = 21;
const minAge = 21;
// FIX --  changing the if conditional to be console.log('enter') and the else to be console.log('no entry').
// The if conditional is looking to see if the () conditoinal is true, which in this case it is. We would want to return 'enter' 
// as the conditional is met. However, currently the conditional would return 'no entry', which is not the intended purpose.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

