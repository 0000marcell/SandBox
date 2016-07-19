define('app4/instance-initializers/global', ['exports'], function (exports) {
   exports.initialize = initialize;

   var __cov_aIXerip5YaSjje9bt2yQ1Q = Function('return this')();
   if (!__cov_aIXerip5YaSjje9bt2yQ1Q.__coverage__) {
      __cov_aIXerip5YaSjje9bt2yQ1Q.__coverage__ = {};
   }
   __cov_aIXerip5YaSjje9bt2yQ1Q = __cov_aIXerip5YaSjje9bt2yQ1Q.__coverage__;
   if (!__cov_aIXerip5YaSjje9bt2yQ1Q['app/instance-initializers/global.js']) {
      __cov_aIXerip5YaSjje9bt2yQ1Q['app/instance-initializers/global.js'] = { "path": "app/instance-initializers/global.js", "s": { "1": 1, "2": 0, "3": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "initialize", "line": 1, "loc": { "start": { "line": 1, "column": 7 }, "end": { "line": 1, "column": 40 } } } }, "statementMap": { "1": { "start": { "line": 1, "column": 7 }, "end": { "line": 4, "column": 1 } }, "2": { "start": { "line": 2, "column": 1 }, "end": { "line": 2, "column": 57 } }, "3": { "start": { "line": 3, "column": 1 }, "end": { "line": 3, "column": 26 } } }, "branchMap": {}, "code": ["export function initialize(application) {", "\tapplication.store = application.lookup(\"service:store\");", "\twindow.App = application; ", "}", "", "export default {", "\tname: 'global',", "\tinitialize: initialize", "};", ""] };
   }
   __cov_aIXerip5YaSjje9bt2yQ1Q = __cov_aIXerip5YaSjje9bt2yQ1Q['app/instance-initializers/global.js'];

   function initialize(application) {
      __cov_aIXerip5YaSjje9bt2yQ1Q.f['1']++;__cov_aIXerip5YaSjje9bt2yQ1Q.s['2']++;application.store = application.lookup('service:store');__cov_aIXerip5YaSjje9bt2yQ1Q.s['3']++;window.App = application;
   }

   exports['default'] = { name: 'global', initialize: initialize };
});