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
    now = new Date(),
    date = new Date(),
    returndate = new Date(),
    commuterdate = new Date(),
    startTime = date.inmin(),
    nav = navigator.appVersion,
    isIPad = nav.indexOf('iPad') != -1,
    useBrowser = nav.indexOf('Chrome/') != -1 || nav.indexOf('iPhone') != -1 || isIPad,
    useNativeInput = (isIPad || (windowwidth < 768 && useBrowser)),
    issafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;



function ar (cmd,data,cb,err) {
        
        //console.log('hämta data');
            var request = new XMLHttpRequest();
            
            request.onload = function() {
                //console.log('ok:'+request.response);
                if (cb)
                    cb(eval('(' + request.response + ')').d);

            };
            request.onerror = function() {
                //console.log('error');
                if (err)
                    err();
            };
            

            request.open("POST", 'http://tagkompaniet.se/'+cmd);
            request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            var data = JSON.stringify(data);
            
            request.send(data);
        
    };

/*
var lastdata = JSON.parse($.cookie('laststation'));
if (lastdata && lastdata.to) {
    $('#to').data('station-id', lastdata.to).val(station[lastdata.to].n);
    $('#from').data('station-id', lastdata.from).val(station[lastdata.from].n);
}

console.log(lastdata);
*/
$("#to, #from").change(function () { findtrip(true, true); });
$(".stationlist").each(function () {
    //var inp = $(this);
    var cnt = $('<ul class="stpop" />').insertAfter($(this));
    $.each(station, function (i, v) {

        $('<li data-id="' + i + '">' + v.n + '</li>').appendTo(cnt);
        /*
        .click(function (e) {
            console.log($(this).text());
            inp.val($(this).text());
            inp.data('station-id', i);
            $(this).parent().hide().find('.selected').removeClass('selected');
            $(this).addClass('selected');
            e.stopPropagation();
            findtrip();
            return false;
        })*/
    });
});

String.prototype.insert = function (index, string) {
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
};

/*
$("#trainsearch").change(function() {
    var stnid = $(this).data('station-id');
    if (stnid) {
        ar('/tripfinder.asmx/GetDep', { from: stnid, when: new Date() }, function(d) {
            var prt = $('ul.traininfo');
            prt.find('.stninfo').remove();
            $.each(d, function(i, v) {
                var cnt = $('<li class="stninfo cf" />').appendTo(prt);
                var dep = v.Departure.StartStationNr == stnid ? 'Start' : 'End';
                var time = v.Departure[dep + 'TimeString'].insert(2,':');
                var ex = $('<span class="ttime">' + time + '</span><span class="info"><a class="tooltip"><img src="/images/icons/info-icon-small.png" alt="Information" /><span class="ttxt">&nbsp;</span></a></span>').appendTo(cnt);
                $('<span class="desc">' + v.Trip.TripNr + '<br />Mot ' + v.Trip.EndStationName + '</span>').appendTo(cnt);
                var trk = $('<span class="track">&nbsp;</span>').appendTo(cnt);
                ar('/tripfinder.asmx/GetTrainStatus', { nr: v.Trip.TripNr }, function (dd) {
                    var c = JSON.parse(dd);
                    //console.log(c);
                    if (c.LpvTrafiklagen && c.LpvTrafiklagen.Trafiklage) {
                        var tl = c.LpvTrafiklagen.Trafiklage;
                        var last = tl[tl.length - 1];
                        var spar = last.SparangivelseAnkomst||last.SparangivelseAvgang;
                        ex.find('span.ttxt').html(last.StatiskInformationTrafikplatsVisning);
                        ex.find('a.tooltip').toggle(!!last.StatiskInformationTrafikplatsVisning);
                        if (spar) {
                            trk.text(spar);
                        }
                    }
                    
                });
                
                
                //v.Trip.TripNr
            });
            console.log(d);
        });
    }
});
*/
$('#from').change(function () {
    $('#findmore').addClass('showhidden');
});
$('.stationlist').focus(function () {
    closestn();
    $(this).next().addClass('open');
}).click(function (e) {
    var t = $(this);

    setTimeout(function () {
        t.select();
    }, 20);
    e.stopPropagation();
}).keyup(function (e) {
    var ul = $(this).next();
    if (e.keyCode == 13) {
        ul.removeClass('open');
        var sel = $(this).next().find('li.selected').not('.inactive').first();
        $(this).val(sel.text()).data('station-id', sel.data('id'));
        e.stopPropagation();
    }
    else if (e.keyCode == 40) {
        var sel = ul.find('li.selected').removeClass('selected');
        var next = sel.nextAll(':not(.inactive)').first();
        if (!next.length)
            next = sel;
        next.addClass('selected');
        e.stopPropagation();
    }
    else if (e.keyCode == 38) {
        var sel = ul.find('li.selected').removeClass('selected');
        var next = sel.prevAll(':not(.inactive)').first();
        if (!next.length)
            next = sel;
        next.addClass('selected');
        e.stopPropagation();
    }
    else {
        ul.addClass('open');
        var v = $(this).val().toLowerCase();
        var ii = 0;
        ul.find('li').each(function () {
            var hasText = $(this).text().toLowerCase().indexOf(v) == 0;
            $(this).toggleClass('inactive', !hasText);

        });
        var sel = ul.find('li.selected');
        if (!sel.length || sel.hasClass('inactive'))
            ul.find('li:not(.inactive):first').addClass('selected');
    }
});
$('.stpop li').click(function (e) {
    var inp = $(this).parent().removeClass('open').prev();
    inp.val($(this).text()).data('station-id',$(this).data('id')).change();
    e.stopPropagation();
});
$(window).click(closestn);

