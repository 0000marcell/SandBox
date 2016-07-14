define('ember-cli-materialize/components/md-card-content', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card-content'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCardContent) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCardContent['default'],

    classNames: ['card-content'],

    classNameBinding: 'class',
    titleBinding: 'parentView.title',
    titleClassBinding: 'parentView.titleClass',
    activatorBinding: 'parentView.activator',

    cardTitleClass: computed('titleClass', function () {
      return this.get('titleClass') || 'black-text';
    })
  });
});