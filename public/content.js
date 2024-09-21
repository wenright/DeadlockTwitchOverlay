// const browser = require('webextension-polyfill');

console.log('content loaded 56478126031');

// Create an iframe and inject it into the page
const iframe = document.createElement('iframe');
iframe.src = browser.runtime.getURL('index.html');
iframe.style.position = 'fixed';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.zIndex = '9999';
iframe.id = 'my-react-iframe';

const videoPlayer = document.querySelector('video')
document.body.appendChild(videoPlayer);

if (!videoPlayer) {
  console.error('Video player not found');
}

const canvas = document.createElement('frame-canvas')
const context = canvas.getContext('2d');
canvas.width = videoPlayer.width;
canvas.height = videoPlayer.height;

const refresh = () => {
  context.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
  const frameData = canvas.toDataUrl('image/png');

  console.log('Current frame: ');
  console.log(frameData);
}

// Send a message to the iframe after it has loaded
iframe.onload = function () {
  const data = { message: 'Hello from content.js!' }; // Example data
  iframe.contentWindow.postMessage(data, '*'); // Send data to the iframe
};


