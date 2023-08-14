let i = 0;
while (i <= 20) {
  console.log('number' + i);
  i++;
}

const array = [10, 20, 30, 40];

while (i < array.length) {
  console.log(arr[i]);
  i++;
}

//nesting while loops
while (i <= 5) {
  console.log('number ' + i);

  let j = 1;

  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

//do while loops will run once no matter if the condition is met
//it executes with do and then checks the conditional
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);


