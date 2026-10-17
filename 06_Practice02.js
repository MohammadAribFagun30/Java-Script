// Guess yhe number

let gameNumber  = Math.floor( Math.random() * 100 ) + 1;

let user = prompt("Guess the number :");

while(user != gameNumber)
{
    user = prompt("Wrong Number !...Try more : ")

}

console.log("Congratulation! You have guessed the correct number")