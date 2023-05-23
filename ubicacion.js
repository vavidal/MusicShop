function iniciarMap(){
    var corde = {lat:-41.4729422 ,lng:-72.9360625}; 
    var map= new google.maps.Map(document.getElementById('map'),{
       zoom:16,
       center: corde,
    });
    var marker = new google.maps.Marker({
       position: corde,
       map: map
     });
 
  }