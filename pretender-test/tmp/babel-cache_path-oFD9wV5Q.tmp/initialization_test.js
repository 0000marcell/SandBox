define("initialization_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("FakeXMLHttpRequest construction", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      xhr = undefined;
    }
  });

  test("readyState is 0", function () {
    equal(xhr.readyState, 0);
  });

  test("requestHeaders are {}", function () {
    deepEqual(xhr.requestHeaders, {});
  });

  test("requestBody is null", function () {
    equal(xhr.requestBody, null);
  });

  test("status is 0", function () {
    equal(xhr.status, 0);
  });

  test("statusText is empty", function () {
    equal(xhr.status, '');
  });

  test("withCredentials is false", function () {
    equal(xhr.withCredentials, false);
  });
});