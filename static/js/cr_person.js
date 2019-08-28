//Creating map object
var map = L.map("map", {
  center: [39.2904, -76.6122],
  zoom: 12,
  //layers: [basemap, cameras]

});


// 1.  Adding tile layer //THIS IS THE BASELAYER
//var baselayer = 
var basemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

// 2. Populate Data

var myLink = "https://data.baltimorecity.gov/resource/h32e-c3r6.json" //Baltimore API endpoint
var crime = "./static/data/CR_person.json"

// 2A. Grabbing json data for CAMERA LOCATIONS

//wrap D3 promise in a function //SHOULD create an array of marker objects
// function cameraMarker(link){

var myValue = d3.json(myLink, function(data) { //pass the full JSON link

 var myArray =[];

  data.forEach(function(element){  //filter for lat and long with foreach loop
    console.log("camera" + element.latitude);
    console.log(element.longitude);
    lat =element.latitude;
    lon =element.longitude;  //NOTE: lat/long not stored in global variable.

    //myArray.push(
      L.marker([lat, lon], { //pass lat/long to marker
      draggable: false,
      title: "CCTV Camera" }).addTo(map);//);
      })

      //add function call to pass array for rendering markers
  //console.log("Number of Camera Locations: " + myArray.length);
  //console.log("Marker Object: " + myArray[0]);

  //L.layerGroup(myArray)
      

  // L.marker(myArray[0]).addTo(map);
  // return getPromise(myArray);
});




// var CCTV_locs =[];
// CCTV_locs = cameraMarker(myLink); //calls function to populate CCTV Array

// var cameras = 
//   CCTV_locs.then((cctvMarkerArray) => {
//     return L.layerGroup(cctvMarkerArray);
//   });
// console.log("CCTV" + CCTV_locs[0]);



//cameras.then((cameraLocations) => {
  d3.json(crime, function (data) { //pass the full JSON link
  var count = 0;
    var heatArray = [];
    data.forEach(function (element) {  //filter for lat and long with foreach loop
      count = count + 1;
      //   console.log(element.Longitude);
      lat = element.Latitude;
      lon = element.Longitude;  //NOTE: lat/long not stored in global variable.
      heatArray.push([lat, lon]);
  
  
    })
    console.log("JSON entries: " + count);
    console.log("HeatArray size: " + heatArray.length);
    
    var shooting_heat = L.heatLayer(heatArray, {
      minOpacity: 80,
      max: 1.0,
      radius: 15,
      blur: 20,
      gradient: { 0.1: 'yellow', 0.5: 'orange', 1: 'red' }
  
  //   })//;
  }).addTo(map);
})
// // 2B. Grabbing json data FOR CRIME LOCATIONS
// var count = 0;






// Promise.all([cameras,shootingLayer()]).then((values) => {
//   console.log(values)
// });



// //Overlays that may be toggled on or off

// var baseMaps = {
//   "Street Map": basemap
// };

// var overlayMaps = {
//   "Camera Locations": cameras,
// };

// var map = L.map("map", {
//   center: [39.2904, -76.6122],
//   zoom: 12,
//   layers: [basemap]
// });

// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(map);



//console.log("Marker Object: " + CCTV_locs[0]);

//Add Layers

// // Add all the cityMarkers to a new layer group.
// // Now we can handle them as one group instead of referencing each individually
// var cityLayer = L.layerGroup(cityMarkers);


// // Only one base layer can be shown at a time
// var baseMaps = {
//   Light: light,
//   Dark: dark
// };

// // Overlays that may be toggled on or off
// var overlayMaps = {
//   Cities: cityLayer
// };

// // Create map object and set default layers
// var myMap = L.map("map", {
//   center: [46.2276, 2.2137],
//   zoom: 6,
//   layers: [light, cityLayer]
// });

// // Pass our map layers into our layer control
// // Add the layer control to the map 
//L.control.layers(baseMaps, overlayMaps).addTo(myMap)}
