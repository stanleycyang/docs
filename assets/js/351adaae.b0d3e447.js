"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6536],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,v=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?a.createElement(v,o(o({ref:n},m),{},{components:t})):a.createElement(v,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65002:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],c={sidebar_label:"2. Mint Tokens"},l="Mint Tokens",s={unversionedId:"candy-machine-v1/mint-tokens",id:"candy-machine-v1/mint-tokens",title:"Mint Tokens",description:"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use Candy Machine v2 instead.",source:"@site/docs/candy-machine-v1/03-mint-tokens.md",sourceDirName:"candy-machine-v1",slug:"/candy-machine-v1/mint-tokens",permalink:"/candy-machine-v1/mint-tokens",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v1/03-mint-tokens.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"2. Mint Tokens"},sidebar:"sidebar",previous:{title:"1. Update Candy Machine",permalink:"/candy-machine-v1/update-cm"},next:{title:"3. Create Mint Website",permalink:"/candy-machine-v1/create-mint-site"}},m=[{value:"Preparation",id:"preparation",children:[],level:2},{value:"Mint one token",id:"mint-one-token",children:[],level:2},{value:"Mint multiple tokens",id:"mint-multiple-tokens",children:[],level:2}],p={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mint-tokens"},"Mint Tokens"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use ",(0,r.kt)("a",{parentName:"p",href:"../candy-machine-v2/introduction"},"Candy Machine v2")," instead."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For now, only the owner of the CMv1 can mint tokens"))),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check that you have ",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet-beta-temp"),"(if using mainnet-beta; it will say devnet or otherwise on different networks) file in your ",(0,r.kt)("inlineCode",{parentName:"li"},".cache")," folder"),(0,r.kt)("li",{parentName:"ol"},"Check that you have more than 1 SOL in your mainnet-beta wallet")),(0,r.kt)("h2",{id:"mint-one-token"},"Mint one token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts mint_one_token -k ~/.config/solana/wallet.json --env mainnet-beta\n")),(0,r.kt)("h2",{id:"mint-multiple-tokens"},"Mint multiple tokens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--number")," number of tokens")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//For mainnet\nts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts mint_multiple_tokens -k ~/.config/solana/wallet.json --env mainnet-beta --number 2\n//For devnet\nts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts mint_multiple_tokens -k ~/.config/solana/wallet.json --env devnet --number 2 \n\n")))}d.isMDXComponent=!0}}]);