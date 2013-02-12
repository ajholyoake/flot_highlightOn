$(function(){
var o = {
grid: {
autoHighlight:true,
hoverable:true
}
};

var d = [{
lines:{show:true},
color:"#338833",
data:[[0,0],[1,1]],
highlightOn:{show:true,placeholder:'#otherGraph', lines:{lineWidth:5},shadowSize:5},
}];


var e = [{
lines:{show:true},
color:"#338833",
data:[[0,1],[1,0]],
highlightOn:{show:true,placeholder:'#graph', lines:{lineWidth:5},shadowSize:5},
}];

$.plot($('#graph'),d,o);
$.plot($('#otherGraph'),e,o);

});
