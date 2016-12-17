var pucount=1;
var sucount=1;
var shcount=10;
function LifeUp()
{
	pu1 = this;
	var pimg1 = $("<img id='pu1'>");
	this.appear = show;
	function show()
	{
		$("body").append(pimg1);
		$("#pu1").attr("src","Images\\Power Ups\\health.png");
		$("#pu1").attr("style","position: absolute; top: 10px; left: "+(150+Math.random()*(700))+"px;")
		$("#pu1").animate({top: screen.height},3000,"linear");
	}
}

function SpeedUp()
{
	pu2 = this;
	var pimg1 = $("<img id='pu2'>");
	this.appear = show;
	function show()
	{
		$("body").append(pimg1);
		$("#pu2").attr("src","Images\\Power Ups\\speed.png");
		$("#pu2").attr("style","position: absolute; top: 10px; left: "+(150+Math.random()*(700))+"px;")
		$("#pu2").animate({top: screen.height},3000,"linear");
	}
}

function ShelterUp()
{
	pu3 = this;
	var pimg1 = $("<img id='pu3'>");
	this.appear = show;
	function show()
	{
		$("body").append(pimg1);
		$("#pu3").attr("src","Images\\Power Ups\\shelter.png");
		$("#pu3").attr("style","position: absolute; top: 10px; left: "+(150+Math.random()*(700))+"px;")
		$("#pu2").animate({top: screen.height},3000,"linear");
	}
}