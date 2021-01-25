(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{174:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(a),b=n,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||c;return a?r.a.createElement(f,p(p({ref:t},i),{},{components:a})):r.a.createElement(f,p({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(174)),o={},p={unversionedId:"app.data",id:"app.data",isDocsHomePage:!1,title:"app.data",description:"an object which holds the current user\u2019s typed message, uploaded file or",source:"@site/docs/app.data.md",slug:"/app.data",permalink:"/docs/app.data",version:"current",sidebar:"docs",previous:{title:"app.createdUserMessageObject",permalink:"/docs/app.createdUserMessageObject"},next:{title:"app.dataStore",permalink:"/docs/app.dataStore"}},l=[],i={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"an object which holds the current user\u2019s typed message, uploaded file or\nany event triggered in the app."),Object(c.a)("hr",null),Object(c.a)("p",null,"If bot receives user\u2019s message, the app.data will be"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'{\n    "message": "hello!"\n}\n')),Object(c.a)("hr",null),Object(c.a)("p",null,"If bot receives an image, the app.data will be"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'{\n    "image": "https://cdn.yellowmessenger.com/H79Mp47********.png"\n}\n')),Object(c.a)("hr",null),Object(c.a)("p",null,"If bot receives a file, the app.data will be"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'{\n    "file": "https://cdn.yellowmessenger.com/Erz22x********.zip"\n}\n')),Object(c.a)("hr",null),Object(c.a)("p",null,"If bot receives an event, the app.data will be"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'{\n    "event": {\n        "code": "event_code",\n        "data": "some_value"\n    }\n}\n')),Object(c.a)("p",null,"the ",Object(c.a)("inlineCode",{parentName:"p"},"data")," can be anything that is attached to the event by the source\nwhich is triggering the event."))}s.isMDXComponent=!0}}]);