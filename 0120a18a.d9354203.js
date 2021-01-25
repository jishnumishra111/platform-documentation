(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||l[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(174)),s={id:"sendTextMessage",title:"sendTextMessage",sidebar_label:"sendTextMessage"},i={unversionedId:"sendTextMessage",id:"sendTextMessage",isDocsHomePage:!1,title:"sendTextMessage",description:"The process to sent text messages in the bot",source:"@site/docs/method-sendTextMessage.md",slug:"/sendTextMessage",permalink:"/docs/sendTextMessage",version:"current",sidebar_label:"sendTextMessage",sidebar:"docs",previous:{title:"app.phonetics",permalink:"/docs/app.phonetics"},next:{title:"executeFunction",permalink:"/docs/executeFunction"}},c=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The process to sent text messages in the bot"),Object(o.a)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.a)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.a)("h2",{id:"examples"},"Examples"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{}),"app.sendTextMessage(`Your message with value ${variable_name}`).then(() => {\n    // do this part if something has to be done only after sending the message\n})\n")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},"If the variable is a JS Object or a JSON Object, then using JSON.stringify(variable_name) would be better so that you don\u2019t miss any of the fields.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},"It would be better to not use text messages to display an object in practice, apart from testing and debugging purposes.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},"The function is asynchronous and hence it may happen that the text message may not come in the order that you expect. So, since the function is Promisified writing further instructions inside the .then block is the best practice.")))}u.isMDXComponent=!0}}]);