//no1

let firstName = "zainab";
console.log(typeof firstName);

let lastName = "lawal";
console.log(typeof lastName);

let age = 10;
console.log(typeof age);

let isMarried = true;
console.log(typeof isMarried);

let country;
console.log(typeof country);

let city = null;
console.log(typeof city);

let year;
console.log(typeof year);

//no2
let string = "10";
let num = 10;
console.log(parseInt(string) === num);

//no3
let numb = parseFloat("9.8");
console.log(Math.round(numb));

//no4
let x = true;
console.log(x);

let y = 4 > 3;
console.log(y);

let a = 4 > 1;
console.log(a);

let z;
console.log(z);

let l = null;
console.log(l);

y = false;
console.log(y);

/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.*/

//no5
x = 4 > 3;
console.log(x);

x = 4 >= 3;
console.log(x);

x = 4 < 3;
console.log(x);

x = 4 <= 3;
console.log(x);

x = 4 == 4;
console.log(x);

x = 4 === 4;
console.log(x);

x = 4 != 4;
console.log(x);

x = 4 !== 4;
console.log(x);

x = 4 != "4";
console.log(x);

x = 4 == "4";
console.log(x);

x = 4 === "4";
console.log(x);

let jr = "jargon";
let py = "python";
console.log(jr.length);
console.log(py.length);
console.log("jargon".length != "python".length); //>

//no6
/*4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4') */

y = 4 > 3 && 10 < 12;
console.log(y);

y = 4 > 3 && 10 > 12;
console.log(y);

y = 4 > 3 || 10 < 12;
console.log(y);

y = 4 > 3 || 10 > 12;
console.log(y);

y = !(4 > 3);
console.log(y);

y = !(4 < 3);
console.log(y);

y = !false;
console.log(y);

y = !(4 > 3 && 10 < 12);
console.log(y);

y = !(4 > 3 && 10 > 12);
console.log(y);

y = !(4 === "4");
console.log(y);

y = "python" && "dragon";
console.log("python".includes("on") && !"dragon".includes("on"));

//n07
/*
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */

let now = new Date();
console.log(now.getFullYear());

now = new Date();
console.log(now.getMonth());

now = new Date();
console.log(now.getDate());

now = new Date();
console.log(now.getDay());

now = new Date();
console.log(now.getHours());

now = new Date();
console.log(now.getMinutes());

now = new Date();
console.log(now.getTime());
