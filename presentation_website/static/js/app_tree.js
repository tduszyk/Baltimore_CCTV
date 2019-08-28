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
    values: [[1, 1635, 1635], [2, 1084, 1084], [3, 1042, 1042], [4, 947, 947], [5, 843, 843]],
    tooltip: {
      text: '%data-pv% %data-pie'
    },
    dataBubble: ['DOWNTOWN', 'FRANKFORD', 'BELAIR-EDISON', 'BROOKLYN', 'CANTON'],
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
    "labels": ['DOWNTOWN', 'FRANKFORD', 'BELAIR-EDISON', 'BROOKLYN', 'CANTON'],
    "offset-start": 120,
    "offset-end": 100
  },

  "scale-y": {
    "max-value": 1800,
    "min-value": 840,
    "offset-start": 60,
    "offset-end": 110,
  },
  series: [
    {
      dataPie: 'Homicide',
      dataV: [3, 9, 8, 10, 1],
      marker: {
        backgroundColor: 'red'
      }
    },
    {
      dataPie: 'Shooting',
      dataV: [14, 18, 15, 12, 6],
      marker: {
        backgroundColor: 'black'
      }
    },
    {
      dataPie: 'Personal',
      dataV: [775, 435, 413, 352, 164],
      marker: {
        backgroundColor: 'purple'
      }
    },
    {
      dataPie: 'Property',
      dataV: [90, 166, 118, 208, 78],
      marker: {
        backgroundColor: 'gold'
      }
    },
    {
      dataPie: 'Larceny',
      dataV: [753, 456, 488, 365, 594],
      marker: {
        backgroundColor: 'gray'
      }
    }  
  ]
};
 
zingchart.render({
  id: 'myChart',
  data: chartConfig
});