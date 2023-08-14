//executes a user supplied "reducer" callback function on each element
//of the array in order, passing in the return value from the calcualtion on the preceding element
// the final result of running the reducer across all elements in a single value
//used to reduce the array down to a single item

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)


const sum2 = numbers.reduce((acc, curr) => acc + curr, 0)

console.log(sum2);


//using a for loop
const sum3 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
    
  }
  return acc;
}

console.log(sum3);

const cart = [
  { id: 1, name: "Product 1", price: 130 },
  {id: 2, name: "Product 2", price : 150},
  {id: 3, name: "Product 3", price : 175},

  
]


const total = cart.reduce((acc, product) => {
  return acc + product.price
}, 0);

console.log(total);