function closestn() {
    $('.stpop.open').removeClass('open').each(function () {
        var sel = $(this).find('li.selected').not('.inactive').first();
        var inp = $(this).prev();
        if (inp.val() != '')
            inp.val(sel.text());
    });
}

/*
keyup(function () {
    var v = $(this).val().toLowerCase();
    $(this).next().show().find('li').each(function () {
        var txt = $(this).text().toLowerCase();
        var vis = (txt.indexOf(v) == 0);
        $(this).toggle(vis);
    });
}).click(function (e) {
    e.stopPropagation();
}).focus(function (e) {
    var o = $(this);
    $('.stpop').hide();
    o.next().show();
    setTimeout(function () {
        o.select();
    }, 10);
    e.stopPropagation();
})
*/

var baseTrip;


var tccnt = $('#tripresult');
var returncnt = $('#returnresult');

//var maxtime = 0;

function appendTrip(t,tc) {
    
    var cnt = $('<div class="trip cf" />').data('data',t).click(function (e) {
        e.stopPropagation();
        icnt.slideToggle();
        $(this).toggleClass('open');
        //var thisitem = $(this);
        //if($(thisitem).hasClass('open')) {
        //    setTimeout(function () {
        //        var chosenHeight = $(thisitem).outerHeight() / 2;
        //        console.log(chosenHeight);
        //        $(thisitem).children().find('.chosen').css({ 'border-top': chosenHeight + 'px solid #B71135', 'border-bottom': chosenHeight + 'px solid #B71135', 'opacity' : '1' });
        //    }, 500);
        //}
        //else
        //    $(thisitem).children().find('.chosen').css('opacity', '0');
       
    }).mouseenter(function () {

        if (flightPath)
            flightPath.setMap(null);
        flightPath = new google.maps.Polyline({
            path: t.lines,
            strokeColor: "#588e89",
            strokeOpacity: 1.0,
            strokeWeight: 5
        });
        var bounds = new google.maps.LatLngBounds();
        $.each(t.lines, function(i,v) {
            bounds.extend(v);
        });

        flightPath.setMap(map);
        map.panTo(bounds.getCenter());
        map.fitBounds(bounds);
        //map.panToBounds(bounds);
        /*$.each(pins, function(i, v) {
            v.setMap(null);
        });
        $.each(t.subTrips, function (i, v) {
            v.m.setMap(map);
        });*/
    }).appendTo(tc);
    cnt.bind('maxtime', function (e, time) {
        var percent = t.TotalTime.TotalMinutes / time;
        //console.log(percent);
        totalline.css('width', (percent*90) + '%');

    });
    var changes = t.TotalChanges - 1;
    var title = $('<div class="triphead"><span class="starttime">' + t.StartTime.format('HH:MM') + '</span><span class="timeto"></span><span class="arrivetime">' + t.EndTime.format('HH:MM') + '</span><span class="changes">' + changes + '</span><span class="traveltime">' + t.TotalTime.Hours + 'h ' + t.TotalTime.Minutes + 'min</span></div>').appendTo(cnt);
    
    var travelfrom = $('input#from').val().replace('Centralstation', 'C');
    var travelto = $('input#to').val().replace('Centralstation', 'C');

    $('#travelfrom').empty().append(travelfrom + ' - ' + travelto);
    $('#backtravelfrom').empty().append(travelto + ' - ' + travelfrom);

    //Längsta resa
    var tottime = t.TotalTime.TotalMinutes;
    
    var prc = $('<span class="tprice" />').appendTo(title);
    var icnt = $('<div class="subtrips" style="display:none" />').click(function(e) {
        e.stopPropagation();
    }).appendTo(cnt);

    var fromto = $('<div class="fromto" />').empty().text(t.StartTime.format('HH:MM') + ' ' + travelfrom + ' - ' + t.EndTime.format('HH:MM') + ' ' + travelto).appendTo(icnt);
    //var tofrom = $('<div class="tofrom" />').empty().text(travelfrom + ' - ' + travelto).appendTo(icnt);

    var owncnt = $('<div class="own" />').appendTo(title);
    var addcart = $('<div class="addtocartbutton" />').text('Lägg till i kundvagn').click(function (e) {
        ar('/tripfinder.asmx/BookTrip', { tripid: t.uid, noi: 1, from: t.fromId, to: t.toId, type: 1, ttype: 1, startdate:commuterdate,traveller:'',fullflex:false }, function (d) {
            wdShop.orderChanged();
        });
        e.stopPropagation();
    }).appendTo(owncnt);
    var buy = $('<div class="bookbutton" />').text('Köp direkt').click(function (e) {
        ar('/tripfinder.asmx/BookTrip', { tripid: t.uid, noi: 1, from: t.fromId, to: t.toId, type: 1, ttype: 1, startdate: commuterdate, traveller: '', fullflex: false }, function (d) {
            window.location.href = '/checkout';
            wdShop.orderChanged();
        });
        e.stopPropagation();
    }).appendTo(owncnt);
    //console.log(t);
    //var subtitle = $('<div class="totaltrip">' + t.StartTime.format('HH:MM') + ' ' + t.Departure + ' - ' + t.EndTime.format('HH:MM') + ' ' + t.Arrival + '</div>').appendTo(icnt);

    var totalline = $('<div class="cf totalline" />').appendTo(icnt);
    $(totalline).wrap('<div class="wrapline" />');

    $('<div class="cf showdet" onclick="showsub($(this))">Detaljerad resväg</div>').appendTo(icnt);
    
    //var cardprice = $('<span class="tprice cardprice">');
    
    t.lines = [];
    var tot = 0;
    var isown = true;
    var mtime = 0;
    $.each(t.subTrips, function (i, v) {

        v.from = station[v.FromId];
        v.to = station[v.ToId];
        v.time = (v.Arrival.getTime() - v.Departure.getTime()) /(1000*60);
        console.log('tid', v.time, tottime);
        
        if (v.time > mtime)
            mtime = v.time;
        var iown = true;

        if (v.Trip.CompanyNr != 314 && v.Trip.CompanyNr != 315) {
            isown = false;
            iown = false;
        }
        t.lines.push(new google.maps.LatLng(v.from.y, v.from.x));
        $.each(v.StationList, function (j, sid) {

            

            var sid = v.StationList[j];
            //var s = station[sid-1];
            var e = station[sid];
            //console.log('station:', sid, e);


            //v.latlngFrom = new google.maps.LatLng(v.from.y - 0, v.from.x - 0);
            //v.latlngTo = new google.maps.LatLng(v.to.y - 0, v.to.x - 0);

            //t.lines.push(v.latlngFrom);
            //if (e)
            t.lines.push(new google.maps.LatLng(e.y, e.x));
        });
        t.lines.push(new google.maps.LatLng(v.to.y, v.to.x));
        
        var o = { position: v.latlngTo, title: v.n }; //, animation: google.maps.Animation.DROP
        v.m = new google.maps.Marker(o);
        pins.push(v.m);
        

        if (v.Wait > 0) {
            $('<div class="subtrip wait">' + v.Wait + 'minuter väntetid</div>').appendTo(icnt);
            $('<div class="subline wait" />').text(timespan(v.Wait)).css({ width: (v.Wait / tottime) * 100 + '%' }).appendTo(totalline);
        }

        function timespan(total) {
            var hours = Math.floor(total / 60);
            var minutes = total % 60;
            if (minutes < 10 && hours>0)
                minutes = '0' + minutes;
            if (hours>0)
                return hours + ':' + minutes;
            return minutes + 'm';
        }
        $('<div class="subline" />').text(timespan(v.time)).css({ width: (v.time / tottime) * 100 + '%' }).addClass('v' + v.Trip.Vehicle).appendTo(totalline).toggleClass('ownsubtrip',iown);
        tot += v.Price.Full;
        $('<div class="subtrip ani"><span class="fromdate"><strong>' + v.Departure.format('HH:MM') + '</strong></span> <span class="fromcity">' + v.from.n.replace('Centralstation', 'C') + '</span> - <strong><span class="todate">' + v.Arrival.format('HH:MM') + '</strong></span> <span>' + v.to.n.replace('Centralstation', 'C') + '</span><span class="tripnr">TripNr:' + v.Trip.TripName + '</span><span class="sprice">' + v.Price.Full + 'kr</span></div>').appendTo(icnt).toggleClass('ownsubtrip', iown);
        
    });
    $('<div class="notowninfo"><div><p>Tyvärr går denna ej att boka via appen, men kontakta vårat servicecenter så hjälper vi dig.</p></div><div class="cf"><a href="tel:0000" class="phoneinfo">Ring</a><a href="#" class="chatinfo">Chatta</a></div>').appendTo(icnt);
    if (!isown) {
        owncnt.remove();
        $('<span class="bookwarn" />').text('Denna resa går ej att boka').appendTo(title);
        cnt.toggleClass('notown');
    } else {
        //cardprice.text((tot * 10) + "kr");
        baseTrip = t;
        if (cardAvail) {
            /* 
             var bcard = $('<div class="button bookbutton bookcard" />').text('Pendlarkort').click(function(e) {
                 ar('/tripfinder.asmx/BookTrip', { tripid: t.uid, noi: 1, from: t.fromId, to: t.toId, type: 2, ttype: 1 }, function(d) {
                     wdShop.orderChanged();
                 });
                 e.stopPropagation();
             }).appendTo(owncnt);
             cardprice.appendTo(bcard);*/
            $('#commutercnt').addClass('slideappear');
            $('#comprice').text((tot*10)+'kr');
        }

        prc.text(tot + "kr");
    }
    cnt.toggleClass('owntrip', isown);
    
    return cnt.data('data', t);
}

