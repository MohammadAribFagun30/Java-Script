
let str1 = "Fagun";

let str2 = "Arib";


console.log( str1[2] );

console.log( str2[2] );



//Template Literals

let specialString = `This is a template literal`;
console.log(specialString);



let object={
    item : "pen",
    price : 10,
};

console.log("The cost of ", object.item , "is", object.price);


// This is called --> "String Interpolation"

let output = `The cost of ${object.item} is ${object.price} Tk`
console.log(output);


let sum = `Sum of 1 2 3 is = ${1+2+3}`;
console.log(sum);



// Interesting aritmethic operation in string

const result = '10' + 5;

console.log(result); // 105
console.log(typeof result); // string



const subtractionResult1 = '10' - 5;
console.log(subtractionResult1); // 5
console.log(typeof subtractionResult1); // number

const multiplicationResult1 = '10' * 2;
console.log(multiplicationResult1); // 20
console.log(typeof multiplicationResult1); // number

const divisionResult1 = '20' / 2;
console.log(divisionResult1); // 10
console.log(typeof divisionResult1); // number


const subtractionResult2 = 'abc' - 5;
console.log(subtractionResult2); // NaN
console.log(typeof subtractionResult2); // number

const multiplicationResult2 = 'abc' * 2;
console.log(multiplicationResult2); // NaN
console.log(typeof multiplicationResult2); // number

const divisionResult2 = 'abc' / 2;
console.log(divisionResult2); // NaN
console.log(typeof divisionResult2); // number



const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string


const result4 = null + 5;
console.log(result4); // 5
console.log(typeof result4); // number

const result5 = undefined + 5;
console.log(result5); // NaN
console.log(typeof result5); // number