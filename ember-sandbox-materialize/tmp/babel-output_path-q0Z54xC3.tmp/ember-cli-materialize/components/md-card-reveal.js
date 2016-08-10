define('ember-cli-materialize/components/md-card-reveal', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card-reveal'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCardReveal) {
  'use strict';

  var Component = _ember['default'].Component;
  var alias = _ember['default'].computed.alias;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCardReveal['default'],
    tagName: 'div',

    classNames: ['card-reveal'],
    classNameBindings: ['class'],
    activator: alias('parentView.activator')
  });
});