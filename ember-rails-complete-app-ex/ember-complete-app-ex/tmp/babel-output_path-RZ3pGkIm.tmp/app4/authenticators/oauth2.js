define('app4/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant'], function (exports, _emberSimpleAuthAuthenticatorsOauth2PasswordGrant) {
   var __cov_IP4B3FoDCLGLGrD56BAFaw = Function('return this')();
   if (!__cov_IP4B3FoDCLGLGrD56BAFaw.__coverage__) {
      __cov_IP4B3FoDCLGLGrD56BAFaw.__coverage__ = {};
   }
   __cov_IP4B3FoDCLGLGrD56BAFaw = __cov_IP4B3FoDCLGLGrD56BAFaw.__coverage__;
   if (!__cov_IP4B3FoDCLGLGrD56BAFaw['app/authenticators/oauth2.js']) {
      __cov_IP4B3FoDCLGLGrD56BAFaw['app/authenticators/oauth2.js'] = { "path": "app/authenticators/oauth2.js", "s": {}, "b": {}, "f": {}, "fnMap": {}, "statementMap": {}, "branchMap": {}, "code": ["import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';", "", "export default OAuth2PasswordGrant.extend({", "\tserverTokenEndpoint: '/oauth/token'", "});", ""] };
   }
   __cov_IP4B3FoDCLGLGrD56BAFaw = __cov_IP4B3FoDCLGLGrD56BAFaw['app/authenticators/oauth2.js'];
   exports['default'] = _emberSimpleAuthAuthenticatorsOauth2PasswordGrant['default'].extend({ serverTokenEndpoint: '/oauth/token' });
});