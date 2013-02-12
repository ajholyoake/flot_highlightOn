(function ($)
{

  var options = {
    series:{ highlightOn:{show:false, plot:null, shadowsize:10, xaxis:1, yaxis:1}
    };

  function init(plot)
  {



    plot.hooks.processRawData.push(
    function(plot,series,data,datapoints){

    });

    plot.hooks.processDatapoints.push(
    function(plot, series, datapoints) {

    });

    plot.hooks.drawSeries.push(
      function(plot, ctx, series){
      
      });


  }//End init (plugin body)


  $.plot.plugins.push({
    init: init,
    options: options,
    name: "highlightOnOther",
    version:"0.1"
  });


})(jQuery);

