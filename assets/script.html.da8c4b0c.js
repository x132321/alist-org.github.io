import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,e}from"./app.00dafc81.js";const t={},i=e(`<h1 id="一键脚本" tabindex="-1"><a class="header-anchor" href="#一键脚本" aria-hidden="true">#</a> 一键脚本</h1><p>仅适用于 Linux amd64/arm64 平台。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自定义路径" tabindex="-1"><a class="header-anchor" href="#自定义路径" aria-hidden="true">#</a> 自定义路径</h2><p>默认安装在 <code>/opt/alist</code> 中。 自定义安装路径，将安装路径作为第二个参数添加，必须是绝对路径（如果路径以 alist 结尾，则直接安装到给定路径，否则会安装在给定路径 alist 目录下），如 安装到 <code>/root</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Install</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">install</span> /root
<span class="token comment"># update</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> update /root
<span class="token comment"># Uninstall</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> uninstall /root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[i];function r(c,o){return s(),n("div",null,l)}const u=a(t,[["render",r],["__file","script.html.vue"]]);export{u as default};
