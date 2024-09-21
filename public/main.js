const browser = require('webextension-polyfill');

console.log('content loaded 56478126031');

// Create an iframe and inject it into the page
const iframe = document.createElement('iframe');
iframe.src = browser.runtime.getURL('index.html');
iframe.style.position = 'absolute';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.zIndex = '9999';
iframe.id = 'my-react-iframe';

const videoPlayer = document.querySelector('video');
videoPlayer.crossOrigin = 'anonymous';
videoPlayer.load();

if (!videoPlayer) {
  console.error('Video player not found');
}

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.opacity = '0%';
const context = canvas.getContext('2d');
canvas.width = videoPlayer.videoWidth;
canvas.height = videoPlayer.videoHeight;

const refresh = () => {
  console.log('refreshing');
  context.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
  console.log(canvas);
  const frameData = canvas.toDataURL('image/png');

  console.log('Current frame: ');
  console.log(frameData);
}

setInterval(() => {
  refresh();
}, 5000);

// Send a message to the iframe after it has loaded
// iframe.onload = function () {
//   // const data = { message: 'Hello from content.js!' }; // Example data
//   // iframe.contentWindow.postMessage("fdsa", 'https://www.twitch.tv'); // Send data to the iframe
//   console.log('iframe loaded');
// };


