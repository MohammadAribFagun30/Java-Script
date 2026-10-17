const student =
{
    name: "Fagun",
    age: 25,
    eng: 83,
    math: 89,
    phy: 90,
    marks: 200,

    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);

        console.log(`${this.name} got average marks = ${avg}`);
    },

    getName : function ()
    {
        return this.name;
    },

    
    getMarks: () => {
        return this.marks;
    }


    // marks dekhte nicher function ta use korte hbe
    /*
    getMarks() {
            return this.marks;
        }
    */

};

console.log(student.getName())

student.getAvg();

console.log(student.getMarks()); //undefined

