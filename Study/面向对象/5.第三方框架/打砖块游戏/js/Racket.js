/**
 * Created by Danny on 2015/9/6 2:10.
 */
(function(){
    // ������
    window.Racket = Class.extend({
        init : function(){
            //λ��
            this.x = game.width / 2 - 175 / 2;
            this.y = 600;
            //���
            this.w = 179;
            //���
            this.h = 37;
            //���¼�����
            this.bindMouseListener();
        },
        //��Ⱦ���������ÿִ֡��
        render : function(ctx,image){
            ctx.drawImage(image,this.x,this.y,this.w,this.h);
        },
        //���¼�����
        bindMouseListener : function(){
            var self = this;
            game.canvas.addEventListener("mousemove",function(event){
                self.x = event.offsetX;
            })
        }
    });
})();