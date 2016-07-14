define("ember-cli-materialize/templates/components/md-radio", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "modules/ember-cli-materialize/templates/components/md-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1, "class", "materialize-selectable-item-label materialize-selectable-item-label");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(element0, 2, 2);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [2, 11], [2, 19]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 8], [3, 13]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [4, 13], [4, 23]]]]], [], []], "radioClass", "materialize-selectable-item-input"], ["loc", [null, [1, 0], [5, 50]]]], ["content", "name", ["loc", [null, [7, 2], [7, 10]]]], ["content", "yield", ["loc", [null, [7, 10], [7, 19]]]]],
      locals: [],
      templates: []
    };
  })());
});