function showsub(e) {
    $(e).parent().children('div.subtrip').each(function () {
        if ($(this).hasClass('open'))
            $(this).removeClass('open');
        else
            $(this).addClass('open');
    });
    $(e).toggleClass('active');
    //console.log(e);
    //console.log("click");
}

function findto(from, to) {
    tccnt.find('.trip').removeClass('appeared');
    ar('/tripfinder.asmx/FindTrips', { from: from, to: to, when: date }, function (d) {
        tccnt.empty();
        var mt = 0;
        var it = 0;
        $.each(d.Result, function (i, v) {
            v.fromId = from;
            v.toId = to;
            if (v.TotalTime.TotalMinutes > mt)
                mt = v.TotalTime.TotalMinutes;
            var cnt = appendTrip(v, tccnt);
            //setTimeout(function () {
            //    cnt.addClass('appeared');
            //}, i * 130);
            setTripData(startTime, cnt,it++);
        });
        tccnt.find('.trip').trigger('maxtime', [mt]);
        //console.log('trip',mt);
    });
}

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

function setTripData(sTime, cnt, i, arr) {
    var v = cnt.data('data');
    var inmin = getDayMinutes(v[arr?'EndTime':'StartTime']);
    //console.log(v, inmin);
    if ((!arr && sTime < inmin && (sTime + (4 * 60) > inmin)) || (arr && sTime > inmin)) {
        setTimeout(function () {
            cnt.addClass('appeared').removeClass('posttime').removeClass('pretime');
        }, i * 130);
    } else {
        cnt.removeClass('appeared');
        if (sTime < inmin) {
            cnt.parents('.tripparent').find('.prevtimes').show();
            cnt.addClass('posttime').removeClass('pretime');
        } else {
            cnt.parents('.tripparent').find('.nexttimes').show();
            cnt.addClass('pretime').removeClass('posttime');
        }
    }
    cnt.data('inmin', inmin);
}

