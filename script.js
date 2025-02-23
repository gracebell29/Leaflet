// Initialize the map and set its view
// setView([latitude, longitude], zoomLevel)
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (background map from OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors' // Proper attribution required by OSM
}).addTo(map);

// Array of test points with coordinates and names
var testPoints = [
    { name: "Test Point 1", coords: [51.505, -0.09] },
    { name: "Test Point 2", coords: [51.51, -0.1] },
    { name: "Test Point 3", coords: [51.507, -0.08] },
    { name: "Test Point 4", coords: [51.503, -0.06] },
    { name: "Test Point 5", coords: [51.508, -0.11] }
];

// Loop through each point and add a marker with a popup
testPoints.forEach(function (point, index) {
    L.marker(point.coords)          // Create marker at given coordinates
        .addTo(map)                 // Add marker to the map
        .bindPopup(`<b>${point.name}</b><br>Number: ${index + 1}`); // Popup with name & number
});

// -----------------------------------------------
//  CUSTOMIZATION IDEAS (UNCOMMENT TO USE)
// -----------------------------------------------

// 1. Geolocation: Show user’s current location on the map
// map.locate({ setView: true, maxZoom: 16 });
// map.on('locationfound', function (e) {
//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are here!").openPopup();
// });

//  2. Search functionality: Allow searching for locations on the map
// Requires: <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
// L.Control.geocoder().addTo(map);

// 3. Data table interaction: Highlight marker when a row in a data table is clicked
// Use libraries like DataTables.js and sync user clicks with map markers

// 4. Adding interactive shapes or circles
// L.circle([51.508, -0.11], { radius: 500, color: 'red' }).addTo(map);

// 5. Custom popup with button interaction
// marker.bindPopup('<button onclick="alert(`Clicked on ${point.name}`)">Click me</button>');
