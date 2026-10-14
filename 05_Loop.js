for(let i=1; i<5; i++)
{
    console.log("Niggha..!")
}

let sum = 0;

for(let i=1; i<=5; i++)
{
     sum +=i;
}

console.log("Sum = ", sum);


//WHILE Lopp

let x = 1;
while( x <=5)
{
    console.log("Niggha..!");
    x++;
}


// DO-WHLE Loop

do{
    console.log("Fagun..!");
    x++;

}while(x<=3)



// FOR-OF Loop

let str = "Fagun";

for(let i of str)
{
    console.log(i);
}


//FOR-IN Loop  --> Use for "Object"


let student={
    name : "Fagun",
    age :25,
    cpa : 3.958,
    ispass: true,
};

for(let key in student)
{
    console.log("key = ", key , "Value = ",student[key]);
}

