$(document).ready(function() {
  var sarsour_and_brown_location;
  var marker;
  var $map = document.getElementById('map')

  function initMap() {
    var options = {
      center: { lat: 41.653531, lng: -83.528592 },
      zoom: 14
    };

    sarsour_and_brown_location = new google.maps.Map($map, options);

      var marker_options = {
        position: { lat: 41.653531, lng: -83.528592 },
        map: sarsour_and_brown_location
      };

      marker = new google.maps.Marker(marker_options);
  };

  initMap();
});
