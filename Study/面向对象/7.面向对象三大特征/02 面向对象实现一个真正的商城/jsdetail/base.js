//定义产品对象
function Base(){
    /*产品名称*/
    this.name=''
    this.description=''
    /*普通价格*/
    this.normalPrice=144
    /*团购价格*/
    this.youhuijia=120
    /*已经购买的人数*/
    this.buySum=100;
    /*轮播图片列表*/
    this.images=[]
}
Base.prototype={
    init:function(){},
    /*普通购买*/
    buy:function(){},
    /*绑定图片列表*/
    bindDOMImage:function(){
        var str=''
        for(var i= 0,len=this.images.length;i<len;i++) {
            str+='<li>'
            str+='<img class="etalage_thumb_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='<img class="etalage_source_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='</li>'
        }
        $('#etalage').html(str)

        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    /*绑定详细信息*/
    bindDOMDetail:function(){},
    /*绑定事件*/
    bindEvents:function(){},
    /*团购*/
    groupBuy:function(){},
    /*添加到购物车*/
    addCart:function(){}
}