(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{3266:function(r,e,o){"use strict";o.d(e,{Z:function(){return M}});var t=o(5893),n=o(7294),p=o(1120),i=o(5131),s=o(7462),a=(o(5697),o(9668));function l(r,e){var o={};return Object.keys(r).forEach((function(t){-1===e.indexOf(t)&&(o[t]=r[t])})),o}function c(r){var e=function(e){var o=r(e);return e.css?(0,s.Z)({},(0,a.Z)(o,r((0,s.Z)({theme:e.theme},e.css))),l(e.css,[r.filterProps])):e.sx?(0,s.Z)({},(0,a.Z)(o,r((0,s.Z)({theme:e.theme},e.sx))),l(e.sx,[r.filterProps])):o};return e.propTypes={},e.filterProps=["css","sx"].concat((0,i.Z)(r.filterProps)),e}var f=c;var u=function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t=function(r){return e.reduce((function(e,o){var t=o(r);return t?(0,a.Z)(e,t):e}),{})};return t.propTypes={},t.filterProps=e.reduce((function(r,e){return r.concat(e.filterProps)}),[]),t},d=o(4942),m=o(1410);function h(r,e){return e&&"string"===typeof e?e.split(".").reduce((function(r,e){return r&&r[e]?r[e]:null}),r):null}var y=function(r){var e=r.prop,o=r.cssProperty,t=void 0===o?r.prop:o,n=r.themeKey,p=r.transform,i=function(r){if(null==r[e])return null;var o=r[e],i=h(r.theme,n)||{};return(0,m.k)(r,o,(function(r){var e;return"function"===typeof i?e=i(r):Array.isArray(i)?e=i[r]||r:(e=h(i,r)||r,p&&(e=p(e))),!1===t?e:(0,d.Z)({},t,e)}))};return i.propTypes={},i.filterProps=[e],i};function g(r){return"number"!==typeof r?r:"".concat(r,"px solid")}var x=u(y({prop:"border",themeKey:"borders",transform:g}),y({prop:"borderTop",themeKey:"borders",transform:g}),y({prop:"borderRight",themeKey:"borders",transform:g}),y({prop:"borderBottom",themeKey:"borders",transform:g}),y({prop:"borderLeft",themeKey:"borders",transform:g}),y({prop:"borderColor",themeKey:"palette"}),y({prop:"borderRadius",themeKey:"shape"})),v=u(y({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),y({prop:"display"}),y({prop:"overflow"}),y({prop:"textOverflow"}),y({prop:"visibility"}),y({prop:"whiteSpace"})),b=u(y({prop:"flexBasis"}),y({prop:"flexDirection"}),y({prop:"flexWrap"}),y({prop:"justifyContent"}),y({prop:"alignItems"}),y({prop:"alignContent"}),y({prop:"order"}),y({prop:"flex"}),y({prop:"flexGrow"}),y({prop:"flexShrink"}),y({prop:"alignSelf"}),y({prop:"justifyItems"}),y({prop:"justifySelf"})),Z=u(y({prop:"gridGap"}),y({prop:"gridColumnGap"}),y({prop:"gridRowGap"}),y({prop:"gridColumn"}),y({prop:"gridRow"}),y({prop:"gridAutoFlow"}),y({prop:"gridAutoColumns"}),y({prop:"gridAutoRows"}),y({prop:"gridTemplateColumns"}),y({prop:"gridTemplateRows"}),y({prop:"gridTemplateAreas"}),y({prop:"gridArea"})),N=u(y({prop:"position"}),y({prop:"zIndex",themeKey:"zIndex"}),y({prop:"top"}),y({prop:"right"}),y({prop:"bottom"}),y({prop:"left"})),w=u(y({prop:"color",themeKey:"palette"}),y({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),P=y({prop:"boxShadow",themeKey:"shadows"});function j(r){return r<=1?"".concat(100*r,"%"):r}var K=y({prop:"width",transform:j}),T=y({prop:"maxWidth",transform:j}),A=y({prop:"minWidth",transform:j}),_=y({prop:"height",transform:j}),k=y({prop:"maxHeight",transform:j}),C=y({prop:"minHeight",transform:j}),S=(y({prop:"size",cssProperty:"width",transform:j}),y({prop:"size",cssProperty:"height",transform:j}),u(K,T,A,_,k,C,y({prop:"boxSizing"}))),z=o(8681),E=u(y({prop:"fontFamily",themeKey:"typography"}),y({prop:"fontSize",themeKey:"typography"}),y({prop:"fontStyle",themeKey:"typography"}),y({prop:"fontWeight",themeKey:"typography"}),y({prop:"letterSpacing"}),y({prop:"lineHeight"}),y({prop:"textAlign"})),B=o(5987),O=o(6010),R=o(2916),H=o.n(R),G=o(115);function I(r,e){var o={};return Object.keys(r).forEach((function(t){-1===e.indexOf(t)&&(o[t]=r[t])})),o}var W=o(9700),D=function(r){var e=function(r){return function(e){var o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=t.name,i=(0,B.Z)(t,["name"]),a=p,l="function"===typeof e?function(r){return{root:function(o){return e((0,s.Z)({theme:r},o))}}}:{root:e},c=(0,G.Z)(l,(0,s.Z)({Component:r,name:p||r.displayName,classNamePrefix:a},i));e.filterProps&&(o=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var f=n.forwardRef((function(e,t){var p=e.children,i=e.className,a=e.clone,l=e.component,f=(0,B.Z)(e,["children","className","clone","component"]),u=c(e),d=(0,O.Z)(u.root,i),m=f;if(o&&(m=I(m,o)),a)return n.cloneElement(p,(0,s.Z)({className:(0,O.Z)(p.props.className,d)},m));if("function"===typeof p)return p((0,s.Z)({className:d},m));var h=l||r;return n.createElement(h,(0,s.Z)({ref:t,className:d},m),p)}));return H()(f,r),f}}(r);return function(r,o){return e(r,(0,s.Z)({defaultTheme:W.Z},o))}},F=f(u(x,v,b,Z,N,w,P,S,z.Z,E)),X=D("div")(F,{name:"MuiBox"}),L=(0,p.Z)((function(r){return{header:{fontSize:75,marginBottom:"-1%"},main:{fontSize:30},container:{display:"inline-block"}}})),M=function(r){var e=r.text,o=r.bold,n=L();return(0,t.jsxs)(X,{className:n.container,children:[(0,t.jsx)(X,{className:o?n.header:"",children:e.charAt(0)}),(0,t.jsx)("span",{className:n.main,children:e.substr(1).split("").map((function(r){return(0,t.jsxs)(t.Fragment,{children:[r," ",(0,t.jsx)("br",{})]})}))})]})}},6641:function(r,e,o){"use strict";o.r(e);var t=o(5893),n=(o(7294),o(3266)),p=(0,o(1120).Z)((function(r){return{side:{display:"flex",flexDirection:"row"},column:{display:"flex",flexDirection:"column"},paddingBottom:{paddingBottom:"50%"},paddingHorizontal:{padding:"0px 5%"}}}));e.default=function(){var r=p();return(0,t.jsx)("div",{className:"App",children:(0,t.jsx)("header",{className:"App-header",children:(0,t.jsxs)("div",{className:r.side,children:[(0,t.jsx)("div",{className:r.paddingHorizontal,children:(0,t.jsx)(n.Z,{text:"\u30a2\u30c3\u30b7\u30e5\u30fb\u30c9\u30c3\u30c8\u30fb\u30d3\u30f3\u306e\u5185\u90e8\u8a73\u7d30"})}),(0,t.jsxs)("div",{className:r.column,children:[(0,t.jsx)("div",{className:r.paddingBottom,children:"hello"}),(0,t.jsx)("div",{className:r.paddingBottom,children:"kya"})]})]})})})}},8375:function(r,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/internals",function(){return o(6641)}])}},function(r){r.O(0,[481,774,888,179],(function(){return e=8375,r(r.s=e);var e}));var e=r.O();_N_E=e}]);