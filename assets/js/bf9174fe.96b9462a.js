"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"convert-json-data-to-structure-data",title:"\u5c06JSON\u6570\u636e\u8f6c\u6362\u4e3a\u7ed3\u6784\u4f53\u6570\u636e",authors:["JeffWang"],tags:["ios","SwiftUI"]},l=void 0,i={permalink:"/blog/convert-json-data-to-structure-data",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-04-30-\u5c06JSON\u6570\u636e\u8f6c\u6362\u4e3a\u7ed3\u6784\u4f53\u6570\u636e/index.md",source:"@site/blog/2020-04-30-\u5c06JSON\u6570\u636e\u8f6c\u6362\u4e3a\u7ed3\u6784\u4f53\u6570\u636e/index.md",title:"\u5c06JSON\u6570\u636e\u8f6c\u6362\u4e3a\u7ed3\u6784\u4f53\u6570\u636e",description:"\u95ee\u9898",date:"2020-04-30T00:00:00.000Z",formattedDate:"2020\u5e744\u670830\u65e5",tags:[{label:"ios",permalink:"/blog/tags/ios"},{label:"SwiftUI",permalink:"/blog/tags/swift-ui"}],readingTime:1.955,hasTruncateMarker:!1,authors:[{name:"JeffWang",title:"Web developer & UI designer",url:"https://wantfee.github.io",email:"59550481@qq.com",key:"JeffWang"}],frontMatter:{slug:"convert-json-data-to-structure-data",title:"\u5c06JSON\u6570\u636e\u8f6c\u6362\u4e3a\u7ed3\u6784\u4f53\u6570\u636e",authors:["JeffWang"],tags:["ios","SwiftUI"]},prevItem:{title:"\u7f51\u9875\u8bbe\u8ba1\u6d41\u7a0b\u4e2d\u5e38\u89c1\u95ee\u9898\u5206\u6790\u53ca\u5efa\u8bae",permalink:"/blog/analysis-and-suggestion-of-common-problems-in-web-design-process"},nextItem:{title:"\u5f00\u53d1\u4e00\u4e2a\u8ba1\u7b97\u5668APP\u2014\u2014Part1:\u754c\u9762\u5b9e\u73b0",permalink:"/blog/develop-a-calculator-app-part1-interface-implementation"}},s={authorsImageUrls:[void 0]},c=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u89e3\u7b54",id:"\u89e3\u7b54",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u4e86\u4e00\u4e2a JSON \u7c7b\u578b\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'{"name": "Jone","age": 17}\n')),(0,a.kt)("p",null,"\u8bf7\u4f7f\u7528 swift \u5c06\u5176\u8f6c\u6362\u4e3a\u7ed3\u6784\u4f53\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5176\u4e2d\u5e74\u9f84\u8f6c\u6362\u4e3a\u6574\u578b\u6570\u636e\uff0c\u5e76\u6253\u5370\u51fa\u6765\u3002"),(0,a.kt)("h3",{id:"\u601d\u8def"},"\u601d\u8def"),(0,a.kt)("p",null,"\u9996\u5148\u5c06\u6b64 JSON \u6570\u636e\u5b9a\u4e49\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5c06\u5176\u8f6c\u6362\u6210 Data \u578b\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u4f53\u7c7b\u578b\u7684\u6570\u636e\u6a21\u578b\uff0c\u4f7f\u5176\u9075\u5b88 Codable \u534f\u8bae\uff0c\u53ea\u8981\u9075\u5b88\u8fd9\u4e9b\u534f\u8bae\u624d\u80fd\u8fdb\u884c json \u4e0e\u6a21\u578b\u4e4b\u95f4\u7684\u7f16\u7801\u4e0e\u89e3\u7801\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u8fdb\u884c\u8bb2 json \u89e3\u7801\u5e76\u6620\u5c04\u6210\u6a21\u578b\uff0c\u6253\u5370\u51fa\u5e74\u9f84\u503c\u3002"),(0,a.kt)("h3",{id:"\u89e3\u7b54"},"\u89e3\u7b54"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'//\u5c06 json \u6570\u636e\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u636e\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528\u4e09\u4e2a\u53cc\u5f15\u53f7\u5305\u88f9\uff0c\u5c5e\u4e8e\u591a\u884c\u5b57\u7b26\u4e32\uff0c\u5f15\u53f7\u4e2d\u4ec0\u4e48\u6837\uff0c\u6253\u5370\u51fa\u6765\u5c31\u662f\u4ec0\u4e48\u6837\uff0c\u683c\u5f0f\u90fd\u4e0d\u4f1a\u53d8\u3002\nlet res = """\n{\n"name": "Jone",\n"age": 17\n}\n"""\n\n//\u4f7f\u7528\u5b57\u7b26\u4e32.data()\u65b9\u6cd5\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u8f6c\u6362\u8f6c\u6362\u4e4b\u540e\u6253\u5370\u663e\u793a 32bytes\nlet data = res.data(using: .utf8)!\n\n//Codable \u534f\u8bae\u5176\u5b9e\u5c31\u662f\u9075\u5b88\u4e00\u4e2a\u5173\u4e8e\u89e3\u7801\u7684\u534f\u8bae\u548c\u4e00\u4e2a\u5173\u4e8e\u7f16\u7801\u7684\u534f\u8bae\uff0c\u53ea\u8981\u9075\u5b88\u8fd9\u4e9b\u534f\u8bae\u624d\u80fd\u8fdb\u884c Json \u4e0e\u6a21\u578b\u4e4b\u95f4\u7684\u7f16\u7801\u4e0e\u89e3\u7801\u3002\n\nstruct Student : Codable{\nlet name : String\nlet age : Int\n}\n\n//\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06 json \u89e3\u7801\u5e76\u6620\u5c04\u6210\u6a21\u578b\nlet decoder = JSONDecoder()\n\n//!\u7684\u610f\u601d\u662f\u5f3a\u5236\u89e3\u7801\uff0c\u56e0\u4e3a\u6211\u4eec\u77e5\u9053 data \u4e2d\u6709\u503c\nlet stu = try! decoder.decode(Student.self, from: data)\n\n//\u53ef\u4ee5\u770b\u5230\uff0cstu.age \u5df2\u7ecf\u6210\u4e3a\u6574\u578b\u3002\nprint(stu.age)\n')))}p.isMDXComponent=!0}}]);