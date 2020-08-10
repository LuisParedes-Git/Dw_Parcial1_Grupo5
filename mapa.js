function inciarMap(){
    var coord = {lat: 14.292916, lng: -89.894616};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom :10,
        center :coord
    });
    var marker =new google.maps.Marker({
        position: coord,
        map : map
    });
    }
