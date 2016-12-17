var background="Images\\Backgrounds\\0.png";
var button=$('<div id="Start">Start The Game</div>');
var bstyle="color: rgb(0,204,102); font-size: 100px; font-weight: bolder; font-style: italic; position: absolute; top: 40%; left: 20%;";
var plane;
var color;
var enemies = 1;

$("body").append(button);
$("#Start").attr("style",bstyle);
$("#Start").mouseover(
function(){
	$("#Start").attr("style", bstyle+"color: white;");
}
);
$("#Start").mouseout(
function(){
	$("#Start").attr("style",bstyle);
}
);
$("#Start").click(
function(){
	$("#Start").remove();
	$("span").remove();
	$("#mus").remove();
	selectThePlane();
}
);