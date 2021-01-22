(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(175)),c={},i={unversionedId:"ask",id:"ask",isDocsHomePage:!1,title:"ask",description:"This function will send message/data to the specified bot",source:"@site/docs/ask.md",slug:"/ask",permalink:"/platform-documentation/docs/ask",editUrl:"https://github.com/yellowmessenger/ym-documentation/docs/ask.md",version:"current",sidebar:"docs",previous:{title:"customEntityRecognizer",permalink:"/platform-documentation/docs/customEntityRecognizer"},next:{title:"term",permalink:"/platform-documentation/docs/term"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example",id:"example",children:[]},{value:"Output Images",id:"output-images",children:[{value:"target bot",id:"target-bot",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function will send message/data to the specified bot\n\u200b"),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"botId"),Object(o.b)("li",{parentName:"ol"},"data")),Object(o.b)("p",null,"\u200b"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"No Output")),Object(o.b)("p",null,"(It will directly shows the data sent by the bot)"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'app.ask("x1602139738821", {\n        "message": "testing"\n    }).then((data) => {\n        \n    }).catch(error => {\n        // do somthing on fail\n    })\n')),Object(o.b)("h2",{id:"output-images"},"Output Images"),Object(o.b)("h3",{id:"target-bot"},"target bot"))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);