var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
dayNames = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
 baseSvcUrl = 'http://tagkompaniet.se';
window.SCS=(window.baseSvcUrl||"")+"/Core.WebShop,Core.WebShop.ShopCommon.asmx/";_sc=function(){};_sc.ds=function(){};_sc.de=function(){};_sc.path=SCS;_sc.req=function(d,c,a,b){var e=a?a:_sc.ds,f=b?b:_sc.de;return ar(_sc.path+d,c,e,f)};_sc.GetArticles=function(a,b,c,d){_sc.req("GetArticles",{pageid:a,clientId:b},c,d)};_sc.GetArticle=function(a,b,c){_sc.req("GetArticle",{artnr:a},b,c)};_sc.GetPaymentMethods=function(a,b){_sc.req("GetPaymentMethods",{},a,b)};_sc.GetCnf=function(a,b,c){_sc.req("GetCnf",{pageid:a},b,c)};_sc.GetArticlesAdmin=function(a,b,c,d){_sc.req("GetArticlesAdmin",{pageid:a,clientId:b},c,d)};_sc.GetCustomer=function(a,b){_sc.req("GetCustomer",{},a,b)};_sc.IsValidCustomer=function(a,b){_sc.req("IsValidCustomer",{},a,b)};_sc.LoginCustomer=function(a,b,c,d){_sc.req("LoginCustomer",{username:a,password:b},c,d)};_sc.Logout=function(a,b){_sc.req("Logout",{},a,b)};_sc.newCart=function(a,b){_sc.req("newCart",{},a,b)};_sc.LookupAddress=function(a,b,c,d){_sc.req("LookupAddress",{vatnr:a,iscompany:b},c,d)};_sc.CheckUser=function(a,b,c){_sc.req("CheckUser",{username:a},b,c)};_sc.GetCurrentCustomer=function(a,b){_sc.req("GetCurrentCustomer",{},a,b)};_sc.SaveCustomer=function(a,b,c){_sc.req("SaveCustomer",{data:a},b,c)};_sc.GetUserFields=function(a,b){_sc.req("GetUserFields",{},a,b)};_sc.ResetPassword=function(a,b,c){_sc.req("ResetPassword",{user:a},b,c)};_sc.GetProperties=function(a,b,c,d){_sc.req("GetProperties",{pageid:a,clientId:b},c,d)};_sc.GetAllArticles=function(a,b,c,d,e){_sc.req("GetAllArticles",{parentId:a,searchSubpages:b,fields:c},d,e)};_sc.ChangeNoi=function(a,b,c,d){_sc.req("ChangeNoi",{id:a,noi:b},c,d)};_sc.AddToCart=function(a,b,c,d,e,f,g,h){_sc.req("AddToCart",{artnr:a,noi:b,imageFallback:c,bodyFallback:d,referrer:e,addNew:f},g,h)};_sc.RemoveFromCart=function(a,b,c){_sc.req("RemoveFromCart",{id:a},b,c)};_sc.GetCart=function(a,b){_sc.req("GetCart",{},a,b)};_sc.ClearCart=function(a,b){_sc.req("ClearCart",{},a,b)};_sc.ChangePassword=function(a,b,c,d){_sc.req("ChangePassword",{oldPassword:a,newPassword:b},c,d)};_sc.updateZone=function(a,b,c){_sc.req("UpdateZone",{name:a},b,c)};_sc.GetCart2=function(a,b,c){_sc.req("GetCart2",{oid:a},b,c)};_sc.GetPrice=function(a,b,c){_sc.req("GetPrice",{artnr:a},b,c)};_sc.ApplyCode=function(a,b,c){window._gaq&&_gaq.push(["_trackEvent","AddCampaign","click"]);_sc.req("ApplyCode",{code:a},b,c)};_sc.GetArticlesArray=function(a,b,c){_sc.req("GetArticlesArray",{artnr:a},b,c)};_sc.CalcMultiPrice=function(a,b,c){_sc.req("CalcMultiPrice",{artNrs:a},b,c)};_sc.FbLogin=function(a,b,c,d){_sc.req("LoginFacebook",{fbid:a,fbtoken:b},c,d)};_sc.AddToCartMultiple=function(a,b,c,d,e,f,g,h,i){_sc.req("AddToCartMultiple",{oid:a,arts:b,imageFallback:c,bodyFallback:d,referrer:e,addNew:f,addAsSub:g},h,i)};shopcommon=_sc;(function(a){var e=navigator.userAgent.match(/iPhone/i)?"touchstart":"click";window.GetQRData=function(){b.GetQRData()};window.shopOpt=a.extend(true,{lang:{cur:" kr",buyBtn:"LÃ¤gg i kundkorg",cartsum:"Att betala:",cartsumexvat:"Att betala (exkl moms):",noitext:"",cartroundoff:"Ã–resavrundning:",centtxt:" Ã–re",shipping:"Frakt:",shippingexvat:"Frakt (ex moms):",hasstocktxt:"Varan finns i lager",nostocktxt:"Finns inte i lager",adminfee:"Administrativ avgift",loggedinlink:"Logga in fÃ¶r att hÃ¤mta sparad kundinformation",discount:"Varav rabatt:",discountexvat:"Varav rabatt (ex moms):",totalsum:"Summa ink moms:",totalsumexvat:"Summa ex moms:",close:"StÃ¤ng",gotocart:"GÃ¥ till kassan",noiincart:"Du har {0}st i kundkorgen",noiincartbtn:"st i kundkorg",stockcart:"TyvÃ¤rr Ã¤r har vi inga fler artiklar i lager",addincart:"Klicka fÃ¶r att lÃ¤gga i kundkorgen",stockcart2:"TyvÃ¤rr finns inte ditt val kvar i lager, prova ett annat alternativ",cartcheck:"Kontrollera dina val och fÃ¶rsÃ¶k igen",loggedintxt:"Ã„ndra dina uppgifter ({0})",notavailable:"Inte tillgÃ¤nglig",notavailabletxt:"Inte tillgÃ¤nglig",stockstatus:"Lagerstatus",pricestock:"Ej i lager",notinzone:"Ej tillgÃ¤nglig",notinzonetxt:"Ej tillgÃ¤nglig i ditt land",emptycart:"TÃ¶m kundkorgen",notinstock:"Inte i lager",cartintro:"<h3>Lagt i kundkorgen</h3><p>Dessa artiklar har precis blivit lagda i kundkorgen</p>",incarttxt:"<h3>Artiklar i kundkorgen</h3><p>HÃ¤r Ã¤r de artiklar du lagt i kundkorgen</p>",remove:"Ta bort",ofwhichvat:"Varav moms:",vat:"Moms:",addshopcode:"LÃ¤gg till",btnloading:"KÃ¶per...",addingtocart:"Produken lÃ¤ggs redan i kundkorgen, vÃ¤nligen vÃ¤nta",fields:{size:"VÃ¤lj storlek",supplier:"VÃ¤lj varumÃ¤rke",color:"VÃ¤lj fÃ¤rg",parent:"Kategori"}},useArticleCache:true,totalRowPrice:true,logoutResetVat:true,notInStockOpacity:"0.5",checkStock:true,showNoiOnButton:true,cartDefault:{imgw:80,imgh:90,overview:true,noi:4,newitemdelay:4e3,openevent:e,checkoutUrl:"/checkout",itemsInCartText:"Du har {0}st varor i kundkorgen<br/>Summa: {1}kr",cartEmptyText:"Du har inga varor i kundkorgen"},hideNotInStock:false,hideNotInStockInCart:false,showButtonDirect:true,autoSelect:false,autoSelectFirst:false,useSlider:false,showFirst:false,languages:["Sverige","Norge","Finland","Danmark","Tyskland","Estland"]},window.shopOpt||{});a.mergeShopOpt=function(b){a.extend(true,window.shopOpt,b)};var b=window.wdShop={opt:{affect:".wd-shop-affect"},fetchAsyncPrices:function(c){var d={},b=false;c&&a(window).trigger("updateprices");a("span."+(c?"oldsfnr":"sfnr")).each(function(){var c=a(this).attr("data-fnr")+"";if(c&&c.length){d[a(this).attr("id")]=c;b=true}});b&&_sc.req("GetAsyncPrices",{fetch:d},function(b){a.each(b,function(b,c){a("#"+b).removeClass("sfnr").addClass("oldsfnr").html(c).show()})})},getCurrency:function(){if(!b.currency)b.currency=a.cookie("shopcurr");return b.currency},logout:function(b){shopcommon.Logout(function(){shopOpt.logoutResetVat&&a.cookie("exvat","",{expires:-1,path:"/"});a.cookie("customerId","",{expires:-1,path:"/"});a(window).trigger("shoplogout");shopOpt.onlogout&&shopOpt.onlogout();setTimeout(function(){if(b&&window.location.href!=b)window.location.href=b;else window.location.reload()},300)});window.FB&&FB.logout()},GetQRData:function(){window._gaq&&_gaq.push(["_trackEvent","OpenPayAir","click"]);ar("/Core.WebShop,Core.WebShop.PaymentProviders.Helpers.PayAirAdmin.asmx/GetQR",{},function(a){if(window.Payair_DATA){Payair_DATA.setCheckoutPrice(a.price);Payair_DATA.setCheckoutCurrency(a.c);Payair_DATA.setQR_data(a.qr)}})},alphaSort:function(a,b){return a.localeCompare(b)},sizeSort:function(a,b){var d=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};if(d(a)&&d(b))return a-b;else{var e={s:-1,m:0,l:1},c=function(a){a=a.toLowerCase();var c=1,b=1;for(i=0;i<a.length;i++){var d=a[i];if(d=="x")c++;else b=e[d]}return c*b};return c(a)-c(b)}},showExVat:function(d){if(!d||b.fVat==undefined||b.fVat==""){var c=a.cookie("exvat");return c&&c=="1"}else return b.fVat=="ex"},handlers:{hidden:function(){this.createOptions=function(){};this.getValue=function(){return this.val};this.setValue=function(a){this.val=a};this.beforeUpdate=function(){};this.afterUpdate=function(){};this.updateAlt=function(){};this.create=function(){}},select:function(){this.createOptions=function(){var b=this.obj;a.each(this.availOptions,function(d,c){b.append(a("<option/>",{value:c,text:c}))})},this.getValue=function(){return this.obj.val()},this.setValue=function(a){this.obj.val(a)},this.beforeUpdate=function(){this.obj.find("option").addClass("hidden")},this.afterUpdate=function(){},this.updateAlt=function(b){var c=this.obj;a.each(b,function(b,a){c.find('option[value="'+a+'"]').removeClass("hidden")})},this.create=function(d,e,c){this.doupdate=c;var b=this.obj=a("<select>").change(this.doupdate).appendTo(e);b.append(a('<option value="">-- '+d.n+" --</option>"));return b}},image:function(){this.createOptions=function(){var c=this.cnt,b=this;if(this.availOptions.length==1){c.parent().hide();return}a.each(this.availOptions,function(h,d){var f=d.toLowerCase().replace(/Ã¥/igm,"a").replace(/Ã¶/igm,"o").replace(/Ã¤/igm,"a").replace(/[^0-9A-Za-z\/\-\._]+/igm,""),g=a("<img/>",{src:"/Userfiles/Shop/"+b.fieldId+"/"+f+".jpg","class":"imgsel",title:d}).attr("rel",d).data("opt",d).bind(e,function(){if(a(this).hasClass("active")){b.curr=null;a(this).removeClass("active")}else{c.find(".imgsel").removeClass("active");b.curr=a(this).addClass("active").data("opt")}b.doupd(true)}).appendTo(c);window.wdGlobal&&g.dragdropfile({dir:"/Userfiles/Shop/"+b.fieldId+"/",filename:f+".jpg",onload:function(c,b,a){b.attr("src",a.dir+a.filename+"?new="+Math.random()*100)}})});c.contentslider({noi:5,size:500,horizontal:true})};this.getValue=function(){return this.curr};this.setValue=function(a){this.cnt.find(".imgsel").removeClass("active");this.cnt.find('.imgsel[rel="'+a+'"]').addClass("active");this.curr=a};this.beforeUpdate=function(){this.cnt.find(".imgsel").addClass("hidden")};this.afterUpdate=function(){};this.updateAlt=function(b){var c=this.cnt;a.each(b,function(d,b){c.find(".imgsel").each(function(){var c=a(this),d=c.data("opt");d==b&&c.removeClass("hidden")})})};this.create=function(b,c,d){this.doupd=d;var e=a("<label>VÃ¤lj "+b.n+"&nbsp;<span>genom att klicka pÃ¥ bilden</span></label>").appendTo(c);this.cnt=a("<div/>").addClass("imgselection").appendTo(c);this.fieldId=b.id}},button:function(){this.createOptions=function(){var b=this;a.each(this.availOptions,function(e,c){var d=a("<div/>",{"class":"group-button sbtn",html:"<span>"+c+"</span>"}).attr("rel",c).data("val",c).click(function(){var c=a(this).hasClass("selected");b.parent.find(".group-button").removeClass("selected");if(c)b.value="";else b.value=a(this).addClass("selected").data("val");b.doupdate(true)});b.parent.append(d)})},this.getValue=function(){return this.value},this.setValue=function(a){this.parent.find(".group-button").removeClass("selected");this.parent.find('.group-button[rel="'+a+'"]').addClass("selected");this.value=a},this.beforeUpdate=function(){this.parent.find(".group-button").addClass("hidden")},this.afterUpdate=function(){},this.updateAlt=function(b){var c=this.parent;a.each(b,function(b,a){c.find('.group-button[rel="'+a+'"]').removeClass("hidden")})},this.create=function(e,b,c){this.doupdate=c;a("<label>"+e.n+"</label>").appendTo(b);var d=this.parent=a("<div/>").appendTo(b);return d}},sizebutton:function(){this.createOptions=function(){var c=this;a.each(this.availOptions.sort(b.sizeSort),function(e,b){var d=a("<div/>",{"class":"group-button sbtn",html:"<span>"+b+"</span>"}).attr("rel",b).data("val",b).click(function(){var b=a(this).hasClass("selected");c.parent.find(".group-button").removeClass("selected");if(b)c.value="";else c.value=a(this).addClass("selected").data("val");c.doupdate(true)});c.parent.append(d)})},this.getValue=function(){return this.value},this.setValue=function(a){this.parent.find(".group-button").removeClass("selected");this.parent.find('.group-button[rel="'+a+'"]').addClass("selected");this.value=a},this.beforeUpdate=function(){this.parent.find(".group-button").addClass("hidden")},this.afterUpdate=function(){},this.updateAlt=function(b){var c=this.parent;a.each(b,function(b,a){c.find('.group-button[rel="'+a+'"]').removeClass("hidden")})},this.create=function(e,b,c){this.doupdate=c;a("<label>"+e.n+"</label>").appendTo(b);var d=this.parent=a("<div/>").appendTo(b);return d}},alphabutton:function(){this.createOptions=function(){var c=this;a.each(this.availOptions.sort(b.alphaSort),function(e,b){var d=a("<div/>",{"class":"group-button sbtn",html:"<span>"+b+"</span>"}).attr("rel",b).data("val",b).click(function(){var b=a(this).hasClass("selected");c.parent.find(".group-button").removeClass("selected");if(b)c.value="";else c.value=a(this).addClass("selected").data("val");c.doupdate(true)});c.parent.append(d)})},this.getValue=function(){return this.value},this.setValue=function(a){this.parent.find(".group-button").removeClass("selected");this.parent.find('.group-button[rel="'+a+'"]').addClass("selected");this.value=a},this.beforeUpdate=function(){this.parent.find(".group-button").addClass("hidden")},this.afterUpdate=function(){},this.updateAlt=function(b){var c=this.parent;a.each(b,function(b,a){c.find('.group-button[rel="'+a+'"]').removeClass("hidden")})},this.create=function(e,b,c){this.doupdate=c;a("<label>"+e.n+"</label>").appendTo(b);var d=this.parent=a("<div/>").appendTo(b);return d}}},fixPrice:function(a){if(a==undefined)return 11111111;var b=a.replace(/[ kr]/gi,"").replace(",","."),c=parseFloat(b);return c.toString().replace(".",",")},currFormat:function(d,h){if(d==undefined)return 22222222;var e={Decimals:h||shopOpt.showCents,Symbol:shopOpt.lang.cur||" kr",SymbolOnLeft:false,Rate:1},l=b.getCurrency();window.shopCurr&&a.each(window.shopCurr,function(){if(this.Id==l)e=this});if(h)e.Decimals=h;if(window.shopOpt.currFormat)return window.shopOpt.currFormat(d);d=d/e.Rate;if(!e.Decimals)d=Math.round(d-0);d=d.toString().replace(/\$|\,/g,"");var c=parseFloat(d),k=c==(c=Math.abs(c));c=Math.floor(c*100+.50000000001);var i=c%100,f=i.toString();c=Math.floor(c/100).toString();if(i==0)f="";else if(i<10)f="0"+f;for(var g=0;g<Math.floor((c.length-(1+g))/3);g++)c=c.substring(0,c.length-(4*g+3))+" "+c.substring(c.length-(4*g+3));var j=(k?"":"-")+c;if(e.Decimals)j+=(f.length>0?".":"")+f;return e.SymbolOnLeft?e.Symbol+j:j+e.Symbol},chgNoi:function(e,c,a,d){shopcommon.ChangeNoi(e,c,function(){a&&a();!d.notrigger&&b.orderChanged()});window._gaq&&_gaq.push(["_trackEvent","CartNumberOfItemsChange","click"])},addToCartMultiple:function(j,k,c){var c=c||{},g=a.cookie("orderId");function hasAdded(d){if(!c.noupdate)if(d){if(d.OrderId&&d.OrderId>0)(!g||g==0)&&a.cookie("orderId",d.OrderId,{path:"/"});a("body").trigger("addtocart");if(d.Id<0)alert(d.Title);else{window._gaq&&_gaq.push(["Shop","AddToCart","Product",d.ArticleNr]);a(window).trigger("articleInCart",[d]);k&&k();!c.notrigger&&b.orderChanged()}}}for(var i={},h=0;h<j.length;h++){var f=j[h];if(window.shopOpt.beforeAddToCart&&!c.nopre)c=window.shopOpt.beforeAddToCart(f.artNr,f.noi,c);i[f.artNr]=f.noi}var e=c.imageFallback;if(e&&typeof e!="string")e=c.imageFallback.attr("id");var d=c.bodyFallback;if(d&&typeof d!="string")d=c.bodyFallback.attr("id");shopcommon.AddToCartMultiple(g-0,i,e||"",d||"",document.referrer,!!c.newprod,c.addAsSub,hasAdded,function(){})},addToCart:function(g,h,i,c){var c=c||{};if(window.shopOpt.beforeAddToCart&&!c.nopre)c=window.shopOpt.beforeAddToCart(g,h,c);var f=a.cookie("orderId");function hasAdded(d){if(!c.noupdate)if(d){if(d.OrderId&&d.OrderId>0)(!f||f==0)&&a.cookie("orderId",d.OrderId,{path:"/"});a("body").trigger("addtocart");if(d.Id<0)alert(d.Title);else{window._gaq&&_gaq.push(["Shop","AddToCart","Product",d.ArticleNr]);a(window).trigger("articleInCart",[d]);i&&i(d);!c.notrigger&&b.orderChanged()}}window._gaq&&_gaq.push(["_trackEvent","AddItemToCart","click"])}var e=c.imageFallback;if(e&&typeof e!="string")e=c.imageFallback.attr("id");var d=c.bodyFallback;if(d&&typeof d!="string")d=c.bodyFallback.attr("id");if(shopcommon.AddToCart2&&f&&f>0)shopcommon.AddToCart2(f-0,g,h,e||"",d||"",document.referrer,!!c.newprod,hasAdded,function(){});else shopcommon.AddToCart(g,h,e||"",d||"",document.referrer,!!c.newprod,hasAdded,function(){})},removeFromCart:function(a){shopcommon.RemoveFromCart(a,b.orderChanged);window._gaq&&_gaq.push(["_trackEvent","RemoteItemFromCart","click"])},orderChanged:function(){a(b.opt.affect).length>0&&b.getOrder()},lastOrder:{},lastvat:null,getOrder:function(c){c=c||{};var d=a.cookie("orderId");if(location.hash&&location.hash.indexOf("loadcart")!=-1){var e=location.hash.substr(location.hash.indexOf("loadcart")+9)-0;if(e>0)d=e}function calcItems(b){if(!b||!b.items||!b.items.length)return 0;var c=0;a.each(b.items,function(b,a){c=c+a.Noi});return c}function gotorder(d){if(d.currency&&d.currency.length){b.currency=d.currency;a.cookie("shopcurr",d.currency,{expires:d.expires,path:"/"})}var e=b.lastOrder;if(e!=d){if(!e||e.country!=d.country||e.endPrice!=d.endPrice||e.adminFee!=d.adminFee||calcItems(e)!=calcItems(d)||b.lastvat!=b.showExVat()){var f=[];b.lastOrder.items&&a.each(d.items,function(){var d=this.ArticleNr,c=false;a.each(b.lastOrder.items,function(){if(this.ArticleNr==d){c=true;return true}});!c&&f.push(this)});b.lastOrder=d;var g={tag:c.tag||""};a(b.opt.affect).trigger("orderChanged",[d,f,g]);a(window).trigger("orderUpdated",[d,f,g])}b.lastvat=b.showExVat()}d.id&&d.id>0&&a.cookie("orderId",d.id,{expires:d.expires,path:"/"})}if(d>0)shopcommon.GetCart2(d,gotorder);else shopcommon.GetCart(gotorder)}},d,c={};a.fn.shopProduct=function(e){e=e||{};var k=a(this).addClass("shop-product"),A=e.id=a(this).attr("id"),m={},C,l=typeof e.imageClientId==="string"?a("#"+e.imageClientId):e.imageClientId,t=typeof e.bodyClientId==="string"?a("#"+e.bodyClientId):e.bodyClientId,v=typeof e.vatClientId==="string"?a("#"+e.vatClientId):e.vatClientId,i=typeof e.priceClientId==="string"?a("#"+e.priceClientId):e.priceClientId,r=typeof e.artnrClientId==="string"?a("#"+e.artnrClientId):e.artnrClientId,u=typeof e.specClientId==="string"?a("#"+e.specClientId):e.specClientId,s=typeof e.titleClientId==="string"?a("#"+e.titleClientId):e.titleClientId,y=true,q,z,D=[],j=[],n=[],g=[],f,w=a('<div class="shop-configcnt" />').html('<span class="loading" style="display:none">Laddar mÃ¶jliga konfigurationer... vÃ¤nligen vÃ¤nta</span>').appendTo(k),p=a('<div class="shop-innercnt" />').hide().appendTo(w),x=e.stockCntId?a(e.stockCntId):a('<div class="stockcnt filter-cnt" />').appendTo(k),B=a("<label>"+shopOpt.lang.stockstatus+"</label>").appendTo(x),o=a('<div class="shop-stockcnt instock" />').append('<span class="hasstock">'+shopOpt.lang.hasstocktxt+'</span><span class="nostock">'+shopOpt.lang.nostocktxt+"</span>").appendTo(x),h=e.buyId&&e.buyId.length>0?a("#"+e.buyId):a("<div/>").toggle(shopOpt.showButtonDirect).appendTo(k);k.data("options",e);h.addToCart({imageFallback:e.imageClientId,bodyFallback:e.bodyClientId,noiControl:e.noiControlId,multiProductSelector:e.multiProductSelector,addAsSub:e.addAsSub}).data("shopoptions",e);a("body").data("shopoptions",e);function triggerHandlers(){if(!window.shopStarted){window.shopStarted=true;a(window).trigger("shophandlers",[b.handlers])}}k.bind("selectprod",function(b,a){m=a;toHash(a.CustomProperties)});function getPriceRange(e){var d=999999999,c=0;a.each(e,function(){var a=b.showExVat()?this.ep:this.p;if(a<d)d=a;if(a>c)c=a});if(e.length>1)return{max:c,min:d}}function enumProds(s){var r=[],k=hashObj();a.each(g,function(c,b){var a=b.handler.getValue();if(a&&a.length>0)k[b.id]=a;else if(k[b.id])delete k[b.id];r.push(a)});!shopOpt.noHash&&s&&toHash(k);function getMatches(c){var b=[];a.each(j,function(){var e=this,d=true;a.each(r,function(b,a){if(a&&a.length>0)if(e.pv[b]!=a&&!(c!==undefined&&c==b))d=false});d&&b.push(e)});return b}f=getMatches();function getArticle(a,b){if(shopOpt.useArticleCache&&c[a])b(c[a]);else{d&&clearTimeout(d);d=setTimeout(function(){shopcommon.GetArticle(a,function(d){c[a]=d;b(d)})},10)}}var u=9999999999,t=0;if(f&&f.length==1)if(q!=f[0].artnr){q=f[0].artnr;getArticle(q,function(a){m=a;openProduct(m)})}if(f&&f.length>1){z=f[0].artnr;n&&n.length>0&&!y&&getArticle(f[0].artnr,function(c){var g=f;g[0]=c;openProduct(c);a(window).trigger("productupdate",[g,openProduct]);c.ImageUrl&&c.ImageUrl.length>3&&l.attr("data-src")&&l.attr("src",l.attr("data-src").addReplaceQP("imgurl",c.ImageUrl)).fadeIn();if(!shopOpt.autoSelectFirst){var d=getPriceRange(f);if(d&&shopOpt.showButtonDirect)if(d.min==d.max){var e=b.currFormat(d.min);a(".shop-price").html(e).fadeIn();i&&i.html(e).fadeIn();h.trigger("newprice",[e])}else{var e=b.currFormat(d.min)+" - "+b.currFormat(d.max);a(".shop-price").html(e).fadeIn();i&&i.html(e).fadeIn();h.trigger("newprice",[e])}}(shopOpt.usePayair||window.Payair_DATA)&&a.updatePayAir(c,"page_"+c.PageId)})}else if(!f||f.length==0){h.trigger("prodChange",["",{InStock:0,artnr:""}]);!shopOpt.buyNotInStock&&h.trigger("newprice",[shopOpt.lang.pricestock]);o.toggleClass("instock",false);a(window).trigger("instock",[o,false])}a.each(g,function(a){g[a].handler.beforeUpdate()});y=false;var p={};f&&a.each(n,function(c){var b={};a.each(getMatches(c),function(){a.each(this.pv,function(c,d){if(!b[c])b[c]=[d];else a.inArray(d,b[c])==-1&&b[c].push(d)})});p[c]=b});a.each(g,function(a){g[a].handler.updateAlt(p[a][a]||[])});a.each(g,function(a){g[a].handler.afterUpdate()});e.autoselectsingle&&a.each(g,function(a){avalAlternative[a].length==1&&g[a].handler.setValue(avalAlternative[a][0])})}function openProduct(c){k.data("selectProd",c);if(!shopOpt.setOwnImage)c.ImageUrl&&c.ImageUrl.length>3&&l.attr("data-src")&&l.attr("src",l.attr("data-src").addReplaceQP("imgurl",c.ImageUrl)).fadeIn();else shopOpt.setOwnImage(c,f);a(window).trigger("instock",[o,c.InStock>0,c]);o.toggleClass("instock",c.InStock>0);if(c.InStock==0&&!shopOpt.buyNotInStock)h.trigger("newprice",[shopOpt.lang.pricestock]);else h.trigger("newprice",[b.showExVat()?c.PriceStringExVat:c.PriceString]);a(".shopconnect").trigger("articleupdate",[c,f]);if(!f||f.length==1||shopOpt.autoSelectFirst||e.autoSelectFirst){if(c.ProductType!="107"){h.fadeIn();i&&i.length&&i.html(b.showExVat()?c.PriceStringExVat:c.PriceString).fadeIn()}c.Spec&&c.Spec.length>0&&u&&u.length&&u.html(c.Spec).fadeIn();v&&v.length&&v.html(c.Vat).fadeIn();r&&r.length&&r.text(c.ArticleNr);c.Title&&c.Title.length&&s&&s.length&&s.html(c.Title).fadeIn();c.Description&&c.Description.length>3&&t&&t.length&&t.html(c.Description).fadeIn();a(".shop-price").html(b.showExVat()?c.PriceStringExVat:c.PriceString).fadeIn();a(".shopconnect").trigger("prodChange",[c.ArticleNr,c]);h.trigger("prodChange",[c.ArticleNr,c])}if(window.wdGlobal)wd.beforesave=function(d){var h=false,k=d[2].split("."),g=k[0],i=k[1];if(g==e.priceClientId&&c.UseDiscount)return d;function setOrg(){wd.setProp(e.imageClientId+"."+i,d[3],{nobefore:1});h=true}if(g==e.imageClientId&&i=="ImageUrl"){setOrg();if(c.BaseProperty&&c.BaseProperty.length>0){d[2]=c.BaseProperty+".ImageUrl";h=true}}var j=[];f&&a.each(f,function(){j.push(this.ArticleNr||this.artnr)});if(!shopOpt.setOwnImage)g==e.imageClientId&&i=="ImageUrl"&&shopadmin.setImages(d[3],j,function(){shopadmin.ClearArticle(wdGlobal.PageId,loadArticleData)});if(i=="Text")if(c.BaseProperty&&c.BaseProperty.length>0){var l={Vat:e.vatClientId,Price:e.priceClientId,Title:e.titleClientId};if(g==e.bodyClientId+".Text"){d[2]=c.BaseProperty+".Text";h=true}else a.each(l,function(a,f){if(f==g){d[2]=c.BaseProperty+"."+a;h=true}if(g==e.priceClientId)d[3]=b.fixPrice(d[3])})}h&&setTimeout(function(){shopadmin.ClearArticle(wdGlobal.PageId,loadArticleData)},300);return d}}function loadArticleData(){var d=setTimeout(function(){w.find(".loading").slideDown("fast")},250);if(!e.presel&&window.shopSelection)e.presel=window.shopSelection;c={};shopcommon.GetCnf(e.pageId,function(l){clearTimeout(d);p.empty();w.find(".loading").slideUp(100,function(){p.slideDown(300)});var o=l.p,k=l.i;n=o;g=[];triggerHandlers();a.each(o,function(){var e=a("<div/>").addClass("filter-cnt").appendTo(p),c=this,d=c.handler=new b.handlers[this.t||"button"];d.create(this,e,enumProds);d.availOptions=[];g.push(c)});j=[];a.each(k.items,function(){if(!shopOpt.hideNotInStock||this.st>0){var b=this,c=[];a.each(this.pv,function(a,b){c.push(k.val[a][b])});b.pv=c;j.push(b)}});j.length>1&&(shopOpt.usePayair||window.Payair_DATA)&&shopcommon.GetArticle(k.items[0].artnr,function(b){a.updatePayAir(b,"page_"+b.PageId)});a("body").trigger("productupdate",[j,openProduct]);if(k.items.length==1){shopcommon.GetArticle(k.items[0].artnr,function(a){m=a;openProduct(m)});shopOpt.hideIfSingle&&p.hide()}if(true){var c=getPriceRange(j);if(c&&shopOpt.showButtonDirect)if(c.min==c.max){var f=b.currFormat(c.min);a(".shop-price").html(f).fadeIn();i&&i.html(f).fadeIn();h.trigger("newprice",[f])}else{var f=b.currFormat(c.min)+" - "+b.currFormat(c.max);a(".shop-price").html(f).fadeIn();i&&i.html(f).fadeIn();h.trigger("newprice",[f])}a.each(j,function(){a.each(this.pv,function(b,c){if(g[b])a.inArray(c,g[b].handler.availOptions)==-1&&g[b].handler.availOptions.push(c)})});a.each(g,function(a){g[a].handler.createOptions()});function setfromHash(){var c=hashObj();if(e.presel||c){var b={};a.extend(b,e.presel,c);a.each(g,function(c,a){b[a.id]&&g[c].handler.setValue(b[a.id])});enumProds()}}setfromHash();a(window).bind("hashchange",setfromHash)}})}k.bind("refresh",loadArticleData);if(window.shopOpt.shopAddons)ql.load(window.shopOpt.shopAddons,loadArticleData);else loadArticleData()};a.fn.shopAffect=function(b){return a(this).addClass("wd-shop-affect").bind("orderChanged",b)};a.fn.noiTicker=function(c){var g=a(this),h=g.text().replace(shopOpt.lang.noitext,""),f=a("<a/>").addClass("sub").append("<span>-</span>"),e=a("<a/>").addClass("add").append("<span>+</span>"),d=a("<span/>",{text:h+shopOpt.lang.noitext});f.click(function(){c.Noi>1&&b.chgNoi(c.Id,-1,function(){d.text(c.Noi+shopOpt.lang.noitext)},{nopre:1})});e.click(function(){c.Noi<100&&b.chgNoi(c.Id,1,function(){d.text(c.Noi+shopOpt.lang.noitext)},{nopre:1})});return g.addClass("noi-ticker").empty().append(f).append(d).append(e)};a.fn.cartProduct=function(c,m){c.ParentId>0&&a(this).addClass("shop-parent");c.ProductType&&c.ProductType>0&&a(this).addClass("shop-ptype"+c.ProductType);a(this).attr("data-id",c.Id).attr("data-pageid",c.PageId);var e=a(this).empty().data("prod-data",c),l=a("<div/>").addClass("img-col").appendTo(e),d=a("<div/>").addClass("info-col").appendTo(e),h=a("<div/>").addClass("prod-toolbox").appendTo(d),g=shopOpt.totalRowPrice?c.Noi:1;a("<img/>",{src:"/gen.img?imgurl="+c.ImageUrl+"&mw="+m.imgw+"&mh="+m.imgh+"&sf=1&bc=255,255,255","class":"cart-img"}).appendTo(l);var j=a("<span/>",{"class":"cart-price",text:b.currFormat(b.showExVat()?c.PriceExcludingVat*g:c.Price*g)}).appendTo(d);if(c.OrgPrice>c.Price){a("<em/>",{"class":"cart-orgprice",text:b.currFormat(b.showExVat()?c.OrgPriceExcludingVat*g:c.OrgPrice*g)}).appendTo(j);j.addClass("cart-saleprice")}var i=a("<a/>",{href:"/__"+c.PageId,"class":"cart-title",html:c.Title}).appendTo(d);if(c.pageId==0){i.remove();i=a("<span>"+c.Title+"</span>").appendTo(d)}var f=a("<span/>",{"class":"cart-title",html:c.Title}).appendTo(d);a("<span/>",{"class":"cart-artnr",text:"("+c.ArticleNr+")"}).appendTo(d);var k=a("<div/>",{"class":"cart-noi",text:c.Noi+shopOpt.lang.noitext}).appendTo(h),o=a("<div/>",{"class":"cart-delete"}).data("id",c.Id).append("<span>"+shopOpt.lang.remove+"</span>").click(function(){b.removeFromCart(a(this).data("id"))}).appendTo(h),p=a("<div/>",{"class":"cart-descr",html:!c.Spec||c.Spec==c.Title?"":c.Spec}).appendTo(d);if(c.ProductType==0){f.remove();k.noiTicker(c)}else if(c.ProductType==107||c.ProductType==108||c.ProductType==201){f.remove();var n=a('<i class="expire"></i>').appendTo(d);function updatetime(){if(c.Expires>new Date)n.text("Reserverad i "+Math.ceil((c.Expires-new Date)/6e4)+"min");else n.hide()}updatetime();var q=setInterval(updatetime,6e3)}else if(c.ProductType==7812||c.ProductType==7813)f.remove();else if(c.ProductType!=99&&!shopOpt.cartKeepTools){h.remove();l.remove();i.remove()}if((c.ProductType==99||shopOpt.cartKeepTools)&&c.ProductType!=0){f.remove();k.noiTicker(c)}c.ProductType==2&&Math.round((b.showExVat()?c.PriceExVat:c.Price)-0)==0&&j.addClass("prd-discount").remove();if(c.NoiInStock-c.Noi<0&&c.ProductType==0&&!shopOpt.hideNotInStockInCart){e.addClass("cart-notinstock");d.append('<span class="notinstocktext">'+shopOpt.lang.notinstock+"</span>")}else e.removeClass("cart-notinstock");window.shopOpt.customCartRow&&shopOpt.customCartRow(c,d,e);return e};a.fn.shopcode=function(e){var f=a(this),c=a('<div class="code-status" />').hide().click(function(){a(this).fadeOut()});a(this).after(c);e.btn&&a(this).after(a('<div class="wdshop-code-btn" />').text(shopOpt.lang.addshopcode).click(function(){applyCode(f.val())}));var d="";function applyCode(a){if(a==d)return;d=a;c.fadeOut();shopcommon.ApplyCode(a,function(a){c.fadeIn();if(a==99)c.html("Koden finns inte");else if(a==1)c.html("Du har redan anvÃ¤nt denna kampanj");else if(a==2)c.html("Kampanjen Ã¤r inte aktiv fÃ¶rtillfÃ¤llet");else if(a==0)c.html("Kampanjen Ã¤r nu aktiverad");else c.html("NÃ¥got gick fel vid tillÃ¤gningen av kampanjen, fÃ¶rsÃ¶k igen");b.getOrder()},function(){c.fadeIn().html("NÃ¥got gick fel vid tillÃ¤gningen av kampanjen, fÃ¶rsÃ¶k igen")})}a(this).keypress(function(b){if(b.keyCode==13){applyCode(a(this).val());b.stopPropagation();return false}})};a.fn.cart=function(d){var f=a(this),l=window.shopOpt.cartDefault,d=a.extend({},l,d||{}),g;function gotOrder(q,i,m){function appendSum(g){g.find(".cart-sumcnt").remove();var f=a("<div/>",{"class":"cart-sumcnt cf"}).appendTo(g);!shopOpt.noTotal&&f.append(a("<div/>").addClass("cart-sum").append(a("<span/>").html(b.showExVat()?shopOpt.lang.totalsumexvat:shopOpt.lang.totalsum)).append(a("<strong/>").html(b.currFormat(b.showExVat()?i.totalPriceExVat:i.totalPrice))));if(window.shopOpt.customCartSum){var j=window.shopOpt.customCartSum(f,i);if(j)i=j}i.adminFee&&i.adminFee>0&&!window.shopOpt.hideAdminFee&&f.append(a("<div/>").addClass("cart-sum cart-admfee").append(a("<span/>").html(shopOpt.lang.adminfee)).append(a("<strong/>").html(b.currFormat(i.adminFee))));(i.shipping>0||shopOpt.alwaysShowShipping)&&f.append(a("<div/>").addClass("cart-sum cart-cargo").append(a("<span/>").html(b.showExVat()?shopOpt.lang.shippingexvat:shopOpt.lang.shipping)).append(a("<strong/>").html(shopOpt.customShipping||b.currFormat(b.showExVat()?i.shippingExVat:i.shipping))));i.totalDiscount>0&&!window.shopOpt.hideDiscount&&i.endPrice>0&&f.append(a("<div/>").addClass("cart-sum cart-rea").append(a("<span/>").html(b.showExVat()?shopOpt.lang.discountexvat:shopOpt.lang.discount)).append(a("<strong/>").html(b.currFormat(b.showExVat()?i.totalDiscountexVat:i.totalDiscount))));!b.showExVat(true)&&f.append(a("<div/>").addClass("cart-sum cart-tax").append(a("<span/>").html(b.showExVat()?shopOpt.lang.vat:shopOpt.lang.ofwhichvat)).append(a("<strong/>").html(b.currFormat(i.totalVat,true))));f.append(a("<div/>").addClass("cart-sum line-top").append(a("<span/>").html(b.showExVat(true)?shopOpt.lang.cartsumexvat:shopOpt.lang.cartsum)).append(a("<strong/>").html(b.currFormat(b.showExVat(true)?i.endPriceExVat:i.endPrice))));i.roundOff!=0&&f.append(a("<div/>").addClass("cart-sum").append(a("<span/>").html(shopOpt.lang.cartroundoff)).append(a("<strong/>").html((b.showExVat(true)?i.roundOffExVat:i.roundOff)+shopOpt.lang.centtxt)));(!d.overview||d.showtools)&&a("<div/>").addClass("cart-tools").append(a('<a class="cart-close"><span>'+shopOpt.lang.close+"</span></a>").click(function(){g.slideUp(300)})).append('<a class="cart-checkout sbtn" href="'+d.checkoutUrl+'">'+shopOpt.lang.gotocart+"</a>").append(a('<a class="cart-clear sbtn" href="javascript:void(0)">'+shopOpt.lang.emptycart+"</a>").click(function(){shopcommon.newCart(function(f){f>0&&a.cookie("orderId",f,{expires:14,path:"/"});h.html(d.cartEmptyText);e.fadeOut(200).empty();c.fadeOut(200).empty();b.orderChanged()})})).appendTo(f)}if(i.items&&i.items.length>0){var l=0;f.removeClass("cartempty").addClass("carthasitems");a(".shop-cart-connect").fadeIn();a.each(i.items,function(){if(this.ParentId==0)l+=this.Noi});h.html(d.itemsInCartText.format(l,b.currFormat(b.showExVat()?i.endPriceExVat:i.endPrice)));var o=c.find(".wd-cart-prod").addClass("to-remove"),j=c.find(".zoom-parent");if(j.length==0)j=a('<div class="zoom-parent" />').appendTo(c);var p;function findParent(d){var b=j;c.find(".wd-cart-prod").each(function(){if(a(this).data("cart-id")==d){b=a(this);return true}});return b}var k;function initSlider(){if(!window.shopOpt.useSlider)return;k&&clearTimeout(k);k=setTimeout(function(){j.contentslider({noi:d.noi})},200)}a.each(i.items,function(){var c=this,b=[];o.each(function(){if(a(this).data("cart-id")==c.Id){b=a(this).removeClass("to-remove");return true}});if(b.length==0)a("<div/>").addClass("wd-cart-prod cf").cartProduct(this,d).data("cart-id",this.Id).appendTo(findParent(this.ParentId));else a(b).cartProduct(this,d)});i.items.length&&ar(shopcommon.path+"GetRelatedArticles",{},function(d){a.each(d,function(){var g=this.id,d=c.find('div.wd-cart-prod[data-pageid="'+g+'"]'),e=d.find("div.relcont");if(e&&e.length)d=e;if(d&&d.length){var f=a('<div class="cart-rel-art" />').appendTo(d);a.each(this.art,function(){var c=this[0],e=this.length>1,h=a('<div class="cart-add-rel" />').appendTo(f),g=e?"VÃ¤lj":"("+b.currFormat(c.Price)+")",d=a('<div class="button">'+c.Title+'<em class="price relprice">'+g+"</em></span>").appendTo(h);a('<img class="cart-rel-img" src="/gen.img?imgurl='+c.ImageUrl+'&mw=30&mh=30&sf=1"/>').appendTo(d);if(!e)d.click(function(){b.addToCart(c.ArticleNr,1,function(){d.addClass("incart")})});else d.data("pageid",c.PageId).quickBuy()})}})});var n=c.find(".to-remove");if(n.length>0)n.slideUp(350,function(){a(this).remove();if(c.is(":empty"))c.slideUp(300);else initSlider()});else initSlider();d.overview&&c.fadeIn(200);appendSum(c)}else{f.addClass("cartempty").removeClass("carthasitems");a(".shop-cart-connect").fadeOut();h.html(d.cartEmptyText);e.fadeOut(200).empty();c.fadeOut(200)}if(!d.overview){e.click(function(a){a.stopPropagation()});c.click(function(a){a.stopPropagation()});!shopOpt.dontCloseCartOnClick&&a("body").click(function(){e.slideUp(300);c.slideUp(200)});if(m.length>0&&!c.is(":visible")){e.empty().append(a("<div/>").addClass("wd-cart-intro").html(shopOpt.lang.cartintro));a.each(m,function(){e.append(a("<div/>").addClass("wd-cart-prod cf").hide().cartProduct(this,d).slideDown(300))});e.slideDown(300);g&&clearTimeout(g);g=setTimeout(function(){e.slideUp(300,function(){e.empty()})},d.newitemdelay);appendSum(e)}}}var i=a("<div/>",{"class":"cart-info"}).appendTo(f),h=a("<span/>").appendTo(i);i.bind(d.openevent,function(a){if(c.is(":visible"))if(ql.w<768)c.hide();else c.slideUp(300);else if(ql.w<768)c.show();else c.slideDown(300,function(){if(!window.shopOpt.useSlider)return;c.find(".zoom-parent").contentslider({noi:d.noi})});a.stopPropagation()}).shopAffect(gotOrder);var j=d.overview?"cart-overview":"cart-contents",c=a("<div/>",{"class":j+" cart-allprods cf"}).hide().appendTo(f),k=a("<div/>").addClass("wd-cart-intro").html(shopOpt.lang.incarttxt).appendTo(c);shopOpt.customCartIntro&&shopOpt.customCartIntro(k);var e=a("<div/>",{"class":j+" cart-newprods cf"}).hide().appendTo(f);e.mouseenter(function(){clearTimeout(g)});e.append('<div class="exDivIcon" />');c.append('<div class="exDivIcon" />');if(d.overview){c.show();i.hide()}b.getOrder()};a.updatePayAir=function(b,d){var c=a("#Payair_QR");if(shopOpt.payairOnlySingle)if(b&&(!d||b.ArticleNr==d)){a(".payaircnt").show();a("#Payair_button").show()}else{a(".payaircnt").hide();a("#Payair_button").hide()}var f=c.data("url")||"https://test.payair.com/embed/js/mobileshopper_product_dev.js";if(c&&c.length)if(window.Payair_DATA){if(b.Title=="")b.Title="Unnamed";Payair_DATA.setArticleID(d||b.ArticleNr);var e=b.JsonPrice;if(b.SalePrice<e&&b.SalePrice>0)e=b.SalePrice;Payair_DATA.setProductPrice(Math.round(e));Payair_DATA.setProductName(escape(b.Title))}else{c.attr("src",f+"?merchantreference="+c.attr("data-merchant")+"&articleID="+(d||b.ArticleNr)+"&product_name="+escape(b.Title)+"&product_price="+b.Price+"&product_currency=SEK");ql.load(c.attr("src"),function(){})}};a.fn.zoneSelector=function(g,f){b.currentZone=g;function fixParentSelector(){var a=c.find("li.selected"),b=a.parent().parent();if(b.hasClass("flag-misc"))b.addClass("selected").find(">span").text(e+" - "+a.find(">span").text());else c.find("li.flag-misc>span").text(e)}var c=a(this),e=a(this).find("li.flag-misc>span").text();fixParentSelector();var d=function(d,c){shopcommon.updateZone(d,function(){a(".buy-cnt").trigger("update");b.getOrder();a(window).trigger("zonechange",[b.currentZone]);c&&c();f&&a("form").submit()})};c.find("select").change(function(){b.currentZone=a(this).find(":selected").data("zone");var c=a(this).find(":selected").data("name");d(c)});c.find("li").not(".flag-misc").click(function(){c.find("li").removeClass("selected");a(this).addClass("selected");b.currentZone=a(this).data("zone");fixParentSelector();var e=a(this).data("name");window._gaq&&_gaq.push(["_trackEvent","ChangeZone","click"]);d(e,function(){c.find(">span").text(e).attr("class","shop-lang-title flag-"+b.currentZone)})});a(document).bind("orderChanged",function(g,e){var f=c.find("li.selected, select option:selected").text();if(f!=e.country){c.find("select option").removeAttr("selected");c.find("select option").filter(function(){return a(this).text()==e.country}).attr("selected","selected");c.find("li").removeClass("selected");var d=c.find("li").filter(function(){return a(this).text()==e.country});d.addClass("selected");b.currentZone=d&&d.length>0?d.data("zone"):c.find("select option:selected").data("zone");c.find(">span").text(name).attr("class","shop-lang-title flag-"+(d&&d.length>0?d.data("code"):c.find("select option:selected").data("code")))}})};a.fn.addToCart=function(d){var g,j,f=a(this),r={text:window.shopOpt.lang.buyBtn},d=a.extend(r,d||{}),o=false,q=false,l,h;function getNoi(){return l.length>0?l.val():1}function updateExternal(b){a.updatePayAir(b)}function checkCustom(b){if(shopOpt.customArticles){var a=shopOpt.customArticles[b];if(a){m.show();a.html&&m.html(a.html);c.hide()}else{m.hide();c.show()}}}if(d.articleNr||d.firstNr){g=d.articleNr;var k=a(".shop-customprice");shopcommon.GetArticle(d.articleNr||d.firstNr,function(a){checkCustom(g);updateExternal(a);j=a;if(k&&k.length>0)k.html(b.showExVat()?a.PriceStringExVat:a.PriceString);else h.html(b.showExVat()?a.PriceStringExVat:a.PriceString);f.trigger("pricechanged",[b.showExVat()?a.PriceStringExVat:a.PriceString])})}f.data("artnr",g);function findArticleInOrder(c){var b;c.items&&a.each(c.items,function(){if(this.ArticleNr==g){b=this;return true}});return b}function setChangeProperties(g){var a=findArticleInOrder(g);if(a){f.trigger("alertAdd",[o,a]);var d=shopOpt.lang.noiincart.format(a.Noi);c.attr("title",d);i.html(d);f.addClass("wd-incart");var e=c.offset();e.top-=c.height();var a=findArticleInOrder(b.lastOrder);if(a)if(a.NoiInStock-a.Noi<1){c.fadeTo(200,shopOpt.notInStockOpacity).attr("title",shopOpt.lang.stockcart);f.addClass("notconfigged notinstock");return}i.fadeIn().css(e);setTimeout(function(){i.fadeOut()},1500);o=true;q=true}else{var d=shopOpt.lang.addincart;c.attr("title",d);i.html(d);i.fadeOut();f.removeClass("wd-incart")}}var i=a("<div/>").addClass("buy-infobox").hide().appendTo(a("body"));f.wrap('<div class="buy-outercnt" />');var p=f;if(!d.noiControl||a(d.noiControl).length==0)l=a('<input type="text" />').attr("title","KÃ¶p").addClass("buy-noi").val("1").appendTo(p);else l=a(d.noiControl);p.addClass("buy-cnt").append(h=a("<div/>").addClass("buy-price"));var k=a(".shop-customprice");if(k&&k.length)h=k;if(d.priceobj)h=d.priceobj;var c=a("<div />").css("opacity",(!g||g.length==0)&&!d.pageId?shopOpt.notInStockOpacity:1).text(d.text).addClass("wd-buy-button sbtn").shopAffect(function(b,a){setChangeProperties(a)});if(d.pageId>0&&!d.articleNr)if(d.noiarticles&&d.noiarticles>1){c.text("VÃ¤lj och kÃ¶p");c.data("pageid",d.pageId).quickBuy()}f.append(c);var m=a('<div class="customcont" />').hide().insertAfter(c);function updateButtonNoi(){if(shopOpt.showNoiOnButton){var a=findArticleInOrder(b.lastOrder);if(a)c.text(a.Noi+shopOpt.lang.noiincartbtn);else c.text(shopOpt.lang.buyBtn)}}function getArt(d,e){var b=d.data("noi")||e;b=b-1;if(!b||!a.isNumeric(b))b=0;var c=d.data("price");if(!c||!a.isNumeric(c))c=0;return{artNr:d.data("artnr"),noi:!b||b<1?e:b,price:c?c:0}}function getMultiProducts(){if(!d.multiProductSelector)return undefined;var b=[],c=getNoi();b.push({artNr:g,noi:c,price:0});a(d.multiProductSelector).each(function(){b.push(getArt(a(this),c))});return b}var n=function(){if(g&&g.length){if(d.multiProductSelector){var a=getMultiProducts();if(a&&a.length>1){for(var c=[],b=0;b<a.length;b++)c.push(a[b].artNr);shopcommon.CalcMultiPrice(c,function(a){h.html(a);f.trigger("pricechanged",[a])});return}}shopcommon.GetArticle(g,function(a){j=a;updateData(j)})}};a(window).bind("updateprices",n);f.bind("updateprices",n);if(!d.pageId||d.articleNr){c.shopAffect(updateButtonNoi);c.bind(e,function(j){var f=a(this).parent().hasClass("notinstock")&&!shopOpt.buyNotInStock;if(a(this).hasClass("notavailable"))return false;if(g&&g.length>0&&!f&&!a(this).parent().hasClass("notinzone"))if(c.hasClass("addingtocart"))alert(shopOpt.lang.addingtocart);else{c.attr("disabled","disabled").addClass("addingtocart").text(shopOpt.lang.btnloading);function doAdd(a){b.addToCart(g,getNoi(),function(b){c.removeAttr("disabled").removeClass("addingtocart").text(shopOpt.lang.buyBtn);updateButtonNoi();a&&a(b)},d)}if(d.multiProductSelector){var e=getMultiProducts();if(e&&e.length<2)doAdd();else b.addToCartMultiple(e,function(){c.removeAttr("disabled").removeClass("addingtocart").text(shopOpt.lang.buyBtn);updateButtonNoi()},d)}else doAdd()}else{if(f)c.attr("title",shopOpt.lang.stockcart2);else if(a(this).parent().hasClass("notinzone"))c.attr("title",shopOpt.lang.notinzonetxt);else c.attr("title",shopOpt.lang.cartcheck);i.html(c.attr("title"));var h=a(this).offset();h.top-=a(this).height();i.fadeIn().css(h);setTimeout(function(){i.fadeOut()},1500)}j.stopPropagation()})}f.bind("newprice",function(b,a){h.html(a);f.trigger("pricechanged",[a])});function updateData(a){j=a;updateExternal(a);f.data("artnr",g);var d=findArticleInOrder(b.lastOrder);if(d&&a){if(d.NoiInStock-d.Noi<1){c.fadeTo(200,.5).attr("title",shopOpt.lang.stockcart);f.addClass("notconfigged notinstock");return}}else f.removeClass("notinstock");f.removeClass("notinzone").removeClass("notavailable");updateButtonNoi();h.html(b.showExVat()?a.PriceStringExVat:a.PriceString);f.trigger("pricechanged",[b.showExVat()?a.PriceStringExVat:a.PriceString]);if(a&&a.AvailableInZones)if(b.currentZone&&a.AvailableInZones&&a.AvailableInZones.length>0)if(a.AvailableInZones.indexOf(b.currentZone)==-1){f.addClass("notconfigged notinzone");h.html(shopOpt.lang.notinzone)}if(shopOpt.disableZeroPrice&&a&&a.JsonPrice<=0){f.addClass("notconfigged notavailable");c.fadeTo(200,.5).attr("title",shopOpt.lang.notavailable);h.html(shopOpt.lang.notavailabletxt)}else if(!a||shopOpt.checkStock&&(a&&a.InStock<=0)){f.addClass("notconfigged notinstock");c.fadeTo(200,.5).attr("title",shopOpt.lang.stockcart);!shopOpt.buyNotInStock&&h.html(shopOpt.lang.pricestock)}else if(g&&g.length>0){c.fadeTo(200,1);f.removeClass("notconfigged")}else{c.fadeTo(200,.5);f.addClass("notconfigged")}setChangeProperties(b.lastOrder);checkCustom(g)}f.bind("update",function(){shopcommon.GetArticle(g,function(a){j=a;updateData(j)})});f.bind("prodChange",function(c,b,a){g=b;updateData(a)});return a(this)};b.fetchAsyncPrices()})(jQuery);jQuery(window).trigger("shoploaded",[wdShop])


 

