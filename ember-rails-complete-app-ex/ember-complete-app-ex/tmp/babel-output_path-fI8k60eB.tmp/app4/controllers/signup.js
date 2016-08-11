define('app4/controllers/signup', ['exports', 'ember'], function (exports, _ember) {
   var __cov_IrRM0jcX6Qw3y2sZO4Rt9w = Function('return this')();
   if (!__cov_IrRM0jcX6Qw3y2sZO4Rt9w.__coverage__) {
      __cov_IrRM0jcX6Qw3y2sZO4Rt9w.__coverage__ = {};
   }
   __cov_IrRM0jcX6Qw3y2sZO4Rt9w = __cov_IrRM0jcX6Qw3y2sZO4Rt9w.__coverage__;
   if (!__cov_IrRM0jcX6Qw3y2sZO4Rt9w['app/controllers/signup.js']) {
      __cov_IrRM0jcX6Qw3y2sZO4Rt9w['app/controllers/signup.js'] = { "path": "app/controllers/signup.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 7, "loc": { "start": { "line": 7, "column": 8 }, "end": { "line": 7, "column": 10 } } } }, "statementMap": { "1": { "start": { "line": 8, "column": 3 }, "end": { "line": 8, "column": 36 } }, "2": { "start": { "line": 9, "column": 3 }, "end": { "line": 9, "column": 32 } }, "3": { "start": { "line": 10, "column": 3 }, "end": { "line": 18, "column": 6 } }, "4": { "start": { "line": 11, "column": 4 }, "end": { "line": 11, "column": 38 } }, "5": { "start": { "line": 12, "column": 4 }, "end": { "line": 12, "column": 48 } }, "6": { "start": { "line": 13, "column": 4 }, "end": { "line": 13, "column": 76 } }, "7": { "start": { "line": 15, "column": 4 }, "end": { "line": 15, "column": 38 } }, "8": { "start": { "line": 16, "column": 4 }, "end": { "line": 16, "column": 46 } }, "9": { "start": { "line": 17, "column": 4 }, "end": { "line": 17, "column": 44 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Controller.extend({", "\tmsgProp: {},", "\tsendingMessage: false,", "\tactions: {", "\t\tsignup(){", "\t\t\tthis.set('sendingMessage', true);", "\t\t\tvar user = this.get('model');", "\t\t\tuser.save().then(() => {", "\t\t\t\tthis.set('sendingMessage', false);", "\t\t\t\tthis.set('msgProp.color', 'green accent 4');", "\t\t\t\tthis.set('msgProp.msg', 'Confirmation message sent, check your email!');", "\t\t\t}).catch((resp) => {", "\t\t\t\tthis.set('sendingMessage', false);", "\t\t\t\tthis.set('msgProp.color', 'red accent 4');", "\t\t\t\tthis.set('msgProp.msg', 'error: '+resp);", "\t\t\t});", "\t\t}", "\t}", "});", ""] };
   }
   __cov_IrRM0jcX6Qw3y2sZO4Rt9w = __cov_IrRM0jcX6Qw3y2sZO4Rt9w['app/controllers/signup.js'];
   exports['default'] = _ember['default'].Controller.extend({ msgProp: {}, sendingMessage: false, actions: { signup: function signup() {
            var _this = this;

            __cov_IrRM0jcX6Qw3y2sZO4Rt9w.f['1']++;__cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['1']++;this.set('sendingMessage', true);__cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['2']++;var user = this.get('model');__cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['3']++;user.save().then(function () {
               __cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['4']++;_this.set('sendingMessage', false);__cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['5']++;_this.set('msgProp.color', 'green accent 4');__cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['6']++;_this.set('msgProp.msg', 'Confirmation message sent, check your email!');
            })['catch'](function (resp) {
               __cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['7']++;_this.set('sendingMessage', false);__cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['8']++;_this.set('msgProp.color', 'red accent 4');__cov_IrRM0jcX6Qw3y2sZO4Rt9w.s['9']++;_this.set('msgProp.msg', 'error: ' + resp);
            });
         } } });
});