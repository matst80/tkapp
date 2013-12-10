var gen = {
    'a': function (opt) {
        var noi = 0;
        for (var x = 0; x < 20; x++) {
            for (var y = 0; y < 4; y++) {
                var nr = (opt.startnr + (x * 4 + y));
                var s = opt.cnt.find('.seat[data-id="' + nr + '"]');

                
                if (s && s.length) {
                    noi++;
                    var px = x * (opt.distx || 75);
                    var py = y % 2 * (opt.disty || 40);


                    if (y < 2)
                        py = 140 - py;

                    if (s.hasClass('custom'))
                        s.text(nr);
                    else
                        s.css({
                            left: px,
                            top: py
                        }).text(nr);
                }
            }
        }
        return noi;
    },
    'b': function (opt) {
        var noi = 0;
        for (var x = 0; x < 20; x++) {
            for (var y = 0; y < 5; y++) {
                var nr = (opt.startnr + (x * 5 + y));
                var s = opt.cnt.find('.seat[data-id="' + nr + '"]');
                
                if (s && s.length) {
                    
                    noi++;
                    var px = x * (opt.distx || 55);
                    var py = y % 3 * (opt.disty || 30);


                    if (y < 3)
                        py = 150 - py;
                    if (s.hasClass('custom'))
                        s.text(nr);
                    else 
                        s.css({
                            left: px,
                            top: py
                        }).text(nr);
                }
            }
        }
        return noi;
    },
    'c': function (opt) {
        var noi = 0;
        var w = opt.cnt.width();
        for (var x = 0; x < 20; x++) {
            for (var y = 0; y < 4; y++) {
                var nr = (opt.startnr + (x * 4 + y));
                var s = opt.cnt.find('.seat[data-id="' + nr + '"]');


                if (s && s.length) {
                    noi++;
                    var px = w-(x * (opt.distx || 75));
                    var py = y % 2 * (opt.disty || 40);


                    if (y > 1)
                        py = 140 - py;

                    if (s.hasClass('custom'))
                        s.text(nr);
                    else
                        s.css({
                            left: px,
                            top: py
                        }).text(nr);
                }
            }
        }
        return noi;
    },
    'd': function (opt) {
        var noi = 0;
        var w = opt.cnt.width();
        for (var x = 0; x < 20; x++) {
            for (var y = 0; y < 5; y++) {
                var nr = (opt.startnr + (x * 5 + y));
                var s = opt.cnt.find('.seat[data-id="' + nr + '"]');

                if (s && s.length) {

                    noi++;
                    var px = w-(x * (opt.distx || 55));
                    var py = y % 3 * (opt.disty || 30);


                    if (y > 2)
                        py = 150 - py;
                    if (s.hasClass('custom'))
                        s.text(nr);
                    else
                        s.css({
                            left: px,
                            top: py
                        }).text(nr);
                }
            }
        }
        return noi;
    }
};


window.bookseat = function (oid, id) {
    var cnt = $('<div class="bookseat" />').appendTo($('body')).ov({
        width: 700
    });

    $.get('trains.html', function (d) {

        function getBook() {
            ar('/tripfinder.asmx/GetSeats', { oid:oid, id: id }, function (d) {
                icnt.find('.seat').removeClass('occupied');
                //console.log(d);
                $.each(d, function (i, v) {
                    var seat = icnt.find('.wagon[data-id="' + v.WagonId + '"]').find('.seat[data-id="' + v.SeatId + '"]');
                    //console.log(v);
                    if (v.Id == id)
                        seat.addClass('myseat');
                    if (v.FBUserId && window.FB) {
                        seat.addClass('hasfb');
                        var fbcnt = $('<div class="linkfb" />').appendTo(seat);
                        FB.api("/" + v.FBUserId + "?fields=name,picture,mutualfriends", function (response) {
                            console.log(response);
                            if (response) {
                                
                                var mut = 'Inga gemensamma vänner';
                                if (response.mutualfriends && response.mutualfriends.data.length) {
                                    mut = response.mutualfriends.data.length + ' gemensamma vänner';
                                }
                                fbcnt.append('<img src="' + response.picture.data.url + '" />').append('<a href="https://www.facebook.com/'+response.id+'" target="_blank">' + response.name + ' <em>' + mut + '</em></a>');
                            }
                        });
                    }
                    seat.addClass('occupied');
                });
            });
        }
                  
        cnt.prepend('<div class="traindesc"><div class="mybseat"><span class="descicon"></span>Min plats</div><div class="bookedseat"><span class="descicon"></span>Upptagen plats</div><div class="animalsection"><span class="descicon"></span>Djuravdelning</div></div>');
        cnt.prepend('<p>Här kan du byta plats om du vill ha en annan plats än den som du fick vid bokningen. Din nuvarande plats är markerad med en röd ram. Klicka på en ledig plats som du vill byta till. Vänligen notera att tågets riktning inte anges i figuren.</p>')
        cnt.prepend($('<span class="close"></span>').click(function() {
            cnt.trigger('close');
        }));
        var icnt = $('<div class="trainwrap" />').appendTo(cnt);
        icnt.html(d);
        //icnt.append('<fb:comments href="http://example.com" width="470"></fb:comments>');
        
        
        var start = 1;
        icnt.find('.section').each(function (i, v) {
            var h = $(v).data('handler');
            var distx = $(v).data('distx');
            start = ($(v).data('startnr')-0) || start;
            console.log('start', start);
            start += gen[h]({ cnt: $(v), startnr: start, distx: distx });
        });

        var trn = cnt.find('.train');
        var wagon = cnt.find('.wagon');
        var tw = 0;
        wagon.each(function () {
            tw += $(this).outerWidth();
        });
        //console.log(tw);
        trn.width(tw + 40);

        getBook();
        //FB.XFBML.parse(cnt[0]);
        //setTimeout(function() {cnt.trigger('resize')},500);
        cnt.find('.seat').click(function () {
            if ($(this).hasClass('occupied')) {
                //alert('Platsen är upptagen');
            } else {
                $(this).addClass('occupied');
                ar('/tripfinder.asmx/BookSeat', { oid: oid, id: id, seat: $(this).data('id'), wagon: $(this).parents('.wagon').data('id') }, function () {
                    //getBook();
                    updateTickets();
                    cnt.trigger('close');
                    if (wdShop.lastOrder)
                        wdShop.lastOrder.endPrice = 1;
                    wdShop.orderChanged();
                });
            }
        });
    });
};


