$(document).ready(function() {

//Intro Slides

$('.slideGoneUp').addClass('slideDown');
$('.slideGoneDown').addClass('slideUp');

//episode slide toggle

$('#episodesLink button, #backButton').click(function () {
	$('.currentEpisode').toggleClass('moveLeft');
	$('.episodeListContainer').toggleClass('offscreenLeft');
});

//cast slide toggle

$('#cast, #castClose').click(function () {
	$('.titleDiv').toggleClass('moveLeft');
	$('.castContainer').toggleClass('offscreenLeft');
});

//Episode List Slides

$('.epLink').click(function() {
  $('.episodePic').removeClass('active');
  $('.episodeDes').removeClass('active2');
});

$('#ep12link').click(function() {
  $('#episode12des').addClass('active2');
  $('#episode12pic').addClass('active');
  $('#episode12pic').appendTo($('.episodePicContainer'));
  $('#episode12des').appendTo($('.episodeDesContainer'));

});

$('#ep11link').click(function() {
  $('#episode11des').addClass('active2');
  $('#episode11pic').addClass('active');
  $('#episode11pic').appendTo($('.episodePicContainer'));
  $('#episode11des').appendTo($('.episodeDesContainer'));

});

$('#ep10link').click(function() {
  $('#episode10des').addClass('active2');
  $('#episode10pic').addClass('active');
  $('#episode10pic').appendTo($('.episodePicContainer'));
  $('#episode10des').appendTo($('.episodeDesContainer'));
});

//contact toggle

$('#contact')

	.mouseover(function() {
	$('#contact').text("contact@theLANparty.com");
	})

	.mouseleave(function() {
		$('#contact').text("contact");
	});

});