//�����Ʒ����
function Base(){
    /*��Ʒ����*/
    this.name=''
    this.description=''
    /*��ͨ�۸�*/
    this.normalPrice=144
    /*�Ź��۸�*/
    this.youhuijia=120
    /*�Ѿ����������*/
    this.buySum=100;
    /*�ֲ�ͼƬ�б�*/
    this.images=[]
}
Base.prototype={
    init:function(){},
    /*��ͨ����*/
    buy:function(){},
    /*��ͼƬ�б�*/
    bindDOMImage:function(){
        var str=''
        for(var i= 0,len=this.images.length;i<len;i++) {
            str+='<li>'
            str+='<img class="etalage_thumb_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='<img class="etalage_source_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='</li>'
        }
        $('#etalage').html(str)

        /*jquery���ʵ�ֵĻõ�Ƭ��Ч*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    /*����ϸ��Ϣ*/
    bindDOMDetail:function(){},
    /*���¼�*/
    bindEvents:function(){},
    /*�Ź�*/
    groupBuy:function(){},
    /*��ӵ����ﳵ*/
    addCart:function(){}
}