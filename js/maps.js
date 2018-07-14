var infoWindow;

function initMap() {
// Pulling LAt and Lng from zipcode entered by user input.
var zipLat;
var zipLng;


}
// function getLocation() {
    // getAddressInfoByZip(document.forms[0].zip.value);
// }

function response(obj) {
    console.log(obj);
}
function getAddressInfoByZip() {
    var zip = document.forms[0].zip.value;
    if (zip.length >= 5 && typeof google != 'undefined') {
        var addr = {};
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': zip }, function (zipResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (zipResults.length >= 1) {
                    var coords = zipResults[0].geometry.location;
                    zipLat = coords.lat();
                    zipLng = coords.lng();
                    parseFloat(zipLat);
                    parseFloat(zipLng);
                    // console.log(zipResults);
                    console.log(zipLat + " / " + zipLng)
                    
                    var pos = { lat: parseFloat(zipLat), lng: parseFloat(zipLng) };
                    var mapCanvas = document.getElementById('map');
                    var mapOptions = {
                        mapTypeId: google.maps.MapTypeId.MAP,
                        zoom: 10,
                        center: pos,
                    }
                    map = new google.maps.Map(mapCanvas, mapOptions);
                    infoWindow = new google.maps.InfoWindow;
                    
                    var request = {
                    location: pos,
                    type: 'restaurant',
                    radius: "600",
                    fields: ['photos', 'formatted_address', 'name', 'rating', 'geometry'],
                    }; 
                    console.log(request);
                    
                    service = new google.maps.places.PlacesService(map);
                    service.textSearch(request, callback);

                               
            infoWindow = new google.maps.InfoWindow;
            
            var request = {
                location: pos,
                type: 'restaurant',
                radius: "600",
                fields: ['photos', 'formatted_address', 'name', 'rating', 'geometry'],
            }
            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);

            infoWindow.setPosition(pos);
            infoWindow.setContent('Your Location');
            infoWindow.open(map);
            map.setCenter(pos);
                               // Calling the information/results
function callback(results, status) {
    var place = []
    
        for (var i = 0; i < results.length; i++) {
            place.push(results[i]);
            var coords = results[i].geometry.location;
            var latLng = new google.maps.LatLng(coords.lat(), coords.lng());
            // console.log(coords.lat());
            // console.log(coords.lng());
            var marker = new google.maps.Marker({
                position: latLng,
                map: map
            });

        }
    
    console.log(place);

}

                }
            }

        });
    } else {
        response({ success: false });
    }
}
// var pos = {
//                 lat: zipLat,
//                 lng: zipLng,
//             };



   

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    };



$(document).ready(function () {
    var map;
    var service;
    var infowindow;


});