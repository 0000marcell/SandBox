define('ember-cli-materialize/components/md-default-column-header', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-default-column-header'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdDefaultColumnHeader) {
  'use strict';

  var Component = _ember['default'].Component;
  var alias = _ember['default'].computed.alias;

  exports['default'] = Component.extend({
    tagName: 'th',
    layout: _emberCliMaterializeTemplatesComponentsMdDefaultColumnHeader['default'],
    attributeBindings: ['data-field'],
    'data-field': alias('column.valueBindingPath')
  });
});