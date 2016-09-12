function foo() {}
const bar = { a: 'a' };

foo.prototype = bar;

// Is bar an instance of foo? Nope!
console.log(bar instanceof foo); // false
// Ok... since bar is not an instance of foo,
// baz should definitely not be an instance of foo, right?
const baz = Object.create(bar);
// ...Wrong.
console.log(baz instanceof foo); 
// true. oops, because bar and foo have the same prototype
