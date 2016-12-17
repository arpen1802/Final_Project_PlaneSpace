function Plane(color,level)
{
	that=this;
	this.x = 500;
	this.color = color;
	this.speed = 25;
	this.img = "Images//Planes//1 "+color+" 1.png";
	this.imgleft = "Images//Planes//1 "+color+" 0.png";
	this.imgright = "Images//Planes//1 "+color+" 2.png";
	this.appear = appear;
	this.startposition = (screen.width/2)-63.5;
	function appear()
	{
		var x = $("<img id='plane'>");
		var position = (screen.width/2)-63.5+"px;";
		$("body").append(x);
		$("#plane").attr("src", that.img);
		$("#plane").attr("style","position: absolute; left: "+position);
		$("#plane").animate({bottom: "-500"},0)
			.animate({bottom: "300"},1500,"linear")
			.animate({bottom: "10"},1000,"linear")
			.animate({bottom: "10"},1000,"linear");
	}
	this.left = left;
	function left(lastposition)
	{
			$("#plane").attr("src", that.imgleft);
			$("#plane").animate({position: "absolute", left: "-="+that.speed+"px", bottom: "10px"},0);
	}
	this.right = right;
	function right(lastposition)
	{
			$("#plane").attr("src", that.imgright);
			$("#plane").animate({position: "absolute", left: "+="+that.speed+"px", bottom: "10px"},0);
	}
	this.middle = middle;
	function middle()
	{
		$("#plane").attr("src", that.img);
	}
	this.healthview = health;
	this.health = 5;
	function health()
	{
		var health = new Array();
		for (var q = 0; q < that.health; q++)
		{
			health[q] = $("<div id='h"+q+"'></div>");
			$("body").append(health[q]);
			$("#h"+q).attr("style","position: absolute; top: 50px; display: inline-block; width: 20px; height: 20px; background-color: rgb(0,153,0); margin-left: 10px; border-radius: 10px; left: "+20*q+"px;");
		}
	}
}
