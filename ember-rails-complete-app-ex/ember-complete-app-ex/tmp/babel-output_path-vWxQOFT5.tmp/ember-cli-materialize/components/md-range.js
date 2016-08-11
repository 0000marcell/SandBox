define('ember-cli-materialize/components/md-range', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-range'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdRange) {
  'use strict';

  var Component = _ember['default'].Component;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdRange['default'],

    classNames: ['range-field'],

    min: 0,
    max: 100,
    step: 5
  });
});