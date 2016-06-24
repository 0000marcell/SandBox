/**
* This module contains classes for running a store
* @module Store
*/

var Store = Store || {};

/**
 * `TAX_RATE` is stored as a percentage. Value is 13.
 *	@property TAX_RATE
 *	@static
 *	@final
 *	@type Number
*/
Store.TAX_RATE = 13;

Store.Item = function (name, price, quantity) {
	/**
	* @property name
	* @type String
	*/
	this.name = name;

	/**
	* @property price
	* @type String
	*/
	this.price = price * 100;

	/**
	* @property quantity
	* @type Number
	*/
	this.quantity = quantity;

	/**
	* @property id
	* @type Number
	*/
	this.id = Store.Item._id++;
	Store.Item.list[this.id] = this;
};

/**
 * `_id` is incremented when a new item is created, so every item has a unique ID
 * @property id
 * @type Number
 * @static
 * @private
*/
Store.Item._id = 1;
 
/**
 * @property list
 * @static
 * @type Object
*/
Store.Item.list = {};

/**
 * @class Cart
 * @constructor
 * @param name {String} Customer name
*/
Store.Cart = function (name) {
	/**
	* @property name
	* @type String
	*/
	this.name = name;
	/**
	* @property items
	* @type Object
	* @default {}
	*/
	this.items = {};
};

/**
* Adds 1 or more of a given item to the cart, if the chosen quantity 
* is available. If not, none are added.
*
* @method addItem
* @param item {Object} An `Item` Object
* @param [quantity=1] {Number} The number of items to add to the cart
* @chainable
*/
Store.Cart.prototype.addItem = function (item, quantity) {
	quantity = quantity || 1;
	if (item.quantity &gt;= quantity) {
	this.items[item.id] = this.items[item.id] || 0;
		this.items[item.id] += quantity;
		item.quantity -= quantity;
	}
	return this;
};

/**
* @method total
* @return {Number} tax-included total value of cart contents
*/
Store.Cart.prototype.total = function () {
	var subtotal, id;
			    subtotal = 0;
					for (id in this.items) {
					if(this.items.hasOwnProperty(id)) {
							        subtotal += Store.Item.list[id].price * this.items[id];
													    
					}
						
					}
					    return parseFloat(((subtotal * (1 + Store.TAX_RATE / 100)) / 100).toFixed(2));

};
