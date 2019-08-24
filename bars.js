//Baltimore CCTV API endpoint
var cctv = "https://data.baltimorecity.gov/resource/h32e-c3r6.json"

//Baltimore Crime API endpoint
var crime = "https://data.baltimorecity.gov/resource/wsfq-mvij.json"

// Grabbing json data for CCTV
d3.json(cctv, function (data) { //pass the full JSON link
  neighborhoods_cctv = [];

  data.forEach(function (element) { 
    neighborhoods_cctv.push(element.neighborhood.toUpperCase());
    //return(neighborhoods_cctv);
  });

  // Grabbing json data for Crime
  d3.json(crime, function (data) {
    neighborhoods_crimes = [];

    data.forEach(function (element) {
      neighborhoods_crimes.push(element.neighborhood);
    //console.log(neighborhoods_crimes);
    });

    // Gettting Cameras per Neighborhood
    var counts = {};
    for (var i = 0; i < neighborhoods_cctv.length; i++) {
      counts[neighborhoods_cctv[i]] = 1 + (counts[neighborhoods_cctv[i]] || 0);
    };
    //console.log(neighborhoods_cctv);

    // Getting Crimes per Neighborhood
    var crimeN = {};
    for (var j = 0; j < neighborhoods_crimes.length; j++) {
      crimeN[neighborhoods_crimes[j]] = 1 + (crimeN[neighborhoods_crimes[j]] || 0);
    };
    console.log(crimeN);

    // Creating list of dictionaries for CCTV
    var camerasNeighborhood = [];
    for (let [key, value] of Object.entries(counts)) {
      // console.log(`${key}: ${value}`);
      camerasNeighborhood.push({ Neighborhood: `${key}`, NumberOfCameras: `${value}` });
    }
    //console.log(camerasNeighborhood);

    // Create list of dictionaries for Crimes
    // var crimesNeighborhood = [];
    // for (let [key, value] of Object.entries(crimeN)) {
    //   crimesNeighborhood.push({ Neighborhood: `${key}`, NumberOfCrimes: `${value}` });
    // }
    // console.log(crimesNeighborhood);
  
  });
})
