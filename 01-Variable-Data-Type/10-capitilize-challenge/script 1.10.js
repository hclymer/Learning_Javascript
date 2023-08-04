//my solution
let myString = 'developer';

let x = myString.charAt(0)

x = myString.substring(0,1)
x = x.toUpperCase();
let y = myString.substring(1);

let myNewString = x + y


console.log(myNewString);

//solution 1
const myString1 = 'developer'

let myNewString1
myNewString1 = myString1.charAt(0).toUpperCase() + myString1.substring(1);
//solution 2
myNewString1 = myString1[0].toUpperCase() + myString1.slice(1);
//solution 3
myNewString1 = `${myString1[0].toUpperCase()}${myString1.substring(1)}`;


console.log(myNewString1)