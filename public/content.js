// content.js

console.log('Content file has been loaded');

// Create a div element to serve as the React root
const appDiv = document.createElement('div');
appDiv.id = 'my-react-app-overlay';

// Style the div to make it an overlay
appDiv.style.position = 'fixed';
appDiv.style.top = '0';
appDiv.style.right = '0';
appDiv.style.width = '300px';
appDiv.style.height = '100%';
appDiv.style.zIndex = '9999';
appDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';

// Append the div to the body
document.body.appendChild(appDiv);

// Now we will dynamically load the React app into this div
const script = document.createElement('script');
script.src = chrome.runtime.getURL('build/static/js/main.cf3dd7c1.js');  // Adjust this path based on your build folder
document.body.appendChild(script);
