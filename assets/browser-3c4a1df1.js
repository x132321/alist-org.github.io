import{c as ve,n as de,o as le,B as K,a2 as fe,m as he,L as pe,h as T}from"./framework-95cb4087.js";import{c as be,i as D}from"./app-5755fb8e.js";function A(e,t){console.error(`[vueuc/${e}]: ${t}`)}var d=[],ge=function(){return d.some(function(e){return e.activeTargets.length>0})},me=function(){return d.some(function(e){return e.skippedTargets.length>0})},P="ResizeObserver loop completed with undelivered notifications.",ze=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:P}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=P),window.dispatchEvent(e)},b;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(b||(b={}));var l=function(e){return Object.freeze(e)},xe=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,l(this)}return e}(),Y=function(){function e(t,r,i,n){return this.x=t,this.y=r,this.width=i,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,l(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,i=t.y,n=t.top,o=t.right,s=t.bottom,v=t.left,a=t.width,c=t.height;return{x:r,y:i,top:n,right:o,bottom:s,left:v,width:a,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),M=function(e){return e instanceof SVGElement&&"getBBox"in e},j=function(e){if(M(e)){var t=e.getBBox(),r=t.width,i=t.height;return!r&&!i}var n=e,o=n.offsetWidth,s=n.offsetHeight;return!(o||s||e.getClientRects().length)},V=function(e){var t;if(e instanceof Element)return!0;var r=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},Re=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},p=typeof window<"u"?window:{},z=new WeakMap,_=/auto|scroll/,we=/^tb|vertical/,Oe=/msie|trident/i.test(p.navigator&&p.navigator.userAgent),u=function(e){return parseFloat(e||"0")},f=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new xe((r?t:e)||0,(r?e:t)||0)},L=l({devicePixelContentBoxSize:f(),borderBoxSize:f(),contentBoxSize:f(),contentRect:new Y(0,0,0,0)}),Q=function(e,t){if(t===void 0&&(t=!1),z.has(e)&&!t)return z.get(e);if(j(e))return z.set(e,L),L;var r=getComputedStyle(e),i=M(e)&&e.ownerSVGElement&&e.getBBox(),n=!Oe&&r.boxSizing==="border-box",o=we.test(r.writingMode||""),s=!i&&_.test(r.overflowY||""),v=!i&&_.test(r.overflowX||""),a=i?0:u(r.paddingTop),c=i?0:u(r.paddingRight),O=i?0:u(r.paddingBottom),h=i?0:u(r.paddingLeft),re=i?0:u(r.borderTopWidth),ne=i?0:u(r.borderRightWidth),ie=i?0:u(r.borderBottomWidth),oe=i?0:u(r.borderLeftWidth),I=h+c,k=a+O,y=oe+ne,E=re+ie,F=v?e.offsetHeight-E-e.clientHeight:0,H=s?e.offsetWidth-y-e.clientWidth:0,se=n?I+y:0,ae=n?k+E:0,g=i?i.width:u(r.width)-se-H,m=i?i.height:u(r.height)-ae-F,ce=g+I+H+y,ue=m+k+F+E,N=l({devicePixelContentBoxSize:f(Math.round(g*devicePixelRatio),Math.round(m*devicePixelRatio),o),borderBoxSize:f(ce,ue,o),contentBoxSize:f(g,m,o),contentRect:new Y(h,a,g,m)});return z.set(e,N),N},Z=function(e,t,r){var i=Q(e,r),n=i.borderBoxSize,o=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(t){case b.DEVICE_PIXEL_CONTENT_BOX:return s;case b.BORDER_BOX:return n;default:return o}},ye=function(){function e(t){var r=Q(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=l([r.borderBoxSize]),this.contentBoxSize=l([r.contentBoxSize]),this.devicePixelContentBoxSize=l([r.devicePixelContentBoxSize])}return e}(),ee=function(e){if(j(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},Ee=function(){var e=1/0,t=[];d.forEach(function(s){if(s.activeTargets.length!==0){var v=[];s.activeTargets.forEach(function(c){var O=new ye(c.target),h=ee(c.target);v.push(O),c.lastReportedSize=Z(c.target,c.observedBox),h<e&&(e=h)}),t.push(function(){s.callback.call(s.observer,v,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var r=0,i=t;r<i.length;r++){var n=i[r];n()}return e},W=function(e){d.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(n){n.isActive()&&(ee(n.target)>e?r.activeTargets.push(n):r.skippedTargets.push(n))})})},Te=function(){var e=0;for(W(e);ge();)e=Ee(),W(e);return me()&&ze(),e>0},S,te=[],Se=function(){return te.splice(0).forEach(function(e){return e()})},Be=function(e){if(!S){var t=0,r=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return Se()}).observe(r,i),S=function(){r.textContent="".concat(t?t--:t++)}}te.push(e),S()},Ce=function(e){Be(function(){requestAnimationFrame(e)})},w=0,De=function(){return!!w},Me=250,Ie={attributes:!0,characterData:!0,childList:!0,subtree:!0},X=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],$=function(e){return e===void 0&&(e=0),Date.now()+e},B=!1,ke=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=Me),!B){B=!0;var i=$(t);Ce(function(){var n=!1;try{n=Te()}finally{if(B=!1,t=i-$(),!De())return;n?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,Ie)};document.body?r():p.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),X.forEach(function(r){return p.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),X.forEach(function(r){return p.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),C=new ke,q=function(e){!w&&e>0&&C.start(),w+=e,!w&&C.stop()},Fe=function(e){return!M(e)&&!Re(e)&&getComputedStyle(e).display==="inline"},He=function(){function e(t,r){this.target=t,this.observedBox=r||b.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Z(this.target,this.observedBox,!0);return Fe(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Ne=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}(),x=new WeakMap,G=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},R=function(){function e(){}return e.connect=function(t,r){var i=new Ne(t,r);x.set(t,i)},e.observe=function(t,r,i){var n=x.get(t),o=n.observationTargets.length===0;G(n.observationTargets,r)<0&&(o&&d.push(n),n.observationTargets.push(new He(r,i&&i.box)),q(1),C.schedule())},e.unobserve=function(t,r){var i=x.get(t),n=G(i.observationTargets,r),o=i.observationTargets.length===1;n>=0&&(o&&d.splice(d.indexOf(i),1),i.observationTargets.splice(n,1),q(-1))},e.disconnect=function(t){var r=this,i=x.get(t);i.observationTargets.slice().forEach(function(n){return r.unobserve(t,n.target)}),i.activeTargets.splice(0,i.activeTargets.length)},e}(),Ae=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");R.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!V(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");R.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!V(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");R.unobserve(this,t)},e.prototype.disconnect=function(){R.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Pe{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Ae)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const r of t){const i=this.elHandlersMap.get(r.target);i!==void 0&&i(r)}}registerHandler(t,r){this.elHandlersMap.set(t,r),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const U=new Pe,We=ve({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const r=de().proxy;function i(n){const{onResize:o}=e;o!==void 0&&o(n)}le(()=>{const n=r.$el;if(n===void 0){A("resize-observer","$el does not exist.");return}if(n.nextElementSibling!==n.nextSibling&&n.nodeType===3&&n.nodeValue!==""){A("resize-observer","$el can not be observed (it may be a text node).");return}n.nextElementSibling!==null&&(U.registerHandler(n.nextElementSibling,i),t=!0)}),K(()=>{t&&U.unregisterHandler(r.$el.nextElementSibling)})},render(){return fe(this.$slots,"default")}}),J=be("n-form-item");function Xe(e,{defaultSize:t="medium",mergedSize:r,mergedDisabled:i}={}){const n=he(J,null);pe(J,null);const o=T(r?()=>r(n):()=>{const{size:a}=e;if(a)return a;if(n){const{mergedSize:c}=n;if(c.value!==void 0)return c.value}return t}),s=T(i?()=>i(n):()=>{const{disabled:a}=e;return a!==void 0?a:n?n.disabled.value:!1}),v=T(()=>{const{status:a}=e;return a||(n==null?void 0:n.mergedValidationStatus.value)});return K(()=>{n&&n.restoreValidation()}),{mergedSizeRef:o,mergedDisabledRef:s,mergedStatusRef:v,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const Ve=D&&"chrome"in window;D&&navigator.userAgent.includes("Firefox");const $e=D&&navigator.userAgent.includes("Safari")&&!Ve;export{We as V,$e as i,U as r,Xe as u};
