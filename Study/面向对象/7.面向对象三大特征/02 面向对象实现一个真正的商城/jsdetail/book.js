//�̳еĹ̶���ʽ
/*���캯����д��*/

var Book = function(){
    Base.call(this, arguments);
    this.author='�Ǻ�«'
    this.publisher = '�廪��ѧ������'
    this.pages = 333
    this.publishTimes = 2
    this.type='IT����'
    this.publishTime='2016-09-09'

}
/*ԭ��д��*/
Book.prototype = new Base();
/*��д ���ǻ��෽��*/
Book.prototype.bindDOMDetail= function(){

    var str = ''
    str+='<h1>'+this.name+'</h1>'
    str+='<ul class="rating">'
        str+='<li><a href="#" id="buyCount">'+this.buySum+'</a>�˹���</li>'
        str+='<div class="clearfix"></div>'
    str+='</ul>'
    str+='<div class="price_single">'
        str+='<span class="reducedfrom" >$'+this.normalPrice+'</span>'
        str+='<span class="actual" >$'+this.youhuijia+'</span>'
        str+='<a href="#">�Żݼ�</a>'
    str+='</div>'
    str+='<h2 class="quick">����:</h2>'
    str+='<p class="quick_desc" >'+this.author+'</p>'
    str+='<h2 class="quick">��������:</h2>'
    str+='<p class="quick_desc" >'+this.publishTime+'</p>'
    str+='<h2 class="quick">������:</h2>'
    str+='<p class="quick_desc" >'+this.publisher+'</p>'
    str+='<h2 class="quick">ҳ��:</h2>'
    str+='<p class="quick_desc" >'+this.pages+'</p>'
    str+='<h2 class="quick">����:</h2>'
    str+='<p class="quick_desc" >'+this.type+'</p>'

    $('.bookdetail').html(str)
}
Book.prototype.readTry= function(){}
Book.prototype.readAll= function(){}
Book.prototype.init= function(){
    this.bindDOMDetail()
    this.bindDOMImage()
}
/*����ʹ������д��*/
//Book.prototype = {}
/*Ϊʲô
��Ϊ���д���൱�����¶���һ��ԭ�Ͷ���*/
