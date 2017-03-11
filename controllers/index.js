var express = require('express');
var router = express.Router();


// middleware routes / controllers
router.use('/videos', require('./videos'));
router.use('/singlevideo', require('./singlevideo'));
router.use('/upload', require('./upload'));
router.use('/submit', require('./submit'));


// default routes
router.get('/', function(req, res, next) {
	// all concepts from model
	// res.render('home', {concepts: concepts});
	res.render('landing', {
		title: 'We are MIT'
	});
});

router.get('/about', function(req, res, next) {
	res.render('about', {
		title: 'We are MIT'
	});
});



router.get('/ask', function(req, res, next) {
    res.statusCode = 302;
    var google_form_url = 'https://docs.google.com/forms/d/e/1FAIpQLSfGHOq3UKNggSC6FIDFymgmzdggMdQY3IqF0nPXUgu32vt62w/viewform' 
    res.setHeader("Location", google_form_url);
    res.end();

});




module.exports = router