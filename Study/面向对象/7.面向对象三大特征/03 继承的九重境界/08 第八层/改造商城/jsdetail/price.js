
//�㷨���� --����ͬһ�������ռ��� 
var Price={};

//vip �ͻ��Żݲ�����
Price.vipPrice = function() {
    this.discount = 0.5;
    this.getPrice = function(price) {
        return price * this.discount;
    }
}

//�Ͽͻ��Żݲ�����:
Price.oldPrice = function() {
    this.discount = 0.3;
    this.getPrice = function(price) {
        return price * this.discount;
    }
}

//��ͨ�ͻ�
Price.NormlPrice = function() {
    this.discount = 1;
    this.getPrice = function(price) {
        return price ;
    }
}




//2. ������
function Context() {
    this.name = '';
//    ������ϵ
    this.strategy = null;
    this.price = 0;
}

Context.prototype.set = function(name, strategy, price) {
    this.name = name;
    this.strategy = strategy;
    this.price = price;
}

Context.prototype.bind = function(id) {
    document.getElementById(id).innerHTML=this.strategy.getPrice(this.price);;
}
