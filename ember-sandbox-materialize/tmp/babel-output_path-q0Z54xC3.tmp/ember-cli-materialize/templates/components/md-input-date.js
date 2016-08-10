define("ember-cli-materialize/templates/components/md-input-date", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "modules/ember-cli-materialize/templates/components/md-input-date.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bw-compat-icon", [["get", "icon", ["loc", [null, [2, 19], [2, 23]]]]], ["extraClasses", "prefix"], ["loc", [null, [2, 2], [2, 47]]]]],
        locals: [],
        templates: []
      };
    })();
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
            "line": 13,
            "column": 65
          }
        },
        "moduleName": "modules/ember-cli-materialize/templates/components/md-input-date.hbs"
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
        var el1 = dom.createElement("input");
        dom.setAttribute(el1, "type", "date");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [4]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createAttrMorph(element0, 'id');
        morphs[2] = dom.createAttrMorph(element0, 'class');
        morphs[3] = dom.createAttrMorph(element0, 'data-value');
        morphs[4] = dom.createAttrMorph(element0, 'required');
        morphs[5] = dom.createAttrMorph(element0, 'readonly');
        morphs[6] = dom.createAttrMorph(element0, 'disabled');
        morphs[7] = dom.createAttrMorph(element1, 'for');
        morphs[8] = dom.createAttrMorph(element1, 'data-error');
        morphs[9] = dom.createMorphAt(element1, 0, 0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["attribute", "id", ["concat", [["get", "id", ["loc", [null, [6, 8], [6, 10]]]]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "validate", ["loc", [null, [7, 14], [7, 22]]]], "validate"], [], ["loc", [null, [7, 9], [7, 35]]]], " ", ["subexpr", "if", [["get", "errors", ["loc", [null, [7, 41], [7, 47]]]], "invalid", "valid"], [], ["loc", [null, [7, 36], [7, 67]]]], " datepicker"]]], ["attribute", "data-value", ["concat", [["get", "value", ["loc", [null, [8, 16], [8, 21]]]]]]], ["attribute", "required", ["get", "required", ["loc", [null, [9, 13], [9, 21]]]]], ["attribute", "readonly", ["get", "readonly", ["loc", [null, [10, 13], [10, 21]]]]], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [11, 13], [11, 21]]]]], ["attribute", "for", ["concat", [["get", "id", ["loc", [null, [13, 14], [13, 16]]]]]]], ["attribute", "data-error", ["get", "_errorString", ["loc", [null, [13, 33], [13, 45]]]]], ["content", "label", ["loc", [null, [13, 48], [13, 57]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});