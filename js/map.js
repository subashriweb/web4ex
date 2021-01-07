
function initmap(){
    var location = {lat:13.02264, lng:80.14578 };
    var map = new google.maps.Map(document.getElementById("map"),
    {
         zoom : 4,
         center : location
    }); 
    var markar = new google.maps.Marker({
        position: location,
        map: map
    });    
} 
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7SSNcpwSKCadwq5o7heSf4632HLS-3ko&callback=initMap"
  type="text/javascript"></script>
 