/**
 * Created by Danny on 2015/9/7 1:35.
 */
(function(){
    // ϸ��������
    window.CellBlock = Class.extend({
        //��ʼ����
        //����type��ʾ������ɫ���Ϸ�ֵ0��1��2��3��4��5��6��7
        //���У�0��ʾû�С�1~7����ɫ�顣
        //row�У�col��
        init : function(color,col,row){
            //����new��ʱ�򴫽����Ĳ��������ö��������
            this.color = parseInt(color);
            this.col = parseInt(col);
            this.row = parseInt(row);
            //ͼƬ
            this.image = game.imagesResouces["block"];
        },
        //��Ⱦ�����������ÿִ֡��
        render : function(){
            if(this.color != 0){
                //�ڻ����ϻ���
                game.ctx.drawImage(this.image,20 * (this.color - 1) , 0 , 20 , 20 , this.row * 20 , this.col*20,20,20);
            }
        }
    });
})();