// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"

// MY SOLUTION
let myNewString;
const myString = 'developer';

myNewString = myString[0].toUpperCase();
myNewString += myString.substring(1);

console.log(myNewString);

// OTHER SOLUTIONS
// Solution 1
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2 (Uses string[0] instead of string.charAt(0))
// const myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3 (Uses template literal and slice())
// const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;