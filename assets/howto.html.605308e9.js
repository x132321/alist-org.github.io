import{_ as r,W as l,X as c,Y as e,a0 as a,Z as n,$ as o,a1 as s,y as d}from"./framework.00b47ed6.js";const h={},p=e("h3",{id:"how-to-add-password-for-a-file-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-add-password-for-a-file-folder","aria-hidden":"true"},"#"),a(" How to add password for a file/folder?")],-1),u=e("h3",{id:"how-to-reverse-proxy-with-sub-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-reverse-proxy-with-sub-directory","aria-hidden":"true"},"#"),a(" How to reverse proxy with sub directory?")],-1),m={href:"https://nn.ci/alist:",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"Normal installation",-1),f=e("code",null,"https://nn.ci/alist",-1),g=e("code",null,"alist",-1),_=e("li",null,"Add a reverse proxy record in nginx",-1),w=s(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /alist/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Range <span class="token variable">$http_range</span></span><span class="token punctuation">;</span>
	  <span class="token directive"><span class="token keyword">proxy_set_header</span> If-Range <span class="token variable">$http_if_range</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5244/</span><span class="token punctuation">;</span>
    <span class="token comment"># the max size of file to upload</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">20000m</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-get-password-if-i-forget-it" tabindex="-1"><a class="header-anchor" href="#how-to-get-password-if-i-forget-it" aria-hidden="true">#</a> How to get password if i forget it?</h3><p>If you are the owner of the site, you can get the admin&#39;s info by run <code>./alist admin</code> in the terminal. Otherwise you can ask the owner to reset the password.</p><h3 id="how-to-modify-the-listening-port​" tabindex="-1"><a class="header-anchor" href="#how-to-modify-the-listening-port​" aria-hidden="true">#</a> How to modify the listening port​</h3>`,4),b=e("h3",{id:"how-to-upgrade",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-upgrade","aria-hidden":"true"},"#"),a(" How to upgrade")],-1),k=e("p",null,"Except for the incompatible version marked in the changelog, you can directly replace the binary file to upgrade.",-1),y=e("p",null,"For docker user, just remove the old container and pull the new image then run it.",-1),x=e("h3",{id:"how-to-allow-guest-to-upload-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-allow-guest-to-upload-files","aria-hidden":"true"},"#"),a(" How to allow guest to upload files")],-1),q=e("code",null,"write",-1),C=s('<h3 id="how-to-remove-powered-by-alist-at-the-bottom-​" tabindex="-1"><a class="header-anchor" href="#how-to-remove-powered-by-alist-at-the-bottom-​" aria-hidden="true">#</a> How to remove <code>powered_by Alist</code> at the bottom?​</h3><p>According to our open source license: Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. <strong>Copyright and license notices must be preserved.</strong> Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.</p><h3 id="when-adding-a-189cloud-storage-the-device-id-does-not-exist-and-a-secondary-device-verification-is-required​" tabindex="-1"><a class="header-anchor" href="#when-adding-a-189cloud-storage-the-device-id-does-not-exist-and-a-secondary-device-verification-is-required​" aria-hidden="true">#</a> When adding a 189Cloud storage: the device ID does not exist, and a secondary device verification is required​</h3><p>It may be that the risk detection system has been triggered. Please changing the password, then, add it again.</p><h3 id="when-adding-tianyi-cloud-disk-client-storage-prompt-need-img-validate-code-verification-code" tabindex="-1"><a class="header-anchor" href="#when-adding-tianyi-cloud-disk-client-storage-prompt-need-img-validate-code-verification-code" aria-hidden="true">#</a> When adding Tianyi cloud disk client storage: prompt need img validate code: verification code</h3>',5),H=e("li",null,"Click Edit, write the verification code you just saw into the configuration and click Save",-1),I=e("li",null,"Click Edit and turn on the Do not use OCR button",-1),A={href:"https://alist.nn.ci/zh/config/global.html#ocr-api",target:"_blank",rel:"noopener noreferrer"},B=e("strong",null,"Ocr interface",-1),E=s(`<h3 id="tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers" tabindex="-1"><a class="header-anchor" href="#tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers" aria-hidden="true">#</a> TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers?</h3><p>For network problems such as these, please troubleshoot and solve them yourself.Don&#39;t create any issues for this.</p><h3 id="how-to-add-epub-reading" tabindex="-1"><a class="header-anchor" href="#how-to-add-epub-reading" aria-hidden="true">#</a> How to add epub reading</h3><p>Background --&gt; Settings --&gt; Preview --&gt; Iframe preview, written behind the PDF</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> /*The comma below is also oh, don’t copy this comment, start copying from the second line*/
,
  &quot;epub&quot;: {
    &quot;EPUB.js&quot;:&quot;/static/epub.js/viewer.html?url=$e_url&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Version 3.7.x and above already support &quot;.epub&quot; reading, But you need to add it manually (because the database has already been created, it is not good to overwrite it for you, and you will make mistakes) If it is the first installation and startup (version 3.7.x and higher), no need to add it manually</p>`,6);function R($,P){const t=d("RouterLink"),i=d("ExternalLinkIcon");return l(),c("div",null,[p,e("p",null,[a("Add a "),n(t,{to:"/guide/advanced/meta.html"},{default:o(()=>[a("meta")]),_:1}),a(" record.")]),u,e("p",null,[a("An example of using nginx to reverse proxy to "),e("a",m,[a("https://nn.ci/alist:"),n(i)])]),e("ul",null,[v,e("li",null,[a("Set "),n(t,{to:"/config/site.html#api-url"},{default:o(()=>[a("Api url")]),_:1}),a(" to "),f,a(", "),n(t,{to:"/config/site.html#base-path"},{default:o(()=>[a("Base path")]),_:1}),a(" to "),g,a(" and click save button")]),_]),w,e("p",null,[a("Refer to "),n(t,{to:"/config/configuration.html#port"},{default:o(()=>[a("config")]),_:1})]),b,k,y,x,e("p",null,[a("Add a "),n(t,{to:"/guide/advanced/meta.html"},{default:o(()=>[a("meta")]),_:1}),a(" record, and open "),q,a(" field.")]),C,e("ul",null,[H,I,e("li",null,[a("Or build it yourself "),e("a",A,[B,n(i)])])]),E])}const L=r(h,[["render",R],["__file","howto.html.vue"]]);export{L as default};