define("event_listeners_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("event listeners", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      window.xhr = undefined;
    }
  });

  test("adding a listener", function () {
    var wasCalled = false;
    xhr.addEventListener('somethingHappened', function () {
      wasCalled = true;
    });

    xhr.dispatchEvent({ type: 'somethingHappened' });

    ok(wasCalled, "the listener was called");
  });

  test("removing a listener", function () {
    var wasCalled = false;
    var listener = xhr.addEventListener('somethingHappened', function () {
      wasCalled = true;
    });

    xhr.dispatchEvent({ type: 'somethingHappened' });

    ok(wasCalled, "the listener was called");
  });
});