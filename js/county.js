const countyName = "Middlesex County"; // your county's name
const state = "Massachusetts"; // your state
let population = 1632002; // current population
let countySeat = "Lowell and Cambridge"; // county seat


function classifyCounty(pop) {
    if(pop > 500000)
        return "large";
    if(pop > 100000)
        return "medium";
    else
        return "small";
 // your code here
}


console.log("County:", countyName);
console.log("State:", state);
console.log("Population:", population);
console.log("County Seat:", countySeat);

population = 1632005;
console.log("Updated population: " + population);

const county = {
    name:   "Middlesex County", // county name
    state:  "Massachusetts", // state
    population: 1632002, // current population
    seat:   "Lowell and Cambridge", // county seat
    founded: 1643, // year founded
    areaSqMi: 847.0, // area in square miles
    myTown: "Arlington, MA", // your hometown
    largestMunicipality: {
        name: "Cambridge", // fill in
        population: 120000 // fill in
    }
};


let userChoice = prompt( //setting up a string
 "What would you like to know about " + county.name + "?\n"
 + "1. Population\n"
 + "2. County Seat\n"
 + "3. Year Founded"
);

if(userChoice==="1")
    alert(county.population);
else if(userChoice==="2")
    alert(county.seat);
else if(userChoice==="3")
    alert(county.founded);
else
    alert("WRONG CHOICE")


console.log(county)
console.log("my county is: " + county.name);
console.log("My county is in: " + county.state);

console.log("The population of the largest municipality is " + county.largestMunicipality.population)

console.log(classifyCounty(county.population));
console.log(classifyCounty(50000)); // should return 'small'
console.log(classifyCounty(250000)); // returns medium


for (let i = 1; i <= 5; i++) {
 let message = "County #" + i;
 var lastCount = i;
 console.log(message);
}
console.log(lastCount); // var can be accessed anywhere, let cannot


console.log("county.js is connected")


// Primitive (number) — copied by value
let originalPop = county.population;
let copiedPop = originalPop;
copiedPop = 999999;
console.log("Original:", originalPop);
console.log("Copy:", copiedPop);

let countyRef = county; // points at the SAME object
countyRef.population = 1; // change through the reference
console.log("Original pop:", county.population);
console.log("Ref pop:", countyRef.population);