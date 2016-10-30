import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('task', { path: ':title'});
    });
  this.route('user', function() {
    this.route('dashboard', function() {
      this.route('company');
    });
  });
});

export default Router;
