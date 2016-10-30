import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('users', function() {
    this.route('user', {path: '/:user_username'}, function() {
      this.route('todos', function() {
                this.route('todo', { path: ':id' }, function() {
                    this.route('edit');
                });
                this.route('new');
            });
            this.route('dashboard');
    });
  });
  this.route('password-reset');
  this.route('not-found', { path: '/*path' });
  this.route('sidenav', function() {
    this.route('link1');
    this.route('link2');
  });
  this.route('card');
  this.route('image-collenction', {path: 'image'});
  this.route('upload');
  this.route('carousel');
  this.route('composable');
  this.route('charts');
});

export default Router;
