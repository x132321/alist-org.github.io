import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e as n}from"./app.bb6a41b5.js";const t="/img/config/open-with.png",o={},i=n(`<h1 id="preview-settings" tabindex="-1"><a class="header-anchor" href="#preview-settings" aria-hidden="true">#</a> Preview settings</h1><h3 id="text-types" tabindex="-1"><a class="header-anchor" href="#text-types" aria-hidden="true">#</a> Text types</h3><p>The extensions of the files you want to preview as text, split by <code>,</code>, such as <code>txt,md,go,tsx</code>.</p><h3 id="audio-types" tabindex="-1"><a class="header-anchor" href="#audio-types" aria-hidden="true">#</a> Audio types</h3><p>The extensions of the files you want to preview as audio, split by <code>,</code>, such as <code>mp3,wav,m4a</code>.</p><h3 id="video-types" tabindex="-1"><a class="header-anchor" href="#video-types" aria-hidden="true">#</a> Video types</h3><p>The extensions of the files you want to preview as video, split by <code>,</code>, such as <code>mp4,webm,ogg</code>.</p><h3 id="image-types" tabindex="-1"><a class="header-anchor" href="#image-types" aria-hidden="true">#</a> Image types</h3><p>The extensions of the files you want to preview as image, split by <code>,</code>, such as <code>jpg,jpeg,png,gif,webp</code>.</p><h3 id="proxy-types" tabindex="-1"><a class="header-anchor" href="#proxy-types" aria-hidden="true">#</a> Proxy types</h3><p>The extensions of the files you want to separately set to download through proxy</p><h3 id="external-previews" tabindex="-1"><a class="header-anchor" href="#external-previews" aria-hidden="true">#</a> External previews</h3><p>A json object that contains the external preview settings, It is defined as</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>extensions<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//(url)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>the first key <code>extensions</code> is the file extensions that split by <code>,</code>(if it&#39;s startsWith <code>/</code>, it will be considered a regular expression), and the value is also a <code>key-value</code> object, the key is the preview name, and the value is the external url.</p><p>For the external url, we provide some variables for you to use:</p><ul><li><code>$url</code>: the file url</li><li><code>$name</code>: the file name</li><li><code>$e_url</code>: encodeURIComponent($url)</li><li><code>$b_url</code>: btoa($url)</li><li><code>$eb_url</code>: encodeURIComponent(btoa($url))</li></ul><p>Finally, the <code>External previews</code> will displayed a <code>Open with</code> menu while current file matched the <code>extensions</code>.</p><p>For example, set <code>External previews</code> to</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;txt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Notepad&quot;</span><span class="token operator">:</span> <span class="token string">&quot;notepad://$url&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;/.*/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;VSCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode://$url&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>when we enter a file with the extension <code>txt</code>, it will show:</p><p><img src="`+t+'" alt="Open-with"></p><h3 id="iframe-previews" tabindex="-1"><a class="header-anchor" href="#iframe-previews" aria-hidden="true">#</a> Iframe previews</h3><p>Similar to <code>External previews</code>, but it will embed an iframe in current page directly.</p><h3 id="audio-cover" tabindex="-1"><a class="header-anchor" href="#audio-cover" aria-hidden="true">#</a> Audio cover</h3><p>The default audio cover.</p><h3 id="audio-autoplay" tabindex="-1"><a class="header-anchor" href="#audio-autoplay" aria-hidden="true">#</a> Audio autoplay</h3><p>Whether to automatically play audio files.</p><h3 id="video-autoplay" tabindex="-1"><a class="header-anchor" href="#video-autoplay" aria-hidden="true">#</a> Video autoplay</h3><p>Whether to automatically play video files.</p>',30),p=[i];function r(d,c){return a(),s("div",null,p)}const h=e(o,[["render",r],["__file","preview.html.vue"]]);export{h as default};
