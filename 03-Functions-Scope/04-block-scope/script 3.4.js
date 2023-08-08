const x = 100;
const foo = 1;
var bar = 2; //gets addedd to the window object

if (true) {
    const y = 200;
    console.log(x + y);
}

// console.log(x + y);

for(let i = 0; i <= 10; i ++) {
   console.log(i);
}

// console.log(i);

if(true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c) //var is not blocked scoped, it becomes a global variable

function run() {
    var d = 100; //var is function scoped
    console.log(d);    
}

run();

