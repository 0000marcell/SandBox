define('app4/components/simple-chat', ['exports', 'ember'], function (exports, _ember) {
   var __cov_B_ZGk4NBRFOSLvlkxwSbsg = Function('return this')();
   if (!__cov_B_ZGk4NBRFOSLvlkxwSbsg.__coverage__) {
      __cov_B_ZGk4NBRFOSLvlkxwSbsg.__coverage__ = {};
   }
   __cov_B_ZGk4NBRFOSLvlkxwSbsg = __cov_B_ZGk4NBRFOSLvlkxwSbsg.__coverage__;
   if (!__cov_B_ZGk4NBRFOSLvlkxwSbsg['app/components/simple-chat.js']) {
      __cov_B_ZGk4NBRFOSLvlkxwSbsg['app/components/simple-chat.js'] = { "path": "app/components/simple-chat.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }, "b": {}, "f": { "1": 0, "2": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 8, "loc": { "start": { "line": 8, "column": 37 }, "end": { "line": 8, "column": 48 } } }, "2": { "name": "(anonymous_2)", "line": 19, "loc": { "start": { "line": 19, "column": 13 }, "end": { "line": 19, "column": 16 } } } }, "statementMap": { "1": { "start": { "line": 9, "column": 2 }, "end": { "line": 10, "column": 59 } }, "2": { "start": { "line": 11, "column": 2 }, "end": { "line": 15, "column": 5 } }, "3": { "start": { "line": 13, "column": 4 }, "end": { "line": 13, "column": 80 } }, "4": { "start": { "line": 16, "column": 2 }, "end": { "line": 16, "column": 41 } }, "5": { "start": { "line": 20, "column": 3 }, "end": { "line": 21, "column": 53 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Component.extend({", "\tcableService: Ember.inject.service('cable'),", "\tmessages: [],", "\tusername: 'guest',", "\tbody: 'message body',", "\tsetupSubscription: Ember.on('init', function() {", "\t\tvar consumer = this.get('cableService')", "\t\t\t\t\t\t\t\t\t\t.createConsumer('ws://localhost:3000/websocket');", "\t\tvar subscription = consumer.subscriptions.create(\"MessagesChannel\", {", "\t\t\treceived: (data) => {", "\t\t\t\tthis.get('messages').pushObject({username: data.username, body: data.body});", "\t\t\t}", "\t\t});", "\t\tthis.set('subscription', subscription);", "\t}),", "\tactions: {", "\t\tsendMessage() {", "\t\t\tthis.get('subscription').send({ username: ", "\t\t\t\tthis.get('username'), body: this.get('body')  });", "\t\t}", "\t}", "});", ""] };
   }
   __cov_B_ZGk4NBRFOSLvlkxwSbsg = __cov_B_ZGk4NBRFOSLvlkxwSbsg['app/components/simple-chat.js'];
   exports['default'] = _ember['default'].Component.extend({ cableService: _ember['default'].inject.service('cable'), messages: [], username: 'guest', body: 'message body', setupSubscription: _ember['default'].on('init', function () {
         var _this = this;

         __cov_B_ZGk4NBRFOSLvlkxwSbsg.f['1']++;__cov_B_ZGk4NBRFOSLvlkxwSbsg.s['1']++;var consumer = this.get('cableService').createConsumer('ws://localhost:3000/websocket');__cov_B_ZGk4NBRFOSLvlkxwSbsg.s['2']++;var subscription = consumer.subscriptions.create('MessagesChannel', { received: function received(data) {
               __cov_B_ZGk4NBRFOSLvlkxwSbsg.s['3']++;_this.get('messages').pushObject({ username: data.username, body: data.body });
            } });__cov_B_ZGk4NBRFOSLvlkxwSbsg.s['4']++;this.set('subscription', subscription);
      }), actions: { sendMessage: function sendMessage() {
            __cov_B_ZGk4NBRFOSLvlkxwSbsg.f['2']++;__cov_B_ZGk4NBRFOSLvlkxwSbsg.s['5']++;this.get('subscription').send({ username: this.get('username'), body: this.get('body') });
         } } });
});