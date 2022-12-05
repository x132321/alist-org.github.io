import{_ as s,a,b as c}from"./onedrive-update-permission.fedec537.js";import{_ as l,W as d,X as h,Y as e,a0 as t,Z as n,$ as _,a1 as u,y as i}from"./framework.00b47ed6.js";const p={},f=e("h1",{id:"onedrive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#onedrive","aria-hidden":"true"},"#"),t(" OneDrive")],-1),m={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"提示",-1),b={href:"https://tool.nn.ci/onedrive/request",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"创建应用​",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建应用​","aria-hidden":"true"},"#"),t(" 创建应用​")],-1),x=e("blockquote",null,[e("p",null,"你也可以选择跳过此步，使用默认提供的client，但是需要组织管理员批准。")],-1),B=e("li",null,"在打开的页面，选择所在区域，点击创建应用",-1),k={href:"https://tool.nn.ci/onedrive/callback",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"client_id",-1),A=e("img",{src:s,alt:"client_id"},null,-1),F=e("li",null,[t('注册好应用程序之后，选择"证书和密码"，点击"新客户端密码"，输入一串密码，选择时间为最长的那个，点击"添加" （注：在添加之后输入的密码之后会消失，请记录下来 '),e("code",null,"client_secret"),t(" 的值） "),e("img",{src:a,alt:"client_secret"})],-1),V=e("li",null,[t('选择 "API 权限"，点击 "Microsoft Graph"，在"选择权限"中输入 '),e("code",null,"file"),t("，勾选 "),e("code",null,"Files.read"),t('（注：Files.read 是只读最小权限，图中权限较大，也同样可以），点击"确定" '),e("img",{src:c,alt:"api"})],-1),q=e("h2",{id:"获取刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取刷新令牌","aria-hidden":"true"},"#"),t(" 获取刷新令牌")],-1),C=e("code",null,"client_id",-1),I=e("code",null,"client_secret",-1),L={href:"https://tool.nn.ci/onedrive/request%EF%BC%8C%E7%82%B9%E5%87%BB%22%E8%8E%B7%E5%8F%96%E5%88%B7%E6%96%B0%E4%BB%A4%E7%89%8C%22%E5%8D%B3%E5%8F%AF",target:"_blank",rel:"noopener noreferrer"},P=u('<h2 id="获取-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#获取-sharepoint-site-id" aria-hidden="true">#</a> 获取 SharePoint site_id</h2><p>如果需要挂载 SharePoint，完成上一步后，在显示刷新令牌的界面会出现一个输入站点地址，输入站点地址后点击获取 <code>site_id</code> 即可。</p><h2 id="添加账号" tabindex="-1"><a class="header-anchor" href="#添加账号" aria-hidden="true">#</a> 添加账号</h2><p>将上述过程中获取得到的值依次填入即可。</p><h2 id="根目录路径" tabindex="-1"><a class="header-anchor" href="#根目录路径" aria-hidden="true">#</a> 根目录路径</h2><p>默认为 <code>/</code>，如果需要自定义，就填路径就行，从根路径开始，和本地路径一样，比如 <code>/test</code></p>',6);function D(N,R){const r=i("RouterLink"),o=i("ExternalLinkIcon");return d(),h("div",null,[f,e("div",m,[v,e("p",null,[t("如果你的账号不支持 API，（比如学校账号没有验证管理员，或者管理员禁用了 API），那么你也可以通过 WebDAV 挂载。 有关详细信息，请参阅 "),n(r,{to:"/zh/guide/drivers/webdav.html"},{default:_(()=>[t("WevDAV 页面")]),_:1})])]),e("p",null,[t("首先打开 "),e("a",b,[t("https://tool.nn.ci/onedrive/request"),n(o)])]),E,x,e("ul",null,[B,e("li",null,[t('登陆后选择"注册应用程序"，输入"名称"，选择"任何组织目录中的账户和个人"（注意这里不要看位置选择而是看文字，部分人可能是中间那个选项，不要选成单一租户或者其他选项，否则会导致登陆时出现问题），输入重定向 URL 为 '),e("a",k,[t("https://tool.nn.ci/onedrive/callback"),n(o)]),t(" ，点击注册即可，然后可以得到 "),g,A]),F,V]),q,e("p",null,[t("将上一步骤中获得的 "),C,t(" 和 "),I,t(" 填入 "),e("a",L,[t('https://tool.nn.ci/onedrive/request，点击"获取刷新令牌"即可'),n(o)])]),P])}const w=l(p,[["render",D],["__file","onedrive.html.vue"]]);export{w as default};