$('.prevtimes').click(function () {
    $(this).hide();
    $(this).parents('.tripparent').find('.pretime').removeClass('pretime').addClass('appeared');
});
$('.nexttimes').click(function () {
    $(this).hide();
    $(this).parents('.tripparent').find('.posttime').removeClass('posttime').addClass('appeared');
});

function openTicket(data) {
    var cnt = $('<div class="ticketview" />').appendTo($('body'));
    $('<div class="close"></div>').appendTo(cnt);
    $('<div class="ordernr">Ordernummer: <strong>' + data.OrderId + '</strong></div>').appendTo(cnt);
    $('<div class="ticketnr text-right">Biljettnummer: <strong>' + data.Id + '</strong></div>').appendTo(cnt);
    $('<div class="tickettype">' + data.ArticleGroup + '</div>').appendTo(cnt);
    $('<div class="title">'+data.Title+'</div>').appendTo(cnt);
    if (data.ArticleGroup == "Pendlarkort") {
        $('<div class="enddate">Pendlarkortets giltighetstid: ' + data.Start.format('yyyy-mm-dd') + ' - ' + data.End.format('yyyy-mm-dd') + '</div>').appendTo(cnt);
    } else {
        $('<div class="trainnr">Tågnummer:<strong>' + data.TripNr + '</strong></div>').appendTo(cnt);
    }
    $('<img src="/gen.img?qr=' + encodeURI('http://tkab.se/validate?q=' + data.Id) + '">').appendTo(cnt);
    $('.ticketview .close').click(function () {
        $(this).parent().remove();
    });
}

