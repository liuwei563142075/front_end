
//ҳ���ҵ���߼�
$(document).ready(function(){
    var close =  new Close()
    close.name='HM���з���ɽ��33'
    close.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
    close.normalPrice=144
    close.groupbuyPrice=120
    close.buySum=100;
    close.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]

    /*ʹ�ö����еķ�������*/
  /*  close.bindDOMDetail()
    close.bindDOMImage()
    close.bindSizes()
    close.bindColors()*/

    close.init()

});