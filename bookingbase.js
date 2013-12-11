

var map,
    pins = [],
    flightPath,
    cardAvail,
    baseTrip,
     $from = $('#from'),
    $to = $('#to'),
    $commutercnt = $('#commutercnt'),
    $multicnt = $('#multicnt'),
    tccnt = $('#tripresult'),
    returncnt = $('#returnresult'),
    $travelfrom = $('#travelfrom'),
    $when = $('#mwhen, #when'),
    $comstart = $('#comstartdate'),
    $return = $('#mreturn, #return'),
    $backtravelfrom = $('#backtravelfrom'),
    $tripday = $('#tripday'),
    $returnday = $('#returnday'),
    $triptime = $('#mwhentime'),
    $returntime = $('#mreturntime'),
    lastdata = JSON.parse($.cookie('laststations')||'null'),
    now = new Date(),
    date = new Date(),
    returndate = new Date(),
    commuterdate = new Date(),
    startTime = date.inmin(),
    nav = navigator.appVersion,
    isIPad = nav.indexOf('iPad') != -1,
    useBrowser = nav.indexOf('Chrome/') != -1 || nav.indexOf('iPhone') != -1 || isIPad,
    useNativeInput = (isIPad || (windowwidth < 768 && useBrowser)),
    issafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1,
    returnTime = date.inmin();

if (lastdata && lastdata.to) {
    var ss = station[lastdata.to];
    var es = station[lastdata.from];
    $to.data('station-id', lastdata.to).val(windowwidth < 768 ? ss.n.short() : ss.n);
    $from.data('station-id', lastdata.from).val(windowwidth < 768 ? es.n.short() : es.n);
}

function updateMultiPrice(f, y, froms, tos) {
    var trav = getTravellers('#multitraveler');



    var prc = 0;
    $.each(trav, function () {
        if (this.Type == 1)
            prc += f;
        else prc += y;
    });


    $('.multiprice').each(function () {
        var mul = $(this).data('mul') - 0;
        var noi = $(this).data('noi') - 0;

        $(this).html(noi + 'st <span class="price">' + wdShop.currFormat(prc * mul * noi * rate) + "</span>");
    });
    
    if (froms.c != 'S' || tos.c != 'S') {
        $('#hasmulti').show();
        $('#nomulti').hide();
    }
}


function getTravellers(parent) {
    var ret = [];
    parent = parent || '#traveler';
    $(parent + ' .travelerrow .passtype').each(function () {
        var noio = $(this).parent().parent().find('.nrofpass');
        //var nameo = $(this).parent().find('input');
        var noi = noio.val() - 0;
        for (i = 0; i < noi; i++)
            ret.push({ Name: '', Type: $(this).val() }); //nameo.val()||
    });

    return ret;
}

function noiTrav(d, t) {
    var r = 0;
    $.each(d, function (i, v) {
        if (v.Type == t)
            r++;
    });
    return r;
}

var rate = 1.05;

function calcPrice(p) {
    var ret = 0;
    var trav = getTravellers();
    var full = noiTrav(trav, 1) * 2;
    full += noiTrav(trav, 2);
    var child = 0;

    $.each(trav, function (i, v) {
        if (v.Type == 1) {
            ret += p.Full;
        }
        else if (v.Type == 3) {
            if (child < full) {
                ret += 0;
            } else {
                ret += p.Youth;
            }
            child++;
        } else if (v.Type == 4) {

            ret += p.Youth;

        } else if (v.Type == 2) {
            ret += p.Youth;
        }
    });
    return ret * rate;
}

function prebuy(o) {
    o.addClass('buying');
    $('#pageload').show();
}

function afterbuy(o) {
  
    o.removeClass('buying').addClass('incart');
    $('#pageload').hide();

    var addstr = '';
    var cid = $.cookie('customerId');
    if (cid && cid.indexOf(':') != -1)
        cid = cid.split(':')[0];
    if(cid && cid > 0) {
        console.log(cid);
        addstr = '&wdcid='+((cid*4)+19);
    }

  
    setTimeout(function () {
            window.location.href = 'http://tagkompaniet.se/checkout/?oid='+o.Id+addstr;
        }, 100);
    $('#cartadded').show();
    $('#ctl00_exCart .cart-info').addClass('highlighted');

    setTimeout(function () {
        $('#cartadded').fadeOut();
        $('#ctl00_exCart .cart-info').removeClass('highlighted');
    }, 2000);

}

