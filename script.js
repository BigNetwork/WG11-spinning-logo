/*	
	Rays, inspired by:
	http://davidwalsh.name/javascript-spin
	and
	http://codesnipp.it/code/1493
*/

// Detect the browser:
var cssPrefix = false;
if($.browser.webkit){
	cssPrefix = "webkit";
}
if($.browser.mozilla){
	cssPrefix = "moz";
}
if($.browser.opera){
	cssPrefix = "o";
}
if($.browser.msie){
	cssPrefix = "ms";
}

// Spin them rays!
if(cssPrefix) { // if no error with $.browser
	//var rays = document.getElementById("rays"), degrees = 0, speed = 0.25;
	var rays = $('#rays'), degrees = 0, speed = 1.08;
	setInterval(function() {
		degrees += speed; // degree adjustment each interval
		//rays.setAttribute("style","-" + cssPrefix + "-transform:rotate(" + degrees + "deg)");
		rays.css("-" + cssPrefix + "-transform", "rotate(" + degrees + "deg)");
	},20);
}