(this["webpackJsonpmarlerino-test-react"]=this["webpackJsonpmarlerino-test-react"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(18),c=n(14),l=n(11),i=n(16),s="APPS/FETCH_APPLICATIONS",o="OFFERS/FETCH_OFFERS",u="OFFERS/CREATE_OFFER",p="OFFERS/FETCH_NETWORKS",f="OFFERS/CREATE_NETWORK",C="APP/CHANGE_LOCALE",j="APP/SHOW_ALERT",d="APP/HIDE_ALERT",h="APP/SHOW_LOADER",O="APP/HIDE_LOADER",b="APP/TOGGLE_THEME",v=function(){return{type:h}},m=function(){return{type:O}},x=function(e){return function(t){t({type:j,payload:e}),setTimeout((function(){t(L())}),2e3)}},L=function(){return{type:d}},E=(n(39),function(){var e=Object(l.c)((function(e){return e.app.locale})),t=Object(l.b)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("button",{onClick:function(){t(function(e){return{type:C,payload:e}}("en"===e?"ru":"en"))},className:"change-locale-btn",children:e})})})}),H=(n(40),function(){var e=Object(l.c)((function(e){return e.app.alert}));return e&&e.trim()?Object(a.jsx)("div",{className:"notification",role:"alert",children:e}):null}),y=[{language:"en",messages:{app:{hello:"Hello {name}! Welcome!"},nav:{apps:"Apps",offers:"Offers"}}},{language:"ru",messages:{app:{hello:"\u041f\u0440\u0438\u0432\u0435\u0442 {name}! \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"},nav:{apps:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",offers:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}}}],D=n(4),V=n(0);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Z=V.createElement("path",{d:"M67.5291 9.3V13.392H61.6701V31H57.3921V13.392H51.5641V9.3H67.5291Z",fill:"#1D1D1D"}),w=V.createElement("path",{d:"M68.7449 24.893C69.2822 26.8357 70.7392 27.807 73.1159 27.807C74.6452 27.807 75.8026 27.2903 76.5879 26.257L79.8119 28.117C78.2826 30.3283 76.0299 31.434 73.0539 31.434C70.4912 31.434 68.4349 30.659 66.8849 29.109C65.3349 27.559 64.5599 25.606 64.5599 23.25C64.5599 20.9147 65.3246 18.972 66.8539 17.422C68.3832 15.8513 70.3466 15.066 72.7439 15.066C75.0172 15.066 76.8876 15.8513 78.3549 17.422C79.8429 18.9927 80.5869 20.9353 80.5869 23.25C80.5869 23.7667 80.5352 24.3143 80.4319 24.893H68.7449ZM68.6829 21.793H76.5879C76.3606 20.739 75.8852 19.9537 75.1619 19.437C74.4592 18.9203 73.6532 18.662 72.7439 18.662C71.6692 18.662 70.7806 18.941 70.0779 19.499C69.3752 20.0363 68.9102 20.801 68.6829 21.793Z",fill:"#1D1D1D"}),k=V.createElement("path",{d:"M84.9121 19.902C84.9121 20.3153 85.1808 20.6563 85.7181 20.925C86.2761 21.173 86.9478 21.4003 87.7331 21.607C88.5185 21.793 89.3038 22.041 90.0891 22.351C90.8745 22.6403 91.5358 23.1363 92.0731 23.839C92.6311 24.5417 92.9101 25.42 92.9101 26.474C92.9101 28.0653 92.3108 29.295 91.1121 30.163C89.9341 31.0103 88.4565 31.434 86.6791 31.434C83.4965 31.434 81.3265 30.2043 80.1691 27.745L83.6411 25.792C84.0958 27.1353 85.1085 27.807 86.6791 27.807C88.1051 27.807 88.8181 27.3627 88.8181 26.474C88.8181 26.0607 88.5391 25.73 87.9811 25.482C87.4438 25.2133 86.7825 24.9757 85.9971 24.769C85.2118 24.5623 84.4265 24.304 83.6411 23.994C82.8558 23.684 82.1841 23.1983 81.6261 22.537C81.0888 21.855 80.8201 21.0077 80.8201 19.995C80.8201 18.4657 81.3781 17.267 82.4941 16.399C83.6308 15.5103 85.0361 15.066 86.7101 15.066C87.9708 15.066 89.1178 15.3553 90.1511 15.934C91.1845 16.492 92.0008 17.298 92.6001 18.352L89.1901 20.212C88.6941 19.158 87.8675 18.631 86.7101 18.631C86.1935 18.631 85.7595 18.7447 85.4081 18.972C85.0775 19.1993 84.9121 19.5093 84.9121 19.902Z",fill:"#1D1D1D"}),A=V.createElement("path",{d:"M102.344 19.344H98.8408V25.792C98.8408 26.3293 98.9752 26.722 99.2438 26.97C99.5125 27.218 99.9052 27.3627 100.422 27.404C100.938 27.4247 101.579 27.4143 102.344 27.373V31C99.5952 31.31 97.6525 31.0517 96.5158 30.225C95.3998 29.3983 94.8418 27.9207 94.8418 25.792V19.344H92.1448V15.5H94.8418V12.369L98.8408 11.16V15.5H102.344V19.344Z",fill:"#1D1D1D"}),F=V.createElement("path",{d:"M118.395 9.3V13.392H112.536V31H108.258V13.392H102.43V9.3H118.395Z",fill:"#1D1D1D"}),R=V.createElement("path",{d:"M128.011 15.5H132.01V31H128.011V29.171C126.813 30.6797 125.128 31.434 122.958 31.434C120.892 31.434 119.114 30.6487 117.626 29.078C116.159 27.4867 115.425 25.544 115.425 23.25C115.425 20.956 116.159 19.0237 117.626 17.453C119.114 15.8617 120.892 15.066 122.958 15.066C125.128 15.066 126.813 15.8203 128.011 17.329V15.5ZM120.633 26.412C121.439 27.218 122.462 27.621 123.702 27.621C124.942 27.621 125.965 27.218 126.771 26.412C127.598 25.5853 128.011 24.5313 128.011 23.25C128.011 21.9687 127.598 20.925 126.771 20.119C125.965 19.2923 124.942 18.879 123.702 18.879C122.462 18.879 121.439 19.2923 120.633 20.119C119.827 20.925 119.424 21.9687 119.424 23.25C119.424 24.5313 119.827 25.5853 120.633 26.412Z",fill:"#1D1D1D"}),P=V.createElement("path",{d:"M137.655 19.902C137.655 20.3153 137.923 20.6563 138.461 20.925C139.019 21.173 139.69 21.4003 140.476 21.607C141.261 21.793 142.046 22.041 142.832 22.351C143.617 22.6403 144.278 23.1363 144.816 23.839C145.374 24.5417 145.653 25.42 145.653 26.474C145.653 28.0653 145.053 29.295 143.855 30.163C142.677 31.0103 141.199 31.434 139.422 31.434C136.239 31.434 134.069 30.2043 132.912 27.745L136.384 25.792C136.838 27.1353 137.851 27.807 139.422 27.807C140.848 27.807 141.561 27.3627 141.561 26.474C141.561 26.0607 141.282 25.73 140.724 25.482C140.186 25.2133 139.525 24.9757 138.74 24.769C137.954 24.5623 137.169 24.304 136.384 23.994C135.598 23.684 134.927 23.1983 134.369 22.537C133.831 21.855 133.563 21.0077 133.563 19.995C133.563 18.4657 134.121 17.267 135.237 16.399C136.373 15.5103 137.779 15.066 139.453 15.066C140.713 15.066 141.86 15.3553 142.894 15.934C143.927 16.492 144.743 17.298 145.343 18.352L141.933 20.212C141.437 19.158 140.61 18.631 139.453 18.631C138.936 18.631 138.502 18.7447 138.151 18.972C137.82 19.1993 137.655 19.5093 137.655 19.902Z",fill:"#1D1D1D"}),_=V.createElement("path",{d:"M160.965 31H156.315L150.673 23.963V31H146.674V9.3H150.673V22.32L156.005 15.5H160.779L154.548 23.157L160.965 31Z",fill:"#1D1D1D"}),N=V.createElement("path",{d:"M175.547 31L174.245 27.094H165.596L164.294 31H159.675L167.27 9.3H172.571L180.197 31H175.547ZM166.96 23.095H172.912L169.936 14.229L166.96 23.095Z",fill:"#1D1D1D"}),S=V.createElement("path",{d:"M189.589 15.066C191.677 15.066 193.454 15.8617 194.921 17.453C196.409 19.0237 197.153 20.956 197.153 23.25C197.153 25.544 196.409 27.4867 194.921 29.078C193.454 30.6487 191.677 31.434 189.589 31.434C187.419 31.434 185.745 30.6797 184.567 29.171V37.2H180.568V15.5H184.567V17.329C185.745 15.8203 187.419 15.066 189.589 15.066ZM185.776 26.412C186.582 27.218 187.605 27.621 188.845 27.621C190.085 27.621 191.108 27.218 191.914 26.412C192.741 25.5853 193.154 24.5313 193.154 23.25C193.154 21.9687 192.741 20.925 191.914 20.119C191.108 19.2923 190.085 18.879 188.845 18.879C187.605 18.879 186.582 19.2923 185.776 20.119C184.97 20.925 184.567 21.9687 184.567 23.25C184.567 24.5313 184.97 25.5853 185.776 26.412Z",fill:"#1D1D1D"}),T=V.createElement("path",{d:"M207.445 15.066C209.532 15.066 211.309 15.8617 212.777 17.453C214.265 19.0237 215.009 20.956 215.009 23.25C215.009 25.544 214.265 27.4867 212.777 29.078C211.309 30.6487 209.532 31.434 207.445 31.434C205.275 31.434 203.601 30.6797 202.423 29.171V37.2H198.424V15.5H202.423V17.329C203.601 15.8203 205.275 15.066 207.445 15.066ZM203.632 26.412C204.438 27.218 205.461 27.621 206.701 27.621C207.941 27.621 208.964 27.218 209.77 26.412C210.596 25.5853 211.01 24.5313 211.01 23.25C211.01 21.9687 210.596 20.925 209.77 20.119C208.964 19.2923 207.941 18.879 206.701 18.879C205.461 18.879 204.438 19.2923 203.632 20.119C202.826 20.925 202.423 21.9687 202.423 23.25C202.423 24.5313 202.826 25.5853 203.632 26.412Z",fill:"#1D1D1D"}),I=V.createElement("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:0,y:0,width:40,height:40},V.createElement("path",{d:"M19.6464 0.353553C19.8417 0.158291 20.1583 0.158291 20.3536 0.353553L39.6464 19.6464C39.8417 19.8417 39.8417 20.1583 39.6464 20.3536L20.3536 39.6464C20.1583 39.8417 19.8417 39.8417 19.6464 39.6464L0.353553 20.3536C0.158291 20.1583 0.158291 19.8417 0.353553 19.6464L19.6464 0.353553Z",fill:"#C4C4C4"})),B=V.createElement("g",{mask:"url(#mask0)"},V.createElement("path",{d:"M16.6667 3.33333L20 0L40 20L16.6667 3.33333Z",fill:"#55EF14"}),V.createElement("path",{d:"M16.6667 3.33333L40 20L13.3333 6.66666L16.6667 3.33333Z",fill:"#91F466"}),V.createElement("path",{d:"M13.3333 6.66667L10 10L40 20L13.3333 6.66667Z",fill:"#BAF8A0"}),V.createElement("path",{d:"M3.33333 23.3333L0 20L20 0L3.33333 23.3333Z",fill:"#1D1D1D"}),V.createElement("path",{d:"M6.66667 26.6667L3.33334 23.3333L20 0L6.66667 26.6667Z",fill:"#525252"}),V.createElement("path",{d:"M10 30L6.66666 26.6667L20 0L10 30Z",fill:"#707070"}),V.createElement("path",{d:"M20 40L0 20L23.3333 36.6667L20 40Z",fill:"#55EF14"}),V.createElement("path",{d:"M26.6667 33.3333L23.3333 36.6667L0 20L26.6667 33.3333Z",fill:"#91F466"}),V.createElement("path",{d:"M30 30L26.6667 33.3333L0 20L30 30Z",fill:"#BAF8A0"}),V.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40 20L35.3846 18.4615L20 40L40 20Z",fill:"#1D1D1D"}),V.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35.3846 18.4615L20 40L31.4286 17.1429L35.3846 18.4615Z",fill:"#525252"}),V.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.4286 17.1429L20 40L28 16L31.4286 17.1429Z",fill:"#707070"}));function W(e,t){var n=e.title,a=e.titleId,r=M(e,["title","titleId"]);return V.createElement("svg",g({width:216,height:40,viewBox:"0 0 216 40",fill:"none",ref:t,"aria-labelledby":a},r),n?V.createElement("title",{id:a},n):null,Z,w,k,A,F,R,P,_,N,S,T,I,B)}var G=V.forwardRef(W),J=(n.p,n(41),{active:"#55EF14",inactive:"#1D1D1D"}),K=function(e){var t=e.isActive?J.active:J.inactive;return Object(a.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 19 19",fill:"none",children:Object(a.jsx)("path",{d:"M0.0681463 8.97997C0.023367 9.5621 0.235197 10.1347 0.648041 10.5476L8.48288 18.3824C9.26393 19.1635 10.5303 19.1635 11.3113 18.3824L18.3824 11.3113C19.1634 10.5303 19.1634 9.26396 18.3824 8.48291L10.5475 0.64808C10.1347 0.235235 9.56206 0.0234053 8.97993 0.0681844L2.41394 0.573261C1.43038 0.648919 0.648881 1.43042 0.573223 2.41398L0.0681463 8.97997ZM7.06866 7.0687C7.84971 6.28765 7.84971 5.02132 7.06866 4.24027C6.28761 3.45923 5.02129 3.45923 4.24024 4.24027C3.45919 5.02132 3.45919 6.28765 4.24024 7.0687C5.02129 7.84975 6.28761 7.84975 7.06866 7.0687Z",fill:t})})},U=function(e){var t=e.isActive?J.active:J.inactive;return Object(a.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[Object(a.jsx)("path",{d:"M0 3.5C0 3.77614 0.223858 4 0.5 4H3.5C3.77614 4 4 3.77614 4 3.5V0.5C4 0.223858 3.77614 0 3.5 0H0.5C0.223858 0 0 0.223858 0 0.5V3.5Z",fill:t}),Object(a.jsx)("path",{d:"M6 15.5C6 15.7761 6.22386 16 6.5 16H9.5C9.77614 16 10 15.7761 10 15.5V12.5C10 12.2239 9.77614 12 9.5 12H6.5C6.22386 12 6 12.2239 6 12.5V15.5Z",fill:t}),Object(a.jsx)("path",{d:"M4 15.5C4 15.7761 3.77614 16 3.5 16H0.5C0.223858 16 0 15.7761 0 15.5V12.5C0 12.2239 0.223858 12 0.5 12H3.5C3.77614 12 4 12.2239 4 12.5V15.5Z",fill:t}),Object(a.jsx)("path",{d:"M0 9.5C0 9.77614 0.223858 10 0.5 10H3.5C3.77614 10 4 9.77614 4 9.5V6.5C4 6.22386 3.77614 6 3.5 6H0.5C0.223858 6 0 6.22386 0 6.5V9.5Z",fill:t}),Object(a.jsx)("path",{d:"M10 9.5C10 9.77614 9.77614 10 9.5 10H6.5C6.22386 10 6 9.77614 6 9.5V6.5C6 6.22386 6.22386 6 6.5 6H9.5C9.77614 6 10 6.22386 10 6.5V9.5Z",fill:t}),Object(a.jsx)("path",{d:"M12.5 0C12.2239 0 12 0.223858 12 0.5V3.5C12 3.77614 12.2239 4 12.5 4H15.5C15.7761 4 16 3.77614 16 3.5V0.5C16 0.223858 15.7761 0 15.5 0H12.5Z",fill:t}),Object(a.jsx)("path",{d:"M10 3.5C10 3.77614 9.77614 4 9.5 4H6.5C6.22386 4 6 3.77614 6 3.5V0.5C6 0.223858 6.22386 0 6.5 0H9.5C9.77614 0 10 0.223858 10 0.5V3.5Z",fill:t}),Object(a.jsx)("path",{d:"M12 9.5C12 9.77614 12.2239 10 12.5 10H15.5C15.7761 10 16 9.77614 16 9.5V6.5C16 6.22386 15.7761 6 15.5 6H12.5C12.2239 6 12 6.22386 12 6.5V9.5Z",fill:t}),Object(a.jsx)("path",{d:"M16 15.5C16 15.7761 15.7761 16 15.5 16H12.5C12.2239 16 12 15.7761 12 15.5V12.5C12 12.2239 12.2239 12 12.5 12H15.5C15.7761 12 16 12.2239 16 12.5V15.5Z",fill:t})]})},q=function(){var e=Object(D.f)(),t=function(e){return"nav__link ".concat(n(e)?"nav__link--active":"")},n=function(t){return t.includes(e.pathname)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:"nav",children:[Object(a.jsx)("div",{className:"nav__logo",children:Object(a.jsx)(G,{})}),Object(a.jsxs)(c.b,{className:t(["/applications","/"]),to:"/applications",children:[Object(a.jsx)(U,{isActive:n(["/applications","/"])}),Object(a.jsx)(i.a,{id:"nav.apps"})]}),Object(a.jsxs)(c.b,{className:t(["/offers"]),to:"/offers",children:[Object(a.jsx)(K,{isActive:n(["/offers"])}),Object(a.jsx)(i.a,{id:"nav.offers"})]})]})})},z=(n(44),function(e){var t=e.children,n=Object(l.c)((function(e){return e.app.locale}));return Object(a.jsxs)(i.b,{language:n,locales:y,children:[Object(a.jsx)(H,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(q,{}),Object(a.jsxs)("div",{className:"container__right",children:[Object(a.jsx)(E,{}),Object(a.jsx)("main",{className:"main",children:t})]})]})]})}),Q=(n(45),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h2",{children:"Applications"})})}),X=(n(46),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h2",{children:"Offers"})})}),Y=function(){return Object(a.jsx)(z,{children:Object(a.jsxs)(D.c,{children:[Object(a.jsx)(D.a,{path:"/offers",children:Object(a.jsx)(X,{})}),Object(a.jsx)(D.a,{path:["/","/applications"],children:Object(a.jsx)(Q,{})})]})})},$=n(12),ee=n(29),te=n(3),ne={applications:[]},ae=n(24),re={networks:[],offers:[]},ce={loader:!1,alert:!1,locale:"en",theme:"light"},le=Object($.c)({applications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(te.a)(Object(te.a)({},e),{},{applications:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(te.a)(Object(te.a)({},e),{},{theme:t.payload});case C:return Object(te.a)(Object(te.a)({},e),{},{locale:t.payload});case j:return Object(te.a)(Object(te.a)({},e),{},{alert:t.payload});case d:return Object(te.a)(Object(te.a)({},e),{},{alert:!1});case h:return Object(te.a)(Object(te.a)({},e),{},{loader:t.payload});case O:return Object(te.a)(Object(te.a)({},e),{},{loader:!1});default:return e}},offers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(te.a)(Object(te.a)({},e),{},{offers:t.payload});case u:return Object(te.a)(Object(te.a)({},e),{},{offers:[t.payload].concat(Object(ae.a)(e.offers))});case p:return Object(te.a)(Object(te.a)({},e),{},{networks:t.payload});case f:return Object(te.a)(Object(te.a)({},e),{},{networks:[t.payload].concat(Object(ae.a)(e.offers))});default:return e}}}),ie=Object($.d)(le,Object($.a)(ee.a)),se=(n(47),n(5)),oe=n.n(se),ue=n(9),pe=function(){var e=Object(ue.a)(oe.a.mark((function e(t){var n,a;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),fe="https://my-json-server.typicode.com/kvrvgixzis/marlerino-test-react",Ce="".concat(fe,"/offers"),je="".concat(fe,"/networks"),de=function(){var e=Object(ue.a)(oe.a.mark((function e(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(Ce);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(ue.a)(oe.a.mark((function e(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(je);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(ue.a)(oe.a.mark((function e(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe("http://ws75.aptoide.com/api/7/apps/search?query=%22Halloween%22");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();ie.dispatch(function(){var e=Object(ue.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.next=3,de();case 3:!(n=e.sent)&&t(x("Error offers loading")),console.log("offers: ",n),n&&t({type:o,payload:n}),t(m());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ie.dispatch(function(){var e=Object(ue.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.next=3,he();case 3:!(n=e.sent)&&t(x("Error networks loading")),console.log("networks: ",n),n&&t({type:p,payload:n}),t(m());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ie.dispatch(function(){var e=Object(ue.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.next=3,Oe();case 3:!(n=e.sent)&&t(x("Error applications loading")),console.log("applications: ",n),n&&t({type:s,payload:n}),t(m);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(r.render)(Object(a.jsx)(l.a,{store:ie,children:Object(a.jsx)(c.a,{children:Object(a.jsx)(Y,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.04cf2799.chunk.js.map