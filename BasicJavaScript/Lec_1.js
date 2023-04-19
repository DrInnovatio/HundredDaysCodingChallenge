// Array

let name = "James";
let habbies = ['sports', 'reading', 'music'];

// made an object

let job = {
  title: 'DevOps',
  place: 'New York',
  salary: 80000
};

// alert(habbies);
// alert(habbies[1]);
// alert(job.salary);

// alert("The End");

let totalAdultYears;
let age = 41;
let userAge = 42;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

alert(totalAdultYears);