$(document).ready(function() {

//Intro Slides

$('.slideGoneUp').addClass('slideDown');
$('.slideGoneDown').addClass('slideUp');

//episode slide toggle

$('#episodesLink button, #episodeBackButton').click(function () {
	$('.currentEpisode').toggleClass('moveLeft');
	$('.episodeListContainer').toggleClass('offscreenLeft');
});

//cast slide toggle

$('#cast, #castBackButton').click(function () {
	$('.titleDiv').toggleClass('moveLeft');
	$('.castContainer').toggleClass('offscreenLeft');
  $('#castBackground').toggleClass('castBackgroundActive');
});
    
$('#cast').click(function() {
    $('#contactSlide').slideUp(50);
});

//contact toggle

$('#contact').click(function() {
   $('#contactSlide').slideToggle(200); 
});



//EPISODE LIST FUNCTIONS //

function openDropdown() {
  // Show the dropdown
  $('#episodeSelectMenu').toggleClass('hidden')
  
  // Listen for clicks on the document
  $(document).on('click', closeDropdown)
}

function closeDropdown(event) {
  // Get the jQuery version of the event.target element
  const target = $(event.target)
  
  // Make sure that the dropdown or button didn't get clicked
  if (!target.is('#episodeClickLink') ) {
    // Hide the dropdown
    $('#episodeSelectMenu').addClass('hidden')

    // Stop listening for clicks on the document
    $(document).off('click', closeDropdown)
  }
}


// Add the event listener we need to start with
$('#episodeClickLink').on('click', openDropdown)


//EPISODE LIST FUNCTIONS END//

//episode list episode switch

$('.epListItem').click(function() {
  $('.episode').removeClass('episodeActive');
});

function episodeSwitch(episodeListNumber, episodeID) {
  $(episodeListNumber).click(function() {
    $(episodeID).addClass('episodeActive');
  });
}

episodeSwitch('#ep12ListItem', '#episode12');
episodeSwitch('#ep11ListItem', '#episode11');
episodeSwitch('#ep10ListItem', '#episode10');
episodeSwitch('#ep9ListItem', '#episode9');
episodeSwitch('#ep8ListItem', '#episode8');
episodeSwitch('#ep7ListItem', '#episode7');
episodeSwitch('#ep6ListItem', '#episode6');
episodeSwitch('#ep5ListItem', '#episode5');
episodeSwitch('#ep4ListItem', '#episode4');
episodeSwitch('#ep3ListItem', '#episode3');
episodeSwitch('#ep2ListItem', '#episode2');
episodeSwitch('#ep1ListItem', '#episode1');

//cast background//



}); // close document ready

