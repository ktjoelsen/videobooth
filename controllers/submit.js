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
        var questions = [
            "What is your favorite MIT class and why?",
            "What advice would you give to incoming freshmen?"
        ];

        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];

            if (questions.indexOf(video.promptString) == -1 && video.promptString != "") {
                questions.push(video.promptString);
            };
            if (video.newQuestion != null) {
              if (questions.indexOf(video.newQuestion) == -1 && video.newQuestion != "") {
                questions.push(video.newQuestion);
              };
            };
        }
        
        
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
        dropboxLink: body.dropboxLink,
        speaker: body.kerberos,
        title: body.title,
        upvotes: body.upvotes,
        promptString: body.promptString,
        date: body.recordingDate,
        month: "2017-05",
        mitAffiliation: body.mitAffiliation,
        mitCourse: body.mitCourse,
        newQuestion: body.newQuestion,
        tweetSummary: body.tweetSummary
        
    });
    video.save(function(err) {
        if (err) console.log(err)
    });    

    res.render('finished_submission', {
        title: 'We are MIT'
    });

});



var getYouTubeID = function(youtubeLink) {
    var array;
    var id;
    if (youtubeLink.includes("youtu.be")) {
        array = youtubeLink.split("youtu.be/");
        id = array[array.length - 1];        
    } else if (youtubeLink.includes("youtube.com/watch")) {
        array = youtubeLink.split('=');
        id = array[array.length - 1];        
    } else {
        id = youtubeLink;
    }

    return id;
};




module.exports = router;