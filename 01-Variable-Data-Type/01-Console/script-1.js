console.log(100);
console.log("Hello world");
console.log(20,'hello', true);

const x = 100;

console.log(x);

console.error('Alert');
console.warn("Warning");

console.table({ name: "Henry", email: "Email@gmail.com"});

console.group("simple");
console.log(x);
console.error('Alert');
console.warn("Warning");
console.groupEnd();

const styles = 'padding: 20px; background-color: white; color:green';

console.log('%cHello world', styles)
