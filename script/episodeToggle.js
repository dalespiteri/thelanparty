$('#episodesLink button, #backButton').click(function () {
	$('.currentEpisode').toggleClass('leftOffscreen');
	$('.episodeListcontainer').toggleClass('offscreenLeft');
});

$('.episodeListLink').click(function() {
	$(this).next('div').slideToggle(200);
});

//Episode List Slides//

$('.epLink').click(function() {
  $('.episodePic').removeClass('visibleLeft');
  $('.episodeDes').removeClass('visibleRight');
});

$('#ep12link').click(function() {
  $('#episode12des').addClass('visibleRight');
  $('#episode12pic').addClass('visibleLeft');
});

$('#ep11link').click(function() {
  $('#episode11des').addClass('visibleRight');
  $('#episode11pic').addClass('visibleLeft');
});

$('#ep10link').click(function() {
  $('#episode10des').addClass('visibleRight');
  $('#episode10pic').addClass('visibleLeft');
});