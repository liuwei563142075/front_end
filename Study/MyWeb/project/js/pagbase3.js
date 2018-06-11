var sexNow = 1;

function getli(pageNow,pageTotal,flag){		//getTableInfo(str);/*最后触发一次请求*/
	var sixNum = Math.ceil(pageTotal/6);			/*除6所得整数*/
	var code = '<ul class="pagination">';
	//var s = liBackgroundColor();
	if(pageTotal == 0){
		code += '<li><a href="javascript:void(0)">&laquo;</a></li>';
		code += '<li><a href="javascript:void(0)">&raquo;</a></li>';
	}else{
		if(flag == "init"){	//初始时没按上下时
			if(pageTotal<=6){
				code += '<li><a href="javascript:void(0)">&laquo;</a></li>';
				code += compareCode(1,pageTotal,1);
				code += '<li><a href="javascript:void(0)">&raquo;</a></li>';
			}else{
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'up\')">&laquo;</a></li>';
				code += compareCode(1,6,1);
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'down\')">&raquo;</a></li>';
			}
		}else if(flag == "up"){		//向上
			if(sexNow != 1){
				sexNow--;
				
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'up\')">&laquo;</a></li>';
				if(sexNow != sixNum-1){
					code += compareCode((sexNow-1)*6+1,sexNow*6,(sexNow-1)*6+1);
				}else{
					if(pageNow <= sexNow*6){
						code += compareCode((sexNow-1)*6+1,sexNow*6,(sexNow-1)*6+1);//pageNow-1
					}else{
						code += compareCode((sexNow-1)*6+1,sexNow*6,sexNow*6);
					}
				}
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'down\')">&raquo;</a></li>';
			}else{
				return;
			}
		}else if(flag == "down"){		//向下
			if(sexNow != sixNum){
				sexNow++;
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'up\')">&laquo;</a></li>';
				if(sexNow != sixNum){
					//(sexNow-1)*6+1---sexNow*6
					code += compareCode((sexNow-1)*6+1,sexNow*6,(sexNow-1)*6+1);
				}else{
					//pageTotal-5 --- pageTotal
					if(pageNow >= (pageTotal-5)){
						code += compareCode(pageTotal-5,pageTotal,pageNow+1);
					}else{
						code += compareCode(pageTotal-5,pageTotal,pageTotal-5);
					}
				}
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'down\')">&raquo;</a></li>';
			}else{
				return;
			}
		}
	}
	code += '</ul>';
	var my = document.getElementById('myli');
	my.innerHTML = code;
	liBackgroundColor();
}

function liBackgroundColor(){
	var text;
	$(".pagination li").click(function(){  
        text = $(this).text();
        if(text == "«"){
        	text = parseInt("-1");
        }else if(text == "»"){
        	text = parseInt("0");
        }else{
        	$(this).addClass("active").siblings().removeClass("active");
        	text = parseInt(text);
        }
        
    });
    return text;
}


function compareCode(begin,end,active){
	var code = '';
	for (var i = begin;i <= end ;i++) {
		if(i != active){
			code += '<li><a href="javascript:void(0)" onclick="getTableInfo(str)">'+i+'</a></li>';
		}else{
			code += '<li class="active"><a href="javascript:void(0)" onclick="getTableInfo(str)">'+i+'</a></li>';
		}
	}
	//请求后台
	getTableInfo(str,active);
	return code;
}



function initLi(pageTotal,pageNow){
	if(pageTotal == 0){
		code += '<li><a href="javascript:void(0)">&laquo;</a></li>';
		code += '<li><a href="javascript:void(0)">&raquo;</a></li>';
	}else{
		if(pageTotal<=6){
			code += '<li><a href="javascript:void(0)">&laquo;</a></li>';
			code += compareCode(1,pageTotal,1);
			code += '<li><a href="javascript:void(0)">&raquo;</a></li>';
		}else{
			code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'up\')">&laquo;</a></li>';
			code += compareCode(1,6,1);
			code += '<li><a href="javascript:void(0)" onclick="getli('+pageTotal+','+pageNow+',\'down\')">&raquo;</a></li>';
		}
	}
	code += '</ul>';
	var my = document.getElementById('myli');
	my.innerHTML = code;
}
