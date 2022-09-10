import{f as g,g as i,o as w,c as x,a as e,d as c,t as u,h as f,v as _,e as T,b as t,r as S}from"./app.39fb79de.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";const A="/img/drivers/aliyundrive.png",D=T('<h1 id="aliyundrive" tabindex="-1"><a class="header-anchor" href="#aliyundrive" aria-hidden="true">#</a> Aliyundrive</h1><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Due to the limitation of the referrer of Aliyundrive, the mobile token must be used. Using the desktop web token will result in failure to download and preview. Of course, you can also turn on the proxy so that <code>refresh token</code> of desktop web can work if you use it locally or if the bandwidth is large enough.</p></div><h3 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token" aria-hidden="true">#</a> Refresh token</h3>',3),N=t("Follow to this "),O={href:"https://github.com/Xhofe/alist/issues/88",target:"_blank",rel:"noopener noreferrer"},P=t("issue"),z=t(" Capture/find the log on the mobile phone (/data/media/0/Android/data/com.alicloud.databox/ files/logs/trace/). Or you can click:"),E=["disabled"],I={style:{margin:"4px"}},R=["src"],U={class:"custom-container info"},V={class:"custom-container-title"},j=t("API is hosted by "),q={href:"http://replit.com",target:"_blank",rel:"noopener noreferrer"},B=t("replit.com"),G=e("h3",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),t(" Root folder file_id")],-1),J=t("Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as "),L={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},W=t("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),F=t(", which is "),Q=e("code",null,"5fe01e1830601baf774e4827a9fb8fb2b5bf7940",-1),X=t(":"),$=e("p",null,[e("img",{src:A,alt:"file_id"})],-1),H=g({__name:"aliyundrive.html",setup(K){const s=i("Get Token"),o=i(0),r=i(""),l=i(""),d=i(""),p=async()=>{s.value="Waiting...",o.value=1;const n=await(await fetch("https://api.nn.ci/alist/ali/qr")).json();console.log(n),s.value="Use AliyunDrive APP To Scan Then Click",o.value=2,d.value=JSON.stringify({ck:n.content.data.ck,t:n.content.data.t.toString()}),r.value=`https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(n.content.data.codeContent)}`},v=async()=>{o.value=3,s.value="Waiting...";const n=await(await fetch("https://api.nn.ci/alist/ali/ck",{method:"POST",headers:{"Content-Type":"application/json"},body:d.value})).json(),{content:{data:{qrCodeStatus:a,loginResult:m,bizExt:k}}}=n;if(m!=="success"){o.value=2,s.value="Use AliyunDrive APP To Scan Then Click",alert("Status:"+a);return}const y=JSON.parse(atob(k));l.value=y.pds_login_result.refreshToken,s.value="Get Token Success",o.value=4,console.log(n)},b=async()=>{o.value===0&&p(),o.value===2&&v()};return(h,n)=>{const a=S("ExternalLinkIcon");return w(),x("div",null,[D,e("p",null,[N,e("a",O,[P,c(a)]),z]),e("p",null,[e("button",{disabled:o.value===3||o.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:b},u(s.value),9,E)]),f(e("div",I,[e("img",{src:r.value},null,8,R)],512),[[_,r.value]]),f(e("div",null,[e("div",U,[e("p",V,"Token: "+u(l.value),1)])],512),[[_,l.value]]),e("p",null,[e("em",null,[j,e("a",q,[B,c(a)])])]),G,e("p",null,[J,e("a",L,[W,c(a)]),F,Q,X]),$])}}}),Z=C(H,[["__file","aliyundrive.html.vue"]]);export{Z as default};