"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[396],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4629:function(e,t,r){var n=r(7294),a=r(9960);t.Z=function(e){var t=e.type,r=e.label,o=e.icon,i=e.link,u=e.isDisabled,c=e.onClick,s=e.children,l=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},p=n.createElement("button",{className:"pyc-button"+(t?" "+l(t):""),"aria-label":r||(null==s?void 0:s.toString()),disabled:u,onClick:c},o&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),s&&n.createElement("span",{className:"pyc-button__label"},s));return i?n.createElement(a.Z,{className:"pyc-button"+(t?" "+l(t):""),"aria-label":r||(null==s?void 0:s.toString()),href:i},o&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),s&&n.createElement("span",{className:"pyc-button__label"},s)):p}},3505:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4629),u=["components"],c={title:"Status",description:"View Server Manager's live status"},s=void 0,l={unversionedId:"status",id:"status",title:"Status",description:"View Server Manager's live status",source:"@site/docs/status.md",sourceDirName:".",slug:"/status",permalink:"/status",draft:!1,tags:[],version:"current",lastUpdatedAt:1661385929,formattedLastUpdatedAt:"Aug 25, 2022",frontMatter:{title:"Status",description:"View Server Manager's live status"},sidebar:"defaultSidebar",previous:{title:"Roadmap",permalink:"/roadmap"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},p={},f=[],m={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We mainly use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/support"},"our support server"))," for our status updates, but we are always managing Server Manager's status on ",(0,o.kt)("strong",{parentName:"p"},"Instatus"),"."),(0,o.kt)("div",{className:"pyc-hero__actions"},(0,o.kt)(i.Z,{link:"https://server-manager.instatus.com/",mdxType:"Button"},"View status...")),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);