var isPad = false;
$(document).ready(function() {

    if (navigator.userAgent.match(/iPad/i) != null) {
        isPad = true
    }


    initChangePage();
    

    $('.p0 .pageContent').removeClass('hide');
    switchPage(0);


    setInterval(function() {
        // console.log($(window).width())
        if ($(window).width() <= 768) {
            var channel = 0;
            $('.mainContainer > .page').each(function(i) {
                if ($(this)[0].getBoundingClientRect().top < 150) {
                    channel = i;
                }
            })
            switchPage(channel);
        }


    }, 500)
})



function initChangePage() {
    var mom = $('.mainContainer');
    ChungTool.addWheelEvent($(window), function() {
        switchPage(ChungTool.returnClassNameWithFilter(mom, 'channel_') * 1 - 1);

    }, function() {
        switchPage(ChungTool.returnClassNameWithFilter(mom, 'channel_') * 1 + 1);

    })

    $('body').on('click', '.nav', function() {
        var t = $(this);
        console.log(t.index())
        switchPage(t.index())
    });

    ChungTool.addSwipeUpDownEvent($(window), function() {
        if (isPad) {
            console.log('up');
            switchPage(ChungTool.returnClassNameWithFilter(mom, 'channel_') * 1 - 1);

        }
    }, function() {
        if (isPad) {
            console.log('d');
            switchPage(ChungTool.returnClassNameWithFilter(mom, 'channel_') * 1 + 1);
        }
    })


}

function switchPage(id) {
    var mom = $('.mainContainer');

    if (id >= 0 && id < mom.find('> .page').length) {
        ChungTool.removeClassWithFilter(mom, 'channel_');
        mom.addClass('channel_' + id);
    } else {
        return
    }

    if (id == 0) {
        $('.menuBtnBox .menuTxt').removeClass('show');
            $("#header .mainIcon").addClass('show');

    } else {
        $('.menuBtnBox .menuTxt').addClass('show');
            $("#header .mainIcon").removeClass('show');


    }

    var page = $(".p" + id);

    if (ChungTool.isPhone()) {
        return;
    }
    // if (id == 0) {
    //     var tl = new TimelineMax();
    //     tl.set()
    // }
    // TweenMax.killAll();
    var tl = new TimelineMax();
    tl.set(page.find('.title'), { perspective: 1000, scale: 0.2 })
        .set(page.find('.aniTxt:nth-child(2n+1)'), { autoAlpha: 0, rotationY: 60, transformOrigin: '100% 0 -100px' })
        .set(page.find('.aniTxt:nth-child(2n)'), { autoAlpha: 0, rotationY: -60, transformOrigin: '0% 0 -100px' })
        .set(page.find('.aniDivLeftIn'), { autoAlpha: 0, position: 'relative', left: 50 })
        .set(page.find('.aniDivTopIn'), { autoAlpha: 0, position: 'relative', top: 50 })
        .set(page.find('.containerBg'), { scale: 1.1 })

        .to(page.find('.title'), 1.2, { scale: 1, ease: Power3.easeOut })
        .to(page.find('.containerBg'), 12, { scale: 1, ease: Power3.easeOut }, 0)
        .staggerTo(page.find('.aniTxt'), 1.2, { autoAlpha: 1, rotationY: 0, ease: Power3.easeOut }, 0.1, 0)
        .staggerTo(page.find('.aniDivLeftIn'), 1.2, { autoAlpha: 1, left: 0, ease: Power3.easeOut }, 0.1, 0.3)
        .staggerTo(page.find('.aniDivTopIn'), 1.2, { autoAlpha: 1, top: 0, ease: Power3.easeOut }, 0.1, 0.3)



}