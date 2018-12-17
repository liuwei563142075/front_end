/**
 * Created by Danny on 2015/9/7 2:46.
 */
(function () {
    //�������е���Ϸ�����̬
    var allType = {
        "I": [
            ["0010", "0010", "0010", "0010"],
            ["0000", "1111", "0000", "0000"]
        ],
        "L": [
            ["0200", "0200", "0220", "0000"],
            ["0000", "2220", "2000", "0000"],
            ["2200", "0200", "0200", "0000"],
            ["0020", "2220", "0000", "0000"]
        ],
        "J": [
            ["0300", "0300", "3300", "0000"],
            ["3000", "3330", "0000", "0000"],
            ["3300", "3000", "3000", "0000"],
            ["3330", "0030", "0000", "0000"]
        ],
        "O": [
            ["0440", "0440", "0000", "0000"]
        ],
        "S": [
            ["0550", "0500", "5500", "0000"],
            ["5000", "5550", "0050", "0000"]
        ],
        "Z": [
            ["6600", "0600", "0660", "0000"],
            ["0060", "6660", "6000", "0000"]
        ],
        "T": [
            ["7700", "0700", "0770", "0000"],
            ["0070", "7770", "7000", "0000"]
        ]
    }
    //��Ϸ���
    window.UnitBlock = Class.extend({
        //��ʼ��
        //��Ͽ鶼��4*4�ĸ���
        //type��ʾ���ͣ��Ϸ�ֵILJOSZT
        //direction��ʾ���򣬺Ϸ�ֵ0��1��2��3
        //row��ʾ��4*4�ĸ������Ͻǵ���
        //col��ʾ��4*4�ĸ������Ͻǵ���
        init: function () {
            //����
            this.direction = 0;
            //�Լ��������������
            var typeString = "ILJOSZT";
            this.type = typeString.substr(parseInt(Math.random() * 7),1);
            //4*4��̬��
            this.ff = allType[this.type][this.direction];
            //��ת�������
            this.directionAmount = allType[this.type].length;

            //��ǰ��������Ͻ����ڵ��С���
            this.row = 0;
            this.col = 7;
            //�Լ���С����
            this.blocks = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]];

            this.changeBlocksByFF();
            //�󶨼��̼���
            this.bindKeyListener();
        },
        //����4*4��̬�������Լ���С����
        changeBlocksByFF: function () {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    var color = this.ff[i].substr(j, 1);
                    this.blocks[i][j] = new CellBlock(color, this.row + i, this.col + j);
                }
            }
        },
        //ÿ��ִ��
        update: function () {
            //���Լ���С���飬�����Լ���4*4��̬��������
            //����һ�У��ж��ܷ�����
            //�ж���������Ƿ����
            this.moveOneRowDown();
        },
        //�����ƶ�һ��
        moveOneRowDown : function(){
            if(this.checkIsCanDowm(this)){
                // �ܹ��ƶ�
                this.row++;         //����1
                this.changeBlocksByFF();
            }else{
                // ���ܹ��ƶ�
                game.state = 1;     //������Ϸ��״̬��1��ʾ�ж�������
                //�����Ϸ�Ļ����
                game.activeBlock = null;
                //���Լ���ӽ����ͼ
                game.map.addUnitBlockIntoBlockMap(this);
                return;
            }
        },
        //�����ƶ�һ��
        moveOneColLeft : function(){
            if(this.checkIsCanLeft()) {
                this.col--;
                this.changeBlocksByFF();
            }
        },
        //���ұ��ƶ�һ��
        moveOneColRight : function(){
            if(this.checkIsCanRight()) {
                this.col++;
                this.changeBlocksByFF();
            }
        },
        //��ת
        turnRound : function(){
            if(this.checkIsCanTurn()){
                this.direction = (this.direction + 1) % this.directionAmount;
                this.ff = allType[this.type][this.direction];
                this.changeBlocksByFF();
            }
        },
        //���������ж��Ƿ��������ƶ�
        checkIsCanDowm : function(){
            //�ж��Ƿ񱻵�ǰ���ڵ�С�����赲
            for(var i = 0 ; i < 4 ; i++) {
                for (var j = 0; j < 4; j++) {
                    var unitBlockColor = this.ff[i].substr(j, 1);
                    var mapBlockColor = game.map.blockMap[i + this.row + 1].substr(j + this.col + 3, 1);
                    if (unitBlockColor != 0 && mapBlockColor != 0) {
                        return false;
                    }
                }
            }
            return true;
        },
        //���������ж��Ƿ���������ƶ�
        checkIsCanLeft : function(){
            //�ж��Ƿ񱻵�ǰ���ڵ�С�����赲
            for(var i = 0 ; i < 4 ; i++){
                for(var j = 0 ; j < 4 ; j++){
                    //��ȡ��һλunitBlockColorֵ
                    var unitBlockColor = this.ff[i].substr(j, 1);
                    //��ȡ��ͼ�����һλ
                    var mapBlockColor = game.map.blockMap[i + this.row].substr(j + this.col + 3 - 1, 1);
                    //�������������0����ô��ʾ�����ˣ������ƶ�
                    if(unitBlockColor != 0 && mapBlockColor != 0){
                        return false;
                    }
                }
            }
            return true;
        },
        //���������ж��Ƿ������ұ��ƶ�
        checkIsCanRight : function(){
            //�ж��Ƿ񱻵�ǰ���ڵ�С�����赲
            for(var i = 0 ; i < 4 ; i++){
                for(var j = 0 ; j < 4 ; j++){
                    //��ȡ��һλunitBlockColorֵ
                    var unitBlockColor = this.ff[i].substr(j, 1);
                    //��ȡ��ͼ�����һλ
                    var mapBlockColor = game.map.blockMap[i + this.row].substr(j + this.col + 3 + 1, 1);
                    //�������������0����ô��ʾ�����ˣ������ƶ�
                    if(unitBlockColor != 0 && mapBlockColor != 0){
                        return false;
                    }
                }
            }
            return true;
        },
        //���������ж��Ƿ�����ת
        checkIsCanTurn : function(){
            var newDiction = (this.direction + 1) % this.directionAmount;
            var newFF = allType[this.type][newDiction];

            //�ж��Ƿ񱻵�ǰ���ڵ�С�����赲
            for(var i = 0 ; i < 4 ; i++) {
                for (var j = 0; j < 4; j++) {
                    var unitBlockColor = newFF[i].substr(j, 1);
                    var mapBlockColor = game.map.blockMap[i + this.row].substr(j + this.col + 3, 1);
                    if (unitBlockColor != 0 && mapBlockColor != 0) {
                        return false;
                    }
                }
            }
            return true;
        },
        //��Ⱦ�Լ�������С����
        render: function () {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    this.blocks[i][j].render();
                }
            }
        },
        // �󶨼��̼���
        bindKeyListener : function(){
            var self = this;
            document.addEventListener("keydown",function(e){

                if(e.keyCode == 37){
                    //���
                    self.moveOneColLeft();
                }else if(e.keyCode == 39){
                    //�ұ�
                    self.moveOneColRight();
                }else if(e.keyCode == 38){
                    //��ת
                    self.turnRound();
                }
            });
        }
    });
})();