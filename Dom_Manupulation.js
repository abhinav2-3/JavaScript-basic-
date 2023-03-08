// let main = document.getElementById("menu");
// console.log(main);

// let containers = document.getElementsByClassName("container");
// console.log(containers);

// let sel = document.querySelector(".container");
// console.log("1st Selector is - ", sel);

// let selAll = document.querySelectorAll("#nav>li");
// console.log("1st Selector is - ", selAll);


/*           IMPORTANT EVENTS


- Click
- ContextMenu -> Right Click
- Mouseout/Mouseover
- Mousedown/Mouseup
- Mousemove
- Submit
- Focus
- DOM content loaded
- Transitionend
*/


let para = document.getElementById("para");
// para.addEventListener('mouseover', function run() {
//    alert("Mouse inside");
// });
para.addEventListener("mousedown", function run() {
  alert("Mouse Out");
});

function toggleHide() {
  let para = document.getElementById("para");
  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
}

/*  SetTimeOut and ClearTimeOut 
   SetTimeOUt -->   Allows to run the function once after the Interval of time.
   ClearTimeOut -->  Allows to run the function repeatedly after the Interval of time.
*/

function greet(name, byText) {
  console.log("Good Morning " + name + " " + byText);
}
// timeOut = setTimeout(greet, 2000, "Abhinav", 'Take Care');

// console.log(timeOut);  // ->Identity of setTimeOut

// clearTimeout(1); // Clearing the setTimeout function

// intervalID = setInterval(greet, 5000, "Akash", "Hustle");

// clearInterval(intervalID);

/*      Date & Time         */

date = new Date();
console.log(date);

let fdat = new Date("2023-12-28");
console.log(fdat);

//Construct Date -->  new Date(year, mnth, date, hr, min, sec)'
let cdat = new Date(2025, 11, 28, 10, 04, 33);
console.log(cdat);

//Getting dates from previous Date
let yr = cdat.getFullYear(); //  .getMonth() similarly all date, hr, min, sec, milsec
console.log("The year is ", yr);

//Updating Time
cdat.setMonth(9); //  .setYear() similarly all date, hr, min, sec, milsec
console.log(cdat);

function displayTime() {
  time = new Date();
  console.log(time);
  document.getElementById("time").innerHTML = time;
}
// setInterval(displayTime, 1000);


/*      Maths Objects       */
//      Printing the math object
let m = Math;
console.log(m);

//      Printing the constants from Math Object
console.log("The Value of Math.E is : ", Math.E);
console.log("The Value of Math.PI is : ", Math.PI);
console.log("The Value of Math.SQRT2_2 is : ", Math.SQRT1_2);
console.log("The Value of Math.LN1 is : ", Math.LN2);
console.log("The Value of Math.LOG2 is : ", Math.LOG10E);


//      Printing the Functions from Math Object
let a = 23.23;
let b = 32.76;
console.log("The value of a and b is ", a, b);
console.log("The rounded value of a and b is ", Math.round(a), Math.round(b));
console.log("The value of a power is ", Math.pow(5, 6));
console.log("The Square root of 21 is ", Math.sqrt(44));


//Ceil and floor
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8));
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8));


// Absolute Function
console.log("Absolute value of 56.3 is ", Math.abs(56.3));
console.log("Absolute value of -56.3 is ", Math.abs(-56.3));


//Trignometric functions
console.log("The value of sin(pi) is ", Math.sin(Math.PI));
console.log("The value of sin(pi/2) is ", Math.sin(Math.PI / 2));


// Min and Max functions
console.log("The Min value is ", Math.min(-56.3, 23, 11));
console.log("The max value is ", Math.max(-56.3, 23, 11));


//  Generating a random Number
let r = Math.random();
// Random number b/w (a,b) = a + (b-a)*Math.random()
let x = 1,
  y = 10;
let r1_10 = x + (y - x) * Math.random();
console.log("The random number is ", r);
console.log("The random number is ", r1_10);



/*        JSON -->  JavaScript Object Notation      */

let jsonObj = {
  name: "Abhinav",
  Course: "BCA",
  Year: 1,
  Branch: "Computer Science",
};
console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj); //Converting in String
console.log(myJsonStr);


myJsonStr = myJsonStr.replace("Abhinav", "Akash");
console.log(myJsonStr);


let newJsonObj = JSON.parse(myJsonStr); // Converting Valid JSON String into Object
console.log(newJsonObj);
