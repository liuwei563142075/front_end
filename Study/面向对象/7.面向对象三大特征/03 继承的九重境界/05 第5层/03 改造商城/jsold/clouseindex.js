


//ҳ���ҵ���߼�
$(document).ready(function(){
    /*ʵ����*/
    var clouse =  new Clouse()
    clouse.name='HM���з���ɽ��33'
    clouse.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
    clouse.normalPrice=144
    clouse.groupbuyPrice=120
    clouse.sizes=['S','M','L','XL','XXL']
    clouse.colors=['��ɫ','��ɫ','��ɫ','��ɫ']
    clouse.buySum=100;
    clouse.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]

    /*ʹ�ö����еķ�������*/
    /* clouse.bindDOMDetail()
    clouse.bindDOMImage()*/
    clouse.init()
});