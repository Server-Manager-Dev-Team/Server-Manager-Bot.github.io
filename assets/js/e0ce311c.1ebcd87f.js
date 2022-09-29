"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[5232],{5162:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function u(e){var t=e.children,a=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),l=a(6010),u=a(2389),i=a(7392),o=a(7094),s=a(2466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,u=e.lazy,m=e.block,p=e.defaultValue,v=e.values,k=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),T=y.tabGroupChoices,w=y.setTabGroupChoices,_=(0,r.useState)(N),C=_[0],x=_[1],Z=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=T[k];null!=S&&S!==C&&g.some((function(e){return e.value===S}))&&x(S)}var I=function(e){var t=e.currentTarget,a=Z.indexOf(t),n=g[a].value;n!==C&&(E(t),x(n),null!=k&&w(k,String(n)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=Z.indexOf(e.currentTarget)+1;a=null!=(n=Z[r])?n:Z[0];break;case"ArrowLeft":var l,u=Z.indexOf(e.currentTarget)-1;a=null!=(l=Z[u])?l:Z[Z.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var t=e.value,a=e.label,u=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:D,onFocus:I,onClick:I},u,{className:(0,l.Z)("tabs__item",d,null==u?void 0:u.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,u.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},7684:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return v}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),u=a(5488),i=a(5162),o=a(4629),s=["components"],c={title:"v1.0.5",description:"Release v1.0.5 changelog"},d=void 0,m={unversionedId:"updates/v1.0.5",id:"updates/v1.0.5",title:"v1.0.5",description:"Release v1.0.5 changelog",source:"@site/docs/updates/v1.0.5.md",sourceDirName:"updates",slug:"/updates/v1.0.5",permalink:"/updates/v1.0.5",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/updates/v1.0.5.md",tags:[],version:"current",lastUpdatedAt:1664410670,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"v1.0.5",description:"Release v1.0.5 changelog"},sidebar:"defaultSidebar",previous:{title:"v1.0.4",permalink:"/updates/v1.0.4"},next:{title:"Terms of Service",permalink:"/terms"}},p={},v=[{value:"Changes",id:"changes",level:2},{value:"Kick and Ban Caps",id:"kick-and-ban-caps",level:2},{value:"Contributors",id:"contributors",level:2}],k={toc:v};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"changes"},"Changes"),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"new-features-tab",label:"New Features",default:!0,mdxType:"TabItem"},"\u2022 A new configuration command (",(0,l.kt)("a",{href:"../documentation/configurations#suggestion-configurations"},(0,l.kt)("code",null,"/config discussion_threads value: True/False")),")",(0,l.kt)("br",null),"\u2022 ",(0,l.kt)("a",{href:"#kick-and-ban-caps"},(0,l.kt)("code",null,"/ban")," and ",(0,l.kt)("code",null,"/kick")," command caps"),(0,l.kt)("br",null)),(0,l.kt)(i.Z,{value:"bugs-tab",label:"Bug Fixes",mdxType:"TabItem"},"\u2022 ",(0,l.kt)("em",null,"Small bug fixes"))),(0,l.kt)("h2",{id:"kick-and-ban-caps"},"Kick and Ban Caps"),(0,l.kt)("p",null,"These caps are in place to prevent user raids or nukes using Server Manager."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Uses"),(0,l.kt)("th",{parentName:"tr",align:null},"Per"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/ban ","[...]")),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10 minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"/kick ","[...]")),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10 minutes")))),(0,l.kt)("h2",{id:"contributors"},"Contributors"),(0,l.kt)("div",{className:"user_box"},(0,l.kt)("img",{className:"profile-picture-avatar",src:"../img/nziie.png"}),(0,l.kt)("div",{className:"name"},"vNziie--#7777"),(0,l.kt)("div",{className:"comment"},"update author")),(0,l.kt)("br",null),(0,l.kt)("div",{className:"user_box"},(0,l.kt)("img",{className:"profile-picture-avatar",src:"../../img/neb.png"}),(0,l.kt)("div",{className:"name"},"Neb#7507"),(0,l.kt)("div",{className:"comment"},"feature suggester")),(0,l.kt)("h3",null,"Want to contribute to Server Manager?"),(0,l.kt)("div",{className:"pyc-hero__actions"},(0,l.kt)(o.Z,{link:"https://discord.gg/6bCKvP24kb",mdxType:"Button"},"Join our Support Server")))}b.isMDXComponent=!0}}]);