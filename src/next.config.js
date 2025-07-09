// next.config.js
const withVideos = require('next-videos');
const withImages = require('next-images');

// Handle import for videos
module.exports = withVideos(withImages({
  async headers() {
    return [
      {
        source: '/video.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}));
