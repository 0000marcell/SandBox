define('ember-cli-materialize/components/md-card', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCard) {
  'use strict';

  var Component = _ember['default'].Component;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCard['default'],
    classNames: ['card'],
    classNameBindings: ['class']
  });
});