define('ember-cli-materialize/components/md-collection', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-collection'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCollection) {
  'use strict';

  var Component = _ember['default'].Component;
  var bool = _ember['default'].computed.bool;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCollection['default'],
    classNames: ['collection'],
    classNameBindings: ['_hasHeader:with-header'],
    headerComponentName: 'md-default-collection-header',
    header: null,
    _hasHeader: bool('header')
  });
});