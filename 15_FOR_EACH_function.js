//FOR-EACH is "HIgher Order Function"

// In FOR_EACH function we can give "value" , "Index", array itself;

let arr = [1,2,3,4,5];

arr.forEach(

     function printValue(val,indx)
     {
        console.log(val,indx);
     }

);



// with arrow function

let name = [ "Alif" , "Fagun" , "Towhid"]

name.forEach(

    (val,indx) =>
    {
        console.log(val,indx);
    }



)

