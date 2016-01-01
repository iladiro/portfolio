//Skills Chart
var PortChart = function(){
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
}
