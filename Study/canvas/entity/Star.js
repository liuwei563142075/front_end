/*
    类似于一颗有行星带的行星/恒星
 */
function Star( option ) {
    this.__init( option );
}
Star.prototype = {
    __init:function ( option ) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        this.fill = option.fill; // 内圆填充的颜色
        this.stroke = option.stroke; // ring边的颜色
        this.opacity = option.opacity; // 圆环填充的颜色为
        this.strokeWidth = option.strokeWidth || 0;
        this.dash = option.dash || null;
        this.text = option.text || '';
        this.fontSize = option.fontSize;
        this.color = option.color;

        // 创建一个用来盛放行星和行星带的组
        var group = new Konva.Group({
            x: this.x,
            y: this.y
        });

        // 画一个星
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            radius : this.innerRadius,
            fill: this.fill
        });
        // 给星一个文本内容
        var innerCircleText = new Konva.Text({
            x: 0 - this.outerRadius / 2,
            y: 0 - this.fontSize / 2,
            width: this.outerRadius,
            text: this.text,
            fontStyle: 'bold',
            fontSize: this.fontSize,
            align: "center",
            fill: this.color
        });

        // 画行星带
        var outerRing = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.fill,
            opacity: this.opacity,
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            dash: this.dash
        });

        group.add(innerCircle);
        group.add(innerCircleText);
        group.add(outerRing);
        this.group = group;
    },
    getGroup:function() {
        return this.group;
    },
    run:function( layer ) {
        layer.add(this.group);
    }
}