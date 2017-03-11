var vid = document.getElementById("bgvid");
$("#vidpause").click(function(){vid.paused?vid.play():vid.pause();});

function pause() {
	var vid = document.getElementById("bgvid");
	vid.paused?vid.play():vid.pause();
}


// var vid = document.getElementById("bgvid"),
// pauseButton = document.getElementById("vidpause");
// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

// pauseButton.addEventListener("click", function() {
//     vid.classList.toggle("stopfade");
// 	if (vid.paused) {
// 		vid.play();
// 		pauseButton.innerHTML = "Pause";
// 	} else {
//         vid.pause();
//         pauseButton.innerHTML = "Paused";
// 	}
// })
