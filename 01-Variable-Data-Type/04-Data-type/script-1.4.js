//DATA TYPES
/* 


//primitive data types
strings - sequence of characters. must be inq utoes or backticks
number- integers as well as floating point numbers
boolean - logical entity/ true false
null - intentional absence of any object value (empty)
undefined - a vraiable that has not yet been defined / assigned
symbol- built in object whose construcutor returns a unique symbol
BigInt - numbers that are greater than the number type can handle


//reference types (Objects)
Reference types or 'objects' are non primitive value and when assigned to a variable, the variableis given a reference to that value
object literals, arrays and functions are all reference types

// static types vs dynamic type

javaScript is a dynamically-types lanaguage. this means we do not explicitly define the types for our variables. 
many other lanaguages are statically-types such as C C++ and Java

TypeScript is superset of javascript, which allows static-typing. this can make your code more verbose and less prone to errors. 
typescript may be something you want to to look into later


*/


//string

const firstName = 'Sara';

//number

const age = 30;
const temp = 98.9;

//boolean
hasKids = true


//null
const aptNumber = null; 

//undefined
const score = undefined;

//symbol
const id = Symbol("id");

const n = 999999999999999999n;

//refrence types


//array
const numbers = [1,2,3,4];

//object
const person = {
    name: 'Henry',
}

//function

function sayHello() {
    console.log("Hello");
}

const output = aptNumber;

console.log(output, typeof output);


// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3



