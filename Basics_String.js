/*
 Variable Type
   var - use for Global Declaration
   let - use for any perticular scope or function Declaration
   const - This cant be change 
*/

var str = "This is me ABhinav Maurya";
console.log(str);

//First Occurane of Substring
var position = str.indexOf("is");
console.log(position);

// Last Occurance of Substring
position = str.lastIndexOf("is");
console.log(position);

//Substring from a string
position = str.slice(11, 15);
console.log(position);
position = str.substring(11, 15);
console.log(position);

//Replace String
var replace = str.replace("ABhinav", "Abhinav_x3.0");
console.log(str);
console.log(replace);

//UPPERCASE &  lower case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Add New String
var newStr = str.concat(" aka Abhinav");
console.log(newStr);

console.log(str + " aka Akash");

//Trim White Spaces
let strWithWhiteSpaces = "      Hiii    i   am    Developer         ";
console.log(strWithWhiteSpaces);
console.log(strWithWhiteSpaces.trim());

// Slicing
console.log(str[0]);

/*
Conditional Functions are same as Java - [If-else, Switch Case]

*/
