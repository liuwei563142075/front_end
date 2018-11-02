'use strict'

$(function() {

    // 3.设备屏幕改变，动态
    function resize() {
        // 1.获取设备屏幕宽度
        var screenWidth = $(window).width();//768
        var lg = screenWidth < 768;

        $("#carousel-itcast-generic > .carousel-inner > .item").each(function (i, item) {
            var imgSrc = lg ? $(item).data('image-xs'):$(item).data('image-lg');

            $(item).css('backgroundImage', 'url("' + imgSrc + '")');

            if(lg) {
                $(item).html('<img src="'+imgSrc+'" alt="" />');
            }else {
                $(item).empty();
            }
        });
    }
    $(window).on('resize',resize).trigger('resize');

    // 设置特别推荐标签页可横向滚动
    var navappWidth = 50;
    $("#application>.container>.nav-container>.nav-application>li").each(function(index,element) {
        navappWidth += element.clientWidth;
    });
    if(navappWidth > $(window).width()) {
        $("#application>.container>.nav-container>.nav-application").css('width',navappWidth);
        $("#application>.container>.nav-container").css({"overflow-x":"scroll"});
    }else {
        $("#application>.container>.nav-container>.nav-application").css('width','100%');
        $("#application>.container>.nav-container").css({"overflow-x":"visible"});
    }

    /* news */
    $("#news .list-group-item").on("click",function() {
        $("#news .list-group-item").removeClass("active");
        $(this).addClass("active");
    })
});