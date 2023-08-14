const items = ['books', 'table', 'chair', 'kite'];
const users = [{ name: 'brad' }, { name: 'Kate' }, { name: 'steve' }];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

const str = 'Hellow world';

for (const letter of str) {
  console.log(letter);
}

//loop over map

const map = new Map();

map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key,value);
}

