(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),i=c(7),a=c.n(i),r=(c(13),c(2)),s=c(8),d=c(5),l=(c(14),c(0)),j=function(e){var t=Object(o.useState)(""),c=Object(d.a)(t,2),n=c[0],i=c[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"C\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"}),Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)},id:"input",autoComplete:"off",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u043b\u043e"}),Object(l.jsx)("button",{onClick:function(){if(""===n.trim())return i(""),alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u043b\u043e");e.addTodo(n),i("")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},u=function(e){var t=e.id,c=e.title,o=e.isComplete,n=e.delTodo,i=e.toggleChecked;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"checkbox",checked:o,onChange:function(){i(t)}}),Object(l.jsx)("span",{className:"todoItem",children:c}),Object(l.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){n(t)}})]})},b=function(e){var t=e.todos,c=e.delTodo,n=e.toggleChecked;if(t.length){var i=t.map((function(e){return Object(o.createElement)(u,Object(r.a)(Object(r.a)({},e),{},{key:e.id,delTodo:c,toggleChecked:n}))}));return Object(l.jsxs)("div",{className:"todoList",children:[i,Object(l.jsxs)("p",{id:"total",children:[" \u0412\u0441\u0435\u0433\u043e ",t.length," "]})]})}return Object(l.jsx)("p",{})};var O=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],i=function(e){return n([].concat(Object(s.a)(c),[{id:Date.now(),title:e,isComplete:!1}]))};return Object(o.useEffect)((function(){JSON.parse(localStorage.getItem("todos"))&&n(JSON.parse(localStorage.getItem("todos")))}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"allblock",children:[Object(l.jsx)(j,{todos:c,addTodo:i}),Object(l.jsx)(b,{todos:c,addTodo:i,delTodo:function(e){return n(c.filter((function(t){return t.id!==e})))},toggleChecked:function(e){return n(c.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{isComplete:!t.isComplete}):Object(r.a)({},t)})))}})]})})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.62a6203a.chunk.js.map