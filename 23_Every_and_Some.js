let arr = [ 2,3,4,5,6];

let result  = arr.every(

    (val) =>
    {
        return val % 2 == 0;
    }

);
// array er each element even hole return "True";
// 1ta element o odd hole return "False";
console.log(result );




let arr2 = [ 2,3,4,5,6];

let result2  = arr.some(

    (val) =>
    {
        return val % 2 == 0;
    }

);

// 1ta element o even holei return "True";
console.log(result2 );