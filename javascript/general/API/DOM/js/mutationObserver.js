window.onload = function(){
  var target = document.querySelector('#target');
   
  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log(mutation.type);
    });
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, 
    characterData: true  };
  // pass in the target node, as well as the observer options
  observer.observe(target, config);
  // later, you can stop observing
  //observer.disconnect();
  let newElement = document.createElement('p');
  newElement.textContent = "marcell";
  target.appendChild(newElement);
  setTimeout(function(){
    let anotherElement = document.createElement('p');
    anotherElement.textContent = "monteiro";
    target.appendChild(anotherElement);
  }, 5000);
}


