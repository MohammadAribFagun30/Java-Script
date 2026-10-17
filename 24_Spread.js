
//Spread  Return individual vale

let arr = [-1,-2,3,4,5,1,0];

let result = Math.min(...arr);

console.log(result);

console.log(...arr); // -1,-2,3,4,5,1,0


// Copy with Spread

let arr2 = [...arr];

console.log(...arr2); // -1,-2,3,4,5,1,0


// Merge 

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let arr3 = [...odd, ...even];

console.log(...arr3);


// Object literals

let data = 
{
    name : "Fagun",
    age : 23
};


let dataCopy = {...data, id:30  };

console.log(dataCopy);



// Array into Object
let arr4 = [1,2,3,4];

let serial = { ...arr4 };

console.log(serial);