const myCounty = {
    name:   "Middlesex County",
    state:  "Massachusetts", 
    xmin: -71.898773,
    xmax: -71.020377,
    ymin: 42.156782,	
    ymax: 42.736554
}
console.log(myCounty.xmin, myCounty.xmax, myCounty.ymin, myCounty.ymax);

function checkCoords() {
 // Read input values from the form (provided)
let latInput = document.getElementById('lat-input').value;
let lonInput = document.getElementById('lon-input').value;
 // STEP A: Convert strings to numbers using parseFloat()
 // Your code here:
 latInput = parseFloat(latInput);
 lonInput = parseFloat(lonInput);


 // STEP B: Validate — check that both values are actual numbers
 // Hint: isNaN() returns true if the value is not a number
 // If either input is invalid, set a helpful message and return early
 // Your code here:
 let statement = "";
 if(isNaN(latInput) || isNaN(lonInput)){
    statement = "Please	enter	valid	numbers for latitude	and longitude. "
    document.getElementById('result').textContent = statement;
    return;
 } 

 // STEP C: Check the boundaries using your myCounty object
 // Write an if/else that checks whether both coordinates fall
 // inside all four edges of your county. Use the && operator.
 // Declare a variable called result and assign your message inside each branch.
 // Your code here:
let result = "";
 if(myCounty.ymin <= latInput && latInput <= myCounty.ymax && myCounty.xmin <= lonInput && lonInput <= myCounty.xmax){
    result = "YES! Those coordinates are INSIDE Middlesex County!";
 } else{
    result = "NO. Those coordinates are OUTSIDE Middlesex County!";
 }
document.getElementById('result').textContent = result;

}

