// take string and return vowels in them

function countVowels(str)
{
         let count = 0;

    for(const char of str)
    {
   
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        {
            count++;
        }
    }
    return count;
}

let c = countVowels("Fagun");

 console.log( c );


 // with arrow function

 const countVowel  = (str) =>
{
         let count = 0;

    for(const char of str)
    {
   
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        {
            count++;
        }
    }
    return count;
}

let c2 = countVowels("Fagun");

 console.log( c2 );