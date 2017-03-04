$('#episodesLink button, #backButton').click(function () {
	$('.currentEpisode').toggleClass('leftOffscreen');
	$('.episodeListcontainer').toggleClass('offscreenLeft');
});

$('.episodeListLink').click(function() {
	$(this).next('div').slideToggle(200);
});