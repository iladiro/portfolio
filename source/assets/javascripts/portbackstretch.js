//Backstretch Images
var PortBackstretch = function() {

  $.backstretch("assets/images/header-bg.jpg");

  $('#skills-section').waypoint(function(direction) {

    $('.backstretch').remove();

    if(direction == 'down') {
      $.backstretch('assets/images/footer-bg.jpg');
    }else {
      $.backstretch('assets/images/header-bg.jpg');
    }

  });

  $('#slide').height($(window).height()+50);
  $('#intro-message').css({'marginTop':$(window).height()*0.4});

}
