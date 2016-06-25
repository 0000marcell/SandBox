const Store = require('./store.js');
var apple, pear, book, desk, assertEquals;
 
assertEquals = function (one, two, msg) {
	console.log(((one === two) ? "PASS : " : "FAIL : ") + msg);
};
 
apple = new Store.Item('Granny Smith Apple', 1.00, 5);
pear  = new Store.Item('Barlett Pear', 2.00, 3);
book  = new Store.Item('On Writing Well', 15.99, 2);
desk  = new Store.Item('IKEA Gallant', 123.45, 1);
cart  = new Store.Cart('Andrew');
 
cart.addItem(apple, 1).addItem(book, 3).addItem(desk, 1);
 
assertEquals(apple.quantity, 4, "adding 1 apple removes 1 from the item quantity");
assertEquals(book.quantity, 2, "trying to add more books than there are means none are added");
assertEquals(cart.total(), 140.63, "total price for 1 apple and 1 desk is 140.63");
