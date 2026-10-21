//Object -> student 

const student = {

    name : "Arib",
    age  : 25,
    cgps : 3.958,
    isPass : true,
    1 : "bankai" // Here 1 is string type;
};

console.log( student["name"] );

let n = "name";
console.log( student[n] );

console.log( student.name );

console.log( student[1] );

// but can`t do
// console.log( student.1 );




// Update keys
student["age"]  = student["age"] + 1;
console.log( student.age );

// Add new key 
student.gender  = "Male";
console.log( student );

// delete key
delete student.isPass;
console.log( student );


// Nested Object

const classinfo = 
{
    Alif : 
    {
        grade : "A+",
        id : 69
    },

    Fagun : 
    {
        grade : "B+",
        id : 30
    },

    Towhid : 
    {
        grade : "A+",
        id : 51
    }

}

console.log( classinfo.Alif.id );

console.log(classinfo.Towhid);



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

console.log( classInfo[1] );

console.log( classInfo[0].name );

// Create a key here
classInfo[1].gender = "Male";
console.log( classInfo[1] );