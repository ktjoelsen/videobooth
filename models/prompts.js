const mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
  youtubeId: String,
  speaker: String
});


var promptSchema = new mongoose.Schema({
  promptString: String,
  date: Date,
  videos: [videoSchema]
});


// Create database model
const Prompt = mongoose.model('Prompts', promptSchema);



// Define prompts
const mostExcitingThing = "What is the most exciting thing you are working on these days?";
const challengeInWork = "What is a current challenge in your work?";
const weekendPlans = "What are you looking forward to this weekend?";

// const promptDocs = [
// 	new Prompt({
// 		promptString: mostExcitingThing,
// 		date: new Date(),
// 		videos: [
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Rachel'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'}
// 		]
// 	}),	
// 	new Prompt({
// 		promptString: challengeInWork,
// 		date: new Date(),
// 		videos: [
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Rachel'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Rachel'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Rachel'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'}
// 		]
// 	}),
// 	new Prompt({
// 		promptString: weekendPlans,
// 		date: new Date(),
// 		videos: [
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Rachel'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Rachel'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Rachel'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'},
// 			{youtubeId: 'pf2OrzhK8ZY', speaker: 'Katrine'}
// 		]
// 	})

// ];


// Prompt.collection.insert(promptDocs, onInsert);

function onInsert(err, docs) {
  if (err) {
    // TODO: handle error
  } else {
    // TODO:
  }
}

module.exports = Prompt;