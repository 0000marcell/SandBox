define('app4/routes/users/user', ['exports', 'ember'], function (exports, _ember) {
   var __cov_qUotjuh8MH6MfOKHMee43g = Function('return this')();
   if (!__cov_qUotjuh8MH6MfOKHMee43g.__coverage__) {
      __cov_qUotjuh8MH6MfOKHMee43g.__coverage__ = {};
   }
   __cov_qUotjuh8MH6MfOKHMee43g = __cov_qUotjuh8MH6MfOKHMee43g.__coverage__;
   if (!__cov_qUotjuh8MH6MfOKHMee43g['app/routes/users/user.js']) {
      __cov_qUotjuh8MH6MfOKHMee43g['app/routes/users/user.js'] = { "path": "app/routes/users/user.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0 }, "b": {}, "f": { "1": 0, "2": 0, "3": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 4, "loc": { "start": { "line": 4, "column": 6 }, "end": { "line": 4, "column": 13 } } }, "2": { "name": "(anonymous_2)", "line": 7, "loc": { "start": { "line": 7, "column": 10 }, "end": { "line": 7, "column": 18 } } }, "3": { "name": "(anonymous_3)", "line": 13, "loc": { "start": { "line": 13, "column": 9 }, "end": { "line": 13, "column": 21 } } } }, "statementMap": { "1": { "start": { "line": 5, "column": 2 }, "end": { "line": 5, "column": 54 } }, "2": { "start": { "line": 8, "column": 2 }, "end": { "line": 10, "column": 4 } }, "3": { "start": { "line": 14, "column": 3 }, "end": { "line": 14, "column": 65 } }, "4": { "start": { "line": 15, "column": 3 }, "end": { "line": 15, "column": 40 } }, "5": { "start": { "line": 16, "column": 3 }, "end": { "line": 18, "column": 6 } }, "6": { "start": { "line": 17, "column": 4 }, "end": { "line": 17, "column": 42 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Route.extend({", "\tmodel(param){", "\t\treturn this.store.find('user', param.user_username);", "\t},", "\tserialize(model) {", "\t\treturn {", "\t\t\tuser_username: model.get('username')", "\t\t};", "\t},", "\tactions: {", "\t\tloading(transition){", "\t\t\tlet controller = this.controllerFor('users/user/todos/index');", "\t\t\tcontroller.set('loadingModel', true);", "\t\t\ttransition.finally(() => {", "\t\t\t\tcontroller.set('loadingModel', false); ", "\t\t\t});", "\t\t}", "\t}", "});", ""] };
   }
   __cov_qUotjuh8MH6MfOKHMee43g = __cov_qUotjuh8MH6MfOKHMee43g['app/routes/users/user.js'];
   exports['default'] = _ember['default'].Route.extend({ model: function model(param) {
         __cov_qUotjuh8MH6MfOKHMee43g.f['1']++;__cov_qUotjuh8MH6MfOKHMee43g.s['1']++;return this.store.find('user', param.user_username);
      }, serialize: function serialize(model) {
         __cov_qUotjuh8MH6MfOKHMee43g.f['2']++;__cov_qUotjuh8MH6MfOKHMee43g.s['2']++;return { user_username: model.get('username') };
      }, actions: { loading: function loading(transition) {
            __cov_qUotjuh8MH6MfOKHMee43g.f['3']++;__cov_qUotjuh8MH6MfOKHMee43g.s['3']++;var controller = this.controllerFor('users/user/todos/index');__cov_qUotjuh8MH6MfOKHMee43g.s['4']++;controller.set('loadingModel', true);__cov_qUotjuh8MH6MfOKHMee43g.s['5']++;transition['finally'](function () {
               __cov_qUotjuh8MH6MfOKHMee43g.s['6']++;controller.set('loadingModel', false);
            });
         } } });
});