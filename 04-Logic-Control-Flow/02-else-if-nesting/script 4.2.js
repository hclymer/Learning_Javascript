const d = new Date(10, 30, 2022, 8, 0, 0)
const hour = d.getHours();

if (hour > 12) {
  console.log("Good morning");
} else if (hour > 18) {
  console.log("Good afternoon");
}
else {  
  console.log("goodnight");
}

//nested if
if (hour > 12) {
  console.log("Good morning");

  if (hour === 6) {
    console.log("Wake Up!");
  }

} else if (hour > 18) {
  console.log("Good afternoon");
}
else {  
  console.log("goodnight");

  if (hour >= 20) {
    console.log("zzzzzzz");
  }

}



//multiple conditions
//and
if (hour >= 7 && hour < 15) {
  console.log("It is work time");
}
//or
if (hour === 6 || hour === 20) {
  console.log("Brush your teeth");
}

