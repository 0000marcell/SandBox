define('ember-cli-materialize/components/md-card-panel', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card-panel'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCardPanel) {
  'use strict';

  var Component = _ember['default'].Component;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCardPanel['default'],

    classNames: ['card-panel'],
    classNameBindings: ['class']
  });
});