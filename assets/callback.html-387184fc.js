import{c as P,r as V,u as e,N as r,O as n,P as c,a5 as l,a7 as _,Q as o,aa as f,Z as h,_ as T,a4 as z,G as E}from"./framework-65876511.js";import{N as m,a as L}from"./Spin-63edcd38.js";import{N as O,a as x}from"./Space-6f7d8159.js";import"./app-a6b51aeb.js";import"./Close-23b790d8.js";const R=o("b",null,"client_id: ",-1),U=o("b",null,"client_secret: ",-1),j=o("b",null,"redirect_uri: ",-1),A=o("b",null,"refresh_token:",-1),D=P({__name:"Callback",setup(S){const s=new URL(window.location.href),u=s.searchParams.get("code"),p=s.searchParams.get("state"),d=s.searchParams.get("error"),B=s.searchParams.get("error_description"),[k,v,y]=atob(p).split("::"),t=V();return u&&!d&&(async()=>{const a=new URLSearchParams;a.append("client_id",k),a.append("client_secret",v),a.append("code",u),a.append("grant_type","authorization_code"),a.append("redirect_uri",y),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(i=>i.json()).then(i=>{console.log(i),t.value=i})})(),(a,i)=>!e(u)||e(d)?(r(),n(e(m),{key:0,title:e(d)||"Error",type:"error"},{default:c(()=>[l(_(e(B)),1)]),_:1},8,["title"])):(r(),n(e(x),{key:1,vertical:"",size:"large"},{default:c(()=>{var b,g,w;return[o("p",null,[R,l(_(e(k)),1)]),o("p",null,[U,l(_(e(v)),1)]),o("p",null,[j,l(_(e(y)),1)]),(b=t.value)!=null&&b.error||(g=t.value)!=null&&g.error_description?(r(),n(e(m),{key:0,title:(w=t.value)==null?void 0:w.error,type:"error"},{default:c(()=>[l(_(t.value.error_description),1)]),_:1},8,["title"])):f("v-if",!0),h(e(x),{vertical:""},{default:c(()=>{var N,C;return[A,t.value?f("v-if",!0):(r(),n(e(L),{key:0})),(N=t.value)!=null&&N.refresh_token?(r(),n(e(O),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(C=t.value)!=null&&C.access_token?(r(),n(e(m),{key:2,title:"Web client",type:"warning"},{default:c(()=>[l(" The refresh_token is only returned once if you use a web client. ")]),_:1})):f("v-if",!0)]}),_:1})]}),_:1}))}});const G=T(D,[["__file","Callback.vue"]]),I=P({__name:"callback.html",setup(S){return(s,u)=>{const p=E("NaiveClient");return r(),z("div",null,[h(p,null,{default:c(()=>[h(e(G))]),_:1})])}}}),H=T(I,[["__file","callback.html.vue"]]);export{H as default};