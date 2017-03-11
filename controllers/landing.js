
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
	console.log('in index');
  res.render('landing', {
    title: 'We are MIT'
  });
};