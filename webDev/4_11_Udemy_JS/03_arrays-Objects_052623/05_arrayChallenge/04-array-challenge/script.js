// MY Challenge 1
const arr = [1,2,3,4,5];

arr.reverse();
arr.unshift(6);
arr.push(0);

console.log(arr);
//[6, 5, 4, 3, 2, 1, 0];


// SOLUTION Challenge 1 
// const arr =[1, 2, 3, 4, 5];

// arr.unshift(0);
// arr.push(6);
// arr.reverse();

// console.log(arr);



// MY Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2);

arr3.splice(arr3.indexOf(5), 1);

console.log(arr3);


// SOLUTION Challenge 2
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
// const arr3 = arr1.slice(0, 4).concat(arr2);

// console.log(arr3);

// Solution 2
// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

// console.log(arr4);

