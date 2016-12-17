function level1()
{

	var span = 	$("<span id='level'>Start!</span>");

	window.yspeed = 100;

	$("html").off();

	_Events();

	setTimeout(function(){
	window.yspeed = 5;
	$("body").append(span);
	var x = (screen.width-308)/2;
	$("#level").attr("style","position: absolute; font-size: 100px; font-weight: bolder; color: red; top: 50px; left:"+x+"px;");
	setTimeout(function(){$("#level").remove();
	var health = $("<span id='health'>Lives</span>");
	$("body").append(health);
	$("#health").attr("style", "position:absolute; top: 10px; left: 10px; color: rgb(0,102,204); font-size: 35px; font-weight: bolder;");
	plane.healthview();
	setTimeout(function(){
	var enemy = new Enemy1();
	enemy.appear();
	},500);
	setInterval(function(){BulEn1();},10);
	setInterval(function(){EnBul();},100);
	setInterval(function(){BulOut();},100);
	setInterval(function(){PU();},100);

	setInterval(function(){
		$("#lvlen").remove();
		var levelenemies = $("<span id='lvlen'>x"+(enemies-1)+"</span>");
		$("body").append(levelenemies);
		$("#lvlen").attr("style","color: rgb(255,153,51); position: absolute; top: 100px; left: 10px; font-weight: bolder; font-size: 45px;")
	},100);
	},1000);
	},3000);

	function _Events()
	{
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
			if (evt.keyCode==32)
			{
				var bullet = new Bullet();
				bullet.shoot();
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
	}
}
