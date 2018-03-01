$(document).ready(function() {
    $('.sideMenu .sBtn').on('click', function(e) {
        var t = $(this);
        changeChannel(t.index('.sBtn'));
    });

    changeChannel(ChungTool.getUrlParameter('page') * 1, ChungTool.getUrlParameter('rel'));


})


function changeChannel(id, rel) { 

    // console.log(id, rel)

    $('.mainContainer .mainTitle .categoryTxt').eq(id).addClass('active').siblings('.categoryTxt').removeClass('active');
    $('.mainContainer .productContainer').eq(id).addClass('active').siblings('.productContainer').removeClass('active');
    $('.mainContainer .sideMenu .sBtn').eq(id).addClass('active').siblings('.sBtn').removeClass('active');


    ChungTool.removeClassWithFilter($('#ProductPage .bg'), 'ch');
    $('#ProductPage .bg').addClass('ch' + id);
    simpleShow($('.mainContainer .mainTitle .categoryTxt'))

    // console.log($('.href_'+rel).offset().top)
    if (ChungTool.isNull(rel)) {
        ChungTool.pageScrollAni(0);
    } else {
        ChungTool.pageScrollAni($('.href_'+rel).offset().top-50);

    }

}