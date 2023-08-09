const d = new Date(2022, 1, 10, 8, 0, 0);

const month = d.getMonth();

const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is january');
    break;
  case 2:
    console.log('it is february');
    break;
  case 3:
    console.log('It is march');
    break;
  default:
    console.log('it is not jan, feb, or march');
}

switch (true) {
  case hour > 12:
    console.log('Good morning');
    break;
  case hour < 18:
    console.log('Good afternoon');
    break;
  default:
    console.log('Good night');
}

