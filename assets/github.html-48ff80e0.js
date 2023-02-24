import{_ as l}from"./github-2f91a473.js";import{_ as s,N as c,a7 as h,Q as t,W as e,a0 as i,a8 as o,G as r}from"./framework-939b1f57.js";const u={},d=o('<h1 id="github-login" tabindex="-1"><a class="header-anchor" href="#github-login" aria-hidden="true">#</a> GitHub Login</h1><h3 id="github-client-id" tabindex="-1"><a class="header-anchor" href="#github-client-id" aria-hidden="true">#</a> Github client id</h3><p>client ID</p><h3 id="github-client-secrets" tabindex="-1"><a class="header-anchor" href="#github-client-secrets" aria-hidden="true">#</a> Github client secrets</h3><p>secrets ID</p>',5),g={href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"},p=t("strong",null,[t("code",null,"New OAuth App")],-1),b=o('<h3 id="register-oauth-instructions" tabindex="-1"><a class="header-anchor" href="#register-oauth-instructions" aria-hidden="true">#</a> Register OAuth Instructions</h3><ul><li>Application name <ul><li>Write whatever you want to call it</li></ul></li><li><mark><strong>Homepage URL</strong></mark><ul><li>home URL address <ul><li>Both <strong>http</strong> and <strong>https</strong> can be used</li></ul></li></ul></li><li>Application description <ul><li>write whatever you want</li></ul></li><li><mark><strong>Authorization callback URL</strong></mark><ul><li>Callback URL address</li><li><strong>https://your_domain/api/auth/github_callback</strong><ul><li>Both <strong>http</strong> and <strong>https</strong> can be used</li></ul></li></ul></li></ul><p>Remember to get <strong>Client secrets</strong> after filling it out, and then fill it in the Alist background.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If you want to use GitHub to log in, you first need the machine you built Alist to be able to connect to GitHub before you can call and use it, otherwise you cannot use it if the link is not connected</p></div><h3 id="completely-fill-in-the-reference-schematic" tabindex="-1"><a class="header-anchor" href="#completely-fill-in-the-reference-schematic" aria-hidden="true">#</a> Completely fill in the reference schematic</h3><p><img src="'+l+'" alt="github"></p><h3 id="github-login-video-tutorials" tabindex="-1"><a class="header-anchor" href="#github-login-video-tutorials" aria-hidden="true">#</a> GitHub login Video Tutorials</h3>',7),m={href:"https://b23.tv/Fm8AkC5",target:"_blank",rel:"noopener noreferrer"};function f(_,k){const n=r("ExternalLinkIcon"),a=r("ArtPlayer");return c(),h("div",null,[d,t("p",null,[e("Open "),t("strong",null,[t("a",g,[e("https://github.com/settings/developers"),i(n)])]),e(" Click "),p]),b,i(a,{src:"https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4872400300415846&raw=true",poster:"/img/advanced/github-login.png"}),t("p",null,[t("strong",null,[e("If the video fails, you can watch it here: "),t("a",m,[e("https://b23.tv/Fm8AkC5"),i(n)])])])])}const w=s(u,[["render",f],["__file","github.html.vue"]]);export{w as default};