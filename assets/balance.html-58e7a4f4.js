import{_ as e,N as a,a4 as t,a6 as o}from"./framework-90372ca6.js";const n={},l=o('<h1 id="load-balancing" tabindex="-1"><a class="header-anchor" href="#load-balancing" aria-hidden="true">#</a> Load balancing</h1><p>It is required that the file structures in the two storages are exactly the same, and the program will automatically poll all storages for download/request.</p><p>Different network disks can be used, but the file directories must be consistent.</p><h3 id="how-to-use​" tabindex="-1"><a class="header-anchor" href="#how-to-use​" aria-hidden="true">#</a> how to use​</h3><p>One storage can be added normally, and the other storage can be added with the mount path of <code>the first storage mount path + .balance + any other content</code>. E.g:</p><ul><li>Storage 1: test</li><li>Storage 2: test.balance1</li><li>Storage 3: test.balance2</li><li>Storage 4: test.balance3</li><li>...</li><li>Storage n: test.balancen</li></ul>',6),r=[l];function s(i,c){return a(),t("div",null,r)}const h=e(n,[["render",s],["__file","balance.html.vue"]]);export{h as default};