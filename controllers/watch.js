var express = require('express');
var router = express.Router();
const embed = require('embed-video');

var Video = require('../models/videomodel');



/* GET videos listing. */
router.get('/', function(req, res, next) {

	Video.find({}).sort({date: 'desc'}).exec(function (err, videos) {
		// handle error
		if (err) return console.error(err);

		var mayvideos = [];
		var aprilvideos = [];

		for (var i = 0;  i < videos.length; i++) {
			var video = videos[i];
			
			if (video.month == "2017-04") {
				aprilvideos.push(video);
			} else {
				mayvideos.push(video);
			}
		};


		

		res.render('watch', {
			title: 'We are MIT',
			aprilvideos: aprilvideos,
			mayvideos: mayvideos,
			helpers: {
				embedYoutubeImg: function(options) {
					return '<img src="https://img.youtube.com/vi/' + this.youtubeId + '/hqdefault.jpg" class="img-fluid"/>';
				},
				showIfEmpty:  function(options) {
					if (this.mayvideos.length == 0) {
						return "No video submissions for May yet.";
					};
				}
			}
		});
	});
});

module.exports = router;


