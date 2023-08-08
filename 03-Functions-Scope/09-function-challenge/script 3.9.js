//challenge one
// function getCelsius(F) {    
//     console.log((F- 32)* 5/9)
// }

const getCelsius = F => (F-32) * 5/9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

//challenge 2
const minMax = (...numbers) => ({
    min : Math.min(...numbers),
    max : Math.max(...numbers),
})

console.log(minMax(1,2,3,4,5));

//challenge 3

(function (length, width) {
    const area = length * width
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);        
}
)(10,5);