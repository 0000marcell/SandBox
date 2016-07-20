define('app4/mirage/scenarios/default', ['exports'], function (exports) {
  exports['default'] = function (server) {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */
    var user = server.create('user');
    server.createList('todo', 10, { user: user });
    server.createList('task', 10, { user: user });
  };
});