var prod = { '74': { n: 'SJ AB', s: 'SJ' }, '76': { n: 'NSB', s: 'NSB' }, '222': { n: 'Entreprenadoperatörer på state', s: '222' }, '245': { n: 'Inlandsbanan AB', s: 'IBAB' }, '275': { n: 'Storstockholms lokaltrafik AB', s: 'THM-A' }, '287': { n: 'Arlanda Express', s: 'ARNEX' }, '300': { n: 'Öresundstågen', s: '300' }, '314': { n: 'Svenska Tågkompaniet AB', s: 'TKAB' }, '319': { n: 'Engelsberg-Norbergs järnväg', s: 'ENJ' }, '321': { n: 'Dal-Västra Värmlands Järnväg', s: 'DVVJ' }, '380': { n: 'Veolia Transport', s: 'Veolia' }, '382': { n: 'TJF Smalspåret', s: 'TJF' }, '430': { n: 'Arriva Tåg AB', s: 'Arriva S' }, '586': { n: 'Tågab', s: 'Tågab' }, '608': { n: 'DB Regio', s: 'DBRE' }, '609': { n: 'DSB Småland AB', s: 'DSBS' }, '616': { n: 'DSB Uppland', s: 'DSB U' }, '653': { n: 'Kustpilen', s: 'KP' } };

var veh = { 'J': 'Tåg', 'B': 'Buss' };

function getProd(trp) {
    var cmp = prod[trp.CompanyNr] || { n: 'Okänd', s: 'None' };
    
    var v = veh[trp.Vehicle] || 'Tåg';
    if (trp.CompanyNr == 314)
        return 'Tågkompaniet, ' + v.toLowerCase() + ' ' + trp.TripNr + '. Platsreservation ingår';
    
    return 'Turnummer: ' + trp.TripNr + ', ' + v + ': ' + cmp.n; // + '<em>' + trp.CompanyNr + '</em>';
}

var chatWin;


function openChat() {
    chatWin = window.open('http://chat.webdoc.nu/chat.php?ws=dGFna29tcGFuaWV0LnNl&amp;acid=4a980', 'chatwin', 'width=400,height=460', true);
    chatWin.focus();
}


