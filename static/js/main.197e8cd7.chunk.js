(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(23),o=n.n(s),a=n(10),r=(n(28),n(4)),i=n.n(r),l=n(7),j=n(5),d=(n(22),n(2)),b=n(19),h="https://reactnd-books-api.udacity.com",u=localStorage.token;u||(u=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:u},O=n(3),x=function(e){var t,n=e.book.imageLinks;n=n?n.thumbnail:"";var c=e.book.title,s=null===(t=e.book.authors)||void 0===t?void 0:t.join();return Object(O.jsxs)("div",{className:"book",children:[Object(O.jsxs)("div",{className:"book-top",children:[Object(O.jsx)("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:'url("'.concat(n,'")')}}),Object(O.jsx)("div",{className:"book-shelf-changer",children:Object(O.jsxs)("select",{value:e.shelf,onChange:function(t){return e.updateShelf(e.book,t.target.value)},children:[Object(O.jsx)("option",{value:"move",disabled:!0,children:"Move to..."}),Object(O.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(O.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(O.jsx)("option",{value:"read",children:"Read"}),Object(O.jsx)("option",{value:"none",children:"None"})]})})]}),Object(O.jsx)("div",{className:"book-title",children:c}),Object(O.jsx)("div",{className:"book-authors",children:s})]})},m=function(e){return console.log(e),Object(O.jsxs)("div",{className:"list-books",children:[Object(O.jsx)("div",{className:"list-books-title",children:Object(O.jsx)("h1",{children:"MyReads"})}),Object(O.jsx)("div",{className:"list-books-content",children:Object(O.jsx)("div",{children:[{name:"currentlyReading",title:"Currently Reading"},{name:"wantToRead",title:"Want to Read"},{name:"read",title:"Read"}].map((function(t,n){return Object(O.jsxs)("div",{className:"bookshelf",children:[Object(O.jsx)("h2",{className:"bookshelf-title",children:t.title}),Object(O.jsx)("div",{className:"bookshelf-books",children:Object(O.jsx)("ol",{className:"books-grid",children:e.books.filter((function(e){return e.shelf===t.name})).map((function(n){return Object(O.jsx)("li",{children:Object(O.jsx)(x,{book:n,updateShelf:e.updateShelf,shelf:t.name})},n.id)}))})})]},n)}))})}),Object(O.jsx)("div",{className:"open-search",children:Object(O.jsx)(a.b,{to:"/search"})})]})},p=function(e){var t=e.books,n=e.updateShelf,s=Object(c.useState)(""),o=Object(j.a)(s,2),r=(o[0],o[1]),i=Object(c.useState)([]),l=Object(j.a)(i,2),d=l[0],u=l[1],m=function(e){0!==e.length?(r(e.trim()),function(e,t){return fetch("".concat(h,"/search"),{method:"POST",headers:Object(b.a)(Object(b.a)({},f),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))}(e,10).then((function(e){u(e.error?[]:e)}))):u([])},p=d.map((function(e){var n=t.find((function(t){return t.id===e.id}));return e.shelf=n?n.shelf:"none",e}));return Object(O.jsxs)("div",{className:"search-books",children:[Object(O.jsxs)("div",{className:"search-books-bar",children:[Object(O.jsx)(a.b,{to:"/",className:"close-search",children:"Close"}),Object(O.jsx)("div",{className:"search-books-input-wrapper",children:Object(O.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN",onChange:function(e){m(e.target.value)}})})]}),Object(O.jsx)("div",{className:"search-books-results",children:Object(O.jsx)("ol",{className:"books-grid",children:p.map((function(e,t){return Object(O.jsx)(x,{book:e,updateShelf:n,shelf:e.shelf},t)}))})})]})},v=function(){return Object(O.jsxs)("div",{className:"not-found",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"ERROR 404"})}),Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"PAGE NOT FOUND"})})]})};var k=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){var e=!0;return function(){var t=Object(l.a)(i.a.mark((function t(){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,fetch("".concat(h,"/books"),{headers:f}).then((function(e){return e.json()})).then((function(e){return e.books}));case 3:c=t.sent,s(n.concat(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]);var o=function(e,t){e.shelf=t,s(n.filter((function(t){return t.id!==e.id})).concat(e)),function(e,t){fetch("".concat(h,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)(Object(b.a)({},f),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))}(e,t)};return Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{exact:!0,path:"/",element:Object(O.jsx)(m,{books:n,updateShelf:o})}),Object(O.jsx)(d.a,{exact:!0,path:"/search",element:Object(O.jsx)(p,{books:n,updateShelf:o})}),Object(O.jsx)(d.a,{path:"*",element:Object(O.jsx)(v,{})})]})};o.a.render(Object(O.jsx)(a.a,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.197e8cd7.chunk.js.map