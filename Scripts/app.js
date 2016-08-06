;

// JavaScript source code

var App = {};

App.config = {};
App.config.api_key = "AIzaSyAGiGyrLbjIuXVdO6-cvuiO4ruwBYH_VXo";
App.config.default_map = {
    center: {
        lat: 36.2414783,
        lng: -113.754105
    },
    zoom: 4
};


function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, App.config.default_map);
}
