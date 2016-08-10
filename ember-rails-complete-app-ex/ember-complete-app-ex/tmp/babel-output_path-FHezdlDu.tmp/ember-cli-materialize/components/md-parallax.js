define('ember-cli-materialize/components/md-parallax', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-parallax'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdParallax) {
  'use strict';

  var Component = _ember['default'].Component;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdParallax['default'],
    classNames: ['parallax-container'],

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._setupParallax();
    },

    _setupParallax: function _setupParallax() {
      this.$('.parallax').parallax();
    }

    // TODO: unregister any listeners that $.parallax() registers
    // _teardownParallax() {
    //
    // }
  });
});