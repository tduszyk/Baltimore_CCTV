## Project 2 Parameters

### Proposal

Increasingly, municipal police departments are relying on CCTV camera technology to deter crime and make arrests. Based on the reported success of such approaches, new contractors are now testing air-based surveillance systems originally designed by the Air Force for use in war zones.  

Among large US cities, Baltimore has the highest per-capita murder rate for a large city in the U.S.  For over a decade, the city has been using CCTV technology to fight crime.  The program, designed to save government resources, relies on a system of over 700 privately-owned cameras that have been registered with the city for public safety use.  

Given this volunteer approach, we are interested in the geographic distribution of these cameras and any correlation with specific crime prevention in those areas, along with the various types of crimes reported, and number of arrests made. 

## Hypothesis

Our Hypothesis is that Baltimore CCTV cameras are disproportionately located in business areas, used to prevent property crimes, largely affecting those businesses. We will plot the geolocation of 720 CCTV cameras in Baltimore, map the location into sublocations and  catergorize the types of crime by subject matter for our purposes. The crimes will then be broken down by victim crimes reported and police arrests. Our goal is to investigate whether cameras are also placed in areas of the city with high rates of victim-based crime (non-property crimes); to investigate the variance in number of cameras placed in areas of the city with high rates of victim-based crime compared to those of property related crimes. 

### Methods

1. Use leaflet to plot the point (lat/long) of each CCTV camera in the Baltimore Open Data set, creating a reader friendly visualization. Furthermore, we will apply a heatmap layer with various types of crimes (violent/drug/property crimes) from BPD Open Data. 
  - Goolge maps, selections incoporated for heatmaps, mouse overs for location. 

2. Incorporate the JavaScript InfoVis Toolkit, to create meaningful interactive tables comparing the number of cameras, to types of crime, and number of arrests. 
  - Mouse overs for count of selection, selection for interactive changing tables (3x). 

3. Javascript Ploty will be used to manifest a visualization that will summarize our findings.
  - to be determined 

Determine which types of crimes are most highly correlated with camera placement.

### Datasets

Baltimore CCTV Locations </br>
https://data.baltimorecity.gov/Public-Safety/CCTV-Locations/h32e-c3r6 </br>

Baltimore Crime </br>
https://data.baltimorecity.gov/Public-Safety/BPD-Part-1-Victim-Based-Crime-Data/wsfq-mvij/data </br>

Baltimore Police Department Arrests </br>
https://data.baltimorecity.gov/resource/3i3v-ibrt.json </br>


