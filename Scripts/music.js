var music = new Audio('Sounds\\music.mp3');
var span =  $("<span>Music: Tim Shiel - Theme from Duet</span>");
var icon = $("<img id='mus'>");
var mus = 'on';

music.play();


$("body").append(span);
$("span").attr("style","position: absolute; left: 750px; bottom: 0px; color: white;font-size: 25px; font-weight: bolder; font-style: italic; background-color: black;");

$("body").append(icon);
$("#mus").attr("style","position: absolute; bottom: 0px;");
$("#mus").attr("src","Images\\Music\\music on.png");
$("#mus").click(function(){
	if (mus=='on')
	{
		setInterval(function(){music.play();},280000);
		mus='off';
		music.pause();
		$("#mus").attr("src","Images\\Music\\music off.png");
	}
	else
	{
		mus='on';
		music.currentTime=0;
		music.play();
		$("#mus").attr("src","Images\\Music\\music on.png");
	}
});