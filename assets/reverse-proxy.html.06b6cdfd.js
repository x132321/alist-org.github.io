import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,e as a}from"./app.bb6a41b5.js";const i={},t=a(`<h1 id="reverse-proxy" tabindex="-1"><a class="header-anchor" href="#reverse-proxy" aria-hidden="true">#</a> Reverse proxy</h1><p>The program listens to port 5244 by default.</p><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>Add in the server field of the website configuration file</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Range <span class="token variable">$http_range</span></span><span class="token punctuation">;</span>
	  <span class="token directive"><span class="token keyword">proxy_set_header</span> If-Range <span class="token variable">$http_if_range</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5244</span><span class="token punctuation">;</span>
    <span class="token comment"># the max size of file to upload</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">20000m</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>If you use the bt.cn, be sure to delete the following default configuration</p><ul><li>location ~ ^/(.user.ini|.htaccess|.git|.svn|.project|LICENSE|README.md</li><li>location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$</li><li>location ~ .*.(js|css)?$</li></ul></div><h3 id="apache" tabindex="-1"><a class="header-anchor" href="#apache" aria-hidden="true">#</a> Apache</h3><p>Add the anti-generation configuration item ProxyPass under the VirtualHost field, such as:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VirtualHost</span> <span class="token attr-name"><span class="token namespace">*:</span>80</span><span class="token punctuation">&gt;</span></span>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass &quot;/&quot; &quot;http://127.0.0.1:5244/&quot; nocanon
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VirtualHost</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy" aria-hidden="true">#</a> Caddy</h3><p>Add the reverse_proxy configuration item reverse_proxy under the Caddyfile file, for example:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>:80 {
     reverse_proxy 127.0.0.1:5244
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[t];function l(r,p){return e(),s("div",null,o)}const u=n(i,[["render",l],["__file","reverse-proxy.html.vue"]]);export{u as default};
