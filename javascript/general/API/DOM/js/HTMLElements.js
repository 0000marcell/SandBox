// HTMLElements
// HTMLAnchor
// hash
// host, hostName
// href
// rel

window.onload = function () {
  window.onpopstate = function () {
    let hash = window.document.location.hash;
    if(hash){
      let elem = document.querySelector(hash);
      console.log('scrollY: ', elem.scrollY);
      window.scrollTo(null, elem.scrollY);
    }
  }
}
