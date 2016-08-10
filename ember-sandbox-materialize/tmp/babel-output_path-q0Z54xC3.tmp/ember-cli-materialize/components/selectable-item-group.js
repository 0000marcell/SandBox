define('ember-cli-materialize/components/selectable-item-group', ['exports', 'ember', 'ember-composability/mixins/parent-component-support', 'ember-cli-materialize/templates/components/selectable-item-group'], function (exports, _ember, _emberComposabilityMixinsParentComponentSupport, _emberCliMaterializeTemplatesComponentsSelectableItemGroup) {
  'use strict';

  var get = _ember['default'].get;
  var Component = _ember['default'].Component;
  var A = _ember['default'].A;
  var computed = _ember['default'].computed;

  exports['default'] = Component.extend(_emberComposabilityMixinsParentComponentSupport['default'], {
    layout: _emberCliMaterializeTemplatesComponentsSelectableItemGroup['default'],

    content: null,
    selection: null,

    optionValuePath: 'content',
    optionLabelPath: 'content',
    multiple: false,
    __materializeSelectableItemGroup: true,

    init: function init() {
      this._super.apply(this, arguments);
      if (this.get('selection') === null && !!this.get('multiple')) {
        this.set('selection', new A([]));
      }
    },

    isValueSelected: function isValueSelected(value) {
      if (this.get('multiple')) {
        return this.get('selection').indexOf(value) >= 0;
      } else {
        return this.get('selection') === value;
      }
    },

    setValueSelection: function setValueSelection(value, select) {
      if (select) {
        return this.addToSelection(value);
      } else {
        return this.removeFromSelection(value);
      }
    },

    addToSelection: function addToSelection(value) {
      if (this.get('multiple')) {
        this.get('selection').addObject(value);
      } else {
        this.set('selection', value);
      }
    },

    removeFromSelection: function removeFromSelection(value) {
      if (this.get('multiple')) {
        this.get('selection').removeObject(value);
      } else {
        if (this.get('selection') === value) {
          this.set('selection', null);
        }
      }
    },
    disabled: false,

    _valuePath: computed('optionValuePath', function () {
      var optionValuePath = get(this, 'optionValuePath');
      return optionValuePath.replace(/^content\.?/, '');
    }),

    _labelPath: computed('optionLabelPath', function () {
      var optionLabelPath = get(this, 'optionLabelPath');
      return optionLabelPath.replace(/^content\.?/, '');
    }),

    _content: computed('content.[]', '_valuePath', '_labelPath', function () {
      var valuePath = get(this, '_valuePath');
      var labelPath = get(this, '_labelPath');
      var content = get(this, 'content') || new A([]);

      if (valuePath && labelPath) {
        return A(content.map(function (el) {
          return { value: get(el, valuePath), label: get(el, labelPath) };
        }));
      } else {
        return A(content.map(function (el) {
          return { value: el, label: el };
        }));
      }
    })
  });
});