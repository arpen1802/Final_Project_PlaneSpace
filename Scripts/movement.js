$("html").keydown(function(evt){
		if (evt.keyCode==37)
		{
			if (plane.startposition>=plane.speed)
			{
				plane.left(plane.startposition);
				plane.startposition-=plane.speed;
			}
		}
	});
$("html").keydown(function(evt){
		if (evt.keyCode==39)
		{
			if (plane.startposition+150+plane.speed<=screen.width)
			{
				plane.right(plane.startposition);
				plane.startposition+=plane.speed;
			}
		}
	});
$("html").keyup(function(){
			plane.middle();
	});