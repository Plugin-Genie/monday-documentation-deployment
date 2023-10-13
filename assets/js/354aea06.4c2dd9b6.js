"use strict";(self.webpackChunkmonday_documentation=self.webpackChunkmonday_documentation||[]).push([[1855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),p=o,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:4,hide_table_of_contents:!0},i="What's a monday ID?",s={unversionedId:"monday-ids",id:"monday-ids",title:"What's a monday ID?",description:"Monday.com uses IDs to uniquely identify items, workspaces, boards, users, and other objects.",source:"@site/docs/monday-ids.md",sourceDirName:".",slug:"/monday-ids",permalink:"/docs/monday-ids",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Determining App Usage",permalink:"/docs/usage"},next:{title:"Limitations",permalink:"/docs/limitations"}},c={},l=[{value:"Why is the ID important for my monday flows?",id:"why-is-the-id-important-for-my-monday-flows",level:2},{value:"Another example: Workspace creation",id:"another-example-workspace-creation",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whats-a-monday-id"},"What's a monday ID?"),(0,o.kt)("p",null,"Monday.com uses IDs to uniquely identify items, workspaces, boards, users, and other objects.\nThese IDs are also used in the Power Automate monday connector in actions and triggers."),(0,o.kt)("p",null,"It is important to note that these IDs are not the name of the object. For example, the ID of an item is not the item name.\nIDs usually take the form of a number, such as 5209264181."),(0,o.kt)("p",null,'You can see the ID of an item by adding the "Item ID" column to your board. Here\'s what this looks like:'),(0,o.kt)("div",{style:{maxWidth:"500px"}},(0,o.kt)("img",{src:"/img/monday-ids/ids-monday-board.png",alt:"Item ID example"})),(0,o.kt)("p",null,"Other IDs can oftentimes be found in the URL. For example, the ID of a board (in this case 5327901287) can be found in the URL of the board page:"),(0,o.kt)("div",{style:{maxWidth:"500px"}},(0,o.kt)("img",{src:"/img/monday-ids/board-id.png",alt:"Board ID example"})),(0,o.kt)("h2",{id:"why-is-the-id-important-for-my-monday-flows"},"Why is the ID important for my monday flows?"),(0,o.kt)("p",null,"The ID is important because it's used in a number of monday actions/triggers in Power automate."),(0,o.kt)("p",null,'For example, the "When a column changes" trigger outputs the Item ID of the item that was changed. This allows you to use the ID in subsequent actions.'),(0,o.kt)("p",null,"Let's say you want to update the status column of the item that was changed. You can use the \"Update an item's column value\"\naction to do this. This action takes the Item ID as an input to know which specific item should be updated."),(0,o.kt)("p",null,'In the example below, you can see that after clicking into the Item ID field, the Dynamic Content window shows up, allowing\nus to select the Item ID from the "When a column changes" trigger output. This ensures that the item we\'re updating corresponds to the item whose column value changed.'),(0,o.kt)("div",{style:{maxWidth:"1000px"}},(0,o.kt)("img",{src:"/img/updating-an-item/update-an-items-column-value2.png",alt:"Update an item's column value"})),(0,o.kt)("p",null,"By the way, to learn more about updating items, check out: ",(0,o.kt)("a",{parentName:"p",href:"/docs/updating-items"},"Updating an Item"),"."),(0,o.kt)("h2",{id:"another-example-workspace-creation"},"Another example: Workspace creation"),(0,o.kt)("p",null,"Imagine you wanted to make a flow that automatically creates a workspace, board, and a group in that board. Utilizing monday IDs would be necessary to achieve this."),(0,o.kt)("p",null,'First, you would create a flow that includes an action to create a workspace ("Create a workspace"). This flow would output the workspace ID. You would then use\nthis workspace ID in a subsequent action to create a board in that workspace ("Create a board"). This flow would output the board ID.\nFinally, you would use this board ID in a subsequent action to create a group in that board ("Create a group"). '),(0,o.kt)("p",null,"Just like in the other example above, you can use the\nDynamic Content window to select the workspace ID and board ID from the previous actions."),(0,o.kt)("div",{style:{maxWidth:"1000px"}},(0,o.kt)("img",{src:"/img/monday-ids/workspace-creation.png",alt:"Workspace creation"})),(0,o.kt)("p",null,'As you can see below, once you\'ve run this flow, it will create a new workspace called "My Workspace", with the board "My Board", and the group "My Group".\n(The second group, named "Group Title", is automatically included in new monday boards.)'),(0,o.kt)("div",{style:{maxWidth:"1000px"}},(0,o.kt)("img",{src:"/img/monday-ids/workspace-creation-monday.png",alt:"Workspace creation in monday"})))}m.isMDXComponent=!0}}]);