function appendTrip(t, tc, tripprice) {
    var tot = 0,
        toty = 0,
        totp = 0,
        isown = true,
        mtime = 0,
        cnt = $('<div class="trip flipparent cf" />').data('data', t).click(function (e) {
            e.stopPropagation();
            icnt.toggleClass('open');
            $(this).toggleClass('open');


        }).appendTo(tc);

    var changes = t.TotalChanges - 1,
        title = $('<div class="triphead"><span class="starttime">' + t.StartTime.format('HH:MM') + '</span><span class="timeto"></span><span class="arrivetime">' + t.EndTime.format('HH:MM') + '</span><span class="traveltime">' + t.TotalTime.Hours + 'h ' + t.TotalTime.Minutes + 'min</span></div>').appendTo(cnt),
        fromstn = station[t.fromId],
        tostn = station[t.toId],
        travelfrom = fromstn.n.short(),
        travelto = tostn.n.short(),
        tottime = t.TotalTime.TotalMinutes;



    //Längsta resa


    var prc = $('<span class="tprice" />').appendTo(title),

        icnt = $('<div class="subtrips flip" />').click(function (e) {
            e.stopPropagation();
        }).appendTo(cnt),
        
        owncnt = $('<div class="own" />').appendTo(title),
        ownico = $('<span class="ownicon" />').appendTo(owncnt),

        sel = $('<input type="radio" name="' + tc.attr('id') + '" value="' + t.uid + '" />').change(function (e) {
            e.stopPropagation();
            tc.find('.seltrip').removeClass('seltrip');
            cnt.addClass('seltrip');
            $('#buytrip').addClass('active');
            if (windowwidth > 768)
                $('body').scrollTo($('#buytrip').offset().top - 200, 200);
            else
                $('body').scrollTo($('#buytrip').offset().top - 50, 200);

        }).appendTo(owncnt),
        buy = $('<div class="bookbutton" />').text('Köp').click(function (e) {

       
            prebuy(buy);
            ar(svcUrl + 'BookTrip', { tripid: t.uid, noi: 1, from: t.fromId, to: t.toId, type: 1, ttype: 1, startdate: commuterdate, traveller: getTravellers(), fullflex: false }, function (d) {

                afterbuy(buy);
                if (window._gaq)
                    _gaq.push(['_trackEvent', 'AddItemToCart', 'click']);
            });
            //}
            e.stopPropagation();
        }).appendTo(owncnt),
    totalline = $('<div class="cf totalline" />').appendTo(icnt).wrap('<div class="wrapline" />');



    if (t.StartTime < now) {
        sel.hide();
        buy.hide();
        cnt.addClass('oldtrip');
    }

    var startStn = t.subTrips[0];
    var endStn = t.subTrips[t.subTrips.length - 1];
    var subwrap = $('<div class="subtripwrap2 ani" />').appendTo(icnt);
    $.each(t.subTrips, function (i, v) {
        //console.log('subtrip', v);
        v.from = station[v.FromId];
        v.to = station[v.ToId];
        v.time = (v.Arrival.getTime() - v.Departure.getTime()) / (1000 * 60);


        if (v.time > mtime)
            mtime = v.time;
        var iown = true;
        console.log(v.Trip.CompanyNr);
        if (isown && (v.Trip.CompanyNr != 314 && v.Trip.CompanyNr != 315)) { // && v.Trip.CompanyNr != 76

            isown = false;
            iown = false;
        }
       

        if (v.Wait > 5) {
            $('<div class="subtrip wait">' + v.Wait + 'minuter väntetid</div>').appendTo(subwrap);

          
        }


        var tp = calcPrice(v.Price);
        totp += tp;
        tot += v.Price.Full;
        toty += v.Price.Youth;
        var stp = wdShop.currFormat(tp);
        if (!isown || tp == 0)
            stp = '&nbsp;';
        var subtr = $('<div class="subtrip ani">' +
            '<span class="fromdate">' +
                '<strong>' + v.Departure.format('HH:MM') + '</strong>' +
            '</span>' +
            '<span class="fromcity">&nbsp;' + v.from.n.short() + '</span> - ' +
                '<strong>' +
                    '<span class="todate">' + v.Arrival.format('HH:MM') + '</span>' +
                '</strong>' +
            '</span>' +
            '<span>&nbsp;' + v.to.n.short() + '</span>' +
            '<span class="tripnr">TripNr:' + v.Trip.TripName + '</span>' +
            //'<span class="sprice">' + stp + '</span>' +
            //+' pris:'+v.Price.Full 
            '<div class="tripinfo">' + getProd(v.Trip)+ '</div>' +
        '</div>').appendTo(subwrap).toggleClass('ownsubtrip', iown);
        if (isown)
            $('<span class="chair"></span><span class="coffee"></span>').appendTo(subtr);

    });
    if (tripprice && tripprice.Full>0) {
        var t_totp = calcPrice(tripprice);
        var t_tot = tripprice.Full;
        var t_toty = tripprice.Youth;
        if (totp > t_totp) {
            totp = t_totp;
            tot = t_tot;
            t_toty = t_toty;
        }
    }
    
    if (totp == 0) {
        console.log('not own');
        isown = false;
        iown = false;
    }
    
    if (!isown) {
        $('<div class="notowninfo"><div><p>Denna resa kan endast bokas hos vårt servicecenter, ring <a href="tel:0771-444 111">0771-444 111</a>.</p></div>').appendTo(icnt);
        owncnt.remove();
        var ss = $('<div class="ssbutton" />').html('<a href="tel:0771444111" class="call ani"><span class="txt ani">Ring</span></a>').appendTo(title);
        ss.find('.chat').click(openChat);
        cnt.toggleClass('notown');
        if (windowwidth > 768)
            ss.find('.call').attr('href', '/kontakt__34');
    } else {

        updateMultiPrice(tot, toty, startStn, endStn);

        baseTrip = t;
        /*if (cardAvail) {
            $('#hascommuter').show();
            $('#nocommuter').hide();
            $('.buycom[data-age="1"]').html('Vuxen <span class="price">' + wdShop.currFormat(tot * 10 * rate) + '</span>').data('price', tot * 10 * rate);
            $('.buycom[data-age="2"]').html('Ungdom/Studerande <span class="price">' + wdShop.currFormat(toty * 10 * rate) + '</span>').data('price', toty * 10 * rate);

        }*/

        prc.text(wdShop.currFormat(totp));
    }
    cnt.toggleClass('owntrip', isown);

    return cnt.data('data', t);
}

