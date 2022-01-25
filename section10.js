"use strict";

//128
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123", 2, 800);

//129
// const flight = "LH234";
// const omar = {
//   name: "Omar Razi",
//   passport: 10251987,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passport === 10251987) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random * 1000000000);
// };
// newPassport(omar);
// checkIn(flight, omar);

//130
// First-Class Functions
//Javascript treats functions as first class citizens
//functions are simply values
//functions are another "type" of object

// store functions in variables or properties
// Variable const add = (a,b) => a + b;

//Store as properties
// const counter = {
//   value: 23,
//   inc: function(){this.value++;}
// }

//Pass functions as arguments to Other Functions

// const greet = () => console.log("Hey Jonas");
// btnClose.addEventListener("click", greet);

// return functions from functions

//call methods on functions
//counter.inc.bind(someOtherObject);

//Higher-order function
// A function that recieves another function
// const greet = () => console.log("Hey Jonas");
// btnClose.addEventListener("click", greet);

//Function that returns a new function
//function count(){
//   let counter = 0;
//   return function(){
//     counter++;
//   }
// }

//131
const oneWord = function (str) {
  return str.replace;
};
