// Nav Behavior
var PortNav = function() {
  this.scrolled = function() {
    if ($(window).scrollTop() === 0) {
      $("#header").removeClass("scrolled");
    } else {
      $("#header").addClass("scrolled");
    }
  },
  this.init = function(){
    var _self = this;
    $(window).scroll(function(){
      _self.scrolled();
    });
  },
  this.waypoint = function(){
    $('.about, #skills-section, .about-follow, #contacts-section, #works-section').waypoint({
      handler: function(direction) {
        $('#site-nav a').removeClass('up');
        $($(this).data('highlight')).addClass('up');
      }
    })
  }
}
