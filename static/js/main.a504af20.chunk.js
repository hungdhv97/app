(this["webpackJsonpform-editing-devextreme-data-grid"]=this["webpackJsonpform-editing-devextreme-data-grid"]||[]).push([[0],{223:function(t,e,n){},479:function(t,e,n){"use strict";n.r(e);n(223);var a=n(39),o=n.n(a),i=n(150),c=n.n(i),d=n(218),r=n(219),l=n(222),s=n(221),j=n(26),h=n.n(j),u=(n(473),n(44)),m=n(220),p=n(151),b=n(101),O=n.n(b),x=(n(476),n(477),n(16));function w(t){if(!t.ok)throw Error(t.statusText);return t}var g=new O.a({key:"id",loadMode:"raw",load:function(){return fetch("http://localhost:3010/documents").then(w).then((function(t){return t.json()})).catch((function(){throw"Network error"}))},insert:function(t){return console.log(t),fetch("http://localhost:3010/documents",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(w).catch((function(){throw"Network error"}))},remove:function(t){return console.log(t),fetch("http://localhost:3010/documents/".concat(encodeURIComponent(t)),{method:"DELETE"}).then(w).catch((function(){throw"Network error"}))},update:function(t,e){return console.log(e),fetch("http://localhost:3010/documents/".concat(encodeURIComponent(t)),{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(w).catch((function(){throw"Network error"}))}}),f={height:100},F=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(d.a)(this,n),a=e.call(this,t),Object(p.loadMessages)(m),Object(p.locale)("vi"),a}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{id:"data-grid-demo",children:Object(x.jsxs)(h.a,{dataSource:g,keyExpr:"ID",showBorders:!0,children:[Object(x.jsx)(j.FilterRow,{visible:!0,applyFilter:"auto"}),Object(x.jsx)(j.Paging,{defaultPageSize:10}),Object(x.jsx)(j.Pager,{showPageSizeSelector:!0,allowedPageSizes:[5,10,20],showInfo:!0}),Object(x.jsxs)(j.Editing,{mode:"popup",allowAdding:!0,allowDeleting:!0,allowUpdating:!0,children:[Object(x.jsx)(j.Popup,{title:"Th\xf4ng tin c\xf4ng v\u0103n",showTitle:!0,width:700,height:525,children:Object(x.jsx)(j.Position,{my:"top",at:"top",of:window})}),Object(x.jsx)(j.Form,{children:Object(x.jsxs)(u.Item,{itemType:"group",colCount:2,colSpan:2,children:[Object(x.jsx)(u.Item,{dataField:"DocumentID"}),Object(x.jsx)(u.Item,{dataField:"DateDocument"}),Object(x.jsx)(u.Item,{dataField:"Office"}),Object(x.jsx)(u.Item,{dataField:"DateInsert"}),Object(x.jsx)(u.Item,{dataField:"PageNumber"}),Object(x.jsx)(u.Item,{dataField:"CopyNumber"}),Object(x.jsx)(u.Item,{dataField:"Confidential"}),Object(x.jsx)(u.Item,{dataField:"Receiver"}),Object(x.jsx)(u.Item,{dataField:"ImageLink"}),Object(x.jsx)(u.Item,{dataField:"FileLink"}),Object(x.jsx)(u.Item,{dataField:"Abstract",editorType:"dxTextArea",colSpan:2,editorOptions:f})]})})]}),Object(x.jsx)(j.Column,{dataField:"DocumentID",caption:"S\u1ed1 CV",width:70}),Object(x.jsx)(j.Column,{dataField:"DateDocument",caption:"Ng\xe0y CV",dataType:"date",width:100}),Object(x.jsx)(j.Column,{dataField:"Office",caption:"CQ Ban H\xe0nh",width:150}),Object(x.jsx)(j.Column,{dataField:"DateInsert",caption:"Ng\xe0y Nh\u1eadp CV",dataType:"date",width:100}),Object(x.jsx)(j.Column,{dataField:"Abstract",caption:"Tr\xedch Y\u1ebfu",width:150}),Object(x.jsx)(j.Column,{dataField:"PageNumber",caption:"S\u1ed1 Trang",width:70}),Object(x.jsx)(j.Column,{dataField:"CopyNumber",caption:"S\u1ed1 B\u1ea3n",width:70}),Object(x.jsx)(j.Column,{dataField:"Confidential",caption:"\u0110\u1ed9 M\u1eadt",width:100}),Object(x.jsx)(j.Column,{dataField:"ImageLink",caption:"\u1ea2nh"}),Object(x.jsx)(j.Column,{dataField:"FileLink",caption:"File"}),Object(x.jsx)(j.Column,{dataField:"Receiver",caption:"N\u01a1i Nh\u1eadn",width:130}),Object(x.jsx)(j.Column,{dataField:"IsRead",caption:"\u0110\xe3 \u0110\u1ecdc",width:70}),Object(x.jsx)(j.Column,{dataField:"DateRead",caption:"Ng\xe0y \u0110\u1ecdc",width:100})]})})}}]),n}(o.a.Component),C=n(32);n.n(C).a.initialized((function(){return c.a.render(Object(x.jsx)(F,{}),document.getElementById("app"))}))}},[[479,1,2]]]);
//# sourceMappingURL=main.a504af20.chunk.js.map