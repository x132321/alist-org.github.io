import{_ as u,W as h,X as m,Y as t,a0 as e,Z as n,$ as a,a1 as s,y as o}from"./framework.00b47ed6.js";const f={},g=s('<h1 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> Common</h1><h3 id="mount-path" tabindex="-1"><a class="header-anchor" href="#mount-path" aria-hidden="true">#</a> Mount Path</h3><p>Unique identifier, that is the location you want to mount to, if you want to mount to the root directory, it is <code>/</code></p><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h3><p>When there are multiple accounts, it is used for sorting, The smaller the more forward</p><h3 id="remark" tabindex="-1"><a class="header-anchor" href="#remark" aria-hidden="true">#</a> Remark</h3><p>Anything you want to fill in, which is just for reminding you what this storage is</p><h3 id="cache-expiration" tabindex="-1"><a class="header-anchor" href="#cache-expiration" aria-hidden="true">#</a> Cache Expiration</h3><p>Cache time of directory structure.</p><h3 id="web-proxy" tabindex="-1"><a class="header-anchor" href="#web-proxy" aria-hidden="true">#</a> Web proxy</h3>',10),k=t("h3",{id:"webdav-policy",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#webdav-policy","aria-hidden":"true"},"#"),e(" Webdav policy")],-1),_=t("ul",null,[t("li",null,"302 redirect: redirect to the real link"),t("li",null,"use proxy URL: redirect to proxy URL"),t("li",null,"native proxy: return data directly through local transit(best compatibility)")],-1),y=t("h3",{id:"download-proxy-url",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#download-proxy-url","aria-hidden":"true"},"#"),e(" Download proxy URL")],-1),b=t("p",null,"When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.Two proxy methods are provided:",-1),x=t("code",null,"cloudflare workers",-1),w=t("code",null,"cloudflare workers",-1),v={href:"https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js",target:"_blank",rel:"noopener noreferrer"},T=t("ul",null,[t("li",null,[e("ADDRESS: your Alist address, The protocol header must be added, and cannot be followed by /. Such as "),t("code",null,"https://pan.nn.ci"),e(";")]),t("li",null,[e("TOKEN: you can get in "),t("code",null,"Other settings"),e(" in your Alist manage page.")])],-1),S={href:"https://github.com/alist-org/alist-proxy/releases",target:"_blank",rel:"noopener noreferrer"},E=t("p",null,[t("code",null,"./alist-proxy -help"),e(" to see how to use it.")],-1),R=s('<p>You can even develop your own proxy program, the general steps are:</p><ul><li>When downloading, it will request <code>PROXY_URL/path?sign=sign_value</code></li><li>Verify sign in the proxy program, the calculation method of sign is:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> to_sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n<span class="token keyword">const</span> _sign <span class="token operator">=</span> <span class="token function">safeBase64</span><span class="token punctuation">(</span><span class="token function">hmac_sha256</span><span class="token punctuation">(</span>to_sign<span class="token punctuation">,</span> <span class="token constant">TOKEN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>_sign<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),L=t("code",null,"TOKEN",-1),U=s('<ul><li>After verifying the sign is correct, requesting <code>HOST/api/fs/link</code>, you can get the URL of the file and the request header to be carried</li><li>Use the information to request and return</li></ul><h3 id="sort-related" tabindex="-1"><a class="header-anchor" href="#sort-related" aria-hidden="true">#</a> Sort related</h3><ul><li>Sort by: Sort by what</li><li>Sort direction: Whether the sort direction is ascending or descedning</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>Some drives use their own sorting method, which may be different.</p></div><h3 id="extract-folder" tabindex="-1"><a class="header-anchor" href="#extract-folder" aria-hidden="true">#</a> Extract folder</h3><ul><li>Extract to front: put all folders to the front when sorting</li><li>Extract to back: put all folders to the back when sorting</li></ul>',6);function W(j,A){const i=o("RouterLink"),r=o("ExternalLinkIcon"),l=o("Tabs");return h(),m("div",null,[g,t("p",null,[e("Whether the web preview,download and the direct link go through the transfer. If you open this, recommended you set "),n(i,{to:"/config/configuration.html#site_url"},{default:a(()=>[e("site_url")]),_:1}),e(" so that alist can works fine.")]),k,_,y,b,n(l,{id:"59",data:[{title:"cloudflare workers"},{title:"Universal Binary"}]},{tab0:a(({title:c,value:p,isActive:d})=>[t("p",null,[e("You can use "),x,e(" for proxy, just fill in the "),w,e(" address here. The workers code can be found at "),t("a",v,[e("https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js"),n(r)]),e(". in:")]),T]),tab1:a(({title:c,value:p,isActive:d})=>[t("p",null,[e("You can also use another machine for proxying, download the program at "),t("a",S,[e("https://github.com/alist-org/alist-proxy/releases"),n(r)])]),E]),_:1}),R,t("p",null,[e("The "),L,e(" is the "),n(i,{to:"/config/other.html#token"},{default:a(()=>[e("token")]),_:1}),e(" of admin user.")]),U])}const O=u(f,[["render",W],["__file","common.html.vue"]]);export{O as default};
