// const county1 = {
//     name:   "Middlesex County", // county name
//     state:  "Massachusetts", // state
//     population: 1632002, // current population
//     seat:   "Lowell and Cambridge", // county seat
//     founded: 1643, // year founded
//     areaSqMi: 847.0, // area in square miles
//     myTown: "Arlington, MA", // your hometown
//     largestMunicipality: {
//         name: "Cambridge", // fill in
//         population: 120000 // fill in
//     }
// };

const station = {
    callsign: "WXVU",
    frequency: 89.1,
    city: "Villanova",
    sp: "PA",
    field_strength: 24.3,
    distance: 37.3,
    slogan: "89.1 The Roar",
    owner: "Villanova"
}

const stationResult = document.querySelector("#station-result");
const stationDetail = document.querySelector("#station-detail");
stationResult.textContent = `${stationResult.textContent} — Call sign: ${station.callsign}`;
stationResult.textContent = `${stationResult.textContent} — Frequency: ${station.frequency}`;
stationResult.textContent = `${stationResult.textContent} — City: ${station.city}`;
stationResult.textContent = `${stationResult.textContent} — State: ${station.sp}`;
stationDetail.textContent = `This station's feild strength value is: ${station.field_strength}`;



// const heading = document.querySelector("h1");
// console.log("Heading:", heading.textContent);

// heading.textContent = `${heading.textContent} — Pop: ${county.population}`;

// // const description = document.querySelector("#county-desc");
// // console.log("Description: ", description.textContent);

// description.textContent = `${description.textContent} — Founded in: ${county.founded}`;

// const allParagraphs = document.querySelectorAll("p");
// console.log("The number of paragraphs is: " , allParagraphs.length);

// for(const p of allParagraphs){
//     console.log(p.textContent);
// }


// ============================================
// PART 2: REST API + JSON
// ============================================
const params = new URLSearchParams({
 lat: 42.407, // your county seat latitude
 lon: -71.382, // your county seat longitude (negative = West)
 callsign: "WXVU", // your chosen station
 request_type: 4,
 search_freq: "none", pi_code: "none",
 sig_strength: "null", startMiles: "none",
 miles: "null", format: "none",
 rxHeight: 10, measurementUnit: "feet"
});

const toggleBtn = document.querySelector("#toggle-btn");
const stationSection = document.querySelector("#station-section");
toggleBtn.addEventListener("click", () => {
    // YOUR CODE:
    // 1. Toggle the "hidden" class on stationSection
    stationSection.classList.toggle("hidden");
    // 2. If stationSection now has "hidden", set toggleBtn.textContent to "Show Station"
    // Otherwise set it to "Hide Station"
    if(stationSection.classList.contains("hidden")){
        toggleBtn.textContent = "Show Judy's station";

    } else{
        toggleBtn.textContent = "Hide Judy's station";
    }

});