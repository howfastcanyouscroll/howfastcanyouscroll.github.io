


//context off

document.oncontextmenu = function (){return false};
//reload
 

function reloadPage() {
	window.location.reload();
};
var reload = setTimeout(function reloadArrow() {
  var rel = document.getElementById('timer_inp').innerHTML;
  var img = document.getElementById("myImg");
   if (rel == 0) {
img.src = "reload-arrow.png";
img.setAttribute('alt', '88');
img.setAttribute('onclick', 'reloadPage()');
img.setAttribute('ontouchmove', 'reloadPage()');
};
  reload = setTimeout(reloadArrow, 10);
}, 10);



//wheel

    var elem = document.getElementById("box");


    if (elem.addEventListener) {

      if ('onwheel' in document) {

        // IE9+, FF17+

        elem.addEventListener("wheel", onWheel);

      } else if ('onmousewheel' in document) {

        // устаревший вариант события

        elem.addEventListener("mousewheel", onWheel);

      } else {

        // mobile

        elem.addEventListener("MozMousePixelScroll", onWheel);

      }

    } else {
	 // IE8-

      elem.attachEvent("onmousewheel", onWheel);

     } 

  
	// Это решение предусматривает поддержку IE8-

    function onWheel(e) {

	i = document.getElementById('timer_inp').innerHTML;
	if( i == 0){
	return;
	};
      e = e || window.event;


      // deltaY, detail содержат пиксели

      // wheelDelta не дает возможность узнать количество пикселей

      // onwheel || MozMousePixelScroll || onmousewheel

      var delta = e.deltaY || e.detail || e.wheelDelta || e.pageX;


      var info = document.getElementById('delta');

      var j = Math.floor(delta * 0.0253);
      if (delta < 20 && delta > -20) {
      	j =  Math.floor(delta * 0.75) 
      }


      info.innerHTML = +info.innerHTML + j;

		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      

    }
 

 	//Mobile
window.addEventListener('load', function() {



	box.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        starty = parseInt(touchobj.clientY) // get y position of touch point relative to left edge of browser
        i = document.getElementById('timer_inp').innerHTML;
      	var timerId = setTimeout(timer2,10);	
		if (i < 10) {
		clearInterval(timerId);
	} 

        e.preventDefault()

	


    }, false);


 	box.addEventListener('touchmove', function(e) {
	i = document.getElementById('timer_inp').innerHTML;
	if( i == 0){
	return;
	};
      
      	var touchobj = e.changedTouches[0];
      	var delta = parseInt(touchobj.clientY) - starty;
      	


		e.preventDefault();

		
		
	}, false)

 	box.addEventListener('touchend', function(e){
 		i = document.getElementById('timer_inp').innerHTML;
	if( i == 0){
	return;
	};
 		var touchobj = e.changedTouches[0];
      	var delta = parseInt(touchobj.clientY) - starty;
      	var info = document.getElementById('delta');
		info.innerHTML = +info.innerHTML + Math.round(delta*0.00759);


		

      	e.preventDefault();

 	}, false)

 	box.addEventListener('touchmove', function(e) {
 		var x = document.getElementById('delta').innerHTML;
	if (x < 0) {
	document.getElementById('stupid').innerHTML = "<br>Scroll DOWN!";
	document.getElementById('delta').style.fontSize = "40px";
	document.getElementById('stupid').style.fontSize = "40px";
	document.getElementById('stupid').style.color = "red";
}	else if (x < 50) {
	document.getElementById('delta').style.color = "black";
	document.getElementById('delta').style.fontSize = "60px"
	document.getElementById('stupid').innerHTML = "cm";
	document.getElementById('stupid').style.fontSize = "16px"
	document.getElementById('stupid').style.color = "black";
} 	else if (x < 100) {
	document.getElementById('delta').style.color = "green";
	document.getElementById('delta').style.fontSize = "70px";
}	else if (x < 150) { 
	document.getElementById('delta').style.color = "blue";
	document.getElementById('delta').style.fontSize = "80px";
}	else if (x < 200) {
	document.getElementById('delta').style.color = "palevioletred";
	document.getElementById('delta').style.fontSize = "90px";
}	else if (x < 250) {
	document.getElementById('delta').style.color = "dodgerblue";
	document.getElementById('delta').style.fontSize = "100px";
}	else if (x < 300) {
	document.getElementById('delta').style.color = "darkorange";
	document.getElementById('delta').style.fontSize = "110px";
}	else if (x < 350)  {
	document.getElementById('delta').style.color = "gold";
	document.getElementById('delta').style.fontSize = "120px";
}	else if (x < 400)  {
	document.getElementById('delta').style.color = "turquoise";
	document.getElementById('delta').style.fontSize = "130px";
}	else if (x < 450)  {
	document.getElementById('delta').style.color = "orchid";
	document.getElementById('delta').style.fontSize = "140px";
}	else if (x < 500) {
	document.getElementById('delta').style.color = "OrangeRed";
	document.getElementById('delta').style.fontSize = "150px";
}	else if (x < 550) {
	document.getElementById('delta').style.color = "Indigo";
	document.getElementById('delta').style.fontSize = "160px";
}	else if (x < 600)  {
	document.getElementById('delta').style.color = "BlueViolet";
	document.getElementById('delta').style.fontSize = "170px";
}	else if (x < 650)  {
	document.getElementById('delta').style.color = "ForestGreen";
	document.getElementById('delta').style.fontSize = "180px";
}	else  {
	document.getElementById('delta').style.color = "red";
	document.getElementById('delta').style.fontSize = "190px";
}	

		
 	}, false)
}, false)
   

	// TIMER
	var isCall = false;
	function timer2() {
	if (!isCall) {
		timer();
		isCall = true;
	}
}
	function timer() {
var obj=document.getElementById('timer_inp');
 	obj.innerHTML--; 
 
 	if(obj.innerHTML==0){;setTimeout(function(){},1000);}
	else{setTimeout(timer,1000);}

};
	










