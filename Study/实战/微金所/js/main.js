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



});