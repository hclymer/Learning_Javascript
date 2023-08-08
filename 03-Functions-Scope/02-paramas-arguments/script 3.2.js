//defult params
function registerUser(user= "Bot") {

    // if (!user) {
    //     user = "bot"
    // }
    
    return user + ' is registered';
};

console.log(registerUser("John"))

//rest params
//puts the values into an array
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    } 

    return total;
}

console.log(sum(1,2,3));


//objects as params

function loginUser(user) {
    return `the user ${user.name} with the id of ${user.id} is logged in`;
};

const user = {
    id: 1,
    name: "John",
};

console.log(loginUser(user));


//arrays are paramas
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9,10]);


