(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(174)),i={},c={unversionedId:"triggerJourney",id:"triggerJourney",isDocsHomePage:!1,title:"triggerJourney",description:"Input Parameters",source:"@site/docs/triggerJourney.md",slug:"/triggerJourney",permalink:"/docs/triggerJourney",version:"current",sidebar:"docs",previous:{title:"app.BOT_ENV",permalink:"/docs/app.BOT_ENV"},next:{title:"isBotPaused",permalink:"/docs/isBotPaused"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},'journey-slug : the slug name of the journey i.e. Journey name converted to kabab case.(Delete memory becomes delete-memory) (Mandetory),  "String type"'),Object(o.a)("li",{parentName:"ol"},'entities :any entites that are required by the journey (Optional) , "JSON object"'),Object(o.a)("li",{parentName:"ol"},'step : set of steps along with there values(optional), "JSON object"')),Object(o.a)("p",null,"\u200b"),Object(o.a)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"returns null. Trigger the mentioned journey if exist.\n\u200b")),Object(o.a)("h2",{id:"examples"},"Examples"),Object(o.a)("p",null,"\u200b"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"return app.triggerIntent(delete-memory, {}, {...data.steps});\n\n\n")),Object(o.a)("p",null,"\u200b"),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},"It usually is a good practice to return the above statement hence skipping any code below it.\nWhen doing a trigger Intent, all the context to that Intent( context.intent information) is reset to null values.")))}p.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(i,".").concat(b)]||m[b]||s[b]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);