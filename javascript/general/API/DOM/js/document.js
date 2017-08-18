// documentElement returns html element
// documentURI returns the url
// styleSheets returns a array of obj representing the style sheets
// body returns the body
// cookie returns the cookies, can also be used to set the cookis
// defaultView , returns the window object
// readyState
// domain , returns the domain
// forms, 
// head
// images
// links
// location, returns information about the page
// scripts, 
// title
// url

// documentElement
// documentURI
// styleSheets
// body
// cookie
// defaultView
// domain
// forms
// head
// images
// links
// location
// readyState
// scripts
// title
// url



// contentType
console.log(document.contentType);

// documentElement
console.log(document.documentElement);

// documentURI
console.log(document.documentURI);

// styleSheets
console.log(document.styleSheets);

// visibilityState
console.log(document.visibilityState);

// body
console.log(document.body);

// cookie, only works in http
document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
console.log(document.cookie);

// defaultView returns window object
console.log(document.defaultView);

// domain
console.log(document.domain);

// embeds returns a list of embeds
console.log(document.embeds);

// forms returns a list of forms
console.log(document.forms);

// https://developer.mozilla.org/en-US/docs/Web/API/Document

// head
console.log(document.head);

// images returns a list of all the images
console.log(document.images);

// links returns a list of all the links
console.log(document.links);

// location
console.log(document.location);

console.log(document.readyState);

console.log(document.referrer);

console.log(document.scripts);

console.log(document.title);

console.log(document.url);
