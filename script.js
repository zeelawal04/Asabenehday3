//no1

let firstName = "zainab";
console.log(typeof firstName); //string

let lastName = "lawal";
console.log(typeof lastName); //string

let age = 10;
console.log(typeof age); //number

let isMarried = true;
console.log(typeof isMarried); //boolean

let country;
console.log(typeof country); //undefined

let city = null;
console.log(typeof city); //object

let year;
console.log(typeof year); //undefined

//no2 Check if type of '10' is equal to 10
let string = "10";
let num = 10;
console.log(parseInt(string) === num);

//no3 Check if parseInt('9.8') is equal to 10
let numb = parseFloat("9.8");
console.log(Math.round(numb));

/*no4
Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/

let x = true;
console.log(x); //true

let y = 4 > 3;
console.log(y); //true

let a = 4 > 1;
console.log(a); //true

let z;
console.log(z); //undefined

let l = null;
console.log(l); //null

y = false;
console.log(y); //falsy

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
console.log(x); //true

x = 4 >= 3;
console.log(x); //true

x = 4 < 3;
console.log(x); //false

x = 4 <= 3;
console.log(x); //false

x = 4 == 4;
console.log(x); //true

x = 4 === 4;
console.log(x); //true

x = 4 != 4;
console.log(x); //false

x = 4 !== 4;
console.log(x); //false

x = 4 != "4";
console.log(x); //false

x = 4 == "4";
console.log(x); //true

x = 4 === "4";
console.log(x); //false

let jr = "jargon";
let py = "python";
console.log(jr.length); //6
console.log(py.length); //6
console.log("jargon".length != "python".length); //false

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
console.log(y); //true

y = 4 > 3 && 10 > 12;
console.log(y); //false

y = 4 > 3 || 10 < 12;
console.log(y); //true

y = 4 > 3 || 10 > 12;
console.log(y); //true

y = !(4 > 3);
console.log(y); //false

y = !(4 < 3);
console.log(y); //true

y = !false;
console.log(y); //true

y = !(4 > 3 && 10 < 12); //false
console.log(y);

y = !(4 > 3 && 10 > 12);
console.log(y); //true

y = !(4 === "4");
console.log(y); //true

y = "python" && "dragon";
console.log("python".includes("on") && !"dragon".includes("on")); //false

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
console.log(now.getFullYear()); //2022

now = new Date();
console.log(now.getMonth()); //7

now = new Date();
console.log(now.getDate()); //12

now = new Date();
console.log(now.getDay()); //5

now = new Date();
console.log(now.getHours()); //5

now = new Date();
console.log(now.getMinutes()); //10

now = new Date();
console.log(now.getTime()); //1660295483084
