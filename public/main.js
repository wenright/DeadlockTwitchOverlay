const browser = require('webextension-polyfill');

const iframeElementName = 'deadlock-items-iframe';

function injectOverlay() {
  console.log('Loading Deadlock Item Inspector overlay');
  
  const extensionOrigin = browser.runtime.getURL('');
  
  const videoPlayer = document.querySelector('video');
  
  if (!videoPlayer) {
    console.error('Video player not found');
  }
  
  const iframe = document.createElement('iframe');
  iframe.id = iframeElementName;
  iframe.src = browser.runtime.getURL('index.html');
  iframe.style.position = 'absolute';
  iframe.style.bottom = '0';
  iframe.style.marginBottom = '48px';
  iframe.style.border = '0px';
  iframe.style.overflow = 'hidden';

  iframe.style.width = '256px';
  iframe.style.height = '64px';
  iframe.onmouseenter = () => {
    iframe.style.width = '100%';
    iframe.style.height = '100%';
  }
  iframe.onmouseleave = () => {
    iframe.style.width = '256px';
    iframe.style.height = '64px';
  }
  
  // Send a message to the iframe after it has loaded
  iframe.onload = function () {
    window.addEventListener('message', (event) => {
      if (event.origin !== extensionOrigin.slice(0, -1)) {
        console.warn('parent: unexpected origin - ' + event.origin);
        return;
      }
      
      if (event.data === 'requestFrame') {
        const frameData = pullFrame();
        iframe.contentWindow.postMessage(frameData, '*');
      }
    });
  };
  
  videoPlayer.parentElement.appendChild(iframe);
  
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.display = 'none';
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
    // Delete existing iframe
    const existingIframe = document.querySelector(`#${iframeElementName}`);
    if (existingIframe) {
      existingIframe.remove();
    }
    
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
