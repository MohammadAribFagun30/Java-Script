
// Take value from array , do something and return a new array after filter


let arr = [1,2,3,4,5 ];


let evenArr = arr.filter(

    (val)=>
    {
       return val % 2 === 0; 
    }
);

console.log(evenArr);