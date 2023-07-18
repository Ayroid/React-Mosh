// CREATING A PERSON OBJECT
const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    },
    talk() {
        console.log("Talking...");
    }
};

// CALLING THE WALK METHOD -> THIS WOULD OUTPUT THE PERSON OBJECT
person.walk();
let walk = person.walk;

// CALLING THE WALK METHOD -> THIS WOULD OUTPUT UNDEFINED (STRICT MODE) OR THE WINDOW OBJECT (NON-STRICT MODE)
walk();

// BINDING THE WALK METHOD TO THE PERSON OBJECT -> THIS WOULD OUTPUT THE PERSON OBJECT
// WALK2 IS A NEW FUNCTION THAT IS BOUND TO THE PERSON OBJECT
let walk2 = person.walk.bind(person);

// CALLING THE WALK2 METHOD -> THIS WOULD OUTPUT THE PERSON OBJECT
walk2();