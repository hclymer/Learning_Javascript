//function declaration
function addDollarSign(value) {
    return "$" + value;
}

console.log(addDollarSign(100));

//function expression
const addPlusSign = function(value) {
    return "+" + value;
};

console.log(addPlusSign(200));

//hoisting - process of moving all the function and variable declarations to 
//the top of the current scope before the code is run
//can call a funtion before the code is defined