function enumTickets(arr, cnt) {
    $.each(arr, function (i, v) {
        console.log(v);
        var t = $('<li class="cf" />').data('data', v).click(function() {
            openTicket(v);
        }).appendTo(cnt).append('<span class="desc">'+v.Title+'</span>');
        if (v.ArticleGroup == "Pendlarkort") {
            console.log(v);
            var days = ((v.End.getTime() - new Date().getTime()) / (3600000 * 24));
            $('<span class="time commuter" />').text(Math.round(days)).appendTo(t).append('<span class="enddate">'+v.End.format('yy-mm-dd')+'</span>');
        } else {
            var time = $('<span class="time" />').text(v.Start.format('HH:MM') + ' - ' + v.End.format('HH:MM')).appendTo(t);
        }
    });
}

function updateTickets() {
    ar('/tripfinder.asmx/MyTickets', {}, function(d) {
        console.log('biljetter', d);
        enumTickets(d.Single, $('ul.yourticket'));
        enumTickets(d.Multi, $('ul.yourmultiticket'));
        enumTickets(d.Commuter, $('ul.yourcommuter'));
        
    });
}

updateTickets();

function findreturn(from,to) {
    returncnt.find('.trip').removeClass('appeared');
    ar('/tripfinder.asmx/FindTrips', { from: to, to: from, when: returndate }, function (d) {
        returncnt.empty();
        var mt = 0;
        var it = 0;
        $.each(d.Result, function (i, v) {
            v.fromId = from;
            v.toId = to;
            if (v.TotalTime.TotalMinutes > mt)
                mt = v.TotalTime.TotalMinutes;
            var cnt = appendTrip(v, returncnt);
            setTripData(returnTime,cnt,it++);
        });
        console.log('tripreturn', mt);
        returncnt.find('.trip').trigger('maxtime', [mt]);
    });
}

