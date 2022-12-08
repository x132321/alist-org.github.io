import{_ as d,W as r,X as n,Y as a,a0 as e,Z as o,$ as l,a1 as i,y as h}from"./framework.00b47ed6.js";const c={},s=i('<h3 id="为什么我在安装-升级后打开网页时出现错误-failed-get-storage-can-t-find-storage-with-rawpath" tabindex="-1"><a class="header-anchor" href="#为什么我在安装-升级后打开网页时出现错误-failed-get-storage-can-t-find-storage-with-rawpath" aria-hidden="true">#</a> 为什么我在安装/升级后打开网页时出现错误 <code>failed get storage: can&#39;t find storage with rawPath: /</code>？</h3><p>因为你还没有添加任何存储。</p><h3 id="为什么我在-v3-中丢失了所有存储空间" tabindex="-1"><a class="header-anchor" href="#为什么我在-v3-中丢失了所有存储空间" aria-hidden="true">#</a> 为什么我在 v3 中丢失了所有存储空间</h3><p>新版本（V3 及更高版本）与 V2 不兼容，因此您需要重新添加存储。</p><h3 id="为什么我在日志中看到-failed-get-aria2-version-错误" tabindex="-1"><a class="header-anchor" href="#为什么我在日志中看到-failed-get-aria2-version-错误" aria-hidden="true">#</a> 为什么我在日志中看到 <code>failed get aria2 version</code> 错误？</h3><p>因为你没有安装 aria2 或者 aria2 的设置不对。不用担心，它不会影响 AList 的使用，你可以忽略它。</p><h3 id="为什么我在添加新存储时收到错误-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path" tabindex="-1"><a class="header-anchor" href="#为什么我在添加新存储时收到错误-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path" aria-hidden="true">#</a> 为什么我在添加新存储时收到错误 “Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path”？</h3>',7),p=a("strong",null,"独一无二",-1),f=i('<p>如果你在添加存储时看到了这个错误，但是你并没有在管理页面看到对应的重复条目，请使用 <code>Ctrl</code> +<code>F5</code> 强制刷新页面</p><h3 id="为什么我不能预览视频或音频文件" tabindex="-1"><a class="header-anchor" href="#为什么我不能预览视频或音频文件" aria-hidden="true">#</a> 为什么我不能预览视频或音频文件？</h3><ul><li>需要浏览器支持的编码才可以正常预览</li><li>一般浏览器不支持 H.265 编码视频</li><li>一般浏览器不支持 AC3 编码的音频</li></ul><p>特别是对于 Safari：</p><ul><li>对于跨域媒体，content-type 必须是媒体类型，而不是通用的 application/octet-stream。所以如果直链返回的 content-type 是 application/octet-stream，那么 Safari 就无法播放了。（PS：为什么 AliyunDrive 可以在 Safari 中播放？因为官网的视频播放不是使用的下载链接，是经过 AliyunDrive 转码后的）</li></ul><h3 id="为什么我不能预览-office-文件" tabindex="-1"><a class="header-anchor" href="#为什么我不能预览-office-文件" aria-hidden="true">#</a> 为什么我不能预览 Office 文件？</h3><p>对于 Microsoft Office 在线查看器，您需要：</p><ul><li>外部网络访问</li><li>文档访问地址不能直接使用 IP，需要通过域名访问，端口必须是 80/443 端口</li><li>文件的格式（必须是以下之一）：</li><li>Word：docx、docm、dotm、dotx</li><li>Excel：xlsx、xlsb、xls、xlsm</li><li>PowerPoint：pptx、ppsx、ppt、pps、pptm、potm、ppam、potx、ppsm</li><li>文档大小：Word 和 PowerPoint 文档必须小于 10 MB； Excel 必须小于 5 MB</li></ul><h3 id="为什么我不能预览-pdf-文件" tabindex="-1"><a class="header-anchor" href="#为什么我不能预览-pdf-文件" aria-hidden="true">#</a> 为什么我不能预览 PDF 文件？</h3><ul><li>我们使用 <code>pdf.js</code> 作为默认的 PDF 预览器。所以它需要 HTTPS + CORS。</li><li>HTTPS 需要自行打开，可以使用反向代理或在配置文件中提供证书</li><li>CORS 由相关云盘提供支持，不能自行修改，除非开启代理功能，使用程序传输</li></ul><h3 id="为什么无法打包下载" tabindex="-1"><a class="header-anchor" href="#为什么无法打包下载" aria-hidden="true">#</a> 为什么无法打包下载？</h3><p>与 PDF 预览相同，需要 HTTPS 和 CORS 支持，并且：</p><ul><li>AList 使用浏览器的 stream API 来支持打包下载，所以需要浏览器支持。通常这个 API 会被主流浏览器支持，例如 Chrome、Firefox、Edge 等。</li></ul><h3 id="为什么我上传文件时显示-uploading-in-backend" tabindex="-1"><a class="header-anchor" href="#为什么我上传文件时显示-uploading-in-backend" aria-hidden="true">#</a> 为什么我上传文件时显示 <code>Uploading in backend</code>？</h3><p>本程序所有上传均使用服务器传输，会消耗服务器流量与对应存储的API通信</p><h3 id="为什么我在上传文件时得到-http-413-错误" tabindex="-1"><a class="header-anchor" href="#为什么我在上传文件时得到-http-413-错误" aria-hidden="true">#</a> 为什么我在上传文件时得到 HTTP 413 错误？</h3><p>如果使用反向代理，可能需要在配置中指定最大上传文件大小(<code>client_max_body_size</code>)和超时时间</p><p>否则可能会出现上传成功但回应被web服务器阻止，导致前端超时无响应的情况</p><h3 id="为什么添加了-aliyundrive-存储后下载不了文件-出现-invalidargument-错误" tabindex="-1"><a class="header-anchor" href="#为什么添加了-aliyundrive-存储后下载不了文件-出现-invalidargument-错误" aria-hidden="true">#</a> 为什么添加了 <code>AliyunDrive</code> 存储后下载不了文件，出现 <code>InvalidArgument</code> 错误？</h3><p>由于 referer 限制，如果您不打开程序的任何代理中转功能，则必须使用移动端的 <code>refresh token</code></p><h3 id="为什么上传的件不显示-删除的文件还在-修改根目录不生效" tabindex="-1"><a class="header-anchor" href="#为什么上传的件不显示-删除的文件还在-修改根目录不生效" aria-hidden="true">#</a> 为什么上传的件不显示/删除的文件还在/修改根目录不生效？</h3><p>默认有半个小时的缓存，可以在添加存储页面修改。如果需要立即刷新，在需要刷新的目录点击右下角的刷新按钮即可。</p><h3 id="为什么我通过在终端输入-alist-admin获取的密码还是不正确" tabindex="-1"><a class="header-anchor" href="#为什么我通过在终端输入-alist-admin获取的密码还是不正确" aria-hidden="true">#</a> 为什么我通过在终端输入<code>./alist admin</code>获取的密码还是不正确？</h3><p>检查你运行<code>./alist admin</code>和启动alist的目录是否相同。 alist默认会读取你运行程序的当前目录下的配置，所以在不同的目录下运行会导致读取的数据不同。</p>',24);function u(x,m){const t=h("RouterLink");return r(),n("div",null,[s,a("p",null,[e("想必错误信息表达的很清楚了。因为 "),o(t,{to:"/zh/guide/drivers/common.html#%E6%8C%82%E8%BD%BD%E8%B7%AF%E5%BE%84"},{default:l(()=>[e("挂载路径")]),_:1}),e(" 是"),p,e("的。")]),f])}const _=d(c,[["render",u],["__file","why.html.vue"]]);export{_ as default};