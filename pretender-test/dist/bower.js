define("aborting_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("aborting", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      window.xhr = undefined;
    }
  });

  test("sets aborted to true", function () {
    xhr.abort();
    equal(xhr.aborted, true);
  });

  test("sets responseText to null", function () {
    xhr.abort();
    equal(xhr.responseText, null);
  });

  test("sets errorFlag to true", function () {
    xhr.abort();
    equal(xhr.errorFlag, true);
  });

  test("sets requestHeaders to {}", function () {
    xhr.abort();
    deepEqual(xhr.requestHeaders, {});
  });

  test("sets readyState to 0", function () {
    xhr.abort();
    equal(xhr.readyState, 0);
  });

  test("calls the abort event", function () {
    var wasCalled = false;
    xhr.addEventListener('abort', function () {
      wasCalled = true;
    });

    xhr.abort();

    ok(wasCalled);
  });

  test("calls the onerror event", function () {
    var wasCalled = false;
    xhr.onerror = function () {
      wasCalled = true;
    };

    xhr.abort();

    ok(wasCalled);
  });
});
define('add', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  function add() {
    var i = 1000;

    while (i--) {
      router.add([{ path: "/foo/" + i, handler: { handler: i } }]);
    }
  }

  module.exports = {
    name: 'Add',
    fn: function fn() {
      add();
    }
  };
});
define('bench/benches/add', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  function add() {
    var i = 1000;

    while (i--) {
      router.add([{ path: "/foo/" + i, handler: { handler: i } }]);
    }
  }

  module.exports = {
    name: 'Add',
    fn: function fn() {
      add();
    }
  };
});
define('bench/benches/end-to-end', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  module.exports = {
    name: 'End-to-end',
    fn: function fn() {
      var router = new RouteRecognizer();

      router.map(function (match) {
        var i = 1000;
        while (i--) {
          match('/posts/' + i).to('showPost' + i);
        }
      });

      // Look up time is constant
      router.recognize('/posts/1');
    }
  };
});
define("bench/benches/generate", ["exports"], function (exports) {
  "use strict";

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/posts/:id", handler: {} }], { as: "post" });
  }

  module.exports = {
    name: 'Generate',
    fn: function fn() {
      router.generate("post", { id: 1 });
    }
  };
});
define('bench/benches/handlers-for', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/foo/" + i, handler: { handler: i } }], { as: 'foo' });
  }

  module.exports = {
    name: 'Handlers For',
    fn: function fn() {
      router.handlersFor('foo');
    }
  };
});
define('bench/benches/recognize', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/foo/" + i, handler: { handler: i } }]);
  }

  module.exports = {
    name: 'Recognize',
    fn: function fn() {
      router.recognize('/foo/1');
    }
  };
});
define('bench/index', ['exports'], function (exports) {
  'use strict';

  var glob = require('glob');
  var path = require('path');
  var bench = require('do-you-even-bench');

  bench(glob.sync('./bench/benches/*.js').map(function (file) {
    return require(path.resolve(file));
  }));
});
define('benches/add', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  function add() {
    var i = 1000;

    while (i--) {
      router.add([{ path: "/foo/" + i, handler: { handler: i } }]);
    }
  }

  module.exports = {
    name: 'Add',
    fn: function fn() {
      add();
    }
  };
});
define('benches/end-to-end', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  module.exports = {
    name: 'End-to-end',
    fn: function fn() {
      var router = new RouteRecognizer();

      router.map(function (match) {
        var i = 1000;
        while (i--) {
          match('/posts/' + i).to('showPost' + i);
        }
      });

      // Look up time is constant
      router.recognize('/posts/1');
    }
  };
});
define("benches/generate", ["exports"], function (exports) {
  "use strict";

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/posts/:id", handler: {} }], { as: "post" });
  }

  module.exports = {
    name: 'Generate',
    fn: function fn() {
      router.generate("post", { id: 1 });
    }
  };
});
define('benches/handlers-for', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/foo/" + i, handler: { handler: i } }], { as: 'foo' });
  }

  module.exports = {
    name: 'Handlers For',
    fn: function fn() {
      router.handlersFor('foo');
    }
  };
});
define('benches/recognize', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/foo/" + i, handler: { handler: i } }]);
  }

  module.exports = {
    name: 'Recognize',
    fn: function fn() {
      router.recognize('/foo/1');
    }
  };
});
define('Brocfile', ['exports'], function (exports) {
  'use strict';

  var compileModules = require('broccoli-compile-modules');
  var jsHint = require('broccoli-jshint');
  var Funnel = require('broccoli-funnel');
  var mergeTrees = require('broccoli-merge-trees');
  var concat = require('broccoli-concat');
  var replace = require('broccoli-string-replace');

  /**
   * Builds the consumable lib
   * @param  {Tree} libTree
   * @return {Array}
   */
  function buildDistLib(libTree) {
    var compiledModules = compileModules(libTree, {
      inputFiles: ['route-recognizer.umd.js'],
      output: '/route-recognizer.js'
    });

    var es6Modules = new Funnel(libTree, {
      exclude: ['*.umd.js'],
      destDir: '/es6'
    });

    return mergeTrees([es6Modules, compiledModules]);
  }

  /**
   * Builds the test suite including jsHint
   * and Qunit harness.
   * @param  {Tree} libTree
   * @return {Tree}
   */
  function buildTestSuite(libTree) {
    var destination = '/tests';

    var jsHintLib = jsHint(libTree);

    var testTree = new Funnel('tests', {
      files: ['recognizer-tests.js', 'router-tests.js'],
      destDir: destination
    });

    var jsHintTests = jsHint(testTree);

    var allTestFiles = mergeTrees([libTree, testTree]);

    var testBundle = compileModules(allTestFiles, {
      inputFiles: ['route-recognizer.js', 'tests/*.js'],
      formatter: 'bundle',
      output: '/tests/route-recognizer-test-bundle.js'
    });

    var tests = mergeTrees([jsHintLib, jsHintTests, testBundle]);

    tests = concat(tests, {
      inputFiles: ['**/*.js'],
      outputFile: '/tests/route-recognizer-test-bundle.js'
    });

    var testHarness = new Funnel('tests', {
      files: ['index.html'],
      destDir: destination
    });

    var qunit = new Funnel('bower_components/qunit/qunit', {
      files: ['qunit.js', 'qunit.css'],
      destDir: destination
    });

    return mergeTrees([tests, testHarness, qunit]);
  }

  var lib = new Funnel('lib', {
    destDir: '/'
  });

  var version = require('./package.json').version;

  lib = replace(lib, {
    files: ['**/*.js'],
    patterns: [{ match: /VERSION_STRING_PLACEHOLDER/g, replacement: version }]
  });

  var testSuite = buildTestSuite(lib);
  var distLibs = buildDistLib(lib);

  module.exports = mergeTrees([distLibs, testSuite]);
});
define("dist/route-recognizer", ["exports"], function (exports) {
  "use strict";

  (function () {
    "use strict";
    function $$route$recognizer$dsl$$Target(path, matcher, delegate) {
      this.path = path;
      this.matcher = matcher;
      this.delegate = delegate;
    }

    $$route$recognizer$dsl$$Target.prototype = {
      to: function to(target, callback) {
        var delegate = this.delegate;

        if (delegate && delegate.willAddRoute) {
          target = delegate.willAddRoute(this.matcher.target, target);
        }

        this.matcher.add(this.path, target);

        if (callback) {
          if (callback.length === 0) {
            throw new Error("You must have an argument in the function passed to `to`");
          }
          this.matcher.addChild(this.path, target, callback, this.delegate);
        }
        return this;
      }
    };

    function $$route$recognizer$dsl$$Matcher(target) {
      this.routes = {};
      this.children = {};
      this.target = target;
    }

    $$route$recognizer$dsl$$Matcher.prototype = {
      add: function add(path, handler) {
        this.routes[path] = handler;
      },

      addChild: function addChild(path, target, callback, delegate) {
        var matcher = new $$route$recognizer$dsl$$Matcher(target);
        this.children[path] = matcher;

        var match = $$route$recognizer$dsl$$generateMatch(path, matcher, delegate);

        if (delegate && delegate.contextEntered) {
          delegate.contextEntered(target, match);
        }

        callback(match);
      }
    };

    function $$route$recognizer$dsl$$generateMatch(startingPath, matcher, delegate) {
      return function (path, nestedCallback) {
        var fullPath = startingPath + path;

        if (nestedCallback) {
          nestedCallback($$route$recognizer$dsl$$generateMatch(fullPath, matcher, delegate));
        } else {
          return new $$route$recognizer$dsl$$Target(startingPath + path, matcher, delegate);
        }
      };
    }

    function $$route$recognizer$dsl$$addRoute(routeArray, path, handler) {
      var len = 0;
      for (var i = 0; i < routeArray.length; i++) {
        len += routeArray[i].path.length;
      }

      path = path.substr(len);
      var route = { path: path, handler: handler };
      routeArray.push(route);
    }

    function $$route$recognizer$dsl$$eachRoute(baseRoute, matcher, callback, binding) {
      var routes = matcher.routes;

      for (var path in routes) {
        if (routes.hasOwnProperty(path)) {
          var routeArray = baseRoute.slice();
          $$route$recognizer$dsl$$addRoute(routeArray, path, routes[path]);

          if (matcher.children[path]) {
            $$route$recognizer$dsl$$eachRoute(routeArray, matcher.children[path], callback, binding);
          } else {
            callback.call(binding, routeArray);
          }
        }
      }
    }

    var $$route$recognizer$dsl$$default = function $$route$recognizer$dsl$$default(callback, addRouteCallback) {
      var matcher = new $$route$recognizer$dsl$$Matcher();

      callback($$route$recognizer$dsl$$generateMatch("", matcher, this.delegate));

      $$route$recognizer$dsl$$eachRoute([], matcher, function (route) {
        if (addRouteCallback) {
          addRouteCallback(this, route);
        } else {
          this.add(route);
        }
      }, this);
    };

    var $$route$recognizer$$specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

    var $$route$recognizer$$escapeRegex = new RegExp('(\\' + $$route$recognizer$$specials.join('|\\') + ')', 'g');

    function $$route$recognizer$$isArray(test) {
      return Object.prototype.toString.call(test) === "[object Array]";
    }

    // A Segment represents a segment in the original route description.
    // Each Segment type provides an `eachChar` and `regex` method.
    //
    // The `eachChar` method invokes the callback with one or more character
    // specifications. A character specification consumes one or more input
    // characters.
    //
    // The `regex` method returns a regex fragment for the segment. If the
    // segment is a dynamic of star segment, the regex fragment also includes
    // a capture.
    //
    // A character specification contains:
    //
    // * `validChars`: a String with a list of all valid characters, or
    // * `invalidChars`: a String with a list of all invalid characters
    // * `repeat`: true if the character specification can repeat

    function $$route$recognizer$$StaticSegment(string) {
      this.string = string;
    }
    $$route$recognizer$$StaticSegment.prototype = {
      eachChar: function eachChar(currentState) {
        var string = this.string,
            ch;

        for (var i = 0; i < string.length; i++) {
          ch = string.charAt(i);
          currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: ch });
        }

        return currentState;
      },

      regex: function regex() {
        return this.string.replace($$route$recognizer$$escapeRegex, '\\$1');
      },

      generate: function generate() {
        return this.string;
      }
    };

    function $$route$recognizer$$DynamicSegment(name) {
      this.name = name;
    }
    $$route$recognizer$$DynamicSegment.prototype = {
      eachChar: function eachChar(currentState) {
        return currentState.put({ invalidChars: "/", repeat: true, validChars: undefined });
      },

      regex: function regex() {
        return "([^/]+)";
      },

      generate: function generate(params) {
        return params[this.name];
      }
    };

    function $$route$recognizer$$StarSegment(name) {
      this.name = name;
    }
    $$route$recognizer$$StarSegment.prototype = {
      eachChar: function eachChar(currentState) {
        return currentState.put({ invalidChars: "", repeat: true, validChars: undefined });
      },

      regex: function regex() {
        return "(.+)";
      },

      generate: function generate(params) {
        return params[this.name];
      }
    };

    function $$route$recognizer$$EpsilonSegment() {}
    $$route$recognizer$$EpsilonSegment.prototype = {
      eachChar: function eachChar(currentState) {
        return currentState;
      },
      regex: function regex() {
        return "";
      },
      generate: function generate() {
        return "";
      }
    };

    function $$route$recognizer$$parse(route, names, specificity) {
      // normalize route as not starting with a "/". Recognition will
      // also normalize.
      if (route.charAt(0) === "/") {
        route = route.substr(1);
      }

      var segments = route.split("/");
      var results = new Array(segments.length);

      // A routes has specificity determined by the order that its different segments
      // appear in. This system mirrors how the magnitude of numbers written as strings
      // works.
      // Consider a number written as: "abc". An example would be "200". Any other number written
      // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
      // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
      // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
      // leading symbol, "1".
      // The rule is that symbols to the left carry more weight than symbols to the right
      // when a number is written out as a string. In the above strings, the leading digit
      // represents how many 100's are in the number, and it carries more weight than the middle
      // number which represents how many 10's are in the number.
      // This system of number magnitude works well for route specificity, too. A route written as
      // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
      // `x`, irrespective of the other parts.
      // Because of this similarity, we assign each type of segment a number value written as a
      // string. We can find the specificity of compound routes by concatenating these strings
      // together, from left to right. After we have looped through all of the segments,
      // we convert the string to a number.
      specificity.val = '';

      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i],
            match;

        if (match = segment.match(/^:([^\/]+)$/)) {
          results[i] = new $$route$recognizer$$DynamicSegment(match[1]);
          names.push(match[1]);
          specificity.val += '3';
        } else if (match = segment.match(/^\*([^\/]+)$/)) {
          results[i] = new $$route$recognizer$$StarSegment(match[1]);
          specificity.val += '1';
          names.push(match[1]);
        } else if (segment === "") {
          results[i] = new $$route$recognizer$$EpsilonSegment();
          specificity.val += '2';
        } else {
          results[i] = new $$route$recognizer$$StaticSegment(segment);
          specificity.val += '4';
        }
      }

      specificity.val = +specificity.val;

      return results;
    }

    // A State has a character specification and (`charSpec`) and a list of possible
    // subsequent states (`nextStates`).
    //
    // If a State is an accepting state, it will also have several additional
    // properties:
    //
    // * `regex`: A regular expression that is used to extract parameters from paths
    //   that reached this accepting state.
    // * `handlers`: Information on how to convert the list of captures into calls
    //   to registered handlers with the specified parameters
    // * `types`: How many static, dynamic or star segments in this route. Used to
    //   decide which route to use if multiple registered routes match a path.
    //
    // Currently, State is implemented naively by looping over `nextStates` and
    // comparing a character specification against a character. A more efficient
    // implementation would use a hash of keys pointing at one or more next states.

    function $$route$recognizer$$State(charSpec) {
      this.charSpec = charSpec;
      this.nextStates = [];
      this.charSpecs = {};
      this.regex = undefined;
      this.handlers = undefined;
      this.specificity = undefined;
    }

    $$route$recognizer$$State.prototype = {
      get: function get(charSpec) {
        if (this.charSpecs[charSpec.validChars]) {
          return this.charSpecs[charSpec.validChars];
        }

        var nextStates = this.nextStates;

        for (var i = 0; i < nextStates.length; i++) {
          var child = nextStates[i];

          var isEqual = child.charSpec.validChars === charSpec.validChars;
          isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

          if (isEqual) {
            this.charSpecs[charSpec.validChars] = child;
            return child;
          }
        }
      },

      put: function put(charSpec) {
        var state;

        // If the character specification already exists in a child of the current
        // state, just return that state.
        if (state = this.get(charSpec)) {
          return state;
        }

        // Make a new state for the character spec
        state = new $$route$recognizer$$State(charSpec);

        // Insert the new state as a child of the current state
        this.nextStates.push(state);

        // If this character specification repeats, insert the new state as a child
        // of itself. Note that this will not trigger an infinite loop because each
        // transition during recognition consumes a character.
        if (charSpec.repeat) {
          state.nextStates.push(state);
        }

        // Return the new state
        return state;
      },

      // Find a list of child states matching the next character
      match: function match(ch) {
        var nextStates = this.nextStates,
            child,
            charSpec,
            chars;

        var returned = [];

        for (var i = 0; i < nextStates.length; i++) {
          child = nextStates[i];

          charSpec = child.charSpec;

          if (typeof (chars = charSpec.validChars) !== 'undefined') {
            if (chars.indexOf(ch) !== -1) {
              returned.push(child);
            }
          } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
            if (chars.indexOf(ch) === -1) {
              returned.push(child);
            }
          }
        }

        return returned;
      }
    };

    // Sort the routes by specificity
    function $$route$recognizer$$sortSolutions(states) {
      return states.sort(function (a, b) {
        return b.specificity.val - a.specificity.val;
      });
    }

    function $$route$recognizer$$recognizeChar(states, ch) {
      var nextStates = [];

      for (var i = 0, l = states.length; i < l; i++) {
        var state = states[i];

        nextStates = nextStates.concat(state.match(ch));
      }

      return nextStates;
    }

    var $$route$recognizer$$oCreate = Object.create || function (proto) {
      function F() {}
      F.prototype = proto;
      return new F();
    };

    function $$route$recognizer$$RecognizeResults(queryParams) {
      this.queryParams = queryParams || {};
    }
    $$route$recognizer$$RecognizeResults.prototype = $$route$recognizer$$oCreate({
      splice: Array.prototype.splice,
      slice: Array.prototype.slice,
      push: Array.prototype.push,
      length: 0,
      queryParams: null
    });

    function $$route$recognizer$$findHandler(state, path, queryParams) {
      var handlers = state.handlers,
          regex = state.regex;
      var captures = path.match(regex),
          currentCapture = 1;
      var result = new $$route$recognizer$$RecognizeResults(queryParams);

      result.length = handlers.length;

      for (var i = 0; i < handlers.length; i++) {
        var handler = handlers[i],
            names = handler.names,
            params = {};

        for (var j = 0; j < names.length; j++) {
          params[names[j]] = captures[currentCapture++];
        }

        result[i] = { handler: handler.handler, params: params, isDynamic: !!names.length };
      }

      return result;
    }

    function $$route$recognizer$$decodeQueryParamPart(part) {
      // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
      part = part.replace(/\+/gm, '%20');
      var result;
      try {
        result = decodeURIComponent(part);
      } catch (error) {
        result = '';
      }
      return result;
    }

    // The main interface

    var $$route$recognizer$$RouteRecognizer = function $$route$recognizer$$RouteRecognizer() {
      this.rootState = new $$route$recognizer$$State();
      this.names = {};
    };

    $$route$recognizer$$RouteRecognizer.prototype = {
      add: function add(routes, options) {
        var currentState = this.rootState,
            regex = "^",
            specificity = {},
            handlers = new Array(routes.length),
            allSegments = [],
            name;

        var isEmpty = true;

        for (var i = 0; i < routes.length; i++) {
          var route = routes[i],
              names = [];

          var segments = $$route$recognizer$$parse(route.path, names, specificity);

          allSegments = allSegments.concat(segments);

          for (var j = 0; j < segments.length; j++) {
            var segment = segments[j];

            if (segment instanceof $$route$recognizer$$EpsilonSegment) {
              continue;
            }

            isEmpty = false;

            // Add a "/" for the new segment
            currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: "/" });
            regex += "/";

            // Add a representation of the segment to the NFA and regex
            currentState = segment.eachChar(currentState);
            regex += segment.regex();
          }
          var handler = { handler: route.handler, names: names };
          handlers[i] = handler;
        }

        if (isEmpty) {
          currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: "/" });
          regex += "/";
        }

        currentState.handlers = handlers;
        currentState.regex = new RegExp(regex + "$");
        currentState.specificity = specificity;

        if (name = options && options.as) {
          this.names[name] = {
            segments: allSegments,
            handlers: handlers
          };
        }
      },

      handlersFor: function handlersFor(name) {
        var route = this.names[name];

        if (!route) {
          throw new Error("There is no route named " + name);
        }

        var result = new Array(route.handlers.length);

        for (var i = 0; i < route.handlers.length; i++) {
          result[i] = route.handlers[i];
        }

        return result;
      },

      hasRoute: function hasRoute(name) {
        return !!this.names[name];
      },

      generate: function generate(name, params) {
        var route = this.names[name],
            output = "";
        if (!route) {
          throw new Error("There is no route named " + name);
        }

        var segments = route.segments;

        for (var i = 0; i < segments.length; i++) {
          var segment = segments[i];

          if (segment instanceof $$route$recognizer$$EpsilonSegment) {
            continue;
          }

          output += "/";
          output += segment.generate(params);
        }

        if (output.charAt(0) !== '/') {
          output = '/' + output;
        }

        if (params && params.queryParams) {
          output += this.generateQueryString(params.queryParams, route.handlers);
        }

        return output;
      },

      generateQueryString: function generateQueryString(params, handlers) {
        var pairs = [];
        var keys = [];
        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            keys.push(key);
          }
        }
        keys.sort();
        for (var i = 0; i < keys.length; i++) {
          key = keys[i];
          var value = params[key];
          if (value == null) {
            continue;
          }
          var pair = encodeURIComponent(key);
          if ($$route$recognizer$$isArray(value)) {
            for (var j = 0; j < value.length; j++) {
              var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
              pairs.push(arrayPair);
            }
          } else {
            pair += "=" + encodeURIComponent(value);
            pairs.push(pair);
          }
        }

        if (pairs.length === 0) {
          return '';
        }

        return "?" + pairs.join("&");
      },

      parseQueryString: function parseQueryString(queryString) {
        var pairs = queryString.split("&"),
            queryParams = {};
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('='),
              key = $$route$recognizer$$decodeQueryParamPart(pair[0]),
              keyLength = key.length,
              isArray = false,
              value;
          if (pair.length === 1) {
            value = 'true';
          } else {
            //Handle arrays
            if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
              isArray = true;
              key = key.slice(0, keyLength - 2);
              if (!queryParams[key]) {
                queryParams[key] = [];
              }
            }
            value = pair[1] ? $$route$recognizer$$decodeQueryParamPart(pair[1]) : '';
          }
          if (isArray) {
            queryParams[key].push(value);
          } else {
            queryParams[key] = value;
          }
        }
        return queryParams;
      },

      recognize: function recognize(path) {
        var states = [this.rootState],
            pathLen,
            i,
            l,
            queryStart,
            queryParams = {},
            isSlashDropped = false;

        queryStart = path.indexOf('?');
        if (queryStart !== -1) {
          var queryString = path.substr(queryStart + 1, path.length);
          path = path.substr(0, queryStart);
          queryParams = this.parseQueryString(queryString);
        }

        path = decodeURI(path);

        if (path.charAt(0) !== "/") {
          path = "/" + path;
        }

        pathLen = path.length;
        if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
          path = path.substr(0, pathLen - 1);
          isSlashDropped = true;
        }

        for (i = 0; i < path.length; i++) {
          states = $$route$recognizer$$recognizeChar(states, path.charAt(i));
          if (!states.length) {
            break;
          }
        }

        var solutions = [];
        for (i = 0; i < states.length; i++) {
          if (states[i].handlers) {
            solutions.push(states[i]);
          }
        }

        states = $$route$recognizer$$sortSolutions(solutions);

        var state = solutions[0];

        if (state && state.handlers) {
          // if a trailing slash was dropped and a star segment is the last segment
          // specified, put the trailing slash back
          if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
            path = path + "/";
          }
          return $$route$recognizer$$findHandler(state, path, queryParams);
        }
      }
    };

    $$route$recognizer$$RouteRecognizer.prototype.map = $$route$recognizer$dsl$$default;

    $$route$recognizer$$RouteRecognizer.VERSION = '0.1.11';

    var $$route$recognizer$$default = $$route$recognizer$$RouteRecognizer;

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define('route-recognizer', function () {
        return $$route$recognizer$$default;
      });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = $$route$recognizer$$default;
    } else if (typeof this !== 'undefined') {
      this['RouteRecognizer'] = $$route$recognizer$$default;
    }
  }).call(undefined);

  //# sourceMappingURL=route-recognizer.js.map
});
define("dsl", ["exports", "module"], function (exports, module) {
  "use strict";

  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0; i < routeArray.length; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  module.exports = function (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  };
});
define('end-to-end', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  module.exports = {
    name: 'End-to-end',
    fn: function fn() {
      var router = new RouteRecognizer();

      router.map(function (match) {
        var i = 1000;
        while (i--) {
          match('/posts/' + i).to('showPost' + i);
        }
      });

      // Look up time is constant
      router.recognize('/posts/1');
    }
  };
});
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
define('fake_xml_http_request', ['exports'], function (exports) {
  'use strict';

  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.FakeXMLHttpRequest = factory();
  })(undefined, function () {
    'use strict';

    /**
     * Minimal Event interface implementation
     *
     * Original implementation by Sven Fuchs: https://gist.github.com/995028
     * Modifications and tests by Christian Johansen.
     *
     * @author Sven Fuchs (svenfuchs@artweb-design.de)
     * @author Christian Johansen (christian@cjohansen.no)
     * @license BSD
     *
     * Copyright (c) 2011 Sven Fuchs, Christian Johansen
     */

    var _Event = function Event(type, bubbles, cancelable, target) {
      this.type = type;
      this.bubbles = bubbles;
      this.cancelable = cancelable;
      this.target = target;
    };

    _Event.prototype = {
      stopPropagation: function stopPropagation() {},
      preventDefault: function preventDefault() {
        this.defaultPrevented = true;
      }
    };

    /*
      Used to set the statusText property of an xhr object
    */
    var httpStatusCodes = {
      100: "Continue",
      101: "Switching Protocols",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      300: "Multiple Choice",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Request Entity Too Large",
      414: "Request-URI Too Long",
      415: "Unsupported Media Type",
      416: "Requested Range Not Satisfiable",
      417: "Expectation Failed",
      422: "Unprocessable Entity",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported"
    };

    /*
      Cross-browser XML parsing. Used to turn
      XML responses into Document objects
      Borrowed from JSpec
    */
    function parseXML(text) {
      var xmlDoc;

      if (typeof DOMParser != "undefined") {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(text, "text/xml");
      } else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(text);
      }

      return xmlDoc;
    }

    /*
      Without mocking, the native XMLHttpRequest object will throw
      an error when attempting to set these headers. We match this behavior.
    */
    var unsafeHeaders = {
      "Accept-Charset": true,
      "Accept-Encoding": true,
      "Connection": true,
      "Content-Length": true,
      "Cookie": true,
      "Cookie2": true,
      "Content-Transfer-Encoding": true,
      "Date": true,
      "Expect": true,
      "Host": true,
      "Keep-Alive": true,
      "Referer": true,
      "TE": true,
      "Trailer": true,
      "Transfer-Encoding": true,
      "Upgrade": true,
      "User-Agent": true,
      "Via": true
    };

    /*
      Adds an "event" onto the fake xhr object
      that just calls the same-named method. This is
      in case a library adds callbacks for these events.
    */
    function _addEventListener(eventName, xhr) {
      xhr.addEventListener(eventName, function (event) {
        var listener = xhr["on" + eventName];

        if (listener && typeof listener == "function") {
          listener(event);
        }
      });
    }

    function EventedObject() {
      this._eventListeners = {};
      var events = ["loadstart", "progress", "load", "abort", "loadend"];
      for (var i = events.length - 1; i >= 0; i--) {
        _addEventListener(events[i], this);
      }
    };

    EventedObject.prototype = {
      /*
        Duplicates the behavior of native XMLHttpRequest's addEventListener function
      */
      addEventListener: function addEventListener(event, listener) {
        this._eventListeners[event] = this._eventListeners[event] || [];
        this._eventListeners[event].push(listener);
      },

      /*
        Duplicates the behavior of native XMLHttpRequest's removeEventListener function
      */
      removeEventListener: function removeEventListener(event, listener) {
        var listeners = this._eventListeners[event] || [];

        for (var i = 0, l = listeners.length; i < l; ++i) {
          if (listeners[i] == listener) {
            return listeners.splice(i, 1);
          }
        }
      },

      /*
        Duplicates the behavior of native XMLHttpRequest's dispatchEvent function
      */
      dispatchEvent: function dispatchEvent(event) {
        var type = event.type;
        var listeners = this._eventListeners[type] || [];

        for (var i = 0; i < listeners.length; i++) {
          if (typeof listeners[i] == "function") {
            listeners[i].call(this, event);
          } else {
            listeners[i].handleEvent(event);
          }
        }

        return !!event.defaultPrevented;
      },

      /*
        Triggers an `onprogress` event with the given parameters.
      */
      _progress: function _progress(lengthComputable, loaded, total) {
        var event = new _Event('progress');
        event.target = this;
        event.lengthComputable = lengthComputable;
        event.loaded = loaded;
        event.total = total;
        this.dispatchEvent(event);
      }
    };

    /*
      Constructor for a fake window.XMLHttpRequest
    */
    function FakeXMLHttpRequest() {
      EventedObject.call(this);
      this.readyState = FakeXMLHttpRequest.UNSENT;
      this.requestHeaders = {};
      this.requestBody = null;
      this.status = 0;
      this.statusText = "";
      this.upload = new EventedObject();
    }

    FakeXMLHttpRequest.prototype = new EventedObject();

    // These status codes are available on the native XMLHttpRequest
    // object, so we match that here in case a library is relying on them.
    FakeXMLHttpRequest.UNSENT = 0;
    FakeXMLHttpRequest.OPENED = 1;
    FakeXMLHttpRequest.HEADERS_RECEIVED = 2;
    FakeXMLHttpRequest.LOADING = 3;
    FakeXMLHttpRequest.DONE = 4;

    var FakeXMLHttpRequestProto = {
      UNSENT: 0,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: 4,
      async: true,
      withCredentials: false,

      /*
        Duplicates the behavior of native XMLHttpRequest's open function
      */
      open: function open(method, url, async, username, password) {
        this.method = method;
        this.url = url;
        this.async = typeof async == "boolean" ? async : true;
        this.username = username;
        this.password = password;
        this.responseText = null;
        this.responseXML = null;
        this.requestHeaders = {};
        this.sendFlag = false;
        this._readyStateChange(FakeXMLHttpRequest.OPENED);
      },

      /*
        Duplicates the behavior of native XMLHttpRequest's setRequestHeader function
      */
      setRequestHeader: function setRequestHeader(header, value) {
        verifyState(this);

        if (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header)) {
          throw new Error("Refused to set unsafe header \"" + header + "\"");
        }

        if (this.requestHeaders[header]) {
          this.requestHeaders[header] += "," + value;
        } else {
          this.requestHeaders[header] = value;
        }
      },

      /*
        Duplicates the behavior of native XMLHttpRequest's send function
      */
      send: function send(data) {
        verifyState(this);

        if (!/^(get|head)$/i.test(this.method)) {
          if (!this.requestHeaders["Content-Type"] && !(data || '').toString().match('FormData')) {
            this.requestHeaders["Content-Type"] = "text/plain;charset=UTF-8";
          }

          this.requestBody = data;
        }

        this.errorFlag = false;
        this.sendFlag = this.async;
        this._readyStateChange(FakeXMLHttpRequest.OPENED);

        if (typeof this.onSend == "function") {
          this.onSend(this);
        }

        this.dispatchEvent(new _Event("loadstart", false, false, this));
      },

      /*
        Duplicates the behavior of native XMLHttpRequest's abort function
      */
      abort: function abort() {
        this.aborted = true;
        this.responseText = null;
        this.errorFlag = true;
        this.requestHeaders = {};

        if (this.readyState > FakeXMLHttpRequest.UNSENT && this.sendFlag) {
          this._readyStateChange(FakeXMLHttpRequest.DONE);
          this.sendFlag = false;
        }

        this.readyState = FakeXMLHttpRequest.UNSENT;

        this.dispatchEvent(new _Event("abort", false, false, this));
        if (typeof this.onerror === "function") {
          this.onerror();
        }
      },

      /*
        Duplicates the behavior of native XMLHttpRequest's getResponseHeader function
      */
      getResponseHeader: function getResponseHeader(header) {
        if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
          return null;
        }

        if (/^Set-Cookie2?$/i.test(header)) {
          return null;
        }

        header = header.toLowerCase();

        for (var h in this.responseHeaders) {
          if (h.toLowerCase() == header) {
            return this.responseHeaders[h];
          }
        }

        return null;
      },

      /*
        Duplicates the behavior of native XMLHttpRequest's getAllResponseHeaders function
      */
      getAllResponseHeaders: function getAllResponseHeaders() {
        if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
          return "";
        }

        var headers = "";

        for (var header in this.responseHeaders) {
          if (this.responseHeaders.hasOwnProperty(header) && !/^Set-Cookie2?$/i.test(header)) {
            headers += header + ": " + this.responseHeaders[header] + "\r\n";
          }
        }

        return headers;
      },

      /*
       Duplicates the behavior of native XMLHttpRequest's overrideMimeType function
       */
      overrideMimeType: function overrideMimeType(mimeType) {
        if (typeof mimeType === "string") {
          this.forceMimeType = mimeType.toLowerCase();
        }
      },

      /*
        Places a FakeXMLHttpRequest object into the passed
        state.
      */
      _readyStateChange: function _readyStateChange(state) {
        this.readyState = state;

        if (typeof this.onreadystatechange == "function") {
          this.onreadystatechange(new _Event("readystatechange"));
        }

        this.dispatchEvent(new _Event("readystatechange"));

        if (this.readyState == FakeXMLHttpRequest.DONE) {
          this.dispatchEvent(new _Event("load", false, false, this));
          this.dispatchEvent(new _Event("loadend", false, false, this));
        }
      },

      /*
        Sets the FakeXMLHttpRequest object's response headers and
        places the object into readyState 2
      */
      _setResponseHeaders: function _setResponseHeaders(headers) {
        this.responseHeaders = {};

        for (var header in headers) {
          if (headers.hasOwnProperty(header)) {
            this.responseHeaders[header] = headers[header];
          }
        }

        if (this.forceMimeType) {
          this.responseHeaders['Content-Type'] = this.forceMimeType;
        }

        if (this.async) {
          this._readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
        } else {
          this.readyState = FakeXMLHttpRequest.HEADERS_RECEIVED;
        }
      },

      /*
        Sets the FakeXMLHttpRequest object's response body and
        if body text is XML, sets responseXML to parsed document
        object
      */
      _setResponseBody: function _setResponseBody(body) {
        verifyRequestSent(this);
        verifyHeadersReceived(this);
        verifyResponseBodyType(body);

        var chunkSize = this.chunkSize || 10;
        var index = 0;
        this.responseText = "";

        do {
          if (this.async) {
            this._readyStateChange(FakeXMLHttpRequest.LOADING);
          }

          this.responseText += body.substring(index, index + chunkSize);
          index += chunkSize;
        } while (index < body.length);

        var type = this.getResponseHeader("Content-Type");

        if (this.responseText && (!type || /(text\/xml)|(application\/xml)|(\+xml)/.test(type))) {
          try {
            this.responseXML = parseXML(this.responseText);
          } catch (e) {
            // Unable to parse XML - no biggie
          }
        }

        if (this.async) {
          this._readyStateChange(FakeXMLHttpRequest.DONE);
        } else {
          this.readyState = FakeXMLHttpRequest.DONE;
        }
      },

      /*
        Forces a response on to the FakeXMLHttpRequest object.
         This is the public API for faking responses. This function
        takes a number status, headers object, and string body:
         ```
        xhr.respond(404, {Content-Type: 'text/plain'}, "Sorry. This object was not found.")
         ```
      */
      respond: function respond(status, headers, body) {
        this._setResponseHeaders(headers || {});
        this.status = typeof status == "number" ? status : 200;
        this.statusText = httpStatusCodes[this.status];
        this._setResponseBody(body || "");
      }
    };

    for (var property in FakeXMLHttpRequestProto) {
      FakeXMLHttpRequest.prototype[property] = FakeXMLHttpRequestProto[property];
    }

    function verifyState(xhr) {
      if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
        throw new Error("INVALID_STATE_ERR");
      }

      if (xhr.sendFlag) {
        throw new Error("INVALID_STATE_ERR");
      }
    }

    function verifyRequestSent(xhr) {
      if (xhr.readyState == FakeXMLHttpRequest.DONE) {
        throw new Error("Request done");
      }
    }

    function verifyHeadersReceived(xhr) {
      if (xhr.async && xhr.readyState != FakeXMLHttpRequest.HEADERS_RECEIVED) {
        throw new Error("No headers received");
      }
    }

    function verifyResponseBodyType(body) {
      if (typeof body != "string") {
        var error = new Error("Attempted to respond to fake XMLHttpRequest with " + body + ", which is not a string.");
        error.name = "InvalidBodyException";
        throw error;
      }
    }
    var fake_xml_http_request = FakeXMLHttpRequest;

    return fake_xml_http_request;
  });
});
define("fake-xml-http-request", ["exports", "module"], function (exports, module) {
  /**
   * Minimal Event interface implementation
   *
   * Original implementation by Sven Fuchs: https://gist.github.com/995028
   * Modifications and tests by Christian Johansen.
   *
   * @author Sven Fuchs (svenfuchs@artweb-design.de)
   * @author Christian Johansen (christian@cjohansen.no)
   * @license BSD
   *
   * Copyright (c) 2011 Sven Fuchs, Christian Johansen
   */

  "use strict";

  var _Event = function Event(type, bubbles, cancelable, target) {
    this.type = type;
    this.bubbles = bubbles;
    this.cancelable = cancelable;
    this.target = target;
  };

  _Event.prototype = {
    stopPropagation: function stopPropagation() {},
    preventDefault: function preventDefault() {
      this.defaultPrevented = true;
    }
  };

  /*
    Used to set the statusText property of an xhr object
  */
  var httpStatusCodes = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    300: "Multiple Choice",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    422: "Unprocessable Entity",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported"
  };

  /*
    Cross-browser XML parsing. Used to turn
    XML responses into Document objects
    Borrowed from JSpec
  */
  function parseXML(text) {
    var xmlDoc;

    if (typeof DOMParser != "undefined") {
      var parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");
    } else {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
      xmlDoc.loadXML(text);
    }

    return xmlDoc;
  }

  /*
    Without mocking, the native XMLHttpRequest object will throw
    an error when attempting to set these headers. We match this behavior.
  */
  var unsafeHeaders = {
    "Accept-Charset": true,
    "Accept-Encoding": true,
    "Connection": true,
    "Content-Length": true,
    "Cookie": true,
    "Cookie2": true,
    "Content-Transfer-Encoding": true,
    "Date": true,
    "Expect": true,
    "Host": true,
    "Keep-Alive": true,
    "Referer": true,
    "TE": true,
    "Trailer": true,
    "Transfer-Encoding": true,
    "Upgrade": true,
    "User-Agent": true,
    "Via": true
  };

  /*
    Adds an "event" onto the fake xhr object
    that just calls the same-named method. This is
    in case a library adds callbacks for these events.
  */
  function _addEventListener(eventName, xhr) {
    xhr.addEventListener(eventName, function (event) {
      var listener = xhr["on" + eventName];

      if (listener && typeof listener == "function") {
        listener(event);
      }
    });
  }

  function EventedObject() {
    this._eventListeners = {};
    var events = ["loadstart", "progress", "load", "abort", "loadend"];
    for (var i = events.length - 1; i >= 0; i--) {
      _addEventListener(events[i], this);
    }
  };

  EventedObject.prototype = {
    /*
      Duplicates the behavior of native XMLHttpRequest's addEventListener function
    */
    addEventListener: function addEventListener(event, listener) {
      this._eventListeners[event] = this._eventListeners[event] || [];
      this._eventListeners[event].push(listener);
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's removeEventListener function
    */
    removeEventListener: function removeEventListener(event, listener) {
      var listeners = this._eventListeners[event] || [];

      for (var i = 0, l = listeners.length; i < l; ++i) {
        if (listeners[i] == listener) {
          return listeners.splice(i, 1);
        }
      }
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's dispatchEvent function
    */
    dispatchEvent: function dispatchEvent(event) {
      var type = event.type;
      var listeners = this._eventListeners[type] || [];

      for (var i = 0; i < listeners.length; i++) {
        if (typeof listeners[i] == "function") {
          listeners[i].call(this, event);
        } else {
          listeners[i].handleEvent(event);
        }
      }

      return !!event.defaultPrevented;
    },

    /*
      Triggers an `onprogress` event with the given parameters.
    */
    _progress: function _progress(lengthComputable, loaded, total) {
      var event = new _Event('progress');
      event.target = this;
      event.lengthComputable = lengthComputable;
      event.loaded = loaded;
      event.total = total;
      this.dispatchEvent(event);
    }
  };

  /*
    Constructor for a fake window.XMLHttpRequest
  */
  function FakeXMLHttpRequest() {
    EventedObject.call(this);
    this.readyState = FakeXMLHttpRequest.UNSENT;
    this.requestHeaders = {};
    this.requestBody = null;
    this.status = 0;
    this.statusText = "";
    this.upload = new EventedObject();
  }

  FakeXMLHttpRequest.prototype = new EventedObject();

  // These status codes are available on the native XMLHttpRequest
  // object, so we match that here in case a library is relying on them.
  FakeXMLHttpRequest.UNSENT = 0;
  FakeXMLHttpRequest.OPENED = 1;
  FakeXMLHttpRequest.HEADERS_RECEIVED = 2;
  FakeXMLHttpRequest.LOADING = 3;
  FakeXMLHttpRequest.DONE = 4;

  var FakeXMLHttpRequestProto = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4,
    async: true,
    withCredentials: false,

    /*
      Duplicates the behavior of native XMLHttpRequest's open function
    */
    open: function open(method, url, async, username, password) {
      this.method = method;
      this.url = url;
      this.async = typeof async == "boolean" ? async : true;
      this.username = username;
      this.password = password;
      this.responseText = null;
      this.responseXML = null;
      this.requestHeaders = {};
      this.sendFlag = false;
      this._readyStateChange(FakeXMLHttpRequest.OPENED);
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's setRequestHeader function
    */
    setRequestHeader: function setRequestHeader(header, value) {
      verifyState(this);

      if (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header)) {
        throw new Error("Refused to set unsafe header \"" + header + "\"");
      }

      if (this.requestHeaders[header]) {
        this.requestHeaders[header] += "," + value;
      } else {
        this.requestHeaders[header] = value;
      }
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's send function
    */
    send: function send(data) {
      verifyState(this);

      if (!/^(get|head)$/i.test(this.method)) {
        if (!this.requestHeaders["Content-Type"] && !(data || '').toString().match('FormData')) {
          this.requestHeaders["Content-Type"] = "text/plain;charset=UTF-8";
        }

        this.requestBody = data;
      }

      this.errorFlag = false;
      this.sendFlag = this.async;
      this._readyStateChange(FakeXMLHttpRequest.OPENED);

      if (typeof this.onSend == "function") {
        this.onSend(this);
      }

      this.dispatchEvent(new _Event("loadstart", false, false, this));
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's abort function
    */
    abort: function abort() {
      this.aborted = true;
      this.responseText = null;
      this.errorFlag = true;
      this.requestHeaders = {};

      if (this.readyState > FakeXMLHttpRequest.UNSENT && this.sendFlag) {
        this._readyStateChange(FakeXMLHttpRequest.DONE);
        this.sendFlag = false;
      }

      this.readyState = FakeXMLHttpRequest.UNSENT;

      this.dispatchEvent(new _Event("abort", false, false, this));
      if (typeof this.onerror === "function") {
        this.onerror();
      }
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's getResponseHeader function
    */
    getResponseHeader: function getResponseHeader(header) {
      if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
        return null;
      }

      if (/^Set-Cookie2?$/i.test(header)) {
        return null;
      }

      header = header.toLowerCase();

      for (var h in this.responseHeaders) {
        if (h.toLowerCase() == header) {
          return this.responseHeaders[h];
        }
      }

      return null;
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's getAllResponseHeaders function
    */
    getAllResponseHeaders: function getAllResponseHeaders() {
      if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
        return "";
      }

      var headers = "";

      for (var header in this.responseHeaders) {
        if (this.responseHeaders.hasOwnProperty(header) && !/^Set-Cookie2?$/i.test(header)) {
          headers += header + ": " + this.responseHeaders[header] + "\r\n";
        }
      }

      return headers;
    },

    /*
     Duplicates the behavior of native XMLHttpRequest's overrideMimeType function
     */
    overrideMimeType: function overrideMimeType(mimeType) {
      if (typeof mimeType === "string") {
        this.forceMimeType = mimeType.toLowerCase();
      }
    },

    /*
      Places a FakeXMLHttpRequest object into the passed
      state.
    */
    _readyStateChange: function _readyStateChange(state) {
      this.readyState = state;

      if (typeof this.onreadystatechange == "function") {
        this.onreadystatechange(new _Event("readystatechange"));
      }

      this.dispatchEvent(new _Event("readystatechange"));

      if (this.readyState == FakeXMLHttpRequest.DONE) {
        this.dispatchEvent(new _Event("load", false, false, this));
        this.dispatchEvent(new _Event("loadend", false, false, this));
      }
    },

    /*
      Sets the FakeXMLHttpRequest object's response headers and
      places the object into readyState 2
    */
    _setResponseHeaders: function _setResponseHeaders(headers) {
      this.responseHeaders = {};

      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          this.responseHeaders[header] = headers[header];
        }
      }

      if (this.forceMimeType) {
        this.responseHeaders['Content-Type'] = this.forceMimeType;
      }

      if (this.async) {
        this._readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
      } else {
        this.readyState = FakeXMLHttpRequest.HEADERS_RECEIVED;
      }
    },

    /*
      Sets the FakeXMLHttpRequest object's response body and
      if body text is XML, sets responseXML to parsed document
      object
    */
    _setResponseBody: function _setResponseBody(body) {
      verifyRequestSent(this);
      verifyHeadersReceived(this);
      verifyResponseBodyType(body);

      var chunkSize = this.chunkSize || 10;
      var index = 0;
      this.responseText = "";

      do {
        if (this.async) {
          this._readyStateChange(FakeXMLHttpRequest.LOADING);
        }

        this.responseText += body.substring(index, index + chunkSize);
        index += chunkSize;
      } while (index < body.length);

      var type = this.getResponseHeader("Content-Type");

      if (this.responseText && (!type || /(text\/xml)|(application\/xml)|(\+xml)/.test(type))) {
        try {
          this.responseXML = parseXML(this.responseText);
        } catch (e) {
          // Unable to parse XML - no biggie
        }
      }

      if (this.async) {
        this._readyStateChange(FakeXMLHttpRequest.DONE);
      } else {
        this.readyState = FakeXMLHttpRequest.DONE;
      }
    },

    /*
      Forces a response on to the FakeXMLHttpRequest object.
       This is the public API for faking responses. This function
      takes a number status, headers object, and string body:
       ```
      xhr.respond(404, {Content-Type: 'text/plain'}, "Sorry. This object was not found.")
       ```
    */
    respond: function respond(status, headers, body) {
      this._setResponseHeaders(headers || {});
      this.status = typeof status == "number" ? status : 200;
      this.statusText = httpStatusCodes[this.status];
      this._setResponseBody(body || "");
    }
  };

  for (var property in FakeXMLHttpRequestProto) {
    FakeXMLHttpRequest.prototype[property] = FakeXMLHttpRequestProto[property];
  }

  function verifyState(xhr) {
    if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
      throw new Error("INVALID_STATE_ERR");
    }

    if (xhr.sendFlag) {
      throw new Error("INVALID_STATE_ERR");
    }
  }

  function verifyRequestSent(xhr) {
    if (xhr.readyState == FakeXMLHttpRequest.DONE) {
      throw new Error("Request done");
    }
  }

  function verifyHeadersReceived(xhr) {
    if (xhr.async && xhr.readyState != FakeXMLHttpRequest.HEADERS_RECEIVED) {
      throw new Error("No headers received");
    }
  }

  function verifyResponseBodyType(body) {
    if (typeof body != "string") {
      var error = new Error("Attempted to respond to fake XMLHttpRequest with " + body + ", which is not a string.");
      error.name = "InvalidBodyException";
      throw error;
    }
  }
  module.exports = FakeXMLHttpRequest;
});
define("generate", ["exports"], function (exports) {
  "use strict";

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/posts/:id", handler: {} }], { as: "post" });
  }

  module.exports = {
    name: 'Generate',
    fn: function fn() {
      router.generate("post", { id: 1 });
    }
  };
});
define('handlers-for', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/foo/" + i, handler: { handler: i } }], { as: 'foo' });
  }

  module.exports = {
    name: 'Handlers For',
    fn: function fn() {
      router.handlersFor('foo');
    }
  };
});
define('index', ['exports'], function (exports) {
  'use strict';

  var glob = require('glob');
  var path = require('path');
  var bench = require('do-you-even-bench');

  bench(glob.sync('./bench/benches/*.js').map(function (file) {
    return require(path.resolve(file));
  }));
});
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
define('karma.conf', ['exports'], function (exports) {
  // Karma configuration
  // Generated on Sun Apr 27 2014 14:19:31 GMT-0500 (CDT)

  'use strict';

  module.exports = function (config) {
    config.set({

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['qunit'],

      // list of files / patterns to load in the browser
      files: ['bower_components/FakeXMLHttpRequest/fake_xml_http_request.js', 'bower_components/route-recognizer/dist/route-recognizer.js', 'bower_components/jquery-1/index.js', 'bower_components/jquery/dist/jquery.js', 'pretender.js', 'test/**/*.js'],

      // list of files to exclude
      exclude: [],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        'pretender.js': ['coverage']
      },

      coverageReporter: {
        type: 'lcov',
        dir: 'coverage'
      },

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['dots', 'coverage'],

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['Chrome', 'PhantomJS'],

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false
    });
  };
});
define('lib/route-recognizer', ['exports', 'module', './route-recognizer/dsl'], function (exports, module, _routeRecognizerDsl) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _map = _interopRequireDefault(_routeRecognizerDsl);

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(currentState) {
      var string = this.string,
          ch;

      for (var i = 0; i < string.length; i++) {
        ch = string.charAt(i);
        currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: ch });
      }

      return currentState;
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(currentState) {
      return currentState.put({ invalidChars: "/", repeat: true, validChars: undefined });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      return params[this.name];
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(currentState) {
      return currentState.put({ invalidChars: "", repeat: true, validChars: undefined });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      return params[this.name];
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar(currentState) {
      return currentState;
    },
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/");
    var results = new Array(segments.length);

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results[i] = new DynamicSegment(match[1]);
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results[i] = new StarSegment(match[1]);
        specificity.val += '1';
        names.push(match[1]);
      } else if (segment === "") {
        results[i] = new EpsilonSegment();
        specificity.val += '2';
      } else {
        results[i] = new StaticSegment(segment);
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
    this.charSpecs = {};
    this.regex = undefined;
    this.handlers = undefined;
    this.specificity = undefined;
  }

  State.prototype = {
    get: function get(charSpec) {
      if (this.charSpecs[charSpec.validChars]) {
        return this.charSpecs[charSpec.validChars];
      }

      var nextStates = this.nextStates;

      for (var i = 0; i < nextStates.length; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          this.charSpecs[charSpec.validChars] = child;
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      var returned = [];

      for (var i = 0; i < nextStates.length; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }
  };

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    result.length = handlers.length;

    for (var i = 0; i < handlers.length; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0; j < names.length; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result[i] = { handler: handler.handler, params: params, isDynamic: !!names.length };
    }

    return result;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    var result;
    try {
      result = decodeURIComponent(part);
    } catch (error) {
      result = '';
    }
    return result;
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = new Array(routes.length),
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0; i < routes.length; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0; j < segments.length; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = segment.eachChar(currentState);
          regex += segment.regex();
        }
        var handler = { handler: route.handler, names: names };
        handlers[i] = handler;
      }

      if (isEmpty) {
        currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name];

      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var result = new Array(route.handlers.length);

      for (var i = 0; i < route.handlers.length; i++) {
        result[i] = route.handlers[i];
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams, route.handlers);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params, handlers) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0; j < value.length; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path) {
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        queryParams = this.parseQueryString(queryString);
      }

      path = decodeURI(path);

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0; i < path.length; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      var solutions = [];
      for (i = 0; i < states.length; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = _map['default'];

  RouteRecognizer.VERSION = 'VERSION_STRING_PLACEHOLDER';

  module.exports = RouteRecognizer;
});
define('lib/route-recognizer.umd', ['exports', './route-recognizer'], function (exports, _routeRecognizer) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _RouteRecognizer = _interopRequireDefault(_routeRecognizer);

  /* global define:true module:true window: true */
  if (typeof define === 'function' && define['amd']) {
    define('route-recognizer', function () {
      return _RouteRecognizer['default'];
    });
  } else if (typeof module !== 'undefined' && module['exports']) {
    module['exports'] = _RouteRecognizer['default'];
  } else if (typeof undefined !== 'undefined') {
    undefined['RouteRecognizer'] = _RouteRecognizer['default'];
  }
});
define("lib/route-recognizer/dsl", ["exports", "module"], function (exports, module) {
  "use strict";

  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0; i < routeArray.length; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  module.exports = function (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  };
});
define("open_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("open", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      xhr = undefined;
    }
  });

  test("open sets the method property", function () {
    xhr.open('get', '/some/url');
    equal(xhr.method, 'get');
  });

  test("open sets the url property", function () {
    xhr.open('get', '/some/url');
    equal(xhr.url, '/some/url');
  });

  test("open sets the async property", function () {
    xhr.open('get', '/some/url', false);
    equal(xhr.async, false);
  });

  test("open sets the async property to true if a boolean isn't passed", function () {
    xhr.open('get', '/some/url', 'whatisthisidontevent');
    equal(xhr.url, '/some/url', false);
  });

  test("open sets the username property", function () {
    xhr.open('get', '/some/url', true, 'johndoe');
    equal(xhr.username, 'johndoe');
  });

  test("open sets the password property", function () {
    xhr.open('get', '/some/url', true, 'johndoe', 'password');
    equal(xhr.password, 'password');
  });

  test("initializes the responseText as null", function () {
    xhr.open('get', '/some/url');
    equal(xhr.responseText, null);
  });

  test("initializes the responseXML as null", function () {
    xhr.open('get', '/some/url');
    equal(xhr.responseXML, null);
  });

  test("initializes the requestHeaders property as empty object", function () {
    xhr.open('get', '/some/url');
    deepEqual(xhr.requestHeaders, {});
  });

  test("open sets the ready state to 1", function () {
    xhr.open('get', '/some/url');
    equal(xhr.readyState, 1);
  });

  test("triggers the onreadystatechange event with OPENED readyState", function () {
    var readyState = null;

    xhr.onreadystatechange = function () {
      readyState = this.readyState;
    };

    xhr.open('get', '/some/url');

    equal(readyState, FakeXMLHttpRequest.OPENED);
  });
});
define('pretender', ['exports'], function (exports) {
  'use strict';

  (function (self) {
    'use strict';

    var appearsBrowserified = typeof self !== 'undefined' && typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object Object]';

    var RouteRecognizer = appearsBrowserified ? require('route-recognizer') : self.RouteRecognizer;
    var FakeXMLHttpRequest = appearsBrowserified ? require('fake-xml-http-request') : self.FakeXMLHttpRequest;

    /**
     * parseURL - decompose a URL into its parts
     * @param  {String} url a URL
     * @return {Object} parts of the URL, including the following
     *
     * 'https://www.yahoo.com:1234/mypage?test=yes#abc'
     *
     * {
     *   host: 'www.yahoo.com:1234',
     *   protocol: 'https:',
     *   search: '?test=yes',
     *   hash: '#abc',
     *   href: 'https://www.yahoo.com:1234/mypage?test=yes#abc',
     *   pathname: '/mypage',
     *   fullpath: '/mypage?test=yes'
     * }
     */
    function parseURL(url) {
      // TODO: something for when document isn't present... #yolo
      var anchor = document.createElement('a');
      anchor.href = url;
      anchor.fullpath = anchor.pathname + (anchor.search || '') + (anchor.hash || '');
      return anchor;
    }

    /**
     * Registry
     *
     * A registry is a map of HTTP verbs to route recognizers.
     */

    function Registry() /* host */{
      // Herein we keep track of RouteRecognizer instances
      // keyed by HTTP method. Feel free to add more as needed.
      this.verbs = {
        GET: new RouteRecognizer(),
        PUT: new RouteRecognizer(),
        POST: new RouteRecognizer(),
        DELETE: new RouteRecognizer(),
        PATCH: new RouteRecognizer(),
        HEAD: new RouteRecognizer(),
        OPTIONS: new RouteRecognizer()
      };
    }

    /**
     * Hosts
     *
     * a map of hosts to Registries, ultimately allowing
     * a per-host-and-port, per HTTP verb lookup of RouteRecognizers
     */
    function Hosts() {
      this._registries = {};
    }

    /**
     * Hosts#forURL - retrieve a map of HTTP verbs to RouteRecognizers
     *                for a given URL
     *
     * @param  {String} url a URL
     * @return {Registry}   a map of HTTP verbs to RouteRecognizers
     *                      corresponding to the provided URL's
     *                      hostname and port
     */
    Hosts.prototype.forURL = function (url) {
      var host = parseURL(url).host;
      var registry = this._registries[host];

      if (registry === undefined) {
        registry = this._registries[host] = new Registry(host);
      }

      return registry.verbs;
    };

    function Pretender() /* routeMap1, routeMap2, ...*/{
      this.hosts = new Hosts();

      this.handlers = [];
      this.handledRequests = [];
      this.passthroughRequests = [];
      this.unhandledRequests = [];
      this.requestReferences = [];

      // reference the native XMLHttpRequest object so
      // it can be restored later
      this._nativeXMLHttpRequest = self.XMLHttpRequest;

      // capture xhr requests, channeling them into
      // the route map.
      self.XMLHttpRequest = interceptor(this);

      // 'start' the server
      this.running = true;

      // trigger the route map DSL.
      for (var i = 0; i < arguments.length; i++) {
        this.map(arguments[i]);
      }
    }

    function interceptor(pretender) {
      function FakeRequest() {
        // super()
        FakeXMLHttpRequest.call(this);
      }
      // extend
      var proto = new FakeXMLHttpRequest();
      proto.send = function send() {
        if (!pretender.running) {
          throw new Error('You shut down a Pretender instance while there was a pending request. ' + 'That request just tried to complete. Check to see if you accidentally shut down ' + 'a pretender earlier than you intended to');
        }

        FakeXMLHttpRequest.prototype.send.apply(this, arguments);
        if (!pretender.checkPassthrough(this)) {
          pretender.handleRequest(this);
        } else {
          var xhr = createPassthrough(this);
          xhr.send.apply(xhr, arguments);
        }
      };

      function createPassthrough(fakeXHR) {
        // event types to handle on the xhr
        var evts = ['error', 'timeout', 'abort', 'readystatechange'];

        // event types to handle on the xhr.upload
        var uploadEvents = ['progress'];

        // properties to copy from the native xhr to fake xhr
        var lifecycleProps = ['readyState', 'responseText', 'responseXML', 'status', 'statusText'];

        var xhr = fakeXHR._passthroughRequest = new pretender._nativeXMLHttpRequest();

        if (fakeXHR.responseType === 'arraybuffer') {
          lifecycleProps = ['readyState', 'response', 'status', 'statusText'];
          xhr.responseType = fakeXHR.responseType;
        }

        // Use onload if the browser supports it
        if ('onload' in xhr) {
          evts.push('load');
        }

        // add progress event for async calls
        if (fakeXHR.async && fakeXHR.responseType !== 'arraybuffer') {
          evts.push('progress');
        }

        // update `propertyNames` properties from `fromXHR` to `toXHR`
        function copyLifecycleProperties(propertyNames, fromXHR, toXHR) {
          for (var i = 0; i < propertyNames.length; i++) {
            var prop = propertyNames[i];
            if (fromXHR[prop]) {
              toXHR[prop] = fromXHR[prop];
            }
          }
        }

        // fire fake event on `eventable`
        function dispatchEvent(eventable, eventType, event) {
          eventable.dispatchEvent(event);
          if (eventable['on' + eventType]) {
            eventable['on' + eventType](event);
          }
        }

        // set the on- handler on the native xhr for the given eventType
        function createHandler(eventType) {
          xhr['on' + eventType] = function (event) {
            copyLifecycleProperties(lifecycleProps, xhr, fakeXHR);
            dispatchEvent(fakeXHR, eventType, event);
          };
        }

        // set the on- handler on the native xhr's `upload` property for
        // the given eventType
        function createUploadHandler(eventType) {
          if (xhr.upload) {
            xhr.upload['on' + eventType] = function (event) {
              dispatchEvent(fakeXHR.upload, eventType, event);
            };
          }
        }

        xhr.open(fakeXHR.method, fakeXHR.url, fakeXHR.async, fakeXHR.username, fakeXHR.password);

        var i;
        for (i = 0; i < evts.length; i++) {
          createHandler(evts[i]);
        }
        for (i = 0; i < uploadEvents.length; i++) {
          createUploadHandler(uploadEvents[i]);
        }

        if (fakeXHR.async) {
          xhr.timeout = fakeXHR.timeout;
          xhr.withCredentials = fakeXHR.withCredentials;
        }
        for (var h in fakeXHR.requestHeaders) {
          xhr.setRequestHeader(h, fakeXHR.requestHeaders[h]);
        }
        return xhr;
      }

      proto._passthroughCheck = function (method, args) {
        if (this._passthroughRequest) {
          return this._passthroughRequest[method].apply(this._passthroughRequest, args);
        }
        return FakeXMLHttpRequest.prototype[method].apply(this, args);
      };

      proto.abort = function abort() {
        return this._passthroughCheck('abort', arguments);
      };

      proto.getResponseHeader = function getResponseHeader() {
        return this._passthroughCheck('getResponseHeader', arguments);
      };

      proto.getAllResponseHeaders = function getAllResponseHeaders() {
        return this._passthroughCheck('getAllResponseHeaders', arguments);
      };

      FakeRequest.prototype = proto;
      return FakeRequest;
    }

    function verbify(verb) {
      return function (path, handler, async) {
        this.register(verb, path, handler, async);
      };
    }

    function scheduleProgressEvent(request, startTime, totalTime) {
      setTimeout(function () {
        if (!request.aborted && !request.status) {
          var ellapsedTime = new Date().getTime() - startTime.getTime();
          request.upload._progress(true, ellapsedTime, totalTime);
          request._progress(true, ellapsedTime, totalTime);
          scheduleProgressEvent(request, startTime, totalTime);
        }
      }, 50);
    }

    function isArray(array) {
      return Object.prototype.toString.call(array) === '[object Array]';
    }

    var PASSTHROUGH = {};

    Pretender.prototype = {
      get: verbify('GET'),
      post: verbify('POST'),
      put: verbify('PUT'),
      'delete': verbify('DELETE'),
      patch: verbify('PATCH'),
      head: verbify('HEAD'),
      map: function map(maps) {
        maps.call(this);
      },
      register: function register(verb, url, handler, async) {
        if (!handler) {
          throw new Error('The function you tried passing to Pretender to handle ' + verb + ' ' + url + ' is undefined or missing.');
        }

        handler.numberOfCalls = 0;
        handler.async = async;
        this.handlers.push(handler);

        var registry = this.hosts.forURL(url)[verb];

        registry.add([{
          path: parseURL(url).fullpath,
          handler: handler
        }]);
      },
      passthrough: PASSTHROUGH,
      checkPassthrough: function checkPassthrough(request) {
        var verb = request.method.toUpperCase();

        var path = parseURL(request.url).fullpath;

        verb = verb.toUpperCase();

        var recognized = this.hosts.forURL(request.url)[verb].recognize(path);
        var match = recognized && recognized[0];
        if (match && match.handler === PASSTHROUGH) {
          this.passthroughRequests.push(request);
          this.passthroughRequest(verb, path, request);
          return true;
        }

        return false;
      },
      handleRequest: function handleRequest(request) {
        var verb = request.method.toUpperCase();
        var path = request.url;

        var handler = this._handlerFor(verb, path, request);

        if (handler) {
          handler.handler.numberOfCalls++;
          var async = handler.handler.async;
          this.handledRequests.push(request);

          try {
            var statusHeadersAndBody = handler.handler(request);
            if (!isArray(statusHeadersAndBody)) {
              var note = 'Remember to `return [status, headers, body];` in your route handler.';
              throw new Error('Nothing returned by handler for ' + path + '. ' + note);
            }

            var status = statusHeadersAndBody[0],
                headers = this.prepareHeaders(statusHeadersAndBody[1]),
                body = this.prepareBody(statusHeadersAndBody[2], headers),
                pretender = this;

            this.handleResponse(request, async, function () {
              request.respond(status, headers, body);
              pretender.handledRequest(verb, path, request);
            });
          } catch (error) {
            this.erroredRequest(verb, path, request, error);
            this.resolve(request);
          }
        } else {
          this.unhandledRequests.push(request);
          this.unhandledRequest(verb, path, request);
        }
      },
      handleResponse: function handleResponse(request, strategy, callback) {
        var delay = typeof strategy === 'function' ? strategy() : strategy;
        delay = typeof delay === 'boolean' || typeof delay === 'number' ? delay : 0;

        if (delay === false) {
          callback();
        } else {
          var pretender = this;
          pretender.requestReferences.push({
            request: request,
            callback: callback
          });

          if (delay !== true) {
            scheduleProgressEvent(request, new Date(), delay);
            setTimeout(function () {
              pretender.resolve(request);
            }, delay);
          }
        }
      },
      resolve: function resolve(request) {
        for (var i = 0, len = this.requestReferences.length; i < len; i++) {
          var res = this.requestReferences[i];
          if (res.request === request) {
            res.callback();
            this.requestReferences.splice(i, 1);
            break;
          }
        }
      },
      requiresManualResolution: function requiresManualResolution(verb, path) {
        var handler = this._handlerFor(verb.toUpperCase(), path, {});
        if (!handler) {
          return false;
        }

        var async = handler.handler.async;
        return typeof async === 'function' ? async() === true : async === true;
      },
      prepareBody: function prepareBody(body) {
        return body;
      },
      prepareHeaders: function prepareHeaders(headers) {
        return headers;
      },
      handledRequest: function handledRequest() /* verb, path, request */{/* no-op */},
      passthroughRequest: function passthroughRequest() /* verb, path, request */{/* no-op */},
      unhandledRequest: function unhandledRequest(verb, path /*, request */) {
        throw new Error('Pretender intercepted ' + verb + ' ' + path + ' but no handler was defined for this type of request');
      },
      erroredRequest: function erroredRequest(verb, path, request, error) {
        error.message = 'Pretender intercepted ' + verb + ' ' + path + ' but encountered an error: ' + error.message;
        throw error;
      },
      _handlerFor: function _handlerFor(verb, url, request) {
        var registry = this.hosts.forURL(url)[verb];
        var matches = registry.recognize(parseURL(url).fullpath);

        var match = matches ? matches[0] : null;
        if (match) {
          request.params = match.params;
          request.queryParams = matches.queryParams;
        }

        return match;
      },
      shutdown: function shutdown() {
        self.XMLHttpRequest = this._nativeXMLHttpRequest;

        // 'stop' the server
        this.running = false;
      }
    };

    Pretender.parseURL = parseURL;
    Pretender.Hosts = Hosts;
    Pretender.Registry = Registry;

    if (typeof module === 'object') {
      module.exports = Pretender;
    } else if (typeof define !== 'undefined') {
      define('pretender', [], function () {
        return Pretender;
      });
    }
    self.Pretender = Pretender;
  })(self);
});
define('recognize', ['exports'], function (exports) {
  'use strict';

  var RouteRecognizer = require('../../dist/route-recognizer');

  var router = new RouteRecognizer();
  var i = 1000;

  while (i--) {
    router.add([{ path: "/foo/" + i, handler: { handler: i } }]);
  }

  module.exports = {
    name: 'Recognize',
    fn: function fn() {
      router.recognize('/foo/1');
    }
  };
});
define("responding_test", ["exports"], function (exports) {
  "use strict";

  var xhr, xmlDocumentConstructor;
  module("responding", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
      xmlDocumentConstructor = makeXMLDocument().constructor;
    },
    teardown: function teardown() {
      xhr = undefined;
      xmlDocumentConstructor = undefined;
    }
  });

  // Different browsers report different constructors for XML Documents.
  // Chrome 45.0.2454 and Firefox 40.0.0 report `XMLDocument`,
  // PhantomJS 1.9.8 reports `Document`.
  // Make a dummy xml document to determine what constructor to
  // compare against in the tests below.
  // This function is taken from `parseXML` in the src/
  function makeXMLDocument() {
    var xmlDoc,
        text = "<some>xml</some>";

    if (typeof DOMParser != "undefined") {
      var parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");
    } else {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
      xmlDoc.loadXML(text);
    }

    return xmlDoc;
  }

  test("defaults responseHeaders to {} if not passed", function () {
    xhr.respond(200);
    deepEqual(xhr.responseHeaders, {});
  });

  test("sets responseHeaders", function () {
    xhr.respond(200, { "Content-Type": "application/json" });
    deepEqual(xhr.responseHeaders, { "Content-Type": "application/json" });
  });

  test("sets body", function () {
    xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify({ a: 'key' }));
    equal(xhr.responseText, '{"a":"key"}');
  });

  test("parses the body if it's XML and no content-type is set", function () {
    xhr.respond(200, {}, "<key>value</key>");
    equal(xhr.responseXML.constructor, xmlDocumentConstructor);
  });

  test("parses the body if it's XML and xml content type is set", function () {
    xhr.respond(200, { 'Content-Type': 'application/xml' }, "<key>value</key>");
    equal(xhr.responseXML.constructor, xmlDocumentConstructor);
  });

  test("does not parse the body if it's XML and another content type is set", function () {
    xhr.respond(200, { 'Content-Type': 'application/json' }, "<key>value</key>");
    equal(xhr.responseXML, undefined);
  });

  test("calls the onload callback once", function () {
    var wasCalled = 0;

    xhr.onload = function (ev) {
      wasCalled += 1;
    };

    xhr.respond(200, {}, "");

    strictEqual(wasCalled, 1);
  });

  test("calls onreadystatechange for each state change", function () {
    var states = [];

    xhr.onreadystatechange = function () {
      states.push(this.readyState);
    };

    xhr.open('get', '/some/url');

    xhr.respond(200, {}, "");

    var expectedStates = [FakeXMLHttpRequest.OPENED, FakeXMLHttpRequest.HEADERS_RECEIVED, FakeXMLHttpRequest.LOADING, FakeXMLHttpRequest.DONE];
    deepEqual(states, expectedStates);
  });

  test("passes event to onreadystatechange", function () {
    var event = null;
    xhr.onreadystatechange = function (e) {
      event = e;
    };
    xhr.open('get', '/some/url');
    xhr.respond(200, {}, "");

    ok(event && event.type === 'readystatechange', 'passes event with type "readystatechange"');
  });

  test("overrideMimeType overrides content-type responseHeader", function () {
    xhr.overrideMimeType('text/plain');
    xhr.respond(200, { "Content-Type": "application/json" });
    deepEqual(xhr.responseHeaders, { "Content-Type": "text/plain" });
  });

  test("parses the body if it's XML and overrideMimeType is set to xml", function () {
    xhr.overrideMimeType('application/xml');
    xhr.respond(200, { 'Content-Type': 'text/plain' }, "<key>value</key>");
    equal(xhr.responseXML.constructor, xmlDocumentConstructor);
  });

  test("does not parse the body if it's XML and overrideMimeType is set to another content type", function () {
    xhr.overrideMimeType('text/plain');
    xhr.respond(200, { 'Content-Type': 'application/xml' }, "<key>value</key>");
    equal(xhr.responseXML, undefined);
  });
});
define('route-recognizer', ['exports', 'module', './route-recognizer/dsl'], function (exports, module, _routeRecognizerDsl) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _map = _interopRequireDefault(_routeRecognizerDsl);

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(currentState) {
      var string = this.string,
          ch;

      for (var i = 0; i < string.length; i++) {
        ch = string.charAt(i);
        currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: ch });
      }

      return currentState;
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(currentState) {
      return currentState.put({ invalidChars: "/", repeat: true, validChars: undefined });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      return params[this.name];
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(currentState) {
      return currentState.put({ invalidChars: "", repeat: true, validChars: undefined });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      return params[this.name];
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar(currentState) {
      return currentState;
    },
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/");
    var results = new Array(segments.length);

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results[i] = new DynamicSegment(match[1]);
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results[i] = new StarSegment(match[1]);
        specificity.val += '1';
        names.push(match[1]);
      } else if (segment === "") {
        results[i] = new EpsilonSegment();
        specificity.val += '2';
      } else {
        results[i] = new StaticSegment(segment);
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
    this.charSpecs = {};
    this.regex = undefined;
    this.handlers = undefined;
    this.specificity = undefined;
  }

  State.prototype = {
    get: function get(charSpec) {
      if (this.charSpecs[charSpec.validChars]) {
        return this.charSpecs[charSpec.validChars];
      }

      var nextStates = this.nextStates;

      for (var i = 0; i < nextStates.length; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          this.charSpecs[charSpec.validChars] = child;
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      var returned = [];

      for (var i = 0; i < nextStates.length; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }
  };

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    result.length = handlers.length;

    for (var i = 0; i < handlers.length; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0; j < names.length; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result[i] = { handler: handler.handler, params: params, isDynamic: !!names.length };
    }

    return result;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    var result;
    try {
      result = decodeURIComponent(part);
    } catch (error) {
      result = '';
    }
    return result;
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = new Array(routes.length),
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0; i < routes.length; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0; j < segments.length; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = segment.eachChar(currentState);
          regex += segment.regex();
        }
        var handler = { handler: route.handler, names: names };
        handlers[i] = handler;
      }

      if (isEmpty) {
        currentState = currentState.put({ invalidChars: undefined, repeat: false, validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name];

      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var result = new Array(route.handlers.length);

      for (var i = 0; i < route.handlers.length; i++) {
        result[i] = route.handlers[i];
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams, route.handlers);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params, handlers) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0; j < value.length; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path) {
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        queryParams = this.parseQueryString(queryString);
      }

      path = decodeURI(path);

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0; i < path.length; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      var solutions = [];
      for (i = 0; i < states.length; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = _map['default'];

  RouteRecognizer.VERSION = 'VERSION_STRING_PLACEHOLDER';

  module.exports = RouteRecognizer;
});
define('route-recognizer.umd', ['exports', './route-recognizer'], function (exports, _routeRecognizer) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _RouteRecognizer = _interopRequireDefault(_routeRecognizer);

  /* global define:true module:true window: true */
  if (typeof define === 'function' && define['amd']) {
    define('route-recognizer', function () {
      return _RouteRecognizer['default'];
    });
  } else if (typeof module !== 'undefined' && module['exports']) {
    module['exports'] = _RouteRecognizer['default'];
  } else if (typeof undefined !== 'undefined') {
    undefined['RouteRecognizer'] = _RouteRecognizer['default'];
  }
});
define("route-recognizer/dsl", ["exports", "module"], function (exports, module) {
  "use strict";

  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0; i < routeArray.length; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  module.exports = function (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  };
});
define("send_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("send", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      xhr = undefined;
    }
  });

  test("sets Content-Type header for non-GET/HEAD requests if not set", function () {
    xhr.open("POST", "/");
    xhr.send("data");
    equal(xhr.requestHeaders["Content-Type"], "text/plain;charset=UTF-8", "sets content-type when not set");
  });

  test("does not change Content-Type if explicitly set for non-GET/HEAD", function () {
    xhr.open("POST", "/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send("data");
    equal(xhr.requestHeaders["Content-Type"], "application/json", "does not change existing content-type header");
  });

  test("does not set Content-Type if data is FormData object", function () {
    xhr.open("POST", "/");
    xhr.send(new FormData());
    equal(xhr.requestHeaders["Content-Type"], null, "does not set content-type header for FormData POSTs");
  });
});
define("src/fake-xml-http-request", ["exports", "module"], function (exports, module) {
  /**
   * Minimal Event interface implementation
   *
   * Original implementation by Sven Fuchs: https://gist.github.com/995028
   * Modifications and tests by Christian Johansen.
   *
   * @author Sven Fuchs (svenfuchs@artweb-design.de)
   * @author Christian Johansen (christian@cjohansen.no)
   * @license BSD
   *
   * Copyright (c) 2011 Sven Fuchs, Christian Johansen
   */

  "use strict";

  var _Event = function Event(type, bubbles, cancelable, target) {
    this.type = type;
    this.bubbles = bubbles;
    this.cancelable = cancelable;
    this.target = target;
  };

  _Event.prototype = {
    stopPropagation: function stopPropagation() {},
    preventDefault: function preventDefault() {
      this.defaultPrevented = true;
    }
  };

  /*
    Used to set the statusText property of an xhr object
  */
  var httpStatusCodes = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    300: "Multiple Choice",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    422: "Unprocessable Entity",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported"
  };

  /*
    Cross-browser XML parsing. Used to turn
    XML responses into Document objects
    Borrowed from JSpec
  */
  function parseXML(text) {
    var xmlDoc;

    if (typeof DOMParser != "undefined") {
      var parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");
    } else {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
      xmlDoc.loadXML(text);
    }

    return xmlDoc;
  }

  /*
    Without mocking, the native XMLHttpRequest object will throw
    an error when attempting to set these headers. We match this behavior.
  */
  var unsafeHeaders = {
    "Accept-Charset": true,
    "Accept-Encoding": true,
    "Connection": true,
    "Content-Length": true,
    "Cookie": true,
    "Cookie2": true,
    "Content-Transfer-Encoding": true,
    "Date": true,
    "Expect": true,
    "Host": true,
    "Keep-Alive": true,
    "Referer": true,
    "TE": true,
    "Trailer": true,
    "Transfer-Encoding": true,
    "Upgrade": true,
    "User-Agent": true,
    "Via": true
  };

  /*
    Adds an "event" onto the fake xhr object
    that just calls the same-named method. This is
    in case a library adds callbacks for these events.
  */
  function _addEventListener(eventName, xhr) {
    xhr.addEventListener(eventName, function (event) {
      var listener = xhr["on" + eventName];

      if (listener && typeof listener == "function") {
        listener(event);
      }
    });
  }

  function EventedObject() {
    this._eventListeners = {};
    var events = ["loadstart", "progress", "load", "abort", "loadend"];
    for (var i = events.length - 1; i >= 0; i--) {
      _addEventListener(events[i], this);
    }
  };

  EventedObject.prototype = {
    /*
      Duplicates the behavior of native XMLHttpRequest's addEventListener function
    */
    addEventListener: function addEventListener(event, listener) {
      this._eventListeners[event] = this._eventListeners[event] || [];
      this._eventListeners[event].push(listener);
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's removeEventListener function
    */
    removeEventListener: function removeEventListener(event, listener) {
      var listeners = this._eventListeners[event] || [];

      for (var i = 0, l = listeners.length; i < l; ++i) {
        if (listeners[i] == listener) {
          return listeners.splice(i, 1);
        }
      }
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's dispatchEvent function
    */
    dispatchEvent: function dispatchEvent(event) {
      var type = event.type;
      var listeners = this._eventListeners[type] || [];

      for (var i = 0; i < listeners.length; i++) {
        if (typeof listeners[i] == "function") {
          listeners[i].call(this, event);
        } else {
          listeners[i].handleEvent(event);
        }
      }

      return !!event.defaultPrevented;
    },

    /*
      Triggers an `onprogress` event with the given parameters.
    */
    _progress: function _progress(lengthComputable, loaded, total) {
      var event = new _Event('progress');
      event.target = this;
      event.lengthComputable = lengthComputable;
      event.loaded = loaded;
      event.total = total;
      this.dispatchEvent(event);
    }
  };

  /*
    Constructor for a fake window.XMLHttpRequest
  */
  function FakeXMLHttpRequest() {
    EventedObject.call(this);
    this.readyState = FakeXMLHttpRequest.UNSENT;
    this.requestHeaders = {};
    this.requestBody = null;
    this.status = 0;
    this.statusText = "";
    this.upload = new EventedObject();
  }

  FakeXMLHttpRequest.prototype = new EventedObject();

  // These status codes are available on the native XMLHttpRequest
  // object, so we match that here in case a library is relying on them.
  FakeXMLHttpRequest.UNSENT = 0;
  FakeXMLHttpRequest.OPENED = 1;
  FakeXMLHttpRequest.HEADERS_RECEIVED = 2;
  FakeXMLHttpRequest.LOADING = 3;
  FakeXMLHttpRequest.DONE = 4;

  var FakeXMLHttpRequestProto = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4,
    async: true,
    withCredentials: false,

    /*
      Duplicates the behavior of native XMLHttpRequest's open function
    */
    open: function open(method, url, async, username, password) {
      this.method = method;
      this.url = url;
      this.async = typeof async == "boolean" ? async : true;
      this.username = username;
      this.password = password;
      this.responseText = null;
      this.responseXML = null;
      this.requestHeaders = {};
      this.sendFlag = false;
      this._readyStateChange(FakeXMLHttpRequest.OPENED);
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's setRequestHeader function
    */
    setRequestHeader: function setRequestHeader(header, value) {
      verifyState(this);

      if (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header)) {
        throw new Error("Refused to set unsafe header \"" + header + "\"");
      }

      if (this.requestHeaders[header]) {
        this.requestHeaders[header] += "," + value;
      } else {
        this.requestHeaders[header] = value;
      }
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's send function
    */
    send: function send(data) {
      verifyState(this);

      if (!/^(get|head)$/i.test(this.method)) {
        if (!this.requestHeaders["Content-Type"] && !(data || '').toString().match('FormData')) {
          this.requestHeaders["Content-Type"] = "text/plain;charset=UTF-8";
        }

        this.requestBody = data;
      }

      this.errorFlag = false;
      this.sendFlag = this.async;
      this._readyStateChange(FakeXMLHttpRequest.OPENED);

      if (typeof this.onSend == "function") {
        this.onSend(this);
      }

      this.dispatchEvent(new _Event("loadstart", false, false, this));
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's abort function
    */
    abort: function abort() {
      this.aborted = true;
      this.responseText = null;
      this.errorFlag = true;
      this.requestHeaders = {};

      if (this.readyState > FakeXMLHttpRequest.UNSENT && this.sendFlag) {
        this._readyStateChange(FakeXMLHttpRequest.DONE);
        this.sendFlag = false;
      }

      this.readyState = FakeXMLHttpRequest.UNSENT;

      this.dispatchEvent(new _Event("abort", false, false, this));
      if (typeof this.onerror === "function") {
        this.onerror();
      }
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's getResponseHeader function
    */
    getResponseHeader: function getResponseHeader(header) {
      if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
        return null;
      }

      if (/^Set-Cookie2?$/i.test(header)) {
        return null;
      }

      header = header.toLowerCase();

      for (var h in this.responseHeaders) {
        if (h.toLowerCase() == header) {
          return this.responseHeaders[h];
        }
      }

      return null;
    },

    /*
      Duplicates the behavior of native XMLHttpRequest's getAllResponseHeaders function
    */
    getAllResponseHeaders: function getAllResponseHeaders() {
      if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
        return "";
      }

      var headers = "";

      for (var header in this.responseHeaders) {
        if (this.responseHeaders.hasOwnProperty(header) && !/^Set-Cookie2?$/i.test(header)) {
          headers += header + ": " + this.responseHeaders[header] + "\r\n";
        }
      }

      return headers;
    },

    /*
     Duplicates the behavior of native XMLHttpRequest's overrideMimeType function
     */
    overrideMimeType: function overrideMimeType(mimeType) {
      if (typeof mimeType === "string") {
        this.forceMimeType = mimeType.toLowerCase();
      }
    },

    /*
      Places a FakeXMLHttpRequest object into the passed
      state.
    */
    _readyStateChange: function _readyStateChange(state) {
      this.readyState = state;

      if (typeof this.onreadystatechange == "function") {
        this.onreadystatechange(new _Event("readystatechange"));
      }

      this.dispatchEvent(new _Event("readystatechange"));

      if (this.readyState == FakeXMLHttpRequest.DONE) {
        this.dispatchEvent(new _Event("load", false, false, this));
        this.dispatchEvent(new _Event("loadend", false, false, this));
      }
    },

    /*
      Sets the FakeXMLHttpRequest object's response headers and
      places the object into readyState 2
    */
    _setResponseHeaders: function _setResponseHeaders(headers) {
      this.responseHeaders = {};

      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          this.responseHeaders[header] = headers[header];
        }
      }

      if (this.forceMimeType) {
        this.responseHeaders['Content-Type'] = this.forceMimeType;
      }

      if (this.async) {
        this._readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
      } else {
        this.readyState = FakeXMLHttpRequest.HEADERS_RECEIVED;
      }
    },

    /*
      Sets the FakeXMLHttpRequest object's response body and
      if body text is XML, sets responseXML to parsed document
      object
    */
    _setResponseBody: function _setResponseBody(body) {
      verifyRequestSent(this);
      verifyHeadersReceived(this);
      verifyResponseBodyType(body);

      var chunkSize = this.chunkSize || 10;
      var index = 0;
      this.responseText = "";

      do {
        if (this.async) {
          this._readyStateChange(FakeXMLHttpRequest.LOADING);
        }

        this.responseText += body.substring(index, index + chunkSize);
        index += chunkSize;
      } while (index < body.length);

      var type = this.getResponseHeader("Content-Type");

      if (this.responseText && (!type || /(text\/xml)|(application\/xml)|(\+xml)/.test(type))) {
        try {
          this.responseXML = parseXML(this.responseText);
        } catch (e) {
          // Unable to parse XML - no biggie
        }
      }

      if (this.async) {
        this._readyStateChange(FakeXMLHttpRequest.DONE);
      } else {
        this.readyState = FakeXMLHttpRequest.DONE;
      }
    },

    /*
      Forces a response on to the FakeXMLHttpRequest object.
       This is the public API for faking responses. This function
      takes a number status, headers object, and string body:
       ```
      xhr.respond(404, {Content-Type: 'text/plain'}, "Sorry. This object was not found.")
       ```
    */
    respond: function respond(status, headers, body) {
      this._setResponseHeaders(headers || {});
      this.status = typeof status == "number" ? status : 200;
      this.statusText = httpStatusCodes[this.status];
      this._setResponseBody(body || "");
    }
  };

  for (var property in FakeXMLHttpRequestProto) {
    FakeXMLHttpRequest.prototype[property] = FakeXMLHttpRequestProto[property];
  }

  function verifyState(xhr) {
    if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
      throw new Error("INVALID_STATE_ERR");
    }

    if (xhr.sendFlag) {
      throw new Error("INVALID_STATE_ERR");
    }
  }

  function verifyRequestSent(xhr) {
    if (xhr.readyState == FakeXMLHttpRequest.DONE) {
      throw new Error("Request done");
    }
  }

  function verifyHeadersReceived(xhr) {
    if (xhr.async && xhr.readyState != FakeXMLHttpRequest.HEADERS_RECEIVED) {
      throw new Error("No headers received");
    }
  }

  function verifyResponseBodyType(body) {
    if (typeof body != "string") {
      var error = new Error("Attempted to respond to fake XMLHttpRequest with " + body + ", which is not a string.");
      error.name = "InvalidBodyException";
      throw error;
    }
  }
  module.exports = FakeXMLHttpRequest;
});
define("test/aborting_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("aborting", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      window.xhr = undefined;
    }
  });

  test("sets aborted to true", function () {
    xhr.abort();
    equal(xhr.aborted, true);
  });

  test("sets responseText to null", function () {
    xhr.abort();
    equal(xhr.responseText, null);
  });

  test("sets errorFlag to true", function () {
    xhr.abort();
    equal(xhr.errorFlag, true);
  });

  test("sets requestHeaders to {}", function () {
    xhr.abort();
    deepEqual(xhr.requestHeaders, {});
  });

  test("sets readyState to 0", function () {
    xhr.abort();
    equal(xhr.readyState, 0);
  });

  test("calls the abort event", function () {
    var wasCalled = false;
    xhr.addEventListener('abort', function () {
      wasCalled = true;
    });

    xhr.abort();

    ok(wasCalled);
  });

  test("calls the onerror event", function () {
    var wasCalled = false;
    xhr.onerror = function () {
      wasCalled = true;
    };

    xhr.abort();

    ok(wasCalled);
  });
});
define("test/event_listeners_test", ["exports"], function (exports) {
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
define("test/initialization_test", ["exports"], function (exports) {
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
define("test/open_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("open", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      xhr = undefined;
    }
  });

  test("open sets the method property", function () {
    xhr.open('get', '/some/url');
    equal(xhr.method, 'get');
  });

  test("open sets the url property", function () {
    xhr.open('get', '/some/url');
    equal(xhr.url, '/some/url');
  });

  test("open sets the async property", function () {
    xhr.open('get', '/some/url', false);
    equal(xhr.async, false);
  });

  test("open sets the async property to true if a boolean isn't passed", function () {
    xhr.open('get', '/some/url', 'whatisthisidontevent');
    equal(xhr.url, '/some/url', false);
  });

  test("open sets the username property", function () {
    xhr.open('get', '/some/url', true, 'johndoe');
    equal(xhr.username, 'johndoe');
  });

  test("open sets the password property", function () {
    xhr.open('get', '/some/url', true, 'johndoe', 'password');
    equal(xhr.password, 'password');
  });

  test("initializes the responseText as null", function () {
    xhr.open('get', '/some/url');
    equal(xhr.responseText, null);
  });

  test("initializes the responseXML as null", function () {
    xhr.open('get', '/some/url');
    equal(xhr.responseXML, null);
  });

  test("initializes the requestHeaders property as empty object", function () {
    xhr.open('get', '/some/url');
    deepEqual(xhr.requestHeaders, {});
  });

  test("open sets the ready state to 1", function () {
    xhr.open('get', '/some/url');
    equal(xhr.readyState, 1);
  });

  test("triggers the onreadystatechange event with OPENED readyState", function () {
    var readyState = null;

    xhr.onreadystatechange = function () {
      readyState = this.readyState;
    };

    xhr.open('get', '/some/url');

    equal(readyState, FakeXMLHttpRequest.OPENED);
  });
});
define("test/responding_test", ["exports"], function (exports) {
  "use strict";

  var xhr, xmlDocumentConstructor;
  module("responding", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
      xmlDocumentConstructor = makeXMLDocument().constructor;
    },
    teardown: function teardown() {
      xhr = undefined;
      xmlDocumentConstructor = undefined;
    }
  });

  // Different browsers report different constructors for XML Documents.
  // Chrome 45.0.2454 and Firefox 40.0.0 report `XMLDocument`,
  // PhantomJS 1.9.8 reports `Document`.
  // Make a dummy xml document to determine what constructor to
  // compare against in the tests below.
  // This function is taken from `parseXML` in the src/
  function makeXMLDocument() {
    var xmlDoc,
        text = "<some>xml</some>";

    if (typeof DOMParser != "undefined") {
      var parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");
    } else {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
      xmlDoc.loadXML(text);
    }

    return xmlDoc;
  }

  test("defaults responseHeaders to {} if not passed", function () {
    xhr.respond(200);
    deepEqual(xhr.responseHeaders, {});
  });

  test("sets responseHeaders", function () {
    xhr.respond(200, { "Content-Type": "application/json" });
    deepEqual(xhr.responseHeaders, { "Content-Type": "application/json" });
  });

  test("sets body", function () {
    xhr.respond(200, { "Content-Type": "application/json" }, JSON.stringify({ a: 'key' }));
    equal(xhr.responseText, '{"a":"key"}');
  });

  test("parses the body if it's XML and no content-type is set", function () {
    xhr.respond(200, {}, "<key>value</key>");
    equal(xhr.responseXML.constructor, xmlDocumentConstructor);
  });

  test("parses the body if it's XML and xml content type is set", function () {
    xhr.respond(200, { 'Content-Type': 'application/xml' }, "<key>value</key>");
    equal(xhr.responseXML.constructor, xmlDocumentConstructor);
  });

  test("does not parse the body if it's XML and another content type is set", function () {
    xhr.respond(200, { 'Content-Type': 'application/json' }, "<key>value</key>");
    equal(xhr.responseXML, undefined);
  });

  test("calls the onload callback once", function () {
    var wasCalled = 0;

    xhr.onload = function (ev) {
      wasCalled += 1;
    };

    xhr.respond(200, {}, "");

    strictEqual(wasCalled, 1);
  });

  test("calls onreadystatechange for each state change", function () {
    var states = [];

    xhr.onreadystatechange = function () {
      states.push(this.readyState);
    };

    xhr.open('get', '/some/url');

    xhr.respond(200, {}, "");

    var expectedStates = [FakeXMLHttpRequest.OPENED, FakeXMLHttpRequest.HEADERS_RECEIVED, FakeXMLHttpRequest.LOADING, FakeXMLHttpRequest.DONE];
    deepEqual(states, expectedStates);
  });

  test("passes event to onreadystatechange", function () {
    var event = null;
    xhr.onreadystatechange = function (e) {
      event = e;
    };
    xhr.open('get', '/some/url');
    xhr.respond(200, {}, "");

    ok(event && event.type === 'readystatechange', 'passes event with type "readystatechange"');
  });

  test("overrideMimeType overrides content-type responseHeader", function () {
    xhr.overrideMimeType('text/plain');
    xhr.respond(200, { "Content-Type": "application/json" });
    deepEqual(xhr.responseHeaders, { "Content-Type": "text/plain" });
  });

  test("parses the body if it's XML and overrideMimeType is set to xml", function () {
    xhr.overrideMimeType('application/xml');
    xhr.respond(200, { 'Content-Type': 'text/plain' }, "<key>value</key>");
    equal(xhr.responseXML.constructor, xmlDocumentConstructor);
  });

  test("does not parse the body if it's XML and overrideMimeType is set to another content type", function () {
    xhr.overrideMimeType('text/plain');
    xhr.respond(200, { 'Content-Type': 'application/xml' }, "<key>value</key>");
    equal(xhr.responseXML, undefined);
  });
});
define("test/send_test", ["exports"], function (exports) {
  "use strict";

  var xhr;
  module("send", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
    },
    teardown: function teardown() {
      xhr = undefined;
    }
  });

  test("sets Content-Type header for non-GET/HEAD requests if not set", function () {
    xhr.open("POST", "/");
    xhr.send("data");
    equal(xhr.requestHeaders["Content-Type"], "text/plain;charset=UTF-8", "sets content-type when not set");
  });

  test("does not change Content-Type if explicitly set for non-GET/HEAD", function () {
    xhr.open("POST", "/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send("data");
    equal(xhr.requestHeaders["Content-Type"], "application/json", "does not change existing content-type header");
  });

  test("does not set Content-Type if data is FormData object", function () {
    xhr.open("POST", "/");
    xhr.send(new FormData());
    equal(xhr.requestHeaders["Content-Type"], null, "does not set content-type header for FormData POSTs");
  });
});
define('test/unsafe_headers_test', ['exports'], function (exports) {
  'use strict';

  var xhr;
  module("setting unsafe header mirrors browser behavior and throws", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
      xhr.open('GET', '/');
    },
    teardown: function teardown() {
      window.xhr = undefined;
    }
  });

  test("Accept-Charset", function () {
    throws(function () {
      xhr.setRequestHeader("Accept-Charset", '...');
    }, /Refused to set unsafe header.*Accept\-Charset/);
  });

  test("Accept-Encoding", function () {
    throws(function () {
      xhr.setRequestHeader("Accept-Encoding", '...');
    }, /Refused to set unsafe header.*Accept\-Encoding/);
  });

  test("Connection", function () {
    throws(function () {
      xhr.setRequestHeader("Connection", '...');
    }, /Refused to set unsafe header.*Connection/);
  });

  test("Content-Length", function () {
    throws(function () {
      xhr.setRequestHeader("Content\-Length", '...');
    }, /Refused to set unsafe header.*Content\-Length/);
  });

  test("Cookie", function () {
    throws(function () {
      xhr.setRequestHeader("Cookie", '...');
    }, /Refused to set unsafe header.*Cookie/);
  });

  test("Cookie2", function () {
    throws(function () {
      xhr.setRequestHeader("Cookie2", '...');
    }, /Refused to set unsafe header.*Cookie2/);
  });

  test("Content-Transfer-Encoding", function () {
    throws(function () {
      xhr.setRequestHeader("Content-Transfer-Encoding", '...');
    }, /Refused to set unsafe header.*Content\-Transfer\-Encoding/);
  });

  test("Date", function () {
    throws(function () {
      xhr.setRequestHeader("Date", '...');
    }, /Refused to set unsafe header.*Date/);
  });

  test("Expect", function () {
    throws(function () {
      xhr.setRequestHeader("Expect", '...');
    }, /Refused to set unsafe header.*Expect/);
  });

  test("Host", function () {
    throws(function () {
      xhr.setRequestHeader("Host", '...');
    }, /Refused to set unsafe header.*Host/);
  });

  test("Keep-Alive", function () {
    throws(function () {
      xhr.setRequestHeader("Keep-Alive", '...');
    }, /Refused to set unsafe header.*Keep-Alive/);
  });

  test("Referer", function () {
    throws(function () {
      xhr.setRequestHeader("Referer", '...');
    }, /Refused to set unsafe header.*Referer/);
  });

  test("TE", function () {
    throws(function () {
      xhr.setRequestHeader("TE", '...');
    }, /Refused to set unsafe header.*TE/);
  });

  test("Trailer", function () {
    throws(function () {
      xhr.setRequestHeader("Trailer", '...');
    }, /Refused to set unsafe header.*Trailer/);
  });

  test("Transfer-Encoding", function () {
    throws(function () {
      xhr.setRequestHeader("Transfer-Encoding", '...');
    }, /Refused to set unsafe header.*Transfer\-Encoding/);
  });

  test("Upgrade", function () {
    throws(function () {
      xhr.setRequestHeader("Upgrade", '...');
    }, /Refused to set unsafe header.*Upgrade/);
  });

  test("User-Agent", function () {
    throws(function () {
      xhr.setRequestHeader("User-Agent", '...');
    }, /Refused to set unsafe header.*User\-Agent/);
  });

  test("Via", function () {
    throws(function () {
      xhr.setRequestHeader("Via", '...');
    }, /Refused to set unsafe header.*Via/);
  });
});
define("test/upload_test", ["exports"], function (exports) {
  "use strict";

  var upload;
  var xhr;

  module("upload", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
      upload = xhr.upload;
    }
  });

  test("the upload property of a fake xhr is defined", function () {
    ok(upload);
  });

  test("_progress triggers the onprogress event", function () {
    var event;
    upload.onprogress = function (e) {
      event = e;
    };
    upload._progress(true, 10, 100);
    ok(event, "A progress event was fired");
    ok(event.lengthComputable, "ProgressEvent.lengthComputable");
    equal(event.loaded, 10, "ProgressEvent.loaded");
    equal(event.total, 100, "ProgressEvent.total");
  });
});
define('unsafe_headers_test', ['exports'], function (exports) {
  'use strict';

  var xhr;
  module("setting unsafe header mirrors browser behavior and throws", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
      xhr.open('GET', '/');
    },
    teardown: function teardown() {
      window.xhr = undefined;
    }
  });

  test("Accept-Charset", function () {
    throws(function () {
      xhr.setRequestHeader("Accept-Charset", '...');
    }, /Refused to set unsafe header.*Accept\-Charset/);
  });

  test("Accept-Encoding", function () {
    throws(function () {
      xhr.setRequestHeader("Accept-Encoding", '...');
    }, /Refused to set unsafe header.*Accept\-Encoding/);
  });

  test("Connection", function () {
    throws(function () {
      xhr.setRequestHeader("Connection", '...');
    }, /Refused to set unsafe header.*Connection/);
  });

  test("Content-Length", function () {
    throws(function () {
      xhr.setRequestHeader("Content\-Length", '...');
    }, /Refused to set unsafe header.*Content\-Length/);
  });

  test("Cookie", function () {
    throws(function () {
      xhr.setRequestHeader("Cookie", '...');
    }, /Refused to set unsafe header.*Cookie/);
  });

  test("Cookie2", function () {
    throws(function () {
      xhr.setRequestHeader("Cookie2", '...');
    }, /Refused to set unsafe header.*Cookie2/);
  });

  test("Content-Transfer-Encoding", function () {
    throws(function () {
      xhr.setRequestHeader("Content-Transfer-Encoding", '...');
    }, /Refused to set unsafe header.*Content\-Transfer\-Encoding/);
  });

  test("Date", function () {
    throws(function () {
      xhr.setRequestHeader("Date", '...');
    }, /Refused to set unsafe header.*Date/);
  });

  test("Expect", function () {
    throws(function () {
      xhr.setRequestHeader("Expect", '...');
    }, /Refused to set unsafe header.*Expect/);
  });

  test("Host", function () {
    throws(function () {
      xhr.setRequestHeader("Host", '...');
    }, /Refused to set unsafe header.*Host/);
  });

  test("Keep-Alive", function () {
    throws(function () {
      xhr.setRequestHeader("Keep-Alive", '...');
    }, /Refused to set unsafe header.*Keep-Alive/);
  });

  test("Referer", function () {
    throws(function () {
      xhr.setRequestHeader("Referer", '...');
    }, /Refused to set unsafe header.*Referer/);
  });

  test("TE", function () {
    throws(function () {
      xhr.setRequestHeader("TE", '...');
    }, /Refused to set unsafe header.*TE/);
  });

  test("Trailer", function () {
    throws(function () {
      xhr.setRequestHeader("Trailer", '...');
    }, /Refused to set unsafe header.*Trailer/);
  });

  test("Transfer-Encoding", function () {
    throws(function () {
      xhr.setRequestHeader("Transfer-Encoding", '...');
    }, /Refused to set unsafe header.*Transfer\-Encoding/);
  });

  test("Upgrade", function () {
    throws(function () {
      xhr.setRequestHeader("Upgrade", '...');
    }, /Refused to set unsafe header.*Upgrade/);
  });

  test("User-Agent", function () {
    throws(function () {
      xhr.setRequestHeader("User-Agent", '...');
    }, /Refused to set unsafe header.*User\-Agent/);
  });

  test("Via", function () {
    throws(function () {
      xhr.setRequestHeader("Via", '...');
    }, /Refused to set unsafe header.*Via/);
  });
});
define("upload_test", ["exports"], function (exports) {
  "use strict";

  var upload;
  var xhr;

  module("upload", {
    setup: function setup() {
      xhr = new FakeXMLHttpRequest();
      upload = xhr.upload;
    }
  });

  test("the upload property of a fake xhr is defined", function () {
    ok(upload);
  });

  test("_progress triggers the onprogress event", function () {
    var event;
    upload.onprogress = function (e) {
      event = e;
    };
    upload._progress(true, 10, 100);
    ok(event, "A progress event was fired");
    ok(event.lengthComputable, "ProgressEvent.lengthComputable");
    equal(event.loaded, 10, "ProgressEvent.loaded");
    equal(event.total, 100, "ProgressEvent.total");
  });
});