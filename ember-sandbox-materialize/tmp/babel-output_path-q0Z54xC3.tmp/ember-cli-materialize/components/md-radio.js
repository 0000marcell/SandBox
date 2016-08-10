define('ember-cli-materialize/components/md-radio', ['exports', 'ember', 'ember-cli-materialize/components/selectable-item', 'ember-cli-materialize/templates/components/md-radio'], function (exports, _ember, _emberCliMaterializeComponentsSelectableItem, _emberCliMaterializeTemplatesComponentsMdRadio) {
  'use strict';

  var computed = _ember['default'].computed;
  var alias = _ember['default'].computed.alias;
  var isEmpty = _ember['default'].isEmpty;
  var assert = _ember['default'].assert;

  exports['default'] = _emberCliMaterializeComponentsSelectableItem['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdRadio['default'],

    value: '',
    text: alias('name'),
    groupValue: alias('group.selection'),

    className: ['materialize-radio'],

    checked: computed('groupValue', 'value', function () {
      return this.get('groupValue') === this.get('value');
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      assert(!isEmpty(this.get('group')), 'materialize-radio is not supported outside the context of a materialize-radio-group');
    }
  });
});