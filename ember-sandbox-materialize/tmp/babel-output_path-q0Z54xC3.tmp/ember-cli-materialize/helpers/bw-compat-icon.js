define('ember-cli-materialize/helpers/bw-compat-icon', ['exports', 'ember'], function (exports, _ember) {
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

  exports.isOldIcon = isOldIcon;
  exports.bwCompatIcon = bwCompatIcon;

  var Helper = _ember['default'].Helper;
  var htmlSafe = _ember['default'].String.htmlSafe;
  var A = _ember['default'].A;

  function isOldIcon(str) {
    return str.split(' ').filter(function (c) {
      return c.indexOf('mdi-') === 0;
    }).length > 0;
  }

  function bwCompatIcon(params, hash) {
    var _params = _slicedToArray(params, 1);

    var iconStr = _params[0];

    var extraClassesString = (hash || {}).extraClasses || null;
    var extraClasses = extraClassesString ? extraClassesString.split(' ') : [];
    if (isOldIcon(iconStr)) {
      return htmlSafe('<i class=\'' + A([iconStr].concat(extraClasses)).compact().join(' ') + '\'></i>');
    } else {
      var classes = iconStr.split(' ');
      var icon = classes.shift();
      var classString = A(['material-icons'].concat(classes).concat(extraClasses)).compact().join(' ');
      return htmlSafe('<i class=\'' + classString + '\'>' + icon + '</i>');
    }
    return params;
  }

  exports['default'] = Helper.helper(bwCompatIcon);
});