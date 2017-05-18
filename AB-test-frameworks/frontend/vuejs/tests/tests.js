QUnit.test('name of the test', function(assert){
  assert.equal('this', 'this', 'msg');
});

QUnit.test('component test', function(assert){
  let component = todoList.options;
  assert.equal((typeof component.methods.showActive), 
    'function');
});