var monthNames = ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec'];
var dayNames = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];

$.fn.weeksel = function(opt) {
    $(this).each(function() {
    
        var d = opt.date || new Date();
        var days;
    var t = $(this).bind('changeday', function(e,date) {
        d = date;
        genDays();
    });

    function changeDay(nod) {
        d = d.addDays(nod);

        var trans = -(nod + 3)*100;
        //console.log("trans: " + trans);
        t.find('div.day').css({ '-webkit-transform': 'translate(' + (trans) + '%,0px)', '-moz-transform': 'translate(' + (trans) + '%,0px)', 'transform': 'translate(' + (trans) + '%,0px)' });
        setTimeout(function() {
            genDays();
        }, 500);
        
            //days.css('margin-left', 0);
        
        
        
        if (opt.onchange)
            opt.onchange(d);
    }

    function genDays() {
        t.empty();
        $('<div class="week prev" />').html('<span>&laquo;</span>').click(function() {
            changeDay(-2);
        }).appendTo(t);
        dayscnt = $('<div class="days" />').appendTo(t);
        days = $('<div class="dayscnt" />').appendTo(dayscnt);
        for (var i = -4; i < 6; i++) {
            (function (j) {
                var nd = d.addDays(j);
                var dd = $('<div class="day ani" />').text(dayNames[nd.getDay()]).append($('<span class="dom" />').text(nd.getDate()+' '+monthNames[nd.getMonth()])).click(function () {
                    days.find('.today').removeClass('today');
                    $(this).addClass('today');
                    changeDay(j);
                }).appendTo(days);
                if (j == 0)
                    dd.addClass('today');
            })(i);
            
        }
        $('<div class="week next" />').html('<span>&raquo;</span>').click(function () {
            changeDay(2);
        }).appendTo(t);
    }

    genDays();
    });
};

$('#buycom').click(function() {
    ar('/tripfinder.asmx/BookTrip', { tripid: baseTrip.uid, noi: 1, from: baseTrip.fromId, to: baseTrip.toId, type: 3, ttype: 3, startdate: commuterdate, traveller: '', fullflex: false }, function (d) {
        window.location.href = '/checkout';
        wdShop.orderChanged();
    });
});

$(travelback).change(function() {
    findtrip(false, true);
    $('#returntrip').toggle($(this).is(':checked'));
});

function findtrip(updtrip,updreturn) {
    var from = $('#from').data('station-id');
    var to = $('#to').data('station-id');
    if (from && to && from != to) {

        
        $.cookie('laststation', JSON.stringify({
            from: from,
            to: to
        }), { path: '/', expires: 200 });
        if (updtrip)
            findto(from, to);

        if (updreturn && $(travelback).is(':checked'))
            findreturn(from, to);
        
        

        var froms = station[from];
        var tos = station[to];
        cardAvail = (froms.c != tos.c);
        //if (froms.c == tos.c)
        //alert('samma län');
        //console.log(froms, tos);
        //ar('/tripfinder.asmx/GetCommutorPrice', { from: from, to: to }, function (d) {

        //    console.log(d);
        //});
        
    }
}

function getDayMinutes(d) {
    return d.getHours()*60+d.getMinutes();
}



