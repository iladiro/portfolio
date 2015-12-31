$(document).ready(function() {

  $('.about, #skills-section, .about-follow, #contacts-section, #works-section').waypoint({
    handler: function(direction) {
      $('#site-nav a').removeClass('up');
      $($(this).data('highlight')).addClass('up');
    }
  })

  //Animation Elements

  var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init();

  // end

  //Backstretch Images

  $.backstretch("assets/images/header-bg.jpg");

  $('#skills-section').waypoint(function(direction) {

    if(direction == 'down') {
      $.backstretch('assets/images/footer-bg.jpg');
    }else {
      $.backstretch('assets/images/header-bg.jpg');
    }

  });

  // end

  //Skills

  $('#skills-section').waypoint(function(){
		$('.chart__container').each(function(){
		$(this).easyPieChart({
				size:170,
        lineWidth: 10,
        lineCap: "butt",
        barColor: "#85d8e6",
        scaleColor: false,
				animate:{
          duration: 1000,
          enabled: true
        }
			});
		});
	},{offset:'80%'});

  // end

  // $("#site-nav a").click(function(event){
  //
  //   event.preventDefault();
  //
  //   nav.selectTab("#site-nav a", this);
  //
  // });

  $(window).scroll(function(){
		nav.scrolled();
	});

  $('#slide').height($(window).height()+50);
	$('#intro-message').css({'marginTop':$(window).height()*0.4});

})
