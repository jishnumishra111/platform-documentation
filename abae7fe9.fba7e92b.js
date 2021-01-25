(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(174)),o={},c={unversionedId:"app.context",id:"app.context",isDocsHomePage:!1,title:"app.context",description:"app.context contains entire data about the current journey",source:"@site/docs/app.context.md",slug:"/app.context",permalink:"/docs/app.context",version:"current",sidebar:"docs",previous:{title:"app.allSteps",permalink:"/docs/app.allSteps"},next:{title:"app.contextEndTime",permalink:"/docs/app.contextEndTime"}},l=[{value:"Arrays",id:"arrays",children:[{value:"dataHistory",id:"datahistory",children:[]},{value:"history",id:"history",children:[]}]},{value:"Objects",id:"objects",children:[{value:"steps",id:"steps",children:[]},{value:"journeyDetails",id:"journeydetails",children:[]}]},{value:"Properties",id:"properties",children:[{value:"intent | <code>string</code>",id:"intent--string",children:[]},{value:"journeyName | <code>string</code>",id:"journeyname--string",children:[]},{value:"journeyId | <code>string</code>",id:"journeyid--string",children:[]},{value:"complete | <code>boolean</code>",id:"complete--boolean",children:[]},{value:"invalidCount | <code>int</code>",id:"invalidcount--int",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)("p",null,"app.context contains entire data about the current journey"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'{\n    "dataHistory": [\n        {\n            "data": {\n                "message": "login"\n            },\n            "intent": "login",\n            "confidence": 0.908\n        },\n        {\n            "data": {\n                "message": "login"\n            },\n            "intent": "login",\n            "confidence": 0.908\n        },\n        {\n            "data": {\n                "message": "9876543210"\n            },\n            "intent": "trains-search",\n            "confidence": 0.23\n        },\n        {\n            "data": {\n                "message": "9222"\n            },\n            "intent": "trains-search",\n            "confidence": 0.23\n        }\n    ],\n    "history": [\n        {\n            "intent": "login",\n            "complete": true,\n            "steps": {\n                "mobilenumber": "9603490616",\n                "verifyotp": "9222"\n            }\n        }\n    ],\n    "intent": "login",\n    "journeyName": "Login",\n    "journeyId": "5e0daa1fe0f5fc001181f77a",\n    "steps": {\n        "mobilenumber": "9876543210",\n        "verifyotp": "9222"\n    },\n    "complete": true,\n    "journeyDetails": {\n        "steps": [\n            {\n                "id": "5e0daaabe0f5fc001181f77b",\n                "slug": "mobilenumber"\n            },\n            {\n                "id": "5e0dbf256debc20010b7f80b",\n                "slug": "verifyotp"\n            }\n        ],\n        "_id": "5e0daa1fe0f5fc001181f77a",\n        "createdDate": "2020-01-02T08:30:23.460Z",\n        "updatedDate": "2020-01-04T10:26:13.053Z",\n        "deleted": false,\n        "defaultJourney": false,\n        "actions": [\n            {\n                "type": "func",\n                "id": 0,\n                "func": "loginAction"\n            }\n        ],\n        "stepConditions": [],\n        "name": "Login",\n        "description": "Login journey",\n        "botId": "x1577939877999",\n        "categoryType": "Default Category",\n        "survey": false,\n        "slug": "login",\n        "__v": 83,\n        "initFunction": "loginInit"\n    },\n    "invalidCount": 0\n}\n')),Object(r.a)("h2",{id:"arrays"},"Arrays"),Object(r.a)("h3",{id:"datahistory"},"dataHistory"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"dataHistory"),"\xa0contains an array of most recent incoming messages,\nintent, and their confidences.\xa0"),Object(r.a)("h4",{id:"example"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"dataHistory": [\n        {\n            "data": {\n                "message": "login"\n            },\n            "intent": "login",\n            "confidence": 0.908\n        },\n        .\n        .\n        .\n        {\n            "data": {\n                "message": "9876543210"\n            },\n            "intent": "trains-search",\n            "confidence": 0.23\n        },\n        {\n            "data": {\n                "message": "9222"\n            },\n            "intent": "trains-search",\n            "confidence": 0.23\n        }\n    ]\n')),Object(r.a)("hr",null),Object(r.a)("h3",{id:"history"},"history"),Object(r.a)("p",null,"This ",Object(r.a)("inlineCode",{parentName:"p"},"history")," is an array which contains data about previous intents\nlike intent name, complete status, step values"),Object(r.a)("h4",{id:"example-1"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"history": [\n        {\n            "intent": "login",\n            "complete": true,\n            "steps": {\n                "mobilenumber": "9876543210",\n                "verifyotp": "9222"\n            }\n        }\n    ]\n')),Object(r.a)("hr",null),Object(r.a)("h2",{id:"objects"},"Objects"),Object(r.a)("h3",{id:"steps"},"steps"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("inlineCode",{parentName:"p"},"app.context.steps"),"\xa0is an object which contains\xa0key-value pairs\xa0of\nsteps and the step values (user inputs) in the format\xa0step_name:\nstep_value")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"A new step is added into\xa0",Object(r.a)("inlineCode",{parentName:"p"},"app.context.steps"),"\xa0only after the\nvalidation of that step.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"When it hits an intent, this steps object is initially empty"))),Object(r.a)("h4",{id:"example-2"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"steps": {\n        "mobilenumber": "9876543210",\n        "verifyotp": "9222"\n    },\n')),Object(r.a)("hr",null),Object(r.a)("h3",{id:"journeydetails"},"journeyDetails"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"journeyDetails "),"is an object which contains all details about the\ncurrent journey i.e. all the steps it has, actions, stepConditions,\nname, description, slug, intiFunction and etc.."),Object(r.a)("h4",{id:"example-3"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"journeyDetails": {\n        "steps": [\n            {\n                "id": "5e0daaabe0f5fc001181f77b",\n                "slug": "mobilenumber"\n            },\n            {\n                "id": "5e0dbf256debc20010b7f80b",\n                "slug": "verifyotp"\n            }\n        ],\n        "_id": "5e0daa1fe0f5fc001181f77a",\n        "createdDate": "2020-01-02T08:30:23.460Z",\n        "updatedDate": "2020-01-04T10:26:13.053Z",\n        "deleted": false,\n        "defaultJourney": false,\n        "actions": [\n            {\n                "type": "func",\n                "id": 0,\n                "func": "loginAction"\n            }\n        ],\n        "stepConditions": [],\n        "name": "Login",\n        "description": "Login journey",\n        "botId": "x1577939877999",\n        "categoryType": "Default Category",\n        "survey": false,\n        "slug": "login",\n        "__v": 83,\n        "initFunction": "loginInit"\n    }\n')),Object(r.a)("hr",null),Object(r.a)("h2",{id:"properties"},"Properties"),Object(r.a)("h3",{id:"intent--string"},"intent ","|"," ",Object(r.a)("inlineCode",{parentName:"h3"},"string")),Object(r.a)("p",null,"Has the value of journey slug"),Object(r.a)("h4",{id:"example-4"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"intent": "login"\n')),Object(r.a)("hr",null),Object(r.a)("h3",{id:"journeyname--string"},"journeyName ","|"," ",Object(r.a)("inlineCode",{parentName:"h3"},"string")),Object(r.a)("p",null,"Has the value of journey name"),Object(r.a)("h4",{id:"example-5"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"journeyName": "Login"\n')),Object(r.a)("hr",null),Object(r.a)("h3",{id:"journeyid--string"},"journeyId ","|"," ",Object(r.a)("inlineCode",{parentName:"h3"},"string")),Object(r.a)("p",null,"Has the value of journey id"),Object(r.a)("h4",{id:"example-6"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"journeyId": "5e0daa1fe0f5fc001181f77a"\n')),Object(r.a)("hr",null),Object(r.a)("h3",{id:"complete--boolean"},"complete ","|"," ",Object(r.a)("inlineCode",{parentName:"h3"},"boolean")),Object(r.a)("p",null,"States whether the journey is complete or not"),Object(r.a)("h4",{id:"example-7"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"complete": true\n')),Object(r.a)("hr",null),Object(r.a)("h3",{id:"invalidcount--int"},"invalidCount ","|"," ",Object(r.a)("inlineCode",{parentName:"h3"},"int")),Object(r.a)("p",null,"Has the value of invalid count i.e. how many times user data validation\nfails"),Object(r.a)("h4",{id:"example-8"},"example"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'"invalidCount": 0\n')))}p.isMDXComponent=!0},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,j=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return t?i.a.createElement(j,c(c({ref:n},s),{},{components:t})):i.a.createElement(j,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);