if (navigator.geolocation) {
    if (!lastdata || !lastdata.from)
    navigator.geolocation.getCurrentPosition(function (d) {
        console.log(d);
        var x2 = d.coords.longitude;
        var y2 = d.coords.latitude;
        var dist = [];
        $.each(station, function (i, v) {
            v.dist = getDist(v.x, v.y, x2, y2);
            v.id = i;
            dist.push(v);
        });
        dist = dist.sort(function (a, b) {
            return a.dist - b.dist;
        });
        //console.log(dist[0]);
        $('#from').data('station-id', dist[0].id).val(dist[0].n);

    });
}

window.validate = function(id) {
    ar('/tripfinder.asmx/GetBookingInfo', { id: id }, function (d) {
        console.log(d);
    });
}

shopOpt.customCartRow = function(data, info, t) {
    console.log(data,t);
    if (data.ProductType == 107) {
        t.find('div.img-col').remove();
        t.find('.cart-artnr').text('Denna resa består av dessa delresor:');
    }
    if (data.ResourceId > 0) {

        t.find('span.cart-price').remove();
        var b = $('<div class="button cart-bookseat"></div>').text(data.seat > 0 ? 'Byt plats' : 'Välj plats').click(function() {
            ql.load('/js/seat.js', function() {
                bookseat(data.Id);
            });
        }).appendTo(info);
    }
}

$('#tripid').change(function () {
    ar('/tripfinder.asmx/FindTrip', { id: ($(this).val() - 0) }, function (d) {

        console.log(d);
    });

});
var date = new Date();
var returndate = new Date();
var commuterdate = new Date();

var startTime = getDayMinutes(date);
var returnTime = getDayMinutes(date);

$('#whentime, #mwhentime').on('changeTime', function () {
    var sm = $(this).timepicker('getSecondsFromMidnight');
    startTime = sm / 60;
    //findtrip(true, false);
    var ij = 0;
    var arr = $('#deptype .active').index() == 0;
    tccnt.find('.trip').each(function () {
        setTripData(startTime, $(this), ij++,arr);
    });
});

$('#deptype span').click(function () {
    var arr = $('#deptype .active').index() == 0;
    var ij = 0;
    tccnt.find('.trip').each(function () {
        setTripData(startTime, $(this), ij++, arr);
    });
});

$('#arrtype span').click(function () {
    var arr = $('#arrtype .active').index() == 0;
    var ij = 0;
    returncnt.find('.trip').each(function () {
        setTripData(returnTime, $(this), ij++, arr);
    });
});

$('#whentotime, #mreturntime').on('changeTime', function () {
    var sm = $(this).timepicker('getSecondsFromMidnight');
    returnTime = sm / 60;
    var ij = 0;
    //findtrip(false, true);
    var arr = $('#arrtype .active').index() == 0;
    returncnt.find('.trip').each(function () {
        setTripData(returnTime, $(this), ij++, arr);
    });
});



if (lastdata) {
    setTimeout(function() {
        findtrip(true, true);
    }, 500);

}

var now = new Date();
$('#mwhentime, #mreturntime, #whentime, #whentotime').val(now.getHours() + ':00');
$('#settime, #setreturntime').text($('#mwhentime').val());

$('#mwhentime, #mreturntime, #whentime, #whentotime').timepicker({
    step: 30,
    'timeFormat': 'H:i'
});
$('#settime').on('click', function () {
    $('#mwhentime').timepicker('show');
});
$('#mwhentime').on('changeTime', function () {
    $('#settime').text($(this).val());
});

$('#setreturntime').on('click', function () {
    $('#mreturntime').timepicker('show');
});
$('#mreturntime').on('changeTime', function () {
    $('#setreturntime').text($(this).val());
});
//$('.mtime span').on('click',function () {
//    $('#mwhentime').timePicker({
//        step: 30
//    });
//    $('#mwhentime').trigger('click');
//    $('#mwhentime').on('changeTime', function () {
//        $('.mtime span').text($(this).val());
//        console.log($(this).val());
//    });
//});

