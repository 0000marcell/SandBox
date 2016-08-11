define('app4/routes/signup', ['exports', 'ember'], function (exports, _ember) {
   var __cov_yQZi6LhWc8dIADVOxFHj1Q = Function('return this')();
   if (!__cov_yQZi6LhWc8dIADVOxFHj1Q.__coverage__) {
      __cov_yQZi6LhWc8dIADVOxFHj1Q.__coverage__ = {};
   }
   __cov_yQZi6LhWc8dIADVOxFHj1Q = __cov_yQZi6LhWc8dIADVOxFHj1Q.__coverage__;
   if (!__cov_yQZi6LhWc8dIADVOxFHj1Q['app/routes/signup.js']) {
      __cov_yQZi6LhWc8dIADVOxFHj1Q['app/routes/signup.js'] = { "path": "app/routes/signup.js", "s": { "1": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 4, "loc": { "start": { "line": 4, "column": 6 }, "end": { "line": 4, "column": 8 } } } }, "statementMap": { "1": { "start": { "line": 5, "column": 2 }, "end": { "line": 5, "column": 41 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Route.extend({", "\tmodel(){", "\t\treturn this.store.createRecord('user');", "\t}", "});", ""] };
   }
   __cov_yQZi6LhWc8dIADVOxFHj1Q = __cov_yQZi6LhWc8dIADVOxFHj1Q['app/routes/signup.js'];
   exports['default'] = _ember['default'].Route.extend({ model: function model() {
         __cov_yQZi6LhWc8dIADVOxFHj1Q.f['1']++;__cov_yQZi6LhWc8dIADVOxFHj1Q.s['1']++;return this.store.createRecord('user');
      } });
});