!function(){"use strict";var t,n,e,i,r=window,o=document,a=Object,s=null,c=!0,d=!1,l=" ",u="Element",f="create"+u,m="DOMTokenList",p="__defineGetter__",h="defineProperty",v="class",y="List",g=v+y,w="rel",L=w+y,b="div",x="length",M="contains",T="apply",C="HTML",A=("item "+M+" add remove toggle toString toLocaleString").split(l),E=A[2],F=A[3],S=A[4],N="prototype",j=h in a||p in a[N]||s,D=function(t,n,e,i){a[h]?a[h](t,n,{configurable:d===j?c:!!i,get:e}):t[p](n,e)},P=function(n,e){var i=this,r=[],o={},s=0,u=0,f=function(){if(s>=u)for(;s>u;++u)(function(t){D(i,t,function(){return m(),r[t]},d)})(u)},m=function(){var t,i,a=arguments,d=/\s+/;if(a[x])for(i=0;i<a[x];++i)if(d.test(a[i]))throw t=new SyntaxError('String "'+a[i]+'" '+M+" an invalid character"),t.code=5,t.name="InvalidCharacterError",t;for(r=(""+n[e]).replace(/^\s+|\s+$/g,"").split(d),""===r[0]&&(r=[]),o={},i=0;i<r[x];++i)o[r[i]]=c;s=r[x],f()};return m(),D(i,x,function(){return m(),s}),i[A[6]]=i[A[5]]=function(){return m(),r.join(l)},i.item=function(t){return m(),r[t]},i[M]=function(t){return m(),!!o[t]},i[E]=function(){m[T](i,t=arguments);for(var t,a,d=0,u=t[x];u>d;++d)a=t[d],o[a]||(r.push(a),o[a]=c);s!==r[x]&&(s=r[x]>>>0,n[e]=r.join(l),f())},i[F]=function(){m[T](i,t=arguments);for(var t,a={},d=0,u=[];d<t[x];++d)a[t[d]]=c,delete o[t[d]];for(d=0;d<r[x];++d)a[r[d]]||u.push(r[d]);r=u,s=u[x]>>>0,n[e]=r.join(l),f()},i[S]=function(n,e){return m[T](i,[n]),t!==e?e?(i[E](n),c):(i[F](n),d):o[n]?(i[F](n),d):(i[E](n),c)},function(t,n){if(n)for(var e=0;7>e;++e)n(t,A[e],{enumerable:d})}(i,a[h]),i},z=function(t,n,e){D(t[N],n,function(){var t,i=this,r=p+h+n;if(i[r])return t;if(i[r]=c,d===j){for(var a,s=z.mirror=z.mirror||o[f](b),l=s.childNodes,u=l[x],m=0;u>m;++m)if(l[m]._R===i){a=l[m];break}a||(a=s.appendChild(o[f](b))),t=P.call(a,i,e)}else t=new P(i,e);return D(i,n,function(){return t}),delete i[r],t},c)};if(r[m])n=o[f](b)[g],N=r[m][N],n[E][T](n,A),2>n[x]&&(e=N[E],i=N[F],N[E]=function(){for(var t=0,n=arguments;t<n[x];++t)e.call(this,n[t])},N[F]=function(){for(var t=0,n=arguments;t<n[x];++t)i.call(this,n[t])}),n[S](y,d)&&(N[S]=function(n,e){var i=this;return i[(e=t===e?!i[M](n):e)?E:F](n),!!e});else{if(j)try{D({},"support")}catch(O){j=d}P.polyfill=c,r[m]=P,z(r[u],g,v+"Name"),z(r[C+"Link"+u],L,w),z(r[C+"Anchor"+u],L,w),z(r[C+"Area"+u],L,w)}}(),Date.now=Date.now||function(){return+new Date},String.prototype.trim=String.prototype.trim||function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},Object.defineProperties=Object.defineProperties||function(t,n){for(var e in n)Object.defineProperty(t,e,n[e])},Array.isArray=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},Number.isNaN=Number.isNaN||function(t){return t!==t},String.prototype.repeat=String.prototype.repeat||function(t){return Array(t+1).join(this)},Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){var e=t[n];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var n=Date.now(),e=Math.max(i+16,n);return setTimeout(function(){t(i=e)},e-n)},window.cancelAnimationFrame=clearTimeout}}(),function(t,n,e){"use strict";function i(t,n,i,o){i=i||"width";var s,c,d,f=(n.match(l)||[])[2],m="px"===f?1:u[f+"toPx"],p=/r?em/i;if(m||p.test(f)&&!o)t=m?t:"rem"===f?a:"fontSize"===i?t.parentNode||t:t,m=m||parseFloat(r(t,"fontSize")),d=parseFloat(n)*m;else{s=t.style,c=s[i];try{s[i]=n}catch(h){return 0}d=s[i]?parseFloat(r(t,i)):0,s[i]=c!==e?c:null}return d}function r(t,n){var e,o,a,s=/^top|bottom/,u=["paddingTop","paddingBottom","borderTop","borderBottom"],f,m,p=4;if(e=c?c(t)[n]:(o=t.style["pixel"+n.charAt(0).toUpperCase()+n.slice(1)])?o+"px":"fontSize"===n?i(t,"1em","left",1)+"px":t.currentStyle[n],a=(e.match(l)||[])[2],"%"===a&&d)if(s.test(n)){for(f=(m=t.parentNode||t).offsetHeight;p--;)f-=parseFloat(r(m,u[p]));e=parseFloat(e)/100*f+"px"}else e=i(t,e);else("auto"===e||a&&"px"!==a)&&c?e=0:a&&"px"!==a&&!c&&(e=i(t,e)+"px");return e}var o=n.createElement("test"),a=n.documentElement,s=n.defaultView,c=s&&s.getComputedStyle,d,l=/^(-?[\d+\.\-]+)([a-z]+|%)$/i,u={},f=[1/25.4,1/2.54,1/72,1/6],m=["mm","cm","pt","pc","in","mozmm"],p=6;for(a.appendChild(o),c&&(o.style.marginTop="1%",d="1%"===c(o).marginTop);p--;)u[m[p]+"toPx"]=f[p]?f[p]*u.inToPx:i(o,"1"+m[p]);a.removeChild(o),o=e,t.Length={toPx:i}}(this,this.document),Object.keys||(Object.keys=function(t){if(t!==Object(t))throw new TypeError("Object.keys called on a non-object");var n=[],e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n});var gn={};gn.optimizedResize=function(){function t(){r||(r=!0,window.requestAnimationFrame?window.requestAnimationFrame(n):setTimeout(n,66))}function n(){i.forEach(function(t){t()}),r=!1}function e(t){t&&i.push(t)}var i=[],r=!1;return{add:function(n){i.length||window.addEventListener("resize",t),e(n)}}}(),gn.extend=function(){for(var t,n,e,i=arguments[0]||{},r=1,o=arguments.length;o>r;r++)if(null!==(t=arguments[r]))for(n in t)e=t[n],i!==e&&void 0!==e&&(i[n]=e);return i},gn.isInViewport=function(t){var n=t.getBoundingClientRect();return n.bottom>=0&&n.right>=0&&n.top<=(window.innerHeight||document.documentElement.clientHeight)&&n.left<=(window.innerWidth||document.documentElement.clientWidth)},gn.getSupportedProp=function(t){for(var n=document.documentElement,e=0;e<t.length;e++)if(t[e]in n.style)return t[e]},gn.indexOf=function(t,n){for(var e=0;e<t.length;e++)if(t[e]===n)return e;return-1},gn.isNodeList=function(t){return"undefined"!=typeof t.item},gn.append=function(t,n){var e=gn.isNodeList(t)?t:[t],i;if("undefined"!=typeof n.nodeType&&1===n.nodeType)for(i=e.length;i--;)e[i].appendChild(n);else if("string"==typeof n)for(i=e.length;i--;)e[i].insertAdjacentHTML("beforeend",n);else if(gn.isNodeList(n)){var r=document.createDocumentFragment();for(i=n.length;i--;)r.insertBefore(n[i],r.firstChild);for(var o=e.length;o--;)e[o].appendChild(r)}},gn.wrap=function(t,n){for(var e=gn.isNodeList(t)?t:[t],i=e.length;i--;){var r=i>0?n.cloneNode(!0):n,o=e[i],a=o.parentNode,s=o.nextSibling;r.appendChild(o),s?a.insertBefore(r,s):a.appendChild(r)}};/**
  * tiny-slider
  * 
  * @version 0.3.1
  * @author William Lin
  * @license The MIT License (MIT)
  * @github https://github.com/ganlanyuan/tiny-slider/
  * 
  */
