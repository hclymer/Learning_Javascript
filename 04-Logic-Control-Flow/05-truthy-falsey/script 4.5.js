//falsy values
// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN

//Truthy values
// - everythin else tha tis not falsy
// - true
// - "0" (0 in a string)
// - " " (space in a string)
// - "false" (false in a string)
// - [] empty array
// - {} empty object
// - function () {} (empty function)


const x = false;

if (x) {
  
  console.log("This is truthy");

} else {
  console.log("This is falsy");  
}


console.log(Boolean(X));


//truthy and falsy caveats
const children = 0;
// this will evalute to false if we did not include the !== undefined
if (children !== undefined) {
  console.log(`you have ${children} children`);
} else {
  console.log("Please enter number of children");
}

//checking for empty arrays
const posts = ["Post one", "post two"]
//without the .length > 0 it would evalute to true
if (posts.length > 0) {
  console.log("List posts");  
} else {
  console.log("No posts to list");
}


//checking for empty object
const user = {
  name: "Brad"
}
//without the object.keys ? length it would evaulate to true
if (Object.keys(user).length > 0) {
  console.log("List user");
} else {
  console.log("No user");
}

//loose equality (==)
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);
// all evaulate to true with ==, will evaulate to false with ===


