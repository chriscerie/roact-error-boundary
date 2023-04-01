"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},59881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:1},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"react-error-boundary is a robust error boundary library for Lua React. It makes error logging, reverting states, and displaying fallback components incredibly easy to implement.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-error-boundary/docs/intro",draft:!1,editUrl:"https://github.com/chriscerie/react-error-boundary/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Getting Started",permalink:"/react-error-boundary/docs/GettingStarted"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Wally",id:"wally",level:3},{value:"Why react-error-boundary",id:"why-react-error-boundary",level:2},{value:"Use cases",id:"use-cases",level:3}],u={toc:s},d="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"react-error-boundary")," is a robust error boundary library for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grilme99/CorePackages"},"Lua React"),". It makes error logging, reverting states, and displaying fallback components incredibly easy to implement."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"wally"},"Wally"),(0,a.kt)("p",null,"Add the latest version of react-error-boundary to your ",(0,a.kt)("inlineCode",{parentName:"p"},"wally.toml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'ReactErrorBoundary = "chriscerie/react-error-boundary@<version>"\n')),(0,a.kt)("h2",{id:"why-react-error-boundary"},"Why react-error-boundary"),(0,a.kt)("p",null,"By design, React unmounts the entire tree when it encounters an unhandled error. This leaves the application in an ususable state unless the user refreshes the application. In the context of a video game, the player would need to leave and rejoin the game. Error boundaries provide a way to recover from errors to greatly improve user experience."),(0,a.kt)("h3",{id:"use-cases"},"Use cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rendering fallback components upon errors (e.g., error screen)"),(0,a.kt)("li",{parentName:"ul"},"Reverting state to a known good state"),(0,a.kt)("li",{parentName:"ul"},"Retrying render with reverted state"),(0,a.kt)("li",{parentName:"ul"},"Logging errors in an external database")))}p.isMDXComponent=!0}}]);