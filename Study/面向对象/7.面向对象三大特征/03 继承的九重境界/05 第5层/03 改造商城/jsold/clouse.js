//�����Ʒ����
function Clouse(){
    Base.call(this, arguments);
    this.sizes =[]
    this.colors=[]
}
Clouse.prototype = new Base()
Clouse.prototype.init=function() {
    this.bindDOMImage()
    this.bindDOMDetail()
    this.bindSizes()
    this.bindColors()
}
Clouse.prototype.bindDOMDetail=function() {
    /*��Ԫ��*/
    $('#pname').html(this.name)
    $('#description').html(this.description)
    $('#price').html(this.normalPrice)
    $('#groupPrice').html(this.youhuijia)
    $('#buyCount').html(this.buySum)
}
Clouse.prototype.bindSizes = function() {
    var str= ''
    str+= '<h3>�ߴ�</h3>'
    for(var i=0;i<this.sizes.length;i++) {
        str+='<li><a href="#">'+this.sizes[i]+'</a></li>'
    }
    $('.sizes').html(str)
}
Clouse.prototype.bindColors = function() {
    var str= ''
    str+= '<h3>��ɫ</h3>'
    for(var i=0;i<this.colors.length;i++){
        str+='<li><a href="#">'+this.colors[i]+'</a></li>'
    }
    $('.colors').html(str)
}