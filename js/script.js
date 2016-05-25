$(document).ready(function(){
  $("#reviews").owlCarousel({
  	items: 2,
  	loop: true,
  	nav: true
  });
});

$(document).ready(function(){
$('#gallery').owlCarousel({
  items: 4,
  loop: true,
  center: true
});

$('#gallery a').on('click', function(event){
  event.preventDefault();
  $('#gallery-main div').addClass('actived');  
  
});
});
$(document).ready(function(){
$('#gallery-main').owlCarousel({
  items: 4,
  loop: true,
  center: true
});
  
});
