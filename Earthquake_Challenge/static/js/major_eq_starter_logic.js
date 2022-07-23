

// 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.
d3.json().then(function(data) {

// 4. Use the same style as the earthquake data.


// 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.


// 6. Use the function that determines the radius of the earthquake marker based on its magnitude.


// 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
// sets the style of the circle, and displays the magnitude and location of the earthquake
//  after the marker has been created and styled.
L.geoJson(, {
    
});
// 8. Add the major earthquakes layer to the map.

// 9. Close the braces and parentheses for the major earthquake data.
});

// Here we create a legend control object.
let legend = L.control({
  position: "bottomright"
});