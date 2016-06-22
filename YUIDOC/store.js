/**
 * This module contains classes for running a store
 * @module Store
 */

var Store = Store || {};

/**
 * `TAX_RATE` is stored as a percentage. Value is 13.
 *	* @property TAX_RATE
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
}
