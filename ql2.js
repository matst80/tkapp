(function(c){var h=[],e=[],j=[],B=[],g={},v=function(){},k,o,s,p=true,F=true,f=c.documentElement,C="text/javascript",l=["text/css","stylesheet"],d,z,y=window.mobSize,x=window.mobUrl,n=window.isIE=navigator.userAgent.indexOf("MSIE")>0,q=[],E=[];if(y&&f.clientWidth<y&&window==window.top)if(confirm("Sidan finns som mobilversion, vill du g\u00e5 till den?"))window.location.href=x?x:window.location.href.replace("http://","http://m.").replace("www.","");function D(a,b){q.push({f:a.toLowerCase(),cb:b})}window.fd=function(b){for(i=0;i<q.length;i++){var a=q[i];a.f.indexOf(b)!=-1&&a.cb()}};function m(c,a){for(var b in a)c[b]=a[b]}function t(){for(var d=true,b=0;b<h.length;b++){var a=h[b];if(!a.ldone){d=false;if(!a.added){m(a,a.adata);var e=c.body;k=false;e.appendChild(a);a.added=true}z=setTimeout(t,500);if(!u)return}}k=true;p=true;if(d){for(var b=0;b<j.length;b++)j[b]();j=[]}}function w(b,d,u){if(b==""){d(true);return}var e=u||b.indexOf(".css")!==-1,a=c.createElement(e?"link":"script");a.orgFile=b;a.que=[];if(!e)for(var j=0;j<h.length;j++){var r=h[j];if(r.orgFile==b){if(r.ldone)d(true);else a.que.push(d);return}}else a.ldone=1;a.ft=setTimeout(function(){if(!a.ldone){i.apply(a,[{readyState:"complete"}]);window.console&&console.log("timeout",a.src)}},8800);var g=a;D(b,o);function o(){g.ldone=1;var b=g.que;if(b)for(var a=0;a<b.length;a++)b[a]();g.que=[];d&&d();t()}function i(b){var a=this.readyState||b.readyState;if(this.ldone)return;(!n&&!a||a=="complete"||a=="loaded")&&setTimeout(function(){o();window.console&&console.log("timeoutload",g.src)},500)}a.adata=e?{rel:l[1],type:l[0],href:b}:{src:b,async:false,onload:i,onreadystatechange:i,type:C};if(e){m(a,a.adata);f.appendChild(a);d()}else{h.push(a);k=false;if(p){p=false;function q(){var b=c.body||f;m(a,a.adata);b.appendChild(a)}if(!s&&n)v=q;else q()}}}e.push(function(){s=1;v()});var u,b={w:f.clientWidth,isIE:n,qs:{},jqq:[],jqload:function(){for(i=0;i<arguments.length;i++)if(window.jQuery)arguments[i]();else this.jqq.push(arguments[i])},jqrun:function(){var a=this.jqq;u=true;for(i=0;i<a.length;i++)a[i]()},dep:function(){var a=arguments,b=[];for(i=1;i<a.length;i++)b.push(a[i]);g[a[0]]=b},ready:function(a){if(o)a();else e.push(a)},done:function(a){B.push(a)},css:function(a){if(!d){d=c.createElement("style");m(d,{type:l[0],rel:l[1]});f.appendChild(d)}if(d.styleSheet)d.styleSheet.cssText+=a;else d.appendChild(c.createTextNode(a))},postload:function(){var a=arguments;b.loaded(function(){b.load.apply(this,a)})},loaded:function(a){if(k)a();else j.push(a)},pre:function(a,e){if(typeof a==="object")for(var c=0;c<a.length;c++)d(a[c]);else d(a);function d(a){window[a]=c;function c(){var f=this,d=arguments;b.queload(e||a,g[e||a],function(){function b(){if(window[a]!=c)window[a].apply(f,d);else setTimeout(b,20)}b()})}}},loadwait:function(c,a,d){b.load(c,function(){function b(){if(window[a])d();else setTimeout(b,20)}b()})},$pre:function(a,f,e){if(typeof a==="object")for(var c=0;c<a.length;c++)d(a[c]);else d(a);function d(a){var c=f?jQuery.fn:jQuery;if(!c[a])c[a]=d;function d(){var f=this,h=arguments;b.queload(e||a,g[e||a],function(){function b(){if(c[a]!=d)c[a].apply(f,h);else setTimeout(b,20)}b()});return f}}},loaddep:function(a,c){b.load(g[a],c)},queload:function(a,d,c){if(!b.qs[a]){b.qs[a]=[c];b.load(d,function(){for(var c in b.qs[a])b.qs[a][c]();delete b.qs[a]})}else b.qs[a].push(c)},load:function(){var d=arguments,a=d[d.length-1],e=d.length-1,j=true,l=0;if(typeof a!=="function"){a=null;e++}function f(b){if(!b)j=false;if(a&&++l==e)if(j)a();else setTimeout(a,40)}if(d.length==1&&a)try{a()}catch(n){if(n.name=="ReferenceError"){var m=n.message.split(" "),k=g[m[0]];k&&b.load(k,f)}}else for(var h=0;h<d.length;h++){var c=d[h];if(typeof c=="string")w(c,f);else if(typeof c=="object"){e+=c.length-1;for(var i=0;i<c.length;i++)w(c[i],f)}}}};function A(){if(n){var h=navigator.userAgent,g=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(g.exec(h)!=null)rv=parseFloat(RegExp.$1);document.body.className+=" ie ie"+rv;b.isIE=rv}var a;if(document.getElementsByClassName)a=document.getElementsByClassName("ehide");else if(document.querySelectorAll)a=document.querySelectorAll(".ehide");else{a=[];for(var f=new RegExp("(^| )ehide( |$)"),e=document.body.getElementsByTagName("*"),d=0,i=e.length;d<i;d++)f.test(e[d].className)&&a.push(e[d])}if(a)for(var c=0;c<a.length;c++)if(a[c].style)a[c].style.display="none"}function r(){if(o)return;o=true;A();for(var a=0;a<e.length;a++)e[a]();e=null}if(window.addEventListener){c.addEventListener("DOMContentLoaded",r,false);window.addEventListener("load",r,false)}else window.attachEvent&&c.attachEvent("onreadystatechange",function(){c.readyState==="complete"&&r()});var a={getStyle:function(a,c,b){return a.currentStyle?a.currentStyle[c]:window.getComputedStyle(a,"").getPropertyValue(b)},getColor:function(b){var a="";function d(a){return a.charAt(0)=="#"?a.substring(1,7):a}if(b.match(/^#[0-9A-Fa-f]{6}$/)){var c=d(b);a+=parseInt(c.substring(0,2),16)+",";a+=parseInt(c.substring(2,4),16)+",";a+=parseInt(c.substring(4,6),16);return a}rgbvals=/rgb\((.+),(.+),(.+)\)/i.exec(b);if(!rgbvals)return null;a+=parseInt(rgbvals[1])+",";a+=parseInt(rgbvals[2])+",";a+=parseInt(rgbvals[3]);return a},GetBaseURL:function(c){var d=a.getStyle(c,"fontSize","font-size"),l=a.getStyle(c,"width","width"),k=a.getStyle(c,"textTransform","text-transform"),o=a.getStyle(c,"fontFamily","font-family"),j=a.getColor(a.getStyle(c,"color","color")),i=a.getColor(a.getStyle(c,"backgroundColor","background-color")),e=a.getStyle(c,"fontWeight","font-weight").toString(),p=a.getStyle(c,"fontStyle","font-style").toString();d=d.replace(/[ptxcm]*/g,"");l=l.replace(/[ptxcm]*/g,"");var m=o.split(",")[0].replace(/[\"\']+$/g,"").replace(/^[\'\"]+/g,""),b="";b+="&s="+encodeURIComponent(d)+"&f="+encodeURIComponent(m);if(e=="bold"||e=="bolder"||e=="700")b+="&stl=b";if(j)b+="&fc="+j;if(p=="italic")b+="&stl=i";if(i)b+="&bc="+i+"&x=gif";else b+="&x=png";if(k)b+="&tra="+k;if(c.className.indexOf("rspec")!=-1)for(var g=c.className.split(" "),f=0;f<g.length;f++){var h=g[f];if(h!="rspec")try{var n=b;eval("newurl = font"+h+"(newurl)");b=n}catch(q){}}return b},GetWordURL:function(e,d){var b="",c=a.GetBaseURL(e);b+="/txt.img?txt="+encodeURIComponent(d)+c;return b},_ParseNested:function(j,i,b){var c="";if(b.nodeType==3){var h=a.GetBaseURL(i),e=b.nodeValue;if(e!=""){e=e.split(" ");for(var f=0;f<e.length;f++){if(f>0)c+=" ";var g=e[f].wdtrim();if(g!=""){var k="/txt.img?txt="+encodeURIComponent(g)+h;c+='<img src="'+k+'" align="absbottom" />'}}}}else{c+="<"+b.nodeName+" ";for(var d=0;d<b.attributes.length;d++)c+=b.attributes[d].name+'="'+b.attributes[d].value+'" ';if(b.childNodes.length>0){c+=">";for(var d=0;d<b.childNodes.length;d++)c+=a._ParseNested(j,b,b.childNodes[d]);c+="</"+b.nodeName+">"}else c+="/>"}return c},replaceElm:function(b){var h=a.getStyle(b,"fontSize","font-size"),e=b;b.className+=" wd-rep";for(var d="",c=0;c<b.childNodes.length;c++){var g=b.childNodes[c],f=a._ParseNested(e,e,g);d+=f}b.innerHTML=d},replaceByTag:function(f,e){for(var d=c.getElementsByTagName(f),b=0;b<d.length;b++)(!e||d[b].className.indexOf(e)!=-1)&&a.replaceElm(d[b])}};window.txtrep=a;window.ql=b})(document);String.prototype.trimStart=function(a){if(this.length==0)return this;a=a?a:" ";for(var b=0,c=0;this.charAt(b)==a&&b<this.length;b++);return this.substring(b)};String.prototype.trimEnd=function(a){a=a?a:" ";for(var b=this.length-1;b>=0&&this.charAt(b)==a;b--);return this.substring(0,b+1)};String.prototype.startsWith=function(a){return this.match("^"+a)==a};String.prototype.endsWith=function(a){return this.match(a+"$")==a};if(isIE)String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.wdtrim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.fulltrim=function(){return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,"").replace(/\s+/g," ")}