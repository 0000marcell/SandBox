define('app4/app', ['exports', 'ember', 'app4/resolver', 'ember-load-initializers', 'app4/config/environment'], function (exports, _ember, _app4Resolver, _emberLoadInitializers, _app4ConfigEnvironment) {
   var __cov_LentoWVdSZ6TTnRl6HygvQ = Function('return this')();
   if (!__cov_LentoWVdSZ6TTnRl6HygvQ.__coverage__) {
      __cov_LentoWVdSZ6TTnRl6HygvQ.__coverage__ = {};
   }
   __cov_LentoWVdSZ6TTnRl6HygvQ = __cov_LentoWVdSZ6TTnRl6HygvQ.__coverage__;
   if (!__cov_LentoWVdSZ6TTnRl6HygvQ['app/app.js']) {
      __cov_LentoWVdSZ6TTnRl6HygvQ['app/app.js'] = { "path": "app/app.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0 }, "b": {}, "f": {}, "fnMap": {}, "statementMap": { "1": { "start": { "line": 6, "column": 0 }, "end": { "line": 6, "column": 8 } }, "2": { "start": { "line": 8, "column": 0 }, "end": { "line": 8, "column": 38 } }, "3": { "start": { "line": 10, "column": 0 }, "end": { "line": 14, "column": 3 } }, "4": { "start": { "line": 16, "column": 0 }, "end": { "line": 16, "column": 43 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "import Resolver from './resolver';", "import loadInitializers from 'ember-load-initializers';", "import config from './config/environment';", "", "let App;", "", "Ember.MODEL_FACTORY_INJECTIONS = true;", "", "App = Ember.Application.extend({", "  modulePrefix: config.modulePrefix,", "  podModulePrefix: config.podModulePrefix,", "  Resolver", "});", "", "loadInitializers(App, config.modulePrefix);", "", "export default App;", ""] };
   }
   __cov_LentoWVdSZ6TTnRl6HygvQ = __cov_LentoWVdSZ6TTnRl6HygvQ['app/app.js'];
   __cov_LentoWVdSZ6TTnRl6HygvQ.s['1']++;var App = undefined;__cov_LentoWVdSZ6TTnRl6HygvQ.s['2']++;_ember['default'].MODEL_FACTORY_INJECTIONS = true;__cov_LentoWVdSZ6TTnRl6HygvQ.s['3']++;App = _ember['default'].Application.extend({ modulePrefix: _app4ConfigEnvironment['default'].modulePrefix, podModulePrefix: _app4ConfigEnvironment['default'].podModulePrefix, Resolver: _app4Resolver['default'] });__cov_LentoWVdSZ6TTnRl6HygvQ.s['4']++;(0, _emberLoadInitializers['default'])(App, _app4ConfigEnvironment['default'].modulePrefix);exports['default'] = App;
});