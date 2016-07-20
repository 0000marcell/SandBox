export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 18,
          "column": 0
        }
      },
      "moduleName": "app4/templates/users/user/dashboard.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","default-pad height-3");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","pull-left");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","pull-left");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","pull-left");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("		\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","pull-left");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]),1,1);
      return morphs;
    },
    statements: [
      ["inline","pag-table",[],["model",["subexpr","@mut",[["get","model.todos",["loc",[null,[3,20],[3,31]]]]],[],[]],"search",["subexpr","@mut",[["get","searchTodo",["loc",[null,[3,39],[3,49]]]]],[],[]],"page",["subexpr","@mut",[["get","pageTodo",["loc",[null,[3,55],[3,63]]]]],[],[]],"total",["subexpr","@mut",[["get","totalTodos",["loc",[null,[3,70],[3,80]]]]],[],[]],"deleteAction",["subexpr","action",["deleteTodos"],[],["loc",[null,[3,94],[3,118]]]]],["loc",[null,[3,2],[3,120]]]],
      ["inline","pag-table",[],["model",["subexpr","@mut",[["get","model.tasks",["loc",[null,[6,20],[6,31]]]]],[],[]],"search",["subexpr","@mut",[["get","searchTask",["loc",[null,[6,39],[6,49]]]]],[],[]],"page",["subexpr","@mut",[["get","pageTask",["loc",[null,[6,55],[6,63]]]]],[],[]],"total",["subexpr","@mut",[["get","totalTasks",["loc",[null,[6,70],[6,80]]]]],[],[]],"deleteAction",["subexpr","action",["deleteTasks"],[],["loc",[null,[6,94],[6,118]]]]],["loc",[null,[6,2],[6,120]]]],
      ["content","simple-chat",["loc",[null,[9,2],[9,17]]]],
      ["inline","crud-comp",[],["model",["subexpr","@mut",[["get","model.tasks",["loc",[null,[12,20],[12,31]]]]],[],[]],"search",["subexpr","@mut",[["get","searchTask",["loc",[null,[12,39],[12,49]]]]],[],[]],"page",["subexpr","@mut",[["get","pageTask",["loc",[null,[13,14],[13,22]]]]],[],[]],"total",["subexpr","@mut",[["get","totalTask",["loc",[null,[13,29],[13,38]]]]],[],[]],"store",["subexpr","@mut",[["get","store",["loc",[null,[14,14],[14,19]]]]],[],[]],"deleteAction",["subexpr","action",["deleteTasks"],[],["loc",[null,[15,21],[15,45]]]]],["loc",[null,[12,2],[15,47]]]]
    ],
    locals: [],
    templates: []
  };
}()));