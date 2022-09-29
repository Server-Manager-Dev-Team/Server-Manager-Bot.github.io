"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[9183],{5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7462),a=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,v=e.defaultValue,m=e.values,f=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===v?v:null!=(t=null!=v?v:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),w=T.tabGroupChoices,N=T.setTabGroupChoices,S=(0,a.useState)(y),D=S[0],E=S[1],x=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=w[f];null!=I&&I!==D&&h.some((function(e){return e.value===I}))&&E(I)}var _=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==D&&(C(t),E(r),null!=f&&N(f,String(r)))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var i,o=x.indexOf(e.currentTarget)-1;n=null!=(i=x[o])?i:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:_,onClick:_},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function v(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},90:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r,a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=(n(5488),n(5162),n(4629)),s=n(7674),u=["components"],p={title:"Appeal Server Invites",description:"Notice regarding appeal server invites"},d=void 0,c={unversionedId:"updates/appeal-server-invite-notice",id:"updates/appeal-server-invite-notice",title:"Appeal Server Invites",description:"Notice regarding appeal server invites",source:"@site/docs/updates/appeal-server-invite-notice.md",sourceDirName:"updates",slug:"/updates/appeal-server-invite-notice",permalink:"/updates/appeal-server-invite-notice",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/updates/appeal-server-invite-notice.md",tags:[],version:"current",lastUpdatedAt:1664410670,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Appeal Server Invites",description:"Notice regarding appeal server invites"},sidebar:"defaultSidebar",previous:{title:"Rebranding Announcement",permalink:"/updates/rebranding-announcement"},next:{title:"v1.0.2",permalink:"/updates/v1.0.2"}},v={},m=[{value:"Staying Safe",id:"staying-safe",level:3},{value:"Limits",id:"limits",level:3},{value:"Contributors",id:"contributors",level:2}],f=(r="DiscordComponent",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),b={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hey everyone, it's ",(0,o.kt)("strong",{parentName:"p"},"Nziie")," (Core/Lead Developer at the Server Manager Development Team). A configuration for an ",(0,o.kt)("strong",{parentName:"p"},"appeal server invite")," on the ban DM message is being released soon and I'd like to educate you all on how to stay safe while clicking these links, as they're server-set and not enforced by us nor do we encourage you to join these servers unless you'd like to appeal your ban for that specific server."),(0,o.kt)("p",null,"The appeal DM message should look something like this:"),(0,o.kt)(f,{mdxType:"DiscordComponent"},(0,o.kt)(s.kK,{author:"Server Manager",avatar:"/img/logo.png",bot:!0,mdxType:"DiscordMessage"},(0,o.kt)(s._h,{authorIcon:"/img/logo.png",authorName:"Server Manager Support",borderColor:"#ff0000",footerIcon:"/img/logo.png",image:"/img/banner-v3.png",mdxType:"DiscordEmbed"},"You've been banned in ",(0,o.kt)("strong",null,"Server Manager Support"),(0,o.kt)(s.Rb,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,o.kt)(s.wY,{fieldTitle:"\ud83d\udea9 Reason",mdxType:"DiscordEmbedField"},"Empty"),(0,o.kt)(s.wY,{fieldTitle:"\ud83d\udc64 Moderator",mdxType:"DiscordEmbedField"},(0,o.kt)("code",null,"Hidden")),(0,o.kt)(s.wY,{fieldTitle:"\ud83d\udcc4 Appealing",mdxType:"DiscordEmbedField"},"Want to appeal your ban?",(0,o.kt)("blockquote",null,"Join here: ",(0,o.kt)("span",{style:{color:"#2798d9",cursor:"not-allowed"}},"https://discord.gg/..."))))))),(0,o.kt)("h3",{id:"staying-safe"},"Staying Safe"),(0,o.kt)("p",null,"Since this configuration is server-set by admins, we can't control what might be put there besides a invite link. The invite link set to be an 'appeal server' may be an invite to another server that's irrelvent to a ban appeal. To re-iterate, joining these servers may be beneficial or non-beneficial."),(0,o.kt)("p",null,"If a server is setting their appeal server invite to a server that isn't for appealing bans, feel free to ",(0,o.kt)("strong",{parentName:"p"},"report this to us")," in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/6bCKvP24kb"},"support server")," for abusing freedom of being able to set this configuration."),(0,o.kt)("h3",{id:"limits"},"Limits"),(0,o.kt)("p",null,"At the moment, we enforce a Discord Server Invite is to be placed in this configuration. Removing the fact that a malicious link can be placed here."),(0,o.kt)("p",null,"To thin down the number of mis-uses of this configuration, we're making it ",(0,o.kt)("strong",{parentName:"p"},"premium only")," and so it goes to supporters of our project. In the future."),(0,o.kt)("h2",{id:"contributors"},"Contributors"),(0,o.kt)("div",{className:"user_box"},(0,o.kt)("img",{className:"profile-picture-avatar",src:"../img/nziie.png"}),(0,o.kt)("div",{className:"name"},"vNziie--#7777"),(0,o.kt)("div",{className:"comment"},"update author")),(0,o.kt)("br",null),(0,o.kt)("h3",null,"Want to contribute to Server Manager?"),(0,o.kt)("div",{className:"pyc-hero__actions"},(0,o.kt)(l.Z,{link:"https://discord.gg/6bCKvP24kb",mdxType:"Button"},"Join our Support Server")))}g.isMDXComponent=!0}}]);