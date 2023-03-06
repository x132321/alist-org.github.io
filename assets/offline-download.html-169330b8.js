import{_ as s}from"./offline-download-25b0dc81.js";import{_ as d,N as c,a9 as h,Q as t,a1 as o,P as u,W as e,ag as r,G as i}from"./framework-ffef1a40.js";const f={},p=r('<h1 id="offline-download" tabindex="-1"><a class="header-anchor" href="#offline-download" aria-hidden="true">#</a> Offline download</h1><div class="hint-container warning"><p class="hint-container-title">Please read the following tips carefully</p><p>There are two kinds of software with offline download function</p><p>The two usages are the same, and the software configuration is set in advance (see the following instructions for specific configuration),</p><p>Then go back to the front-end interface, <mark>find the folder you want to upload offline files to, and you can manually enter the folder</mark></p><p>Then find the offline download button in the lower right corner, and choose to use Aria2 download or qBittorrent download (&gt;v 3.11.0)</p><p>If you are <strong>docker</strong>, please map the following two default paths by yourself</p><ul><li><strong>/opt/alist/data/temp/aria2</strong></li><li><strong>/opt/alist/data/temp/qbittorrent</strong></li></ul></div><h2 id="_1-aria2" tabindex="-1"><a class="header-anchor" href="#_1-aria2" aria-hidden="true">#</a> 1.Aria2</h2>',3),g=t("strong",null,"Click to view instructions for use",-1),m=t("h2",{id:"_2-qbittorrent",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-qbittorrent","aria-hidden":"true"},"#"),e(" 2.qBittorrent")],-1),_=t("p",null,"(Here we take the Windows side as an example, I don’t know if there is one on the Linux side)",-1),b=t("p",null,[e("First of all, we need to configure the default values on the client side of "),t("strong",null,[t("code",null,"qBittorrent")])],-1),w={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159",target:"_blank",rel:"noopener noreferrer"},v=t("ul",null,[t("li",null,[t("strong",null,"ip"),e(": localhost")]),t("li",null,[t("strong",null,"port"),e(": 8080")]),t("li",null,[t("strong",null,"user"),e(": admin")]),t("li",null,[t("strong",null,"password"),e(": adminadmin")])],-1),k=t("li",null,[t("p",null,[e("We fill in the above parameters into the "),t("strong",null,[t("code",null,"qBittorrent")]),e(" client, after configuration, we go to the Alist front end to download offline ("),t("strong",null,"method refer to the description at the beginning"),e(")")]),t("ul",null,[t("li",null,[e("If you are prompted after submitting the offline link: "),t("strong",null,"Qbittorrent not ready"),e(", try restarting both Alist and qBittorrent")])])],-1),q=t("p",null,"Default value configuration view address:",-1),y={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159",target:"_blank",rel:"noopener noreferrer"},B=t("li",null,[t("p",null,[t("code",null,'{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ')])],-1),x=t("li",null,[t("p",null,[t("mark",null,"We can also customize, instead of using the default presets")])],-1),T=r('<ul><li>Modification location: <strong>Alist Manage</strong> --&gt; <strong>Settings</strong> --&gt; <strong>Qbittorrent url</strong> option, just follow the modification</li></ul><p><img src="'+s+'" alt="Offline download"></p><h3 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions" aria-hidden="true">#</a> Precautions</h3><ol><li>Appeared in the background qBittorrent task: <strong><code>torrent parse timeout</code></strong>, parsing timed out</li><li>The torrent can be parsed, but <strong><code>The system cannot find the path specified.</code></strong> appears when uploading.</li></ol><p>The above two methods are most likely caused by the qBittorrent software itself, probably because of the green version and the modified version that have undergone some functional castration modifications. It is recommended to go to the official website to download and install it to restore it (the conclusion drawn by myself after stepping on the pit) )</p>',5),A=t("strong",null,"qBittorrent",-1),I={href:"https://www.qbittorrent.org/",target:"_blank",rel:"noopener noreferrer"},L=t("strong",null,"qBittorrent",-1),E={href:"https://github.com/c0re100/qBittorrent-Enhanced-Edition",target:"_blank",rel:"noopener noreferrer"},P=r('<ol start="3"><li>Because the <code>v2.8.3</code> API is used, the minimum version of qBittorrent should be <code>4.4.0beta2</code> or <code>4.3.8</code> official version</li><li>If <strong>qBittorrent</strong> sets the ip where alist is located to be exempt from authentication, you can directly omit the user name and password before <code>@</code> (configured on the <strong>qBittorrent</strong> client side) <ul><li>3 and 4 are not mentioned in the video.</li></ul></li></ol><p><strong>qBittorrent</strong> Video Tutorials</p>',2),V={href:"https://b23.tv/J34qDiG",target:"_blank",rel:"noopener noreferrer"};function N(D,G){const l=i("RouterLink"),n=i("ExternalLinkIcon"),a=i("ArtPlayer");return c(),h("div",null,[p,t("p",null,[o(l,{to:"/config/other.html"},{default:u(()=>[g]),_:1})]),m,_,b,t("p",null,[e("According to [source code] ("),t("a",w,[e("https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159"),o(n)]),e("), we know that the default values are admin:adminadmin@localhost:8080/")]),v,t("ol",null,[k,t("li",null,[q,t("ul",null,[t("li",null,[t("p",null,[t("strong",null,[t("a",y,[e("https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159"),o(n)])])])]),B])]),x]),T,t("ul",null,[t("li",null,[A,e(" official website: "),t("strong",null,[t("a",I,[e("https://www.qbittorrent.org/"),o(n)])])]),t("li",null,[L,e(" GitHub: "),t("strong",null,[t("a",E,[e("https://github.com/c0re100/qBittorrent-Enhanced-Edition"),o(n)])])])]),P,o(a,{src:"https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2804817007920660481&hd=2&raw=true",poster:"/img/advanced/qbittorrent.png"}),t("p",null,[t("strong",null,[e("If the video fails, you can watch it here: "),t("a",V,[e("https://b23.tv/J34qDiG"),o(n)])])])])}const Q=d(f,[["render",N],["__file","offline-download.html.vue"]]);export{Q as default};