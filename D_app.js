// Event Bubbling

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");


// div e click krle just div ashbe
div.addEventListener("click", function () {
    console.log("Div was clicked");
}
)


//ul e click krle -->  div and ul  ashbe
 
ul.addEventListener("click", function () {
    console.log("Ul was clicked");
}
)


// ekne  ul k click kore shudu ul ante

ul.addEventListener("click", function (event) {

    event.stopImmediatePropagation();
    console.log("Ul was clicked");
}
)




// li e click krle --> div and ul and li  ashbe
for (list of lis) {

    list.addEventListener("click", function () {
        console.log("List was clicked");
    }
    );

}