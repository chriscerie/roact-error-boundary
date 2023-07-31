"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},i="Getting Started",c={unversionedId:"GettingStarted",id:"GettingStarted",title:"Getting Started",description:"Getting started with react-error-boundary is simple. First, create a fallback component.",source:"@site/docs/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/react-error-boundary/docs/GettingStarted",draft:!1,editUrl:"https://github.com/chriscerie/react-error-boundary/edit/main/docs/GettingStarted.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/react-error-boundary/docs/intro"}},l={},p=[{value:"Next steps",id:"next-steps",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Getting started with react-error-boundary is simple. First, create a fallback component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local e = React.createElement\nlocal Fallback: React.FC<ReactErrorBoundary.FallbackProps> = function(_props)\n    return e("TextLabel", {\n        AnchorPoint = Vector2.new(0.5, 0.5),\n        Size = UDim2.fromScale(0.5, 0.5),\n        Position = UDim2.fromScale(0.5, 0.5),\n        Text = "An error was encountered!.",\n    })\nend\n')),(0,a.kt)("p",null,"Next, in your app, wrap an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," where needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local App: React.FC<{}> = function(_props)\n    return e(ReactErrorBoundary.ErrorBoundary, {\n        FallbackComponent = Fallback,\n    }, {\n        ComponentThatMightError = e(ComponentThatMightError),\n    })\nend\n")),(0,a.kt)("p",null,"Now when ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentThatMightError")," or any of its descendant errors, the error boundary will catch it and render the fallback component. When an error is encountered somewhere in your app, the nearest ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," will catch and handle it. You don't need to wrap every component in an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorBoundary"),". Consider the ",(0,a.kt)("a",{parentName:"p",href:"https://aweary.dev/fault-tolerance-react/"},"granularity of error boundaries")," and where it makes sense to display an error message or revert states."),(0,a.kt)("p",null,'This was a very basic example. In a real application, you might want the fallback component to render a "go back" button that reverts state, or you might want to do that immediately after encountering an error.'),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/api"},"API reference"),". First, read the usage of the main ",(0,a.kt)("a",{parentName:"p",href:"/api/ErrorBoundary"},"ErrorBoundary")," component.\nThen learn the ",(0,a.kt)("a",{parentName:"p",href:"/api/ReactErrorBoundary#useErrorBoundary"},"useErrorBoundary")," hook."))}d.isMDXComponent=!0}}]);