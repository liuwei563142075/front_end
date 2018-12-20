
//页面的业务逻辑
$(document).ready(function(){
    var close =  new Close()
    close.name='HM休闲服登山包33'
    close.description='棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰'
    close.normalPrice=144
    close.groupbuyPrice=120
    close.buySum=100;
    close.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]

    /*使用对象中的方法属性*/
  /*  close.bindDOMDetail()
    close.bindDOMImage()
    close.bindSizes()
    close.bindColors()*/

    close.init()

});