$(document).ready(function(){
	var clockWidth = parseInt($(".clock").css('width'));
	var clockHeight = parseInt($(".clock").css('height'));
	$(".clock").css('margin-left', -clockWidth/2 + "px");
	$(".clock").css('margin-top', -clockHeight/2 + "px");
	// $(".clock").css('left', "calc(50%-" + clockWidth/2 + "px)");
	// $(".clock").css('top', "calc(50%-" + clockHeight/2 + "px)");


	//fade in clock
	// $(".clock").css('margin-top', -=clockHeight/2 + "px") //set above
	// $(".clock").animate({
	// 	marginTop: +=clockHeight/2 + "px",
	// 	opacity: 1,
	// }, 1000);
});