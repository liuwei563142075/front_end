


//页面的业务逻辑
$(document).ready(function(){

    var book =  new Book()
    book.name='JavaScript高级教程'
    book.normalPrice=144
    book.youhuijia=120
    book.author='大作家'
    book.buySum=100;
    book.publisher='北京大学出版社'
    book.pages=1001
    book.images=[
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'}
    ]

    /*使用对象中的方法属性*/
  /*  book.bindDOMDetail()
    book.bindDOMImage()*/

    book.firstload()

});