var hasbussextra = ['X', 'W', 'U', 'T']; //, 'E'

function findto(from, to) {
    //console.log(new Date());
    //console.trace();
    tccnt.find('.trip').remove();
    /*$commutercnt.removeClass('slideappear');
    $multicnt.removeClass('slideappear');
    $('#hasmulti').hide();
    $('#nomulti').show();
    $('#hascommuter').hide();
    $('#nocommuter').show();*/
    $travelfrom.empty().append(station[from].n.short() + ' - ' + station[to].n.short());

    var busstart = hasbussextra.indexOf(station[from].c) != -1;
    var busend = hasbussextra.indexOf(station[to].c) != -1;

    //$('#buscnts').toggle(busstart);
    //$('#buscnte').toggle(busend);

    //$('.combus').removeAttr('checked');

    $('#basetrip').addClass('loadingtrips');
    ar(svcUrl + 'FindTrips', { from: from, to: to, when: date }, function (d) {
        if (loadTimeout)
            clearTimeout(loadTimeout);
        tccnt.empty();

        var mt = 0;
        var it = 0;

        var rl = d.Result.length;
        //$('#hasmulti').toggle(!!rl);
        //$('#nomulti').toggle(!rl);
        $('#notravel').toggle(!rl);
        if (rl) {
            var hasshown = false;
            $.each(d.Result, function (i, v) {
                v.fromId = from;
                v.toId = to;
                if (v.TotalTime.TotalMinutes > mt)
                    mt = v.TotalTime.TotalMinutes;
                var cnt = appendTrip(v, tccnt, d.TripPrice);
                //setTimeout(function () {
                //    cnt.addClass('appeared');
                //}, i * 130);
                if (setTripData(startTime, cnt, it, getArrTrip()))
                    hasshown = true;

            });
/*
            $('#basetrip').addClass('showload').removeClass('loadingtrips');

            if (windowwidth < 768)
                $('html, body').animate({ scrollTop: $('#basetrip').offset().top + 20 }, 300);
            tccnt.find('.trip').trigger('maxtime', [mt]);
            */
            $('#searchwrap').animate({ scrollTop: $('#basetrip').offset().top + 20 }, 300);
            $('#basetrip').show();

            if (!hasshown) {
                startTime -= 960;
                $('#mwhentime').val('16:00').change();
            }
        }
        //console.log('trip',mt);
        setTimeout(function () {
            $('#pageload').hide();
        }, 50);
    });
}


function findreturn(from, to) {
    returncnt.find('.trip').remove();
    $backtravelfrom.empty().append(station[to].n.short() + ' - ' + station[from].n.short());

    $('#returntrip').addClass('loadingtrips');
    ar(svcUrl + 'FindTrips', { from: to, to: from, when: returndate }, function (d) {
        returncnt.empty();
        $('#returntrip').addClass('showload').removeClass('loadingtrips');
        var mt = 0;
        var it = 0;
        var hasshown = false;
        $.each(d.Result, function (i, v) {
            v.fromId = to;
            v.toId = from;
            if (v.TotalTime.TotalMinutes > mt)
                mt = v.TotalTime.TotalMinutes;
            var cnt = appendTrip(v, returncnt, d.TripPrice);
            if (setTripData(returnTime, cnt, it, getArrReturn()))
                hasshown = true;
        });
        $('#returntrip').show();
        returncnt.find('.trip').trigger('maxtime', [mt]);
        if (!hasshown) {
            returnTime -= 960;
            $('#mreturntime').val('16:00').change();
        }
    });
}

