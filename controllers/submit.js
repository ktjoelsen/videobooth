var express = require('express');
var router = express.Router();

var Video = require('../models/videomodel');

/*
 * Controller that receives information about submitted youtube videos
 * Updates the database with this new information
 *
 *
 */

 router.get('/', function(req, res, next) {

      Video.find({}).sort({date: 'desc'}).exec(function (err, videos) {

        // handle error
        if (err) return console.error(err);

        // iterate over videos to get all unique questions
        var questions = [];
        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];
            console.log(video);

            if (questions.indexOf(video.promptString)) {
                questions.push(video.promptString);
            };
            if (video.newQuestion != null) {
              if (questions.indexOf(video.newQuestion) == -1) {
                questions.push(video.newQuestion);
              };
            };

        }
        console.log(questions);
        
        res.render('submit', {
          title: 'We are MIT',
          questions: questions
        });
      });

});



 router.post('/video', function(req, res, next) {
    
    var body = req.body;
    body.nextQuestion;
    
    var video = new Video({
        youtubeId: getYouTubeID(body.youtubeLink),
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

    res.render('finished_submission', {
        title: 'We are MIT'
    });

});



var getYouTubeID = function(youtubeLink) {
    var array = youtubeLink.split('=');
    var id = array[array.length - 1];
    return id;
};



module.exports = router;