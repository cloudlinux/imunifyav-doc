(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{276:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"i",function(){return s}),e.d(n,"h",function(){return o}),e.d(n,"e",function(){return u}),e.d(n,"f",function(){return c}),e.d(n,"g",function(){return l}),e.d(n,"b",function(){return f}),e.d(n,"d",function(){return d}),e.d(n,"k",function(){return h}),e.d(n,"l",function(){return p}),e.d(n,"c",function(){return v}),e.d(n,"j",function(){return g});e(19),e(83),e(141),e(281),e(139),e(55),e(35),e(280),e(80),e(140),e(84);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var n=t.match(r),e=n?n[0]:"",i=o(t);return a.test(i)?t:i+".html"+e}function d(t,n){var e=t.hash,i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&o(t.path)===o(n)}function h(t,n,e){e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=o(n),i=0;i<t.length;i++)if(o(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:f(n)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function p(t,n,e,r){var i=e.pages,a=e.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var n=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map(function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}})}]}(t);var o=s.sidebar||a.sidebar;if(o){var u=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(e))return{base:e,config:n[e]};var r;return{}}(n,o),c=u.base,l=u.config;return l?l.map(function(t){return function t(n,e,r,i){if("string"==typeof n)return h(e,n,r);if(Array.isArray(n))return Object.assign(h(e,n[0],r),{title:n[1]});i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=n.children||[];return{type:"group",title:n.title,children:a.map(function(n){return t(n,e,r,!0)}),collapsable:!1!==n.collapsable}}(t,i,c)}):[]}return[]}function v(t){var n;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},277:function(t,n,e){"use strict";var r=e(1),i=e(24).some,a=e(37),s=e(15),o=a("some"),u=s("some");r({target:"Array",proto:!0,forced:!o||!u},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},280:function(t,n,e){"use strict";var r=e(81),i=e(9),a=e(14),s=e(17),o=e(85),u=e(82);r("match",1,function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var s=i(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var f,d=[],h=0;null!==(f=u(s,c));){var p=String(f[0]);d[h]=p,""===p&&(s.lastIndex=o(c,a(s.lastIndex),l)),h++}return 0===h?null:d}]})},281:function(t,n,e){e(1)({target:"Array",stat:!0},{isArray:e(36)})},288:function(t,n,e){"use strict";e.r(n);e(277),e(86),e(291);var r=e(276),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(n){return n===t.link}):"/"===this.link}},methods:{isExternal:r.e,isMailto:r.f,isTel:r.g}},a=e(34),s=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);n.default=s.exports},291:function(t,n,e){"use strict";var r=e(1),i=e(292);r({target:"String",proto:!0,forced:e(293)("link")},{link:function(t){return i(this,"a","href",t)}})},292:function(t,n,e){var r=e(17),i=/"/g;t.exports=function(t,n,e,a){var s=String(r(t)),o="<"+n;return""!==e&&(o+=" "+e+'="'+String(a).replace(i,"&quot;")+'"'),o+">"+s+"</"+n+">"}},293:function(t,n,e){var r=e(2);t.exports=function(t){return r(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})}},297:function(t,n,e){},324:function(t,n,e){"use strict";var r=e(297);e.n(r).a},342:function(t,n,e){"use strict";e.r(n);var r={components:{NavLink:e(288).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(e(324),e(34)),a=Object(i.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),e("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,function(n,r){return e("div",{key:r,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])}),0):t._e(),t._v(" "),e("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null);n.default=a.exports}}]);