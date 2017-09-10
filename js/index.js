var hd = $('#header');

$(document).ready(function() {

    initHeader();
    initPop();
    initVisible();
    initInterCom();
})

function initInterCom() {
    var APP_ID = "cd93gkwx";

     window.intercomSettings = {
        app_id: APP_ID
    };
    (function() {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") { ic('reattach_activator');
            ic('update', intercomSettings); } else {
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
    // Intercom('onShow');

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
    }, 200)
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
}