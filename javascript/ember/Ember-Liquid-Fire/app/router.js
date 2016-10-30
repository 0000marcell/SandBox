import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');
    this.route('first', {outlet: 'first'});
    this.route('second');
    this.route('third');
  });
});

export default Router;
