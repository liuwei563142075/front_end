


//ҳ���ҵ���߼�
$(document).ready(function(){

    var book =  new Book()
    book.name='JavaScript�߼��̳�'
    book.normalPrice=144
    book.youhuijia=120
    book.author='������'
    book.buySum=100;
    book.publisher='������ѧ������'
    book.pages=1001
    book.images=[
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'}
    ]

    /*ʹ�ö����еķ�������*/
  /*  book.bindDOMDetail()
    book.bindDOMImage()*/

    book.init()

});