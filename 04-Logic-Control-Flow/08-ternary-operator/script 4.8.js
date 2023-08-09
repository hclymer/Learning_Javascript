const age = 19;

//using an if statment
if (age >= 18) {
  console.log('you can vote');
} else {
  console.log('You cannot vote');
}

//using a ternary operator
age >= 18 ? console.log('you can vote') : console.log('you cannot vote');

//assiging a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'you cant vote';

console.log(canVote2);

//multiple statements

const auth = true;

// let redirect;

// using a if statement
if(auth )
{
  alert("Welcome to the dashboard")
  redirect = '/dashboard'
} else {
  alert("Access Denied")
  redirect = '/login'
}

const redirect = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Acces denied'), '/login');

console.log(redirect);

//shorthand both mean if statements

auth ? console.log("Welcome to the dashboard") : null;
auth && console.log("Welcome to the dashboard");