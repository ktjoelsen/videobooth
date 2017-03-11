

// pass upvote request
$(document).on('click', '#video-upvote', function() {
  var pathname = window.location.pathname;
  var apiCall = pathname + '/upvote';
	$.get(apiCall); 
});


	