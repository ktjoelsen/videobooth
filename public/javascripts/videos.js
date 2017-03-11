
var data = {
  amount: 3,
  currency: 2,
  source: 3,
  description: 4
};


$('#videos-test').click(function() {
	console.log('clicked button');

	$.get('/videos', data); // PASS THE DATA AS THE SECOND PARAMETER
    // .success(
    //     function(success){
    //         console.log(success)
    //     })
    // .error (
    //     function(error) {
    //         console.log(error)
    //     });
});

