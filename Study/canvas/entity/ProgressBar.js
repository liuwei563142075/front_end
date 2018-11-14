function ProgressBar( option ) {
    this.__init( option );
}
ProgressBar.prototype = {
    __init:function ( option ) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.width = option.width;
        this.height = option.height;
        this.fill = option.fill;
        this.stroke = option.stroke;

        // innerRect就相当于一个dom元素
        var innerRect = new Konva.Rect({
            id:"innerRect", // 给它一个id
            x:this.x,
            y:this.y,
            width:0,
            height:this.height,
            fill:this.fill
        });
        var outerRect = new Konva.Rect({
            x:this.x,
            y:this.y,
            width:this.width,
            height:this.height,
            stroke:this.stroke
        });

        var group = new Konva.Group();
        group.add(innerRect);
        group.add(outerRect);

        this.group = group;
    },
    show:function( layer ) {
        layer.add(this.group);
    },
    changeValue:function( val ) {
        if(val > 1) {
            val = val / this.width;
        }
        var innerRect = this.group.findOne("#innerRect");
        innerRect.to({
            width:val*this.width,
            duration:.5,// 5s完成这个动画
            easing:Konva.Easings.EaseIn
        });
    }
}