/*
    FUCNTION THAT RETURNS THE SQUARE OF A NUMBER
*/

// ------------------------------------------------------------

// NORMAL JS FUNCTION
const square = function (number) {
    return number * number;
};
console.log(square(5));

// ------------------------------------------------------------

// ARROW FUNCTION
const square2 = number => number * number;
console.log(square2(5));

// ------------------------------------------------------------

/*
    FUNCTION THAT FILTERS THE ACTIVE JOBS FROM THE JOBS ARRAY AND RETURNS THEM
*/

// ------------------------------------------------------------

// CREATING A JOBS ARRAY
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
];

// NORMAL JS FUNCTION
const activeJobs = jobs.filter(function (job) { return job.isActive; });
console.log(activeJobs);

// OUTPUT: [ { id: 1, isActive: true }, { id: 2, isActive: true } ]

// ------------------------------------------------------------

// ARROW FUNCTION
const activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs2);

// OUTPUT: [ { id: 1, isActive: true }, { id: 2, isActive: true } ]

// ------------------------------------------------------------
