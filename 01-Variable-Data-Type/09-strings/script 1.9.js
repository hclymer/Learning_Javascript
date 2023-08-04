//strings are primative

let x;

const name = "john";
const age = 30
x = 'Hello, my name is ' + name + ' and I am ' + age +" years old";

//template literals

x = `Hello my name is ${name} and i am ${age} years old`;

//String properties and methods

const s = "Hello world"

x = typeof s;

x = s.length;

//access value by key

x = s[1];


x = s.__proto__;

x = s.toUpperCase();
x = s.toLocaleLowerCase();

x = s.charAt(0);
x = s.indexOf('H');

x = s.substring(0,4);
x = s.substring(7);

//similar to substring but you can start with negative numbers
x = s.slice(0,5);

x = s.trim();

x = s.replace("World","John");

x = s.includes('Hello');

x = s.valueOf();

x = s.split();



console.log(x);