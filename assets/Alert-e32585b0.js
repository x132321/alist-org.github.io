import{b as h,m as t,e as m,ap as H,d as j,u as M,h as C,q as F,k as N,r as O,C as V,S as W,aq as q,ar as D,as as K,at as G,au as J,v as Q,j as i}from"./app-cacd0493.js";import{b as U,r as X}from"./browser-90c586ea.js";import{c as Y,h as p,r as Z,j as o,ab as ee}from"./framework-ffef1a40.js";const re=h("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),m("closable",[h("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),h("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),H({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),m("show-icon",[h("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),h("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[j("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),oe=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ae=Y({name:"Alert",inheritAttrs:!1,props:oe,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:u,mergedRtlRef:v}=M(n),d=C("Alert","-alert",re,J,n,e),z=F("Alert",v,e),f=p(()=>{const{common:{cubicBezierEaseInOut:l},self:r}=d.value,{fontSize:y,borderRadius:I,titleFontWeight:R,lineHeight:A,iconSize:w,iconMargin:b,iconMarginRtl:$,closeIconSize:P,closeBorderRadius:T,closeSize:_,closeMargin:B,closeMarginRtl:S,padding:k}=r,{type:s}=n,{left:L,right:E}=Q(b);return{"--n-bezier":l,"--n-color":r[i("color",s)],"--n-close-icon-size":P,"--n-close-border-radius":T,"--n-close-color-hover":r[i("closeColorHover",s)],"--n-close-color-pressed":r[i("closeColorPressed",s)],"--n-close-icon-color":r[i("closeIconColor",s)],"--n-close-icon-color-hover":r[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":r[i("closeIconColorPressed",s)],"--n-icon-color":r[i("iconColor",s)],"--n-border":r[i("border",s)],"--n-title-text-color":r[i("titleTextColor",s)],"--n-content-text-color":r[i("contentTextColor",s)],"--n-line-height":A,"--n-border-radius":I,"--n-font-size":y,"--n-title-font-weight":R,"--n-icon-size":w,"--n-icon-margin":b,"--n-icon-margin-rtl":$,"--n-close-size":_,"--n-close-margin":B,"--n-close-margin-rtl":S,"--n-padding":k,"--n-icon-margin-left":L,"--n-icon-margin-right":E}}),c=u?N("alert",p(()=>n.type[0]),f,n):void 0,g=Z(!0),x=()=>{const{onAfterLeave:l,onAfterHide:r}=n;l&&l(),r&&r()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:a,visible:g,handleCloseClick:()=>{var l;Promise.resolve((l=n.onClose)===null||l===void 0?void 0:l.call(n)).then(r=>{r!==!1&&(g.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:d,cssVars:u?void 0:f,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),o(V,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,u={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?o("div",Object.assign({},ee(this.$attrs,u)),this.closable&&o(O,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&o("div",{class:`${e}-alert__border`}),this.showIcon&&o("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},U(a.icon,()=>[o(W,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return o(G,null);case"info":return o(K,null);case"warning":return o(D,null);case"error":return o(q,null);default:return null}}})])),o("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},X(a.header,v=>{const d=v||this.title;return d?o("div",{class:`${e}-alert-body__title`},d):null}),a.default&&o("div",{class:`${e}-alert-body__content`},a))):null}})}});export{ae as N};