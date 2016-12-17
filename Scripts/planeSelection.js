function selectThePlane()
{
	var pTag = $("<p id='p'>Choose Your Plane Color</p>");
	var pl1 = $("<img id='pl1' src='Images\\Planes\\1 0 1.png'>");
	var pl2 = $("<img id='pl2' src='Images\\Planes\\1 1 1.png'>");
	var pl3 = $("<img id='pl3' src='Images\\Planes\\1 2 1.png'>");
	var pl4 = $("<img id='pl4' src='Images\\Planes\\1 3 1.png'>");

	$("body").append(pTag);
	$("#p").attr("style","color: yellow; position: absolute; top: 10%; left: 25%; font-size: 50px;");
	$("body").append(pl1);
	$("body").append(pl2);
	$("body").append(pl3);
	$("body").append(pl4);
	$("img").attr("style", "position: relative; top: 250px; margin-left: 150px;");
	$("#pl1").click(
	function(){
		window.color=0;
		$("#pl1").animate({top: "-200"},500,"linear");
		plane = new Plane(window.color,window.level);
		introduction();
	}
	);
	$("#pl2").click(
	function(){
		window.color=1;
		$("#pl2").animate({top: "-200"},500,"linear");
		plane = new Plane(window.color,window.level);
		introduction();
	}
	);
	$("#pl3").click(
	function(){
		window.color=2;
		$("#pl3").animate({top: "-200"},500,"linear");
		plane = new Plane(window.color,window.level);
		introduction();
	}
	);
	$("#pl4").click(
	function(){
		window.color=3;
		$("#pl4").animate({top: "-200"},500,"linear");
		plane = new Plane(window.color,window.level);
		introduction();
	}
	);
}
