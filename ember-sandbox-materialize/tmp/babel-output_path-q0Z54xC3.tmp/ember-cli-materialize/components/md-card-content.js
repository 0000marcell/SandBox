define('ember-cli-materialize/components/md-card-content', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card-content'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCardContent) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var alias = _ember['default'].computed.alias;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCardContent['default'],

    classNames: ['card-content'],

    classNameBindings: ['class'],
    title: alias('parentView.title'),
    titleClass: alias('parentView.titleClass'),
    activator: alias('parentView.activator'),

    cardTitleClass: computed('titleClass', function () {
      return this.get('titleClass') || 'black-text';
    })
  });
});