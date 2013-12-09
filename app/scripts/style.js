$(document).ready(function(){
	var clockHalfWidth = parseInt($(".clock").css('width')) / 2;
	var clockHalfHeight = parseInt($(".clock").css('height')) / 2;
	$(".clock").css('margin-left', -clockHalfWidth + "px");
	$(".clock").css('margin-top', -clockHalfHeight + "px");
});