function setTripData(sTime, cnt, j, arr) {
    var v = cnt.data('data');
    //cnt.parents('.tripparent').find('.prevtimes').show();
    //cnt.parents('.tripparent').find('.nexttimes').show();
    var ret = false;
    var i = 0;
    var inmin = v[arr ? 'EndTime' : 'StartTime'].inmin();

    if ((!arr && sTime < inmin && (sTime + (6 * 60) > inmin)) || (arr && (sTime + (3 * 60)) > inmin)) {
        if (arr && (sTime <= inmin)) {
            cnt.addClass('passedtime');
        } else {
            cnt.removeClass('passedtime');
        }
        ret = true;
        setTimeout(function () {
            cnt.addClass('appeared').removeClass('posttime').removeClass('pretime');
        }, i++ * 100);
    } else {
        cnt.removeClass('appeared').removeClass('passedtime');
        if (sTime < inmin) {

            cnt.addClass('posttime').removeClass('pretime');
        } else {

            cnt.addClass('pretime').removeClass('posttime');
        }
    }
    var hasprev = !!cnt.parent().find('.pretime').length;
    var hasnext = !!cnt.parent().find('.posttime').length;

    cnt.parents('.tripparent').find('.prevtimes').toggle(hasprev);
    cnt.parents('.tripparent').find('.nexttimes').toggle(hasnext);


    cnt.parents('.tripparent').find('.nextdaytimes').toggle(!hasnext);


    if (!hasnext) {

    }

    cnt.data('inmin', inmin);
    return ret;
}






var loadTimeout;
var failTimeout;

function findtrip(updtrip, updreturn) {


    var from = $from.data('station-id');
    var to = $to.data('station-id');
    if (from && to && from != to) {
        if (failTimeout)
            clearTimeout(failTimeout);
        loadTimeout = setTimeout(function () {
            $('#pageload').show();
        }, 60);
        failTimeout = setTimeout(function() {
            $('#pageload').hide();
        }, 4000);
        $('#from').addClass('doselect');
        $('#to').addClass('doselect');

        $.cookie('laststations', JSON.stringify({
            from: from,
            to: to
        }), { path: '/', expires: 200 });
        $('body').addClass('search').removeClass('viewticket');

        if (updtrip) {

            findto(from, to);

        }

        if (updreturn && $('#returntype').val() > 0) {

            findreturn(from, to);
        }


        var froms = station[from];
        var tos = station[to];

        var hasNorway = !froms.c.length || !tos.c.length;
        if (hasNorway)
            hasNorway = (froms.n == 'Kongsvinger' || tos.n == 'Kongsvinger');

        cardAvail = (froms.c != tos.c && !hasNorway); //&& (froms.c != 'S' && tos.c != 'S') // && froms.c.length && tos.c.length
        //$('#hascommuter').toggle(cardAvail);
        //$('#nocommuter').toggle(!cardAvail);
    }
}

function showmessage(text, type) {
    console.log(text);
}

function getArrReturn() {
    return false;// $('#returntype').val() == 2;
}

function getArrTrip() {
    return false;//$('#deptype').val() == 2;
}
function isreturnselected() {
    return false;
   /* if ($('#returntype').val() > 0)
        return true;
    else
        return false;
*/
}

function getDist(x, y, x2, y2) {
    var deltaX = x2 - x;
    var deltaY = y2 - y;
    return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
}




/*
$('.buycom').click(function () {
    var trav = { Type: $(this).data('age') - 0, Name: '' };
    prebuy($(this));
    var t = $(this);
    var noi = 0;
    var bs = $('#busstart').is(':checked');
    var be = $('#busend').is(':checked');
    if (bs && be)
        noi = 3;
    else if (bs)
        noi = 1;
    else if (be)
        noi = 2;
    ar(svcUrl + 'BookTrip', { tripid: baseTrip.uid, noi: noi, from: baseTrip.fromId, to: baseTrip.toId, type: 3, ttype: 3, startdate: commuterdate, traveller: [trav], fullflex: false }, function (d) {

        afterbuy(t);
        if (window._gaq)
            _gaq.push(['_trackEvent', 'AddItemToCart', 'click']);
    });
});

$('.multiprice').click(function () {
    //var mul = $(this).data('mul') - 0;
    prebuy($(this));
    var t = $(this);
    var noi = $(this).data('noi') - 0;
    ar(svcUrl + 'BookTrip', { tripid: baseTrip.uid, noi: noi, from: baseTrip.fromId, to: baseTrip.toId, type: 2, ttype: 2, startdate: commuterdate, traveller: getTravellers('#multitraveler'), fullflex: true }, function (d) {


        afterbuy(t);
        if (window._gaq)
            _gaq.push(['_trackEvent', 'AddItemToCart', 'click']);
    });
});
*/