//Spirit animal

function spiritAnimal() {
	var imag = document.getElementById('spirit');
	var x = document.getElementById('delta').innerHTML;
	document.getElementById('how').style.fontSize = '40px';
	if (x < 0) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/morty.png";
}	else if (x == 0) {
	document.getElementById('how').innerHTML = "";
	imag.src = "img/tina.png";
}	else if (x == 7) {
	document.getElementById('how').innerHTML = "wubalubadubdub!!<br>";
	imag.src = "img/rick.png";
}	else if (x < 10) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/shell.png";
}	else if (x < 20) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/worm.png";
}	else if (x < 30) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/worm2.png";
}	else if (x < 40) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/snail.png";
}	else if (x < 50) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/snail2.png";
}	else if (x < 60) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cutterpilar.png";
}	else if (x < 70) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cutterpilar3.png";
}	else if (x < 80) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cutterpilar2.png";
}	else if (x < 90) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bug4.png";
}	else if (x < 100) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bug3.png";
}	else if (x == 100) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/iron.png";
}	else if (x < 110) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bug5.png";
}	else if (x < 120) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bug2.png";
}	else if (x < 130) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bug.png";
}	else if (x < 140) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/beatle4.png";
}	else if (x < 150) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/beatle6.png";
}	else if (x < 160) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/beatle2.png";
}	else if (x < 170) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/beatle3.png";
}	else if (x < 180) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/beatle.png";
}	else if (x < 190) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/spider.png";
}	else if (x < 200) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/spider2.png";
}	else if (x < 210) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/mouse.png";
}	else if (x < 220) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/mouse2.png";
}	else if (x < 230) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fly.png";
}	else if (x < 240) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cockroack.png";
}	else if (x < 250) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bogomol.png";
}	else if (x < 260) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bee.png";
}	else if (x < 270) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bee2.png";
}	else if (x < 280) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish2.png";
}	else if (x < 290) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish7.png";
}	else if (x < 300) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish6.png";
}	else if (x < 310) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish4.png";
}	else if (x < 320) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish8.png";
}	else if (x < 330) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish9.png";
}	else if (x < 340) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish.png";
}	else if (x < 350) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fish3.png";
}	else if (x < 360) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fishbird.png";
}	else if (x < 370) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/frog.png";
}	else if (x < 380) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/frog2.png";
}	else if (x < 390) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/toad.png";
}	else if (x < 400) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/meduza.png";
}	else if (x == 404) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br> not found<br>";
	imag.src = "";
}	else if (x < 410) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cancer2.png";
}	else if (x < 420) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cancer.png";
}	else if (x < 430) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/lobster.png";
}	else if (x < 440) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/lizzard.png";
}	else if (x < 450) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/lizzard2.png";
}	else if (x < 460) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/octo.png";
}	else if (x < 470) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/beaver.png";
}	else if (x < 480) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bird.png";
}	else if (x < 490) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bird2.png";
}	else if (x < 500) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bird4.png";
}	else if (x < 510) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bird5.png";
}	else if (x < 520) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bird6.png";
}	else if (x < 530) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bird3.png";
}	else if (x < 540) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bird7.png";
}	else if (x < 550) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/butterfly.png";
}	else if (x < 560) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/chinen.png";
}	else if (x == 567) {
	document.getElementById('how').innerHTML = "I am your spirit father, i mean, animal<br>";
	imag.src = "img/vader.png";
}	else if (x < 570) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/chicken.png";
}	else if (x < 580) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dodo.png";
}	else if (x < 590) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dodo2.png";
}	else if (x < 600) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dodo3.png";
}	else if (x < 610) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dodo4.png";
}	else if (x < 620) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/duck.png";
}	else if (x < 630) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/duckface.png";
}	else if (x < 640) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/goose.png";
}	else if (x < 650) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/kiwi.png";
}	else if (x < 660) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/parrot.png";
}	else if (x == 666) {
	document.getElementById('how').innerHTML = "Why you so serious?<br>";
	imag.src = "img/joke.png";
}	else if (x < 670) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/parrot2.png";
}	else if (x < 680) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/parrot4.png";
}	else if (x < 690) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/parrot5.png";
}	else if (x < 700) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/parrot3.png";
}	else if (x < 710) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/vydra.png";
}	else if (x < 720) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/turkey.png";
}	else if (x < 730) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/sterv.png";
}	else if (x < 740) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/swan.png";
}	else if (x < 750) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/snake.png";
}	else if (x < 760) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/snake2.png";
}	else if (x < 770) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/snake2.png";
}	else if (x == 777) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/finn.png";
}	else if (x == 778) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/jake.png";
}	else if (x < 780) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/snake3.png";
}	else if (x < 790) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/snake4.png";
}	else if (x < 800) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/squid.png";
}	else if (x < 810) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/squid2.png";
}	else if (x < 820) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/something3.png";
}	else if (x < 830) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/something.png";
}	else if (x < 840) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/something2.png";
}	else if (x < 850) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/squirell.png";
}	else if (x < 860) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/squirell2.png";
}	else if (x < 870) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/racoon.png";
}	else if (x < 880) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/rabbit.png";
}	else if (x < 890) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/hare.png";
}	else if (x < 900) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/hameleon.png";
}	else if (x < 910) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/homyak.png";
}	else if (x < 920) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/goat.png";
}	else if (x < 930) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/goat2.png";
}	else if (x < 940) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/antEater.png";
}	else if (x < 950) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/antEater.png";
}	else if (x < 960) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bat.png";
}	else if (x < 970) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dyatel.png";
}	else if (x < 980) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/leleka.png";
}	else if (x < 990) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/leleka2.png";
}	else if (x < 999) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/starfish.png";
}	else if (x == 1000) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cptAmerica.png";
}	else if (x < 1010) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/pelikan.png";
}	else if (x < 1020) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/penguin.png";
}	else if (x < 1030) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/scorpio.png";
}	else if (x < 1040) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/pig.png";
}	else if (x < 1050) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/raven.png";
}	else if (x < 1060) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/tulen.png";
}	else if (x < 1070) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/pavlin.png";
}	else if (x < 1080) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/hog.png";
}	else if (x < 1090) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dog.png";
}	else if (x < 1090) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dog2.png";
}	else if (x < 1100) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dog3.png";
}	else if (x < 1110) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dog4.png";
}	else if (x < 1120) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dog5.png";
}	else if (x < 1130) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dog6.png";
}	else if (x < 1140) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/baran.png";
}	else if (x < 1150) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dingo.png";
}	else if (x < 1160) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/donkey.png";
}	else if (x < 1170) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/hyena.png";
}	else if (x < 1180) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/flamingo.png";
}	else if (x < 1190) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/emo.png";
}	else if (x < 1200) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/morzh2.png";
}	else if (x < 1210) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/horek.png";
}	else if (x < 1220) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/geerafe.png";
}	else if (x < 1230) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/hypo.png";
}	else if (x < 1240) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fox3.png";
}	else if (x < 1250) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fox2.png";
}	else if (x < 1260) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/fox.png";
}	else if (x < 1270) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/koala.png";
}	else if (x < 1280) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/limur.png";
}	else if (x < 1290) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bull.png";
}	else if (x < 1300) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bull3.png";
}	else if (x < 1310) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bull2.png";
}	else if (x < 1320) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/croco.png";
}	else if (x < 1330) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/deer.png";
}	else if (x < 1340) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/deer2.png";
}	else if (x < 1350) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/deer3.png";
}	else if (x < 1360) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/zebra.png";
}	else if (x < 1370) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/waterHorse.png";
}	else if (x < 1380) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/whale3.png";
}	else if (x < 1390) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/whale.png";
}	else if (x < 1400) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/whale2.png";
}	else if (x < 1410) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/skat.png";
}	else if (x < 1420) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/nosorig.png";
}	else if (x < 1430) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cangoo.png";
}	else if (x < 1440) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/camel.png";
}	else if (x < 1450) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/cat.png";
}	else if (x < 1460) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/eagle2.png";
}	else if (x < 1470) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/eagle.png";
}	else if (x < 1480) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/leopard2.png";
}	else if (x == 1488) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/nazi.png";
}	else if (x < 1490) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/tiger.png";
}	else if (x < 1500) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/panther.png";
}	else if (x < 1510) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/leopard.png";
}	else if (x < 1520) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/ape3.png";
}	else if (x < 1530) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/ape4.png";
}	else if (x < 1540) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/babun.png";
}	else if (x < 1550) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/ape2.png";
}	else if (x < 1560) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/ape.png";
}	else if (x < 1570) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bear.png";
}	else if (x < 1580) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/shark.png";
}	else if (x < 1590) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/bear2.png";
}	else if (x < 1600) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/elephant.png";
}	else if (x < 1610) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/elephant2.png";
}	else if (x < 1620) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/horse.png";
}	else if (x < 1630) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/wolf.png";
}	else if (x < 1640) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/tiger2.png";
}	else if (x < 1650) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/turtle2.png";
}	else if (x < 1660) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dino4.png";
}	else if (x < 1670) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dino6.png";
}	else if (x < 1680) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dino5.png";
}	else if (x < 1690) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dino2.png";
}	else if (x < 1700) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dino3.png";
}	else if (x < 1710) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dino.png";
}	else if (x < 1720) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dolphin.png";
}	else if (x < 1730) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/leon.png";
}	else if (x < 1740) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/leon.png";
}	else if (x < 1750) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/moose.png";
}	else if (x < 1760) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/lama.png";
}	else if (x < 1770) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/owl.png";
}	else if (x < 1780) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/wolf2.png";
}	else if (x < 1790) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/panda.png";
}	else if (x < 1800) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/turtle.png";
}	else if (x < 1810) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/pegasus.png";
}	else if (x < 1820) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/twoHead.png";
}	else if (x < 1830) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/pegasus2.png";
}	else if (x < 1840) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/dragon.png";
}	else if (x < 1850) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/unicorn.png";
}	else if (x < 1860) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/trex.png";
}	else if (x == 1938) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/superman.png";
}	else if (x == 1939) {
	document.getElementById('how').innerHTML = "Your spirit animal is...<br>";
	imag.src = "img/batman.png";
}	else if (x == 1984) {
	document.getElementById('how').innerHTML = "Your spirit animal is watching you<br>";
	imag.src = "img/bigBrother.png";
}	else if (x == 2000) {
	document.getElementById('how').innerHTML = "The scroll is strong with you<br>";
	imag.src = "img/yoda.png";
}	else if (x == 8888) {
	document.getElementById('how').innerHTML = "Sponsor of your spirit animal is free spinning wheel. Free spinning wheel - scroll to infinite!<br>";
	imag.src = "img/infinity.png";
}else {
	document.getElementById('how').innerHTML = "You are probably cheating... <br>DISQUALIFIED<br>";
}		













}
function perevirka() {
i = document.getElementById('timer_inp').innerHTML;
if ( i == 0) {
	spiritAnimal();
}
}

