function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);

p1.talk();
p2.talk();




// Constructors - doesn't return anything & starts with capital letter

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p3 = new Person("adam", 25);
let p4 = new Person("eve", 25);