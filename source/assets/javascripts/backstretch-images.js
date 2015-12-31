//Backstretch Images

$.backstretch("assets/images/header-bg.jpg");

$('body').append('<img class="preload-image" src="assets/images/footer-bg.jpg" style="display:none;"/>');

$('#skills').waypoint(function(direction){

  if($('.preload-image').length){$('.preload-image').remove();}

  $('.backstretch').remove();

  if (direction=='down'){
    $.backstretch('assets/images/footer-bg.jpg');
  }else{
    $.backstretch('assets/images/header-bg.jpg');
  }

});

// end
