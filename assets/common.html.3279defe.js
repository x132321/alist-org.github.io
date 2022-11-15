import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as f,a as e,d as t,b as a,w as n,e as s,r as o}from"./app.00dafc81.js";const m={},y=s('<h1 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> Common</h1><h3 id="mount-path" tabindex="-1"><a class="header-anchor" href="#mount-path" aria-hidden="true">#</a> Mount Path</h3><p>Unique identifier, that is the location you want to mount to, if you want to mount to the root directory, it is <code>/</code></p><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h3><p>When there are multiple accounts, it is used for sorting, The smaller the more forward</p><h3 id="remark" tabindex="-1"><a class="header-anchor" href="#remark" aria-hidden="true">#</a> Remark</h3><p>Anything you want to fill in, which is just for reminding you what this storage is</p><h3 id="cache-expiration" tabindex="-1"><a class="header-anchor" href="#cache-expiration" aria-hidden="true">#</a> Cache Expiration</h3><p>Cache time of directory structure.</p><h3 id="web-proxy" tabindex="-1"><a class="header-anchor" href="#web-proxy" aria-hidden="true">#</a> Web proxy</h3>',10),b=e("h3",{id:"webdav-policy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webdav-policy","aria-hidden":"true"},"#"),t(" Webdav policy")],-1),_=e("ul",null,[e("li",null,"302 redirect: redirect to the real link"),e("li",null,"use proxy URL: redirect to proxy URL"),e("li",null,"native proxy: return data directly through local transit(best compatibility)")],-1),g=e("h3",{id:"download-proxy-url",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-proxy-url","aria-hidden":"true"},"#"),t(" Download proxy URL")],-1),x=e("p",null,"When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.Two proxy methods are provided:",-1),k=e("code",null,"cloudflare workers",-1),w=e("code",null,"cloudflare workers",-1),v={href:"https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js",target:"_blank",rel:"noopener noreferrer"},E=e("ul",null,[e("li",null,[t("ADDRESS: your Alist address, The protocol header must be added, and cannot be followed by /. Such as "),e("code",null,"https://pan.nn.ci"),t(";")]),e("li",null,[t("TOKEN: you can get in "),e("code",null,"Other settings"),t(" in your Alist manage page.")])],-1),R={href:"https://github.com/alist-org/alist-proxy/releases",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[e("code",null,"./alist-proxy -help"),t(" to see how to use it.")],-1),T=s(`<p>You can even develop your own proxy program, the general steps are:</p><ul><li>When downloading, it will request <code>PROXY_URL/path?sign=sign_value</code></li><li>Verify sign in the proxy program, the calculation method of sign is:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token function">hmac</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token constant">TOKEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>After verifying the sign is correct, requesting <code>HOST/api/fs/link</code>, you can get the URL of the file and the request header to be carried</li><li>Use the information to request and return</li></ul><h3 id="sort-related" tabindex="-1"><a class="header-anchor" href="#sort-related" aria-hidden="true">#</a> Sort related</h3><ul><li>Sort by: Sort by what</li><li>Sort direction: Whether the sort direction is ascending or descedning</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>Some drives use their own sorting method, which may be different.</p></div><h3 id="extract-folder" tabindex="-1"><a class="header-anchor" href="#extract-folder" aria-hidden="true">#</a> Extract folder</h3><ul><li>Extract to front: put all folders to the front when sorting</li><li>Extract to back: put all folders to the back when sorting</li></ul>`,9);function L(U,j){const i=o("RouterLink"),r=o("ExternalLinkIcon"),l=o("Tabs");return p(),f("div",null,[y,e("p",null,[t("Whether the web preview,download and the direct link go through the transfer. If you open this, recommended you set "),a(i,{to:"/config/configuration.html#site_url"},{default:n(()=>[t("site_url")]),_:1}),t(" so that alist can works fine.")]),b,_,g,x,a(l,{id:"59",data:[{title:"cloudflare workers"},{title:"Universal Binary"}]},{tab0:n(({title:c,value:d,isActive:h})=>[e("p",null,[t("You can use "),k,t(" for proxy, just fill in the "),w,t(" address here. The workers code can be found at "),e("a",v,[t("https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js"),a(r)]),t(". in:")]),E]),tab1:n(({title:c,value:d,isActive:h})=>[e("p",null,[t("You can also use another machine for proxying, download the program at "),e("a",R,[t("https://github.com/alist-org/alist-proxy/releases"),a(r)])]),S]),_:1}),T])}const W=u(m,[["render",L],["__file","common.html.vue"]]);export{W as default};
