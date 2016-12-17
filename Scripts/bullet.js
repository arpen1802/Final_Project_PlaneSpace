function Bullet()
{
	the=this;
	var fire = new Audio('Sounds\\fire1.mp3');
	this.bullet = $("<img id='bullet' src='Images//Bullets//1.png'>");
	this.shoot = shoot;
	this.bulletx = plane.startposition+63.5;
	this.bullety = screen.height-245;
	this.y = screen.height-245;
	function shoot()
	{
		if(document.all.bullet)
		{
			return false;
		}
		$("body").append(the.bullet);
		the.bulletx = plane.startposition+58.5;
		$("#bullet").attr("style","position: absolute; top: "+the.bullety+"px; left: "+the.bulletx+"px;");
		fire.play();
		while (the.bullety>=0)
		{
			$("#bullet").animate({top: "-=75"},30,"linear");
			the.y-=20;
			the.bullety-=19;
		}
		setInterval(function(){
		if (parseFloat($("#bullet").css("top"))<=-30)
			{
				$("#bullet").remove();
			}
		},100);
	}
}