define('ember-cli-materialize/components/md-loader', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-loader'], function (exports, _ember, _emberCliMaterializeMixinsUsesSettings, _emberCliMaterializeTemplatesComponentsMdLoader) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var oneWay = _ember['default'].computed.oneWay;

  exports['default'] = Component.extend(_emberCliMaterializeMixinsUsesSettings['default'], {
    layout: _emberCliMaterializeTemplatesComponentsMdLoader['default'],

    classNameBindings: ['isBarType:progress:preloader-wrapper', 'active:active', 'size'],

    mode: oneWay('_mdSettings.loaderMode'),
    percent: 0,
    size: oneWay('_mdSettings.loaderSize'),
    active: true,
    color: null,

    isBarType: computed('mode', function () {
      return ['determinate', 'indeterminate'].indexOf(this.get('mode')) >= 0;
    }),

    isDeterminate: computed('mode', function () {
      return ['determinate'].indexOf(this.get('mode'));
    }),

    barStyle: computed('mode', 'percent', function () {
      if (this.get('mode') === 'determinate') {
        return new _ember['default'].String.htmlSafe('width: ' + parseInt(this.get('percent'), 10) + '%');
      } else {
        return new _ember['default'].String.htmlSafe('');
      }
    }),

    barClassName: computed('isBarType', 'mode', function () {
      return this.get('isBarType') ? this.get('mode') : null;
    }),

    spinnerClassNames: computed('color', 'isBarType', function () {
      if (!this.get('isBarType')) {
        var color = this.get('color');
        if (!color) {
          return _ember['default'].A(['blue', 'red', 'green', 'yellow'].map(function (c) {
            return 'spinner-layer spinner-' + c;
          }));
        } else {
          return _ember['default'].A(['spinner-layer spinner-' + color + '-only']);
        }
      } else {
        return _ember['default'].A();
      }
    })
  });
});