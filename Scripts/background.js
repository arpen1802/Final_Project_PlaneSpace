var y = 0;
var yspeed = 25;
$("body").attr("background",background);
$("body").attr("style","background-size: 100% 100%; background-position-y: 0px;");
setInterval(function(){
$("body").attr("style","background-size: 100% 100%; background-position-y: "+y+"px;");
y+=yspeed;
},10);
setInterval(function(){
	if (enemies>=15&&enemies<=30)
	{
		$("body").attr("background","Images\\Backgrounds\\2.png");
	}
	if (enemies>=31&&enemies<=46)
	{
		$("body").attr("background","Images\\Backgrounds\\3.png");
	}
	if (enemies>=47)
	{
		$("body").attr("background","Images\\Backgrounds\\3.png");
	}
},1000);