define('app4/router', ['exports', 'ember', 'app4/config/environment'], function (exports, _ember, _app4ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _app4ConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('login');
    this.route('signup');
    this.route('users', function () {
      this.route('user', { path: '/:user_username' }, function () {
        this.route('todos', function () {
          this.route('todo', {
            path: ':todo_id'
          }, function () {
            this.route('edit');
          });
          this.route('new');
        });
      });
    });
    this.route('password-reset');
  });

  exports['default'] = Router;
});