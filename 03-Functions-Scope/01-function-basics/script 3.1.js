//group code together that you can run later as many times as you want

//defining/ declaring a function
function sayHello() {
    console.log("Hello world")
};
//invoking/calling a function
sayHello();

//parameters
function add(num1, num2) {
    console.log(num1+ num2)
}
//arguments
add(5,10);

function subtract(num1, num2) {
    return num1 - num2
};

const result = subtract(10,2);

console.log(result, subtract(20,5));
