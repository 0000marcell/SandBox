// window - every tab is a new window
// applicationCache
// content
// frameElement, frames
// innerHeight innerWidth
// localStorage, sessionStorage expires when the window closes
// opener // reference of the window that opened the current window
// parent
// performance
// scrollX scrollY
// indexedDB
// open close
// find
// getComputedStyle only used to inspect, you want change use style
// getSelection
// print
// requestAnimationFrame
// scroll scrollTo
// stop
// postMessage post messages to other windows or iframes
// setTimeout clearTimeout
// setInterval clearInterval

function showSelection(){
  let selection = window.getSelection();
  alert(selection);
}

function animateImage(){
  var start = null;
  var element = document.getElementById('img');
  element.style.position = 'absolute';

  function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      element.style.left = Math.min(progress / 10, 200) + 'px';
    if (progress < 2000) {
          window.requestAnimationFrame(step);
        
    }

  }

  window.requestAnimationFrame(step);
}

window.onload = function (){
  console.log(window.applicationCache);
  let div = document.querySelector('#test-div')
  div.onclick = function() {
    div.style.backgroundColor = 
      div.style.backgroundColor === 'blue' ? 'red' : 'blue';
  }
}