/*
$('#returntype').change(function () {

    if ($(this).val() > 0)
        findtrip(false, true);
    else
        $('#returntrip').hide();
});
*/

function onstart() {

 $from = $('#from'),
    $to = $('#to'),
    $commutercnt = $('#commutercnt'),
    $multicnt = $('#multicnt'),
    tccnt = $('#tripresult'),
    returncnt = $('#returnresult'),
    $travelfrom = $('#travelfrom'),
    $when = $('#mwhen, #when'),
    $comstart = $('#comstartdate'),
    $return = $('#mreturn, #return'),
    $backtravelfrom = $('#backtravelfrom'),
    $tripday = $('#tripday'),
    $returnday = $('#returnday'),
    $triptime = $('#mwhentime'),
    $returntime = $('#mreturntime');

$('#mytickets').click(function() {
    $('body').removeClass('search').addClass('viewticket');
});

$('#searchwrap').click(function() {
    $('body').addClass('search').removeClass('viewticket');
});

$('#deptype').change(function () {

    var ij = 0;
    tccnt.find('.trip').each(function () {
        setTripData(startTime, $(this), ij++, getArrTrip());
    });
});

$('.prevtimes').click(function () {
    $(this).hide();
    $($(this).parents('.tripparent').find('.pretime').removeClass('pretime').get().reverse()).each(function (i, v) {
        setTimeout(function () {
            $(v).addClass('appeared');
        }, i * 100);
    });
});
$('.nexttimes').click(function () {
    $(this).hide();
    $(this).parent().find('.nextdaytimes').show();
    $(this).parents('.tripparent').find('.posttime').removeClass('posttime').each(function (i, v) {
        setTimeout(function () {
            $(v).addClass('appeared');
        }, i * 100);
    });
});
$('.nextdaytimes').click(function () {
    var isreturn = $(this).parents('.tripparent').attr('id') != 'basetrip';

    if (!isreturn) {
        date = date.addDays(1);
        startTime = 6 * 60;
        $('#mwhentime').val('06:00');
        $when.val(date.format('yyyy-mm-dd')).change();
    } else {
        returndate = returndate.addDays(1);

        returnTime = 6 * 60;
        $('#mreturntime').val('06:00');
        $return.val(returndate.format('yyyy-mm-dd')).change();

    }


});

$("#to, #from").change(function () { findtrip(true, true); });
$from.change(function () {
    $('#findmore').addClass('showhidden');
});
/*
$('#swap').click(function () {
    $(this).toggleClass('flipit');
    var $val1 = $from.val(),
        $val2 = $to.val(),
        $valid1 = $from.data('station-id'),
        $valid2 = $to.data('station-id');

    $from.val($val2).data('station-id', $valid2);
    $to.val($val1).data('station-id', $valid1);

    findtrip(true, true);
});
*/

$(document).on('change','.mtraveler .travelerrow select', function () {
    findtrip(true, true);
});

$('.addtraveler').click(function () {

    var row = $(this).prev().find('div.travelerrow').first().clone(true);
    //$($('<input type="text" placeholder="Namn" />')).appendTo(row);
    var delrow = $('<span class="delrow" />').text('Tabort');
    $(delrow).bind('click', function () {
        $(this).parent('div').remove();
        //setButtonHeight();
        findtrip(true, true);
    });
    $(delrow).appendTo(row);
    $(row).insertAfter($(this).prev().find('div.travelerrow').last());

    //setButtonHeight();
    findtrip(true, true);
});



$('#buytrip').click(function () {
    var t = $(this);
    var tripid = $('input[name="tripresult"]:checked').val();
    var returntripid = $('input[name="returnresult"]:checked').val();
    var trav = getTravellers();
    prebuy(t);
    ar(svcUrl + 'BookTrip', { tripid: tripid, noi: 1, from: baseTrip.fromId, to: baseTrip.toId, type: 1, ttype: 1, startdate: commuterdate, traveller: trav, fullflex: false }, function (d) {
        if (d) {
            if (returntripid) {
                ar(svcUrl + 'BookTrip', { tripid: returntripid, noi: 1, from: baseTrip.toId, to: baseTrip.fromId, type: 1, ttype: 1, startdate: commuterdate, traveller: trav, fullflex: false }, function (d2) {
                    if (d2) {
                        if (window._gaq)
                            _gaq.push(['_trackEvent', 'AddItemToCart', 'click']);
                        afterbuy(t);
                    } else {
                        showmessage('Återresan kunde inte bokas');
                    }
                });
            } else {
                if (window._gaq)
                    _gaq.push(['_trackEvent', 'AddItemToCart', 'click']);
                afterbuy(t);
            }
        } else {
            showmessage('Resan kunde inte bokas');
        }
    });
});


$('#defaultbtn').click(function() {
	$(this).addClass('hide');
	$('.hiddenfields').addClass('show');
});


$('.searchbtn').click(function () {
    var fid = $('#from').data('station-id');
    var tid = $('#to').data('station-id');
    if (!fid)
        $('#from').addClass('doselect');
    else if (!tid)
        $('#to').addClass('doselect');
    else if (tid == fid) {
        $('#from').addClass('doselect');
        $('#to').addClass('doselect');
    } else {


        findtrip(true, true);
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $("#basetrip").offset().top
            }, 400);
        }, 400);
    }
});



