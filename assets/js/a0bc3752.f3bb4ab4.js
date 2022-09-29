"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[7893],{38:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return g},metadata:function(){return u},toc:function(){return p}});var a,s=n(7462),o=n(3366),i=(n(7294),n(3905)),r=(n(4629),n(7674)),l=["components"],g={title:"Suggestions",description:"Documentation regarding the suggestion system",sidebar_position:2},m=void 0,u={unversionedId:"documentation/suggestions",id:"documentation/suggestions",title:"Suggestions",description:"Documentation regarding the suggestion system",source:"@site/docs/documentation/suggestions.md",sourceDirName:"documentation",slug:"/documentation/suggestions",permalink:"/documentation/suggestions",draft:!1,editUrl:"https://github.com/Server-Manager-Dev-Team/website/tree/main/docs/documentation/suggestions.md",tags:[],version:"current",lastUpdatedAt:1664410670,formattedLastUpdatedAt:"Sep 29, 2022",sidebarPosition:2,frontMatter:{title:"Suggestions",description:"Documentation regarding the suggestion system",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Configurations",permalink:"/documentation/configurations"},next:{title:"Polls",permalink:"/documentation/polls"}},d={},p=[{value:"Examples",id:"examples",level:2}],c=(a="DiscordComponent",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}),k={toc:p};function N(t){var e=t.components,n=(0,o.Z)(t,l);return(0,i.kt)("wrapper",(0,s.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Premium"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/config suggestions_channel ","<","channel",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Set the servers suggestion channel"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggest ","<","suggestion",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Suggest something to the server"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions edit ","<","suggestion_id",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Edit your own suggestion (content)"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions view ","<","suggestion_id",">")),(0,i.kt)("td",{parentName:"tr",align:null},"View a suggestion in-depth"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions approve ","<","suggestion_id",">"," ","[comment][close_voting]")),(0,i.kt)("td",{parentName:"tr",align:null},"Approve a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions deny ","<","suggestion_id",">"," ","[comment][close_voting]")),(0,i.kt)("td",{parentName:"tr",align:null},"Deny a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions implement ","<","suggestion_id",">"," ","[comment][close_voting]")),(0,i.kt)("td",{parentName:"tr",align:null},"Implement a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions consider ","<","suggestion_id",">"," ","[comment]")),(0,i.kt)("td",{parentName:"tr",align:null},"Consider a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions delete ","<","id",">"," ","[notify_author=True]")),(0,i.kt)("td",{parentName:"tr",align:null},"Delete a suggestion from the database and the suggestions channel"),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/suggestions comment ","<","id",">"," ","<","comment",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Comment on a suggestion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("premium",null,"True"))))),(0,i.kt)("admonition",{title:"Warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deleting a suggestion message ",(0,i.kt)("strong",{parentName:"p"},"doesn't actually delete the suggestion from the database"),". Please use ",(0,i.kt)("inlineCode",{parentName:"p"},"/suggestion delete")," to delete a suggestion.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Suggestion commenting is currently not finished yet and may have some small and minor bugs.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"/suggest suggestion: This is a suggestion!\n")),(0,i.kt)(c,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{author:"Docs Bot",avatar:"blue",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)(r._h,{authorIcon:"/img/logo.png",authorName:"User#0000",thumbnail:"/img/logo.png",borderColor:"#5865F2",timestamp:"12/24/2022",footerIcon:"/img/logo.png",image:"/img/banner-v3.png",mdxType:"DiscordEmbed"},"This is a suggestion!",(0,i.kt)(r.Rb,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,i.kt)(r.wY,{fieldTitle:"Votes",mdxType:"DiscordEmbedField"},(0,i.kt)("strong",null,"Upvotes:")," 0 ",(0,i.kt)("code",null,"(0%)"),(0,i.kt)("br",null),(0,i.kt)("strong",null,"Downvotes:")," 0 ",(0,i.kt)("code",null,"(0%)")),(0,i.kt)(r.wY,{fieldTitle:"Status",mdxType:"DiscordEmbedField"},"\ud83d\udce3 This suggestion is waiting for an official answer!")),(0,i.kt)("span",{slot:"footer"},"Suggestion ID: wasdabc12340")))))}N.isMDXComponent=!0}}]);