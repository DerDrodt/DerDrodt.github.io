(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),u=n(4),o=n.n(u),i=n(137),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var f=n(140),d=n.n(f);n.d(t,"PageRenderer",function(){return d.a});var l=n(29);n.d(t,"parsePath",function(){return l.a});var s=r.a.createContext({}),p=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return f});var a=n(146),r=n.n(a),u=n(147),o=n.n(u);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var i=new r.a(o.a);var c=i.rhythm,f=i.scale},140:function(e,t,n){var a;e.exports=(a=n(142))&&a.default||a},141:function(e,t,n){"use strict";n(28);var a=n(6),r=n.n(a),u=n(0),o=n.n(u),i=n(138),c=n(139),f=function(e){return"<"+e.children+"/>"},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},o.a.createElement(f,null,a))):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},o.a.createElement(f,null,a))),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,r)},t}(o.a.Component);t.a=d},142:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),u=n(4),o=n.n(u),i=n(46),c=n(2),f=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};f.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=f},145:function(e,t,n){(function(t){var n=1/0,a="[object Symbol]",r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",f="\\d+",d="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+o+f+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",m="[A-Z\\xc0-\\xd6\\xd8-\\xde]",x="(?:"+l+"|"+s+")",b="(?:"+m+"|"+s+")",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?"+h+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",p,g].join("|")+")[\\ufe0e\\ufe0f]?"+h+")*"),v="(?:"+[d,p,g].join("|")+")"+y,E=RegExp("['’]","g"),j=RegExp(c,"g"),w=RegExp([m+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,m,"$"].join("|")+")",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,m+x,"$"].join("|")+")",m+"?"+x+"+(?:['’](?:d|ll|m|re|s|t|ve))?",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",f,v].join("|"),"g"),O=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S="object"==typeof t&&t&&t.Object===Object&&t,A="object"==typeof self&&self&&self.Object===Object&&self,R=S||A||Function("return this")();var D,L=(D={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==D?void 0:D[e]});var T=Object.prototype.toString,B=R.Symbol,C=B?B.prototype:void 0,I=C?C.toString:void 0;function U(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&T.call(e)==a}(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-n?"-0":t}function k(e){return null==e?"":U(e)}var z,q=(z=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var r=-1,u=e?e.length:0;for(a&&u&&(n=e[++r]);++r<u;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=k(e),void 0===(t=n?void 0:t)?function(e){return O.test(e)}(e)?function(e){return e.match(w)||[]}(e):function(e){return e.match(r)||[]}(e):e.match(t)||[]}(function(e){return(e=k(e))&&e.replace(u,L).replace(j,"")}(e).replace(E,"")),z,"")});e.exports=q}).call(this,n(144))},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(149),o=n.n(u);t.a=function(e){var t=e.children,n=e.type,a=void 0===n?"tip":n,u=e.vertical;return r.a.createElement("span",{className:o.a.badge+" "+o.a[a]+" "+(u?o.a[u]:"")},t)}},149:function(e,t,n){e.exports={badge:"Badge-module--badge--1cN_D",middle:"Badge-module--middle--p9KM1",top:"Badge-module--top--127vk",tip:"Badge-module--tip--2J8pK",green:"Badge-module--green--3vIDV",error:"Badge-module--error--3CyYC",warning:"Badge-module--warning--xMT7g",warn:"Badge-module--warn--10nDd",yellow:"Badge-module--yellow--1zW3V"}},152:function(e,t,n){"use strict";var a=n(6),r=n.n(a),u=n(0),o=n.n(u),i=(n(167),n(168),n(169)),c=n.n(i),f=n(139),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:Object(f.a)(2.5)}},o.a.createElement("img",{src:c.a,alt:"Daniel Drodt",style:{marginRight:Object(f.a)(.5),marginBottom:0,width:Object(f.a)(2),height:Object(f.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{margin:0}},"Written by ",o.a.createElement("strong",null,"Daniel Drodt"),"."," ",o.a.createElement("a",{href:"https://twitter.com/DerDrodt"},"You should follow him on Twitter")))},t}(o.a.Component);t.a=d},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){e.exports=n.p+"static/avatar_400x400-9c22d1f577a5f9e4bc10c86ceb96565b.jpg"}}]);
//# sourceMappingURL=2-f87ffd0a3da65231f34e.js.map