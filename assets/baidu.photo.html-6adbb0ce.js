import{_ as n,N as a,a0 as i,Q as e,a2 as t,a1 as l,G as r}from"./framework-c1c045a5.js";const s={},d=e("h1",{id:"moment-album",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#moment-album","aria-hidden":"true"},"#"),t(" Moment album")],-1),u=e("h2",{id:"refresh-token-same-as-baidu-netdisk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#refresh-token-same-as-baidu-netdisk","aria-hidden":"true"},"#"),t(" Refresh token (same as Baidu Netdisk)")],-1),h={href:"https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1",target:"_blank",rel:"noopener noreferrer"},c=e("h2",{id:"album-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#album-id","aria-hidden":"true"},"#"),t(" album_id")],-1),_=e("li",null,[e("p",null,[e("strong",null,"When the default is empty, all albums in the root directory will be displayed directly.")])],-1),m=e("li",null,[e("p",null,"If you want to mount a single album, you need to fill in the following content")],-1),b=e("li",null,[e("p",null,"album_id should be filled in: {album_id}|{tid} Example: 4021858707431029901|316519298447849660")],-1),p=e("p",null,"{album_id} : After entering the album you need to mount, the ID after viewing the top link /album is {album_id}",-1),f={href:"https://photo.baidu.com/photo/web/album/4021858707431029901",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[e("strong",null,"4021858707431029901"),t(" is {album_id}")],-1),g={href:"https://photo.baidu.com/youai/album/v1/list",target:"_blank",rel:"noopener noreferrer"},y=e("ul",null,[e("li",null,[t("After entering the interface, "),e("code",null,"Ctrl+F"),t(" searches for the ID above, and you can see the corresponding {tid} in the following lines")])],-1);function v(x,w){const o=r("ExternalLinkIcon");return a(),i("div",null,[d,u,e("p",null,[e("a",h,[t("Click here"),l(o)]),t(" to get the refresh token.")]),c,e("ul",null,[_,m,b,e("li",null,[p,e("ul",null,[e("li",null,[e("a",f,[t("https://photo.baidu.com/photo/web/album/4021858707431029901"),l(o)])]),k])]),e("li",null,[e("p",null,[t("{tid}: Visit "),e("strong",null,[e("a",g,[t("https://photo.baidu.com/youai/album/v1/list"),l(o)])]),t(" to get it.")]),y])])])}const I=n(s,[["render",v],["__file","baidu.photo.html.vue"]]);export{I as default};
