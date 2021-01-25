(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{174:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?r.a.createElement(b,c(c({ref:t},p),{},{components:a})):r.a.createElement(b,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(174)),i={},c={unversionedId:"app.memory",id:"app.memory",isDocsHomePage:!1,title:"app.memory",description:"This object contains methods for storing, accessing, deleting data in",source:"@site/docs/app.memory.md",slug:"/app.memory",permalink:"/docs/app.memory",version:"current",sidebar:"docs",previous:{title:"app.logger",permalink:"/docs/app.logger"},next:{title:"app.ai",permalink:"/docs/app.ai"}},o=[{value:"Methods",id:"methods",children:[]},{value:"set",id:"set",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]}]},{value:"get",id:"get",children:[{value:"Syntax",id:"syntax-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Return Value",id:"return-value-1",children:[]},{value:"Example",id:"example-1",children:[]}]},{value:"delete | del",id:"delete--del",children:[{value:"Syntax",id:"syntax-2",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"getMultiple",id:"getmultiple",children:[{value:"Syntax",id:"syntax-3",children:[]},{value:"Parameters",id:"parameters-3",children:[]},{value:"Return Value",id:"return-value-2",children:[]},{value:"Example",id:"example-3",children:[]}]}],p={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"This object contains methods for storing, accessing, deleting data in\nRedis In memory"),Object(l.a)("h2",{id:"methods"},"Methods"),Object(l.a)("h2",{id:"set"},"set"),Object(l.a)("p",null,"This method sets a value using the key in memory"),Object(l.a)("h3",{id:"syntax"},"Syntax"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.memory.set(key, data, expiry)\n.then(()=>{\n})\n.catch(()=>{\n});\n")),Object(l.a)("h3",{id:"parameters"},"Parameters"),Object(l.a)("h4",{id:"key--string"},"key ","|"," ",Object(l.a)("inlineCode",{parentName:"h4"},"string")),Object(l.a)("p",null,"A key to store the data"),Object(l.a)("h4",{id:"data--string-or-object"},"data ","|"," ",Object(l.a)("inlineCode",{parentName:"h4"},"string or object")),Object(l.a)("p",null,"The data to be stored in the memory"),Object(l.a)("h4",{id:"expiry--int--optional"},"expiry ","|"," ",Object(l.a)("inlineCode",{parentName:"h4"},"int")," ","|"," ",Object(l.a)("inlineCode",{parentName:"h4"},"optional")),Object(l.a)("p",null,"The expiry time in seconds. It is optional, the default value is\n",Object(l.a)("inlineCode",{parentName:"p"},"172800")," seconds ( 2 days )."),Object(l.a)("h3",{id:"return-value"},"Return Value"),Object(l.a)("p",null,"It returns a promise"),Object(l.a)("h3",{id:"example"},"Example"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.memory.set('mobile', '9876543210', 3600)\n.then(()=>{\n  //your code\n})\n.catch(()=>{\n  //memory set failed, deal with error\n})\n")),Object(l.a)("hr",null),Object(l.a)("h2",{id:"get"},"get"),Object(l.a)("p",null,"This method is used to access the stored data using the key."),Object(l.a)("h3",{id:"syntax-1"},"Syntax"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.memory.get(key)\n.then((value)=>{\n})\n.catch(()=>{\n});\n")),Object(l.a)("h3",{id:"parameters-1"},"Parameters"),Object(l.a)("h4",{id:"key--string-1"},"key ","|"," ",Object(l.a)("inlineCode",{parentName:"h4"},"string")),Object(l.a)("p",null,"A key for getting the stored data"),Object(l.a)("h3",{id:"return-value-1"},"Return Value"),Object(l.a)("p",null,"It returns a promise along with the data"),Object(l.a)("h3",{id:"example-1"},"Example"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.memory.get('mobile')\n.then((value)=>{\n  app.log(value);\n})\n.catch((error)=>{\n  //memory get failed deal with error\n  //may be key not found in the memory\n  app.log(error);\n});\n//if memory get success, the log will be\n\"9876543210\"\n//if memory get fails, the log will be\nkey mobile not found in memory\n")),Object(l.a)("hr",null),Object(l.a)("h2",{id:"delete--del"},"delete ","|"," del"),Object(l.a)("p",null,"This method deletes a value using the key in memory"),Object(l.a)("h3",{id:"syntax-2"},"Syntax"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.memory.delete(key) or app.memory.del(key)\n")),Object(l.a)("h3",{id:"parameters-2"},"Parameters"),Object(l.a)("h4",{id:"key--string-2"},"key ","|"," ",Object(l.a)("inlineCode",{parentName:"h4"},"string")),Object(l.a)("p",null,"A key to delete the data from the memory"),Object(l.a)("h3",{id:"example-2"},"Example"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.memory.delete('mobile') (or) app.memory.del('mobile')\n")),Object(l.a)("hr",null),Object(l.a)("h2",{id:"getmultiple"},"getMultiple"),Object(l.a)("p",null,"This method is used to get multiple values stored in memory"),Object(l.a)("h3",{id:"syntax-3"},"Syntax"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.memory.getMultiple(keys)\n.then((results)=>{\n})\n.catch(()=>{\n});\n")),Object(l.a)("h3",{id:"parameters-3"},"Parameters"),Object(l.a)("h4",{id:"keys--array"},"keys ","|"," ",Object(l.a)("inlineCode",{parentName:"h4"},"array")),Object(l.a)("p",null,"An array of keys to get values from memory"),Object(l.a)("h3",{id:"return-value-2"},"Return Value"),Object(l.a)("p",null,"It returns the results object containing key-value pairs"),Object(l.a)("h3",{id:"example-3"},"Example"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'app.memory.getMultiple([\'mobile\', \'name\'])\n.then((results)=>{\n  app.log(results);\n})\n.catch(()=>{\n  //deal with error\n});\n\n//the log will be\n{\n    "mobile": "9876543210",\n    "name": "Yellow Messenger"\n}\n')),Object(l.a)("hr",null))}s.isMDXComponent=!0}}]);