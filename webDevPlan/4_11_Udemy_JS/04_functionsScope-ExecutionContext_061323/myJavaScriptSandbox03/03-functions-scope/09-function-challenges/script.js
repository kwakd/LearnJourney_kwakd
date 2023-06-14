// CHALLENGE 1
function getCelsius(celF)
{
    let tempInt = 0;
    tempInt = (celF - 32) * 5 / 9;
    return Math.round(tempInt);
}

console.log(`The temperature is ${getCelsius(50)} \xB0C`);

// SOLUTION 1
// const getCelsius = (fahrenheit) => {
//     const celsius = ((fahrenheit - 32) * 5) / 9;
//     return Math.round(celsius);
// };
// console.log(`The temperature is ${getCelsius(32)} \xB0C`);





// CHALLENGE 2
const minMax = (userArray) =>{
    let min = Math.min(...userArray);
    let max = Math.max(...userArray);
    return{
        min,
        max,
    };
};

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

// SOLUTION 2
// function minMax(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
  
//   return {
//   min,
//   max,
//   };
//   }
  
//   console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

// CHALLENGE 3
((length, width) => {
    const area = length * width;
    
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
    console.log(output);
})(10, 5);