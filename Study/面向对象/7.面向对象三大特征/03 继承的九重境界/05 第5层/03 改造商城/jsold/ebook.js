
function eBook(){
    Base.call(this, arguments);
    /*����*/
    this.author='����'
    /*������*/
    this.publisher='�廪��ѧ������'
    /*����ʱ��*/
    this.publishDate='2016-09-09'
    /*ҳ��*/
    this.pages = 0
    /*����*/
    this.type = 'IT - ǰ�˿��� - JS'
}

eBook.prototype = new Base()
/*�����Զ�*/
eBook.prototype.readTry = function() {

}
/*����changdu*/
eBook.prototype.readAll = function() {

}
eBook.prototype.buy = function() {

}
/*�����ҵ����*/
eBook.prototype.addCart = function() {

}
/*�󶨻�����Ϣ����*/
eBook.prototype.bindDOMDetail = function() {
    /*ƴ�ӵ���ʽ*/
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
    str+='<p class="quick_desc" >'+this.publishDate+'</p>'
    str+='<h2 class="quick">������:</h2>'
    str+='<p class="quick_desc" >'+this.publisher+'</p>'
    str+='<h2 class="quick">ҳ��:</h2>'
    str+='<p class="quick_desc" >'+this.pages+'</p>'
    str+='<h2 class="quick">����:</h2>'
    str+='<p class="quick_desc" >'+this.type+'</p>'

    $('.bookdetail').html(str)
}
eBook.prototype.init = function() {
    this.bindDOMDetail()
    this.bindDOMImage()
}