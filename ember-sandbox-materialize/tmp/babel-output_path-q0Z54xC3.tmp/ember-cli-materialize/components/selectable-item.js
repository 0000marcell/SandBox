define('ember-cli-materialize/components/selectable-item', ['exports', 'ember', 'ember-composability/mixins/child-component-support', 'ember-cli-materialize/components/selectable-item-group', 'ember-new-computed'], function (exports, _ember, _emberComposabilityMixinsChildComponentSupport, _emberCliMaterializeComponentsSelectableItemGroup, _emberNewComputed) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var computed = _ember['default'].computed;
  var alias = _ember['default'].computed.alias;
  var Component = _ember['default'].Component;

  exports['default'] = Component.extend(_emberComposabilityMixinsChildComponentSupport['default'], {
    _parentComponentTypes: [_emberCliMaterializeComponentsSelectableItemGroup['default']],
    checked: null,
    disabled: false,
    classNames: ['materialize-selectable-item'],

    _checked: (0, _emberNewComputed['default'])('checked', 'group.selection', 'group.selection.[]', {
      get: function get() {
        var group = this.get('group');
        if (!group) {
          return this.get('checked');
        } else {
          return group.isValueSelected(this.get('value'));
        }
      },
      set: function set(key, val) {
        var group = this.get('group');
        if (!group) {
          this.set('checked', val);
        } else {
          group.setValueSelection(this.get('value'), val);
        }
        this.sendAction('action', { checked: !!val });
        return !!val;
      }
    }),

    isSelected: alias('_checked'),

    _setupLabel: function _setupLabel() {
      var _$$toArray = this.$('.materialize-selectable-item-input, .materialize-selectable-item-input-container input').toArray();

      var _$$toArray2 = _slicedToArray(_$$toArray, 1);

      var $input = _$$toArray2[0];

      var inputId = $input ? $input.id : null;
      this.$('.materialize-selectable-item-label').attr('for', inputId);
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._setupLabel();
    },

    group: computed(function () {
      return this.nearestWithProperty('__materializeSelectableItemGroup');
    })
  });
});