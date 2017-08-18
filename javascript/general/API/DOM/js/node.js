// baseURI
// childNodes
// firstChild
// lastChild
// nextSibling
// parentElement
// appendChild
// cloneNode
// contains
// hasChildNodes
// insertBefore
// isEqualNode
// isSameNode
// normalize compact all textNode in the same node 
// removeChild
// replaceChild old, new

document.onreadystatechange = function(){
  if(document.readyState === 'complete'){
    let firstList = document.querySelector('#first-list'),
      secondList = document.querySelector('#second-list'),
      li = firstList.querySelector('.last-child').cloneNode(true);
    //childNodes returns all child nodes, including text nodes etc
    console.log('baseURI', firstList.baseURI);
    console.log('childrenNodes: ', firstList.childNodes);
    // firstChild 
    // lastChild 
    // nextSibling
    // ownerDocument
    console.log('ownerDocument: ', firstList.ownerDocument);
    // parentElement
    console.log('parentElement: ', li.parentElement);
    console.log('append child: ', 
      secondList.appendChild(li));
    console.log('contains: ', secondList.contains(li));
    console.log('hasChildNodes: ', firstList.hasChildNodes());
    let newElement = document.createElement('li');
    newElement.textContent = "da silva";
    secondList.insertBefore(newElement, li);
    console.log('isEqualNode: ', 
      firstList.querySelector('.last-child').isEqualNode(li));
    let secondListLi = 
      document.querySelector('#second-list > li:first-child');
    secondListLi.appendChild(document.createTextNode('marcell'));
    secondListLi.appendChild(document.createTextNode('monteiro'));
    secondListLi.normalize();
    firstList.removeChild(document.querySelector('#first-list > li'))
    secondList.replaceChild(newElement, li);
  }
}
