(function ($)
{

  var options = {
    series:{ highlightOn:{show:false, placeholder:null, lines:{shadowSize:10}, xaxis:1, yaxis:1}
    }};


  function init(plot)
  {

  var highlightedSeries = [];
    plot.hooks.drawSeries.push(
    function(plot,ctx,series){
    if (series.highlightOn && series.highlightOn.show)
      {highlightedSeries.push($.extend(true,{},series));}

    });
    
    plot.hooks.bindEvents.push(function(plot, eventHolder){

    $( plot.getPlaceholder() ).bind("plothover", function(event, pos, item){
    //Ah-hah! what about $(placeholer).data("plot"), can do more things then

    for (var ii = 0; ii < highlightedSeries.length; ii++){
        var series = highlightedSeries[ii];
        var olc = $(series.highlightOn.placeholder).find('canvas.flot-overlay');
        ctxolc = olc[0].getContext('2d');
        ctxolc.save();
        ctxolc.clearRect(0,0,olc.width(),olc.height());
        ctxolc.restore();
        }


    if(item && item.series.highlightOn && item.series.highlightOn.show) {
        var series = $.extend(true,{},item.series);
        var olc = $(series.highlightOn.placeholder).find('canvas.flot-overlay');
        ctxolc = olc[0].getContext('2d');
        if(series.highlightOn.lines){
        $.extend(true,series.lines,series.highlightOn.lines)};
        if(series.highlightOn.shadowSize){
        series.shadowSize = series.highlightOn.shadowSize};
        if(series.highlightOn.points){
        $.extend(true,series.points,series.highlightOn.points);}
        plot.drawSeries(series,ctxolc);
        
    } 
    });
    });
    
  }//End init (plugin body)


  $.plot.plugins.push({
    init: init,
    options: options,
    name: "highlightOn",
    version: "0.1"
  });


})(jQuery);

