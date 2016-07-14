define('app4/routes/users/user/todos/new', ['exports', 'ember'], function (exports, _ember) {
   var __cov_r3GJGXwAxuG6Fawmbl7J2A = Function('return this')();
   if (!__cov_r3GJGXwAxuG6Fawmbl7J2A.__coverage__) {
      __cov_r3GJGXwAxuG6Fawmbl7J2A.__coverage__ = {};
   }
   __cov_r3GJGXwAxuG6Fawmbl7J2A = __cov_r3GJGXwAxuG6Fawmbl7J2A.__coverage__;
   if (!__cov_r3GJGXwAxuG6Fawmbl7J2A['app/routes/users/user/todos/new.js']) {
      __cov_r3GJGXwAxuG6Fawmbl7J2A['app/routes/users/user/todos/new.js'] = { "path": "app/routes/users/user/todos/new.js", "s": { "1": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 4, "loc": { "start": { "line": 4, "column": 6 }, "end": { "line": 4, "column": 8 } } } }, "statementMap": { "1": { "start": { "line": 5, "column": 2 }, "end": { "line": 5, "column": 41 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Route.extend({", "\tmodel(){", "\t\treturn this.store.createRecord('todo');", "\t}", "});", ""] };
   }
   __cov_r3GJGXwAxuG6Fawmbl7J2A = __cov_r3GJGXwAxuG6Fawmbl7J2A['app/routes/users/user/todos/new.js'];
   exports['default'] = _ember['default'].Route.extend({ model: function model() {
         __cov_r3GJGXwAxuG6Fawmbl7J2A.f['1']++;__cov_r3GJGXwAxuG6Fawmbl7J2A.s['1']++;return this.store.createRecord('todo');
      } });
});