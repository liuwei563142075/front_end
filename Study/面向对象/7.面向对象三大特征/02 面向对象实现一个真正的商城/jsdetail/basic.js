//ҳ����Ч
//������
$(document).ready(function(c) {
    $('.alert-close').on('click', function(c){
        $('.message').fadeOut('slow', function(c){
            $('.message').remove();
        });
    });
});

$(document).ready(function(c) {
    $('.alert-close1').on('click', function(c){
        $('.message1').fadeOut('slow', function(c){
            $('.message1').remove();
        });
    });
});

$(document).ready(function(c) {
    $('.alert-close2').on('click', function(c){
        $('.message2').fadeOut('slow', function(c){
            $('.message2').remove();
        });
    });
});


/*�����Ĺرհ�ť*/
$(document).ready(function () {
    $('#activator').click(function(){
        $('#box').animate({'left':'0px'},500);
    });
    $('#boxclose').click(function(){
        $('#box').animate({'left':'-2300px'},500);
    });
});

$(document).ready(function(){

    //���� Ĭ������
    $(".toggle_container").hide();

    //�����ʾ����
    $(".trigger").click(function(){
        $(this).toggleClass("active").next().slideToggle("slow");
        return false;
    });

});