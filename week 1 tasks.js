/*
var myObj = {
  name: "GLA",
  location: "mathura",
  displayName: showName
};

function showName() {
  console.log(myObj["name"]);
}
myObj.displayName();
*/


/*
// QUESTION 1: Temperature convertor
var celsius = 27;
var farhenheit = (celsius * 9 / 5) + 32;
console.log(farhenheit);

// Question 2: Simple profile generator
let firstName = "Vedansh";
let favoriteNumber = 69;
let isStudent = true;
let sentence = `My name is ${firstName}, my favorite number is ${favoriteNumber}, and I am a student: ${isStudent}.`;
console.log(sentence);

//Question 3: Traffic light simulator
const lights = ["red", "yellow", "green"];

for (let color of lights) {
    switch (color) {
        case "red":
            console.log("STOP");
            break;

        case "yellow":
            console.log("SLOW DOWN");
            break;

        case "green":
            console.log("GO");
            break;

        default:
            console.log("Invalid light");
    }
}

// Question 4:Fizzbuzz
const nums = [33,15,25,75,21,66,24,20,4,7];

for (let num of nums) {
  if (num % 15 == 0) {
    console.log("fizzbuzz");
  }

  else if (num % 5 == 0) {
    console.log("buzz");
  }

  else if (num % 15 == 0) {
    console.log("fizz");
  }
  else {
    console.log("no match");
  }
}

//Question 5: Multiples of 5
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//Question 6: Factorial calculator
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial = factorial * i;}
console.log(factorial);



//Question 7: Area of rectangle

let l = 30;
let b = 20;
function area(length, breadth) {
  return (length * breadth);
}
console.log(area(l, b));
*/

//Question 8: palindrome checker
let val= "tot"
const ans = (val) => val === val.split("").reverse().join("");
console.log(ans(val));
