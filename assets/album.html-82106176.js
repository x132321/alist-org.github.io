import{N as te}from"./Select-1bf44991.js";import{c as m,h as V,j as k,b as le,r as P,N as h,O as _,P as n,a1 as a,u as r,W as g,ae as $,am as j,a9 as F,ad as ne,X as ae,an as de,ao as se,Q as x,_ as G,G as ie}from"./framework-ffef1a40.js";import{d as o,b as R,e as B,A as ce,n as ue,o as be,u as pe,h as H,q as he,k as me,ay as ve,j as I,N as M}from"./app-cacd0493.js";import{N as S}from"./Input-443ee73c.js";import{N as ge}from"./Button-0d2c035d.js";import{N as E}from"./Alert-e32585b0.js";import"./Popover-1f69c6ca.js";import"./Scrollbar-ddf979ce.js";import"./browser-90c586ea.js";import"./utils-76c4cc76.js";import"./create-657dc0dd.js";const fe=o([R("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),B("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),B("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),B("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),B("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),ce("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),ue(R("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),be(R("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),_e=Object.assign(Object.assign({},H.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),ke=m({name:"Table",props:_e,setup(d){const{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:c}=pe(d),v=H("Table","-table",fe,ve,d,s),f=he("Table",c,s),u=V(()=>{const{size:p}=d,{self:{borderColor:A,tdColor:i,tdColorModal:e,tdColorPopover:C,thColor:z,thColorModal:T,thColorPopover:N,thTextColor:w,tdTextColor:t,borderRadius:U,thFontWeight:W,lineHeight:q,borderColorModal:K,borderColorPopover:Q,tdColorStriped:X,tdColorStripedModal:J,tdColorStripedPopover:Y,[I("fontSize",p)]:Z,[I("tdPadding",p)]:ee,[I("thPadding",p)]:oe},common:{cubicBezierEaseInOut:re}}=v.value;return{"--n-bezier":re,"--n-td-color":i,"--n-td-color-modal":e,"--n-td-color-popover":C,"--n-td-text-color":t,"--n-border-color":A,"--n-border-color-modal":K,"--n-border-color-popover":Q,"--n-border-radius":U,"--n-font-size":Z,"--n-th-color":z,"--n-th-color-modal":T,"--n-th-color-popover":N,"--n-th-font-weight":W,"--n-th-text-color":w,"--n-line-height":q,"--n-td-padding":ee,"--n-th-padding":oe,"--n-td-color-striped":X,"--n-td-color-striped-modal":J,"--n-td-color-striped-popover":Y}}),b=l?me("table",V(()=>d.size[0]),u,d):void 0;return{rtlEnabled:f,mergedClsPrefix:s,cssVars:l?void 0:u,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var d;const{mergedClsPrefix:s}=this;return(d=this.onRender)===null||d===void 0||d.call(this),k("table",{class:[`${s}-table`,this.themeClass,{[`${s}-table--rtl`]:this.rtlEnabled,[`${s}-table--bottom-bordered`]:this.bottomBordered,[`${s}-table--bordered`]:this.bordered,[`${s}-table--single-line`]:this.singleLine,[`${s}-table--single-column`]:this.singleColumn,[`${s}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),L=m({name:"Th",render(){return k("th",null,this.$slots)}}),O=m({name:"Tr",render(){return k("tr",null,this.$slots)}}),D=m({name:"Td",render(){return k("td",null,this.$slots)}}),xe=m({name:"Thead",render(){return k("thead",null,this.$slots)}}),ye=m({name:"Tbody",render(){return k("tbody",null,this.$slots)}}),y=d=>(de("data-v-14b6ef64"),d=d(),se(),d),Ce=y(()=>x("h4",null,"client_id",-1)),ze=y(()=>x("h4",null,"client_secret",-1)),Te=y(()=>x("h4",null,"refresh_token",-1)),Ne=y(()=>x("h4",null,"access_token",-1)),we=y(()=>x("h4",null,"Albums",-1)),Pe=m({__name:"Album",setup(d){const s=new URL(window.location.href),l=le({client_id:"",client_secret:"",access_token:s.searchParams.get("access_token")||"",refresh_token:""}),c=P("access_token"),v=P(),f=P();let u=P([]);const b=async()=>{const i=new URLSearchParams;i.append("client_id",l.client_id),i.append("client_secret",l.client_secret),i.append("grant_type","refresh_token"),i.append("refresh_token",l.refresh_token),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i}).then(e=>e.json()).then(e=>{console.log(e),v.value=e,(typeof e.error>"u"||!e.error)&&(l.access_token=e.access_token,typeof e.access_token<"u"&&e.access_token&&p(null))})},p=async i=>{i==null&&(i=""),fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${i}&pageSize=50`,{method:"GET",headers:{Authorization:`Bearer ${l.access_token}`}}).then(e=>e.json()).then(e=>{console.log(e),f.value=e,(typeof e.error>"u"||!e.error)&&(u.value=u.value.concat(e.albums),console.log(u),typeof e.nextPageToken<"u"&&e.nextPageToken&&p(e.nextPageToken))})};l.access_token&&p(null);function A(){u.value=[],c.value=="refresh_token"?b():p(null)}return(i,e)=>(h(),_(r(M),{vertical:"",size:"large"},{default:n(()=>{var C,z,T,N,w;return[a(r(te),{value:c.value,"onUpdate:value":e[0]||(e[0]=t=>c.value=t),size:"large",options:[{label:"Access token",value:"access_token"},{label:"Client & Refresh token",value:"refresh_token"}]},null,8,["value"]),c.value=="refresh_token"?(h(),_(r(M),{key:0,vertical:"",size:"large"},{default:n(()=>[Ce,a(r(S),{size:"large",value:l.client_id,"onUpdate:value":e[1]||(e[1]=t=>l.client_id=t)},null,8,["value"]),ze,a(r(S),{size:"large",value:l.client_secret,"onUpdate:value":e[2]||(e[2]=t=>l.client_secret=t)},null,8,["value"]),Te,a(r(S),{size:"large",value:l.refresh_token,"onUpdate:value":e[3]||(e[3]=t=>l.refresh_token=t)},null,8,["value"])]),_:1})):(h(),_(r(M),{key:1,vertical:"",size:"large"},{default:n(()=>[Ne,a(r(S),{size:"large",value:l.access_token,"onUpdate:value":e[4]||(e[4]=t=>l.access_token=t)},null,8,["value"])]),_:1})),a(r(ge),{size:"large",type:"primary",block:"",onClick:A},{default:n(()=>[g("Fetch Album")]),_:1}),(C=v.value)!=null&&C.error||(z=v.value)!=null&&z.error_description?(h(),_(r(E),{key:2,title:(T=v.value)==null?void 0:T.error,type:"error"},{default:n(()=>{var t;return[g($((t=v.value)==null?void 0:t.error_description),1)]}),_:1},8,["title"])):j("v-if",!0),(N=f.value)!=null&&N.error?(h(),_(r(E),{key:3,title:(w=f.value)==null?void 0:w.error.status,type:"error"},{default:n(()=>{var t;return[g($((t=f.value)==null?void 0:t.error.message),1)]}),_:1},8,["title"])):j("v-if",!0),we,a(r(ke),{size:"large"},{default:n(()=>[a(r(xe),null,{default:n(()=>[a(r(O),null,{default:n(()=>[a(r(L),null,{default:n(()=>[g("Album Title")]),_:1}),a(r(L),null,{default:n(()=>[g("Album ID")]),_:1})]),_:1})]),_:1}),a(r(ye),null,{default:n(()=>[(h(!0),F(ae,null,ne(r(u),(t,U)=>(h(),_(r(O),null,{default:n(()=>[a(r(D),null,{default:n(()=>[g($(t.title),1)]),_:2},1024),a(r(D),null,{default:n(()=>[g($(t.id),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1}))}});const $e=G(Pe,[["__scopeId","data-v-14b6ef64"],["__file","Album.vue"]]),Be=m({__name:"album.html",setup(d){return(s,l)=>{const c=ie("NaiveClient");return h(),F("div",null,[a(c,null,{default:n(()=>[a(r($e))]),_:1})])}}}),De=G(Be,[["__file","album.html.vue"]]);export{De as default};