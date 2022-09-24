import{_ as r,a as c,b as d}from"./onedrive-update-permission.fedec537.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as _,a as e,b as o,w as h,d as t,e as u,r as i}from"./app.98483c05.js";const p={},f=e("h1",{id:"onedrive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#onedrive","aria-hidden":"true"},"#"),t(" OneDrive")],-1),m={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),b=t("\u5982\u679C\u4F60\u7684\u8D26\u53F7\u4E0D\u652F\u6301 API\uFF0C\uFF08\u6BD4\u5982\u5B66\u6821\u8D26\u53F7\u6CA1\u6709\u9A8C\u8BC1\u7BA1\u7406\u5458\uFF0C\u6216\u8005\u7BA1\u7406\u5458\u7981\u7528\u4E86 API\uFF09\uFF0C\u90A3\u4E48\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 WebDAV \u6302\u8F7D\u3002 \u6709\u5173\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 "),E=t("WevDAV \u9875\u9762"),x=t("\u9996\u5148\u6253\u5F00 "),B={href:"https://tool.nn.ci/onedrive/request",target:"_blank",rel:"noopener noreferrer"},k=t("https://tool.nn.ci/onedrive/request"),g=e("h2",{id:"\u521B\u5EFA\u5E94\u7528\u200B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u521B\u5EFA\u5E94\u7528\u200B","aria-hidden":"true"},"#"),t(" \u521B\u5EFA\u5E94\u7528\u200B")],-1),A=e("blockquote",null,[e("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u8DF3\u8FC7\u6B64\u6B65\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u63D0\u4F9B\u7684client\uFF0C\u4F46\u662F\u9700\u8981\u7EC4\u7EC7\u7BA1\u7406\u5458\u6279\u51C6\u3002")],-1),F=e("li",null,"\u5728\u6253\u5F00\u7684\u9875\u9762\uFF0C\u9009\u62E9\u6240\u5728\u533A\u57DF\uFF0C\u70B9\u51FB\u521B\u5EFA\u5E94\u7528",-1),V=t('\u767B\u9646\u540E\u9009\u62E9"\u6CE8\u518C\u5E94\u7528\u7A0B\u5E8F"\uFF0C\u8F93\u5165"\u540D\u79F0"\uFF0C\u9009\u62E9"\u4EFB\u4F55\u7EC4\u7EC7\u76EE\u5F55\u4E2D\u7684\u8D26\u6237\u548C\u4E2A\u4EBA"\uFF08\u6CE8\u610F\u8FD9\u91CC\u4E0D\u8981\u770B\u4F4D\u7F6E\u9009\u62E9\u800C\u662F\u770B\u6587\u5B57\uFF0C\u90E8\u5206\u4EBA\u53EF\u80FD\u662F\u4E2D\u95F4\u90A3\u4E2A\u9009\u9879\uFF0C\u4E0D\u8981\u9009\u6210\u5355\u4E00\u79DF\u6237\u6216\u8005\u5176\u4ED6\u9009\u9879\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u767B\u9646\u65F6\u51FA\u73B0\u95EE\u9898\uFF09\uFF0C\u8F93\u5165\u91CD\u5B9A\u5411 URL \u4E3A '),q={href:"https://tool.nn.ci/onedrive/callback",target:"_blank",rel:"noopener noreferrer"},C=t("https://tool.nn.ci/onedrive/callback"),I=t(" \uFF0C\u70B9\u51FB\u6CE8\u518C\u5373\u53EF\uFF0C\u7136\u540E\u53EF\u4EE5\u5F97\u5230 "),L=e("code",null,"client_id",-1),P=e("img",{src:r,alt:"client_id"},null,-1),D=e("li",null,[t('\u6CE8\u518C\u597D\u5E94\u7528\u7A0B\u5E8F\u4E4B\u540E\uFF0C\u9009\u62E9"\u8BC1\u4E66\u548C\u5BC6\u7801"\uFF0C\u70B9\u51FB"\u65B0\u5BA2\u6237\u7AEF\u5BC6\u7801"\uFF0C\u8F93\u5165\u4E00\u4E32\u5BC6\u7801\uFF0C\u9009\u62E9\u65F6\u95F4\u4E3A\u6700\u957F\u7684\u90A3\u4E2A\uFF0C\u70B9\u51FB"\u6DFB\u52A0" \uFF08\u6CE8\uFF1A\u5728\u6DFB\u52A0\u4E4B\u540E\u8F93\u5165\u7684\u5BC6\u7801\u4E4B\u540E\u4F1A\u6D88\u5931\uFF0C\u8BF7\u8BB0\u5F55\u4E0B\u6765 '),e("code",null,"client_secret"),t(" \u7684\u503C\uFF09 "),e("img",{src:c,alt:"client_secret"})],-1),N=e("li",null,[t('\u9009\u62E9 "API \u6743\u9650"\uFF0C\u70B9\u51FB "Microsoft Graph"\uFF0C\u5728"\u9009\u62E9\u6743\u9650"\u4E2D\u8F93\u5165 '),e("code",null,"file"),t("\uFF0C\u52FE\u9009 "),e("code",null,"Files.read"),t('\uFF08\u6CE8\uFF1AFiles.read \u662F\u53EA\u8BFB\u6700\u5C0F\u6743\u9650\uFF0C\u56FE\u4E2D\u6743\u9650\u8F83\u5927\uFF0C\u4E5F\u540C\u6837\u53EF\u4EE5\uFF09\uFF0C\u70B9\u51FB"\u786E\u5B9A" '),e("img",{src:d,alt:"api"})],-1),w=e("h2",{id:"\u83B7\u53D6\u5237\u65B0\u4EE4\u724C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u83B7\u53D6\u5237\u65B0\u4EE4\u724C","aria-hidden":"true"},"#"),t(" \u83B7\u53D6\u5237\u65B0\u4EE4\u724C")],-1),R=t("\u5C06\u4E0A\u4E00\u6B65\u9AA4\u4E2D\u83B7\u5F97\u7684 "),S=e("code",null,"client_id",-1),W=t(" \u548C "),z=e("code",null,"client_secret",-1),G=t(" \u586B\u5165 "),M={href:"https://tool.nn.ci/onedrive/request%EF%BC%8C%E7%82%B9%E5%87%BB%22%E8%8E%B7%E5%8F%96%E5%88%B7%E6%96%B0%E4%BB%A4%E7%89%8C%22%E5%8D%B3%E5%8F%AF",target:"_blank",rel:"noopener noreferrer"},O=t('https://tool.nn.ci/onedrive/request\uFF0C\u70B9\u51FB"\u83B7\u53D6\u5237\u65B0\u4EE4\u724C"\u5373\u53EF'),T=u('<h2 id="\u83B7\u53D6-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-sharepoint-site-id" aria-hidden="true">#</a> \u83B7\u53D6 SharePoint site_id</h2><p>\u5982\u679C\u9700\u8981\u6302\u8F7D SharePoint\uFF0C\u5B8C\u6210\u4E0A\u4E00\u6B65\u540E\uFF0C\u5728\u663E\u793A\u5237\u65B0\u4EE4\u724C\u7684\u754C\u9762\u4F1A\u51FA\u73B0\u4E00\u4E2A\u8F93\u5165\u7AD9\u70B9\u5730\u5740\uFF0C\u8F93\u5165\u7AD9\u70B9\u5730\u5740\u540E\u70B9\u51FB\u83B7\u53D6 <code>site_id</code> \u5373\u53EF\u3002</p><h2 id="\u6DFB\u52A0\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8D26\u53F7" aria-hidden="true">#</a> \u6DFB\u52A0\u8D26\u53F7</h2><p>\u5C06\u4E0A\u8FF0\u8FC7\u7A0B\u4E2D\u83B7\u53D6\u5F97\u5230\u7684\u503C\u4F9D\u6B21\u586B\u5165\u5373\u53EF\u3002</p><h2 id="\u6839\u76EE\u5F55\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u6839\u76EE\u5F55\u8DEF\u5F84" aria-hidden="true">#</a> \u6839\u76EE\u5F55\u8DEF\u5F84</h2><p>\u9ED8\u8BA4\u4E3A <code>/</code>\uFF0C\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\uFF0C\u5C31\u586B\u8DEF\u5F84\u5C31\u884C\uFF0C\u4ECE\u6839\u8DEF\u5F84\u5F00\u59CB\uFF0C\u548C\u672C\u5730\u8DEF\u5F84\u4E00\u6837\uFF0C\u6BD4\u5982 <code>/test</code></p>',6);function U(j,y){const s=i("RouterLink"),n=i("ExternalLinkIcon");return l(),_("div",null,[f,e("div",m,[v,e("p",null,[b,o(s,{to:"/zh/guide/drivers/webdav.html"},{default:h(()=>[E]),_:1})])]),e("p",null,[x,e("a",B,[k,o(n)])]),g,A,e("ul",null,[F,e("li",null,[V,e("a",q,[C,o(n)]),I,L,P]),D,N]),w,e("p",null,[R,S,W,z,G,e("a",M,[O,o(n)])]),T])}const Q=a(p,[["render",U],["__file","onedrive.html.vue"]]);export{Q as default};
