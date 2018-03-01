var hd = $('#header');
initInterCom();
initGa();
$(document).ready(function() {

    initHeader();
    initPop();
    initVisible();
    initVideoBtn();


    var is_iPad = navigator.userAgent.match(/iPad/i) != null;
    // console.log(is_iPad);

    if (navigator.userAgent.match(/iPad/i) != null) {
        viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    }

})

function initGa() {
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-105810992-1', 'auto');
    ga('send', 'pageview');

    // console.log(123);

    $('body').on('click', '.gaBtn', function() {
        var t=$(this);
        var inv=t.attr('data-ga');
        console.log('EVENT', inv);
        ga('send', 'event', 'eventTag', inv);
    });

    

}

function initVideoBtn() {
    $('.videoBtn').on('click', function(e) {
        var t = $(this);
        simpleShow($('.videoPop'));
        ChungTool.addYouTube($('.videoPop').find('.container'), t.attr('data-videoId'));
    });

    $('.videoPop .clozBtn').on('click', function(e) {
        $('.videoPop .container').empty();

    });


}

function initInterCom() {
    var APP_ID = "lubw9wsf";


    (function() {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") {
            ic('reattach_activator');
            ic('update', intercomSettings);
        } else {
            var d = document;
            var i = function() { i.c(arguments) };
            i.q = [];
            i.c = function(args) { i.q.push(args) };
            w.Intercom = i;

            function l() {
                var s = d.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://widget.intercom.io/widget/' + APP_ID;
                var x = d.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }
            if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); }
        }
    })()


    window.Intercom('boot', {
        app_id: APP_ID,
    });


    $('body').on('click', '.contactOnlineBtn', function() {
        Intercom('show');

    });


}



function initVisible() {
    $('body').waitForImages({
        finished: function() {
            initVisible();
        },
        each: function(loaded, count, success) {
            var r = Math.floor(loaded / count * 100);
            // console.log(loaded,count)
            // $('.loadingPage').find('.txt').html(r + '%');

        },
        waitForAll: true
    });
}

function initVisible() {
    setInterval(function() {
        $('.fadeInBox').each(function() {
            if ($(this).visible(true)) {
                $(this).addClass('fadeInUp');
            }
        })
    }, 100)
}


function initPop() {
    $('body').on('click', '.popClozBtn', function() {
        var t = $(this);
        simpleHide(t.closest('.popPage'))
    });

    $('body').on('click', '.popBtn', function() {
        var t = $(this);
        simpleShow($('.' + t.attr('data-target')));
    });
}

function initHeader() {
    var ani = new TimelineMax();

    ani.set(hd.find('.menuContainer'), { perspective: 1000 })
        .set(hd.find('.menuPop .menuContainer > .mBtn'), { autoAlpha: 0, rotationY: -60, transformOrigin: '40% 0%' })
        .staggerTo(hd.find('.menuPop .menuContainer > .mBtn'), 1, { rotationY: 0, autoAlpha: 1, marginLeft: 0, ease: Back.easeOut }, .05)
        .pause();


    $('body').on('click', '#header .menuBtn', function() {
        simpleShow(hd.find('.menuPop'));
        ani.restart();
    });



    $('body').on('click', '#header .menuPop .clozBtn', function() {
        simpleHide(hd.find('.menuPop'));

    });


    var lastScrollTop = 0;

    $(window).scroll(function() {
        if (!ChungTool.isPhone()) {
            return;
        }

        var st = $(this).scrollTop();
        // if (st <= lastScrollTop || st< 100) {
        if ( st< 100) {
            // show
            $('.menuTxt').removeClass('scrollHide');
            $('.mainIcon').removeClass('scrollHide');
        } else {

            // hide
            $('.menuTxt').addClass('scrollHide');
            $('.mainIcon').addClass('scrollHide');
        }
        lastScrollTop = st;



        if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
            $('.scrollArr').addClass('hide');
        } else {
            $('.scrollArr').removeClass('hide');
        }
    });
}