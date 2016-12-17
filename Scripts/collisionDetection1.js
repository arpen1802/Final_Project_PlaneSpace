var shoots = 2;
var health = 10;

function BulEn1()
{
	if (document.all.bullet&&$("#bullet").offset().top<=$("#enemy").offset().top+$("#enemy").height()&&$("#bullet").offset().left>=$("#enemy").offset().left&&$("#bullet").offset().left<=$("#enemy").offset().left+$("#enemy").width())
	{
		enemies++;
		$("#bullet").stop();
		$("#bullet").remove();
		if ((enemies)%2!=0&&(enemies)%2!=15)
		{
			$("#enemy").remove();
			setTimeout(function(){
			var enemy = new Enemy1();
			enemy.appear();
			setInterval(function(){
			$("#bullet1").remove();
			enemy.shoot();}
			,5000);}
			,1000);
		}
		if ((enemies)%2==0&&(enemies)%2!=15)
		{
			shoots--;
			if (shoots!=0)
			{
				enemies--;
			}
			if (shoots==0)
			{
				$("#enemy").remove();
				setTimeout(function(){
				var enemy = new Enemy2();
				enemy.appear();
				}
				,1000);
				shoots=2;
			}
		}
		if (enemies%15==0)
		{
            boss();
		}
	}
}
function bulboss()
{
	if (document.all.bullet&&$("#bullet").offset().top<=$("#enemy").offset().top+$("#enemy").height()&&$("#bullet").offset().left>=$("#enemy").offset().left&&$("#bullet").offset().left<=$("#enemy").offset().left+$("#enemy").width())
	{
		$("#bullet").remove();
		health--;
		if (health==0)
		{
			enemies++;
			BulEn1=function(){if (document.all.bullet&&$("#bullet").offset().top<=$("#enemy").offset().top+$("#enemy").height()&&$("#bullet").offset().left>=$("#enemy").offset().left&&$("#bullet").offset().left<=$("#enemy").offset().left+$("#enemy").width())
	{
		enemies++;
		$("#bullet").stop();
		$("#bullet").remove();
		if ((enemies)%2!=0&&(enemies)%2!=15)
		{
			$("#enemy").remove();
			setTimeout(function(){
			var enemy = new Enemy1();
			enemy.appear();
			setInterval(function(){
			$("#bullet1").remove();
			enemy.shoot();}
			,5000);}
			,1000);
		}
		if ((enemies)%2==0&&(enemies)%2!=15)
		{
			shoots--;
			if (shoots!=0)
			{
				enemies--;
			}
			if (shoots==0)
			{
				$("#enemy").remove();
				setTimeout(function(){
				var enemy = new Enemy2();
				enemy.appear();
				}
				,1000);
				shoots=2;
			}
		}
		if (enemies%15==0)
		{
            boss();
		}
	}}
			BulEn1();
		}
	}
}
function EnBul()
{
	if (document.all.bullet1 && $("#bullet1").offset().top>=$("#plane").offset().top && $("#bullet1").offset().left>=$("#plane").offset().left && $("#bullet1").offset().left<=$("#plane").offset().left+105)
	{
		$("#bullet1").remove();
		plane.health--;
		$("#h"+plane.health).remove();
		if (plane.health<=0)
		{
			location.replace("gameOver.html");
		}
	}
}

function BulOut ()
{
	if (document.all.bullet1&&$("#bullet1").offset().top>=$("#plane").offset().top+50)
	{
		$("#bullet1").remove();
	}
}

function PU()
{
	if ((!document.all.pu1)&&enemies%15==0&&pucount==1)
	{
		var pu1=new LifeUp();pu1.appear();pucount++;
	}
	if (document.all.pu1&&$("#pu1").offset().top>=$("#plane").offset().top&&$("#pu1").offset().left+50>=$("#plane").offset().left&&$("#pu1").offset().left<=$("#plane").offset().left+$("#plane").width())
	{
		$("pu1").remove();
		if (plane.health<5)
		{
			for (var hnumber=0;hnumber<=plane.health;hnumber++)
			{
				$("#h"+hnumber).remove();
			}
			plane.health++;
			plane.healthview();
			pucount=1;
		}
	}
	if ((document.all.pu1)&&$("#pu1").offset().top>=screen.height-100)
	{
		$("#pu1").remove();
	}
	
	if ((!document.all.pu2)&&enemies%10==0&&sucount%2!=0)
	{
		var pu2=new SpeedUp();pu2.appear();sucount++;
	}
	if (document.all.pu2&&$("#pu2").offset().top+$("#pu2").height()>=$("#plane").offset().top&&$("#pu2").offset().left+50>=$("#plane").offset().left&&$("#pu2").offset().left<=$("#plane").offset().left+$("#plane").width())
	{
		$("pu2").remove();
		plane.speed=plane.speed+10;
		var su = $("<img id='su'>");
		$("body").append(su);
		$("#su").attr("src","Images\\Power Ups\\speed.png");
		$("#su").attr("style","position: absolute; top: 200px; left: 10px;")
		setTimeout(function(){plane.speed=plane.speed-10;$("#su").remove();},10000);
	}
	if ((document.all.pu2)&&$("#pu2").offset().top+$("#pu2").height()>=screen.height)
	{
		$("#pu2").remove();
	}
	
	if ((!document.all.pu3)&&enemies%7==0&&shcount%2==0)
	{
		var pu3=new SpeedUp();pu3.appear();shcount++;
	}
	if (document.all.pu3&&$("#pu3").offset().top+$("#pu3").height()>=$("#plane").offset().top&&$("#pu3").offset().left+50>=$("#plane").offset().left&&$("#pu3").offset().left<=$("#plane").offset().left+$("#plane").width())
	{
		$("pu3").remove();
		EnBul=function(){
			if (document.all.bullet1 && $("#bullet1").offset().top+$("#bullet1").height()>=150)
				$("#bullet1").remove();
		};
		var sh = $("<div id='sh'></div>");
		$("body").append(sh);
		$("#sh").attr("src","Images\\Power Ups\\shelter.png");
		$("#sh").attr("style","width: 100%; height: 5px; background-color: red; position: absolute; top: 200px; left: 10px;")
		setTimeout(function(){EnBul=function(){if (document.all.bullet1 && $("#bullet1").offset().top>=$("#plane").offset().top && $("#bullet1").offset().left>=$("#plane").offset().left && $("#bullet1").offset().left<=$("#plane").offset().left+105)
	{
		$("#bullet1").remove();
		plane.health--;
		$("#h"+plane.health).remove();
		if (plane.health<=0)
		{
			location.replace("gameOver.html");
		}
	}};$("#sh").remove();},10000);
	}
	if ((document.all.pu3)&&$("#pu3").offset().top+$("#pu3").height()>=screen.height)
	{
		$("#pu3").remove();
	}
}