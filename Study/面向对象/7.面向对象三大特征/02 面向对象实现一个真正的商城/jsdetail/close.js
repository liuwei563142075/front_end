//�̳еĹ̶���ʽ
/*���캯����д��*/

var Close = function(){
    Base.call(this, arguments);
    this.sizes=['X','XL','XXL']
    this.colors=['��ɫ','��ɫ']
}
/*ԭ��д��*/
Close.prototype = new Base();
/*��д ���ǻ��෽��*/
Close.prototype.bindDOMDetail= function(){
    /*��Ԫ��*/
    $('#pname').html(this.name)
    $('#description').html(this.description)
    $('#price').html(this.normalPrice)
    $('#groupPrice').html(this.youhuijia)
    $('#buyCount').html(this.buySum)
}
Close.prototype.buy = function(){}
Close.prototype.bindSizes = function(){
        var str= ''
        str+= '<h3>�ߴ�</h3>'
        for(var i=0;i<this.sizes.length;i++){
            str+='<li><a href="#">'+this.sizes[i]+'</a></li>'
        }
    $('.sizes').html(str)
    }
Close.prototype.bindColors = function(){
    var str= ''
    str+= '<h3>��ɫ</h3>'
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
