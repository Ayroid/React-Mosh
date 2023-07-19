import { Person } from './person';
export class Teacher extends Person {

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