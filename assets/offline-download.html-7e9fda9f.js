import{_ as l}from"./offline-download-25b0dc81.js";import{_ as s,N as d,a0 as c,Q as t,a1 as o,P as h,a2 as n,a3 as a,G as r}from"./framework-c1c045a5.js";const _={},p=a('<h1 id="离线下载" tabindex="-1"><a class="header-anchor" href="#离线下载" aria-hidden="true">#</a> 离线下载</h1><div class="hint-container warning"><p class="hint-container-title">请仔细阅读以下提示</p><p>有两款离线下载功能软件</p><p>两款用法都一样，提前设置好软件配置(具体配置看下面说明)，</p><p>然后回到前端界面， <mark>找到你想把离线文件上传到哪个文件夹，你就手动进入到该文件夹</mark></p><p>然后再右下角找到离线下载按钮，自行选择使用 Aria2下载还是qBittorrent下载(＞v 3.11.0)</p></div><h2 id="_1-aria2" tabindex="-1"><a class="header-anchor" href="#_1-aria2" aria-hidden="true">#</a> 1.Aria2</h2>',3),g=t("strong",null,"点击查看使用说明",-1),u=t("h2",{id:"_2-qbittorrent",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-qbittorrent","aria-hidden":"true"},"#"),n(" 2.qBittorrent")],-1),m=t("p",null,"（这里以Windows端举例，Linux端不清楚有没有）",-1),f=t("p",null,[n("首先我们先要在 "),t("strong",null,[t("code",null,"qBittorrent")]),n(" 客户端配置好预设值")],-1),b={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159",target:"_blank",rel:"noopener noreferrer"},x=a("<ul><li><strong>ip</strong>：localhost</li><li><strong>port</strong>：8080</li><li><strong>user</strong>：admin</li><li><strong>password</strong>：adminadmin</li></ul><p>将以上参数我们填写到 <strong><code>qBittorrent</code></strong> 客户端，配置好后我们去Alist前端进行离线下载（<strong>方法参考开头的说明</strong>）</p><ul><li>若提交离线链接后提示：<strong>Qbittorrent not ready</strong> 将Alist和qBittorrent都重启试试看</li></ul>",3),k={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159",target:"_blank",rel:"noopener noreferrer"},B=t("ul",null,[t("li",null,[t("code",null,'{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ')])],-1),L=t("p",null,[t("img",{src:l,alt:"Offline download"})],-1);function q(w,v){const i=r("RouterLink"),e=r("ExternalLinkIcon");return d(),c("div",null,[p,t("p",null,[o(i,{to:"/zh/config%5Cother.html"},{default:h(()=>[g]),_:1})]),u,m,f,t("p",null,[n("根据"),t("a",b,[n("源码"),o(e)]),n("我们知道预设值分别是 admin:adminadmin@localhost:8080/")]),x,t("p",null,[n("预设值配置查看地址："),t("strong",null,[t("a",k,[n("https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159"),o(e)])])]),B,L])}const A=s(_,[["render",q],["__file","offline-download.html.vue"]]);export{A as default};
