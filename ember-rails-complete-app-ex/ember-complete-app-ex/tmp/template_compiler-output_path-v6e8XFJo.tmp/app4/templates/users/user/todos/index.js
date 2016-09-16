export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
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
          "line": 2,
          "column": 0
        }
      },
      "moduleName": "app4/templates/users/user/todos/index.hbs"
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
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","pag-table",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,18],[1,23]]]]],[],[]],"page",["subexpr","@mut",[["get","page",["loc",[null,[1,29],[1,33]]]]],[],[]],"total",["subexpr","@mut",[["get","total",["loc",[null,[1,40],[1,45]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[1,53],[1,59]]]]],[],[]],"deleteAction",["subexpr","action",["delete"],[],["loc",[null,[1,73],[1,92]]]]],["loc",[null,[1,0],[1,94]]]]
    ],
    locals: [],
    templates: []
  };
}()));