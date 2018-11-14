/*
circle: x,y,r,fillstyle,strokeStyle,opacity
 */
function Circle( option ) {
    this._init( option );
}
Circle.prototype = {
    _init:function( option ) {
        this.x = option.x;
        this.y = option.y;
        this.r = option.r;
        this.fillStyle = option.fillStyle;
        this.strokeStyle = option.strokeStyle;
        this.opacity = option.opacity;
    },
    render:function ( ctx ) {
        ctx.save();

        ctx.beginPath();
        ctx.globalAlpha = this.opacity;

        ctx.arc(this.x,this.y,this.r,0*Math.PI,2*Math.PI);

        ctx.fillStyle = this.fillStyle;
        ctx.fill();

        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();

        ctx.restore();
    }
}