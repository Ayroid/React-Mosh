// ARRAY OF COLORS
const colors = ['red', 'green', 'blue'];

// ------------------------------------------------------------

/*
    FUNCTION THAT MAPS THE COLORS ARRAY AND RETURNS A LIST OF COLORS
*/

// NORMAL JS FUNCTION
const items = colors.map(function (color) {
    return '<li>' + color + '</li>'
});
console.log(items);

// ------------------------------------------------------------

// ARROW FUNCTION WITH TEMPLATE LITERAL
const items2 = colors.map(color => `<li>${color}</li>`);
console.log(items2);

// ------------------------------------------------------------