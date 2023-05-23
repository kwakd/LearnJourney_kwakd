const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
console.log(`x: ${x} y: ${y}`);

const sumOutput = x + y;
const differenceOutput = x - y;
const productOutput = x * y;
const quotientOutput = x / y;
const rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${productOutput}`);
console.log(`${x} / ${y} = ${quotientOutput}`);
console.log(`${x} % ${y} = ${rmOutput}`);