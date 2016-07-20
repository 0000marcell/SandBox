define('app4/controllers/password_reset', ['exports', 'ember'], function (exports, _ember) {
   var __cov_DhdGgHeVZqjCevyA5VXMEQ = Function('return this')();
   if (!__cov_DhdGgHeVZqjCevyA5VXMEQ.__coverage__) {
      __cov_DhdGgHeVZqjCevyA5VXMEQ.__coverage__ = {};
   }
   __cov_DhdGgHeVZqjCevyA5VXMEQ = __cov_DhdGgHeVZqjCevyA5VXMEQ.__coverage__;
   if (!__cov_DhdGgHeVZqjCevyA5VXMEQ['app/controllers/password_reset.js']) {
      __cov_DhdGgHeVZqjCevyA5VXMEQ['app/controllers/password_reset.js'] = { "path": "app/controllers/password_reset.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 7, "loc": { "start": { "line": 7, "column": 15 }, "end": { "line": 7, "column": 17 } } } }, "statementMap": { "1": { "start": { "line": 8, "column": 3 }, "end": { "line": 8, "column": 36 } }, "2": { "start": { "line": 9, "column": 3 }, "end": { "line": 25, "column": 6 } }, "3": { "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 38 } }, "4": { "start": { "line": 19, "column": 4 }, "end": { "line": 19, "column": 48 } }, "5": { "start": { "line": 20, "column": 4 }, "end": { "line": 20, "column": 72 } }, "6": { "start": { "line": 22, "column": 4 }, "end": { "line": 22, "column": 38 } }, "7": { "start": { "line": 23, "column": 4 }, "end": { "line": 23, "column": 46 } }, "8": { "start": { "line": 24, "column": 4 }, "end": { "line": 24, "column": 65 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Controller.extend({", "\tmsgProp: {},", "\tsendingMessage: false,", "\tactions: {", "\t\tresetPassword(){", "\t\t\tthis.set('sendingMessage', true);", "\t\t\tEmber.$.ajax({", "\t\t\t\ttype: \"POST\",", "\t\t\t\turl: \"/api/v1/password_resets\",", "\t\t\t\tdata:\t{", "\t\t\t\t\tuser: {", "\t\t\t\t\t\temail: this.get('email'),", "\t\t\t\t\t}", "\t\t\t\t}", "\t\t\t}).done(() => {", "\t\t\t\tthis.set('sendingMessage', false);", "\t\t\t\tthis.set('msgProp.color', 'green accent 4');", "\t\t\t\tthis.set('msgProp.msg', 'Check your email to reset your password!');", "\t\t\t}).fail((resp) => {", "\t\t\t\tthis.set('sendingMessage', false);", "\t\t\t\tthis.set('msgProp.color', 'red accent 4');", "\t\t\t\tthis.set('error while trying to reset your password: '+resp);", "\t\t\t});", "\t\t}", "\t}", "});", ""] };
   }
   __cov_DhdGgHeVZqjCevyA5VXMEQ = __cov_DhdGgHeVZqjCevyA5VXMEQ['app/controllers/password_reset.js'];
   exports['default'] = _ember['default'].Controller.extend({ msgProp: {}, sendingMessage: false, actions: { resetPassword: function resetPassword() {
            var _this = this;

            __cov_DhdGgHeVZqjCevyA5VXMEQ.f['1']++;__cov_DhdGgHeVZqjCevyA5VXMEQ.s['1']++;this.set('sendingMessage', true);__cov_DhdGgHeVZqjCevyA5VXMEQ.s['2']++;_ember['default'].$.ajax({ type: 'POST', url: '/api/v1/password_resets', data: { user: { email: this.get('email') } } }).done(function () {
               __cov_DhdGgHeVZqjCevyA5VXMEQ.s['3']++;_this.set('sendingMessage', false);__cov_DhdGgHeVZqjCevyA5VXMEQ.s['4']++;_this.set('msgProp.color', 'green accent 4');__cov_DhdGgHeVZqjCevyA5VXMEQ.s['5']++;_this.set('msgProp.msg', 'Check your email to reset your password!');
            }).fail(function (resp) {
               __cov_DhdGgHeVZqjCevyA5VXMEQ.s['6']++;_this.set('sendingMessage', false);__cov_DhdGgHeVZqjCevyA5VXMEQ.s['7']++;_this.set('msgProp.color', 'red accent 4');__cov_DhdGgHeVZqjCevyA5VXMEQ.s['8']++;_this.set('error while trying to reset your password: ' + resp);
            });
         } } });
});