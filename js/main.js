$(function(){
var o = {
grid: {
autoHightlight:true,
hoverable:true}};

var d = [{
lines:{show:true},
color:"#338833",
data:[[0,0],[1,1]],
highlightOn:{show:true,placeholder:'#otherGraph', lines:{shadowSize:10},xaxis:1,yaxis:1},
hoverable: true
}];


var e = [{
lines:{show:true},
color:"#338833",
data:[[0,1],[1,0]],
highlightOn:{show:true,placeholder:'#graph', lines:{shadowSize:10} ,xaxis:1,yaxis:1},
hoverable:true 
}];

$.plot($('#graph'),d,o);
$.plot($('#otherGraph'),e,o);

});
