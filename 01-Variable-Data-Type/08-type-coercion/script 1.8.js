let x;

//this becomes a '55' because java auto converts it
x = 5 + "5";

x = 5 + Number('5');

//this becomes 25 java auto converts '5' to a num
x = 5 * '5';

x = 5 + null;

x = Number(null);
x = Number(true);
x = Number(false);
//this becomes 5 because true = 1
x = 5 + true;


x = 5 + undefined;


console.log(x, typeof x)