function introduction()
{
	window.yspeed = 5;
	background="Images\\Backgrounds\\1.png";
	$("p").remove();
	setTimeout(function(){
	$("#pl1").remove();
	$("#pl2").remove();
	$("#pl3").remove();
	$("#pl4").remove();
	$("body").attr("background",background);
	plane.appear();
	var arrow = $("<img id ='arrow'>");
	var arpos = (screen.width/2)-150+"px;";
	$("body").append(arrow);
	$("#arrow").attr("src","Images\\Introduction\\arrows.png");
	$("#arrow").attr("style","position: absolute; top: 50px; width: 300px; height: 150px; left: "+arpos);
	}
	,500);
	setTimeout(function(){
	arpos = (screen.width/2)-250+"px;";
	$("#arrow").attr("src","Images\\Introduction\\space.png");
	$("#arrow").attr("style","position: absolute; width: 500px; height: 100px; top: 50px; left: "+arpos);
	},5000);
	$("html").on('keydown',_loadingLevel);

	function _loadingLevel(evt)
	{
		if (evt.keyCode==32)
		{
			$("#arrow").remove();
			var bullet = new Bullet();
			bullet.shoot();
			setTimeout(function(){level1();},1000);
		}
	}
}
