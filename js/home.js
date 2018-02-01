
$(document).ready(function(){
var navbar = document.getElementById("myTopnav");

var sticky = navbar.offsetTop;

function stickyNavFunction(){
	if(window.pageYOffset >= sticky){
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

window.onscroll = function() {
	stickyNavFunction()
};

});

function myFunction(){
	var x =document.getElementById("myTopnav");
	if(x.className === "topnav"){
		x.className += " responsive";	
	}
	else {
		x.className = "topnav";	
	}
}