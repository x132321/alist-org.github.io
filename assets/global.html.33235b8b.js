import{_ as d,W as h,X as c,Y as a,a0 as e,Z as r,$ as i,a1 as s,y as t}from"./framework.00b47ed6.js";const l={},p=a("h1",{id:"全局设置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#全局设置","aria-hidden":"true"},"#"),e(" 全局设置")],-1),_=a("h2",{id:"隐藏文件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#隐藏文件","aria-hidden":"true"},"#"),e(" 隐藏文件")],-1),u=a("code",null,"javascript",-1),f={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},b=s('<h2 id="打包下载" tabindex="-1"><a class="header-anchor" href="#打包下载" aria-hidden="true">#</a> 打包下载</h2><p>是否开启文件打包下载，默认为 true。</p><h2 id="自定义头部" tabindex="-1"><a class="header-anchor" href="#自定义头部" aria-hidden="true">#</a> 自定义头部</h2><p>在此处设置的任何内容都会自动放置在网页头部的开头</p><h2 id="自定义body" tabindex="-1"><a class="header-anchor" href="#自定义body" aria-hidden="true">#</a> 自定义body</h2><p>在此处设置的任何内容都会自动放置在网页正文的末尾</p><h2 id="链接过期时间" tabindex="-1"><a class="header-anchor" href="#链接过期时间" aria-hidden="true">#</a> 链接过期时间</h2><p>直接链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>只有加了密码的路径的直链才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的。</p></div><h2 id="隐私正则表达式" tabindex="-1"><a class="header-anchor" href="#隐私正则表达式" aria-hidden="true">#</a> 隐私正则表达式</h2><p>不想在错误消息中显示的内容，每行一个正则表达式（在 <code>Golang</code> 中）。匹配的内容将被替换为对应长度的*。</p><h2 id="ocr-api" tabindex="-1"><a class="header-anchor" href="#ocr-api" aria-hidden="true">#</a> ocr api</h2>',12),m={href:"https://hub.docker.com/r/xhofe/ddddocr_server",target:"_blank",rel:"noopener noreferrer"},x={href:"https://app.koyeb.com/",target:"_blank",rel:"noopener noreferrer"};function k(g,v){const o=t("ExternalLinkIcon"),n=t("RouterLink");return h(),c("div",null,[p,_,a("p",null,[e("匹配被正则表达式（"),u,e("）隐藏的文件。不明白的不要乱填。错误的正则表达式会导致前端页面崩溃。每行一个。默认情况下，有一个示例表达式将 "),a("a",f,[e("README.md"),r(o)]),e(" 从所有目录中隐藏。")]),a("p",null,[e("并不是真的在隐藏。它仍然存在于 api 返回的列表中，只是没有出现在前端列表中。因此，如果您想真正隐藏，请添加"),r(n,{to:"/zh/guide/advanced/meta.html"},{default:i(()=>[e("元信息")]),_:1}),e("。")]),b,a("p",null,[e("用于识别验证码。你可以自己部署："),a("a",m,[e("https://hub.docker.com/r/xhofe/ddddocr_server"),r(o)]),e(" 默认的 ocr api 部署在 "),a("a",x,[e("koyeb"),r(o)]),e(" 上（无可用性保证），不建议在生产环境中使用。")])])}const y=d(l,[["render",k],["__file","global.html.vue"]]);export{y as default};
