/*! For license information please see 65792.fdaba8cd375c0c29907b.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[65792],{65792:function(e,n,r){var t;e=r.nmd(e),function(){var r,f,a,u,c,o,l,i,s,b,d,h,p,g,m,v,y,w,k,_,N,M,x,A,O,j,q,G,L,P,B,R,Y,E,S,X,C,z,U,V,F,I,K,Z,D,$,H,J,Q,T,W,ee,ne,re,te,fe,ae,ue,ce,oe,le,ie,se,be,de,he,pe,ge,ve,ye,we,ke,_e,Ne,Me,xe,Ae,Oe,je,qe,Ge=[].slice;xe=function(){var e,n,r,t,f;for(e={},t=0,n=(f="Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length;t<n;t++)r=f[t],e["[object "+r+"]"]=r.toLowerCase();return function(n){var r;return r=Object.prototype.toString.call(n),e[r]||"object"}}(),H=function(e,n,r){return null==n&&(n=0),null==r&&(r=1),e<n&&(e=n),e>r&&(e=r),e},Ae=function(e){return e.length>=3?Array.prototype.slice.call(e):e[0]},N=function(e){var n,r;for(e._clipped=!1,e._unclipped=e.slice(0),n=r=0;r<3;n=++r)n<3?((e[n]<0||e[n]>255)&&(e._clipped=!0),e[n]<0&&(e[n]=0),e[n]>255&&(e[n]=255)):3===n&&(e[n]<0&&(e[n]=0),e[n]>1&&(e[n]=1));return e._clipped||delete e._unclipped,e},u=Math.PI,we=Math.round,x=Math.cos,G=Math.floor,te=Math.pow,J=Math.log,_e=Math.sin,Ne=Math.sqrt,g=Math.atan2,W=Math.max,p=Math.abs,l=2*u,c=u/3,f=u/180,o=180/u,_=function(){return arguments[0]instanceof r?arguments[0]:function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,arguments,(function(){}))},_.default=_,h=[],null!==e&&null!=e.exports&&(e.exports=_),void 0===(t=function(){return _}.apply(n,[]))||(e.exports=t),_.version="1.3.7",d={},s=[],b=!1,r=function(){function e(){var e,n,r,t,f,a,u,c,o;for(a=this,n=[],c=0,t=arguments.length;c<t;c++)null!=(e=arguments[c])&&n.push(e);if(n.length>1&&(u=n[n.length-1]),null!=d[u])a._rgb=N(d[u](Ae(n.slice(0,-1))));else{for(b||(s=s.sort((function(e,n){return n.p-e.p})),b=!0),o=0,f=s.length;o<f&&!(u=(r=s[o]).test.apply(r,n));o++);u&&(a._rgb=N(d[u].apply(d,n)))}null==a._rgb&&console.warn("unknown format: "+n),null==a._rgb&&(a._rgb=[0,0,0]),3===a._rgb.length&&a._rgb.push(1)}return e.prototype.toString=function(){return this.hex()},e.prototype.clone=function(){return _(me._rgb)},e}(),_._input=d,_.brewer=w={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},function(){var e,n;for(e in n=[],w)n.push(w[e.toLowerCase()]=w[e])}(),_.colors=Oe={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},I=function(){var e,n,r,t,f,u,c;return t=(n=Ae(arguments))[0],e=n[1],r=n[2],u=(t+16)/116,f=isNaN(e)?u:u+e/500,c=isNaN(r)?u:u-r/200,u=a.Yn*K(u),f=a.Xn*K(f),c=a.Zn*K(c),[qe(3.2404542*f-1.5371385*u-.4985314*c),qe(-.969266*f+1.8760108*u+.041556*c),r=qe(.0556434*f-.2040259*u+1.0572252*c),n.length>3?n[3]:1]},qe=function(e){return 255*(e<=.00304?12.92*e:1.055*te(e,1/2.4)-.055)},K=function(e){return e>a.t1?e*e*e:a.t2*(e-a.t0)},a={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},se=function(){var e,n,r,t,f,a,u;return r=(t=Ae(arguments))[0],n=t[1],e=t[2],a=(f=ge(r,n,e))[0],[116*(u=f[1])-16,500*(a-u),200*(u-f[2])]},ve=function(e){return(e/=255)<=.04045?e/12.92:te((e+.055)/1.055,2.4)},je=function(e){return e>a.t3?te(e,1/3):e/a.t2+a.t0},ge=function(){var e,n,r,t;return r=(t=Ae(arguments))[0],n=t[1],e=t[2],r=ve(r),n=ve(n),e=ve(e),[je((.4124564*r+.3575761*n+.1804375*e)/a.Xn),je((.2126729*r+.7151522*n+.072175*e)/a.Yn),je((.0193339*r+.119192*n+.9503041*e)/a.Zn)]},_.lab=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["lab"]),(function(){}))},d.lab=I,r.prototype.lab=function(){return se(this._rgb)},m=function(e){var n,r,t,f,a,u,c,o,l,i,s;return 2===(e=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(_(f));return t}()).length?(l=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(f.lab());return t}(),a=l[0],u=l[1],n=function(e){var n,r;return r=function(){var r,t;for(t=[],n=r=0;r<=2;n=++r)t.push(a[n]+e*(u[n]-a[n]));return t}(),_.lab.apply(_,r)}):3===e.length?(i=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(f.lab());return t}(),a=i[0],u=i[1],c=i[2],n=function(e){var n,r;return r=function(){var r,t;for(t=[],n=r=0;r<=2;n=++r)t.push((1-e)*(1-e)*a[n]+2*(1-e)*e*u[n]+e*e*c[n]);return t}(),_.lab.apply(_,r)}):4===e.length?(s=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(f.lab());return t}(),a=s[0],u=s[1],c=s[2],o=s[3],n=function(e){var n,r;return r=function(){var r,t;for(t=[],n=r=0;r<=2;n=++r)t.push((1-e)*(1-e)*(1-e)*a[n]+3*(1-e)*(1-e)*e*u[n]+3*(1-e)*e*e*c[n]+e*e*e*o[n]);return t}(),_.lab.apply(_,r)}):5===e.length&&(r=m(e.slice(0,3)),t=m(e.slice(2,5)),n=function(e){return e<.5?r(2*e):t(2*(e-.5))}),n},_.bezier=function(e){var n;return(n=m(e)).scale=function(){return _.scale(n)},n},_.cubehelix=function(e,n,r,t,f){var a,u,c;return null==e&&(e=300),null==n&&(n=-1.5),null==r&&(r=1),null==t&&(t=1),null==f&&(f=[0,1]),a=0,"array"===xe(f)?u=f[1]-f[0]:(u=0,f=[f,f]),(c=function(c){var o,i,s,b,d;return o=l*((e+120)/360+n*c),b=te(f[0]+u*c,t),i=(0!==a?r[0]+c*a:r)*b*(1-b)/2,s=x(o),d=_e(o),_(N([255*(b+i*(-.14861*s+1.78277*d)),255*(b+i*(-.29227*s-.90649*d)),255*(b+i*(1.97294*s))]))}).start=function(n){return null==n?e:(e=n,c)},c.rotations=function(e){return null==e?n:(n=e,c)},c.gamma=function(e){return null==e?t:(t=e,c)},c.hue=function(e){return null==e?r:("array"===xe(r=e)?0==(a=r[1]-r[0])&&(r=r[1]):a=0,c)},c.lightness=function(e){return null==e?f:("array"===xe(e)?(f=e,u=e[1]-e[0]):(f=[e,e],u=0),c)},c.scale=function(){return _.scale(c)},c.hue(r),c},_.random=function(){var e,n;for(e="#",n=0;n<6;++n)e+="0123456789abcdef".charAt(G(16*Math.random()));return new r(e)},h=[],S=function(e,n,r,t){var f,a,u,c;for(null==r&&(r=.5),null==t&&(t="rgb"),"object"!==xe(e)&&(e=_(e)),"object"!==xe(n)&&(n=_(n)),u=0,a=h.length;u<a;u++)if(t===(f=h[u])[0]){c=f[1](e,n,r,t);break}if(null==c)throw"color mode "+t+" is not supported";return c.alpha(e.alpha()+r*(n.alpha()-e.alpha()))},_.interpolate=S,r.prototype.interpolate=function(e,n,r){return S(this,e,n,r)},_.mix=S,r.prototype.mix=r.prototype.interpolate,d.rgb=function(){var e,n,r,t;for(e in r=[],n=Ae(arguments))t=n[e],r.push(t);return r},_.rgb=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["rgb"]),(function(){}))},r.prototype.rgb=function(e){return null==e&&(e=!0),e?this._rgb.map(Math.round).slice(0,3):this._rgb.slice(0,3)},r.prototype.rgba=function(e){return null==e&&(e=!0),e?[Math.round(this._rgb[0]),Math.round(this._rgb[1]),Math.round(this._rgb[2]),this._rgb[3]]:this._rgb.slice(0)},s.push({p:3,test:function(e){var n;return n=Ae(arguments),"array"===xe(n)&&3===n.length||4===n.length&&"number"===xe(n[3])&&n[3]>=0&&n[3]<=1?"rgb":void 0}}),d.lrgb=d.rgb,z=function(e,n,t,f){var a,u;return a=e._rgb,u=n._rgb,new r(Ne(te(a[0],2)*(1-t)+te(u[0],2)*t),Ne(te(a[1],2)*(1-t)+te(u[1],2)*t),Ne(te(a[2],2)*(1-t)+te(u[2],2)*t),f)},i=function(e){var n,t,f,a,u;for(n=1/e.length,u=[0,0,0,0],f=0,t=e.length;f<t;f++)a=e[f]._rgb,u[0]+=te(a[0],2)*n,u[1]+=te(a[1],2)*n,u[2]+=te(a[2],2)*n,u[3]+=a[3]*n;return u[0]=Ne(u[0]),u[1]=Ne(u[1]),u[2]=Ne(u[2]),new r(u)},h.push(["lrgb",z]),_.average=function(e,n){var r,t,f,a,c,o,l,s,b,d,h,p,m;if(null==n&&(n="rgb"),b=e.length,e=e.map((function(e){return _(e)})),l=e.splice(0,1)[0],"lrgb"===n)return i(e);for(s in a=[],c=0,o=0,p=l.get(n))p[s]=p[s]||0,a.push(isNaN(p[s])?0:1),"h"!==n.charAt(s)||isNaN(p[s])||(r=p[s]/180*u,c+=x(r),o+=_e(r));for(t=l.alpha(),h=0,d=e.length;h<d;h++)for(s in m=(f=e[h]).get(n),t+=f.alpha(),p)isNaN(m[s])||(a[s]+=1,"h"===n.charAt(s)?(r=m[s]/180*u,c+=x(r),o+=_e(r)):p[s]+=m[s]);for(s in p)if("h"===n.charAt(s)){for(r=g(o/a[s],c/a[s])/u*180;r<0;)r+=360;for(;r>=360;)r-=360;p[s]=r}else p[s]=p[s]/a[s];return _(p,n).alpha(t/b)},P=function(e){var n,r;if(e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))return 4!==e.length&&7!==e.length||(e=e.substr(1)),3===e.length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[(r=parseInt(e,16))>>16,r>>8&255,255&r,1];if(e.match(/^#?([A-Fa-f0-9]{8})$/))return 9===e.length&&(e=e.substr(1)),[(r=parseInt(e,16))>>24&255,r>>16&255,r>>8&255,we((255&r)/255*100)/100];if(null!=d.css&&(n=d.css(e)))return n;throw"unknown color: "+e},ce=function(e,n){var r,t,f,a,u,c;return null==n&&(n="rgb"),u=e[0],f=e[1],t=e[2],r=e[3],u=Math.round(u),f=Math.round(f),t=Math.round(t),c=(c="000000"+(u<<16|f<<8|t).toString(16)).substr(c.length-6),a=(a="0"+we(255*r).toString(16)).substr(a.length-2),"#"+function(){switch(n.toLowerCase()){case"rgba":return c+a;case"argb":return a+c;default:return c}}()},d.hex=function(e){return P(e)},_.hex=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["hex"]),(function(){}))},r.prototype.hex=function(e){return null==e&&(e="rgb"),ce(this._rgb,e)},s.push({p:4,test:function(e){if(1===arguments.length&&"string"===xe(e))return"hex"}}),Y=function(){var e,n,r,t,f,a,u,c,o,l,i,s,b,d;if(f=(e=Ae(arguments))[0],i=e[1],u=e[2],0===i)o=t=n=255*u;else{for(r=[0,0,0],s=2*u-(b=u<.5?u*(1+i):u+i-u*i),(d=[0,0,0])[0]=(f/=360)+1/3,d[1]=f,d[2]=f-1/3,a=c=0;c<=2;a=++c)d[a]<0&&(d[a]+=1),d[a]>1&&(d[a]-=1),6*d[a]<1?r[a]=s+6*(b-s)*d[a]:2*d[a]<1?r[a]=b:3*d[a]<2?r[a]=s+(b-s)*(2/3-d[a])*6:r[a]=s;o=(l=[we(255*r[0]),we(255*r[1]),we(255*r[2])])[0],t=l[1],n=l[2]}return e.length>3?[o,t,n,e[3]]:[o,t,n]},le=function(e,n,r){var t,f,a,u,c;return void 0!==e&&e.length>=3&&(e=(u=e)[0],n=u[1],r=u[2]),e/=255,n/=255,r/=255,a=Math.min(e,n,r),f=((W=Math.max(e,n,r))+a)/2,W===a?(c=0,t=Number.NaN):c=f<.5?(W-a)/(W+a):(W-a)/(2-W-a),e===W?t=(n-r)/(W-a):n===W?t=2+(r-e)/(W-a):r===W&&(t=4+(e-n)/(W-a)),(t*=60)<0&&(t+=360),[t,c,f]},_.hsl=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["hsl"]),(function(){}))},d.hsl=Y,r.prototype.hsl=function(){return le(this._rgb)},E=function(){var e,n,r,t,f,a,u,c,o,l,i,s,b,d,h,p,g,m;if(f=(e=Ae(arguments))[0],p=e[1],m=e[2],m*=255,0===p)o=t=n=m;else switch(360===f&&(f=0),f>360&&(f-=360),f<0&&(f+=360),u=m*(1-p),c=m*(1-p*(r=(f/=60)-(a=G(f)))),g=m*(1-p*(1-r)),a){case 0:o=(l=[m,g,u])[0],t=l[1],n=l[2];break;case 1:o=(i=[c,m,u])[0],t=i[1],n=i[2];break;case 2:o=(s=[u,m,g])[0],t=s[1],n=s[2];break;case 3:o=(b=[u,c,m])[0],t=b[1],n=b[2];break;case 4:o=(d=[g,u,m])[0],t=d[1],n=d[2];break;case 5:o=(h=[m,u,c])[0],t=h[1],n=h[2]}return[o,t,n,e.length>3?e[3]:1]},ie=function(){var e,n,r,t,f,a,u,c,o;return a=(u=Ae(arguments))[0],r=u[1],e=u[2],f=Math.min(a,r,e),n=(W=Math.max(a,r,e))-f,o=W/255,0===W?(t=Number.NaN,c=0):(c=n/W,a===W&&(t=(r-e)/n),r===W&&(t=2+(e-a)/n),e===W&&(t=4+(a-r)/n),(t*=60)<0&&(t+=360)),[t,c,o]},_.hsv=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["hsv"]),(function(){}))},d.hsv=E,r.prototype.hsv=function(){return ie(this._rgb)},ne=function(e){return"number"===xe(e)&&e>=0&&e<=16777215?[e>>16,e>>8&255,255&e,1]:(console.warn("unknown num color: "+e),[0,0,0,1])},he=function(){var e;return((e=Ae(arguments))[0]<<16)+(e[1]<<8)+e[2]},_.num=function(e){return new r(e,"num")},r.prototype.num=function(e){return null==e&&(e="rgb"),he(this._rgb,e)},d.num=ne,s.push({p:1,test:function(e){if(1===arguments.length&&"number"===xe(e)&&e>=0&&e<=16777215)return"num"}}),L=function(){var e,n,r,t,f,a,u,c,o,l,i,s,b,d,h,p,g,m,v,y;if(c=(r=Ae(arguments))[0],f=r[1],n=r[2],u=u/100*255,e=255*(f/=100),0===f)s=u=t=n;else switch(360===c&&(c=0),c>360&&(c-=360),c<0&&(c+=360),i=(l=n*(1-f))+e*(1-(a=(c/=60)-(o=G(c)))),v=l+e*a,y=l+e,o){case 0:s=(b=[y,v,l])[0],u=b[1],t=b[2];break;case 1:s=(d=[i,y,l])[0],u=d[1],t=d[2];break;case 2:s=(h=[l,y,v])[0],u=h[1],t=h[2];break;case 3:s=(p=[l,i,y])[0],u=p[1],t=p[2];break;case 4:s=(g=[v,l,y])[0],u=g[1],t=g[2];break;case 5:s=(m=[y,l,i])[0],u=m[1],t=m[2]}return[s,u,t,r.length>3?r[3]:1]},ue=function(){var e,n,r,t,f,a,u,c,o;return c=(o=Ae(arguments))[0],f=o[1],n=o[2],u=Math.min(c,f,n),r=100*(t=(W=Math.max(c,f,n))-u)/255,e=u/(255-t)*100,0===t?a=Number.NaN:(c===W&&(a=(f-n)/t),f===W&&(a=2+(n-c)/t),n===W&&(a=4+(c-f)/t),(a*=60)<0&&(a+=360)),[a,r,e]},_.hcg=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["hcg"]),(function(){}))},d.hcg=L,r.prototype.hcg=function(){return ue(this._rgb)},A=function(e){var n,r,t,f,a,u,c,o;if(e=e.toLowerCase(),null!=_.colors&&_.colors[e])return P(_.colors[e]);if(a=e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){for(c=a.slice(1,4),f=u=0;u<=2;f=++u)c[f]=+c[f];c[3]=1}else if(a=e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))for(c=a.slice(1,5),f=o=0;o<=3;f=++o)c[f]=+c[f];else if(a=e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)){for(c=a.slice(1,4),f=n=0;n<=2;f=++n)c[f]=we(2.55*c[f]);c[3]=1}else if(a=e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)){for(c=a.slice(1,5),f=r=0;r<=2;f=++r)c[f]=we(2.55*c[f]);c[3]=+c[3]}else(a=e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/))?((t=a.slice(1,4))[1]*=.01,t[2]*=.01,(c=Y(t))[3]=1):(a=e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/))&&((t=a.slice(1,4))[1]*=.01,t[2]*=.01,(c=Y(t))[3]=+a[4]);return c},ae=function(e){var n;return"rgb"==(n=e[3]<1?"rgba":"rgb")?n+"("+e.slice(0,3).map(we).join(",")+")":"rgba"===n?n+"("+e.slice(0,3).map(we).join(",")+","+e[3]+")":void 0},ye=function(e){return we(100*e)/100},R=function(e,n){var r;return r=n<1?"hsla":"hsl",e[0]=ye(e[0]||0),e[1]=ye(100*e[1])+"%",e[2]=ye(100*e[2])+"%","hsla"===r&&(e[3]=n),r+"("+e.join(",")+")"},d.css=function(e){return A(e)},_.css=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["css"]),(function(){}))},r.prototype.css=function(e){return null==e&&(e="rgb"),"rgb"===e.slice(0,3)?ae(this._rgb):"hsl"===e.slice(0,3)?R(this.hsl(),this.alpha()):void 0},d.named=function(e){return P(Oe[e])},s.push({p:5,test:function(e){if(1===arguments.length&&null!=Oe[e])return"named"}}),r.prototype.name=function(e){var n,r;for(r in arguments.length&&(Oe[e]&&(this._rgb=P(Oe[e])),this._rgb[3]=1),n=this.hex(),Oe)if(n===Oe[r])return r;return n},Z=function(){var e,n,r,t;return r=(t=Ae(arguments))[0],e=t[1],n=t[2],[r,x(n*=f)*e,_e(n)*e]},D=function(){var e,n,r,t,f,a,u,c,o;return u=(r=Ae(arguments))[0],f=r[1],a=r[2],e=(c=Z(u,f,a))[0],n=c[1],t=c[2],[(o=I(e,n,t))[0],o[1],t=o[2],r.length>3?r[3]:1]},F=function(){var e,n,r,t,f,a;return f=(a=Ae(arguments))[0],e=a[1],n=a[2],r=Ne(e*e+n*n),t=(g(n,e)*o+360)%360,0===we(1e4*r)&&(t=Number.NaN),[f,r,t]},be=function(){var e,n,r,t,f,a,u;return f=(a=Ae(arguments))[0],r=a[1],n=a[2],t=(u=se(f,r,n))[0],e=u[1],n=u[2],F(t,e,n)},_.lch=function(){var e;return e=Ae(arguments),new r(e,"lch")},_.hcl=function(){var e;return e=Ae(arguments),new r(e,"hcl")},d.lch=D,d.hcl=function(){var e,n,r,t;return n=(t=Ae(arguments))[0],e=t[1],r=t[2],D([r,e,n])},r.prototype.lch=function(){return be(this._rgb)},r.prototype.hcl=function(){return be(this._rgb).reverse()},fe=function(e){var n,r,t,f,a,u;return null==e&&(e="rgb"),a=(u=Ae(arguments))[0],t=u[1],n=u[2],t/=255,n/=255,[(1-(a/=255)-(f=1-Math.max(a,Math.max(t,n))))*(r=f<1?1/(1-f):0),(1-t-f)*r,(1-n-f)*r,f]},M=function(){var e,n,r,t,f,a;return r=(n=Ae(arguments))[0],f=n[1],a=n[2],t=n[3],e=n.length>4?n[4]:1,1===t?[0,0,0,e]:[r>=1?0:255*(1-r)*(1-t),f>=1?0:255*(1-f)*(1-t),a>=1?0:255*(1-a)*(1-t),e]},d.cmyk=function(){return M(Ae(arguments))},_.cmyk=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["cmyk"]),(function(){}))},r.prototype.cmyk=function(){return fe(this._rgb)},d.gl=function(){var e,n,r,t,f;for(t=function(){var e,r;for(n in r=[],e=Ae(arguments))f=e[n],r.push(f);return r}.apply(this,arguments),e=r=0;r<=2;e=++r)t[e]*=255;return t},_.gl=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["gl"]),(function(){}))},r.prototype.gl=function(){var e;return[(e=this._rgb)[0]/255,e[1]/255,e[2]/255,e[3]]},de=function(e,n,r){var t;return e=(t=Ae(arguments))[0],n=t[1],r=t[2],.2126*(e=Q(e))+.7152*(n=Q(n))+.0722*Q(r)},Q=function(e){return(e/=255)<=.03928?e/12.92:te((e+.055)/1.055,2.4)},V=function(e,n,t,f){var a,u;return a=e._rgb,u=n._rgb,new r(a[0]+t*(u[0]-a[0]),a[1]+t*(u[1]-a[1]),a[2]+t*(u[2]-a[2]),f)},h.push(["rgb",V]),r.prototype.luminance=function(e,n){var r,t,f,a;return null==n&&(n="rgb"),arguments.length?(f=this._rgb,0===e?f=[0,0,0,this._rgb[3]]:1===e?f=[255,255,255,this[3]]:(r=de(this._rgb),t=20,a=function(r,f){var u,c;return u=(c=r.interpolate(f,.5,n)).luminance(),Math.abs(e-u)<1e-7||!t--?c:u>e?a(r,c):a(c,f)},f=r>e?a(_("black"),this).rgba():a(this,_("white")).rgba()),_(f).alpha(this.alpha())):de(this._rgb)},Me=function(e){var n,r,t,f;return(f=e/100)<66?(t=255,r=-155.25485562709179-.44596950469579133*(r=f-2)+104.49216199393888*J(r),n=f<20?0:.8274096064007395*(n=f-10)-254.76935184120902+115.67994401066147*J(n)):(t=351.97690566805693+.114206453784165*(t=f-55)-40.25366309332127*J(t),r=325.4494125711974+.07943456536662342*(r=f-50)-28.0852963507957*J(r),n=255),[t,r,n]},pe=function(){var e,n,r,t,f,a,u;for(t=(f=Ae(arguments))[0],f[1],e=f[2],r=1e3,n=4e4;n-r>.4;)(a=Me(u=.5*(n+r)))[2]/a[0]>=e/t?n=u:r=u;return we(u)},_.temperature=_.kelvin=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["temperature"]),(function(){}))},d.temperature=d.kelvin=d.K=Me,r.prototype.temperature=function(){return pe(this._rgb)},r.prototype.kelvin=r.prototype.temperature,_.contrast=function(e,n){var t,f,a,u;return"string"!==(a=xe(e))&&"number"!==a||(e=new r(e)),"string"!==(u=xe(n))&&"number"!==u||(n=new r(n)),(t=e.luminance())>(f=n.luminance())?(t+.05)/(f+.05):(f+.05)/(t+.05)},_.distance=function(e,n,t){var f,a,u,c,o,l,i;for(a in null==t&&(t="lab"),"string"!==(o=xe(e))&&"number"!==o||(e=new r(e)),"string"!==(l=xe(n))&&"number"!==l||(n=new r(n)),u=e.get(t),c=n.get(t),i=0,u)i+=(f=(u[a]||0)-(c[a]||0))*f;return Math.sqrt(i)},_.deltaE=function(e,n,t,f){var a,c,o,l,i,s,b,d,h,m,v,y,w,k,_,N,M,A,O,j,q,G,L,P;for(null==t&&(t=1),null==f&&(f=1),"string"!==(_=xe(e))&&"number"!==_||(e=new r(e)),"string"!==(N=xe(n))&&"number"!==N||(n=new r(n)),a=(M=e.lab())[0],o=M[1],i=M[2],c=(A=n.lab())[0],l=A[1],s=A[2],b=Ne(o*o+i*i),d=Ne(l*l+s*s),j=a<16?.511:.040975*a/(1+.01765*a),O=.0638*b/(1+.0131*b)+.638,k=b<1e-6?0:180*g(i,o)/u;k<0;)k+=360;for(;k>=360;)k-=360;return q=k>=164&&k<=345?.56+p(.2*x(u*(k+168)/180)):.36+p(.4*x(u*(k+35)/180)),w=Ne((h=b*b*b*b)/(h+1900)),Ne((G=(a-c)/(t*j))*G+(L=(y=b-d)/(f*O))*L+((m=o-l)*m+(v=i-s)*v-y*y)/((P=O*(w*q+1-w))*P))},r.prototype.get=function(e){var n,r,t,f,a;return t=(f=e.split("."))[0],n=f[1],a=this[t](),n?(r=t.indexOf(n))>-1?a[r]:console.warn("unknown channel "+n+" in mode "+t):a},r.prototype.set=function(e,n){var r,t,f,a,u;if(f=(a=e.split("."))[0],r=a[1])if(u=this[f](),(t=f.indexOf(r))>-1)if("string"===xe(n))switch(n.charAt(0)){case"+":case"-":u[t]+=+n;break;case"*":u[t]*=+n.substr(1);break;case"/":u[t]/=+n.substr(1);break;default:u[t]=+n}else u[t]=n;else console.warn("unknown channel "+r+" in mode "+f);else u=n;return _(u,f).alpha(this.alpha())},r.prototype.clipped=function(){return this._rgb._clipped||!1},r.prototype.alpha=function(e){return arguments.length?_.rgb([this._rgb[0],this._rgb[1],this._rgb[2],e]):this._rgb[3]},r.prototype.darken=function(e){var n;return null==e&&(e=1),(n=this.lab())[0]-=a.Kn*e,_.lab(n).alpha(this.alpha())},r.prototype.brighten=function(e){return null==e&&(e=1),this.darken(-e)},r.prototype.darker=r.prototype.darken,r.prototype.brighter=r.prototype.brighten,r.prototype.saturate=function(e){var n;return null==e&&(e=1),(n=this.lch())[1]+=e*a.Kn,n[1]<0&&(n[1]=0),_.lch(n).alpha(this.alpha())},r.prototype.desaturate=function(e){return null==e&&(e=1),this.saturate(-e)},r.prototype.premultiply=function(){var e,n;return n=this.rgb(),e=this.alpha(),_(n[0]*e,n[1]*e,n[2]*e,e)},ee=function(e,n){return e*n/255},O=function(e,n){return e>n?n:e},$=function(e,n){return e>n?e:n},ke=function(e,n){return 255*(1-(1-e/255)*(1-n/255))},re=function(e,n){return n<128?2*e*n/255:255*(1-2*(1-e/255)*(1-n/255))},k=function(e,n){return 255*(1-(1-n/255)/(e/255))},j=function(e,n){return 255===e||(e=n/255*255/(1-e/255))>255?255:e},(v=function(e,n,r){if(!v[r])throw"unknown blend mode "+r;return v[r](e,n)}).normal=(y=function(e){return function(n,r){var t,f;return t=_(r).rgb(),f=_(n).rgb(),_(e(t,f),"rgb")}})((q=function(e){return function(n,r){var t,f,a;for(a=[],t=f=0;f<=3;t=++f)a[t]=e(n[t],r[t]);return a}})((function(e,n){return e}))),v.multiply=y(q(ee)),v.screen=y(q(ke)),v.overlay=y(q(re)),v.darken=y(q(O)),v.lighten=y(q($)),v.dodge=y(q(j)),v.burn=y(q(k)),_.blend=v,_.analyze=function(e){var n,r,t,f;for(t={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0},r=0,n=e.length;r<n;r++)null==(f=e[r])||isNaN(f)||(t.values.push(f),t.sum+=f,f<t.min&&(t.min=f),f>t.max&&(t.max=f),t.count+=1);return t.domain=[t.min,t.max],t.limits=function(e,n){return _.limits(t,e,n)},t},_.scale=function(e,n){var r,t,f,a,u,c,o,l,i,s,b,d,h,p,g,m,v,y,w,k,N;return i="rgb",s=_("#ccc"),p=0,u=[0,1],h=[],d=[0,0],r=!1,f=[],b=!1,l=0,o=1,a=!1,t={},g=!0,c=1,k=function(e){var n,r,t,a,u,c;if(null==e&&(e=["#fff","#000"]),null!=e&&"string"===xe(e)&&null!=_.brewer&&(e=_.brewer[e]||_.brewer[e.toLowerCase()]||e),"array"===xe(e)){for(n=t=0,a=(e=e.slice(0)).length-1;0<=a?t<=a:t>=a;n=0<=a?++t:--t)r=e[n],"string"===xe(r)&&(e[n]=_(r));for(h.length=0,n=c=0,u=e.length-1;0<=u?c<=u:c>=u;n=0<=u?++c:--c)h.push(n/(e.length-1))}return w(),f=e},v=function(e){var n,t;if(null!=r){for(t=r.length-1,n=0;n<t&&e>=r[n];)n++;return n-1}return 0},N=function(e){return e},y=function(e,n){var a,u,b,p,m,y,w;if(null==n&&(n=!1),isNaN(e))return s;if(w=n?e:r&&r.length>2?v(e)/(r.length-2):o!==l?(e-l)/(o-l):1,n||(w=N(w)),1!==c&&(w=te(w,c)),w=d[0]+w*(1-d[0]-d[1]),w=Math.min(1,Math.max(0,w)),b=Math.floor(1e4*w),g&&t[b])a=t[b];else{if("array"===xe(f))for(u=p=0,y=h.length-1;0<=y?p<=y:p>=y;u=0<=y?++p:--p){if(w<=(m=h[u])){a=f[u];break}if(w>=m&&u===h.length-1){a=f[u];break}if(w>m&&w<h[u+1]){w=(w-m)/(h[u+1]-m),a=_.interpolate(f[u],f[u+1],w,i);break}}else"function"===xe(f)&&(a=f(w));g&&(t[b]=a)}return a},w=function(){return t={}},k(e),(m=function(e){var n;return n=_(y(e)),b&&n[b]?n[b]():n}).classes=function(e){var n;return null!=e?("array"===xe(e)?(r=e,u=[e[0],e[e.length-1]]):(n=_.analyze(u),r=0===e?[n.min,n.max]:_.limits(n,"e",e)),m):r},m.domain=function(e){var n,r,t,a,c,i,s;if(!arguments.length)return u;if(l=e[0],o=e[e.length-1],h=[],t=f.length,e.length===t&&l!==o)for(c=0,a=e.length;c<a;c++)r=e[c],h.push((r-l)/(o-l));else for(n=s=0,i=t-1;0<=i?s<=i:s>=i;n=0<=i?++s:--s)h.push(n/(t-1));return u=[l,o],m},m.mode=function(e){return arguments.length?(i=e,w(),m):i},m.range=function(e,n){return k(e),m},m.out=function(e){return b=e,m},m.spread=function(e){return arguments.length?(p=e,m):p},m.correctLightness=function(e){return null==e&&(e=!0),a=e,w(),N=a?function(e){var n,r,t,f,a,u,c,o;for(u=(n=y(0,!0).lab()[0])>(r=y(1,!0).lab()[0]),t=y(e,!0).lab()[0]-(f=n+(r-n)*e),c=0,o=1,a=20;Math.abs(t)>.01&&a-- >0;)u&&(t*=-1),t<0?(c=e,e+=.5*(o-e)):(o=e,e+=.5*(c-e)),t=y(e,!0).lab()[0]-f;return e}:function(e){return e},m},m.padding=function(e){return null!=e?("number"===xe(e)&&(e=[e,e]),d=e,m):d},m.colors=function(n,t){var a,c,o,l,i,s,b,d;if(arguments.length<2&&(t="hex"),i=[],0===arguments.length)i=f.slice(0);else if(1===n)i=[m(.5)];else if(n>1)c=u[0],a=u[1]-c,i=function(){s=[];for(var e=0;0<=n?e<n:e>n;0<=n?e++:e--)s.push(e);return s}.apply(this).map((function(e){return m(c+e/(n-1)*a)}));else{if(e=[],b=[],r&&r.length>2)for(o=d=1,l=r.length;1<=l?d<l:d>l;o=1<=l?++d:--d)b.push(.5*(r[o-1]+r[o]));else b=u;i=b.map((function(e){return m(e)}))}return _[t]&&(i=i.map((function(e){return e[t]()}))),i},m.cache=function(e){return null!=e?(g=e,m):g},m.gamma=function(e){return null!=e?(c=e,m):c},m},null==_.scales&&(_.scales={}),_.scales.cool=function(){return _.scale([_.hsl(180,1,.9),_.hsl(250,.7,.4)])},_.scales.hot=function(){return _.scale(["#000","#f00","#ff0","#fff"],[0,.25,.75,1]).mode("rgb")},_.analyze=function(e,n,r){var t,f,a,u,c,o;if(c={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0},null==r&&(r=function(){return!0}),t=function(e){null==e||isNaN(e)||(c.values.push(e),c.sum+=e,e<c.min&&(c.min=e),e>c.max&&(c.max=e),c.count+=1)},o=function(e,f){if(r(e,f))return null!=n&&"function"===xe(n)?t(n(e)):null!=n&&"string"===xe(n)||"number"===xe(n)?t(e[n]):t(e)},"array"===xe(e))for(u=0,a=e.length;u<a;u++)o(e[u]);else for(f in e)o(e[f],f);return c.domain=[c.min,c.max],c.limits=function(e,n){return _.limits(c,e,n)},c},_.limits=function(e,n,r){var t,f,a,u,c,o,l,i,s,b,d,h,g,m,v,y,w,k,N,M,x,A,O,j,q,L,P,B,R,Y,E,S,X,C,z,U,V,F,I,K,Z,D,$,H,Q,T,ee,ne,re,fe,ae,ue,ce,oe,le;if(null==n&&(n="equal"),null==r&&(r=7),"array"===xe(e)&&(e=_.analyze(e)),q=e.min,W=e.max,e.sum,oe=e.values.sort((function(e,n){return e-n})),1===r)return[q,W];if(O=[],"c"===n.substr(0,1)&&(O.push(q),O.push(W)),"e"===n.substr(0,1)){for(O.push(q),M=E=1,z=r-1;1<=z?E<=z:E>=z;M=1<=z?++E:--E)O.push(q+M/r*(W-q));O.push(W)}else if("l"===n.substr(0,1)){if(q<=0)throw"Logarithmic scales are only possible for values > 0";for(L=Math.LOG10E*J(q),j=Math.LOG10E*J(W),O.push(q),M=le=1,U=r-1;1<=U?le<=U:le>=U;M=1<=U?++le:--le)O.push(te(10,L+M/r*(j-L)));O.push(W)}else if("q"===n.substr(0,1)){for(O.push(q),M=t=1,D=r-1;1<=D?t<=D:t>=D;M=1<=D?++t:--t)S=(oe.length-1)*M/r,(X=G(S))===S?O.push(oe[X]):(C=S-X,O.push(oe[X]*(1-C)+oe[X+1]*C));O.push(W)}else if("k"===n.substr(0,1)){for(B=oe.length,m=new Array(B),k=new Array(r),fe=!0,R=0,y=null,(y=[]).push(q),M=f=1,$=r-1;1<=$?f<=$:f>=$;M=1<=$?++f:--f)y.push(q+M/r*(W-q));for(y.push(W);fe;){for(x=a=0,H=r-1;0<=H?a<=H:a>=H;x=0<=H?++a:--a)k[x]=0;for(M=u=0,Q=B-1;0<=Q?u<=Q:u>=Q;M=0<=Q?++u:--u){for(ce=oe[M],P=Number.MAX_VALUE,x=c=0,T=r-1;0<=T?c<=T:c>=T;x=0<=T?++c:--c)(N=p(y[x]-ce))<P&&(P=N,v=x);k[v]++,m[M]=v}for(Y=new Array(r),x=o=0,ee=r-1;0<=ee?o<=ee:o>=ee;x=0<=ee?++o:--o)Y[x]=null;for(M=l=0,ne=B-1;0<=ne?l<=ne:l>=ne;M=0<=ne?++l:--l)null===Y[w=m[M]]?Y[w]=oe[M]:Y[w]+=oe[M];for(x=i=0,re=r-1;0<=re?i<=re:i>=re;x=0<=re?++i:--i)Y[x]*=1/k[x];for(fe=!1,x=s=0,V=r-1;0<=V?s<=V:s>=V;x=0<=V?++s:--s)if(Y[x]!==y[M]){fe=!0;break}y=Y,++R>200&&(fe=!1)}for(A={},x=b=0,F=r-1;0<=F?b<=F:b>=F;x=0<=F?++b:--b)A[x]=[];for(M=d=0,I=B-1;0<=I?d<=I:d>=I;M=0<=I?++d:--d)A[w=m[M]].push(oe[M]);for(ae=[],x=h=0,K=r-1;0<=K?h<=K:h>=K;x=0<=K?++h:--h)ae.push(A[x][0]),ae.push(A[x][A[x].length-1]);for(ae=ae.sort((function(e,n){return e-n})),O.push(ae[0]),M=g=1,Z=ae.length-1;g<=Z;M=g+=2)ue=ae[M],isNaN(ue)||-1!==O.indexOf(ue)||O.push(ue)}return O},B=function(e,n,r){var t,f,a,u;return e=(t=Ae(arguments))[0],n=t[1],r=t[2],isNaN(e)&&(e=0),(e/=360)<1/3?a=1-((f=(1-n)/3)+(u=(1+n*x(l*e)/x(c-l*e))/3)):e<2/3?f=1-((u=(1-n)/3)+(a=(1+n*x(l*(e-=1/3))/x(c-l*e))/3)):u=1-((a=(1-n)/3)+(f=(1+n*x(l*(e-=2/3))/x(c-l*e))/3)),[255*(u=H(r*u*3)),255*(a=H(r*a*3)),255*(f=H(r*f*3)),t.length>3?t[3]:1]},oe=function(){var e,n,r,t,f,a,u;return f=(a=Ae(arguments))[0],n=a[1],e=a[2],l=2*Math.PI,f/=255,n/=255,e/=255,0==(u=1-Math.min(f,n,e)/(t=(f+n+e)/3))?r=0:(r=(f-n+(f-e))/2,r/=Math.sqrt((f-n)*(f-n)+(f-e)*(n-e)),r=Math.acos(r),e>n&&(r=l-r),r/=l),[360*r,u,t]},_.hsi=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(r,Ge.call(arguments).concat(["hsi"]),(function(){}))},d.hsi=B,r.prototype.hsi=function(){return oe(this._rgb)},X=function(e,n,r,t){var f,a,u,c,o,l,i,s,b,d;return"hsl"===t?(b=e.hsl(),d=n.hsl()):"hsv"===t?(b=e.hsv(),d=n.hsv()):"hcg"===t?(b=e.hcg(),d=n.hcg()):"hsi"===t?(b=e.hsi(),d=n.hsi()):"lch"!==t&&"hcl"!==t||(t="hcl",b=e.hcl(),d=n.hcl()),"h"===t.substr(0,1)&&(a=b[0],i=b[1],c=b[2],u=d[0],s=d[1],o=d[2]),isNaN(a)||isNaN(u)?isNaN(a)?isNaN(u)?f=Number.NaN:(f=u,1!==c&&0!==c||"hsv"===t||(l=s)):(f=a,1!==o&&0!==o||"hsv"===t||(l=i)):f=a+r*(u>a&&u-a>180?u-(a+360):u<a&&a-u>180?u+360-a:u-a),null==l&&(l=i+r*(s-i)),_[t](f,l,c+r*(o-c))},U=function(e,n,r,t){var f,a;return f=e.num(),a=n.num(),_.num(f+(a-f)*r,"num")},(h=h.concat(function(){var e,n,r,t;for(t=[],n=0,e=(r=["hsv","hsl","hsi","hcl","lch","hcg"]).length;n<e;n++)T=r[n],t.push([T,X]);return t}())).push(["num",U]),C=function(e,n,t,f){var a,u;return a=e.lab(),u=n.lab(),new r(a[0]+t*(u[0]-a[0]),a[1]+t*(u[1]-a[1]),a[2]+t*(u[2]-a[2]),f)},h.push(["lab",C])}.call(this)}}]);