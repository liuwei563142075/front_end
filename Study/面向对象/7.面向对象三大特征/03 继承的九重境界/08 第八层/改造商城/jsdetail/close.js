
var Close = Base.extend({
    init: function(){
        this.sizes=['X','XL','XXL']
        this.colors=['黄色','红色']
        this.type='old'
    },
    bindDOMDetail : function(){
    /*绑定元素*/
    $('#pname').html(this.name)
    $('#description').html(this.description)
    $('#price').html(this.normalPrice)
    $('#groupPrice').html(this.youhuijia)
    $('#buyCount').html(this.buySum)
},
    buy :  function(){},
    bindSizes : function(){
        var str= ''
        str+= '<h3>尺寸</h3>'
        for(var i=0;i<this.sizes.length;i++){
            str+='<li><a href="#">'+this.sizes[i]+'</a></li>'
        }
        $('.sizes').html(str)
    },
    bindColors : function(){
        var str= ''
        str+= '<h3>颜色</h3>'
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
        this.bindPrice()
    },
    bindPrice:function(){
        // 上下文
        var context = new Context();
        var strategy;
        if(this.type === 'old'){
            //老客户
            strategy = new Price.oldPrice();
        }else if(this.type === 'vip') {
            //vip客户
            strategy = new Price.vipPrice();
        }else{

        }
        context.set ('老客户', strategy, this.normalPrice);
        context.bind('price')
    }
});

