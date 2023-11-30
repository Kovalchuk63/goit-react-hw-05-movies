"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,i,s=t(5861),u=t(9439),o=t(7757),p=t.n(o),f=t(7689),l=t(2791),h=t(8881),d=t(5218),m=t(2807),v=t(3555),g=t(168),x=t(5867),Z=x.ZP.div(r||(r=(0,g.Z)(["\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    gap: ",";\n    justify-content: space-evenly;\n    padding-top: ",";\n  }\n\n  li {\n    flex-basis: calc(25% - 20px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(7)})),b=x.ZP.img(a||(a=(0,g.Z)(["\n  height: 225px;\n  object-fit: cover;\n  border-radius: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)})),w=x.ZP.p(c||(c=(0,g.Z)(["\n  margin: 0;\n  font-weight: 500;\n  font-size: 16px;\n"]))),y=x.ZP.p(i||(i=(0,g.Z)(["\n  color: #777;\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(1)})),j=t(184),k=function(){var n=(0,l.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(!1),c=(0,u.Z)(a,2),i=c[0],o=c[1],g=(0,l.useState)(!1),x=(0,u.Z)(g,2),k=x[0],I=x[1],_=(0,f.UO)().movieId;return(0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),I(!1),n.next=5,(0,m.kG)(_);case 5:e=n.sent,d.ZP.success("Movies found successfully!"),t=e.cast.slice(0,16),r(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),I(!0);case 14:return n.prev=14,o(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})))).apply(this,arguments)}_&&function(){n.apply(this,arguments)}()}),[_]),(0,j.jsxs)(Z,{children:[(0,j.jsx)("ul",{children:t.map((function(n){return(0,j.jsxs)("li",{children:[(0,j.jsx)(b,{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:n.name,width:150}),(0,j.jsx)(w,{children:n.name}),(0,j.jsxs)(y,{children:["Character: ",n.character]})]},n.cast_id)}))}),i&&(0,j.jsx)(v.k,{children:(0,j.jsx)(h.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),k&&(0,j.jsx)("span",{children:"Whoops... Error! Please, reload this page!"}),(0,j.jsx)(d.x7,{position:"top-right"})]})}},3555:function(n,e,t){t.d(e,{k:function(){return c}});var r,a=t(168),c=t(5867).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},2807:function(n,e,t){t.d(e,{PN:function(){return f},fy:function(){return u},kG:function(){return p},vR:function(){return o},xp:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),i=t(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQ0ODBmZTY3MDE2ODk5NjBmMWQzYjM0YWI0OGNlMCIsInN1YiI6IjY1M2NmYWM5ZTg5NGE2MDBjNTE2MGU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SI4wLOe9-g2O22c_kRD4y1B2Ne0JXL2cyjtZyF8gcYM",i.Z.defaults.params={language:"en-US"};var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.077471ac.chunk.js.map