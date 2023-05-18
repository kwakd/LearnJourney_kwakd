/* multi
line
comments */

// let, const
const constAge = 30;
let letAge = 30;
letAge = 31;

console.log(constAge);
console.log(letAge);

// String, Numbers, Boolean, null, undefined
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World';
const d = 'technology, computers, it, code';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''))

console.log(d.split(', '));

// Arrays - variables that hold multiple values
const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

// Should get rid of 'mangos'
fruits.pop();

console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));

console.log(fruits);
console.log(fruits[0]);

const person =
{
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: 
    {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'john@gmail.com';

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address:{city}} = person;

console.log(firstName);
console.log(city);

const todos = 
[
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

for(let i=0; i<todos.length; i++)
{
    console.log(todos[i].text);
}
for(let todo of todos)
{
    console.log(todo.id);
}

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For Loop
for(let i=0; i<=10; i++)
{
    console.log(`For Loop Number: ${i}`);
}

// While Loop
let i = 0;
while(i<10)
{
    console.log(`While Loop Number: ${i}`);
    i++;
}

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompleted2 = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted2);

const x2 = 4;
const y2 = 11;

if(x2 == 10)
{
    console.log('x2 is 10');
}

if(x2 === 10)
{
    console.log('x2 is 10');
}
else if(x2 > 10)
{
    console.log('x2 is greater than 10');
}
else
{
    console.log('x2 is less than 10');
}

if(x2>5 || y2>10)
{
    console.log('x2 is more than 5 or y2 is more than 10');
}

if(x2>5 && y2>10)
{
    console.log('x2 is more than 5 or y2 is more than 10');
}

const x3 = 10;
const color = x3 > 10 ? 'red' : 'blue';
// if x3>10 then 'red else 'blue'

console.log(color);

switch(color)
{
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// Functions
function addNums(num1, num2)
{
    return num1 + num2;
}
console.log(addNums(5, 4));

const addNums2 = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNums2(5, 3);

const addNums3 = (num1, num2) => num1 + num2;
console.log(addNums3(5, 2));

todos.forEach((todo) => console.log(todo));

// Constructor function
function PersonCon(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

PersonCon.prototype.getBirthYear = function()
{
    return 'hello';
}

PersonCon.prototype.getFullName = function()
{
    return `${this.firstName} ${this.lastName}`;
}

// Class
class PersonClass
{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear()
    {
        return 'hello2';
    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`; 
    }
}

// Instantiate object Con
const person1Con = new PersonCon('John', 'Doe', '4-3-1980');
const person2Con = new PersonCon('Mary', 'Smith', '3-6-1970');

console.log(person2Con.getFullName());
console.log(person1Con);
console.log(person2Con.firstName);
console.log(person2Con.dob.getFullYear());

console.log(person1Con.getBirthYear());
console.log(person1Con.getFullName());

// Instantiate object Class
const person1Class = new PersonCon('John', 'Doe', '4-3-1980');
const person2Class = new PersonCon('Mary', 'Smith', '3-6-1970');

console.log(person2Class.getFullName());
console.log(person1Class);



