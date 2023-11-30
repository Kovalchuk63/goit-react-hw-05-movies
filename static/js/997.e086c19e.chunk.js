"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[997],{3555:function(n,e,t){t.d(e,{k:function(){return c}});var r,i=t(168),c=t(5867).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},2807:function(n,e,t){t.d(e,{PN:function(){return l},fy:function(){return o},kG:function(){return p},vR:function(){return u},xp:function(){return s}});var r=t(5861),i=t(7757),c=t.n(i),a=t(5294);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmQ0ODBmZTY3MDE2ODk5NjBmMWQzYjM0YWI0OGNlMCIsInN1YiI6IjY1M2NmYWM5ZTg5NGE2MDBjNTE2MGU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SI4wLOe9-g2O22c_kRD4y1B2Ne0JXL2cyjtZyF8gcYM",a.Z.defaults.params={language:"en-US"};var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9997:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,c,a,s,o,u,p,l,f,d,h,x,m,g=t(5861),v=t(9439),Z=t(7757),b=t.n(Z),j=t(7689),w=t(2791),y=t(8881),k=t(5218),P=t(861),I=t(2807),z=t(3555),_=t(168),M=t(5867),N=M.ZP.div(r||(r=(0,_.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: ",";\n  margin-bottom: ",";\n  padding: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(2)})),C=M.ZP.img(i||(i=(0,_.Z)(["\n  height: auto;\n  border-radius: ",";\n\n  @media (max-width: 768px) {\n    margin-right: 0;\n    ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(7)})),J=M.ZP.div(c||(c=(0,_.Z)(["\n  flex: 1;\n"]))),O=M.ZP.h2(a||(a=(0,_.Z)(["\n  font-size: 24px;\n  margin: 0;\n"]))),U=M.ZP.span(s||(s=(0,_.Z)(["\n  font-size: 18px;\n  margin-top: ",";\n  display: block;\n  color: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.accent})),B=M.ZP.h3(o||(o=(0,_.Z)(["\n  font-size: 20px;\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),G=M.ZP.p(u||(u=(0,_.Z)(["\n  font-size: 16px;\n"]))),W=M.ZP.h3(p||(p=(0,_.Z)(["\n  font-size: 20px;\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(7)})),Y=M.ZP.ul(l||(l=(0,_.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),L=t(184),R=function(n){var e=n.data,t=e.title,r=e.overview,i=e.vote_average,c=e.poster_path,a=e.release_date,s=e.genres,o=a?a.slice(0,4):null,u=Math.ceil(10*i);return(0,L.jsxs)(N,{children:[(0,L.jsx)(C,{src:c?"https://image.tmdb.org/t/p/w500".concat(c):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,L.jsxs)(J,{children:[(0,L.jsxs)(O,{children:[t," ",o&&"(".concat(o,")")]}),(0,L.jsxs)(U,{children:["User score: ",u,"%"]}),(0,L.jsx)(B,{children:"Overview"}),(0,L.jsx)(G,{children:r}),(0,L.jsx)(W,{children:"Genres"}),(0,L.jsx)(Y,{children:s&&s.map((function(n){return(0,L.jsx)("li",{children:n.name},n.id)}))})]})]})},S=t(1087),D=M.ZP.div(f||(f=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(2)})),E=(0,M.ZP)(S.rU)(d||(d=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  color: ",";\n  text-decoration: none;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.spacing(7)})),T=M.ZP.p(h||(h=(0,_.Z)(["\n  font-size: 16px;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.spacing(3)})),Q=M.ZP.li(x||(x=(0,_.Z)(["\n  font-size: 18px;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.spacing(2)})),A=(M.ZP.span(m||(m=(0,_.Z)(["\n  margin-right: ",";\n"])),(function(n){return n.theme.spacing(1)})),function(){var n,e,t=(0,w.useState)([]),r=(0,v.Z)(t,2),i=r[0],c=r[1],a=(0,w.useState)(!1),s=(0,v.Z)(a,2),o=s[0],u=s[1],p=(0,w.useState)(!1),l=(0,v.Z)(p,2),f=l[0],d=l[1],h=(0,j.UO)().movieId,x=(0,j.TH)(),m=(0,w.useRef)(null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,w.useEffect)((function(){function n(){return(n=(0,g.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),d(!1),n.next=5,(0,I.vR)(h);case 5:e=n.sent,k.ZP.success("Movies found successfully!"),c(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),d(!0);case 13:return n.prev=13,u(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}h&&function(){n.apply(this,arguments)}()}),[h]),(0,L.jsxs)("main",{children:[(0,L.jsxs)(E,{to:m.current,children:[" ",(0,L.jsx)(P.I_V,{}),"To back"]}),(0,L.jsx)(R,{data:i}),(0,L.jsxs)(D,{children:[(0,L.jsx)(T,{children:"Additional informacion"}),(0,L.jsxs)("ul",{children:[(0,L.jsx)(Q,{children:(0,L.jsx)(E,{to:"cast",children:"Cast"})}),(0,L.jsx)(Q,{children:(0,L.jsx)(E,{to:"reviews",children:"Reviews"})})]})]}),(0,L.jsx)(w.Suspense,{fallback:(0,L.jsx)("div",{children:"Loading..."}),children:(0,L.jsx)(j.j3,{})}),o&&(0,L.jsx)(z.k,{children:(0,L.jsx)(y.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),f&&(0,L.jsx)("span",{children:"Whoops... Error! Please, reload this page!"}),(0,L.jsx)(k.x7,{position:"top-right"})]})})}}]);
//# sourceMappingURL=997.e086c19e.chunk.js.map