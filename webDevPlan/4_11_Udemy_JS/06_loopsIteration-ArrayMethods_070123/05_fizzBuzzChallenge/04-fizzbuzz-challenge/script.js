// FizzBuzz Challenge
for(let i=1; i<=100; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 === 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

// Solution 1 (for)
// for (let i = 1; i <= 100; i++) {
//     if (i % 15 == 0) {
//     	console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//     	console.log("Fizz");
//     } else if (i % 5 == 0) {
//     	console.log("Buzz");
//     } else {
//     	console.log(i);
//     }
// }

// Solution 2 (while)
// let i = 1;

// while(i <= 100) {
//   if (i % 15 == 0) {
//       console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//       console.log("Fizz");
//   } else if (i % 5 == 0) {
//       console.log("Buzz");
//   } else {
//       console.log(i);
//   }

//   i++;
// }