String.prototype.evalJSONWithDates = function () {
    var jsonWithDates = this.replace(/"\\\/Date\((\d+)\)\\\/"/g, 'new Date($1)');
    return eval('(' + jsonWithDates + ')');
};

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    wd: "yyyy-mm-dd HH:MM"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör",
        "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
        "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
    ]
};

Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

    function ar(cmd,data,cb,err) {
        
        //console.log('hämta data');
            var request = new XMLHttpRequest();
            
            request.onload = function() {
                //console.log('ok:'+request.response);
                if (cb)
                    cb(request.response.evalJSONWithDates().d);

            };
            request.onerror = function() {
                //console.log('error');
                if (err)
                    err();
            };
            

            request.open("POST", cmd);
            request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            var data = JSON.stringify(data);
            
            request.send(data);
        
    };


    $.loadMap = function (file, cnt, cb, opt) {
        opt = opt || {};



        //wc.GetRemoteFile(file, function (data) {
            //cnt.html(data);
            var res = {}; //inputs: {}, selects: {}, buttons: {} 
            if (window.dialogText)
                cnt.find('.trans').each(function () {
                    var k = $(this).data('tkey');
                    var tr = dt(k);
                    if (k != tr)
                        $(this).html(tr);
                });
            cnt.find('input').each(function () {
                var ob = $(this);
                if (ob.hasClass('number'))
                    ob.numeric();
                if (ob.hasClass('colorp'))
                    ob.wdcolor();
                res[ob.attr('id')] = ob;
            });
            cnt.find('select').each(function () {
                res[$(this).attr('id')] = $(this);
            });

            cnt.find('.button').each(function () {
                res[$(this).attr('id')] = $(this);
                if (!opt.nobutton)
                    $(this).button();
            });
            cnt.find('.ph').each(function () {
                res[$(this).attr('id')] = $(this);
            });
            if (cnt.find('.accTitle').length > 0)
                cnt.accordion({ header: '.accTitle' });
            if (cb)
                cb(res);

    };



    $.fn.tkTime = function (opt) {

    function getTime(v) {
        var p = v.split(':');
        return ((p[0] - 0) * 60) + (p[1] - 0);
    }

    var t = $(this).val(opt.startval || (new Date().getHours() + ':00')).change(function () {
        var time = getTime(t.val());
        if (opt.onchange)
            opt.onchange(time);
    });
   
};

