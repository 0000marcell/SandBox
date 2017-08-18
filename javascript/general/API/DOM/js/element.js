// attributes returns a object with the attributes
// classList returns a array with the classes
// id 
// innerHTML
// outerHTML
// tagName 
// addEventListener type, event or function, options
// dispatchEvent event
// getAttribute 
// getBoundingClientRect
// getElementsByClassName
// getElementsByTagName
// hasAttribute attrName
// hasAttributes return true if the element has attributes
// querySelector 
// querySelectorAll
// removeAttribute
// removeEventListener the parameters have to be the same 
//                     ones that you created the event
// setAttribute

function clickRect(){
  alert('click rect!');
}

function addEvent(){
  alert('add event!');
  document.querySelector('#div-1')
    .addEventListener('click', clickRect);
}

function removeEvent(){
  alert('remove event!');
  document.querySelector('#div-1')
    .removeEventListener('click', clickRect);
}

document.onreadystatechange = function (){
  if(document.readyState === 'complete'){
    let elem = document.querySelector('p'),
        div = document.querySelector('div'),
        input = document.querySelector('input'),
        rec = document.querySelector('#div-1');
    console.log('attributes: ', elem.attributes);
    console.log('classes: ', elem.classList);
    console.log('innerHTML: ', div.innerHTML);
    console.log('tagName: ', div.localName);
    input.addEventListener('focus', function (){
      console.log('focus!');
    });
    input.dispatchEvent(new Event('focus'));
    console.log('id: ', elem.getAttribute('id'));
    console.log('rec height: ', rec.getBoundingClientRect().height);
    console.log('hasAttribute: ', rec.hasAttribute('id'));
    console.log('hasAttributes: ', rec.hasAttributes());
    console.log('querySelectorAll: ', 
      document.querySelectorAll('div'));
  }
}
