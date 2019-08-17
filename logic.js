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


// Grabbing json data
d3.json(link, function(data) { //pass the full JSON link

  data.forEach(function(element){  //filter for lat and long with foreach loop
    console.log(element.latitude);
    console.log(element.longitude);
    lat =element.latitude;
    lon =element.longitude;  //NOTE: lat/long not stored in global variable.

    var marker = L.marker([lat, lon], { //pass lat/long to marker
      draggable: true,
      title: "My First Marker"
    }).addTo(map);
    
  });
});