String.prototype.insert = function (index, string) {
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
};

String.prototype.format = function () {
    var txt = this,
        i = arguments.length;

    while (i--) {
        txt = txt.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return txt;
};

String.prototype.short = function () {
    return this.replace(/Centralstation/ig, 'C').replace(/station/ig, 'stn');
};

Date.prototype.inmin = function () {
    return this.getHours() * 60 + this.getMinutes();
};

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

var wdShop  = {
    fetchedCustomer:false,
currFormat : function(v) {
    return Math.round(v)+' kr';
},logout: function (url) {
            
            shopcommon.Logout(function () {
                if (shopOpt.logoutResetVat) {
                    $.cookie('exvat', '', { expires: -1, path: '/' });
                }
                $.cookie('customerId', '', { expires: -1, path: '/' });
                $(window).trigger('shoplogout');
                if (shopOpt.onlogout)
                    shopOpt.onlogout();
                setTimeout(function () {

                    if (url && window.location.href != url)
                        window.location.href = url;
                    else
                        window.location.reload();
                }, 300);
            });
            if (window.FB)
                FB.logout();
        }

};


Number.prototype.timeSpan = function () {
    var hours = Math.floor(this / 60);
    var minutes = this % 60;
    if (minutes < 10 && hours > 0)
        minutes = '0' + minutes;
    if (hours > 0)
        return hours + ':' + minutes;
    return minutes + 'm';
};

var svcUrl = 'http://tagkompaniet.se/tripfinder.asmx/',
    windowwidth = $(window).width(),
    windowheight = $(window).height();


function getDate(v) {

    var p = v.split('-');
    return new Date(p[0], p[1] - 1, p[2]);

}


function isOwn(t, checkNoi) {
    var isown = true;
    var nd = new Date();
    //console.log(t.subTrips.length);
    if (checkNoi && t.subTrips.length != 1)
        return false;
    $.each(t.subTrips, function () {
        //console.log(this);
        if (this.Departure < nd)
            isown = false;
        if (!((this.Trip.CompanyNr == 314 || this.Trip.CompanyNr == 315) && this.Price.Full > 0)) {

            isown = false;
            return false;
        }
    });
    return isown;
}

$.fn.datePicker = function (opt) {

    

    var t = $(this).change(function () {
        var d = getDate($(this).val());
        
        if (opt.onchange)
            opt.onchange(d);
    }).click(function (e) {
        e.stopPropagation();
    });;

  
    var sDate = (opt.startDate || new Date());
    t.val(sDate.format('yyyy-mm-dd'));
    
    

        

    
};

$.fn.FindTicket = function (data, opt) {
    var icnt = $(this);
    var from = data.StartStation;
    var to = data.EndStation;
    var seldate = new Date();
    $('<span class="seltime title"/>').text('Datum').appendTo(icnt);
    var dcnt = $('<div class="mobiledate dateclick" />').appendTo(icnt);
    $('<input class="hiddeninp" type="date" />').appendTo(dcnt).datePicker({
        onchange: function (d) {
            seldate = d;


            findTrips();
        }
    });

    $('<span class="departure title"/>').text('Avgång').appendTo(icnt);
    var tripcnt = $('<select />').appendTo(icnt);
    $('<br/>').appendTo(icnt);
    var switchbtn = $('<span class="button">Byt riktning</span>').click(function () {
        var tmp = from;
        from = to;
        to = tmp;
        findTrips();
    }).appendTo(icnt);

    var buybtn = $('<span class="button">' + (opt.buyText || 'Köp biljett') + '</span>').click(function () {
        ar(svcUrl + (opt.buyFunc || 'ConvertTrip'), { oid: data.OrderId, id: data.Id, tripid: tripcnt.val(), noi: 1, from: from, to: to }, function (d) {
            updateTickets();
            if (opt.afterBuy)
                opt.afterBuy(d);
            if (d) {
                alert('Din biljett är nu köpt');

                cnt.find('span.noileft').text((d.Noi - d.UsedNoi));
            } else {
                alert('Biljetten kunde inte köpas');
            }

            //icnt.slideToggle();
            //sbtn.toggle();

            //wdShop.orderChanged();
            updateTickets();
        });
    }).appendTo(icnt);

    function findTrips() {
        tripcnt.empty();
        ar(svcUrl + 'FindTrips', { from: from, to: to, when: seldate }, function (d) {

            $.each(d.Result, function (i, t) {
                //console.log(t);
                if (isOwn(t, opt.checkNoi))
                    tripcnt.append('<option value="' + t.uid + '">' + station[from].n.short() + ' ' + t.StartTime.format('HH:MM') + ' till ' + station[to].n.short() + ' ' + t.EndTime.format('HH:MM') + '</option>');
            });
        });
    }

    findTrips();
    return $(this);
}


function openTicket(data) {
    console.log('open',data);
    var cnt = $('<div class="ticketview overthrow scrollable" />').appendTo($('#ticketview'));
    var btns = $('<div class="cf ticketbtn" />');
    var prci = $('<div />');
    
    $('<div class="close"></div>').click(function () {
        $(this).parent().remove();
    }).appendTo(cnt);

    $('<div class="cf tickettop"><div class="ball"><div class="symbol"></div><div class="shine"></div></div><img src="/images/tk-logo-txt.png" alt="Tågkompaniet" height="40" class="left" /><h1 class="right">' + data.ArticleGroup + '</h1></div>').appendTo(cnt);
    //$('<div class="ordernr">Ordernummer: ' + data.OrderId + '</div>').appendTo(cnt);
    //$('<div class="ticketnr text-right">' + data.Code.substring(0, data.Code.length - 1) + '</div>').appendTo(cnt);
    //$('<div>' + data.ArticleGroup + '</div>').appendTo(cnt);
    $('<div class="tickettype">' + data.Title.short() + '</div>').appendTo(cnt);
    var ispartstring = (data.ParentId > 0 && data.TickerNr) ? 'Delresa: ' : '';
    var partadd = '';
    if (ispartstring) {
        partadd = ' resa ' + data.TickerNr + ' / ' + data.NoiTickets;
    }
    var tdesc = $('<div class="tickettype"><h2>' + ispartstring+data.Description.short()+partadd + '</h2></div>').appendTo(cnt);
    if (data.ArticleGroup == "Pendlarkort") {
        var tcnt = $('<div class="cf ticketiholder comm" />').appendTo(cnt);
        $('<div class="ticketinfo"><span>Personnummer:</span>&nbsp;' + data.OrgNr + '</div>').appendTo(tcnt);
        $('<div class="ticketinfo"><span>Giltighetstid:</span>&nbsp;' + data.Start.format('yyyy-mm-dd') + ' - ' + data.End.format('yyyy-mm-dd') + '</div>').appendTo(tcnt);

    }
    else if (data.ArticleGroup == "Partibiljett") {
        $('<div>Antal partibiljetter kvar: <span class="noileft">' + (data.Noi - data.UsedNoi) + '</span></div>').appendTo(cnt);
    } else {
        var tcnt = $('<div class="cf ticketiholder" />').appendTo(cnt);
        var time = $('<div class="ticketinfo"><span>Avgång</span>' + data.Start.format('HH:MM') + '</div>').appendTo(tcnt);
        $('<div class="ticketinfo"><span>Ankomst</span>' + data.End.format('HH:MM') + '</div>').appendTo(tcnt);
        $('<div class="ticketinfo tre"><span>Tåg</span>' + data.TripNr + (data.FullFlex ? ' (ombokningsbar)' : '') + '</div>').appendTo(tcnt);
        $('<div class="ticketinfo tre"><span>Vagn</span>' + data.WagonId + '</div>').appendTo(tcnt);
        $('<div class="ticketinfo tre"><span>Plats</span>' + data.SeatId + '</div>').appendTo(tcnt);
        if (data.Fika)
            $('<div class="ticketinfo fika"><span>Tillägg</span>Fika ingår</div>').appendTo(tcnt);
        //$('<div class="ticketinfo"><span>Datum:</span>&nbsp;' + data.Start.format('yyyy-mm-dd') + '</div>').appendTo(cnt);
        var b = $('<span class="button cart-bookseat" />').text(data.SeatId > 0 ? 'Byt plats' : 'Välj plats').click(function (e) {
            cnt.remove();
            e.stopPropagation();
            //ql.load('/js/seat.js', function () {
                bookseat(data.OrderId, data.Id);
            //});
        }).appendTo(btns);
        if (window.FB) {
            $('<div class="button postfb fbbutton">Posta på Facebook</div>').click(function () { fb_publish(data); }).appendTo(btns);
        }
    }
    var bussstr = ['', 'Buss i tätort startstation', 'Buss i tätort slutstation', 'Buss i tätort'];
    //$('<div class="ticketnr text-right">' + data.Code.substring(0, data.Code.length - 1) + '</div>').appendTo(cnt);
    if (data.ArticleGroup != "Partibiljett") {
        if (data.Fika)
            $('<div class="ticketinfo mfika"><span>Tillägg</span>Fika ingår</div>').appendTo(tcnt);
        var mcnt = $('<div class="cf middlecontent" />').appendTo(cnt);
        //console.log(data.Traveller);
        if (data.ArticleGroup == "Pendlarkort") {
            var xtra = $('<div class="ticketinfo"><span>Namn:</span>&nbsp;<span class="mbold">' + data.Traveller + '</span>').appendTo(mcnt);
            if (data.BussExtra > 0)
                $('<div class="ticketinfo"><span class="mbold">' + bussstr[data.BussExtra] + '</span>').appendTo(mcnt);
        } else
            var xtra = $('<div class="ticketinfo"><span>Namn:</span>&nbsp;' + data.Traveller + '<br/><br/><span class="normaltxt mbold">Gäller ' + data.Start.format('ddd dd mmm yyyy') + '</span></div>').appendTo(mcnt);
        if (data.Fullflex)
            $('<br/><br/><span class="normaltxt mbold">Kan ombokas och återbetalas</span>').appendTo(xtra);
        $('<div class="right conf"><div class="ticketnr text-right">' + data.Code.substring(0, data.Code.length - 1) + '</div></div>').appendTo(mcnt).append(showQRCode(data.Code));
        $('<div class="mobilescan"><div class="ticketnr text-center">' + data.Code.substring(0, data.Code.length - 1) + '</div></div>').appendTo(tdesc).append(showQRCode(data.Code));
        var trnnfo = $('<div class="traininfo" />').appendTo(xtra);
        var explink = $('<a class="toggleinfo">Visa tågets resväg</a>').click(function () {
            $(this).parent().toggleClass('open');
        }).appendTo(trnnfo);
        var ecnt = $('<div class="extrasub ani"></div>').appendTo(trnnfo);
        var nd = new Date();
        var diff = Math.abs(data.Start - nd);
        //console.log(diff);
        if (diff < 6830000) {
            //console.log(data);
            var depp = true;
            ar(svcUrl + 'GetTrainStatus', { nr: data.TripNr }, function (dd) {
                var c = JSON.parse(dd);
                var nt = new Date();
                var stnName = station[data.StartStation].n.replace(/Centralstation/ig, 'C').replace(/station/ig, '').trim();
                var aPrp = depp ? 'AnnonseradTidpunktAvgang' : 'AnnonseradTidpunktAnkomst';
                if (c.LpvTrafiklagen && c.LpvTrafiklagen.Trafiklage) {
                    var tl = c.LpvTrafiklagen.Trafiklage;
                    var last = tl[0];// : tl[0];
                    $.each(tl, function () {


                        var date = new Date(this[aPrp] || this.AnnonseradTidpunktAvgang);

                        var passed = (date < nt);
                        if (this.TrafikplatsNamn == stnName)
                            last = this;
                        var icnt = $('<div class="stn cf' + (passed ? ' passed' : '') + '"></div>').appendTo(ecnt);
                        var name = $('<div class="stnname left" />').appendTo(icnt);
                        $('<span class="names">' + this.TrafikplatsNamn + '</span>').appendTo(name);
                        var spar = this.SparangivelseAnkomst || this.SparangivelseAvgang;
                        var times = $('<div class="times right" />').appendTo(icnt);
                        if (spar)
                            name.append('<div>Spår:' + spar + '</div>');
                        if (this.AnnonseradTidpunktAnkomst) {
                            var arrtime = new Date(this.AnnonseradTidpunktAnkomst);
                            var it = $('<div class="arr" />').html('Ank:<span class="oldtime">' + arrtime.format('HH:MM') + '</span>').appendTo(times);
                            if (this.VerkligTidpunktAnkomst) {
                                var newtime = new Date(this.VerkligTidpunktAnkomst);
                                if (Math.abs(newtime - arrtime) > 3600)
                                    $('<span class="newtime" />').text(newtime.format('HH:MM')).appendTo(it.addClass('hasnewtime'));
                            }
                        }
                        if (this.AnnonseradTidpunktAvgang) {
                            var arrtime = new Date(this.AnnonseradTidpunktAvgang);
                            var it = $('<div class="dep" />').html('Avg:<span class="oldtime">' + arrtime.format('HH:MM') + '</span>').appendTo(times);
                            if (this.VerkligTidpunktAvgang) {
                                var newtime = new Date(this.VerkligTidpunktAvgang);
                                if (Math.abs(newtime - arrtime) > 3600)
                                    $('<span class="newtime" />').text(newtime.format('HH:MM')).appendTo(it.addClass('hasnewtime'));
                            }
                        }

                    });



                    var estPrp = depp ? 'BeraknadTidpunktAvgang' : 'BeraknadTidpunktAnkomst';
                    var anPrp = last[estPrp] || last[aPrp];
                    if (anPrp) {
                        var antid = new Date(anPrp);
                        //var tiddiff = Math.abs(antid - dt);
                        //console.log('diff', tiddiff);
                        //if (tiddiff > 1000) {

                        var crap = time;
                        if (antid) {
                            var tidstr = antid.format('HH:MM');

                            //console.log('nytid', antid.format('HH:MM'), crap);
                            crap.html('<span>Avgång</span>' + antid.format('HH:MM') + '</div>');
                            //crap.append('<div class="anntime">' + antid.format('HH:MM') + "</div>");
                        }
                        //}
                    }

                    var installd = depp ? last.InstalldAvgang == "true" : last.InstalldAnkomst == "true";

                    if (installd)
                        console.log('installd', last);

                    var anm = depp ? last.AnmarkningarAvgang : last.AnmarkningarAnkomst;

                    cnt.toggleClass('installd', installd);


                    var spar = last.SparangivelseAnkomst || last.SparangivelseAvgang;
                    if (spar) {
                        $('<div class="ticketinfo tre"><span>Spår</span>' + spar + '</div>').appendTo(tcnt);

                    }



                }

            });
        }


        if (data.Fullflex && data.Start > new Date()) {
            var sbtn = $('<span class="button">Boka om biljetten</span>').click(function () {
                icnt.slideToggle();
                sbtn.toggle();
            }).prependTo(btns);
            var icnt = $('<div class="convertticket" style="display:none" />').appendTo(mcnt).FindTicket(data, {
                buyText: 'Byt biljett',
                checkNoi: 1,
                buyFunc: 'ChangeTicket',
                afterBuy: function (d) {

                    icnt.slideToggle();
                    sbtn.toggle();
                    cnt.remove();
                }
            });

        }
        if (data.Price > 0)
            $('<div class="priceinfo"><span class="normaltxt">Pris</span> ' + Math.round(data.Price) + ' SEK, varav moms ' + parseFloat(data.Price - data.PriceExcludingVat).toFixed(2) + ' SEK <br/>Bokningsavgift, ' + parseFloat(data.ServiceFee).toFixed(2) + ' SEK</div>').appendTo(prci);
    } else {
        var sbtn = $('<span class="button">Boka biljetter</span>').click(function () {
            icnt.slideToggle();
            sbtn.toggle();
        }).appendTo(cnt);
        var icnt = $('<div class="convertticket" style="display:none" />').appendTo(cnt).FindTicket(data, {
            afterBuy: function (d) {
                if (d)
                    cnt.find('span.noileft').text((d.Noi - d.UsedNoi));
                icnt.slideToggle();
                sbtn.toggle();
            }
        });

    }
    prci.appendTo(cnt);
    btns.appendTo(cnt);
}


function activateTicket(trip) {
    var cnt = $('<div class="ticketview" />').appendTo($('body'));
    $('<div class="close"></div>').click(function () {
        $(this).parent().remove();
    }).appendTo(cnt);

}

var db;

document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        console.log('on ready');
        db = window.openDatabase("Database", "1.0", "TicketStorage", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

    // Populate the database 
    //
    function populateDB(tx) {
         //tx.executeSql('DROP TABLE IF EXISTS DEMO');
         tx.executeSql('CREATE TABLE IF NOT EXISTS TicketData (data)');
         //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
         //tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        //alert("success!");
        console.log('saved to db');
    }



    function showQRCode(text) {

  
  var dotsize = 5;  // size of box drawn on canvas
  var padding = 10; // (white area around your QRCode)
  var black = "rgb(0,0,0)";
  var white = "rgb(255,255,255)";
  var QRCodeVersion = 4; // 1-40 see http://www.denso-wave.com/qrcode/qrgene2-e.html
	
	var canvas=document.createElement('canvas');
	var qrCanvasContext = canvas.getContext('2d');
  try {
    // QR Code Error Correction Capability 
    // Higher levels improves error correction capability while decreasing the amount of data QR Code size.
    // QRErrorCorrectLevel.L (5%) QRErrorCorrectLevel.M (15%) QRErrorCorrectLevel.Q (25%) QRErrorCorrectLevel.H (30%)
    // eg. L can survive approx 5% damage...etc.
    var qr = new QRCode(QRCodeVersion, QRErrorCorrectLevel.M); 
   	qr.addData(text);
   	qr.make();
   }
  catch(err) {
		var errorChild = document.createElement("p");
    var errorMSG = document.createTextNode("QR Code FAIL! " + err);
    errorChild.appendChild(errorMSG);
    return errorChild;
  }
    
  var qrsize = qr.getModuleCount();
 	canvas.setAttribute('height',(qrsize * dotsize) + padding);
 	canvas.setAttribute('width',(qrsize * dotsize) + padding);
 	var shiftForPadding = padding/2;
 	if (canvas.getContext){
 		for (var r = 0; r < qrsize; r++) {
 			for (var c = 0; c < qrsize; c++) {
 				if (qr.isDark(r, c))
 					qrCanvasContext.fillStyle = black;  
 				else
 					qrCanvasContext.fillStyle = white;  
 				qrCanvasContext.fillRect ((c*dotsize) +shiftForPadding,(r*dotsize) + shiftForPadding,dotsize,dotsize);   // x, y, w, h
 			}	
 		}
 	}

 	var imgElement = document.createElement("img");
 	imgElement.src = canvas.toDataURL("image/png");

 	return imgElement;
    
}

function enumTickets(arr, cnt) {
    if (arr && arr.length) {
        $.each(arr, function (i, v) {
            console.log('ticket',v);
            var t = $('<li class="cf" />').data('data', v).click(function () {
                openTicket(v);
            }).appendTo(cnt).append('<span class="desc">' + v.Title.short() + '<br/>' + (v.Description || '').short() + '</span>');
            if (v.ArticleGroup == "Pendlarkort") {
                var dat = v.End;
                if (v.Start > new Date()) {
                    $('#inactivecom').show();
                    t.addClass('notstarted').unbind('click');
                    dat = v.Start;
                }
                var days = ((dat.getTime() - new Date().getTime()) / (3600000 * 24));
                $('<span class="time commuter" />').text(Math.round(days)).appendTo(t).append('<span class="enddate">' + dat.format('yy-mm-dd') + '</span>');
            } else if (v.ArticleGroup == "Partibiljett") {

                $('<span class="multinoi" />').text((v.Noi - v.UsedNoi)).appendTo(t);
            } else {
                var time = $('<span class="time" />').text(v.Start.format('yy-mm-dd HH:MM') + ' - ' + v.End.format('HH:MM')).appendTo(t);
            }
        });
    }
}

function showTickets(d)
{
    if (d.IsLoggedIn) {
            if (windowwidth < 768)
                $('.mytickets').show();
            enumTickets(d.Single, $('ul.yourticket').empty());
            enumTickets(d.Multi, $('ul.yourmultiticket').empty());
            enumTickets(d.Commuter, $('ul.yourcommuter').empty());
            enumTickets(d.NoStartCommuter, $('ul.upcomingcommuter').empty());
        }
        else
            $('.mytickets').hide();
}

function loadTicketsFromStorage() {
	console.log('dbdbdb:',db);
	if (window.db)
	db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM TicketData', [], function(tx,res) {
            	console.log('from db',res);
            }, errorCB);
        }, errorCB);
}

