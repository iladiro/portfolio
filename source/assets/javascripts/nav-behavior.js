// Nav Behavior

var nav = {

  // selectTab: function(elem,currentItem) {
  //   $(elem).removeClass("active");
  //   $(currentItem).addClass("active");
  // },

  scrolled: function() {
    if ($(window).scrollTop() === 0) {
		  $("#header").removeClass("scrolled");
  	} else {
  		$("#header").addClass("scrolled");
  	}
  }

}

// end
