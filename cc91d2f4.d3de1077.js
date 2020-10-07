(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(2),o=r(6),a=(r(0),r(189)),c={},s={unversionedId:"requestAndUncompressed",id:"requestAndUncompressed",isDocsHomePage:!1,title:"requestAndUncompressed",description:"//requestAndUncompressed",source:"@site/docs/requestAndUncompressed.md",slug:"/requestAndUncompressed",permalink:"/ym-documentation/docs/requestAndUncompressed",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/requestAndUncompressed.md",version:"current",sidebar:"docs",previous:{title:"renderTemplate",permalink:"/ym-documentation/docs/renderTemplate"},next:{title:"sanitizeHtml",permalink:"/ym-documentation/docs/sanitizeHtml"}},p=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={rightToc:p};function i(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"//requestAndUncompressed"),Object(a.b)("p",null,"app.requestAndUncompressed()"),Object(a.b)("h1",{id:"sampleformat"},"sampleFormat"),Object(a.b)("p",null,"\u200b\nThe function is used compress the options request from an api.\n\u200b"),Object(a.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"request option")),Object(a.b)("p",null,"\u200b"),Object(a.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"returns concatinated Buffer string.\n\u200b")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"\u200b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-let",metastring:"compressed = app.requestAndUncompressed(options)",compressed:!0,"":"","app.requestAndUncompressed(options)":!0}),"//here is a response from api.\n")),Object(a.b)("p",null,"await app.requestAndUncompressed();"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"\u200b\n> Please refer to the gunzip module https://www.geeksforgeeks.org/node-js-zlib-creategunzip-method/\n")))}i.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),i=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=i(r),m=n,b=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?o.a.createElement(b,s(s({ref:t},u),{},{components:r})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);