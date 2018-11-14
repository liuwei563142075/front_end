/*
rect: x, y, w, h, fillStyle, strokeStyle, opacity, scale, rotate
 */
function DrawRect( option ) {
    this._init( option );
}
DrawRect.prototype = {
    _init:function( option ) {
        this.x = option.x || 0;
        this.y =  option.y || 0;
        this.width = option.width || 10;
        this.height = option.height || 10;
        this.fillStyle = option.fillStyle;
        this.strokeStyle = option.strokeStyle;
        this.opacity = option.opacity || 1; // 透明度
        this.scaleX = option.scaleX || 1;  // 缩放
        this.scaleY = option.scaleY || 1;
        this.rotate = option.rotate;
    },
    render:function( ctx ) {
        ctx.save();

        // 一定要,不然出现重影
        ctx.beginPath();

        ctx.translate(this.x,this.y);
        ctx.scale(this.scaleX,this.scaleY);
        ctx.rotate(this.rotate * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.rect(0,0,this.width,this.height);
        ctx.fillStyle = this.fillStyle;
        ctx.fill();

        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();

        ctx.restore();
    }
}