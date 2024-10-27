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
        const frameImageData = pullFrame();
        iframe.contentWindow.postMessage(frameImageData, '*')
      }
    });
  };
  
  videoPlayer.parentElement.appendChild(iframe);
  
  const canvas = new OffscreenCanvas(1920, 1080);
  const context = canvas.getContext('2d');
  
  const pullFrame = () => {
    // When video first loads, it's size is [0,0] so needs to be updated
    canvas.width = videoPlayer.videoWidth;
    canvas.height = videoPlayer.videoHeight;
    
    context.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  return iframe;
}

// When a user navigates to a new page, we want to conditionally inject the iframe if the game is set to Deadlock
// We know that we are at a new page, and the page has finished loading, if the game is set to something new
let existingIframe = null;
let previousGame = null;
const observer = new MutationObserver(function (mutations) {
  const newGame = document
    .querySelector('[data-a-target="stream-game-link"],[data-a-target="video-info-game-boxart-link"]')?.innerText;

  if (previousGame !== newGame) {
    previousGame = newGame;
    
    existingIframe?.remove();

    if (newGame?.includes('Deadlock')) {
      existingIframe = injectOverlay();
    }
  }
});
const config = { subtree: true, childList: true };
observer.observe(document, config);
