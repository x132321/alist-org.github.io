import{_ as l,W as d,X as c,Y as a,a0 as e,Z as t,$ as p,a1 as s,y as i}from"./framework.00b47ed6.js";const h={},u=s('<h3 id="为什么我在安装-升级后打开网页时出现错误-failed-get-storage-can-t-find-storage-with-rawpath" tabindex="-1"><a class="header-anchor" href="#为什么我在安装-升级后打开网页时出现错误-failed-get-storage-can-t-find-storage-with-rawpath" aria-hidden="true">#</a> 为什么我在安装/升级后打开网页时出现错误 <code>failed get storage: can&#39;t find storage with rawPath: /</code>？</h3><p>因为你还没有添加任何存储，点击底部登录后再次点击管理进入后台在存储页面添加存储。</p><h3 id="为什么我在-v3-中丢失了所有存储空间" tabindex="-1"><a class="header-anchor" href="#为什么我在-v3-中丢失了所有存储空间" aria-hidden="true">#</a> 为什么我在 v3 中丢失了所有存储空间</h3><p>新版本（V3 及更高版本）与 V2 不兼容，因此您需要重新添加存储。</p><h3 id="为什么我在日志中看到-failed-get-aria2-version-错误" tabindex="-1"><a class="header-anchor" href="#为什么我在日志中看到-failed-get-aria2-version-错误" aria-hidden="true">#</a> 为什么我在日志中看到 <code>failed get aria2 version</code> 错误？</h3><p>因为你没有安装 aria2 或者 aria2 的设置不对。不用担心，它不会影响 AList 的使用，你可以忽略它。</p><h3 id="为什么我在添加新存储时收到错误-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path" tabindex="-1"><a class="header-anchor" href="#为什么我在添加新存储时收到错误-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path" aria-hidden="true">#</a> 为什么我在添加新存储时收到错误 “Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path”？</h3>',7),g=a("strong",null,"独一无二",-1),m=s('<p>如果你在添加存储时看到了这个错误，但是你并没有在管理页面看到对应的重复条目，请使用 <code>Ctrl</code> +<code>F5</code> 强制刷新页面</p><h3 id="为什么我不能预览视频或音频文件" tabindex="-1"><a class="header-anchor" href="#为什么我不能预览视频或音频文件" aria-hidden="true">#</a> 为什么我不能预览视频或音频文件？</h3><ul><li>需要浏览器支持的编码才可以正常预览</li><li>一般浏览器不支持 H.265 编码视频</li><li>一般浏览器不支持 AC3 编码的音频</li></ul><p>特别是对于 Safari：</p><ul><li>对于跨域媒体，content-type 必须是媒体类型，而不是通用的 application/octet-stream。所以如果直链返回的 content-type 是 application/octet-stream，那么 Safari 就无法播放了。（PS：为什么 AliyunDrive 可以在 Safari 中播放？因为官网的视频播放不是使用的下载链接，是经过 AliyunDrive 转码后的）</li></ul><h3 id="为什么我不能预览-office-文件" tabindex="-1"><a class="header-anchor" href="#为什么我不能预览-office-文件" aria-hidden="true">#</a> 为什么我不能预览 Office 文件？</h3><p>对于 Microsoft Office 在线查看器，您需要：</p><ul><li>外部网络访问</li><li>文档访问地址不能直接使用 IP，需要通过域名访问，端口必须是 80/443 端口</li><li>文件的格式（必须是以下之一）：</li><li>Word：docx、docm、dotm、dotx</li><li>Excel：xlsx、xlsb、xls、xlsm</li><li>PowerPoint：pptx、ppsx、ppt、pps、pptm、potm、ppam、potx、ppsm</li><li>文档大小：Word 和 PowerPoint 文档必须小于 10 MB； Excel 必须小于 5 MB</li></ul><h3 id="为什么我不能预览-pdf-文件" tabindex="-1"><a class="header-anchor" href="#为什么我不能预览-pdf-文件" aria-hidden="true">#</a> 为什么我不能预览 PDF 文件？</h3><ul><li>我们使用 <code>pdf.js</code> 作为默认的 PDF 预览器。所以它需要 HTTPS + CORS。</li><li>HTTPS 需要自行打开，可以使用反向代理或在配置文件中提供证书</li><li>CORS 由相关云盘提供支持，不能自行修改，除非开启代理功能，使用程序传输</li></ul><h3 id="为什么无法打包下载" tabindex="-1"><a class="header-anchor" href="#为什么无法打包下载" aria-hidden="true">#</a> 为什么无法打包下载？</h3><p>与 PDF 预览相同，需要 HTTPS 和 CORS 支持，并且：</p><ul><li>AList 使用浏览器的 stream API 来支持打包下载，所以需要浏览器支持。通常这个 API 会被主流浏览器支持，例如 Chrome、Firefox、Edge 等。</li></ul><h3 id="为什么我上传文件时显示-uploading-in-backend" tabindex="-1"><a class="header-anchor" href="#为什么我上传文件时显示-uploading-in-backend" aria-hidden="true">#</a> 为什么我上传文件时显示 <code>Uploading in backend</code>？</h3><p>本程序所有上传均使用服务器传输，会消耗服务器流量与对应存储的API通信</p><h3 id="为什么我在上传文件时得到-http-413-错误" tabindex="-1"><a class="header-anchor" href="#为什么我在上传文件时得到-http-413-错误" aria-hidden="true">#</a> 为什么我在上传文件时得到 HTTP 413 错误？</h3><p>如果使用反向代理，可能需要在配置中指定最大上传文件大小(<code>client_max_body_size</code>)和超时时间</p><p>否则可能会出现上传成功但回应被web服务器阻止，导致前端超时无响应的情况</p><h3 id="为什么添加了-aliyundrive-存储后下载不了文件-出现-invalidargument-错误" tabindex="-1"><a class="header-anchor" href="#为什么添加了-aliyundrive-存储后下载不了文件-出现-invalidargument-错误" aria-hidden="true">#</a> 为什么添加了 <code>AliyunDrive</code> 存储后下载不了文件，出现 <code>InvalidArgument</code> 错误？</h3><p>由于 referer 限制，如果您不打开程序的任何代理中转功能，则必须使用移动端的 <code>refresh token</code></p><h3 id="为什么上传的件不显示-删除的文件还在-修改根目录不生效" tabindex="-1"><a class="header-anchor" href="#为什么上传的件不显示-删除的文件还在-修改根目录不生效" aria-hidden="true">#</a> 为什么上传的件不显示/删除的文件还在/修改根目录不生效？</h3><p>默认有半个小时的缓存，可以在添加存储页面修改。如果需要立即刷新，在需要刷新的目录点击右下角的刷新按钮即可。</p><h3 id="为什么我通过在终端输入-alist-admin获取的密码还是不正确" tabindex="-1"><a class="header-anchor" href="#为什么我通过在终端输入-alist-admin获取的密码还是不正确" aria-hidden="true">#</a> 为什么我通过在终端输入<code>./alist admin</code>获取的密码还是不正确？</h3><p>检查你运行<code>./alist admin</code>和启动alist的目录是否相同。 alist默认会读取你运行程序的当前目录下的配置，所以在不同的目录下运行会导致读取的数据不同。</p><hr><ul><li><strong>这里拿Windows举例</strong>：例如你的Alist文件在 <strong><code>D:\\Test\\Alist\\</code></strong> 这个文件夹里面，然后你直接在桌面启动了CMD命令运行窗口，然后把D盘里面的Alist拖动到命令运行窗口里面启动，然后它生成的配置文件实际上你现在的目录是在 <strong><code>C:\\Windows\\System32</code></strong> 这里（因为CMD默认是在这里），然后你获取密码也是获取了这个文件夹里面的密码，同时呢因为Alist它读取的是和Alist同级目录下的配置文件里面的密码，你去登录密码自然不对。 <ul><li><img src="https://pic.rmb.bdstatic.com/bjh/e9f64b5c99c4709bd48db0385322263e.png" alt="png"></li></ul></li><li>解决办法：你要到Alist所在的文件夹里面去在启动或者查看密码，例如上面的是在 <strong><code>D:\\Test\\Alist\\</code></strong> ，你就要手动去这个文件夹里面然后在输入启动命令或者查看密码的命令即可获取正确的密码 <ul><li><strong>Windows</strong>：去Alist所在的目录后在顶部地址栏输入 CMD回车这样然后再使用命令获取密码 <ul><li><img src="https://pic.rmb.bdstatic.com/bjh/720eddf065afa916634562bdad8d7786.gif" alt="Windows"></li></ul></li><li><strong>Linux</strong>：使用CD命令 到Alist所在的目录即可获取正确密码</li></ul></li></ul><h3 id="为什么提示-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat" tabindex="-1"><a class="header-anchor" href="#为什么提示-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat" aria-hidden="true">#</a> 为什么提示 System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat</h3>',27),f={href:"https://github.com/alist-org/alist/discussions/2399",target:"_blank",rel:"noopener noreferrer"},b=a("strong",null,"详情查看点击查看",-1),x=s('<h3 id="两个上传有什么区别" tabindex="-1"><a class="header-anchor" href="#两个上传有什么区别" aria-hidden="true">#</a> 两个上传有什么区别?</h3><p><strong>1️⃣ stream</strong>直接把文件二进制内容放进body中，这样后端可以使用很少的内存，但是浏览器可能会限制大小因为要一次性把文件读进内存。</p><p><strong>2️⃣ form</strong>是把文件包裹成formdata上传，后端使用的内存会多一些，但是不限制大小。</p><h3 id="两个aria2有什么不同" tabindex="-1"><a class="header-anchor" href="#两个aria2有什么不同" aria-hidden="true">#</a> 两个Aria2有什么不同?</h3><p>1️⃣ 后台管理 --&gt; 设置 --&gt; 其他：<strong>这里的Aria2是用于离线下载资源到网盘内</strong></p><p>2️⃣ 前端界面 --&gt; 本地设置（右下角齿轮） --&gt; <strong>这里的Aria2是用于将网盘内的资源下载到本地，相当于一种下载方式，人人都可以用不用担心有问题</strong></p><ul><li>至于第一个离线下载怎么使用： <ul><li>例如你想在 <strong><code>/天翼云盘/电视剧/测试</code></strong> 这个文件夹离线下载点儿资源，哪你就要先在后台填写好 **地址和秘钥信息 ** 再手动进入前端界面的这个文件夹，进去后右下角能看到 <strong>离线下载</strong> 图标（一个磁铁样式），点击后输入你要离线下载的链接即可</li><li><code>说明</code>：<strong>离线下载，复制，上传</strong> ，都是一样的方式都是先由资源 <strong>下载到服务器的临时文件夹</strong> 再由 <strong>服务器上传到对应的网盘</strong><ul><li>“复制”对于 <strong>部分不需要</strong> 计算Hash值的上传是可以不临时保存的，直接由服务器中转。</li></ul></li></ul></li></ul>',7),_=s('<h3 id="raidrive挂载百度网盘-可以下载文件-不能上传文件。往挂载目录丢文件提示-提示-你需要权限来执行此操作-。这个怎么解决" tabindex="-1"><a class="header-anchor" href="#raidrive挂载百度网盘-可以下载文件-不能上传文件。往挂载目录丢文件提示-提示-你需要权限来执行此操作-。这个怎么解决" aria-hidden="true">#</a> RaiDrive挂载百度网盘，可以下载文件，不能上传文件。往挂载目录丢文件提示“提示“你需要权限来执行此操作”。这个怎么解决？</h3><p>Raidrive 是因为上传文件会预先创建一个空文件 而百度网盘不允许创建空文件。 v2可以成功是因为v2会忽略空文件上传。</p><h3 id="为什么-terabox-挂载成功了-但是不显示内容" tabindex="-1"><a class="header-anchor" href="#为什么-terabox-挂载成功了-但是不显示内容" aria-hidden="true">#</a> 为什么 Terabox 挂载成功了 但是不显示内容？</h3><p>因为 <strong><code>Terabox</code></strong> 限制IP，如果你是本机非海外IP访问，是无法访问的，自然不会显示内容。</p><p>（可以用海外的机器，如果非得用本机(或者国内的机器)搭建，哪你自己想办法让Alist吃到<strong>proxy</strong>就可以）</p>',5),v={href:"https://github.com/alist-org/alist/discussions/3026",target:"_blank",rel:"noopener noreferrer"},k=s(`<h3 id="打开-alist-提示-system-error-typeerror-n-replaceall-is-not-a-function" tabindex="-1"><a class="header-anchor" href="#打开-alist-提示-system-error-typeerror-n-replaceall-is-not-a-function" aria-hidden="true">#</a> 打开 Alist 提示 System error: TypeError:n.replaceAll is not a function？</h3><p>你的浏览器内核版本太低，将如下添加到自定义头部即可.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果嫌太慢可以换阿里云</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later" tabindex="-1"><a class="header-anchor" href="#too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later" aria-hidden="true">#</a> Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.</h3><p><img src="https://pic.rmb.bdstatic.com/bjh/d72b5bad55dae6a3510adfd2768baf0f.png" alt="11"></p><p>连续登录输入6次密码错误就会锁定，重启Alist即可重置。</p><h3 id="添加文件上传时-有一个-添加为任务-的选项-是做什么的" tabindex="-1"><a class="header-anchor" href="#添加文件上传时-有一个-添加为任务-的选项-是做什么的" aria-hidden="true">#</a> 添加文件上传时，有一个“添加为任务“的选项，是做什么的?</h3><ul><li>勾选后上传到服务器(搭建Alist的机器)，再由服务器上传时到网盘时后台似乎能看到（好像是这样的）</li><li>未勾选不会看到，具体的大家可以看下图应该能看出什么问题.</li></ul><p><img src="https://pic.rmb.bdstatic.com/bjh/5a473909c0d90f3691af8818874a0643.jpeg" alt="Add"></p><h3 id="使用-sqlite3-发现-data-文件夹里面出现-data-db-shm、data-db-wal-两个多的文件" tabindex="-1"><a class="header-anchor" href="#使用-sqlite3-发现-data-文件夹里面出现-data-db-shm、data-db-wal-两个多的文件" aria-hidden="true">#</a> 使用 <strong><code>sqlite3</code></strong> 发现 data 文件夹里面出现 data.db-shm、data.db-wal 两个多的文件</h3>`,12),y={href:"https://stackoverflow.com/questions/7778723/what-are-the-db-shm-and-db-wal-extensions-in-sqlite-databases",target:"_blank",rel:"noopener noreferrer"},A=a("strong",null,"点击查看详细说明",-1),w=a("h3",{id:"想让游客登录后才能看到内容怎么设置",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#想让游客登录后才能看到内容怎么设置","aria-hidden":"true"},"#"),e(" 想让游客登录后才能看到内容怎么设置?")],-1),P=a("ol",null,[a("li",null,[e("将 "),a("strong",null,[a("code",null,"guest")]),e(" 用户看到的目录 指向一个空文件夹，然后写一个readme说明，别问怎么弄自行操作")]),a("li",null,"在元信息直接将根目录加密码"),a("li",null,"自行寻找其他办法解决.......")],-1);function S(T,C){const r=i("RouterLink"),n=i("ExternalLinkIcon"),o=i("FlowChart");return d(),c("div",null,[u,a("p",null,[e("想必错误信息表达的很清楚了。因为 "),t(r,{to:"/zh/guide/drivers/common.html#%E6%8C%82%E8%BD%BD%E8%B7%AF%E5%BE%84"},{default:p(()=>[e("挂载路径")]),_:1}),e(" 是"),g,e("的。")]),m,a("p",null,[e("你的油猴答题插件冲突了，关闭了即可"),a("a",f,[b,t(n)])]),x,t(o,{id:"flowchart-255",code:"eJwztLUrLkksKrFSeNre9nRJO5eRrV1+QWpRYklmfp6VwpMd3S/27n3aseHJji3Ppm97Nq39ye5tT5fs5DJGUfZsTu/TroVPZ654sX/2i4U9T3Z0PdmzgMsEzSiQINCo53snPp89g8vU1i41LwVo77qeZ+uncnEZahRlpmeUaOraGcFZxnCWCZxlygUAPgFUkA==",preset:"vue"}),_,a("p",null,[e("可能有用的案例参考："),a("strong",null,[a("a",v,[e("https://github.com/alist-org/alist/discussions/3026"),t(n)])])]),k,a("p",null,[a("a",y,[A,t(n)])]),w,P])}const E=l(h,[["render",S],["__file","why.html.vue"]]);export{E as default};