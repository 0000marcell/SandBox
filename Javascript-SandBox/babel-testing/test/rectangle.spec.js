"use strict";
let chai = require('chai'),
		path = require('path');

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

		it('can be changed', () => {
			rectangle.width = 30;
			rectangle.width.should.equal(30);
		});
	});
});
