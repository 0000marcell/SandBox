define("ember-cli-materialize/templates/components/md-range", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 4
          }
        },
        "moduleName": "modules/ember-cli-materialize/templates/components/md-range.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "range-field");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["content", "name", ["loc", [null, [1, 7], [1, 15]]]], ["inline", "input", [], ["type", "range", "min", ["subexpr", "@mut", [["get", "min", ["loc", [null, [3, 25], [3, 28]]]]], [], []], "max", ["subexpr", "@mut", [["get", "max", ["loc", [null, [3, 33], [3, 36]]]]], [], []], "step", ["subexpr", "@mut", [["get", "step", ["loc", [null, [3, 42], [3, 46]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 53], [3, 58]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 68], [3, 76]]]]], [], []]], ["loc", [null, [3, 0], [3, 78]]]]],
      locals: [],
      templates: []
    };
  })());
});