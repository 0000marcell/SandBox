"use strict";
var jsdom = require('jsdom');
var document = jsdom.jsdom('./page.html');
var window = document.defaultView
global.document = document
global.window = window
window.console = global.console

let chai = require('chai'),
		path = require('path');
require('jsdom-global')();
chai.should();

let Rectangle = require(path.join(__dirname, '..', 'rectangle'));

describe('Rectangle', () => {
	describe('#width', () => {
		let rectangle;

		beforeEach(() => {
			rectangle = new Rectangle(10, 20);
		});

		it('returns the width', () => {
			rectangle.width.should.equal(10);
		});

		it('it the name of a page', () => {
			var text = document.getElementById('name').innerHTML;
			console.log('text '+text);
		});

		it('can be changed', () => {
			rectangle.width = 30;
			rectangle.width.should.equal(30);
		});
	});
});
