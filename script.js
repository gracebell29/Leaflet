// Initialize the map and set the view
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample test points with coordinates
var testPoints = [
    { name: "Test Point 1", coords: [51.505, -0.09] },
    { name: "Test Point 2", coords: [51.51, -0.1] },
    { name: "Test Point 3", coords: [51.507, -0.08] },
    { name: "Test Point 4", coords: [51.503, -0.06] },
    { name: "Test Point 5", coords: [51.508, -0.11] }
];

// Add markers for each test point with a popup
testPoints.forEach(function(point, index) {
    L.marker(point.coords)
        .addTo(map)
        .bindPopup(`<b>${point.name}</b><br>Number: ${index + 1}`);
});
