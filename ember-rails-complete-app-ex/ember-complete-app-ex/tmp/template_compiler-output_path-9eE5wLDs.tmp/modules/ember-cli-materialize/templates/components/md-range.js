export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      return morphs;
    },
    statements: [
      ["content","name",["loc",[null,[1,7],[1,15]]]],
      ["inline","input",[],["type","range","min",["subexpr","@mut",[["get","min",["loc",[null,[2,25],[2,28]]]]],[],[]],"max",["subexpr","@mut",[["get","max",["loc",[null,[2,33],[2,36]]]]],[],[]],"step",["subexpr","@mut",[["get","step",["loc",[null,[2,42],[2,46]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[2,53],[2,58]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[2,68],[2,76]]]]],[],[]]],["loc",[null,[2,0],[2,78]]]]
    ],
    locals: [],
    templates: []
  };
}()));