function updateTickets() {
	
	var cid = $.cookie('customerId');
    if (cid && cid.indexOf(':') != -1)
		cid = cid.split(':')[0];


	var networkState = navigator.network?navigator.network.connection.type:1;
	if (networkState==0) {
		loadTicketsFromStorage();
	}
    else {
    	ar(svcUrl + 'MyTicketsApp', {sign:'6513585A-3990-4DB6-9130-A41170862F88',cid:cid}, function (d) {
	        if (window.db) {
		        db.transaction(function(tx) {
		            tx.executeSql('TRUNCATE TABLE TicketData');
		            tx.executeSql('INSERT INTO TicketData (data) VALUES ("'+JSON.stringify(d)+'")');
		        }, errorCB, successCB);
		        console.log('save to db');
		    }
	        showTickets(d);
	    },loadTicketsFromStorage);
    }
}
$(document).ready(function() {
updateTickets();

loadTicketsFromStorage();	

var selScrollable = '.scrollable';
// Uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
  e.preventDefault();
});
// Uses body because jQuery on events are called off of the element they are
// added to, so bubbling would not work if we used document instead.
$('body').on('touchstart', selScrollable, function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    e.currentTarget.scrollTop -= 1;
  }
});
// Stops preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove', selScrollable, function(e) {
  e.stopPropagation();
});

});



function findActive(d) {
    var n = new Date();
    var ret;
    $.each(d, function (i, v) {
        var date = new Date(v._ModifiedTime);
        console.log(date);
        if (date <= n)
            ret = v;
    });
    return v;
};
