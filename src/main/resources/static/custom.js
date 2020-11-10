var map;
var contentString = '<h2>' + city + ', ' + state + '</h2>';
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 10,
        scrollwheel: false
    });
    var image = {
        url: '/marker-storm.png',
        scaledSize: new google.maps.Size(50, 50)
    };
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.BOUNCE
    });

    var contentString = '<h2>Columbus, OH</h2> <p>Where your dreams come true.</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    
}
    
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: coords,
            zoom: 8
        });
        google.maps.event.addDomListener(document.getElementById('btn'), 'click', function () {
            randomBetween();
        })
    }

    function randomBetween() {
        var random = new google.maps.LatLng((Math.random() * (85 * 2) - 85), (Math.random() * (180 * 2) - 180));
        var marker = new google.maps.Marker({
            map: map,
            position: random
        });
        map.setCenter(marker.getPosition());
    }
