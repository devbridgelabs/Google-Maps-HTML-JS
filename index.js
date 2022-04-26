function myMap() {

  // Coordenadas

  var bridgeLabs = new google.maps.LatLng(-16.327097524994198, -48.94220700305983);
  var destinoExemplo = new google.maps.LatLng(-16.325037269403968, -48.93374910278639);


  var mapProp= {
      center:new google.maps.LatLng(-16.327097524994198, -48.94220700305983),
      zoom:18,
  };

  var mapProp2= {
      center:new google.maps.LatLng(-16.327097524994198, -48.94220700305983),
      zoom:20,
  };

  var mapProp3= {
      center:new google.maps.LatLng(-16.327097524994198, -48.94220700305983),
      zoom:20,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
  var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapProp3);


  // Ícones e animações

  var marker = new google.maps.Marker({
      position:bridgeLabs,
      animation:google.maps.Animation.BOUNCE
  });


    var marker2 = new google.maps.Marker({
      position:destinoExemplo,
      animation:google.maps.Animation.BOUNCE
  });

  var circulo = new google.maps.Circle({
    center:bridgeLabs,
    radius:20,
    strokeColor:"#05036e",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#0431fb",
    fillOpacity:0.4
  });

  marker.setMap(map);
  marker2.setMap(map);
  circulo.setMap(map);

  var marker = new google.maps.Marker({
      position:bridgeLabs,
      icon:'Logo-Bridge-Labs.jpg'
  });

  marker.setMap(map2);

  // Polilinha

  var myTrip = [bridgeLabs,destinoExemplo];
  var flightPath = new google.maps.Polygon({
    path:myTrip,
    strokeColor:"#000000",
    strokeWeight:7,
    fillColor:"#000000"
  });

  flightPath.setMap(map);

  
}
