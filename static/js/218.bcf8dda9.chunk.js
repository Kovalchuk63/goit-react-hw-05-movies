"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[218],{5218:function(t,n,e){e.d(n,{x7:function(){return Et},ZP:function(){return kt}});var r=e(168),o=e(9439),a=e(3433),i=e(1413),s=e(2791),c=e(4942),u={data:""},d=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||u},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,m=function t(n,e){var r="",o="",a="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},v={},g=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},h=function(t,n,e,r,o){var a=g(t),i=v[a]||(v[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!v[i]){var s=a!==t?t:function(t){for(var n,e,r=[{}];n=l.exec(t.replace(f,""));)n[4]?r.shift():n[3]?(e=n[3].replace(p," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(p," ").trim();return r[0]}(t);v[i]=m(o?(0,c.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var u=e&&v.g?v.g:null;return e&&(v.g=v[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(v[i],n,r,u),i},y=function(t,n,e){return t.reduce((function(t,r,o){var a=n[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":m(i,""):!1===i?"":i}return t+r+(null==a?"":a)}),"")};function b(t){var n=this||{},e=t.call?t(n.p):t;return h(e.unshift?e.raw?y(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,d(n.target),n.g,n.o,n.k)}b.bind({g:1});var Z,x,w,E,k,C,O,j,N,_,z,A,D,P,I,M,T,F,H,L=b.bind({k:1});function S(t,n){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:x&&x()},s),e.o=/ *go\d+/.test(c),s.className=b.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),w&&u[0]&&w(s),Z(u,s)}return n?n(o):o}}var U=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},q=function(){var t=0;return function(){return(++t).toString()}}(),B=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),R=new Map,Y=function(t){if(!R.has(t)){var n=setTimeout((function(){R.delete(t),K({type:4,toastId:t})}),1e3);R.set(t,n)}},$=function t(n,e){switch(e.type){case 0:return(0,i.Z)((0,i.Z)({},n),{},{toasts:[e.toast].concat((0,a.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=R.get(t);n&&clearTimeout(n)}(e.toast.id),(0,i.Z)((0,i.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?(0,i.Z)((0,i.Z)({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var o=e.toastId;return o?Y(o):n.toasts.forEach((function(t){Y(t.id)})),(0,i.Z)((0,i.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?(0,i.Z)((0,i.Z)({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?(0,i.Z)((0,i.Z)({},n),{},{toasts:[]}):(0,i.Z)((0,i.Z)({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return(0,i.Z)((0,i.Z)({},n),{},{pausedAt:e.time});case 6:var s=e.time-(n.pausedAt||0);return(0,i.Z)((0,i.Z)({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return(0,i.Z)((0,i.Z)({},t),{},{pauseDuration:t.pauseDuration+s})}))})}},G=[],J={toasts:[],pausedAt:void 0},K=function(t){J=$(J,t),G.forEach((function(t){t(J)}))},Q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},V=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,i.Z)((0,i.Z)({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||q()})}(n,t,e);return K({type:2,toast:r}),r.id}},W=function(t,n){return V("blank")(t,n)};W.error=V("error"),W.success=V("success"),W.loading=V("loading"),W.custom=V("custom"),W.dismiss=function(t){K({type:3,toastId:t})},W.remove=function(t){return K({type:4,toastId:t})},W.promise=function(t,n,e){var r=W.loading(n.loading,(0,i.Z)((0,i.Z)({},e),null==e?void 0:e.loading));return t.then((function(t){return W.success(U(n.success,t),(0,i.Z)((0,i.Z)({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){W.error(U(n.error,t),(0,i.Z)((0,i.Z)({id:r},e),null==e?void 0:e.error))})),t};var X=function(t,n){K({type:1,toast:{id:t,height:n}})},tt=function(){K({type:5,time:Date.now()})},nt=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,s.useState)(J),e=(0,o.Z)(n,2),r=e[0],a=e[1];(0,s.useEffect)((function(){return G.push(a),function(){var t=G.indexOf(a);t>-1&&G.splice(t,1)}}),[r]);var c=r.toasts.map((function(n){var e,r;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||Q[n.type],style:(0,i.Z)((0,i.Z)((0,i.Z)({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return(0,i.Z)((0,i.Z)({},r),{},{toasts:c})}(t),e=n.toasts,r=n.pausedAt;(0,s.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return W.dismiss(n.id)}),e);n.visible&&W.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var c=(0,s.useCallback)((function(){r&&K({type:6,time:Date.now()})}),[r]),u=(0,s.useCallback)((function(t,n){var r,o=n||{},i=o.reverseOrder,s=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,d=o.defaultPosition,l=e.filter((function(n){return(n.position||d)===(t.position||d)&&n.height})),f=l.findIndex((function(n){return n.id===t.id})),p=l.filter((function(t,n){return n<f&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,a.Z)(s?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:X,startPause:tt,endPause:c,calculateOffset:u}}},et=L(E||(E=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),rt=L(k||(k=(0,r.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ot=L(C||(C=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),at=S("div")(O||(O=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),et,rt,(function(t){return t.secondary||"#fff"}),ot),it=L(j||(j=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),st=S("div")(N||(N=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),it),ct=L(_||(_=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ut=L(z||(z=(0,r.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),dt=S("div")(A||(A=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),ct,ut,(function(t){return t.secondary||"#fff"})),lt=S("div")(D||(D=(0,r.Z)(["\n  position: absolute;\n"]))),ft=S("div")(P||(P=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),pt=L(I||(I=(0,r.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),mt=S("div")(M||(M=(0,r.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),pt),vt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?s.createElement(mt,null,e):e:"blank"===r?null:s.createElement(ft,null,s.createElement(st,(0,i.Z)({},o)),"loading"!==r&&s.createElement(lt,null,"error"===r?s.createElement(at,(0,i.Z)({},o)):s.createElement(dt,(0,i.Z)({},o))))},gt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},ht=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},yt=S("div")(T||(T=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),bt=S("div")(F||(F=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Zt=s.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,c=n.height?function(t,n){var e=t.includes("top")?1:-1,r=B()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[gt(e),ht(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:n?"".concat(L(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(L(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},u=s.createElement(vt,{toast:n}),d=s.createElement(bt,(0,i.Z)({},n.ariaProps),U(n.message,n));return s.createElement(yt,{className:n.className,style:(0,i.Z)((0,i.Z)((0,i.Z)({},c),r),n.style)},"function"==typeof a?a({icon:u,message:d}):s.createElement(s.Fragment,null,u,d))}));!function(t,n,e,r){m.p=n,Z=t,x=e,w=r}(s.createElement);var xt=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,a=t.children,i=s.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return s.createElement("div",{ref:i,className:e,style:r},a)},wt=b(H||(H=(0,r.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Et=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,c=t.children,u=t.containerStyle,d=t.containerClassName,l=nt(o),f=l.toasts,p=l.handlers;return s.createElement("div",{style:(0,i.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:d,onMouseEnter:p.startPause,onMouseLeave:p.endPause},f.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return(0,i.Z)((0,i.Z)({left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:r}));return s.createElement(xt,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?wt:"",style:o},"custom"===t.type?U(t.message,t):c?c(t):s.createElement(Zt,{toast:t,position:e}))})))},kt=W}}]);
//# sourceMappingURL=218.bcf8dda9.chunk.js.map