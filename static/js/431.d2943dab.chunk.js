"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[431],{5462:function(){},5984:function(e,t,n){n.d(t,{x0:function(){return o}});var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}},8623:function(e,t,n){n.d(t,{Ix:function(){return D},Am:function(){return W}});var o=n(4942),r=n(885),a=n(1413),i=n(4925),s=n(907);var c=n(181);function u(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,c.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(2791);function d(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var f=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(o&&(o+=" "),o+=t);return o},p=["theme","type"],m=["delay","staleId"];function v(e){return"number"===typeof e&&!isNaN(e)}function g(e){return"boolean"===typeof e}function y(e){return"string"===typeof e}function h(e){return"function"===typeof e}function T(e){return y(e)||h(e)?e:null}function E(e){return null!=e}function b(e){return(0,l.isValidElement)(e)||y(e)||h(e)||v(e)}var C={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},_={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function I(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=r?t+"--"+a:t,v=r?n+"--"+a:n,g=(0,l.useRef)(0);return(0,l.useLayoutEffect)((function(){var e=f.current,t=m.split(" "),n=function n(o){var r;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,u(t)))};!function(){var o;(o=e.classList).add.apply(o,u(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,l.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,c):d()};p||(s?t():(g.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[p]),l.createElement(l.Fragment,null,o)}}function L(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,u([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},Z=function(e){var t=e.theme,n=e.type,o=(0,i.Z)(e,p);return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var R={info:function(e){return l.createElement(Z,(0,a.Z)({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return l.createElement(Z,(0,a.Z)({},e),l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return l.createElement(Z,(0,a.Z)({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return l.createElement(Z,(0,a.Z)({},e),l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return l.createElement("div",{className:"Toastify__spinner"})}};function N(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(h(r)?a=r(i):(0,l.isValidElement)(r)?a=(0,l.cloneElement)(r,i):y(r)||v(r)?a=r:o?a=R.spinner():function(e){return e in R}(n)&&(a=R[n](i))),a}function k(e){var t=(0,l.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,l.useState)([]),a=(0,r.Z)(o,2),s=a[0],c=a[1],d=(0,l.useRef)(null),f=(0,l.useRef)(new Map).current,p=function(e){return-1!==s.indexOf(e)},C=(0,l.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:p,getToast:function(e){return f.get(e)}}).current;function _(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function I(e){c((function(t){return E(e)?t.filter((function(t){return t!==e})):[]}))}function Z(){var e=C.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function R(e,t){var o=t.delay,r=t.staleId,a=(0,i.Z)(t,m);if(b(e)&&!function(e){return!d.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||f.has(e.toastId)&&null==e.updateId}(a)){var s=a.toastId,c=a.updateId,u=a.data,p=C.props,_=function(){return I(s)},R=null==c;R&&C.count++;var w,P,x={toastId:s,updateId:c,data:u,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||p.theme,icon:null!=a.icon?a.icon:p.icon,isIn:!1,key:a.key||C.toastKey++,type:a.type,closeToast:_,closeButton:a.closeButton,rtl:p.rtl,position:a.position||p.position,transition:a.transition||p.transition,className:T(a.className||p.toastClassName),bodyClassName:T(a.bodyClassName||p.bodyClassName),style:a.style||p.toastStyle,bodyStyle:a.bodyStyle||p.bodyStyle,onClick:a.onClick||p.onClick,pauseOnHover:g(a.pauseOnHover)?a.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:g(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:g(a.draggable)?a.draggable:p.draggable,draggablePercent:a.draggablePercent||p.draggablePercent,draggableDirection:a.draggableDirection||p.draggableDirection,closeOnClick:g(a.closeOnClick)?a.closeOnClick:p.closeOnClick,progressClassName:T(a.progressClassName||p.progressClassName),progressStyle:a.progressStyle||p.progressStyle,autoClose:!a.isLoading&&(w=a.autoClose,P=p.autoClose,!1===w||v(w)&&w>0?w:P),hideProgressBar:g(a.hideProgressBar)?a.hideProgressBar:p.hideProgressBar,progress:a.progress,role:a.role||p.role,deleteToast:function(){var e=L(f.get(s),"removed");f.delete(s),O.emit(4,e);var t=C.queue.length;if(C.count=E(s)?C.count-1:C.count-C.displayedToast,C.count<0&&(C.count=0),t>0){var o=E(s)?1:C.props.limit;if(1===t||1===o)C.displayedToast++,Z();else{var r=o>t?t:o;C.displayedToast=r;for(var a=0;a<r;a++)Z()}}else n()}};x.iconOut=N(x),h(a.onOpen)&&(x.onOpen=a.onOpen),h(a.onClose)&&(x.onClose=a.onClose),x.closeButton=p.closeButton,!1===a.closeButton||b(a.closeButton)?x.closeButton=a.closeButton:!0===a.closeButton&&(x.closeButton=!b(p.closeButton)||p.closeButton);var A=e;(0,l.isValidElement)(e)&&!y(e.type)?A=(0,l.cloneElement)(e,{closeToast:_,toastProps:x,data:u}):h(e)&&(A=e({closeToast:_,toastProps:x,data:u})),p.limit&&p.limit>0&&C.count>p.limit&&R?C.queue.push({toastContent:A,toastProps:x,staleId:r}):v(o)?setTimeout((function(){k(A,x,r)}),o):k(A,x,r)}}function k(e,t,n){var o=t.toastId;n&&f.delete(n);var r={content:e,props:t};f.set(o,r),c((function(e){return[].concat(u(e),[o]).filter((function(e){return e!==n}))})),O.emit(4,L(r,null==r.props.updateId?"added":"updated"))}return(0,l.useEffect)((function(){return C.containerId=e.containerId,O.cancelEmit(3).on(0,R).on(1,(function(e){return d.current&&I(e)})).on(5,_).emit(2,C),function(){f.clear(),O.emit(3,C)}}),[]),(0,l.useEffect)((function(){C.props=e,C.isToastActive=p,C.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(f.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:p}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function x(e){var t=(0,l.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,l.useState)(!1),s=(0,r.Z)(i,2),c=s[0],u=s[1],d=(0,l.useRef)(null),f=(0,l.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,l.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,T=e.closeOnClick;function E(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",I),document.addEventListener("mouseup",L),document.addEventListener("touchmove",I),document.addEventListener("touchend",L);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=w(t.nativeEvent),f.y=P(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?_():C()}}function C(){a(!0)}function _(){a(!1)}function I(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=w(t),f.y=P(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function L(){document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",L);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,l.useEffect)((function(){p.current=e})),(0,l.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),h(e.onOpen)&&e.onOpen((0,l.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,l.isValidElement)(e.children)&&e.children.props)}}),[]),(0,l.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||_();window.addEventListener("focus",C),window.addEventListener("blur",_)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(O.onMouseEnter=_,O.onMouseLeave=C),T&&(O.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:C,pauseToast:_,isRunning:o,preventExitTransition:c,toastRef:d,eventHandlers:O}}function A(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return l.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function B(e){var t=e.delay,n=e.isRunning,r=e.closeToast,i=e.type,s=e.hide,c=e.className,u=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,v=e.isIn,g=e.theme,y=(0,a.Z)((0,a.Z)({},u),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});d&&(y.transform="scaleX("+p+")");var T=f("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+i,(0,o.Z)({},"Toastify__progress-bar--rtl",m)),E=h(c)?c({rtl:m,type:i,defaultClassName:T}):f(T,c),b=(0,o.Z)({},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){v&&r()});return l.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:E,style:y},b))}B.defaultProps={type:_.DEFAULT,hide:!1};var M=function(e){var t=x(e),n=t.isRunning,r=t.preventExitTransition,i=t.toastRef,s=t.eventHandlers,c=e.closeButton,u=e.children,d=e.autoClose,p=e.onClick,m=e.type,v=e.hideProgressBar,g=e.closeToast,y=e.transition,T=e.position,E=e.className,b=e.style,C=e.bodyClassName,_=e.bodyStyle,I=e.progressClassName,L=e.progressStyle,O=e.updateId,Z=e.role,R=e.progress,N=e.rtl,k=e.toastId,w=e.deleteToast,P=e.isIn,M=e.isLoading,S=e.iconOut,D=e.theme,F=f("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+m,(0,o.Z)({},"Toastify__toast--rtl",N)),z=h(E)?E({rtl:N,position:T,type:m,defaultClassName:F}):f(F,E),H=!!R,U={closeToast:g,type:m,theme:D},q=null;return!1===c||(q=h(c)?c(U):l.isValidElement(c)?l.cloneElement(c,U):A(U)),l.createElement(y,{isIn:P,done:w,position:T,preventExitTransition:r,nodeRef:i},l.createElement("div",(0,a.Z)((0,a.Z)({id:k,onClick:p,className:z},s),{},{style:b,ref:i}),l.createElement("div",(0,a.Z)((0,a.Z)({},P&&{role:Z}),{},{className:h(C)?C({type:m}):f("Toastify__toast-body",C),style:_}),null!=S&&l.createElement("div",{className:f("Toastify__toast-icon",(0,o.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!M))},S),l.createElement("div",null,u)),q,(d||H)&&l.createElement(B,(0,a.Z)((0,a.Z)({},O&&!H?{key:"pb-"+O}:{}),{},{rtl:N,theme:D,delay:d,isRunning:n,isIn:P,closeToast:g,hide:v,type:m,style:L,className:I,controlledProgress:H,progress:R}))))},S=I({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),D=(I({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),I({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),I({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,l.forwardRef)((function(e,t){var n=k(e),r=n.getToastToRender,i=n.containerRef,s=n.isToastActive,c=e.className,u=e.style,d=e.rtl,p=e.containerId;function m(e){var t=f("Toastify__toast-container","Toastify__toast-container--"+e,(0,o.Z)({},"Toastify__toast-container--rtl",d));return h(c)?c({position:e,rtl:d,defaultClassName:t}):f(t,T(c))}return(0,l.useEffect)((function(){t&&(t.current=i.current)}),[]),l.createElement("div",{ref:i,className:"Toastify",id:p},r((function(e,t){var n=t.length?(0,a.Z)({},u):(0,a.Z)((0,a.Z)({},u),{},{pointerEvents:"none"});return l.createElement("div",{className:m(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,r=e.props;return l.createElement(M,(0,a.Z)((0,a.Z)({},r),{},{isIn:s(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+r.key}),o)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:C.TOP_RIGHT,transition:S,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:A,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var F,z=new Map,H=[];function U(){return Math.random().toString(36).substring(2,9)}function q(e){return e&&(y(e.toastId)||v(e.toastId))?e.toastId:U()}function Q(e,t){return z.size>0?O.emit(0,e,t):H.push({content:e,options:t}),t.toastId}function V(e,t){return(0,a.Z)((0,a.Z)({},t),{},{type:t&&t.type||e,toastId:q(t)})}function G(e){return function(t,n){return Q(t,V(e,n))}}function W(e,t){return Q(e,V(_.DEFAULT,t))}W.loading=function(e,t){return Q(e,V(_.DEFAULT,(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var o,r=t.pending,i=t.error,s=t.success;r&&(o=y(r)?W.loading(r,n):W.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,r){if(null!=t){var i=(0,a.Z)((0,a.Z)((0,a.Z)({type:e},c),n),{},{data:r}),s=y(t)?{render:t}:t;return o?W.update(o,(0,a.Z)((0,a.Z)({},i),s)):W(s.render,(0,a.Z)((0,a.Z)({},i),s)),r}W.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},W.success=G(_.SUCCESS),W.info=G(_.INFO),W.error=G(_.ERROR),W.warning=G(_.WARNING),W.warn=W.warning,W.dark=function(e,t){return Q(e,V(_.DEFAULT,(0,a.Z)({theme:"dark"},t)))},W.dismiss=function(e){z.size>0?O.emit(1,e):H=H.filter((function(t){return E(e)&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},W.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=z.get(n||F);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,i=(0,a.Z)((0,a.Z)((0,a.Z)({},o),t),{},{toastId:t.toastId||e,updateId:U()});i.toastId!==e&&(i.staleId=e);var s=i.render||r;delete i.render,Q(s,i)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return O.on(4,e),function(){O.off(4,e)}},W.POSITION=C,W.TYPE=_,O.on(2,(function(e){F=e.containerId||e,z.set(F,e),H.forEach((function(e){O.emit(0,e.content,e.options)})),H=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&O.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=431.d2943dab.chunk.js.map