import $ from "jquery";
import "popper.js";
import "bootstrap";

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});
