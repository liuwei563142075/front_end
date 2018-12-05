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

function _xingzuo(data,num) {
    this.data = data;
    this.dom = $("<div></div>").addClass("item num-"+num);
    this.config = {jqueryContainer:$(".xingzuo")}
    this.__init__();
}
_xingzuo.prototype = {
    __init__:function() {
        this.bindDom();
        this.bindEvent();
    },
    bindDom:function() {
        var content = '<div class="image"></div>';
        content += '<div class="description">' +
            '<p class="name">{{name}}}</p>' +
            '<p class="time">{{time}}</p>' +
            '<div class="mark"></div>' +
            '</div>';
        this.dom.html($$.artTemplate(content,this.data)).appendTo(this.config.jqueryContainer);
    },
    bindEvent:function() {
        var that = this;
        that.dom.hover(function() {
            that.dom.toggleClass("is-hover");
        });
        that.dom.on("click",function() {
            that.dom.toggleClass("selected");
        })
    }
}

for (var i = 0; i < data.length; i++) {
  new _xingzuo(data[i],i);
}