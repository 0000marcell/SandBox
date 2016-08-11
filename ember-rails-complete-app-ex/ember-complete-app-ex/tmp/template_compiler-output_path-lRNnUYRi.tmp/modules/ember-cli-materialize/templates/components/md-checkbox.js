export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
        ]
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
      "moduleName": "modules/ember-cli-materialize/templates/components/md-checkbox.hbs"
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
      dom.setAttribute(el1,"class","materialize-selectable-item-label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(element0,0,0);
      morphs[2] = dom.createMorphAt(element0,1,1);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","input",[],["type","checkbox","class","materialize-selectable-item-input","checked",["subexpr","@mut",[["get","isSelected",["loc",[null,[1,74],[1,84]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[1,94],[1,102]]]]],[],[]]],["loc",[null,[1,0],[1,104]]]],
      ["content","name",["loc",[null,[2,49],[2,57]]]],
      ["content","yield",["loc",[null,[2,57],[2,66]]]]
    ],
    locals: [],
    templates: []
  };
}()));