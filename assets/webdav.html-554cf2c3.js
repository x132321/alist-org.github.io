import{_ as l,N as r,a0 as a,Q as t,a2 as e,a1 as d,a3 as s,G as i}from"./framework-c1c045a5.js";const c={},o=s('<h1 id="webdav" tabindex="-1"><a class="header-anchor" href="#webdav" aria-hidden="true">#</a> WebDAV</h1><h2 id="webdav-配置" tabindex="-1"><a class="header-anchor" href="#webdav-配置" aria-hidden="true">#</a> WebDAV 配置</h2><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Url</td><td>http[s]://domain:port/dav/</td></tr><tr><td>Host</td><td>domain</td></tr><tr><td>路径</td><td>dav</td></tr><tr><td>协议</td><td>http/https</td></tr><tr><td>端口</td><td>与网页端一致</td></tr><tr><td>WebDAV用户名</td><td>与网页端用户名一致</td></tr><tr><td>WebDAV密码</td><td>与网页端密码一致</td></tr></tbody></table><h2 id="webdav-存储支持" tabindex="-1"><a class="header-anchor" href="#webdav-存储支持" aria-hidden="true">#</a> WebDAV 存储支持</h2><table><thead><tr><th>存储类型</th><th style="text-align:center;">列出文件/文件夹</th><th style="text-align:center;">下载文件</th><th style="text-align:center;">创建目录</th><th style="text-align:center;">重命名</th><th style="text-align:center;">移动</th><th style="text-align:center;">复制</th><th style="text-align:center;">上传文件/文件夹</th></tr></thead><tbody><tr><td>本地存储</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>阿里云盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Onedrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>天翼云盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>GoogleDrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>123pan</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>FTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>SFTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>PikPak</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>S3</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>USS</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>WebDAV</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Teambition</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>分秒帧</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>和彩云</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>YandexDisk</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>百度网盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>夸克网盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr></tbody></table><h2 id="可以用来挂载webdav的软件" tabindex="-1"><a class="header-anchor" href="#可以用来挂载webdav的软件" aria-hidden="true">#</a> 可以用来挂载WebDav的软件</h2>',6),g=t("strong",null,"Windows",-1),x={href:"https://potplayer.daum.net/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},h={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.onecommander.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},u=t("strong",null,"Android",-1),p={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},k={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07",target:"_blank",rel:"noopener noreferrer"},v=t("strong",null,"IOS",-1),V={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},D=t("strong",null,"电视TV",-1),N={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},A={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},W=t("li",null,[e("若只看阿里可以使用阿里官方合作的 "),t("ul",null,[t("li",null,"欢视商店-阿里云盘TV版，网盘播放器-阿里云盘TV版")])],-1),T=t("strong",null,"Mac",-1),U={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},E=t("li",null,[t("strong",null,"Linux"),t("ul",null,[t("li",null,"davfs2")])],-1),I=t("p",null,"若有合适的欢迎补充~",-1);function P(X,B){const n=i("ExternalLinkIcon");return r(),a("div",null,[o,t("ol",null,[t("li",null,[g,t("ul",null,[t("li",null,[t("a",x,[e("Potplayer"),d(n)]),e("，"),t("a",y,[e("kmplayer"),d(n)]),e("，RaiDrive，"),t("a",h,[e("kodi"),d(n)]),e("，"),t("a",_,[e("OneCommander"),d(n)]),e("，"),t("a",f,[e("Mountain Duck"),d(n)])])])]),t("li",null,[u,t("ul",null,[t("li",null,[t("a",p,[e("Nplayer"),d(n)]),e("，"),t("a",b,[e("kmplayer"),d(n)]),e("，ES文件管理器，"),t("a",k,[e("kodi"),d(n)]),e("，"),t("a",w,[e("nova魔改"),d(n)]),e("，"),t("a",m,[e("rexx"),d(n)]),e("，cx 文件管理器，Solid Expore")])])]),t("li",null,[v,t("ul",null,[t("li",null,[e("Nplayer，"),t("a",V,[e("kmplayer"),d(n)]),e("，infuse，Fileball文件管理器")])])]),t("li",null,[D,t("ul",null,[t("li",null,[t("a",N,[e("Nplayer"),d(n)]),e("，"),t("a",A,[e("kodi"),d(n)]),e("，"),t("a",S,[e("nova魔改"),d(n)])]),W])]),t("li",null,[T,t("ul",null,[t("li",null,[e("IINA，"),t("a",U,[e("Mountain Duck"),d(n)]),e("，infuse")])])]),E]),I])}const L=l(c,[["render",P],["__file","webdav.html.vue"]]);export{L as default};
