import{_ as r,N as n,a9 as s,Q as e,W as t,a1 as a,ag as c,G as i}from"./framework-ffef1a40.js";const l={},d=e("h1",{id:"_2fa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2fa","aria-hidden":"true"},"#"),t(" 2FA")],-1),h={href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",target:"_blank",rel:"noopener noreferrer"},_={href:"https://support.microsoft.com/zh-cn/account-billing/%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85microsoft-authenticator%E5%BA%94%E7%94%A8-351498fc-850a-45da-b7b6-27e523b8702a",target:"_blank",rel:"noopener noreferrer"},f=c('<p>然后登录 AList 管理并进入“个人资料”页面，点击“启用 2FA”按钮，用你的 2FA 应用扫描二维码，输入你的 2FA 应用生成的代码。</p><p>最后，单击“验证”按钮启用 2FA。</p><h2 id="如何解除2fa验证" tabindex="-1"><a class="header-anchor" href="#如何解除2fa验证" aria-hidden="true">#</a> <strong>如何解除2FA验证：</strong></h2><p>如何进入Alist所在的文件夹</p><ol><li><strong>Windows</strong>：进入到Alist所在的文件夹输入：<strong>alist.exe cancel2fa</strong></li><li><strong>Linux</strong> ：也一样进入Alist所在的文件夹输入，<strong>./alist cancel2fa</strong></li><li><strong>docker</strong> ：docker直接输入 <strong>docker exec -it alist ./alist cancel2fa</strong></li></ol><p><strong>以上输入删除后发现还有重启即可~</strong></p>',6);function p(g,A){const o=i("ExternalLinkIcon");return n(),s("div",null,[d,e("p",null,[t("要启用双因素身份验证，需要在手机上安装支持 TOTP 的验证器，例如 "),e("a",h,[t("Google Authenticator"),a(o)]),t("，"),e("a",_,[t("Microsoft Authenticator"),a(o)])]),f])}const m=r(l,[["render",p],["__file","2fa.html.vue"]]);export{m as default};