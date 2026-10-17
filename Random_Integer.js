
// Generate a random ineteger by using Math.random()


let num = Math.random();

num = num *10; // jei range e chai oita multiply korbo(1-10)

num = Math.floor(num);

num = num +1; //  eta na dile 10 ashbe na

console.log(num);

// All above this in one line
let randomNumber = Math.floor( Math.random() * 10 ) + 1;
console.log(randomNumber);

// (1-5)
let randomNumber1 = Math.floor( Math.random() * 5 ) + 1;
console.log(randomNumber1);

// (21-25)
let randomNumber2 = Math.floor( Math.random() * 5 ) + 21;
console.log(randomNumber2);
