// When input is to many values but output is one value then we can use Reduce
const arr = [1,2,3,4];

const output = arr.reduce(

    (previous,current) =>
    {
        return (previous+current);
        
        // max
        // return previous > current ? previous : current; 
    }

);

console.log(output); //10