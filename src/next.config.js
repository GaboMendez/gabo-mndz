// next.config.js
const withVideos = require('next-videos');
const withImages = require('next-images');

// Handle import for videos
module.exports = withVideos(withImages());
