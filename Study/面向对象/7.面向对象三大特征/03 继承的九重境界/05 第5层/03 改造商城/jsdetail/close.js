
var Close = Base.extend({
    init: function(){
        this.sizes=['X','XL','XXL']
        this.colors=['��ɫ','��ɫ']
    },
    bindDOMDetail : function(){
    /*��Ԫ��*/
    $('#pname').html(this.name)
    $('#description').html(this.description)
    $('#price').html(this.normalPrice)
    $('#groupPrice').html(this.youhuijia)
    $('#buyCount').html(this.buySum)
},
    buy :  function(){},
    bindSizes : function(){
        var str= ''
        str+= '<h3>�ߴ�</h3>'
        for(var i=0;i<this.sizes.length;i++){
            str+='<li><a href="#">'+this.sizes[i]+'</a></li>'
        }
        $('.sizes').html(str)
    },
    bindColors : function(){
        var str= ''
        str+= '<h3>��ɫ</h3>'
        for(var i=0;i<this.colors.length;i++){
            str+='<li><a href="#">'+this.colors[i]+'</a></li>'
        }
        $('.colors').html(str)
    },
    firstload : function(){
        this.bindDOMDetail()
        this.bindDOMImage()
        this.bindSizes()
        this.bindColors()
    }

});