$('#tripday').weeksel({
    day: date,
    onchange: function (nd) {
        date = nd;
        $('#when').datepicker('setDate', date);
        findtrip(true, false);
    }
});
$('#returnday').weeksel({
    day: returndate,
    onchange: function (nd) {
        returndate = nd;
        $('#whento').datepicker('setDate', returndate);
        findtrip(false, true);
    }
});

$('#when').datepicker({
    gotoCurrent: true,
    onSelect: function (e, ui) {
        console.log(ui);
        date = $(this).datepicker("getDate");
        $('#tripday').trigger('changeday', [date]);
        findtrip(true,false);
    }
});

$('#mwhen').datepicker({
    gotoCurrent: true,
    onSelect: function (e, ui) {
        console.log(ui);
        date = $(this).datepicker("getDate");
        setMobileDate(date);
        $('#tripday').trigger('changeday', [date]);
        findtrip(true, false);
    }
});
$('#mreturn').datepicker({
    gotoCurrent: true,
    onSelect: function (e, ui) {
        console.log(ui);        
        returndate = $(this).datepicker("getDate");
        setMobileReturnDate(date);
        $('#returnday').trigger('changeday', [date]);
        findtrip(false, true);
    }
});

function setMobileDate(date) {
    $('.mobiledate .mmonthname').text(monthNames[date.getMonth()]);
    $('.mobiledate .mdayname').text(dayNames[date.getDay()]);
    $('.mobiledate .mdate').text(date.getDate());
    $('.mobiledate .myear').text(1900 + date.getYear());
}
setMobileDate(new Date());
$('.dateclick').click(function () {
    $('#mwhen').datepicker('show');
});
function setMobileReturnDate(date) {
    $('.showdate .mmonthname').text(monthNames[date.getMonth()]);
    $('.showdate .mdayname').text(dayNames[date.getDay()]);
    $('.showdate .mdate').text(date.getDate());
    $('.showdate .myear').text(1900 + date.getYear());
}
setMobileReturnDate(new Date());
$('.clickreturndate').click(function () {
    $('#mreturn').datepicker('show');
});

$('#whento').datepicker({
    gotoCurrent: true,
    onSelect: function (e, ui) {
        //console.log('date',ui);
        returndate = $(this).datepicker("getDate");
        $('#returnday').trigger('changeday', [date]);
        findtrip(false, true);
    }
});

$('.switchtype span').click(function () {
    $(this).parent().children('span').removeClass('active');
    $(this).addClass('active');
});
var styles = [
  {
      "featureType": "road.local",
      "stylers": [
        { "visibility": "off" }
      ]
  }, {
      "featureType": "road.arterial",
      "stylers": [
        { "visibility": "off" }
      ]
  }, {
      "featureType": "landscape.natural.terrain",
      "stylers": [
        { "visibility": "off" }
      ]
  }, {
      "featureType": "water",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#d2d9dd" }
      ]
  }, {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
        { "visibility": "on" },
        { "color": "#fafafa" }
      ]
  }, {
      "featureType": "poi.park",
      "stylers": [
        { "visibility": "off" }
      ]
  }, {
      "featureType": "poi.attraction",
      "stylers": [
        { "visibility": "off" }
      ]
  }, {
      "featureType": "poi.business",
      "stylers": [
        { "visibility": "off" }
      ]
  }, {
      "featureType": "poi.place_of_worship",
      "stylers": [
        { "visibility": "off" }
      ]
  }, {
      "featureType": "transit.station",
      "stylers": [
        { "visibility": "on" }
      ]
  }, {
      "featureType": "transit.line",
      "stylers": [
        { "visibility": "on" }
      ]
  }, {
      "featureType": "road.highway",
      "stylers": [
        { "visibility": "on" },
        { "hue": "#94b1b1" },
        { "saturation": "-50" },
        { "weight": 0.5 }
      ]
  }
];

function showmap() {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(60, 16),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    map.setOptions({ styles: styles });
}
window.gmapp = showmap;
if (window.google && window.google.maps)
    showmap();
else
    ql.load('http://maps.google.com/maps/api/js?sensor=true&callback=gmapp', showmap);




fd('booking.js');