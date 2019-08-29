
// ---------------------------------------------------------
// READ IN DATA AND BUILD SERIES OBJECTS FOR PLOTTING
// ---------------------------------------------------------

// establish list to hold series objects
let seriesData = []

// establish variable to hold neighborhood names (in desc order of total crimes)
const neighborhoods = ['DOWNTOWN', 'FRANKFORD', 'BELAIR-EDISON', 'BROOKLYN', 'CANTON']

// establish variable to hold our five crime types
const crimes = ['Homicide', 'Shooting', 'Personal', 'Property', 'Larceny']

// read in JSON data and in promise create function to build series objects
d3.json("/tree")
  .then(function(crimeData) {

    //establish variable for pie slice colors
    const colors = ['red', 'black', 'purple', 'gold', 'gray']

    // iterate through crimes list 
    crimes.map((item, i) => {
      // establish variable to hold object
      let obj = {}
      // when the Description value in data equals the crime in the crime list...
      const crimeD = crimeData.filter(d => d.Description === item)
      // set dataPie as equal to that Description value...
      obj.dataPie = item;
      // and set dataV as a list of totals of that crime type for each neighborhood...
      obj.dataV = neighborhoods.map(j => {
        let neigh = crimeD.filter(d => d.Neighborhood === j)
        return(neigh[0].NumCrimes)
      })
      // and finally set marker color to the color that matches the index of the crime.
      obj.marker = { backgroundColor: colors[i]}

      // add the object to our series list
      seriesData.push(obj)
    });
 
// ---------------------------------------------------------
// USING ZING CHART TEMPLATE, SET CONFIGURATION PARAMETERS
// ---------------------------------------------------------

let chartConfig = {
  type: 'bubble-pie',
  globals: {
    "fontFamily": "Verdana"
  },
  "height": "100%",
  "width": "100%",
  title: {
    text: "Baltimore's Most Crimimal Neighborhoods",
    fontColor: 'purple',
    "font-size": 25
  },
  subtitle: {
    text: 'Top 5 By Crime Type (2018)',
    "font-size": 15
  },
  legend: {
    "header":{
      "text":"Crime Type",
      "text-align": 'center',
      "padding-top":8,
    },
    align: 'center',
    item: {
      text: '%data-pie'
    },
    verticalAlign: 'bottom'
  },
  plot: {
    // here the first value is a placeholder, as we're using x axis categorically (see x labels below)
    // the 2nd and 3rd values are total crimes, which I surmised during separate ETL
    // total crimes appears twice, because it functions as Y variable and size of bubble
    values: [[1, 1635, 1635], [2, 1084, 1084], [3, 1042, 1042], [4, 947, 947], [5, 843, 843]],
    tooltip: {
      text: '%data-pv% %data-pie'
    },
    dataBubble: neighborhoods,
    valueBox: {
      text: 'total crimes: %node-size-value',
      fontColor: 'black',
      fontWeight: 'normal',
      placement: 'top'
    },
    "min-size": 50,
    "max-size": 100
  },
  "scale-x": {
    "labels": neighborhoods,
    "offset-start": 120,
    "offset-end": 100
  },
  "scale-y": {
    "max-value": 1800,
    "min-value": 840,
    "offset-start": 60,
    "offset-end": 110,
  },
  // where you'd normally write the series objects, call list of objects built above (seriesData)
  series: seriesData
};
 
// render chart
zingchart.render({
  id: 'myChart',
  data: chartConfig
});

});