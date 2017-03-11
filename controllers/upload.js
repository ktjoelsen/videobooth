var express = require('express');
var router = express.Router();

var Video = require('../models/videomodel');

/*
 * Controller that receives information about newly uploaded videos from the videobooth
 * Updates the database with this new information
 *
 *
 */

router.post('/', function(req, res, next) {
	console.log(req.body);
	res.send(req.body);
	// res.send('testing page');
	var body = req.body
	var video = new Video({
		youtubeId: body.youtubeId,
		speaker: body.kerberos,
		title: body.title,
		upvotes: body.upvotes,
		promptString: body.promptString,
		date: body.recordingDate,
		mitAffiliation: body.mitAffiliation,
		mitCourse: body.mitCourse,
		newQuestion: body.newQuestion
	});
	video.save(function(err) {
		if (err) console.log(err)
	});

});


module.exports = router;