useNativeInput  = true;



$triptime.tkTime({
    useCustom: !useNativeInput,
    onchange: function (time) {
        startTime = time;
        var ij = 0;
        tccnt.find('.trip').each(function () {
            setTripData(time, $(this), ij++, getArrTrip());
        });
    }
});
$returntime.tkTime({
    useCustom: !useNativeInput,
    onchange: function (time) {
        returnTime = time;
        var ij = 0;
        returncnt.find('.trip').each(function () {
            setTripData(time, $(this), ij++, getArrReturn());
        });
    }
});






$when.datePicker({
    useCustom: false,//!useNativeInput,
    nextText: "Nästa",
    prevText: "Tidigare",
    onchange: function (d) {
        date = d;
        $tripday.trigger('changeday', [d]);
        if (returndate < date) {
            $return.val(date.format('yyyy-mm-dd')).change();
        }
        findtrip(true, false);
    }
});

$return.datePicker({
    useCustom: false,//!useNativeInput,
    onchange: function (d) {
        returndate = d;
        $returnday.trigger('changeday', [d]);
        if (returndate < date) {
            $when.val(returndate.format('yyyy-mm-dd')).change();
        }
        findtrip(false, true);
    }
});

$comstart.datePicker({
    onchange: function (d) {
        commuterdate = d;
    },
    useCustom: true//,!useNativeInput
});
/*$comstart.val(commuterdate.format('yyyy-mm-dd')).change().change(function () {
    commuterdate = new Date($(this).val());
});
*/
$('.switchtype .departure').click(function () {
    $(this).parent().children('span').removeClass('active');
    $(this).addClass('active');
    $(this).parent().children('.newswitch').removeClass('arr');
});
$('.switchtype .arrival').click(function () {
    $(this).parent().children('span').removeClass('active');
    $(this).addClass('active');
    $(this).parent().children('.newswitch').addClass('arr');
});
$('.switchtype .newswitch').click(function () {
    var active = $(this).parent().children('.active');
    var inactive = $(this).parent().children('span:not(.active)');

    $(active).removeClass('active');
    $(inactive).addClass('active');
    if ($(this).parent().children('.arrival').hasClass('active'))
        $(this).parent().children('.newswitch').addClass('arr');
    else
        $(this).parent().children('.newswitch').removeClass('arr');
});
}


/*
document.addEventListener("deviceready", function() {
    onstart();  
    console.log('start');
}, false);
*/

$(document).ready( onstart );

var usegmap = false;

/*
$('.combus').change(function () {
    var tot = $('.buycom[data-age="1"]').data('price');
    var toty = $('.buycom[data-age="2"]').data('price');
    var noi = 0;
    var bs = $('#busstart').is(':checked');
    var be = $('#busend').is(':checked');
    if (bs && be)
        noi = 2;
    else if (bs)
        noi = 1;
    else if (be)
        noi = 1;
    $('.buycom[data-age="1"]').html('Vuxen <span class="price">' + wdShop.currFormat(tot + (noi * 200)) + '</span>');
    $('.buycom[data-age="2"]').html('Ungdom/Studerande <span class="price">' + wdShop.currFormat(toty + (noi * 200)) + '</span>');
});

$('#otherdate').click(function () {
    $('#daybefore').hide();
    $('#dayafter').show();
});
*/
