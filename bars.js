//Baltimore CCTV API endpoint
var cctv = "https://data.baltimorecity.gov/resource/h32e-c3r6.json"

//Baltimore Crime API endpoint
var crime = "https://data.baltimorecity.gov/resource/h32e-c3r6.json"

// Grabbing json data for CCTV
d3.json(cctv, function (data) { //pass the full JSON link
  neighborhoods_cctv = [];

  data.forEach(function (element) {  //filter for lat and long with foreach loop
    neighborhoods_cctv.push(element.neighborhood.toUpperCase());
    //return(neighborhoods_cctv);
  });

  // Grabbing json data for Crime
  d3.json(crime, function (data) {
    neighborhoods_crimes = [];


    data.forEach(function (element) {
      neighborhoods_crimes.push(element.neighborhood.toUpperCase());

    })
  })

  // Gettting Cameras per Neighborhood
  var counts = {};
  for (var i = 0; i < neighborhoods_cctv.length; i++) {
    counts[neighborhoods_cctv[i]] = 1 + (counts[neighborhoods_cctv[i]] || 0);
  };

  // Creating list of dictionaries
  var camerasNeighborhood = [];
  for (let [key, value] of Object.entries(counts)) {
    // console.log(`${key}: ${value}`);
    camerasNeighborhood.push({ Neighborhood: `${key}`, NumberOfCameras: `${value}` });
  }
});
