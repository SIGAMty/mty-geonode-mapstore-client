(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41103],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>a,Ih:()=>l,Xw:()=>i,Pn:()=>c,DZ:()=>s,e8:()=>u,E0:()=>d,F9:()=>p,X_:()=>f,pb:()=>m,qb:()=>y,Re:()=>b,ih:()=>v,xy:()=>g,jL:()=>O,oz:()=>E,ph:()=>h,lF:()=>I,gG:()=>C,cb:()=>j,GI:()=>P,B1:()=>N,fv:()=>_,gc:()=>S,zX:()=>w,ZF:()=>R,Zb:()=>T,DW:()=>A,Xp:()=>D,Fm:()=>F,sV:()=>k,Mn:()=>Z,LU:()=>G,XP:()=>x,WU:()=>M,JB:()=>z,g:()=>U,ws:()=>Y,HP:()=>L,aN:()=>q,Pg:()=>X,u0:()=>W,TM:()=>B,PM:()=>K,lK:()=>V,sv:()=>$,MO:()=>Q,oO:()=>J,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ae,Y$:()=>le,Qu:()=>ie,kT:()=>ce});var r=n(647310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",l="EXCEPTIONS_FEATURE_INFO",i="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",u="CHANGE_MAPINFO_FORMAT",d="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",f="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",b="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",g="FEATURE_INFO_CLICK",O="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",h="TOGGLE_MAPINFO_STATE",I="UPDATE_CENTER_TO_MARKER",C="IDENTIFY:CHANGE_PAGE",j="IDENTIFY:CLOSE_IDENTIFY",P="IDENTIFY:CHANGE_FORMAT",N="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",_="IDENTIFY:EDIT_LAYER_FEATURES",S="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",w="IDENTIFY:SET_MAP_TRIGGER",R="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",T="IDENTIFY:SET_SHOW_IN_MAP_POPUP",A="IDENTIFY:IDENTIFY_IS_MOUNTED",D="IDENTIFY:INIT_PLUGIN";function F(e,t,n,r,a){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:a}}function k(e,t,n,r){return{type:a,error:t,reqId:e,requestParams:n,layerMetadata:r}}function Z(e,t,n,r){return{type:l,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function G(){return{type:b}}function x(){return{type:v}}function M(e,t){return{type:c,reqId:e,request:t}}function z(e,t,n,r){return{type:y,layer:e,request:t,metadata:n,queryableLayers:r}}function U(){return{type:s}}function Y(e){return{type:u,infoFormat:e}}function L(){return{type:d}}function q(){return{type:p}}function H(e){return{type:f,reverseGeocodeData:e.data}}function X(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(H(e))})).catch((function(e){t(H(e))}))}}function W(){return{type:m}}function B(){return{type:h}}function K(e){return{type:I,status:e}}function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:g,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function $(e){return{type:O,point:e}}function Q(e){return{type:E,enabled:e}}function J(e){return{type:C,index:e}}var ee=function(){return{type:j}},te=function(e){return{type:P,format:e}},ne=function(e){return{type:N,showCoordinateEditor:e}},re=function(e){return{type:_,layer:e}},oe=function(e){return{type:S,query:e}},ae=function(e){return{type:w,trigger:e}},le=function(e){return{type:T,value:e}},ie=function(e){return{type:A,isMounted:e}},ce=function(e){return{type:D,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(375875),o=n.n(r),a=n(472500),l=n.n(a),i=n(727418),c=n.n(i),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const u={geocode:function(e,t){var n=c()({q:e},s,t||{}),r=l().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},s),r=l().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},807472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(727418),o=n.n(r),a=n(675263),l=n.n(a),i=n(124852),c=n.n(i),s=n(485294),u=n.n(s),d=n(472986),p=n.n(d),f=n(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(i,e);var t,n,r,a,l=(r=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(a){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function i(){var e;v(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(h(e=l.call.apply(l,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(f.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(h(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(h(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(h(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),n=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(c().Component);C(j,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),C(j,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const P=j},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(124852),o=n.n(r);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(461365),o=n(356936);const a=(0,r.Z)(o.h_)},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(124852),o=n.n(r),a=n(294184),l=n.n(a),i=n(480681),c=n(807472),s=n(80717),u=n(867076),d=n(819081),p=n.n(d),f=n(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,a=e.loadingText,u=e.onClose,d=void 0===u?function(){}:u,b=e.title,v=void 0===b?"":b,g=e.clickOutEnabled,O=void 0===g||g,E=e.showClose,h=void 0===E||E,I=e.disabledClose,C=void 0!==I&&I,j=e.showFullscreen,P=void 0!==j&&j,N=e.fullscreenType,_=void 0===N?"full":N,S=e.buttons,w=void 0===S?[]:S,R=e.size,T=void 0===R?"":R,A=e.bodyClassName,D=void 0===A?"":A,F=e.children,k=e.draggable,Z=void 0!==k&&k,G=e.fullscreenState,x=e.onFullscreen,M=e.fade,z=void 0!==M&&M,U=e.fitContent,Y=e.modalClassName,L=void 0===Y?"":Y,q=e.dialogClassName,H=void 0===q?"":q,X=e.enableFooter,W=void 0===X||X,B=m[T]||"",K=P&&"expanded"===G&&y.className[_]||"",V=n?o().createElement("div",{className:"modal-fixed ".concat(L," ")+(Z?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:O?d:function(){},containerClassName:"ms-resizable-modal",draggable:Z,modal:!0,className:l()("modal-dialog modal-content",B,K,H,{"ms-fit-content":U})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),P&&y.className[_]&&o().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return x("expanded"===G?"collapsed":"expanded")},glyph:y.glyph[G][_]}),h&&d&&o().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:d,disabled:C}))),o().createElement("div",{role:"body",className:D},F),W&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(f.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?a:null),o().createElement(s.Z,{buttons:w})))):null;return z?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},V):V}))},993451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(86638),o=n(675263),a=n.n(o),l=n(984596),i=n.n(l),c=n(701469),s=n.n(c),u=n(414293),d=n.n(u),p=n(747037),f=n.n(p),m=n(867076),y=["messages"];function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var a=(0,r.S$)(e,o[n]||f()(o)&&o||"");return g(g({},o),{},O({},n,d()(a)?t:a))}));var o=(0,r.S$)(e,t);return d()(o)?t:o},h=function(e,t,n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return g(g({},r),{},O({},o,e[o]&&E(t,e[o],n)))}};const I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,m.compose)((0,m.getContext)({messages:a().object}),(0,m.mapProps)((function(n){var r=n.messages,o=b(n,y);return g(g({},o),i()(e).reduce(h(o,r,t),{}))})))}},925108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(782904),o=n(727418),a=n.n(o),l=n(921914);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return a()({},e,s({},t.control,a()({},e[t.control],s({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,s({},t.control,a()({},e[t.control],s({},t.property,void 0)))):a()({},e,s({},t.control,a()({},e[t.control],s({},t.property,t.value))));case r.dc:return a()({},e,s({},t.control,a()({},e[t.control],t.properties)));case r.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=o.reduce((function(t,n){return a()(t,s({},n,a()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return a()({},e,i);case l.DW:return c(c({},e),{},{info:c(c({},e.info),{},{available:t.isMounted})});default:return e}}},793520:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852),o=n.n(r),a=n(480681);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}a.Dropdown.Item=a.MenuItem,a.Dropdown.Divider=function(e){return o().createElement(a.MenuItem,l({},e,{divider:!0}))};const i=a.Dropdown},881114:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>q});var r=n(124852),o=n.n(r),a=n(171703),l=n(22222),i=n(322843),c=n(782904),s=n(805346),u=n(480681),d=n(800827),p=n(274621),f=n(303744),m=n(73443),y=n(925108),b=n(572036),v=n(162170),g=n(18576),O=n(675263),E=n.n(O),h=n(694745),I=n(993451),C=n(532425),j=n(399534);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=(0,I.Z)("placeholder")(u.FormControl);function S(e){var t=e.update,n=e.error,a=e.success,l=e.labelId,i=e.resource,c=e.contentId,d=e.saving,p=e.loading,f=e.enabled,m=e.onClose,y=e.onSave,b=e.onClear,v=e.hideDescription,g=e.copy,O=P((0,r.useState)(),2),E=O[0],I=O[1],N=P((0,r.useState)(""),2),S=N[0],w=N[1],R=P((0,r.useState)(""),2),T=R[0],A=R[1],D=P((0,r.useState)(!1),2),F=D[0],k=D[1],Z=(0,r.useRef)();Z.current={contentId:c,resource:i};var G=(0,r.useRef)(null);(0,r.useEffect)((function(){b()}),[f]),(0,r.useEffect)((function(){if(!p){var e=Z.current.resource||{};I(e.thumbnail_url),w(e.title),A(e.abstract),k(e.title?void 0:"error")}}),[f,p]);var x=p||d;return o().createElement(j.Z,null,o().createElement("div",{ref:G,onKeyUp:function(e){return e.stopPropagation(),(13===e.keyCode||"Enter"===e.code)&&(r=(n=g?{title:S,isUpdate:t,content:c,image:E,text:T,reload:!1}:{title:S,isUpdate:t,content:c,image:E,text:T,reload:!0}).title,o=n.isUpdate,a=n.content,l=n.image,i=n.text,s=n.reload,y(o?a:void 0,{thumbnail:l,name:r,description:i},s));var n,r,o,a,l,i,s}},o().createElement(h.Z,{title:o().createElement(s.Z,{msgId:l}),show:f,fitContent:!0,clickOutEnabled:!1,buttons:x?[]:[{text:o().createElement(s.Z,{msgId:"close"}),onClick:function(){return m()}},{text:o().createElement(s.Z,{msgId:l}),disabled:!!F,bsStyle:"primary",onClick:function(){return y(t?c:void 0,{thumbnail:E,name:S,description:T},!0)}}],onClose:x?null:function(){return m()}},n&&o().createElement(u.Alert,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"map.mapError.errorDefault"}))),a&&o().createElement(u.Alert,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(s.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(u.Form,{onSubmit:function(e){return e.preventDefault()}},o().createElement(u.FormGroup,{validationState:F},o().createElement(u.ControlLabel,null,o().createElement(s.Z,{msgId:"gnviewer.title"})),o().createElement(_,{autoFocus:!0,placeholder:"gnviewer.titlePlaceholder",value:S,onChange:function(e){w(e.target.value),k(e.target.value?void 0:"error")},onBlur:function(e){k(e.target.value?void 0:"error")}})),!v&&o().createElement(u.FormGroup,null,o().createElement(u.ControlLabel,null,o().createElement(s.Z,{msgId:"saveDialog.description"})),o().createElement(_,{placeholder:"saveDialog.descriptionPlaceholder",value:T,onChange:function(e){return A(e.target.value)}}))),x&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(C.Z,{size:70})))))}S.propTypes={update:E().bool,labelId:E().string,contentId:E().oneOfType([E().string,E().number]),resource:E().object,loading:E().bool,enabled:E().bool,onClose:E().func,onSave:E().func,onInit:E().func,onClear:E().func,error:E().oneOfType([E().string,E().object]),success:E().oneOfType([E().string,E().object]),thumbnailOptions:E().object},S.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const w=S;var R=n(76907),T=n(12530),A=n(643892),D=n(452992),F=n(793520),k=n(507412),Z=["resources","onSave","onCopy","isNew","closeOnSave","labelId"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=(0,a.connect)((0,l.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[T.zj.COPY_RESOURCE])||void 0===n?void 0:n.value},d._H,function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.saving},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.error},function(e){var t;return null==e||null===(t=e.gnsave)||void 0===t?void 0:t.success},R.fg,R.V$,D.SJ],(function(e,t,n,r,o,a,l,i,c){return{enabled:!!e,contentId:l||(null==t?void 0:t.id),resource:null==e?void 0:e[0],loading:c||n,saving:r,error:o,success:a,isNew:i}})),{onClose:c.Xg.bind(null,T.zj.COPY_RESOURCE,"value",void 0),onSave:m.Vj,onCopy:A.EU.bind(null,T.zj.COPY_RESOURCE),onClear:m.rG})((function(e){e.resources;var t,n=e.onSave,r=e.onCopy,a=e.isNew,l=e.closeOnSave,i=e.labelId,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,Z);return o().createElement(w,G({},c,{hideDescription:!a,copy:!a,key:(null==c||null===(t=c.resource)||void 0===t?void 0:t.pk)||"new",labelId:i||"save",onSave:function(e,t,o){var i;a?n(e,t,o):r([M(M({},null==c?void 0:c.resource),{},{title:t.name||(null==c||null===(i=c.resource)||void 0===i?void 0:i.title)})]),l&&c.onClose()}}))})),Y=(0,a.connect)((0,l.P1)(p.jl,R.ez,R.yK,R.YR,R.V$,(function(e,t,n,r,o){return{enabled:e&&t&&((null==n?void 0:n.is_copyable)||o),resource:n,disabled:!!r}})),{onClick:c.Xg.bind(null,T.zj.COPY_RESOURCE,"value")})((function(e){var t=e.enabled,n=e.onClick,r=e.variant,a=e.size,l=e.resource,i=e.disabled;return t?o().createElement(f.Z,{variant:r||"primary",size:a,disabled:i,onClick:function(){return n([l])}},o().createElement(s.Z,{msgId:"saveAs"})):null})),L=(0,a.connect)((0,l.P1)([p.jl,R.ez],(function(e,t){return{authenticated:e,userCanAddResource:t}})),{onCopy:c.Xg.bind(null,T.zj.COPY_RESOURCE,"value")})((function(e){var t,n=e.resource,r=e.authenticated,a=e.onCopy,l=e.userCanAddResource;return r&&l&&null!=n&&n.is_copyable&&null!=n&&null!==(t=n.perms)&&void 0!==t&&t.includes("download_resourcebase")?o().createElement(F.Z.Item,{onClick:function(){return a([n])}},o().createElement(k.Z,{name:"copy"})," ",o().createElement(s.Z,{msgId:"gnviewer.clone"})):null}));const q=(0,i.rx)("SaveAs",{component:U,containers:{BurgerMenu:{name:"saveAs",position:30,text:o().createElement(s.Z,{msgId:"saveAs"}),icon:o().createElement(u.Glyphicon,{glyph:"floppy-open"}),action:c.Xg.bind(null,"saveAs",null),selector:(0,l.P1)(p.jl,R.ez,(function(e,t){return{style:e&&t?{}:{display:"none"}}}))},ActionNavbar:{name:"SaveAs",Component:Y},ResourcesGrid:{name:T.zj.COPY_RESOURCE,target:"cardOptions",Component:L}},epics:M({},g.ZP),reducers:{gnresource:b.Z,gnsave:v.Z,controls:y.Z}})},162170:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(73443),o=n(643892),a={};const l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.$X:return a;case r.rs:case r.oz:return{saving:!0,error:void 0,success:void 0};case o.Js:return{savingThumbnailMap:!0};case r.AY:return{success:t.success,saving:!1};case r.SW:return{error:t.error,saving:!1};case r.yB:return{};default:return e}}},819081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);