var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import SelectableItemGroup from './selectable-item-group';
import _computed from 'ember-new-computed';

var computed = Ember.computed;
var Component = Ember.Component;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [SelectableItemGroup],
  checked: null,
  disabled: false,
  classNames: ['materialize-selectable-item'],

  _checked: _computed('checked', 'group.selection', 'group.selection.[]', {
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

  isSelected: Ember.computed.alias('_checked'),

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