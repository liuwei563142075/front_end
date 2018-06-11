var sexNow = 1;

function getli(pageNow,pageTotal,pageSize,flag){		//getTableInfo(str);/*最后触发一次请求*/
	var sixNum = Math.ceil(pageTotal/pageSize);			/*除6所得整数*/
	var code = '<ul class="pagination"  style="margin:0 auto;">';
	if(pageTotal == 0){
		//code += '<li><a href="javascript:void(0)">&laquo;</a></li>';
		//code += '<li><a href="javascript:void(0)">&raquo;</a></li>';
	}else{
		if(flag == "init"){	//初始时没按上下时
			if(pageTotal<=pageSize){
				code += '<li><a href="javascript:void(0)">&laquo;</a></li>';
				code += compareCode(1,pageTotal,1);
				code += '<li><a href="javascript:void(0)">&raquo;</a></li>';
			}else{
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageNow+','+pageTotal+','+pageSize+',\'up\')">&laquo;</a></li>';
				code += compareCode(1,pageSize,1);
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageNow+','+pageTotal+','+pageSize+',\'down\')">&raquo;</a></li>';
			}
		}else if(flag == "up"){		//向上
			if(sexNow != 1){
				sexNow--;
				
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageNow+','+pageTotal+','+pageSize+',\'up\')">&laquo;</a></li>';
				if(sexNow != sixNum-1){
					code += compareCode((sexNow-1)*pageSize+1,sexNow*pageSize,(sexNow-1)*pageSize+1);
				}else{
					if(pageNow <= sexNow*pageSize){
						code += compareCode((sexNow-1)*pageSize+1,sexNow*pageSize,(sexNow-1)*pageSize+1);//pageNow-1
					}else{
						code += compareCode((sexNow-1)*pageSize+1,sexNow*pageSize,sexNow*pageSize);
					}
				}
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageNow+','+pageTotal+','+pageSize+',\'down\')">&raquo;</a></li>';
			}else{
				return;
			}
		}else if(flag == "down"){		//向下
			if(sexNow != sixNum){
				sexNow++;
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageNow+','+pageTotal+','+pageSize+',\'up\')">&laquo;</a></li>';
				if(sexNow != sixNum){
					//(sexNow-1)*6+1---sexNow*6
					code += compareCode((sexNow-1)*pageSize+1,sexNow*pageSize,(sexNow-1)*pageSize+1);
				}else{
					//pageTotal-5 --- pageTotal
					code += compareCode((sexNow-1)*pageSize+1,pageTotal,(sexNow-1)*pageSize+1);
				}
				code += '<li><a href="javascript:void(0)" onclick="getli('+pageNow+','+pageTotal+','+pageSize+',\'down\')">&raquo;</a></li>';
			}else{
				return;
			}
		}
	}
	code += '</ul>';
	var my = document.getElementById('myli');
	my.innerHTML = code;
	liBackgroundColor(pageTotal,pageSize);
}

function liBackgroundColor(pageTotal,pageSize){
	var text;
	$(".pagination li").click(function(){  
        text = $(this).text();
        if(text != "«" && text != "»"){
        	$(this).addClass("active").siblings().removeClass("active");
        }
        var pageNow = $(".pagination li.active").text();
        pageNow = parseInt(pageNow);
        deal(pageNow,pageTotal,pageSize);
    });
    return text;
}


function compareCode(begin,end,active){
	var code = '';
	for (var i = begin;i <= end ;i++) {
		if(i != active){
			code += '<li><a href="javascript:void(0)">'+i+'</a></li>';
		}else{
			code += '<li class="active"><a href="javascript:void(0)">'+i+'</a></li>';
		}
	}
	return code;
}

function deal(text,pageTotal,pageSize){
  	var pageNow = parseInt(text);
  	console.log(pageNow);
  	console.log(pageTotal);
  	console.log(pageSize);
  	if(pageNow != 1 || pageNow != pageTotal){
  		//init$Tab(str,pageNow,pageSize);
  	}
}