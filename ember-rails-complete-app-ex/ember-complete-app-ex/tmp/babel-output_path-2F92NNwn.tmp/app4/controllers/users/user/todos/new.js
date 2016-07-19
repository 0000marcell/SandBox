define('app4/controllers/users/user/todos/new', ['exports', 'ember'], function (exports, _ember) {
   var __cov_lzncyhJqPFYqbZiXSZVtoQ = Function('return this')();
   if (!__cov_lzncyhJqPFYqbZiXSZVtoQ.__coverage__) {
      __cov_lzncyhJqPFYqbZiXSZVtoQ.__coverage__ = {};
   }
   __cov_lzncyhJqPFYqbZiXSZVtoQ = __cov_lzncyhJqPFYqbZiXSZVtoQ.__coverage__;
   if (!__cov_lzncyhJqPFYqbZiXSZVtoQ['app/controllers/users/user/todos/new.js']) {
      __cov_lzncyhJqPFYqbZiXSZVtoQ['app/controllers/users/user/todos/new.js'] = { "path": "app/controllers/users/user/todos/new.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 11, "loc": { "start": { "line": 11, "column": 6 }, "end": { "line": 11, "column": 8 } } } }, "statementMap": { "1": { "start": { "line": 12, "column": 3 }, "end": { "line": 12, "column": 33 } }, "2": { "start": { "line": 13, "column": 3 }, "end": { "line": 13, "column": 76 } }, "3": { "start": { "line": 14, "column": 3 }, "end": { "line": 22, "column": 6 } }, "4": { "start": { "line": 15, "column": 4 }, "end": { "line": 15, "column": 34 } }, "5": { "start": { "line": 16, "column": 4 }, "end": { "line": 16, "column": 43 } }, "6": { "start": { "line": 17, "column": 4 }, "end": { "line": 17, "column": 31 } }, "7": { "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 59 } }, "8": { "start": { "line": 20, "column": 4 }, "end": { "line": 20, "column": 41 } }, "9": { "start": { "line": 21, "column": 4 }, "end": { "line": 21, "column": 33 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Controller.extend({", "\tmsgVisible: false,", "\tmsgColor:\t\t'',", "\tmsgContent: 'Todo not saved!',", "\ttodosController: Ember.inject.controller('users/user/todos'),", "\ttodos: Ember.computed.reads('todosController.model'),", "\tauthManager: Ember.inject.service('session'),", "\tactions: {", "\t\tsave(){", "\t\t\tlet model = this.get('model');", "\t\t\tmodel.set('user_id', this.get('authManager.data.authenticated.user.id'));", "\t\t\tmodel.save().then((model) => {", "\t\t\t\tthis.set('msgVisible', false);", "\t\t\t\tthis.set('msgColor', 'green accent 4');", "\t\t\t\tthis.get('todos').reload();", "\t\t\t\tthis.transitionToRoute('users.user.todos.todo', model); ", "\t\t\t}).catch(() => {", "\t\t\t\tthis.set('msgColor', 'red accent 4');", "\t\t\t\tthis.set('msgVisible', true);", "\t\t\t});", "\t\t}", "\t}", "});", ""] };
   }
   __cov_lzncyhJqPFYqbZiXSZVtoQ = __cov_lzncyhJqPFYqbZiXSZVtoQ['app/controllers/users/user/todos/new.js'];
   exports['default'] = _ember['default'].Controller.extend({ msgVisible: false, msgColor: '', msgContent: 'Todo not saved!', todosController: _ember['default'].inject.controller('users/user/todos'), todos: _ember['default'].computed.reads('todosController.model'), authManager: _ember['default'].inject.service('session'), actions: { save: function save() {
            var _this = this;

            __cov_lzncyhJqPFYqbZiXSZVtoQ.f['1']++;__cov_lzncyhJqPFYqbZiXSZVtoQ.s['1']++;var model = this.get('model');__cov_lzncyhJqPFYqbZiXSZVtoQ.s['2']++;model.set('user_id', this.get('authManager.data.authenticated.user.id'));__cov_lzncyhJqPFYqbZiXSZVtoQ.s['3']++;model.save().then(function (model) {
               __cov_lzncyhJqPFYqbZiXSZVtoQ.s['4']++;_this.set('msgVisible', false);__cov_lzncyhJqPFYqbZiXSZVtoQ.s['5']++;_this.set('msgColor', 'green accent 4');__cov_lzncyhJqPFYqbZiXSZVtoQ.s['6']++;_this.get('todos').reload();__cov_lzncyhJqPFYqbZiXSZVtoQ.s['7']++;_this.transitionToRoute('users.user.todos.todo', model);
            })['catch'](function () {
               __cov_lzncyhJqPFYqbZiXSZVtoQ.s['8']++;_this.set('msgColor', 'red accent 4');__cov_lzncyhJqPFYqbZiXSZVtoQ.s['9']++;_this.set('msgVisible', true);
            });
         } } });
});