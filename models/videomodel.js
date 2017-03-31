const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
  youtubeId: String,
  speaker: String,
  mitAffiliation: String,
  mitCourse: String,
  promptString: String,
  date: Date,
  upvotes: Number,
  newQuestion: String,
  tweetSummary: String
});


// Create database model
const Video = mongoose.model('Videos', videoSchema);


// Define prompts
const mostExcitingThing = "What is the most exciting thing you are working on these days?";
const challengeInWork = "What is a current challenge in your work?";
const weekendPlans = "What are you looking forward to this weekend?";

const prompts = [mostExcitingThing, challengeInWork, weekendPlans];


// generate fake data using existing youtube videos
// const videoDocs = []
// const youtubeids = ['Z5Br4naeHgY', 'AzbOK1s2jHw', 'JbY35vmghQ8', 'K4mC-eM_cAs', 'RqCa8cVPKyY',
//     'FpoOxVK2Kpo', 'hFt1Mhw9Mec', 'sjpo6evoAL8', 'J_lm896IzpU', 'BhsOj5p1YIY', 'rjaGlE8tgKk', 'SHf5gpFp5ps']

// const speakers = ['Rachel', 'Katrine', 'Harini', 'Rue'];

// for (var i = 0; i < youtubeids.length; i ++) {
//     var newVideo = new Video({
//       youtubeId: youtubeids[i],
//       speaker: sampleArray(speakers),
//       promptString: sampleArray(prompts),
//       upvotes: 0
//     });
//     videoDocs.push(newVideo);
// };

// console.log(videoDocs);


// Video.collection.insert(videoDocs, onInsert);

function onInsert(err, docs) {
  if (err) {
    // TODO: handle error
  } else {
    // TODO:
  }
};

function sampleArray(array) {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = Video;