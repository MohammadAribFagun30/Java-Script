function PersonMaker(name,age)
{
    const person = {
        name : name,
        age : age,
        talk()
        {
            console.log(`Hi, my name is ${this.name}`);
        }
    }
    return person; 
}

let p1 = PersonMaker("Arib" , 24);

console.log(p1.name);
console.log(p1.age);
p1.talk();