var fire1 = new Audio('Sounds\\fire2.mp3');

function Enemy1()
{
	th = this;
	window.fire1 = new Audio('Sounds\\fire2.mp3');
	this.bulletimg = "Images\\Bullets\\2.png";
	this.bullet = $("<img id = 'bullet1'>");
	this.position = 150+(Math.random()*(screen.width-300));
	this.img = $("<img id = 'enemy'>");
	this.imgsrc = "Images\\Enemys\\1.png";
	this.appear = show;
	this.health = 1;
	function show()
	{
		$("body").append(th.img);
		$("#enemy").attr("src",th.imgsrc);
		$("#enemy").attr("style","top: 10px; position: absolute; left: "+th.position+"px; z-index: 10;");
		setInterval(function(){
			$("#enemy").animate({left: 150+(Math.random()*(screen.width-300)), top: 10+Math.random()*300},1750,"linear");
			},750);
	}
	this.shoot = shoot;
	function shoot()
	{
		window.fire1.play();
		$("body").append(th.bullet);
		$("#bullet1").attr("src",th.bulletimg);
		$("#bullet1").attr("style","position: absolute; top: "+($('#enemy').offset().top+$('#enemy').height())+"px; left:"+($('#enemy').offset().left+$('#enemy').width()/2)+"px;");
		$("#bullet1").animate({top: screen.height+100},1750,"linear");
	}
	this.appear2 = appear2;
	function appear2()
	{
		var pos=Math.random();
		var r=50*Math.random();
		var i=0;
		
		$("body").append(th.img);
		$("#enemy").attr("src",th.imgsrc);
		$("#enemy").attr("style","top: 100px; position: absolute; left: "+150+r+(pos*(screen.width-300))+"px; z-index: 10;");
		setInterval(function(){
			for (i=-90;i<=270;i++)
			{
				$("#enemy").animate({top: 100+r+r*Math.sin((i)*Math.PI/180), left: 150+r+(pos*(screen.width-300))+(r)*Math.cos((i)*Math.PI/180)}, 10, "linear");
			}
			},750);
	}
}

function Enemy2()
{
	t = this;
	window.fire1 = new Audio('Sounds\\fire2.mp3');
	this.bulletimg = "Images\\Bullets\\2.png";
	this.bullet = $("<img id = 'bullet1'>");
	this.position = 150+(Math.random()*(screen.width-600));
	this.img = $("<img id = 'enemy'>");
	this.imgsrc = "Images\\Enemys\\2.png";
	this.appear = show;
	this.health = 2;
	function show()
	{
		$("body").append(t.img);
		$("#enemy").attr("src",t.imgsrc);
		$("#enemy").attr("style","top: 250px; position: absolute; left: "+th.position+"px; z-index: 10;");
		for (var xy=-90;xy<270;xy++){
			$("#enemy").animate({top: 150+100*Math.sin((xy)*Math.PI/180), left: th.position+(100)*Math.cos((xy)*Math.PI/180)}, 10, "linear");
			}
	}
}

function Enemy3()
{
	h = this;
	window.fire1 = new Audio('Sounds\\fire2.mp3');
	this.health = 10;
	this.bulletimg = "Images\\Bullets\\2.png";
	this.bullet = $("<img id = 'bullet1'>");
	this.position = 150+(Math.random()*(screen.width-500));
	this.img = $("<img id = 'enemy'>");
	this.imgsrc = "Images\\Enemys\\3.png";
	this.appear = show;
	this.health = 2;
	function show()
	{
		$("body").append(h.img);
		$("#enemy").attr("src",h.imgsrc);
		$("#enemy").attr("style","top: 10px; position: absolute; left: "+th.position+"px; z-index: 10;");
		setInterval(function(){
			$("#enemy").animate({left: 150+(Math.random()*(screen.width-500)), top: 10+Math.random()*300},1250,"linear");
			},350);
	}
}

function boss()
{
	$("#enemy").remove();
	setTimeout(function(){
	var enemy = new Enemy3();
	enemy.appear();
	setInterval(function(){
	$("#bullet1").remove();

	}
	,5000);}
	,1000);
	setInterval(function(){	bulboss();},100);
	BulEn1=function(){return false};
}