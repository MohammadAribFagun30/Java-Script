

let str = "Mohammad Arib   ";

// 1 
st = str.toUpperCase();

console.log(st);

// 2
st2 = str.toLowerCase();

console.log(st2);

// 3
st3 = str.trim(); // remove the before and after white space

console.log(st3);

// 4           start   end+1
st4 = str.slice( 0  ,   4);

console.log(st4);

console.log( str.slice(-2) ) // backward theke 2ta character ashbe

console.log(str.slice(-6, -3));

// 5 
let text = "I love Java";

let result = text.replace("Java", "JavaScript");

console.log(result);

// 6 
let text1 = "Mohammad";
let text2 = " Arib"

let res = text1.concat(text2);

console.log(res);

// 7

console.log( text1.repeat(3) );
