//scope- current area or context of specific peice of code

// window.alert("hello");
// console.log(window.innerWidth);

const x = 100;

console.log(x, "in global");


function run() {
    console.log(window.innerHeight);
    console.log(x, "in function");
}


run();

if (true) {
    console.log(x, "in block");
}

function add() {
    const x = 1; //this overshadows the global x: variable shadowing
    const y = 50;
    console.log(x + y);
}

// console.log(y); 

add();