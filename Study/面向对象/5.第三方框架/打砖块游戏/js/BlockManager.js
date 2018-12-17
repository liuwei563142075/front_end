/**
 * Created by Danny on 2015/9/6 0:09.
 */
(function(){
    window.BlockManager = Class.extend({
        init : function(game){
            this.game = game;

            //��ͼ
            this.map = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,0,2,0,0,0,0,0,0,0],
                [0,0,1,0,0,3,2,0,0,2,0,0,2],
                [0,1,0,0,0,0,3,2,0,2,0,2,3],
                [1,0,0,0,0,0,0,3,2,3,2,3,0],
                [0,1,0,0,0,0,0,0,3,0,3,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
            ];

            //������
            this.rowLength = this.map.length;
            this.colLength = this.map[0].length;

            this.blocks = [[],[],[],[],[],[],[],[],[]];       //ת������

            this.createBlocks();    //����ת��
        },
        //���ݵ�ͼ����ת��
        createBlocks : function(){
            for(var row = 0 ; row < this.rowLength ; row++){
                for(var col = 0 ; col < this.colLength ; col++){
                    var color = this.map[row][col];
                    if(color != 0 ) {
                        //ʵ����ת��
                        this.blocks[row][col] = new Block(color, 97 * col, 40 * row , 97 ,36,row,col);
                    }else{
                        this.blocks[row][col] = null;
                    }
                }
            }
        },
        //��Ⱦ����ת��
        renderAllBlocks : function(ctx,image){
            for(var row = 0 ; row < this.rowLength ; row++){
                for(var col = 0 ; col < this.colLength ; col++){
                    if(this.blocks[row][col] != null){
                        this.blocks[row][col].render(ctx,image);
                    }
                }
            }
        },
        //��������С��
        updateAllBlocks : function(){
            for(var row = 0 ; row < this.rowLength ; row++){
                for(var col = 0 ; col < this.colLength ; col++){
                    if(this.blocks[row][col] != null){
                        this.blocks[row][col].update();
                    }
                }
            }
        }
    });
})();