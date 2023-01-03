"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[9360],{9222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],l={title:"Troubleshooting",description:"Having trouble with Server Manager?"},o=void 0,p={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Having trouble with Server Manager?",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1672774990,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{title:"Troubleshooting",description:"Having trouble with Server Manager?"},sidebar:"defaultSidebar",previous:{title:"Roadmap",permalink:"/roadmap"}},u={},d=[{value:"403 Forbidden",id:"403-forbidden",level:2},{value:"Missing Permissions",id:"missing-permissions",level:3},{value:"KeyError",id:"keyerror",level:2},{value:"TypeError",id:"typeerror",level:2},{value:"Other",id:"other",level:2}],k={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"403-forbidden"},"403 Forbidden"),(0,s.kt)("p",null,"What this error means is that Server Manager tried to execute an action, but failed."),(0,s.kt)("h3",{id:"missing-permissions"},"Missing Permissions"),(0,s.kt)("p",null,"This should be self explanatory as it's a very common error, the bot is missing permissions to execute an action - or did but failed. To fix this, we recommend giving the bot ",(0,s.kt)("inlineCode",{parentName:"p"},"Server Administrator")," permissions for an easy fix. Not comfortable giving the bot admin permissions? That's alright! We'll just have to take the longer route instead. "),(0,s.kt)("p",null,"Below, match the command you're trying to use with the table below and give it the permissions it needs."),(0,s.kt)("details",{className:"customdetails"},(0,s.kt)("summary",null,"/kick"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Kick Members")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,s.kt)("br",null),(0,s.kt)("details",{className:"customdetails"},(0,s.kt)("summary",null,"/ban"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Ban Members")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,s.kt)("br",null),(0,s.kt)("details",{className:"customdetails"},(0,s.kt)("summary",null,"/warn"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,s.kt)("br",null),(0,s.kt)("details",{className:"customdetails"},(0,s.kt)("summary",null,"/mute"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Moderate Members")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,s.kt)("br",null),(0,s.kt)("details",{className:"customdetails"},(0,s.kt)("summary",null,"/suggest"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Access to the suggestions channel")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,s.kt)("br",null),(0,s.kt)("details",{className:"customdetails"},(0,s.kt)("summary",null,(0,s.kt)("code",null,"All suggestion marking")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Access to the suggestions channel")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Send Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"View Channels/Read Messages")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Read Message History")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Use External Emojis")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Embed Links"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"keyerror"},"KeyError"),(0,s.kt)("p",null,"This is an error on our side in which you can't fix. Should you encounter this error, ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"../support"},"contact us in our support server")),"."),(0,s.kt)("h2",{id:"typeerror"},"TypeError"),(0,s.kt)("p",null,"Again, this is an error on our side. Should you encounter this error, ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"../support"},"contact us in our support server")),"."),(0,s.kt)("h2",{id:"other"},"Other"),(0,s.kt)("p",null,"If you encounter any other error that's not listed here, please ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"../support"},"contact us in our support server"))," immediately so we can get out a fix."))}m.isMDXComponent=!0}}]);