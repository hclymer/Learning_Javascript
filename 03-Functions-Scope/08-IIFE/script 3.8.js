//IIFE Immediiately invoked function expressions
//functions in () that auto excute themselves

(function () { 
    const user = 'John';
    console.log(user);
    const hello = () => console.log("Hello from the iife");    
    hello();
})();


(function(name) {
    console.log("Hello " + name);
})("Shawn");

(function hello() {
    console.log("Hello");
})();
