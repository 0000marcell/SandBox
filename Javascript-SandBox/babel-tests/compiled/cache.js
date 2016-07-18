'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _empty_object = require('./empty_object');

var _empty_object2 = _interopRequireDefault(_empty_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Cache;


function Cache(limit, func) {
	this.store = new _empty_object2.default();
	this.size = 0;
	this.misses = 0;
	this.hits = 0;
	this.limit = limit;
	this.func = func;
}

function UNDEFINED() {}

Cache.prototype = {
	set: function set(key, value) {
		if (this.limit > this.size) {
			this.size++;
			if (value === undefined) {
				this.store[key] = UNDEFINED;
			} else {
				this.store[key] = value;
			}
		}
		return value;
	},
	get: function get(key) {
		var value = this.store[key];
		if (value === undefined) {
			this.misses++;
			value = this.set(key, this.func(key));
		} else if (value === UNDEFINED) {
			this.hits++;
			value = undefined;
		} else {
			this.hits++;
		}
		return value;
	},
	purge: function purge() {
		this.store = new _empty_object2.default();
		this.size = 0;
		this.hits = 0;
		this.misses = 0;
	}
};
