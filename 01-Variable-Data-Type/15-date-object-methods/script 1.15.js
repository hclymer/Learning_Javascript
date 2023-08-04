let x;

let d = new Date();

x = d.toString();

x = d.getTime();

x = d.getFullYear();

x = d.getMonth();

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() +1 }-${d.getDate()}`;

x = Intl.DateTimeFormat('en-us').format(d)

x - Intl.DateTimeFormat('default', {month: "long"}).format(d)

x = d.toLocaleString("default", {month: 'short'});


console.log(x);