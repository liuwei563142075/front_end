
//页面的业务逻辑
$(document).ready(function() {

    /*实例化*/
    var ebook = new eBook()
    ebook.name = 'JavaScript高级编程第四版'
    ebook.description = 'js畅销书籍'
    ebook.normalPrice = 144
    ebook.groupbuyPrice = 120
    ebook.author = '张三'
    /*出版社*/
    ebook.publisher = '清华大学出版社'
    /*出版时间*/
    ebook.publishDate = '2016-09-09'
    /*页数*/
    ebook.pages = 1000
    /*分类*/
    ebook.type = 'IT - 前端开发 - JS'
    ebook.buySum = 100;
    ebook.images=[
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'}
    ]


    /*使用对象中的方法属性*/
  /*  ebook.bindDOMDetail()
    ebook.bindDOMImage()*/

    ebook.init()
});