var tinySlider=function(){"use strict";function t(t){function s(){T.style.width=_*E+"px",I&&(T.style.marginLeft=-(X*_)+"px");for(var t=E;t--;)C[t].style.width=_+"px"}function c(t){o&&(T.style[o]=O*t/1e3+"s",Z=!0)}function d(){navigator.msMaxTouchPoints&&(T.parentNode.style.msScrollSnapPointsX="snapInterval(0%, "+_+")")}function l(){for(var t=I?Q+X:Q,n=E;n--;)t>n||n>=t+V?C[n].classList.contains("tiny-visible")&&C[n].classList.remove("tiny-current","tiny-visible"):n===t?C[n].classList.add("tiny-current","tiny-visible"):C[n].classList.contains("tiny-visible")||(C[n].classList.remove("tiny-current"),C[n].classList.add("tiny-visible"))}function u(){I||(V>=A?(0!==Q&&(Q=0,p()),K.classList.contains("disabled")||K.classList.add("disabled"),Y.classList.contains("disabled")||Y.classList.add("disabled")):(0===Q?K.classList.add("disabled"):K.classList.remove("disabled"),Q===A-V?Y.classList.add("disabled"):Y.classList.remove("disabled")))}function f(){if(D&&!P)for(var t=U;t--;){var n=G[t];J>t?n.classList.contains("tiny-hide")&&n.classList.remove("tiny-hide"):n.classList.contains("tiny-hide")||n.classList.add("tiny-hide")}}function m(){if(D){var t;if(-1===tt){var n=0>Q?Q+A:Q>=A?Q-A:Q;if(t=P?n:Math.floor(n/V),!I&&!P){var e=/^-?[0-9]+$/,i=e.test(A/V);i||Q!==A-V||(t+=1)}}else t=tt,tt=-1;for(var r=J;r--;){var o=G[r];r===t?o.classList.contains("tiny-active")||o.classList.add("tiny-active"):o.classList.contains("tiny-active")&&o.classList.remove("tiny-active")}}}function p(){var t=T.parentNode.offsetWidth;it=-_*Q,F&&!I&&(it=Math.max(it,-Math.abs(A*_-t))),a?T.style[a]="translate3d("+it+"px, 0, 0)":T.style.left=it+"px"}function h(){if(I){var t=B?V-X>Q:-X>=Q,n=B?Q>A+X-2*V-1:Q>=A+X-V;F&&X&&!B&&(n=Q>=A+X-V-1),t&&(Q+=A),n&&(Q-=A),o&&(T.style[o]="0s"),p()}}function v(){h(),l(),u(),m(),L(),Z=!1}function y(t){if(!Z){t=B?t*V:t;var n=Math.abs(t);Q=I?Q+t:Math.max(0,Math.min(Q+t,A-V)),c(n),p(),setTimeout(function(){v()},O*n)}}function g(){return function(){var t=gn.indexOf(G,this);w(t)}}function w(t){if(!Z){tt=t;var n,e;n=P?t:t*V,n=I?n:Math.min(n,A-V),e=Math.abs(n-Q),Q=n,c(e),p(),setTimeout(function(){v()},O*e)}}function L(){if(gn.isInViewport(T)){var t=T.querySelectorAll(".tiny-visible .tiny-lazy");if(0!==t.length)for(var n=0,e=t.length;e>n;n++)t[n].classList.contains("loaded")||(t[n].src=t[n].getAttribute("data-src"),t[n].classList.add("loaded"))}}function b(){return function(t){var n=t.changedTouches[0];nt=parseInt(n.clientX),et=parseInt(n.clientY)}}function x(){return function(t){var i=t.changedTouches[0];rt=parseInt(i.clientX)-nt,ot=parseInt(i.clientY)-et;var r=n(Math.atan2(ot,rt)),s=e(r,15);if("horizontal"===s&&Z===!1&&(at=!0),at){o&&(T.style[o]="0s");var c=I?-(A+X-V)*_:-(A-V)*_,d=I?X*_:0;!I&&F&&(c=-(A*_-T.parentNode.offsetWidth)),it=-Q*_+rt,it=Math.max(c,Math.min(it,d)),a?T.style[a]="translate3d("+it+"px, 0, 0)":T.style.left=it+"px",t.preventDefault()}}}function M(){return function(t){var n=t.changedTouches[0];if(rt=parseInt(n.clientX)-nt,at&&0!==rt){t.preventDefault(),at=!1,it=-Q*_+rt;var e,i=I?-X:0,r=I?A+X-V:A-V;e=-(it/_),e=0>rt?Math.ceil(e):Math.floor(e),e=Math.max(i,Math.min(e,r)),Q=e,c(1),p(),setTimeout(function(){v()},O)}}}t=gn.extend({container:".slider",items:1,fixedWidth:!1,maxContainerWidth:!1,slideByPage:!1,nav:!0,navText:["prev","next"],navContainer:!1,dots:!0,dotsContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",loop:!0,responsive:!1,lazyload:!1,touch:!0},t||{});var T=t.container,C=T.children,A=C.length,E=C.length,F=t.fixedWidth,S=t.nav,N=t.navText,j=t.navContainer?t.navContainer:!1,D=t.dots,P=t.dotsContainer?t.dotsContainer:!1,z=t.arrowKeys,O=o?t.speed:0,k=t.autoplay,W=t.autoplayTimeout,q="forward"===t.autoplayDirection?1:-1,I=F&&!t.maxContainerWidth?!1:t.loop,B=t.slideByPage,R=t.lazyload,H=t.touch,_,X,V,K,Y,G,U,J,Q=0,Z=!1,tt=-1;if(H)var nt=0,et=0,it=0,rt=0,ot=0,at=!1,st=!1;var ct=F?!1:t.responsive,dt=i(ct),lt=r(ct,dt),ut=function(){return F?function(){return Math.min(A,Math.floor(T.parentNode.offsetWidth/F))}:function(){var n,e=document.documentElement.clientWidth;if(void 0!==dt.length&&void 0!==lt&&dt.length===lt.length)if(e<dt[0])n=t.items;else if(e>=dt[dt.length-1])n=lt[lt.length-1];else for(var i=0;i<dt.length-1;i++)e>=dt[i]&&e<=dt[i+1]&&(n=lt[i]);else n=t.items;return Math.min(A,n)}}(),ft=function(){var n;return n=F?t.maxContainerWidth?Math.ceil(t.maxContainerWidth/F):!1:void 0!==lt.length?Math.max.apply(Math,lt):t.items,n?Math.min(A,n):n},mt=function(){return F?function(){return F}:function(){return T.parentNode.offsetWidth/V}}(),pt=function(){return P?function(){return A}:function(){return Math.ceil(A/V)}}();return V=ut(),X=ft(),_=mt(),J=pt(),{init:function(){T.classList.add("tiny-content");var t=document.createElement("div");if(t.className="tiny-slider",gn.wrap(T,t),navigator.msMaxTouchPoints&&(t.classList.add("ms-touch"),t.addEventListener("scroll",function(){o&&(T.style[o]="0s"),T.style.transform="translate3d(-"+-T.scrollLeft()+"px,0,0)"})),D){if(P)G=P.children,G[0].classList.add("tiny-active");else{for(var n="",e=A;e--;)n+='<div class="tiny-dot"></div>';n='<div class="tiny-dots">'+n+"</div>",gn.append(t,n),G=t.querySelectorAll(".tiny-dot")}U=G.length}if(S&&(j?(K=j.firstElementChild,Y=j.lastElementChild):(gn.append(t,'<div class="tiny-nav"><div class="tiny-prev">'+N[0]+'</div><div class="tiny-next">'+N[1]+"</div></div>"),K=t.querySelector(".tiny-prev"),Y=t.querySelector(".tiny-next"))),I){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),a=X;a--;){var c=C[a].cloneNode(!0),h=C[A-1-a].cloneNode(!0);i.insertBefore(c,i.firstChild),r.appendChild(h)}T.appendChild(i),T.insertBefore(r,T.firstChild),E=T.children.length,C=T.children}if(s(),d(),p(),l(),S&&(u(),Y.addEventListener("click",function(){y(1)}),K.addEventListener("click",function(){y(-1)})),f(),m(),D)for(var v=0;U>v;v++)G[v].addEventListener("click",g());R&&L(),z&&document.addEventListener("keydown",function(t){t=t||window.event,37===t.keyCode?y(-1):39===t.keyCode&&y(1)}),k&&setInterval(function(){y(q)},W),H&&!st&&T.addEventListener&&(T.addEventListener("touchstart",b(),!1),T.addEventListener("touchmove",x(),!1),T.addEventListener("touchend",M(),!1),T.addEventListener("touchcancel",M(),!1),st=!0),gn.optimizedResize.add(function(){V=ut(),_=mt(),J=pt(),s(),d(),p(),f(),u(),m(),R&&L()});var w=!1;window.addEventListener("scroll",function(){w||window.requestAnimationFrame(function(){R&&L(),w=!1}),w=!0})}}}function n(t){return t*(180/Math.PI)}function e(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n?"vertical":!1}function i(t){return t&&"object"==typeof t?Object.keys(t):!1}function r(t,n){if(t&&"object"==typeof t){for(var e=[],i=0;i<n.length;i++){var r=n[i];e.push(t[r])}return e}return!1}var o=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),a=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]);return t}();