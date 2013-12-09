var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];

String.prototype.insert = function (index, string) {
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
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
/*
setTimeout(function() {
    $('input.x, .travelerrow input').each(function () {
        var i = $(this);
        var x = $('<div class="inpx">x</div>').appendTo(i);
        x.click(function () {
            i.val('').change();
        });
    });
}, 1000);
*/

Number.prototype.timeSpan = function () {
    var hours = Math.floor(this / 60);
    var minutes = this % 60;
    if (minutes < 10 && hours > 0)
        minutes = '0' + minutes;
    if (hours > 0)
        return hours + ':' + minutes;
    return minutes + 'm';
};

var svcUrl = '/tripfinder.asmx/',
    windowwidth = $(window).width(),
    windowheight = $(window).height();

$('.sitebtn').click(function () {
    $(this).toggleClass('active');
    $('#togglefoot').toggleClass('open');
});


/*
$(window).bind('facebookLoaded', function () {

    

});

*/


$(window).resize(function () {
    windowwidth = $(window).width();
    windowheight = $(window).height();
});
if (windowwidth > 768 && !window.wdGlobal) {
    shopOpt.dontCloseCartOnClick = 0;
    //console.log(windowwidth);
    var lastPos = 0;
    //var isScrolling = false;
    var scrollT;
    var showT;
    var headElm = $('#scrolltop');
    var wrp = $('#wrapper');

    var toprow = $('.toprow');
    $(window).scroll(function (e) {
        var np = $(window).scrollTop();
        var diff = lastPos - np;
        var isscroll = np > 120;
        headElm.toggleClass('isscrolling', isscroll);
        if (isscroll) {
            toprow.prependTo(headElm);
        }
        else {
            toprow.insertBefore(wrp);
        }
        if (diff < 5) {
            headElm.stop();
            if (scrollT)
                clearTimeout(scrollT);
            if (showT)
                clearTimeout(showT);
        } else if (diff < 10) {
            headElm.stop().animate({ top: 0 }, 200);
        }

        //isScrolling = true;
        scrollT = setTimeout(function () {
            lastPos = np;
            showT = setTimeout(function () {
                headElm.stop().animate({ top: 0 }, 200);
            }, 800);
        }, 330);

        //console.log(
        /*if (diff>80){
        
            $('#eq').hide();
        }*/
        if (diff < 0) {
            headElm.css({ top: -Math.min(-diff, 101) });
        }

        //console.log(diff);
    });

    //$('input.stationlist').focus(function () {
    //    $('.fromto label').removeClass('focus');
    //    $(this).prev('label').addClass('focus');
    //});
    //$('.searchexp').click(function () {
    //    $(this).parent().toggleClass('middlehide');
    //});
    $('.searchexp').toggle(function () {
        $(this).parent().css({ 'height': '240px' });
        $(this).addClass('active');
    }, function () {
        $(this).parent().css({ 'height': '50px' });
        $(this).removeClass('active');
    });
}
else {
    shopOpt.dontCloseCartOnClick = 1;
    $('#menubtn').click(function () {
        $('body').toggleClass('menuopen').removeClass('cartopen');
        //$('#mmenu').toggleClass('menuopen');
        //$('#wrapper').toggleClass('wrapopen');
        //$('#mobilefoot').toggleClass('wrapopen');
    });
    //$('#pagecnt').click(function () {
    //    $('#wrapper').removeClass('wrapopen');
    //    $('#mmenu').removeClass('menuopen');
    //    $('#mobilefoot').removeClass('wrapopen');
    //});
    $('.cartbtn').click(function () {
        $('body').toggleClass('cartopen').removeClass('menuopen');
        //$('.cartwrap').toggleClass('menuopen');
        //$('#wrapper').toggleClass('cartopen');
        //$('#mobilefoot').toggleClass('cartopen');
    });

    $('.tooltip').click(function () {
        $(this).children('span').toggle();
    });



    //setTimeout(function () {
    //    $('.wd-cart-prod').on('click', function () {
    //        if ($(this).hasClass('shop-parent'))
    //            $(this).parent().toggleClass('askdel');
    //        else
    //            $(this).toggleClass('askdel');
    //    });
    //}, 1500);
    $('#mmenu li.showexp >a').click(function (e) {
        e.preventDefault();
        $(this).parent().find('ul').toggleClass('active');
    });
    $('#mmenu li.showexp span.clickable').click(function () {
        var url = $(this).prev('a').attr('href');
        window.location.href = url;
    });
}
$('#returntype').change(function () {
    //console.log($(this).val());
    if ($(this).val() > 0) {
        $('.showdate').addClass('active');
    }
    else {
        $('.showdate').removeClass('active');
    }
    //if (this.checked)
    //    $('.returnwrap').slideDown();
    //else
    //    $('.returnwrap').slideUp();
});
//$('#mtravelback input').click(function () {
//    if ($(this)) {
//        $(this).toggleClass('active');
//        $('.returnwrap').slideDown();
//        var checkBox = $('input#mtravelback');
//        checkBox.prop('checked', !checkBox.prop('checked'));
//        setMobileReturnDate(new Date());
//    }
//    else
//        $('.returnwrap').slideUp();

//});
function setButtonHeight() {
    //var searchHeight = $('.fromto').outerHeight();
    //searchHeight += $('.white').outerHeight();
    var searchHeight = 0;
    $('.middlesearch .measure').each(function () {
        searchHeight += $(this).outerHeight(true);
    });
    $('.searchbox').css('height', searchHeight);
}
setTimeout(function () {
    setButtonHeight();
}, 900);
$('.middlesearch ul.tabs li').click(function () {
    setButtonHeight();
});
/*
$('.addtraveler').click(function () {
    var row = $(this).prev().find('div.travelerrow').first().clone(true);
    $($('<input type="text" placeholder="Namn" />')).appendTo(row);
    $('<span class="delrow" />').appendTo(row);
    $(row).insertAfter($(this).prev().find('div.travelerrow').last());
    row.find('ul').children('li').removeClass('selected');
    row.find('ul li').eq(0).addClass('selected');
    setButtonHeight();
});
*/

$(window).bind('orderUpdated', function (e, order, newItems, extr) {

    $('#cnoi').text(order.items.length).toggle(order.items.length > 0);


});

setTimeout(function () {
    $('.wd-cart-prod a').on('click', function (e) {
        e.preventDefault();
        return false;
    });
}, 1500);

$('.increase').click(function () {
    var obj = $(this).prev('div');
    var noi = obj.text(parseInt(obj.text()) + 1);
});
$('.decrease').click(function () {
    var obj = $(this).next('div');
    var noi = parseInt(obj.text());
    if (noi == 1)
        noi = 1;
    else
        noi--;
    obj.text(noi);
});

$('.dropselected').click(function () {
    $(this).next('ul').toggleClass('active');
});

$('ul.dropdown li').click(function () {
    $(this).addClass('selected');
    var selecteddiv = $(this).parent().parent().find('div.dropselected');
    var text = $(this).text();
    selecteddiv.empty().text(text);
    $(this).parent().removeClass('active');
});
function activetab() {
    var nr = $('.searchwrapper ul.tabs li.tbactive').index();
    $('.traveltype').removeClass('active');
    $('.traveltype').eq(nr).addClass('active');
}
activetab();
$('.searchwrapper ul.tabs li').click(function () {
    activetab();
});

function getDate(v) {

    var p = v.split('-');
    return new Date(p[0], p[1] - 1, p[2]);

}


function fb_publish(d) {
    var stn = station[d.EndStation].n.short();
    FB.ui(
      {
          method: 'stream.publish',
          message: 'Åker tåg till ' + stn,
          attachment: {
              name: 'Åker tåg till ' + stn,
              caption: 'Tågkompaniets tåg ' + d.TripNr + ': ' + d.Description,
              description: (
                'description here'
              ),
              href: 'http://www.tagkompaniet.se'
          },
          //action_links: [
          //            { text: 'Code', href: 'action url here' }
          //],
          user_prompt_message: 'Personal message here'
      },
      function (response) {
          if (response && response.post_id) {
              alert('Post was published.');

          } else {
              //alert('Post was not published.');
          }
      }
    );
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

$.fn.FindTicket = function (data, opt) {
    var icnt = $(this);
    var from = data.StartStation;
    var to = data.EndStation;
    var seldate = new Date();
    $('<span class="seltime title"/>').text('Datum').appendTo(icnt);
    var dcnt = $('<div class="mobiledate dateclick" />').appendTo(icnt);
    $('<input class="hiddeninp" />').appendTo(dcnt).datePicker({
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
    var cnt = $('<div class="ticketview overthrow" />').appendTo($('body'));
    var btns = $('<div class="cf ticketbtn" />');
    var prci = $('<div />');
    ql.postload('/js/stations.js');
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
            ql.load('/js/seat.js', function () {
                bookseat(data.OrderId, data.Id);
            });
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
        $('<div class="right conf"><img src="/gen.img?qr=' + encodeURI(data.Code) + '" /><div class="ticketnr text-right">' + data.Code.substring(0, data.Code.length - 1) + '</div></div>').appendTo(mcnt);
        $('<div class="mobilescan"><img src="/gen.img?qr=' + encodeURI(data.Code) + '" /><div class="ticketnr text-center">' + data.Code.substring(0, data.Code.length - 1) + '</div></div>').appendTo(tdesc);
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

$.fn.tryNative = function (typ) {
    var t = $(this);
    var hasnative;
    try {
        t[0].type = typ;
        hasnative = (t[0].type == typ);
    } catch (ex) {
    }
    return hasnative;
};

$.fn.datePicker = function (opt) {

    function setData(d) {
        monthname.text(monthNames[d.getMonth()]);
        dayname.text(dayNames[d.getDay()]);
        daynr.text(d.getDate());
        year.text(1900 + d.getYear());
    }

    var t = $(this).change(function () {
        var d = getDate($(this).val());
        monthname.text(monthNames[d.getMonth()]);
        dayname.text(dayNames[d.getDay()]);
        daynr.text(d.getDate());
        year.text(1900 + d.getYear());
        if (opt.onchange)
            opt.onchange(d);
    }).click(function (e) {
        e.stopPropagation();
    });;

    var daycnt = $('<div class="mday" />').insertBefore(t);
    var daynr = $('<span class="mdate" />').appendTo(daycnt);
    var dayname = $('<span class="mdayname" />').appendTo(daycnt);


    var monthcnt = $('<div class="mmonth" />').insertBefore(t);
    var monthname = $('<span class="mmonthname" />').appendTo(monthcnt);
    var year = $('<span class="myear" />').appendTo(monthcnt);

    var sDate = (opt.startDate || new Date());
    t.val(sDate.format('yyyy-mm-dd'));
    setData(sDate);
    if (opt.useCustom || !t.tryNative('date')) {

        t.datepicker({
            gotoCurrent: true,
            minDate: 0,
            maxDate: '+6M'
        });

        function openPicker(e) {
            t.datepicker('show');
            e.stopPropagation();
        }

        t.parent().click(openPicker);
        //$(daycnt).click(openPicker);
        //$(monthcnt).click(openPicker);
    } else {

        function openinput(e) {
            t.click();

            t.focus();
            e.stopPropagation();
        }
        t.parent().click(openinput);

        //$(daycnt).click(
        //$(monthcnt).click(openinput);
    }
};

$('.ticketlookup').change(function () {
    var t = $(this).val();
    ar(svcUrl + 'getTicketInfo', { code: t }, function (d) {
        $.each(d.t, function (i, v) {
            $('*[data-field="t.' + i + '"]').val(v);
        });
        $.each(d.o, function (i, v) {
            $('*[data-field="o.' + i + '"]').val(v);
        });
        $('*[data-field="t.Start"]').val(d.t.Start.format('yyyy-mm-dd HH:MM'));
        //console.log(d.t, station[d.t.StartStation].n);

        document.getElementsByName('avresstation')[0].value = station[d.t.StartStation].n;
        document.getElementsByName('ankomststation')[0].value = station[d.t.EndStation].n;
    });
});

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
    //console.log('custom:',opt.useCustom);
    if (true || opt.useCustom || !t.tryNative('time')) {
        t.timepicker({
            step: 30,
            'timeFormat': 'H:i'
        });
        t.parent().click(function () {
            t.timepicker('show');
        });
    }
};


//var $wrapper = $('#wrapper');
//var lastX = 0;
//var lastMat;
//var bdy = $('body');

//$('body').bind('tdown', function (e, startpos, starttime, dist, direction) {
//    var lastMat = $wrapper.css("-webkit-transform");
//    lastX = lastMat.split(',')[4] - 0;
//}).bind('tmove', function (e, startpos, starttime, dist, direction) {
//    if (direction == 1) {
//        $wrapper.css("-webkit-transition-duration", "0s");
//        //console.log(lastX, dist.x);
//        var value = lastX + dist.x;


//        if (value > 0 && value < 30) {

//            bdy.addClass('menuopen').removeClass('cartopen');

//        } else if (value < 0 && value > -30) {

//            bdy.addClass('cartopen').removeClass('menuopen');

//        }

//        $wrapper.css("-webkit-transform", "matrix(1, 0, 0, 1, " + value + ", 0) ");
//    }
//    //console.log('move');
//}).bind('tend', function (e, startpos, starttime, dist, direction) {
//    //console.log('end');
//    if (direction == 1) {
//        $wrapper.css("-webkit-transition-duration", "0.3s").css("-webkit-transform", "");
//        //console.log(dist);
//        if (Math.abs(dist.x) > 40) {
//            if (lastX != 0)
//                $('body').removeClass('menuopen').removeClass('cartopen');
//        }
//    }
//});


function activateTicket(trip) {
    var cnt = $('<div class="ticketview" />').appendTo($('body'));
    $('<div class="close"></div>').click(function () {
        $(this).parent().remove();
    }).appendTo(cnt);

}

function enumTickets(arr, cnt) {
    if (arr && arr.length) {
        $.each(arr, function (i, v) {
            //console.log(v);
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

function updateTickets() {
    ar(svcUrl + 'MyTickets', {}, function (d) {
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
    });
}

if (windowwidth < 768) {
    var bdy = $('body'), startpos;
    $('.subline').click(function () {
        $(this).children('.traintip').hover();
    });
    $('#scrolltop').prependTo(bdy).addClass('ani');

    function getPos(e) {
        if (e.changedTouches)
            e = e.changedTouches[e.changedTouches.length - 1];
        return { x: e.pageX, y: e.pageY };
    }


    bdy[0].addEventListener('touchstart', function (e) {
        if (bdy.hasClass('menuopen') || bdy.hasClass('cartopen')) {
            startpos = getPos(e);
            //console.log('start', startpos);
        }
    }, false);
    bdy[0].addEventListener('touchmove', function (e) {
        if (bdy.hasClass('menuopen') || bdy.hasClass('cartopen')) {
            if (startpos) {

                var endp = getPos(e);
                //console.log('end', endp);
                var diff = { x: startpos.x - endp.x, y: startpos.y - endp.y };
                //console.log('diff');
                startpos = null;
                if (Math.abs(diff.x) > Math.abs(diff.y)) {
                    e.stopPropagation();
                    if (diff.x > 0) {
                        bdy.removeClass('menuopen');
                    } else
                        bdy.removeClass('cartopen');
                }
            }
        }
    }, false);
    $('.traininfo h3').click(function () {
        $(this).parent().toggleClass('open');
    });
}
//(function () {
//    var isdown = false;

//    var startpos, starttime;
//    var elm;
//    var isdragging;
//    var mindist = 5;
//    var direction;
//    var lastDist;
//    var bdy = document.body;

//    function getPos(e) {
//        if (e.changedTouches)
//            e = e.changedTouches[e.changedTouches.length - 1];
//        return { x: e.pageX, y: e.pageY };
//    }
//    function tstart(e) {

//        elm = $(e.srcElement);
//        isdown = true;
//        startpos = getPos(e);
//        starttime = new Date();
//    }
//    function tmove(e) {



//        if (isdown) {





//            var newpos = getPos(e);

//            var dist = lastDist = { x: newpos.x - startpos.x, y: newpos.y - startpos.y };
//            if (!isdragging) {

//                var ax = Math.abs(dist.x);
//                var ay = Math.abs(dist.y);
//                if (ax > mindist || ay > mindist) {
//                    isdragging = true;
//                    direction = ax > ay;
//                }
//                if (elm)
//                    elm.trigger('tdown', [startpos, starttime, dist, direction, elm]);
//            } else {
//                if (direction == 1)
//                    e.preventDefault();
//                if (elm)
//                    elm.trigger('tmove', [startpos, starttime, dist, direction, elm]);
//            }

//        }
//    }
//    function tend(e) {
//        if (isdown) {

//            elm.trigger('tend', [startpos, starttime, lastDist, direction, elm, getPos(e)]);
//            isdragging = false;
//        }
//        if (isdragging) {
//            if (e.type == 'touchend')
//                e.preventDefault();
//            e.stopPropagation();

//        }
//        elm = null;
//        isdown = false;

//    }
//    bdy.addEventListener('touchstart', tstart, false);
//    bdy.addEventListener('touchmove', tmove, false);
//    bdy.addEventListener('touchend', tend, false);
//})();

$('.inpcnt input').bind('blur', function () { $(this).parent().removeClass('focus') });
$('.inpcnt input').bind('focus', function () { $(this).parent().addClass('focus'); });


$('#loginpop .button').click(function () {
    $('#ctl00_Login1').click();
});


findActive = function (d) {
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

function getTrainInfo(tripnr, opt) {

}


function inpfetch() {
    var stnid = $(this).data('station-id');

    if (!stnid)
        stnid = $(this).val();
    if (stnid) {

        ar(svcUrl + 'GetDep', { from: stnid, when: new Date() }, function (d) {

            var prtdep = $('ul.dep');
            var prtarr = $('ul.arr');
            prtdep.find('.stninfo').remove();
            prtarr.find('.stninfo').remove();
            $.each(d, function (i, v) {
                //console.log(v);
                var nd = new Date();
                var ddata = v.Departure || { StartId: 1, StartTimeString: nd.getHours() + '' + nd.getMinutes(), EndTimeString: nd.getHours() + '' + nd.getMinutes() };
                var depp = ddata.StartId == stnid;
                var dep = depp ? 'Start' : 'End';
                if (!v.Departure)
                    depp = true;

                var prt = depp ? prtdep : prtarr;

                var cnt = $('<li class="stninfo cf" />').click(function () {
                    $(this).toggleClass('open');
                }).appendTo(prt);


                var time = ddata[dep + 'TimeString'].insert(2, ':');

                var actdate = new Date(1900 + nd.getYear(), nd.getMonth(), nd.getDate(), time.substr(0, 2), time.substr(3, 2));

                var tcnt = $('<div class="cf info" />').appendTo(cnt);

                if (actdate < new Date()) {
                    cnt.addClass('started');
                }
                var ex = $('<span class="info">' +
                    '<a class="tooltip">' +
                        '<img src="/images/icons/info-icon-small.png" alt="Information" />' +
                        '<span class="ttxt">&nbsp;</span>' +
                    '</a>' +
                    '</span>' +
                    '<span class="ttime">' + time + '</span>').appendTo(tcnt);
                var trp = v.Trip || v;

                var str = depp ? ('Mot ' + trp.EndStationName) : ('Från ' + trp.StartStationName);
                var ex2 = $('<span class="desc">' + trp.TripNr + '&nbsp;<span class="markning"></span><br />' + str + '</span>').appendTo(tcnt);
                var trk = $('<span class="track">&nbsp;</span>').appendTo(tcnt);
                var ecnt = $('<div class="extrasub ani" />').appendTo(cnt);
                ar(svcUrl + 'GetTrainStatus', { nr: trp.TripNr }, function (dd) {
                    var c = JSON.parse(dd);
                    var nt = new Date();
                    var stnName = (station[stnid] || { n: '' }).n.replace(/Centralstation/ig, 'C').replace(/station/ig, '').trim();
                    var estPrp = depp ? 'BeraknadTidpunktAvgang' : 'BeraknadTidpunktAnkomst';
                    var aPrp = depp ? 'AnnonseradTidpunktAvgang' : 'AnnonseradTidpunktAnkomst';
                    var bPrp = depp ? 'VerkligTidpunktAvgang' : 'VerkligTidpunktAnkomst';
                    if (c.LpvTrafiklagen && c.LpvTrafiklagen.Trafiklage) {
                        var tl = c.LpvTrafiklagen.Trafiklage;
                        var last = null;//tl[0];// : tl[0];
                        $.each(tl, function () {
                            var late = (this.VerkligTidpunktAvgang);
                            console.log(late, this);
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


                        if (last) {

                            var anPrp = last[estPrp] || last[aPrp];
                            if (anPrp) {
                                var antid = new Date(anPrp);
                                //var tiddiff = Math.abs(antid - dt);
                                //console.log('diff', tiddiff);
                                //if (tiddiff > 1000) {

                                var crap = cnt.find('span.ttime');

                                var tidstr = antid.format('HH:MM');
                                if (tidstr.trim() != time.trim()) {
                                    console.log('nytid', antid.format('HH:MM'), crap);
                                    crap.append('<div class="newtime">' + antid.format('HH:MM') + "</div>");
                                }
                                //}
                            }
                        } else last = tl[tl.lenght - 1];
                        var installd = depp ? last.InstalldAvgang == "true" : last.InstalldAnkomst == "true";

                        if (installd)
                            console.log('installd', last);

                        var anm = depp ? last.AnmarkningarAvgang : last.AnmarkningarAnkomst;

                        cnt.toggleClass('installd', installd);
                        ex2.find('.markning').text(anm);

                        var spar = last.SparangivelseAnkomst || last.SparangivelseAvgang;
                        ex.find('span.ttxt').html(last.StatiskInformationTrafikplatsVisning);
                        ex.find('a.tooltip').toggle(!!last.StatiskInformationTrafikplatsVisning);
                        if (spar) {
                            trk.text(spar);
                        }
                    }

                });

            });

        });
    }
}

$("#trainsearch").change(inpfetch).keypress(function (e) {
    if (e.keyCode == 13)
        inpfetch.apply(this);
});

$('#adminbox .minmax').click(function () {
    $(this).parent().toggleClass('min');
});


$('.lightbox').lightBox();

fd('base.js');

setTimeout(function () {
    updateTickets();
    $('#pageload').fadeOut();
}, 200);


function checkClose() {

    setTimeout(function () {

        if (!$('#loginpop').is(":hover"))
            $('#loginpop').removeClass('active');
        else
            checkClose();

    }, 6000);

}
if (!window.wdGlobal) {
    setTimeout(function () {
        $('#loginpop .close').click(function () {
            $(this).parent().removeClass('active');
        });
        var cid = $.cookie('customerId');
        if (!cid) {
            $('#loginpop').addClass('active');
            checkClose();

        }
    }, 3000);
}





loadFB();