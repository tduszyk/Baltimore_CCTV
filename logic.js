// Creating map object
var map = L.map("map", {
  center: [39.2904, -76.6122],
  zoom: 11
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);



//Baltimore API endpoint
var link = "https://data.baltimorecity.gov/resource/h32e-c3r6.json"
var shootings = "./crime_JSON/Balt_Shooting.json"

// Grabbing json data
d3.json(link, function(data) { //pass the full JSON link

  

  data.forEach(function(element){  //filter for lat and long with foreach loop
    console.log("camera" + element.latitude);
    console.log(element.longitude);
    lat =element.latitude;
    lon =element.longitude;  //NOTE: lat/long not stored in global variable.
    

    var marker = L.marker([lat, lon], { //pass lat/long to marker
      draggable: true,
      title: "My First Marker"
    }).addTo(map);

    
  });
});

// Grabbing json data
d3.json(shootings, function(data) { //pass the full JSON link
  
var heatArray = [];
    data.forEach(function(element){  //filter for lat and long with foreach loop
      console.log(element.Latitude);
      console.log(element.Longitude);
      lat =element.Latitude;
      lon =element.Longitude;  //NOTE: lat/long not stored in global variable.
      heatArray.push([lat, lon]);

    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(map);

    });
});