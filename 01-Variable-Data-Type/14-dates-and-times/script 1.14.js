let d;

d = new Date();

d = d.toString();

//months are one behind the normal. like 6 = july. zero index
d = new Date(2021, 6, 10, 12, 30, 0);

d = new Date("2021-07-10T12:30:00")
d = new Date("07/10/2021 12:30:00")
// this makes it off by a day (check stackoverflow)
d = new Date("2022-07-10")



d = Date.now();
d = new Date("07-10-22 12:30:00");
d = d.getTime();
d = d.valueOf();


d = new Date(1666962049745)

console.log(d);




// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off



