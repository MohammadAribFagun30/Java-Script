//we can give "value" , "Index" , array itself;

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

console.log(result);