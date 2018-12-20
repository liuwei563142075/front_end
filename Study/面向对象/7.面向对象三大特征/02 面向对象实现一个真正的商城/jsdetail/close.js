//继承的固定格式
/*构造函数中写法*/

var Close = function(){
    Base.call(this, arguments);
    this.sizes=['X','XL','XXL']
    this.colors=['黄色','红色']
}
/*原型写法*/
Close.prototype = new Base();
/*重写 覆盖基类方法*/
Close.prototype.bindDOMDetail= function(){
    /*绑定元素*/
    $('#pname').html(this.name)
    $('#description').html(this.description)
    $('#price').html(this.normalPrice)
    $('#groupPrice').html(this.youhuijia)
    $('#buyCount').html(this.buySum)
}
Close.prototype.buy = function(){}
Close.prototype.bindSizes = function(){
        var str= ''
        str+= '<h3>尺寸</h3>'
        for(var i=0;i<this.sizes.length;i++){
            str+='<li><a href="#">'+this.sizes[i]+'</a></li>'
        }
    $('.sizes').html(str)
    }
Close.prototype.bindColors = function(){
    var str= ''
    str+= '<h3>颜色</h3>'
    for(var i=0;i<this.colors.length;i++){
        str+='<li><a href="#">'+this.colors[i]+'</a></li>'
    }
    $('.colors').html(str)
}
Close.prototype.init= function(){
    this.bindDOMDetail()
    this.bindDOMImage()
    this.bindSizes()
    this.bindColors()
}
