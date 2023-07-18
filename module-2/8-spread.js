// CREATING TWO ARRAYS
const first = [1, 2, 3];
const second = [4, 5, 6];

// ------------------------------------------------------------

// CONCATENATING THE TWO ARRAYS
const combined = first.concat(second);
console.log(combined);

// ------------------------------------------------------------

// SPREADING THE TWO ARRAYS
const combined2 = [...first, ...second];
console.log(combined2);

// ------------------------------------------------------------

// SPREADING ALLOWS US TO ADD MORE ELEMENTS TO THE ARRAY
const combined3 = [...first, 'a', ...second, 'b'];
console.log(combined3);

// ------------------------------------------------------------

// CLONING AN ARRAY
const clone = [...first];
console.log(clone);

// ------------------------------------------------------------

/*
    SPREADING CAN BE USED WITH OBJECTS TOO
*/

// CREATING TWO OBJECTS

const firstObject = { name: 'John' };
const secondObject = { job: 'Developer' };

// ------------------------------------------------------------

// SPREADING THE TWO OBJECTS
const combinedObject = { ...firstObject, ...secondObject };
console.log(combinedObject);

// ------------------------------------------------------------