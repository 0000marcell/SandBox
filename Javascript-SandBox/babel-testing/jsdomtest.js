var jsdom = require("jsdom").jsdom;
jsdom.env({file: './page.html',
					done: function(err, window){
						console.log(window.document.getElementById('name').innerHTML);	
					}});
