(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[82021],{217549:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(124852),a=t.n(n),o=t(675263),c=t.n(o),l=["href","readOnly","children"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function u(e){var r=e.href,t=e.readOnly,n=e.children,o=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,l);return t?n:a().createElement("a",i({href:r},o),n)}u.propTypes={href:c().string,readOnly:c().bool.isRequired,children:c().any},u.defaultProps={href:"",readOnly:!1};const s=u},834065:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(124852),a=t.n(n),o=t(675263),c=t.n(o),l=t(877593),i=t(217549),u=["resource","readOnly","formatHref","pathname"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function f(e){var r,t,n,o=e.resource,c=e.readOnly,f=e.formatHref,m=e.pathname,d=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,u);return d.detailsPanel?a().createElement(i.Z,{readOnly:c,href:f({pathname:m,query:{"filter{owner.username.in}":null===(n=o.owner)||void 0===n?void 0:n.username}})},o.owner&&(0,l.vW)(o.owner)):a().createElement("p",s({className:"card-text gn-card-user"},d),(null===(r=o.owner)||void 0===r?void 0:r.avatar)&&a().createElement("img",{src:o.owner.avatar,alt:(0,l.vW)(o.owner),className:"gn-card-author-image"}),a().createElement(i.Z,{readOnly:c,href:f({pathname:m,query:{"filter{owner.username.in}":null===(t=o.owner)||void 0===t?void 0:t.username}})},o.owner&&(0,l.vW)(o.owner)))}f.propTypes={resource:c().object,readOnly:c().bool,formatHref:c().func,props:c().any},f.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const m=f},793520:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var n=t(124852),a=t.n(n),o=t(480681);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}o.Dropdown.Item=o.MenuItem,o.Dropdown.Divider=function(e){return a().createElement(o.MenuItem,c({},e,{divider:!0}))};const l=o.Dropdown},182021:(e,r,t)=>{"use strict";t.d(r,{Z:()=>O});var n=t(124852),a=t.n(n),o=t(805346),c=t(507412),l=t(303744),i=t(51605),u=t(535721),s=t(71268),f=t(217549),m=t(834065),d=t(675263),p=t.n(d),y=t(793520);function g(e){var r,t,l=e.options,i=e.resource,u=e.buildHrefByTemplate,s=(0,n.useRef)(),f="gn-card-dropdown",m=null==s||null===(r=s.current)||void 0===r?void 0:r.querySelector(".".concat(f)),d=0===((null==m||null===(t=m.children)||void 0===t?void 0:t.length)||0);return a().createElement("div",{ref:s,className:"gn-resource-action-buttons",onClick:function(e){return e.stopPropagation()},style:d?{display:"none"}:{}},a().createElement(y.Z,{className:"gn-card-options",pullRight:!0,id:"gn-card-options-".concat(i.pk2||i.pk)},a().createElement(y.Z.Toggle,{variant:"default",size:"sm",noCaret:!0},a().createElement(c.Z,{name:"ellipsis-v"})),a().createElement(y.Z.Menu,{className:f},l.map((function(e){if("plugin"===e.type){var r=e.Component;return a().createElement(r,{key:e.action,resource:i})}return a().createElement(y.Z.Item,{key:e.href,href:u(i,e.href)},a().createElement(c.Z,{name:e.icon})," ",a().createElement(o.Z,{msgId:e.labelId}))})))))}g.propTypes={options:p().array,resource:p().object,buildHrefByTemplate:p().func},g.defaultProps={options:[],resource:{},buildHrefByTemplate:function(){}};const v=g;function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=(0,n.forwardRef)((function(e,r){var t,d,p=e.data,y=e.active,g=e.options,h=e.formatHref,O=e.getTypesInfo,E=e.layoutCardsStyle,w=e.buildHrefByTemplate,j=e.readOnly,P=e.className,Z=e.loading,I=e.featured,N=e.onClick,S=e.downloading,k=e.getDetailHref,A=void 0===k?function(e){return h({pathname:"/detail/".concat(e.resource_type,"/").concat(e.pk)})}:k,_=p,T=O(),x=(T[_.subtype]||T[_.resource_type]||{}).icon,H=_&&(T[_.subtype]||T[_.resource_type])||{},C=H.formatDetailUrl,D=void 0===C?function(e){return null==e?void 0:e.detail_url}:C,q=H.canPreviewed,B=H.hasPermission,R=(null==_?void 0:_.pk)&&D(_),M=(null==_?void 0:_.pk)&&q&&q(_),W=(null==_?void 0:_.pk)&&B&&B(_),z=(null==_?void 0:_.pk)&&(0,u.J7)(_),F=(t=(0,n.useState)(!1),d=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,c,l=[],i=!0,u=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=o.call(t)).done)&&(l.push(n.value),l.length!==r);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(u)throw a}}return l}}(t,d)||function(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}(t,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),U=F[0],J=F[1],K="list"===E?"card-img-left":"card-img-top";return a().createElement("div",{ref:r,onClick:function(){N(p)},className:"gn-resource-card".concat(y?" active":"").concat(j?" read-only":""," gn-card-type-").concat(E," ").concat("list"===E?"rounded-0":"").concat(P?" ".concat(P):"")},!j&&a().createElement("a",{className:"gn-resource-card-link",href:A(_)}),!j&&g&&g.length>0&&"grid"===E&&a().createElement(v,{buildHrefByTemplate:w,resource:_,options:g,readOnly:j}),a().createElement("div",{className:"card-resource-".concat(E)},U||!_.thumbnail_url?a().createElement("div",{className:"".concat(K," card-img-placeholder")},a().createElement(c.Z,{name:x})):a().createElement("img",{className:K,src:_.thumbnail_url,onError:function(){return J(!0)}}),a().createElement("div",{className:"gn-resource-card-body-wrapper"},a().createElement("div",{className:"card-body"},a().createElement("div",{className:"card-title"},a().createElement("div",null,x&&!Z&&!S&&a().createElement(a().Fragment,null,a().createElement(f.Z,{readOnly:j,href:h({query:{"filter{resource_type.in}":_.resource_type}})},a().createElement(c.Z,{name:x}))),(Z||S)&&a().createElement(i.Z,null),a().createElement(f.Z,{className:I?"gn-featured-card-title":"gn-card-title",readOnly:j,href:A(_)},_.title)),a().createElement("div",null,a().createElement(s.Z,{resource:_}))),a().createElement("p",{className:"card-text gn-card-description"},_.raw_abstract?_.raw_abstract:"..."),!j&&g&&g.length>0&&"list"===E&&a().createElement(v,{buildHrefByTemplate:w,resource:_,options:g,readOnly:j})),a().createElement("div",{className:"gn-footer-wrapper"},a().createElement("div",{className:"gn-card-footer",style:{padding:g&&0===g.length?"0 0.25rem 0 0.5rem":"0 0.5rem"}},a().createElement(m.Z,{resource:_,readOnly:j,formatHref:h}),a().createElement("div",{className:"gn-card-actions"},!j&&(R||z)&&a().createElement("div",{className:"".concat(g&&0===g.length?"gn-card-view-editor-right":"gn-card-view-editor")},a().createElement(l.Z,{variant:"primary",href:M||W?R:z,rel:"noopener noreferrer"},a().createElement(o.Z,{msgId:"gnhome.view"})))))))))}));h.defaultProps={links:[],theme:"light",getTypesInfo:u.NN,formatHref:function(){return"#"},featured:!1,onClick:function(){}};const O=h},71268:(e,r,t)=>{"use strict";t.d(r,{Z:()=>g});var n=t(124852),a=t.n(n),o=t(805346),c=t(675263),l=t.n(c),i=t(507412),u=t(815135),s=t(441609),f=t.n(s),m=t(535721),d=t(303744),p=(0,u.Z)(d.Z),y=function(e){var r,t,n,c=e.resource,l=void 0===c?{}:c,u=(0,m.fu)(l),s=u.isApproved,d=u.isPublished,y=u.isProcessing,g=u.isCopying,v=u.isDeleting,b=u.isDeleted;return f()(l)?null:a().createElement("p",{className:"gn-resource-status-text"},!y&&(!s||!d)&&a().createElement(p,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(r={isApproved:s,isPublished:d},t=r.isApproved,n=r.isPublished,!t&&n?a().createElement(o.Z,{msgId:"gnhome.pendingApproval"}):t||n?n||t?"":a().createElement(o.Z,{msgId:"gnhome.unpublished"}):a().createElement(o.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(v||b||g)&&"0.4rem"},tooltipPosition:"top"},a().createElement(i.Z,{name:"info-circle",className:"gn-resource-status-pending"})),v&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(o.Z,{msgId:"gnviewer.deleting"})),b&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(o.Z,{msgId:"gnviewer.deleted"})),g&&a().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},a().createElement(o.Z,{msgId:"gnviewer.cloning"})))};y.propTypes={isApproved:l().bool,isPublished:l().bool},y.defaultProps={isApproved:!0,isPublished:!0};const g=y},228261:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(124852),a=t.n(n),o=t(675263),c=t.n(o),l=["id","className","style","children"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function u(e){var r=e.id,t=e.className,n=e.style,o=e.children,c=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,l),u=t?" "+t:"";return a().createElement(a().Fragment,null,a().createElement("div",i({},c,{id:r,className:"gn-spinner".concat(u),style:n}),a().createElement("div",null)),o)}u.propTypes={id:c().string,className:c().string,style:c().object},u.defaultProps={};const s=u},51605:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n.Z});var n=t(228261)},877593:(e,r,t)=>{"use strict";t.d(r,{nz:()=>b,vW:()=>h,Ie:()=>O,RJ:()=>E,AW:()=>w,Yo:()=>j});var n=t(472500),a=t.n(n),o=t(984596),c=t.n(o),l=t(957557),i=t.n(l),u=t(423570),s=t.n(u);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var m=["search"];function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==f(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var b=function(e){var r=e.location,t=e.pathname,n=e.query,o=e.replaceQuery,l=e.excludeQueryKeys,u=r.search,s=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(r,m),f=a().parse(u||"",!0).query,p=n?o?g(g({},f),n):Object.keys(n).reduce((function(e,r){var t=n[r],a=c()(e[r]).filter((function(e){return e})),o=-1===a.indexOf(t)?[].concat(d(a),[t]):a.filter((function(e){return e!==t}));return g(g({},e),{},v({},r,o))}),f):f;return"#".concat(a().format(g(g(g({},s),t&&{pathname:t}),{},{query:i()(Object.keys(p).reduce((function(e,r){return p[r]&&0!==p[r].length?g(g({},e),{},v({},r,p[r])):e}),{}),l)})))};function h(e){return e.first_name&&e.last_name?"".concat(e.first_name," ").concat(e.last_name):e.username}function O(e){var r=a().parse(e.search,!0).query;return Object.keys(r).reduce((function(e,r){return 0===r.indexOf("filter")||"f"===r||"q"===r?g(g({},e),{},v({},r,[])):e}),{extent:void 0})}function E(e){return Object.keys(e).reduce((function(r,t){return["sort","page","d"].includes(t)?r:[].concat(d(r),d(c()(e[t]).map((function(e){return{key:t,value:e}}))))}),[])}var w=function e(r){return r.some((function(r){return r.items?e(r.items):!!r.facet}))},j=function e(r){var t=r.formItems,n=r.facetItems;return t.reduce((function(r,t){if(t.facet){var a=(n||[]).filter((function(e){return e.type===t.facet})).sort((function(e,r){return e.order-r.order}));return[].concat(d(r),d(a.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.name,n=e.config,a=e.filter,o=e.label,c=e.is_localized,l=e.loadItems,i=n.style||t.style,u=n.type||t.type;return g(g({uuid:s()(),name:r,key:a,id:r,type:u,style:i},c?{labelId:o}:{label:o}),{},{loadItems:function(e,t,n){return l({name:r,style:i,filterKey:a,filters:t,setFilters:n},e)}})}))))}return null!=t&&t.items?[].concat(d(r),[g(g({},t),{},{uuid:t.uuid||s()(),items:e({formItems:t.items,facetItems:n})})]):[].concat(d(r),[g(g({},t),{},{uuid:t.uuid||s()()})])}),[])}}}]);