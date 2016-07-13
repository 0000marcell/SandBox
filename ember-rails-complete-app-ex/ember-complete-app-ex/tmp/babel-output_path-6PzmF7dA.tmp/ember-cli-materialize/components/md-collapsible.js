define('ember-cli-materialize/components/md-collapsible', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-collapsible', 'ember-new-computed'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCollapsible, _emberNewComputed) {
  'use strict';

  var deprecate = _ember['default'].deprecate;
  var Component = _ember['default'].Component;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCollapsible['default'],
    tagName: 'li',
    classNameBindings: ['class'],
    actionArg: null,
    model: (0, _emberNewComputed['default'])('actionArg', {
      get: function get() {
        deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
        return this.get('actionArg');
      },
      set: function set(key, val) {
        deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
        return this.set('actionArg', val);
      }
    }),
    actions: {
      headerClicked: function headerClicked() {
        this.sendAction('action', this.get('actionArg'));
      }
    }
  });
});