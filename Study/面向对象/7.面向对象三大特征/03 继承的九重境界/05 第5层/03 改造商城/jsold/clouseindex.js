


//页面的业务逻辑
$(document).ready(function(){
    /*实例化*/
    var clouse =  new Clouse()
    clouse.name='HM休闲服登山包33'
    clouse.description='棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰'
    clouse.normalPrice=144
    clouse.groupbuyPrice=120
    clouse.sizes=['S','M','L','XL','XXL']
    clouse.colors=['黄色','粉色','黑色','白色']
    clouse.buySum=100;
    clouse.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]

    /*使用对象中的方法属性*/
    /* clouse.bindDOMDetail()
    clouse.bindDOMImage()*/
    clouse.init()
});