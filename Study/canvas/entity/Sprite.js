function Sprite( option ) {
    this._init( option )
}
Sprite.prototype = { // 动画对象
    _init:function ( option ) {
        this.imgSrc = option.imgSrc || "";
        this.originWidth = option.originWidth || 40; // 起始w
        this.originHeight = option.originHeight || 65; // 起始h
        this.drawX = option.drawX === 0 ? 0 : (option.drawX || 10); //注意0||10 == 0 解决用户设置为0的bug
        this.drawY = option.drawY === 0 ? 0 : (option.drawY || 10);
        this.drawWidth = option.drawWidth || 40;
        this.drawHeight = option.drawHeight || 65;

        this.frame = option.frame === 0 ? 0 : (option.frame || 10);
        this.dir = 0;
    },
    show:function( ctx ) {
        var img = new Image();
        img.src = this.imgSrc;
        var _self = this;
        img.onload = function() {
            var frameIndex = 0;
            setInterval(function() {
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
                ctx.drawImage(
                    img,
                    frameIndex * _self.originWidth,
                    _self.dir * _self.originHeight,
                    _self.originWidth,
                    _self.originHeight,
                    _self.drawX,
                    _self.drawY,
                    _self.drawWidth,
                    _self.drawHeight
                );
                frameIndex++;
                frameIndex %= 4;
            },1000 / _self.frame);
        }
    },
    changeDir:function( dir ) {
        switch (dir) {
            case "up":
                this.dir = 3;
                break;
            case "down":
                this.dir = 0;
                break;
            case "left":
                this.dir = 1;
                break;
            case "right":
                this.dir = 2;
                break;
        }
    }
}