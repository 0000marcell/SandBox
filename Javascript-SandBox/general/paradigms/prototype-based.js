//inheritance
var foo = {name: "foo", one: 1, two: 2};

var bar = {two: "two", three: 3};

Object.setPrototypeOf(bar, foo);

foo.sirname = 'testing';

console.log(bar.sirname);

bar.one // Resolves to 1.

// we can also do

var bar2 = Object.create( foo );

bar2.one // Resolves to 1.

