(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(174)),l={id:"app.logger",title:"app.logger"},i={unversionedId:"app.logger",id:"app.logger",isDocsHomePage:!1,title:"app.logger",description:"This object contains log method to log data to console",source:"@site/docs/app-logger.md",slug:"/app.logger",permalink:"/docs/app.logger",version:"current",sidebar:"docs",previous:{title:"app.allFunctions",permalink:"/docs/app.allFunctions"},next:{title:"app.memory",permalink:"/docs/app.memory"}},c=[{value:"Methods",id:"methods",children:[]},{value:"log",id:"log",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"This object contains ",Object(o.a)("inlineCode",{parentName:"p"},"log")," method to log data to console"),Object(o.a)("h2",{id:"methods"},"Methods"),Object(o.a)("h2",{id:"log"},"log"),Object(o.a)("p",null,"This method logs data to the console (debugging purpose)"),Object(o.a)("h3",{id:"syntax"},"Syntax"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.logger.log(data, tag);\nor\napp.log(data, tag);\n")),Object(o.a)("h3",{id:"parameters"},"Parameters"),Object(o.a)("h4",{id:"data"},"data"),Object(o.a)("p",null,"This is data to be logged to the console. This can be a string, int,\nobject, boolean"),Object(o.a)("h4",{id:"tag--optional"},"tag ","|"," ",Object(o.a)("inlineCode",{parentName:"h4"},"optional")),Object(o.a)("p",null,"This is similar to the key to identify logged data. This is optional,\nthe default value is ",Object(o.a)("inlineCode",{parentName:"p"},"tag")),Object(o.a)("h3",{id:"example"},"Example"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let message = "This is sample log";\napp.log(message, "test log");\n//the log will be\ntest log:  This is sample log\n')),Object(o.a)("hr",null))}s.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);