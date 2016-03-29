$(document).ready(function(){
	
$(".button-contact").click(function(event){
		event.preventDefault();
			var goTopposition = $(".contact").offset().top;
			$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

	});


	$(".button-home").click(goTosplash);
	$(".button-projects").click(goToprojects);
	$(".button-about").click(goToabout);

	window.sr = ScrollReveal();
	sr.reveal('.content-holder', 
		{duration:1500, reset:true, origin:'top', distance:'50px'});
	sr.reveal('.description', {duration:2500, delay:2000});
	sr.reveal('.project-item', {duration:2000}, 100);







});

function goTosplash (event){
	event.preventDefault();
	var goTopposition = $(".splash").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}

function goToabout (event){
	event.preventDefault();
	var goTopposition = $(".about").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}

function goToprojects (event){
	event.preventDefault();
	var goTopposition = $(".projects").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}