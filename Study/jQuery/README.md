jQuery使用$("")获取对象的时候一定要变量本地化，因为$()方法功能非常强大，功能越强大，越复杂，效率越低。
var box = $("#box");然后在其他地方使用box，不在使用$("#box")

jQuery中！没有on('hover',function(){})!!!其被hover(function(){},function(){})替代了！