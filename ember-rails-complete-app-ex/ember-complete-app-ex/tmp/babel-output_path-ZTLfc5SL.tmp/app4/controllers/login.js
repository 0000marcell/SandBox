define('app4/controllers/login', ['exports', 'ember'], function (exports, _ember) {
   var __cov_OB111C$1VUR59VAHyu3M9A = Function('return this')();
   if (!__cov_OB111C$1VUR59VAHyu3M9A.__coverage__) {
      __cov_OB111C$1VUR59VAHyu3M9A.__coverage__ = {};
   }
   __cov_OB111C$1VUR59VAHyu3M9A = __cov_OB111C$1VUR59VAHyu3M9A.__coverage__;
   if (!__cov_OB111C$1VUR59VAHyu3M9A['app/controllers/login.js']) {
      __cov_OB111C$1VUR59VAHyu3M9A['app/controllers/login.js'] = { "path": "app/controllers/login.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 8, "loc": { "start": { "line": 8, "column": 7 }, "end": { "line": 8, "column": 9 } } } }, "statementMap": { "1": { "start": { "line": 9, "column": 3 }, "end": { "line": 9, "column": 36 } }, "2": { "start": { "line": 10, "column": 3 }, "end": { "line": 22, "column": 6 } }, "3": { "start": { "line": 13, "column": 4 }, "end": { "line": 13, "column": 76 } }, "4": { "start": { "line": 14, "column": 4 }, "end": { "line": 17, "column": 7 } }, "5": { "start": { "line": 15, "column": 5 }, "end": { "line": 15, "column": 39 } }, "6": { "start": { "line": 16, "column": 5 }, "end": { "line": 16, "column": 48 } }, "7": { "start": { "line": 19, "column": 4 }, "end": { "line": 19, "column": 38 } }, "8": { "start": { "line": 20, "column": 4 }, "end": { "line": 20, "column": 46 } }, "9": { "start": { "line": 21, "column": 4 }, "end": { "line": 21, "column": 65 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Controller.extend({", "\tmsgProp: {},", "\tsendingMessage: false,", "\tauthManager: Ember.inject.service('session'),", "\tactions: {", "\t\tlogin(){", "\t\t\tthis.set('sendingMessage', true);", "\t\t\tthis.get('authManager').authenticate('authenticator:oauth2', ", "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.get('email'), ", "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.get('password')).then(() => {", "\t\t\t\tlet username = this.get('authManager.data.authenticated.user.username');", "\t\t\t\tthis.store.find('user', username).then((user) => {", "\t\t\t\t\tthis.set('sendingMessage', false);", "\t\t\t\t\tthis.transitionToRoute('users.user', user);", "\t\t\t\t});", "\t\t\t}, () => {", "\t\t\t\tthis.set('sendingMessage', false);", "\t\t\t\tthis.set('msgProp.color', 'red accent 4');", "\t\t\t\tthis.set('msgProp.msg', 'wrong email/password combination!');", "\t\t\t});", "\t\t}", "\t}", "});", ""] };
   }
   __cov_OB111C$1VUR59VAHyu3M9A = __cov_OB111C$1VUR59VAHyu3M9A['app/controllers/login.js'];
   exports['default'] = _ember['default'].Controller.extend({ msgProp: {}, sendingMessage: false, authManager: _ember['default'].inject.service('session'), actions: { login: function login() {
            var _this = this;

            __cov_OB111C$1VUR59VAHyu3M9A.f['1']++;__cov_OB111C$1VUR59VAHyu3M9A.s['1']++;this.set('sendingMessage', true);__cov_OB111C$1VUR59VAHyu3M9A.s['2']++;this.get('authManager').authenticate('authenticator:oauth2', this.get('email'), this.get('password')).then(function () {
               __cov_OB111C$1VUR59VAHyu3M9A.s['3']++;var username = _this.get('authManager.data.authenticated.user.username');__cov_OB111C$1VUR59VAHyu3M9A.s['4']++;_this.store.find('user', username).then(function (user) {
                  __cov_OB111C$1VUR59VAHyu3M9A.s['5']++;_this.set('sendingMessage', false);__cov_OB111C$1VUR59VAHyu3M9A.s['6']++;_this.transitionToRoute('users.user', user);
               });
            }, function () {
               __cov_OB111C$1VUR59VAHyu3M9A.s['7']++;_this.set('sendingMessage', false);__cov_OB111C$1VUR59VAHyu3M9A.s['8']++;_this.set('msgProp.color', 'red accent 4');__cov_OB111C$1VUR59VAHyu3M9A.s['9']++;_this.set('msgProp.msg', 'wrong email/password combination!');
            });
         } } });
});