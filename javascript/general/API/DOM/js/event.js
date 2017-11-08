// event types
// -- event types
// CustomEvent
// DeviceLightEvent
// DeviceMotionEvent
// DragEvent
// ErrorEvent
// FocusEvent
// HashChangeEvent
// InputEvent
// keyboardEvent
// MessageEvent
// MouseEvent
// PopStateEvent
// ProgressEvent
// RTCEvents
// StorageEvent
// SVGEvent
// TouchEvent
// TransitionEvent
// UIEvent superclass of most simple events like MouseEvent
// WheelEvent

// Events
// bubbles
// cancelBubble
// currentTarget
// preventDefault // stops the default user agent action of the element
// stopPropagation // stop bubbling the action
// target // target where the element was originally fired
// type // name of the event
// isTrusted indicates if the event was initiated by the user or not

function changeHistory () {
  history.pushState({page: 1}, 'title 1', '?page=1');
  history.back();
}

window.onpopstate = function (e){
  alert(JSON.stringify(e.state)); 
}

window.onload = function(){
  document.body.addEventListener('keypress', function(e){
    console.log('key: ', e.key);
    console.log('code: ', e.code);
  });
  let inner = document.querySelector('#inner'),
      outer = document.querySelector('#outer');
  inner.addEventListener('cat', function(e){
    console.log('inner: ', e.detail);
  });
  outer.addEventListener('cat', function(e){
    console.log('target: ', e.target);
    console.log('currentTarget: ', e.currentTarget);
    console.log('outer: ', e.detail);
    console.log('isTrusted: ', e.isTrusted);
    e.cancelBubble = true;
  });
  let newEvent = new CustomEvent('cat', {
    detail: 'marcell',
    bubbles: true
  });
  inner.dispatchEvent(newEvent);
}
