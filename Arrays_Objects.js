/*ARRAYS, OBJECTS, FUNCTIONS and LOOPS*/

// function objectType() {
let abhinav_info = {
  name: "Abhinav Maurya",
  coarse: "BCA",
  year: "1st Year",
  college: "AIMT",
  profession: ["Web Dev", "Java", "C"],
  age: 18,
  Channel: "Mr Abhinav",
  "Channel 2": "Web Gigs",
};
//   console.log(abhinav_info);
//   console.log(abhinav_info.name + " " + abhinav_info.age);
//   console.log(abhinav_info["coarse"]);
//   console.log(abhinav_info["Channel 2"]);
// }
// objectType();

/* 
    Arrays and Function   @In JavaScript Array can store any types of value
*/
function arraysType() {
  let arr = [1, 3, "akash", 2.4, "abhinav"];
  let arr1 = new Array(5, 9, "Abhi", 2.4, "abhinav");
  console.log(arr);
  console.log(arr1[4]);
  // .length
  console.log(arr.length);

  // In Ascending Order
  console.log(arr.sort());

  // Add in last of Array
  arr.push("Pushed");
  console.log(arr);
}
// arraysType();

function interaction() {
  // Alert in browser JavaScript
  alert("This is abhinav");

  //Promt in JS
  let names = prompt("Whats your name");
  console.log(names);

  //Confirmation in JS
  let deletPost = confirm("Do you realy want to Delete Post");
  if (deletPost) {
    console.log("your post is deleted successfully");
  } else {
    console.log("YOur post is not deleted");
  }
}
// interaction();

/*      Exercise      */
function exercise() {
  let age = prompt("Enter Your age");

  if (age > 18) {
    console.log("You can join th Club");
  } else {
    console.log("You can't join the club!!!");
  }
}
// exercise();

/*  Ternary oprator  */
function ternary_Opt(a) {
  b = a > 0 ? "Big" : "Small";
  c = a > 0 ? "Big" : a < 0 ? "Negative" : "Zero";
  return c;
}
console.log(ternary_Opt(0));

/*  foreach modern Loop  */
let frnds = ["Anish", "Aditya", "Abhishek"];
frnds.forEach(function f(elements) {
  console.log("Hello " + elements + " in Modern JavaScript");
});

/* forof loop (Array) */
for (i of frnds) {
  console.log("Hello " + i + " in Modern JavaScript Again");
}

/* forin loop (Objects) */
for (key in abhinav_info) {
  console.log(`The ${key} of Abhinav is ${abhinav_info[key]}`);
}

/*         Arrow Function           */

// function nFunction(){
//     console.log("Normal Function");
// }
// nFunction();

let nFunction = () => {
  console.log("Normal Function");
};
nFunction();

let sum = (a, b) => {
  return a + b;
};

let sum1 = (a, b) => a + b;
let sum2 = (a) => a / 2;
console.log(sum(22, 33) + " " + sum1(55, 44) + " " + sum2(9));

setTimeout(() => {
  console.log("Inside time out");
}, 1000);

let obj1 = {
  greeting: "Good Morining",
  Names: ["Abhinav", "Mahima", "Seema", "Dhananjay"],

  speak() {
    this.Names.forEach((members) => {
      console.log(this.greeting + " " + members);
    });
  },
};
obj1.speak();
