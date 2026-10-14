
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


