function myFunction()
{
    console.log("Hi, I am fagun.");
    console.log("I am learning Java Script.");
}


myFunction();


// with parameter

function name(msg)
{
    console.log(msg);
}

name("Fagun");


// Sum

function sum(x,y)
{
    s = x+y;

    return s;
}

let result = sum(3,4);
console.log(result);




// Arrow Function
 
const arrowSum = (a,b) =>
{
    console.log(a+b);
}

arrowSum(3,5);


// Inplicit return in Arrow function --> just ekta value return korle


const arrSum = (a, b) => (
    a + b
);

console.log( arrSum(3, 5) ); // 8



// setTimeout Function --> setTimeout(f unction, timeout(milisec) )

console.log("Hi, I am Fagun");


setTimeout(  () => {

       console.log("How are you ?");

               } ,     4000)


console.log("Your welcome here");


// setInterval  --> setInterval(f unction, timeout(milisec) )

console.log("Hi, I am Fagun");


let id  = setInterval(  () => {

       console.log("How are you ?");

               } ,     2000)


console.log("Your welcome here");

// To stop setInterval
// clearInterval(id)

