const browser = require('webextension-polyfill');

console.log('content loaded 56478126031');

setTimeout(() => {
  // Create an iframe and inject it into the page
  const iframe = document.createElement('iframe');
  iframe.src = browser.runtime.getURL('index.html');
  iframe.scrolling = 'no';
  iframe.style.position = 'relative';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.zIndex = '9999';
  iframe.style.border = '0px';
  iframe.style.overflow = 'hidden';
  iframe.id = 'deadlock-items-iframe';

  // Send a message to the iframe after it has loaded
  iframe.onload = function () {
    const data = { message: 'Hello from content.js!' }; // Example data
    // TODO use 'moz-extension://9e149a4c-c629-4ce7-a60d-fda89a425aae' for targetOrigin?
    iframe.contentWindow.postMessage(data, '*'); // Send data to the iframe
    console.log('iframe loaded');
  };
  
  const videoPlayer = document.querySelector('video');

  videoPlayer.parentElement.appendChild(iframe);
  
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
    const frameData = canvas.toDataURL('image/png');
  }
  
  setTimeout(() => {
    refresh();
  }, 3000);
}, 3000);  
