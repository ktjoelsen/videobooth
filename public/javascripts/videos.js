
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("questionSlideShow");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 4000); 
}


// var data = {
//   amount: 3,
//   currency: 2,
//   source: 3,
//   description: 4
// };


// $('#videos-test').click(function() {
// 	console.log('clicked button');

// 	$.get('/videos', data); // PASS THE DATA AS THE SECOND PARAMETER
//     // .success(
//     //     function(success){
//     //         console.log(success)
//     //     })
//     // .error (
//     //     function(error) {
//     //         console.log(error)
//     //     });
// });

