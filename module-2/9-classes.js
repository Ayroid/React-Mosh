// CREATING A CLASS - PASCAL NOTATION
class Person {

    // CREATING A CONSTRUCTOR
    constructor(name) {
        this.name = name;
    }

    // CREATING A METHOD
    walk() {
        console.log(`${this.name} is walking!`);
    }
}

// ------------------------------------------------------------

// CREATING AN INSTANCE OF THE CLASS
const person = new Person('John');
console.log(person.name);
person.walk();

// ------------------------------------------------------------

/*
    INHERITANCE
*/

// CREATING A CLASS - PASCAL NOTATION

class Teacher extends Person {

    // CREATING A CONSTRUCTOR
    constructor(name, degree) {
        // CALLING THE CONSTRUCTOR OF THE PARENT CLASS
        super(name);
        this.degree = degree;
    }

    // CREATING A METHOD
    teach() {
        console.log(`${this.name} is teaching!`);
    }
}

// ------------------------------------------------------------

// CREATING AN INSTANCE OF THE CLASS
const teacher = new Teacher('John', 'MSc');

// CALLING THE PROPERTIES FROM THE PARENT CLASS
console.log(teacher.name);
console.log(teacher.degree);

// CALLING THE METHOD FROM THE PARENT CLASS
teacher.walk();

// CALLING THE METHOD FROM THE CHILD CLASS
teacher.teach();