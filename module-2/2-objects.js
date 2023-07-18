// CREATING A PERSON OBJECT
const person = {
    name: 'John',
    walk() {
        console.log("Walking...");
    },
    talk() {
        console.log("Talking...");
    }
};


// CALLING THE TALK METHOD -> THIS WOULD OUTPUT "TALKING..."
person.talk();