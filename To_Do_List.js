let todo = [];

let request = prompt("Enter your request");

while(true)
{
    if(request == "quite")
    {
        console.log("Quiting todo app");
        break;
    }

    if(request == "List")
    {
        console.log("------------");

        for( let i =1; i<=todo.length; i++)
        {
            console.log(i,todo[i]);
        }
        console.log("------------");
    }

    else if(request == "add" )
    {
       let task =  prompt("Please enter the task you want to add");
       todo.push(task);
       console.log("Task added !");
    }

    else if(request == "delete")
    {
       let ind = prompt("Enter the index of task to delete :");
       todo.splice(ind,1);
       console.log("Task deleted");
    }

    else{
        console.log("Wrong Request!!");
    }

    request = prompt("Enter your request");

}