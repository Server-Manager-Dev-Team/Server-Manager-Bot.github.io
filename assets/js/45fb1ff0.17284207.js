"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[1531],{5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",v="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,p=e.values,f=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),y=N.tabGroupChoices,T=N.setTabGroupChoices,_=(0,r.useState)(w),x=_[0],E=_[1],Z=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var z=y[f];null!=z&&z!==x&&h.some((function(e){return e.value===z}))&&E(z)}var I=function(e){var t=e.currentTarget,n=Z.indexOf(t),a=h[n].value;a!==x&&(C(t),E(a),null!=f&&T(f,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=Z.indexOf(e.currentTarget)+1;n=null!=(a=Z[r])?a:Z[0];break;case"ArrowLeft":var l,i=Z.indexOf(e.currentTarget)-1;n=null!=(l=Z[i])?l:Z[Z.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:S,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},8624:function(e,t,n){n.d(t,{v:function(){return l}});var a=n(7294),r=n(7674),l=Object.assign({},r.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/nziie.png"},servermanager:{author:"Server Manager",avatar:"/img/logo.png",roleColor:"#5865f2",bot:!0,verified:!0}}});t.Z=function(e){var t=e.options,n=void 0===t?l:t,i=e.children;return a.createElement(r.qs.Provider,{value:n},a.createElement(r.dZ,null,i))}},9165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=(n(5488),n(5162),n(4629)),o=(n(7674),n(8624),["components"]),u={slug:"v1.1.2",title:"Release v1.1.2",authors:"nziie",tags:["New Version","Updates"]},s=void 0,c={permalink:"/blog/v1.1.2",source:"@site/blog/2022-10-9-v1.1.2.md",title:"Release v1.1.2",description:"New Features",date:"2022-10-09T00:00:00.000Z",formattedDate:"October 9, 2022",tags:[{label:"New Version",permalink:"/blog/tags/new-version"},{label:"Updates",permalink:"/blog/tags/updates"}],readingTime:.665,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"Core Developer",url:"https://nziie.is-a.dev",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"v1.1.2",title:"Release v1.1.2",authors:"nziie",tags:["New Version","Updates"]},nextItem:{title:"Release v1.1.1",permalink:"/blog/v1.1.1"}},v={authorsImageUrls:[void 0]},d=[{value:"Contributors",id:"contributors",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"update-new-features"},(0,l.kt)("div",{className:"title"},(0,l.kt)("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40"},(0,l.kt)("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}))," New Features"),(0,l.kt)("li",null,"Suggestion comments (non-premium)"),(0,l.kt)("li",null,"The ability to view giveaway entries"),(0,l.kt)("li",null,"The ability to ping a role when making a giveaway")),(0,l.kt)("br",null),(0,l.kt)("div",{className:"update-bug-fixes"},(0,l.kt)("div",{className:"title"},"\ud83d\udc1b Bug Fixes"),(0,l.kt)("li",null,"Similar characters in ids (e.g. ",(0,l.kt)("code",null,"I")," & ",(0,l.kt)("code",null,"l")," being mistaken for each other)"),(0,l.kt)("em",null,"other small bug fixes")),(0,l.kt)("h2",{id:"contributors"},"Contributors"),(0,l.kt)("div",{className:"user_box"},(0,l.kt)("img",{className:"profile-picture-avatar",src:"../img/jon.png"}),(0,l.kt)("div",{className:"name"},"Jonfirexbox#8859"),(0,l.kt)("div",{className:"comment"},"feature suggester")),(0,l.kt)("h3",null,"Want to contribute to Server Manager?"),(0,l.kt)("div",{className:"pyc-hero__actions"},(0,l.kt)(i.Z,{link:"https://discord.gg/6bCKvP24kb",mdxType:"Button"},"Join our Support Server")))}p.isMDXComponent=!0}}]);