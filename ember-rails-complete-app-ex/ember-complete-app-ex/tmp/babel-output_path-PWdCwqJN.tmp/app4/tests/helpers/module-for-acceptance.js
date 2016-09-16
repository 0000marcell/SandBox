define('app4/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'app4/tests/helpers/start-app', 'app4/tests/helpers/destroy-app'], function (exports, _qunit, _app4TestsHelpersStartApp, _app4TestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _app4TestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _app4TestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});