
//ҳ���ҵ���߼�
$(document).ready(function() {

    /*ʵ����*/
    var ebook = new eBook()
    ebook.name = 'JavaScript�߼���̵��İ�'
    ebook.description = 'js�����鼮'
    ebook.normalPrice = 144
    ebook.groupbuyPrice = 120
    ebook.author = '����'
    /*������*/
    ebook.publisher = '�廪��ѧ������'
    /*����ʱ��*/
    ebook.publishDate = '2016-09-09'
    /*ҳ��*/
    ebook.pages = 1000
    /*����*/
    ebook.type = 'IT - ǰ�˿��� - JS'
    ebook.buySum = 100;
    ebook.images=[
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'}
    ]


    /*ʹ�ö����еķ�������*/
  /*  ebook.bindDOMDetail()
    ebook.bindDOMImage()*/

    ebook.init()
});
