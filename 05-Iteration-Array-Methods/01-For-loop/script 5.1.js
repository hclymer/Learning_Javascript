//loops- control strucutre , provides a way to do iteration
//(the process of doing a thing over again until a condition is met)

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

//initial expression- initialzies a variable/counter
//condition expression - condition that the loop will contiue to run
//as long as it is met or until the condition is false
//increment expression- espression that will be executed after each
// iteration of the loop usually increments the vraiable
//statement- code that will be executed each time the loop is run.
//to execute a block of code, use the "{}" syntax

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my lucky number');
  } else {
    console.log('Number' + i);
  }
}

//nested loops
for (let i = 1; i <= 10; i++) {
  console.log("Number" + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}


//loop through the array
const names = ["john", 'brad', 'tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "tim") {
    console.log(names[i] + " is the best");
  } else {
    console.log(names[i]);  
  }

    
}