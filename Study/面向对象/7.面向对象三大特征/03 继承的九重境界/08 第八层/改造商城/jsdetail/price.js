
//算法家族 --放在同一的命名空间中 
var Price={};

//vip 客户优惠策略类
Price.vipPrice = function() {
    this.discount = 0.5;
    this.getPrice = function(price) {
        return price * this.discount;
    }
}

//老客户优惠策略类:
Price.oldPrice = function() {
    this.discount = 0.3;
    this.getPrice = function(price) {
        return price * this.discount;
    }
}

//普通客户
Price.NormlPrice = function() {
    this.discount = 1;
    this.getPrice = function(price) {
        return price ;
    }
}




//2. 上下文
function Context() {
    this.name = '';
//    关联关系
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
