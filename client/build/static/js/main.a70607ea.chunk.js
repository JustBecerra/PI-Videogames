(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(23),s=n.n(c),i=(n(47),n(48),n(5)),o=n(3),u=n.n(o),l=n(6),j=n(16),b=n(7),d=n(15),m=n.n(d),p="/videogames";function f(){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()(p);case 2:return t=e.sent,e.abrupt("return",{type:"GET_ALL_VIDEOGAMES",payload:t.data});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("/videogames?name="+t);case 2:return n=e.sent,e.abrupt("return",{type:"GET_GAME_BY_QUERY",payload:n.data});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(72);var x=n(0);var v=function(){var e,t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],s=Object(b.b)();function i(){return(i=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!r){t.next=11;break}return t.t0=s,t.next=5,g(r);case 5:t.t1=t.sent,(0,t.t0)(t.t1),e="game is being queried",c(""),t.next=12;break;case 11:null===r&&alert("that is not a game");case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(x.jsx)("input",{type:"text",placeholder:"Search game",value:r,onChange:function(e){c(e.target.value)}}),Object(x.jsx)("button",{className:"barrita",type:"submit",children:"Search"}),Object(x.jsx)("div",{children:"string"===typeof e?e:""})]})})},y=(n(74),"/genres");function R(){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()(y);case 2:return t=e.sent,e.abrupt("return",{type:"GET_ALL_GENRES",payload:t.data});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){return{type:"sinFiltro",payload:e}},G=n(12);var S=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.genres}));return Object(a.useEffect)((function(){Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,R();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))()}),[]),Object(x.jsxs)("header",{className:"Barra",children:[Object(x.jsx)(v,{}),Object(x.jsx)("img",{className:"homeimage",value:"sinFiltro",onClick:function(t){e(E(t.target.value))},src:"https://www.nicepng.com/png/detail/89-898495_house-logo-png-home-address-logo-png.png"}),Object(x.jsxs)("form",{children:[Object(x.jsxs)("select",{className:"selectors",onChange:function(t){return function(t){"ASC A-Z"===t.target.value?e({type:"ASC A-Z",payload:t.target.value}):"DESC Z-A"===t.target.value?e((n=t.target.value,{type:"DESC Z-A",payload:n})):"ASC RATING"===t.target.value?e(function(e){return{type:"ASC RATING",payload:e}}(t.target.value)):"DESC RATING"===t.target.value?e(function(e){return{type:"DESC RATING",payload:e}}(t.target.value)):"sinFiltro"===t.target.value&&e(E(t.target.value));var n}(t)},children:[Object(x.jsx)("option",{value:"sinFiltro",children:"Filter by..."}),Object(x.jsx)("option",{value:"ASC RATING",children:"Best Rating"}),Object(x.jsx)("option",{value:"DESC RATING",children:"Worst Rating"}),Object(x.jsx)("option",{value:"ASC A-Z",children:"A-Z"}),Object(x.jsx)("option",{value:"DESC Z-A",children:"Z-A"})]}),Object(x.jsxs)("select",{onChange:function(t){return function(t){e({type:"GENRE_FILTER",payload:t.target.value})}(t)},className:"selectors",children:[Object(x.jsx)("option",{hiddendefaultvalue:"true",children:"Filter by Genres"}),t.map((function(e){return Object(x.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),Object(x.jsx)(G.b,{to:"/create",children:Object(x.jsx)("button",{className:"selectors",children:"Create your own game!"})})]})]})},A=n(8),N=(n(79),n.p+"static/media/GreyJoystick.46e0d706.jpg");var w=function(e){var t,n;if(e.genres)t=null===(n=e.genres)||void 0===n?void 0:n.map((function(e){return Object(A.a)(e.name+" ")}));else if(e.Genres){var a;t=null===(a=e.Genres)||void 0===a?void 0:a.map((function(e){return Object(A.a)(e.name+" ")}))}return Object(x.jsxs)("div",{className:"elemGame",children:[Object(x.jsx)(G.b,{to:"/Home/".concat(e.id),className:"info",children:Object(x.jsx)("h3",{children:e.name})}),Object(x.jsx)("img",{className:"imagen",src:e.image?e.image:N}),Object(x.jsx)("h5",{className:"info",children:t})]})};function _(){return Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"https://acegif.com/wp-content/uploads/loading-25.gif"})})}n(80);var k=function(){var e,t=Object(b.b)(),n=Object(b.c)((function(e){return e.games})),r=Object(b.c)((function(e){return e.filteredGames})),c=Object(b.c)((function(e){return e.gamesQuery})),s=Object(a.useState)(0),i=Object(j.a)(s,2),o=i[0],d=i[1];return Object(a.useEffect)((function(){Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,f();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(a.useEffect)((function(){d(0)}),[r]),e=r.length>0?r.slice(o,o+15):c.length>0?c:n.slice(o,o+15),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)(S,{})}),Object(x.jsx)("div",{className:"Indivgame",children:0===e.length?Object(x.jsx)(_,{}):e.map((function(e){return Object(x.jsx)(w,{id:e.id,name:e.name,rating:e.rating,image:e.background_image,genres:e.Genres?e.Genres:e.genres},e.id)}))}),Object(x.jsxs)("div",{className:"pageButtons",children:[Object(x.jsx)("button",{className:"buttons",onClick:function(){o>0&&d(o-15)},children:"Last Page"}),Object(x.jsx)("button",{className:"buttons",onClick:function(){o<90&&d(o+15)},children:"Next Page"})]})]})};n(81);var D=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"fondo",children:[Object(x.jsx)("h1",{className:"titulo",children:"Videogame website project | made by Justo Becerra"}),Object(x.jsx)(G.b,{to:"/Home",children:Object(x.jsx)("button",{className:"boton",children:"Welcome!"})})]})})},T="/videogame/";function P(e){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()(T+t);case 3:return n=e.sent,e.abrupt("return",{type:"GET_GAME_BY_ID",payload:n.data});case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}n(82);var I=function(e){var t,n,r=Object(b.b)(),c=Object(b.c)((function(e){return e.gameDetail}));if(Object(a.useEffect)((function(){Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,P(e.match.params.id);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))()}),[]),Object.keys(c).length){if(c.Genres)t=c.Genres.map((function(e){return Object(A.a)(e.name+" ")}));else if(c.genres){var s;t=null===(s=c.genres)||void 0===s?void 0:s.map((function(e){return Object(A.a)(e.name+" ")}))}var i;if(c.Platforms)n=null===(i=c.Platforms)||void 0===i?void 0:i.map((function(e){return Object(A.a)(e+" ")}));else c.platforms[0].platform&&(n=c.platforms.map((function(e){return Object(A.a)(e.platform.name+" ")})))}return Object(x.jsxs)("div",{children:[Object(x.jsx)(G.b,{to:"/Home",children:Object(x.jsx)("button",{className:"buttonhogar",children:"Home"})}),Object(x.jsx)("h2",{children:c.name}),Object(x.jsx)("img",{className:"imagen",src:c.background_image?c.background_image:N}),Object(x.jsxs)("div",{className:"infoBlock",children:[Object(x.jsxs)("h4",{children:["Rating: ",c.Rating?c.Rating:c.rating]}),Object(x.jsxs)("h4",{children:["Released in: ",c.Released?c.Released:c.released]}),Object(x.jsxs)("h4",{children:["Available platforms: ",n]}),Object(x.jsxs)("h4",{children:["Genres: ",t]}),Object(x.jsxs)("p",{children:["Description: ",c.description]})]})]})},F=n(20),B=n(2),H="/videogame";function Z(e){return M.apply(this,arguments)}function M(){return(M=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rating=parseInt(t.rating),e.next=3,m.a.post(H,t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(83);function Y(e){var t={};return e.name?/^[a-zA-Z0-9]*$/.test(e.name)||(t.name="Name is invalid"):t.name="name is required",e.Rating||(t.Rating="rating is required"),e.Released?/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(e.released)||(t.Released="release date must be a date of DD/MM/YYYY"):t.Released="release date is required",e.description||(t.description="A description is required"),t}function W(){var e=Object(a.useState)({name:"",Rating:0,Released:"",description:"",genres:[],Platforms:[]}),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({name:"",Rating:0,Released:"",description:""}),s=Object(j.a)(c,2),i=s[0],o=s[1],d=Object(b.b)(),m=Object(b.c)((function(e){return e.genres}));function p(e){r(Object(B.a)(Object(B.a)({},n),{},Object(F.a)({},e.target.name,e.target.value)))}function O(){return(O=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.name&&n.Rating&&n.Released&&n.description){e.next=5;break}o(Y(Object(B.a)(Object(B.a)({},n),{},Object(F.a)({},t.target.name,t.target.value)))),e.next=14;break;case 5:return e.next=7,Z(n);case 7:return e.t0=d,e.next=10,f();case 10:e.t1=e.sent,(0,e.t0)(e.t1),r({name:"",Rating:0,Released:"",description:"",genres:[],Platforms:[]}),alert("Game created!");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){if(e.target.checked)r(Object(B.a)(Object(B.a)({},n),{},{Platforms:[].concat(Object(A.a)(n.Platforms),[e.target.name])}));else{var t,a=null===(t=n.Platforms)||void 0===t?void 0:t.indexOf(e.target.id),c=Object(A.a)(n.Platforms);c.splice(a,1),r(Object(B.a)(Object(B.a)({},n),{},{Platforms:c}))}}return Object(a.useEffect)((function(){Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(e){return function(e){return O.apply(this,arguments)}(e)},children:[Object(x.jsx)(G.b,{to:"/Home",children:Object(x.jsx)("button",{className:"buttonhome",children:"Home"})}),Object(x.jsxs)("div",{className:"formulario",children:[Object(x.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/video-game-37/100/game-pad-video-game-consoles-game-pad-analog-stick-generic-controller-white-512.png"}),Object(x.jsx)("label",{children:"Name:"}),Object(x.jsx)("input",{type:"text",name:"name",onChange:function(e){return p(e)}}),i.name?Object(x.jsx)("small",{children:i.name}):"",Object(x.jsx)("label",{children:"Rating:"}),Object(x.jsx)("input",{type:"text",min:"0",max:"5",name:"Rating",onChange:function(e){return p(e)}}),i.Rating?Object(x.jsx)("small",{children:i.Rating}):"",Object(x.jsx)("label",{children:"Release Date:"}),Object(x.jsx)("input",{type:"text",name:"Released",onChange:function(e){return p(e)}}),i.Released?Object(x.jsx)("small",{children:i.Released}):"",Object(x.jsx)("label",{children:"Description:"}),Object(x.jsx)("input",{type:"text",name:"description",onChange:function(e){return p(e)}}),i.description?Object(x.jsx)("small",{children:i.description}):"",Object(x.jsx)("label",{children:"Platforms:"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"checkbox",name:"PC",onChange:function(e){return g(e)}}),"PC",Object(x.jsx)("input",{type:"checkbox",name:"PS4",onChange:function(e){return g(e)}}),"PS4",Object(x.jsx)("input",{type:"checkbox",name:"PS5",onChange:function(e){return g(e)}}),"PS5",Object(x.jsx)("input",{type:"checkbox",name:"Xbox One",onChange:function(e){return g(e)}}),"Xbox One",Object(x.jsx)("input",{type:"checkbox",name:"Xbox Series X/S",onChange:function(e){return g(e)}}),"Xbox Series X/S"]}),Object(x.jsx)("button",{className:"buttonsubmit",type:"submit",children:"Create Game"}),Object(x.jsx)("label",{className:"genreDropdown",children:"Genres:"}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("select",{className:"genreDropdown",onChange:function(e){return function(e){if(void 0===n.genres.find((function(t){return t===e.target.value})))r(Object(B.a)(Object(B.a)({},n),{},{genres:[].concat(Object(A.a)(n.genres),[e.target.value])}));else{var t=n.genres.filter((function(t){return t!==e.target.value}));r(Object(B.a)(Object(B.a)({},n),{},{genres:t}))}}(e)},children:[Object(x.jsx)("option",{hiddendefaultvalue:"false",children:"Choose one or more genres"}),m.map((function(e){return Object(x.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),Object(x.jsx)("ul",{className:"resultDropdown",children:Object(x.jsx)("li",{children:n.genres.map((function(e){return e+" - "}))})})]})]})]})})}function X(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(i.a,{exact:!0,path:"/",component:D}),Object(x.jsx)(i.a,{path:"/Home/:id",component:I}),Object(x.jsx)(i.a,{exact:!0,path:"/Home",component:k}),Object(x.jsx)(i.a,{path:"/create",component:W})]})}var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Q=n(25),U={games:[],gameDetail:{},gamesQuery:[],genres:[],filteredGames:[]},J=n(40),V=n(41),K=n(42);n.n(K).a.config(),m.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001";var $=Object(Q.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_VIDEOGAMES":return Object(B.a)(Object(B.a)({},e),{},{games:t.payload});case"GET_GAME_BY_ID":return Object(B.a)(Object(B.a)({},e),{},{gameDetail:t.payload});case"GET_GAME_BY_QUERY":return Object(B.a)(Object(B.a)({},e),{},{gamesQuery:t.payload});case"GET_ALL_GENRES":return Object(B.a)(Object(B.a)({},e),{},{genres:t.payload});case"GENRE_FILTER":var n=e.games,a=[];return"GENRE_FILTER"===t.payload&&(a=n),a=n.filter((function(e){var n,a,r=!1;if(null===(n=e.genres)||void 0===n||n.map((function(e){e.name===t.payload&&(r=!0)})),null===(a=e.Genres)||void 0===a||a.map((function(e){e.name===t.payload&&(r=!0)})),r)return e})),Object(B.a)(Object(B.a)({},e),{},{filteredGames:a});case"sinFiltro":return Object(B.a)(Object(B.a)({},e),{},{filteredGames:e.games});case"ASC A-Z":var r=Object(A.a)(e.games).sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0}));return Object(B.a)(Object(B.a)({},e),{},{filteredGames:r});case"DESC Z-A":var c=Object(A.a)(e.games).sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0})).reverse();return Object(B.a)(Object(B.a)({},e),{},{filteredGames:c});case"ASC RATING":var s=Object(A.a)(e.games).sort((function(e,t){return e.rating<t.Rating||e.rating<t.rating?-1:e.rating>t.Rating||e.rating>t.rating?1:0})).reverse();return Object(B.a)(Object(B.a)({},e),{},{filteredGames:s});case"DESC RATING":var i=Object(A.a)(e.games).sort((function(e,t){return e.rating<t.Rating||e.rating<t.rating?-1:e.rating>t.Rating||e.rating>t.rating?1:0}));return Object(B.a)(Object(B.a)({},e),{},{filteredGames:i});default:return e}}),Object(V.composeWithDevTools)(Object(Q.applyMiddleware)(J.a)));s.a.render(Object(x.jsx)(b.a,{store:$,children:Object(x.jsx)(G.a,{children:Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(X,{})})})}),document.getElementById("root")),q()}},[[87,1,2]]]);
//# sourceMappingURL=main.a70607ea.chunk.js.map