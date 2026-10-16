// Arrays is an object 

let marks = [97, 85, 92, 91, 65, 75];
console.log(marks);

console.log(marks.length); // 6


console.log(marks[4]); // 65

marks[4] = 81;

console.log(marks[4]); // 81



// Array of String
let name = ["Alif", "Fagun", "Labib", "Samin"];
console.log(name);

// Normal Loop
for(let i = 0; i<marks.length; i++)
{
    console.log(marks[i]);
}

// FOR-OF loop in Array
for(let x of marks)
{
    console.log(x);
}


// constant array --> Here we can push,pop element

const arr = [2,3,4,5,6,7]



// Nested Array

//             0      1      2
//            0 1    0 1    0 1
let nums = [ [1,2], [3,4], [5,6]  ]

console.log(nums);

console.log( nums[0][0] ) // 1
console.log( nums[1][1] ) // 4