(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),p=(n(0),n(189)),o={id:"app.allSteps",title:"app.allSteps",sidebar_label:"app.allSteps"},c={unversionedId:"app.allSteps",id:"app.allSteps",isDocsHomePage:!1,title:"app.allSteps",description:"Input Parameters",source:"@site/docs/app-allSteps.md",slug:"/app.allSteps",permalink:"/ym-documentation/docs/app.allSteps",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-allSteps.md",version:"current",sidebar_label:"app.allSteps",sidebar:"docs",previous:{title:"app.ai",permalink:"/ym-documentation/docs/"},next:{title:"app.context",permalink:"/ym-documentation/docs/app.context"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(p.b)("p",null,"It is an Array contains info of each step id and slug as an object. "),Object(p.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(p.b)("h2",{id:"examples"},"Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),'app.log(app.allSteps);\n\n// the log will look like below\n[\n    {\n        "id": "5e31aa76069ba4001001e341",\n        "slug": "hi"\n    },\n    {\n        "id": "5e31aa8a7971bc0010d1f32a",\n        "slug": "bye"\n    }\n]\n')))}u.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(o,".").concat(m)]||s[m]||d[m]||p;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<p;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);