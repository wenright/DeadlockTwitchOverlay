const browser = require('webextension-polyfill');

function injectOverlay() {
  console.log('Loading Deadlock Item Inspector overlay');
  
  const extensionOrigin = browser.runtime.getURL('');
  
  const videoPlayer = document.querySelector('video');
  
  if (!videoPlayer) {
    console.error('Video player not found');
  }
  
  const iframe = document.createElement('iframe');
  iframe.src = browser.runtime.getURL('index.html');
  iframe.style.position = 'relative';
  iframe.style.width = '100%';
  iframe.style.height = 'calc(100% - 48px)';
  iframe.style.marginBottom = '48px';
  iframe.style.zIndex = '9999';
  iframe.style.border = '0px';
  iframe.style.overflow = 'hidden';
  iframe.id = 'deadlock-items-iframe';
  console.log('loading iframe...', iframe);
  
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
  
  videoPlayer.parentElement.appendChild(iframe);
  
  console.log(videoPlayer.videoWidth, videoPlayer.videoHeight);
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.opacity = '0%';
  const context = canvas.getContext('2d');
  
  const pullFrame = () => {
    // When video first loads, it's size is [0,0] so needs to be updated
    canvas.width = videoPlayer.videoWidth;
    canvas.height = videoPlayer.videoHeight;
    
    context.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
    const frameData = canvas.toDataURL('image/png');
    
    return frameData;
  }
}

let onNewPage = true;
let previousUrl = '';
const observer = new MutationObserver(function (mutations) {
  if (window.location.href !== previousUrl) {
    previousUrl = window.location.href;
    onNewPage = true;
  }

  if (onNewPage) {
    const streamGame = document.querySelector('[data-a-target="stream-game-link"]');

    if (streamGame) {
      if (streamGame.innerHTML.includes('Deadlock')) {
        injectOverlay();
      }

      onNewPage = false;
    }
  }
});
const config = { subtree: true, childList: true };
observer.observe(document, config);
