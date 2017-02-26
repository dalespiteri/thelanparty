$('#episodesLink button').click(function () {
	$('.currentEpisode').toggleClass('leftOffscreen');
	$('.episodeList').toggleClass('offscreenLeft');
});

$('.episodeListLink').click(function() {
	$(this).next('div').slideToggle(200);
});