define('app4/routes/users', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
   var __cov_t$QGoc$sZStE7IVDRiXRcQ = Function('return this')();
   if (!__cov_t$QGoc$sZStE7IVDRiXRcQ.__coverage__) {
      __cov_t$QGoc$sZStE7IVDRiXRcQ.__coverage__ = {};
   }
   __cov_t$QGoc$sZStE7IVDRiXRcQ = __cov_t$QGoc$sZStE7IVDRiXRcQ.__coverage__;
   if (!__cov_t$QGoc$sZStE7IVDRiXRcQ['app/routes/users.js']) {
      __cov_t$QGoc$sZStE7IVDRiXRcQ['app/routes/users.js'] = { "path": "app/routes/users.js", "s": { "1": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 5, "loc": { "start": { "line": 5, "column": 6 }, "end": { "line": 5, "column": 8 } } } }, "statementMap": { "1": { "start": { "line": 6, "column": 2 }, "end": { "line": 6, "column": 36 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';", "", "export default Ember.Route.extend(AuthenticatedRouteMixin, {", "\tmodel(){", "\t\treturn this.store.findAll('user');", "\t}", "});", ""] };
   }
   __cov_t$QGoc$sZStE7IVDRiXRcQ = __cov_t$QGoc$sZStE7IVDRiXRcQ['app/routes/users.js'];
   exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], { model: function model() {
         __cov_t$QGoc$sZStE7IVDRiXRcQ.f['1']++;__cov_t$QGoc$sZStE7IVDRiXRcQ.s['1']++;return this.store.findAll('user');
      } });
});