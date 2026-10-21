let food = [ "patato", "apple", "mango"];

food.push("banan","coconut");

console.log(food);

let deleted = food.pop();

console.log(`Deleted Food Item : ${deleted}`);


// concat()

let marvel = ["Spider", "Ironman","Hulk","Dr.Strange"];
let dc = ["Superman", "Batman"];

let heroes = marvel.concat(dc);

console.log(heroes);


// unshift --> insert at 1st
marvel.unshift("Antman");

console.log(marvel);

// shift --> delete from 1st

let val = marvel.shift();

console.log(val);


// slice()
console.log( marvel.slice(1,3)  ) // 1 theke 3 er age-->(1,2)

// splice()  -->  add , remove , replace

let arr = [ 1,2,3,4,6,5,7 ];

arr.splice(2,2,101,102); // 2 no theke 2ta element delete oi jaigai 101 102
console.log(arr);


// just add value
arr.splice(2, 0, 101, 102);

console.log(arr);




// reverse()
arr.reverse();
console.log(arr);


// sort()

let s = [3,5,6,1,4]
s.sort();
console.log(s);


// Math Object

// 1 Math.abs()
// 2 Math.pow()
// 3 Math.floor()
// 4 Math.ceil()
