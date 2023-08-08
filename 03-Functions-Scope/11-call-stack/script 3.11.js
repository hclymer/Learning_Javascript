/* 


The call stack

stack- data structure, last in first out. 

stack of functions to be executed
manages execution context

first function get pushed, run and then popped off

call stack
|first|
|second|
|third|
*/

function first() {
  console.log('first...');
  second();
}

function second() {
  console.log('second...');
  third();
}

function third() {
  console.log('third...');
}

first();
