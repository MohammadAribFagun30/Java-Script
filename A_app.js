//--> This is for signle button

let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function (){

    console.log("button was clicked");
   alert("button was clicked");
}


function sayHello()
{
    alert("Hello, Fagun");
}

btn.onclick = sayHello;



//--> This is for multiple buttons

let btns = document.querySelectorAll("button");
console.dir(btns);

function sayHello()
{
    alert("Hello, Fagun");
}


for(buttn of btns)
{
    buttn.onclick =sayHello;
}

for(let butn of btns)
{
    butn.onmouseenter = function()
    {
        console.log("entered the button");
    };
    console.dir(butn);
}




function sayHello()
{
    alert("Hello, Fagun");
}

function greet()
{
    alert("How are u?");
}


for(buttn of btns)
{
    buttn.addEventListener("click",sayHello );
    buttn.addEventListener("click",greet );
}