let btn = document.querySelector("button");

let pa = document.querySelector(".bl");

let p = document.querySelector(".bl2");

p.addEventListener("click", function () {

    console.log("paragrap was clicked")
}
);

function getRandomColor() {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb( ${red}, ${green}, ${blue} )`

    return color;
}



btn.addEventListener("click", function () {
   
    let randomColor = getRandomColor();


    let h3 = document.querySelector("h3");

    h3.innerText = randomColor;


    let div = document.querySelector("div");

    this.style.backgroundColor = randomColor;


    
    p.style.color = randomColor;
    p.style.fontWeight = "bold";
    div.style.boxShadow = "5px 5px 10px gray";
    p.style.boxShadow = "5px 5px 8px gray";
    pa.style.filter = "blur(0px)";
    pa.style.boxShadow = "5px 5px 8px gray";
    pa.style.color = randomColor;

    console.log("Color updated");
}

)


// Mouse Event
let box = document.querySelector("#emp");

box.addEventListener("mouseenter", function () {

    console.log("mouse inside the box");
}
);


// this

btn.addEventListener("click", function () {

    console.log(this);
    console.log(this.style.backgroundColor = "red");
    console.log(this.style.boxShadow = "5px 5px 10px gray")
}
);


//redundency reduce

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "purple"
}

h1.addEventListener("click", changeColor)
h2.addEventListener("click", changeColor)


// Keyboard Event
let input = document.querySelector("input");

input.addEventListener("keydown" , function(event)
{
    console.log(event);
    console.log("Kay was entered")
}

);


input.addEventListener("keyup" , function()
{
    console.log("Kay was released")
}

)

input.addEventListener("keydown" , function(event)
{
    console.log("code = ",event.code);
    if(event.code == "ArrowUp")
    {
        console.log("Character moves forward");
    }
    else  if(event.code == "ArrowDown")
    {
        console.log("Character movesbackward");
    }

    else  if(event.code == "ArrowRight")
    {
        console.log("Character moves right");
    }
    else  if(event.code == "ArrowLeft")
    {
        console.log("Character moves left");
    }

}

)


// Form event

let form = document.querySelector("form");

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    console.log("Form submited");
}
);

// track value in form 
 let inp = document.querySelector("#username");


form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    console.log(inp.value);
}
);



form.addEventListener("submit", function (event) {
    event.preventDefault();
});


user.addEventListener("change", function () {
    console.log("input changed");
    console.log("final value =", this.value);
});



// write something in input , appear as text

let inpt = document.querySelector("#t");
let add = document.querySelector("#ad");


inpt.addEventListener("input", function () {
    add.innerText = inpt.value;
}
);
