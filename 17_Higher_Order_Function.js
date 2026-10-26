// Higher Order Function --> A function taking another function as argument;

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}

let greet = function () { console.log("HI,I am Fagun"); }

multipleGreet(greet, 3);

//multipleGreet( function() { console.log("HI,I am Fagun"); },3);



//Factory Function return new  function based on request

function factoryFunction(request) {

    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }


    else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    }

}

let odd = factoryFunction("odd");

odd(3);

let even = factoryFunction("even");

even(10);




//FOR-EACH is "HIgher Order Function"

// In FOR_EACH function we can give "value" , "Index", array itself;

let arr = [1, 2, 3, 4, 5];

arr.forEach(

    function printValue(val, indx) {
        console.log(val, indx);
    }

);



// FOR-EACH with arrow function

let name = ["Alif", "Fagun", "Towhid"]

name.forEach(

    (val, indx) => {
        console.log(val, indx);
    }
);


// Array of Object
const classInfo =
    [

        {
            name: "Alif",
            grade: "A+",
            id: 69
        },


        {
            name: "Fagun",
            grade: "B+",
            id: 30
        },


        {
            name: "Towhid",
            grade: "A+",
            id: 51
        }

    ];

classInfo.forEach(   (student) => {

    console.log(student);

    }
);