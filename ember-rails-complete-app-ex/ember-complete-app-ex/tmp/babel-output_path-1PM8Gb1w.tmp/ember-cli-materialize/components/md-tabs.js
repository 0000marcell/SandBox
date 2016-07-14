define('ember-cli-materialize/components/md-tabs', ['exports', 'ember', 'ember-composability/mixins/parent-component-support', 'ember-cli-materialize/templates/components/md-tabs'], function (exports, _ember, _emberComposabilityMixinsParentComponentSupport, _emberCliMaterializeTemplatesComponentsMdTabs) {
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

  var get = _ember['default'].get;
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var alias = _ember['default'].computed.alias;
  var debounce = _ember['default'].run.debounce;

  exports['default'] = Component.extend(_emberComposabilityMixinsParentComponentSupport['default'], {
    layout: _emberCliMaterializeTemplatesComponentsMdTabs['default'],
    classNames: ['materialize-tabs', 'row'],
    composableChildrenDebounceTime: 1,
    content: null,
    numTabs: alias('composableChildren.length'),
    optionValuePath: 'id',
    optionLabelPath: 'title',
    colWidth: 2,

    selected: null,

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._updateIndicatorPosition(false);
    },

    _indicatorUpdater: _ember['default'].observer('selected', 'content.[]', 'composableChildren.[]', function () {
      debounce(this, this._updateIndicatorPosition, 100);
    }),

    tabComponents: function tabComponents() {
      return _ember['default'].A(this.get('composableChildren')) || _ember['default'].A();
    },

    _updateIndicatorPosition: function _updateIndicatorPosition() {
      var _this = this;

      var animate = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!this.element) {
        return;
      }

      var _filter = (this.get('composableChildren') || []).filter(function (item) {
        return get(item, 'value') === _this.get('selected');
      });

      var _filter2 = _slicedToArray(_filter, 1);

      var tabComponent = _filter2[0];

      var tabSetRect = this.element.getBoundingClientRect();
      if (tabComponent) {
        var tabRect = tabComponent.element.getBoundingClientRect();

        var cssParams = {
          left: tabRect.left - tabSetRect.left,
          right: tabSetRect.right - tabRect.right
        };

        if (!animate) {
          this.$('.indicator').css(cssParams);
        } else {
          this.$('.indicator1').velocity(cssParams, { duration: 150 });
          this.$('.indicator2').velocity(cssParams, { duration: 150, delay: 40 });
        }
      }
    },

    _content: computed('content.[]', 'optionLabelPath', 'optionValuePath', function () {
      var labelPath = this.get('optionLabelPath');
      var valuePath = this.get('optionValuePath');
      return new _ember['default'].A((this.get('content') || []).map(function (contentItem) {
        return { id: contentItem[valuePath], title: contentItem[labelPath] };
      }));
    })
  });
});