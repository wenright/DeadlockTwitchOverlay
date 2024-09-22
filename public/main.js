const browser = require('webextension-polyfill');

const extensionOrigin = browser.runtime.getURL('');

setTimeout(() => {
  // Create an iframe and inject it into the page
  const iframe = document.createElement('iframe');
  iframe.src = browser.runtime.getURL('index.html');
  iframe.scrolling = 'no';
  iframe.style.position = 'relative';
  iframe.style.width = '100%';
  iframe.style.height = 'calc(100% - 48px)';
  iframe.style.marginBottom = '48px';
  iframe.style.zIndex = '9999';
  iframe.style.border = '0px';
  iframe.style.overflow = 'hidden';
  iframe.id = 'deadlock-items-iframe';

  // Send a message to the iframe after it has loaded
  iframe.onload = function () {
    console.log('iframe loaded');

    window.addEventListener('message', (event) => {
      if (event.origin !== extensionOrigin.slice(0, -1)) {
        console.warn('parent: unexpected origin - ' + event.origin);
        return;
      }

      if (event.data === 'requestFrame') {
        const frameData = pullFrame();
        // TODO targetOrigin
        iframe.contentWindow.postMessage(frameData, '*');
      }
    });
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
  
  const pullFrame = () => {
    console.log('refreshing');
    context.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
    const frameData = canvas.toDataURL('image/png');

    return frameData;
  }
}, 3000);  
