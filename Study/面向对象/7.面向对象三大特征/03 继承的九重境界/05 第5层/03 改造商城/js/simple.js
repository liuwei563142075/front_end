(function(){
    //initializing���ڿ�����ĳ�ʼ�����ǳ����������������ʹ�ü���
    //fnTest����һ������ȱ��ʽ�����ڼ�⺯�����Ƿ���_super�������Ϳ��԰�����д�����Ч�ʡ���Ȼ����������֧�ֵĻ��ͷ���һ��ͨ��������ʽ
    var initializing = false,fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
    //������Ļ���Class,�����thisһ����window����
    this.Class = function(){};
    //�Ի������extend���������ڴӻ���̳�
    Class.extend = function(prop){
        //���浱ǰ���ԭ��
        var _super = this.prototype;
        //������ǰ��Ķ������ڸ�ֵ�������prototype������ǳ������ʹ�ø���ʵ����Ϊ�����ԭ�ͣ����ұ����˸���ĳ�ʼ��(ͨ���հ��������initializing����)
        initializing = true;
        var prototype = new this();
        initializing = false;
        //������prop�и�ֵ��prototype�У������prop��һ���ǰ���init���������������Ķ���
        for(var name in prop){
            //��Ӧ������������Ҫ���⴦�������������Ӻ�����ʹ��this._super()���ø���ͬ�����캯��, �����fnTest������:ֻ�������к���_super����ʱ�Ŵ����д�����Ч��
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name])?
                (function(name,fn){
                    return function(){
                        //_super�����������ǵĹؼ��֣���Ҫ��ʱ�洢һ��
                        var tmp = this._super;
                        //����Ϳ���ͨ��this._super���ø���Ĺ��캯����
                        this._super = _super[name];
                        //�������ຯ��
                        fn.apply(this,arguments);
                        //��ԭ_super�����tmpΪ�վͲ���Ҫ��ԭ��
                        tmp && (this._super = tmp);
                    }
                })(name,prop[name]) : prop[name];
        }
        //��newһ������ʱ��ʵ�����ǵ��ø���ԭ���ϵ�init����,ע��ͨ��new����ʱ���ݵĲ��������init�����Ĳ���һһ��Ӧ
        function Class(){
            if(!initializing && this.init){
                this.init.apply(this,arguments);
            }
        }
        //����������ԭ��
        Class.prototype = prototype;
        //���������ù��캯��
        Class.prototype.constructor = Class;
        //���������extend������ʹ������Ҳ����ͨ��extend�������̳�
        Class.extend = arguments.callee;
        return Class;
    }
})();
