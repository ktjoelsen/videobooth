var express = require('express');
var router = express.Router();
const embed = require('embed-video');

var Videos = require('../models/videomodel');


/* GET specific video */
router.get('/:videoid', function(req, res, next) {
	var videoid = req.params.videoid;
  
  Videos.findOne( {'_id': videoid}, function(err, video) {
    
    res.render('singlevideo', { 
      title: 'We are MIT',
      video: video,
      helpers: {
        embedYoutube: function(options) {
          return '<iframe src="https://www.youtube.com/embed/' + 
            this.video.youtubeId + '?autoplay=1" frameborder="0" allowfullscreen ></iframe>';
        }
      }
    });

  });
});


router.get('/:videoid/upvote', function(req, res, next) {
	var videoid = req.params.videoid;
	console.log('received request to upvote ' + videoid);

	// check that this user has not already upvoted this video
  // TODO
	
  // if user hasn't already upvoted the video
  Videos.findOne( {'_id': videoid}, function(err, video) {
    video.upvotes++;
    video.save();
  });

  // specify that user has now voted
  // TODO

	res.end('\n');

});

module.exports = router;
