// ARROW FUCNTIONS DO NOT REBIND THE THIS KEYWORD

// ------------------------------------------------------------

// THIS WOULD OUTPUT THE WINDOW OBJECT OF SETTIMEOUT BECAUSE IT IS A REGULAR FUNCTION

const person = {
    talk() {
        setTimeout(function () {
            console.log("this", this);
        }, 1000);
    }
}
person.talk();

// ------------------------------------------------------------

// THIS WOULD OUTPUT THE PERSON OBJECT BECAUSE IT IS AN ARROW FUNCTION

const person2 = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
}
person2.talk();

// ------------------------------------------------------------