setInterval(perevirka,1000);



	
	//ZOOM

	window.onwheel = function colorize() {
	i = document.getElementById('timer_inp').innerHTML;
	var x = document.getElementById('delta').innerHTML;		
	var timerId = setTimeout(timer2,10);
	if (i < 10) {
		clearInterval(timerId);
	
	} 

	var x = document.getElementById('delta').innerHTML;
	
	if (x < 0) {
	document.getElementById('stupid').innerHTML = "<br>Scroll DOWN!";
	document.getElementById('delta').style.fontSize = "40px";
	document.getElementById('stupid').style.fontSize = "40px";
	document.getElementById('stupid').style.color = "red";
}	else if (x < 50) {
	document.getElementById('delta').style.color = "black";
	document.getElementById('delta').style.fontSize = "60px"
	document.getElementById('stupid').innerHTML = "cm";
	document.getElementById('stupid').style.fontSize = "16px"
	document.getElementById('stupid').style.color = "black";
} 	else if (x < 100) {
	document.getElementById('delta').style.color = "green";
	document.getElementById('delta').style.fontSize = "70px";
}	else if (x < 150) { 
	document.getElementById('delta').style.color = "blue";
	document.getElementById('delta').style.fontSize = "80px";
}	else if (x < 200) {
	document.getElementById('delta').style.color = "palevioletred";
	document.getElementById('delta').style.fontSize = "90px";
}	else if (x < 250) {
	document.getElementById('delta').style.color = "dodgerblue";
	document.getElementById('delta').style.fontSize = "100px";
}	else if (x < 300) {
	document.getElementById('delta').style.color = "darkorange";
	document.getElementById('delta').style.fontSize = "110px";
}	else if (x < 350)  {
	document.getElementById('delta').style.color = "gold";
	document.getElementById('delta').style.fontSize = "120px";
}	else if (x < 400)  {
	document.getElementById('delta').style.color = "turquoise";
	document.getElementById('delta').style.fontSize = "130px";
}	else if (x < 450)  {
	document.getElementById('delta').style.color = "orchid";
	document.getElementById('delta').style.fontSize = "140px";
}	else if (x < 500) {
	document.getElementById('delta').style.color = "OrangeRed";
	document.getElementById('delta').style.fontSize = "150px";
}	else if (x < 550) {
	document.getElementById('delta').style.color = "Indigo";
	document.getElementById('delta').style.fontSize = "160px";
}	else if (x < 600)  {
	document.getElementById('delta').style.color = "BlueViolet";
	document.getElementById('delta').style.fontSize = "170px";
}	else if (x < 650)  {
	document.getElementById('delta').style.color = "ForestGreen";
	document.getElementById('delta').style.fontSize = "180px";
}	else  {
	document.getElementById('delta').style.color = "red";
	document.getElementById('delta').style.fontSize = "190px";
}						
}

	


//kongregate


var bool = true;
function kongregated() {
	if (bool == true) {
	var altId = document.getElementById("myImg").alt;
	
	if (altId == 88) {
		var highScore = document.getElementById("delta").innerHTML;
		kongregate.stats.submit("HighScore",highScore);
		bool = false;
	}
	
}
}
setInterval(kongregated,1000);

 