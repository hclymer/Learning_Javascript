//forEach- high order array message, takes a function as a agrument (callback function)
//loops through without returning anything like a for/ for of loop

const socials = ["Twitter", "Linkedin", "facebook", "instagram"];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// })

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);
const socialObjs = [
  {name: "Twitter", url: "www.twitter.com" },  
  {name: "Twitter2", url: "www.twitter2.com"},  
  {name: "Twitter3", url: "www.twitter3.com"},  
  {name: "Twitter4", url: "www.twitter4.com"},  

]

socialObjs.forEach((item) => console.log(item));
