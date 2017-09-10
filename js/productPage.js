$(document).ready(function() {
    $('.sideMenu .sBtn').on('click', function(e) {
        var t=$(this);
        changeChannel(t.index('.sBtn'));
    });
    
    changeChannel(ChungTool.getUrlParameter('page')*1);

    
})  


function changeChannel(id){
    $('.mainContainer .mainTitle .categoryTxt').eq(id).addClass('active').siblings('.categoryTxt').removeClass('active');
    $('.mainContainer .productContainer').eq(id).addClass('active').siblings('.productContainer').removeClass('active');
    $('.mainContainer .sideMenu .sBtn').eq(id).addClass('active').siblings('.sBtn').removeClass('active');
    simpleShow($('.mainContainer .mainTitle .categoryTxt'))
    ChungTool.pageScrollAni(0);
}
