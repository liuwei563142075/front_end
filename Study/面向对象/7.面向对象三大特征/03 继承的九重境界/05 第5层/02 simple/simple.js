(function(){
    //initializing用于控制类的初始化，非常巧妙，请留意下文中使用技巧
    //fnTest返回一个正则比表达式，用于检测函数中是否含有_super，这样就可以按需重写，提高效率。当然浏览器如果不支持的话就返回一个通用正则表达式
    var initializing = false,fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
    //所有类的基类Class,这里的this一般是window对象
    this.Class = function(){};
    //对基类添加extend方法，用于从基类继承
    Class.extend = function(prop){
        //保存当前类的原型
        var _super = this.prototype;
        //创建当前类的对象，用于赋值给子类的prototype，这里非常巧妙的使用父类实例作为子类的原型，而且避免了父类的初始化(通过闭包作用域的initializing控制)
        initializing = true;
        var prototype = new this();
        initializing = false;
        //将参数prop中赋值到prototype中，这里的prop中一般是包括init函数和其他函数的对象
        for(var name in prop){
            //对应重名函数，需要特殊处理，处理后可以在子函数中使用this._super()调用父类同名构造函数, 这里的fnTest很巧妙:只有子类中含有_super字样时才处理从写以提高效率
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name])?
                (function(name,fn){
                    return function(){
                        //_super在这里是我们的关键字，需要暂时存储一下
                        var tmp = this._super;
                        //这里就可以通过this._super调用父类的构造函数了
                        this._super = _super[name];
                        //调用子类函数
                        fn.apply(this,arguments);
                        //复原_super，如果tmp为空就不需要复原了
                        tmp && (this._super = tmp);
                    }
                })(name,prop[name]) : prop[name];
        }
        //当new一个对象时，实际上是调用该类原型上的init方法,注意通过new调用时传递的参数必须和init函数的参数一一对应
        function Class(){
            if(!initializing && this.init){
                this.init.apply(this,arguments);
            }
        }
        //给子类设置原型
        Class.prototype = prototype;
        //给子类设置构造函数
        Class.prototype.constructor = Class;
        //设置子类的extend方法，使得子类也可以通过extend方法被继承
        Class.extend = arguments.callee;
        return Class;
    }
})();
