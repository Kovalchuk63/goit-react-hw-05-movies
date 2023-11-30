"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{3555:function(n,e,t){t.d(e,{k:function(){return c}});var r,u=t(168),c=t(5867).ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},9779:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,u,c,a,i=t(5861),o=t(9439),s=t(7757),f=t.n(s),p=t(7689),h=t(2791),l=t(8881),d=t(5218),v=t(2807),m=t(3555),Z=t(168),x=t(5867),g=x.ZP.div(r||(r=(0,Z.Z)(["\n  ul {\n    padding-top: ",";\n  }\n\n  li {\n    margin-bottom: ",";\n    border: 1px solid ",";\n    padding: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)})),b=x.ZP.p(u||(u=(0,Z.Z)(["\n  font-weight: bold;\n  margin-bottom: ",";\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.accent})),w=x.ZP.p(c||(c=(0,Z.Z)(["\n  margin: 0;\n  font-size: 14px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textColor})),y=x.ZP.p(a||(a=(0,Z.Z)(["\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textColor})),j=t(184),k=function(){var n=(0,h.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],u=(0,h.useState)(!1),c=(0,o.Z)(u,2),a=c[0],s=c[1],Z=(0,h.useState)(!1),x=(0,o.Z)(Z,2),k=x[0],I=x[1],N=(0,p.UO)().movieId;return(0,h.useEffect)((function(){function n(){return(n=(0,i.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),I(!1),n.next=5,(0,v.PN)(N);case 5:e=n.sent,d.ZP.success("Movies found successfully!"),e.results&&e.results.length>0?r(e.results):r([]),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),I(!0);case 13:return n.prev=13,s(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}N&&function(){n.apply(this,arguments)}()}),[N]),(0,j.jsxs)(g,{children:[(0,j.jsx)("ul",{children:t.length>0?t.map((function(n){return(0,j.jsxs)("li",{children:[(0,j.jsx)(b,{children:n.author}),(0,j.jsx)(w,{children:n.content})]},n.id)})):(0,j.jsx)(y,{children:"We don't have any reviews for this movie."})}),a&&(0,j.jsx)(m.k,{children:(0,j.jsx)(l.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),k&&(0,j.jsx)("span",{children:"Whoops... Error! Please, reload this page!"}),(0,j.jsx)(d.x7,{position:"top-right"})]})}},2807:function(n,e,t){t.d(e,{PN:function(){return p},fy:function(){return o},kG:function(){return f},vR:function(){return s},xp:function(){return i}});var r=t(5861),u=t(7757),c=t.n(u),a=t(5294);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQ0ODBmZTY3MDE2ODk5NjBmMWQzYjM0YWI0OGNlMCIsInN1YiI6IjY1M2NmYWM5ZTg5NGE2MDBjNTE2MGU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SI4wLOe9-g2O22c_kRD4y1B2Ne0JXL2cyjtZyF8gcYM",a.Z.defaults.params={language:"en-US"};var i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.b99255b4.chunk.js.map