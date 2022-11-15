import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as t,a as e,d as a,b as o,e as i,r as l}from"./app.00dafc81.js";const c={},p=i(`<h1 id="use-docker" tabindex="-1"><a class="header-anchor" href="#use-docker" aria-hidden="true">#</a> Use Docker</h1><p>See the log output for the admin&#39;s info:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> alist ./alist admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="release-version" tabindex="-1"><a class="header-anchor" href="#release-version" aria-hidden="true">#</a> Release version</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /etc/alist:/opt/alist/data <span class="token parameter variable">-p</span> <span class="token number">5244</span>:5244 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span> xhofe/alist:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dev-version" tabindex="-1"><a class="header-anchor" href="#dev-version" aria-hidden="true">#</a> Dev version</h3><p>Just for amd64/arm64. Not recommended, this may can&#39;t work properly.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /etc/alist:/opt/alist/data <span class="token parameter variable">-p</span> <span class="token number">5244</span>:5244 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span> xhofe/alist:main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="specify-version" tabindex="-1"><a class="header-anchor" href="#specify-version" aria-hidden="true">#</a> Specify version</h3>`,9),d={href:"https://hub.docker.com/r/xhofe/alist",target:"_blank",rel:"noopener noreferrer"};function h(m,u){const s=l("ExternalLinkIcon");return r(),t("div",null,[p,e("p",null,[a("See "),e("a",d,[a("https://hub.docker.com/r/xhofe/alist"),o(s)]),a(" for details")])])}const b=n(c,[["render",h],["__file","docker.html.vue"]]);export{b as default};
