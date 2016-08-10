import Ember from 'ember';
import Consumer from 'ember-cable/core/consumer';

export default Ember.Service.extend({

  createConsumer: function createConsumer(url) {
    return Consumer.create({ url: url });
  }

});