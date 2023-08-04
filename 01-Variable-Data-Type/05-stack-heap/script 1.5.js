//STACK HEAP
/* 


//primitive data types - Stored in the stack
strings - sequence of characters. must be inq utoes or backticks
number- integers as well as floating point numbers
boolean - logical entity/ true false
null - intentional absence of any object value (empty)
undefined - a vraiable that has not yet been defined / assigned
symbol- built in object whose construcutor returns a unique symbol
BigInt - numbers that are greater than the number type can handle


//reference types (Objects) - Stored in the heap
Reference types or 'objects' are non primitive value and when assigned to a variable, the variableis given a reference to that value
object literals, arrays and functions are all reference types
 

if you assign a variable to a reference type and change it later because its stored in the heap
all refrences of that variable change


Stack- all is stored      Heap - this changed based on what is being refrenced
|newPerson|     |
|person|--------|name: bradley
|age = 30|      |age: 40
|name = "John"| |





*/


// Values are stored on the stack
const name = 'John';
const age = 30;


//Reference values are stored on the heap
const person = {
    name: "brad",
    age: 40
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley';


const output = aptNumber;

console.log(output, typeof output);
