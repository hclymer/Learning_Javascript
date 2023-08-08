/* 

execution context- a special environment created to handle that transformation & execution of code
Contains currently running code and everything that aids in execution
global and function context

single thread and synchronous- executed line by line 

execution context phases

memory creation phase - one swoop through before execution
1. Create the global object (browser=window, node.js = global)
2. create the "this" object and bind it to the global object
3. setup memory heap for storing variables and function references
4. store functions and vairables in global execution context and set to undefined

execution phase
1. execute code line by line
2. create a new execution context for each function call

functions are on the global scope





*/


