$(document).ready(function() {


      function initMap() {
        var two_maritime_plaza = {lat: 41.653531, lng: -83.528592};
        // The map, centered at 2 Maritime Plaza
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 14, center: two_maritime_plaza});
        // The marker, positioned at 2 Maritizme Plaza
        var marker = new google.maps.Marker({position: two_maritime_plaza, map: map});
      }

      initMap();

});