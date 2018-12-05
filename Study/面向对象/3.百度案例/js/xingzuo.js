//��˼����������
/*var str*/
var data = [
    {
        name:'������',
        time:'3.21-4.19'
    }
    ,{
        name:'��ţ��',
        time:'4.20-5.20'
    }
    ,{
        name:'˫����',
        time:'5.21-6.21'
    }
    ,{
        name:'��з��',
        time:'6.22-7.22'
    }
    ,{
        name:'ʨ����',
        time:'7.23-8.22'
    }
    ,{
        name:'��Ů��',
        time:'8.23-9.22'
    }
    ,{
        name:'�����',
        time:'9.23-10.23'
    }
    ,{
        name:'��Ы��',
        time:'10.24-11.22'
    }
    ,{
        name:'������',
        time:'11.23-12.21'
    }
    ,{
        name:'Ħ����',
        time:'12.22-1.19'
    }
    ,{
        name:'ˮƿ��',
        time:'1.20-2.18'
    }
    ,{
        name:'˫����',
        time:'2.19-3.20'
    }
];

function xingzuo(data,num){
    this.data = data;
    this.dom = $('<div></div>').addClass('item num-'+num)
    this.config={jqueryContainer:$('.xingzuo')}
    this.init()
}
xingzuo.prototype={
    init:function(){
        this.bindDOM()
        this.bindEvents()
    },

    bindDOM:function(){
        var str =''
        str +=' <div class="image"></div>'
        str +='<div class="description">'
        str +='<p class="name">{{name}}</p>'
        str +='<p class="time">{{time}}</p>'
        str +='<div class="mark"></div>'
        str +='</div>'
        this.dom.html($$.artTemplate(str, this.data)).appendTo(this.config.jqueryContainer)

    },
    bindEvents:function(){
        var that = this;

        /*����������뿪*/
        /*ǰ�����ǽ�������˼�� -- ���������б��*/
        this.dom.on('mouseenter',function(){
            that.dom.addClass('is-hover')
        }).on('mouseleave',function(){
            that.dom.removeClass('is-hover')
        }).on('click',function(){
            that.dom.toggleClass('selected')
        })
    }
}


//�ҵ�ͬλ
for(var i=0;i<data.length;i++){
    new xingzuo(data[i],i)
    //item.init()
}
