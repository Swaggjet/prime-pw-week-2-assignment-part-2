// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0.
// //EXAMPLE. We make a variable called number and set it to 1.
// Then we increment the  Number is now, so it equal 2
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// the console.log is 'yes'.

//CODE
/*
let number = 1;
number++;
if (number >= 2) {
  console.log('yes');
}
*/


// 1. WRITE YOUR DESCRIPTION HERE
// We defined a variable called name and assign it a name called Dane.
// Then we check name if is exactly the data type and value of the name Mary. If the name data type and value
// is true, it will then console.log's Hi Mary.  However if the name data type and value
// is false then it will console.log How do you do?
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
// We define da variable called secret and also defined a variable called code and assign code a number value of 123.
// Then we check to see if code is the type and value of number value of 123. If it is the variable secret
// will be assigned a string 'super' and multiply operation using the variable code multiplying by two, which equals 246.
// The last conditional checks if code is greater than 250 and if it is then it will be assign the variable secret to duper.
// Then it will console.log the variable of secret, which in this case will be super.

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
// We define a variable called isStudent and assign it a value of true.
// We define two variables one called age with a number value of 34 and another called zip with a number value of 55407.
// Then we check to see if the variable isStudent exactly matches true and also if zip is greater than 80000. If it is then we
// console.log the value 'You're a student on the West Coast!' .  If the first conditional does not match, we will goto the next conditional which will check
// if the variable isStudent exactly matches false or ages is less than thirty, if this is true we will console log 'What are your hobbies'. If the second conditional is not valid.
// If the variable isStudent is true, itv console.log 'Welcome to Prime'. Lastly if none of
// these conditional checks are valid then we just console.log 'How about the weather?'

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



//4.We start with three variables -- colorOne's value is set to string 'blue' and
// colorTwo's value is set to string 'red', and mix's value is set to boolean true.
// PROBLEM: As written, the conditional would only set colorOne's value to 'purple'
// PROBLEM: Only colorOne is reassigned a value. Need also to reassign colorTwo
// After fixing we check if mix is true.
//    It is: the conditional sets colorOne and colorTwo values to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
if (mix === true) {
  colorOne = 'purple';
}
*/

// I would add in the if statement colorTwo and add an "+" to make sure both color are equal to 'purple'
//if (mix === true) {
//  colorOne + colorTwo = 'purple';
// }

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// The only change to the code would be '||' should be '&&' to make the "if" statetment accurate.

/*
let temp = 40;
const time = 4;
if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
// The only needed to be change would be console log need to be changed
//
//  if(minAge <= age) {
//  console.log('enter');
// } else {
//  console.log('no entry');
// }

