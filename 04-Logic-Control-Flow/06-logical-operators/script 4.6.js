//evaulates to false, all expressions have to be true
console.log(10 > 20 && 30 > 15);

//evaulates to true, one expression have to be true
console.log(10 > 20 || 30 > 15);

//&& - will return fitst falsy value or the last value
let a;

a = 10 && 20; //will return 20
a = 10 && 20 && 30; //will return 30
a = 10 && 0 && 30; //will return 0

console.log(a);

const posts = ['Post 1', 'Post 2'];

posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy value or the last value

let b;

b = 10 || 20; //will return 10
b = 0 || 20; // will return 20
b = 0 || null || ''; // with return ""

console.log(b);


// ?? - returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20; // will return 10
c = null ?? 20; //return 20
c = undefined ?? 30; // return undefined
c = 0 ?? 30; // return 0
c = "" ?? 30; // return ''


