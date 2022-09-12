import{_ as n}from"./open-with.8e7e8a6b.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,e as o}from"./app.3577c12b.js";const t={},i=o(`<h1 id="\u9884\u89C8\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9884\u89C8\u8BBE\u7F6E" aria-hidden="true">#</a> \u9884\u89C8\u8BBE\u7F6E</h1><h3 id="\u6587\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u7C7B\u578B" aria-hidden="true">#</a> \u6587\u672C\u7C7B\u578B</h3><p>\u8981\u9884\u89C8\u4E3A\u6587\u672C\u7684\u6587\u4EF6\u7684\u6269\u5C55\u540D\uFF0C\u7528<code>,</code>\u5206\u9694\uFF0C\u4F8B\u5982<code>txt,md,go,tsx</code>\u3002</p><h3 id="\u97F3\u9891\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u97F3\u9891\u7C7B\u578B" aria-hidden="true">#</a> \u97F3\u9891\u7C7B\u578B</h3><p>\u60A8\u8981\u4F5C\u4E3A\u97F3\u9891\u9884\u89C8\u7684\u6587\u4EF6\u7684\u6269\u5C55\u540D\uFF0C\u4EE5<code>,</code>\u5206\u9694\uFF0C\u4F8B\u5982<code>mp3,wav,m4a</code>\u3002</p><h3 id="\u89C6\u9891\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u7C7B\u578B" aria-hidden="true">#</a> \u89C6\u9891\u7C7B\u578B</h3><p>\u8981\u9884\u89C8\u4E3A\u89C6\u9891\u7684\u6587\u4EF6\u7684\u6269\u5C55\u540D\uFF0C\u4EE5<code>,</code>\u5206\u9694\uFF0C\u4F8B\u5982<code>mp4,webm,ogg</code>\u3002</p><h3 id="\u56FE\u50CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u56FE\u50CF\u7C7B\u578B" aria-hidden="true">#</a> \u56FE\u50CF\u7C7B\u578B</h3><p>\u8981\u9884\u89C8\u4E3A\u56FE\u50CF\u7684\u6587\u4EF6\u7684\u6269\u5C55\u540D\uFF0C\u4EE5<code>,</code>\u5206\u9694\uFF0C\u4F8B\u5982<code>jpg,jpeg,png,gif,webp</code>\u3002</p><h3 id="\u4EE3\u7406\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u7C7B\u578B" aria-hidden="true">#</a> \u4EE3\u7406\u7C7B\u578B</h3><p>\u60A8\u8981\u5355\u72EC\u8BBE\u7F6E\u901A\u8FC7\u4EE3\u7406\u4E0B\u8F7D\u7684\u6587\u4EF6\u7684\u6269\u5C55\u540D</p><h3 id="\u5916\u90E8\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u9884\u89C8" aria-hidden="true">#</a> \u5916\u90E8\u9884\u89C8</h3><p>\u4E00\u4E2A\u5305\u542B\u5916\u90E8\u9884\u89C8\u8BBE\u7F6E\u7684json\u5BF9\u8C61\uFF0C\u5B9A\u4E49\u4E3A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>extensions<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//(url)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u4E2Akey <code>extensions</code>\u662F\u7528<code>,</code>\u5206\u5272\u7684\u6587\u4EF6\u6269\u5C55\u540D\uFF08\u5982\u679C\u662FstartsWith<code>/</code>\u4F1A\u88AB\u8BA4\u4E3A\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\uFF0Cvalue\u4E5F\u662F\u4E00\u4E2A<code>key-value</code>\u5BF9\u8C61\uFF0Ckey\u662F \u9884\u89C8\u540D\u79F0\uFF0C\u503C\u4E3A\u5916\u90E8\u7F51\u5740\u3002</p><p>\u5BF9\u4E8E\u5916\u90E8 url\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u53D8\u91CF\u4F9B\u60A8\u4F7F\u7528\uFF1A</p><ul><li><code>$url</code>: the file url</li><li><code>$name</code>: the file name</li><li><code>$e_url</code>: encodeURIComponent($url)</li><li><code>$b_url</code>: btoa($url)</li><li><code>$eb_url</code>: encodeURIComponent(btoa($url))</li></ul><p>\u6700\u540E\uFF0C\u5F53\u5F53\u524D\u6587\u4EF6\u4E0E\u201C\u6269\u5C55\u201D\u5339\u914D\u65F6\uFF0C\u201C\u5916\u90E8\u9884\u89C8\u201D\u5C06\u663E\u793A\u201C\u6253\u5F00\u65B9\u5F0F\u201D\u83DC\u5355\u3002</p><p>\u4F8B\u5982\uFF0C\u5C06\u201C\u5916\u90E8\u9884\u89C8\u201D\u8BBE\u7F6E\u4E3A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;txt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Notepad&quot;</span><span class="token operator">:</span> <span class="token string">&quot;notepad://$url&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;/.*/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;VSCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode://$url&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u8F93\u5165\u4E00\u4E2A\u6269\u5C55\u540D\u4E3A <code>txt</code> \u7684\u6587\u4EF6\u65F6\uFF0C\u5B83\u4F1A\u663E\u793A\uFF1A</p><p><img src="`+n+`" alt="Open-with"></p><h3 id="iframe-\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#iframe-\u9884\u89C8" aria-hidden="true">#</a> iframe \u9884\u89C8</h3><p>\u7C7B\u4F3C\u4E8E <code>External previews</code>\uFF0C\u4F46\u5B83\u4F1A\u76F4\u63A5\u5728\u5F53\u524D\u9875\u9762\u4E2D\u5D4C\u5165 iframe\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u60F3\u4F7F\u7528\u81EA\u90E8\u7F72\u7684onlyoffice\u9884\u89C8office\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;doc,docx,xls,xlsx,ppt,pptx&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;OnlyOffice&quot;</span><span class="token operator">:</span> <span class="token string">&quot;you_only_office_url&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u97F3\u9891\u5C01\u9762" tabindex="-1"><a class="header-anchor" href="#\u97F3\u9891\u5C01\u9762" aria-hidden="true">#</a> \u97F3\u9891\u5C01\u9762</h3><p>\u9ED8\u8BA4\u97F3\u9891\u5C01\u9762\u3002</p><h3 id="\u97F3\u9891\u81EA\u52A8\u64AD\u653E" tabindex="-1"><a class="header-anchor" href="#\u97F3\u9891\u81EA\u52A8\u64AD\u653E" aria-hidden="true">#</a> \u97F3\u9891\u81EA\u52A8\u64AD\u653E</h3><p>\u662F\u5426\u81EA\u52A8\u64AD\u653E\u97F3\u9891\u6587\u4EF6\u3002</p><h3 id="\u89C6\u9891\u81EA\u52A8\u64AD\u653E" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u81EA\u52A8\u64AD\u653E" aria-hidden="true">#</a> \u89C6\u9891\u81EA\u52A8\u64AD\u653E</h3><p>\u662F\u5426\u81EA\u52A8\u64AD\u653E\u89C6\u9891\u6587\u4EF6\u3002</p>`,31),p=[i];function c(d,r){return e(),s("div",null,p)}const v=a(t,[["render",c],["__file","preview.html.vue"]]);export{v as default};