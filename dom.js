let imageShown = false;
let imageRef = null;

const waterPicBtn = document.querySelector("#water-pic-btn");
const waterPhoto = document.querySelector("#water-photo");
waterPicBtn.addEventListener("click", () => {
    if(!imageShown){
        imageRef = document.createElement("img");
        imageRef.src = "https://iconsofarlington.com/wp-content/uploads/2019/08/2019-08-25-dog-days-at-the-rez-001-1.jpg";
        imageRef.alt = "Arlington Reservoir Beach Photo"
        waterPhoto.append(imageRef);
        waterPicBtn.textContent = "Hide Photo";
        imageShown = true;
    } else{
        imageRef.remove();
        imageRef = null;
        waterPicBtn.textContent = "Show Photo";
        imageShown = false; 
    }
    
});


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