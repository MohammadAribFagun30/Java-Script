//we can give "value" , "Index" , array itself;

// Take value from an array and make a new array with the value

let arr = [1, 2, 3, 4]

  arr.map(

    (val) => {
        console.log(val);

    }

)


// with variable "result"
 let result =   arr.map(

    (val) => {
        return val;
    }

)

console.log(result); // [ 1, 2, 3, 4 ]


// Array of Object

const classInfo = 
[
     
    {
        name : "Alif",
        grade : "A+",
        id : 69
    },

     
    {
        name : "Fagun",
        grade : "B+",
        id : 30
    },

     
    {
        name : "Towhid",
        grade : "A+",
        id : 51
    }

];

let getId = classInfo.map(
    ( ele )=>
    {
        return ele.id;
    }
)

console.log( getId ); // [ 69, 30, 51 ]