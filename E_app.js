let btn  = document.querySelector("button");
let ul  = document.querySelector("ul");
let inp = document.querySelector("input");

// add task
btn.addEventListener("click",function()
{
    let item = document.createElement("li")
    item.innerText = inp.value;

    ul.appendChild(item);

    


    // to appear delete option
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");

    item.appendChild(dltbtn);


    inp.value="";
}
)


// delete task --> age theke j task add korse raksi oitar upr kaj krbe
let dltbtns = document.querySelectorAll(".delete");

for(dltbtn of dltbtns)
{
    dltbtn.addEventListener("click",function()
    {
        let par = dltbtn.parentElement;
        par.remove();

    }

    )
}

// jekono task delete korte
ul.addEventListener("click", function(event)
{
    if(event.target.nodeName == "BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
}


)
