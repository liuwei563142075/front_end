var initTable = function(str,pageNum,pageSize,flag) {
		$.ajax({
		type: "post",
		url: "adminPath/oa/medical5/getTableInfo",
		data: {"str": str,"pageNum":pageNum,"pageSize":pageSize},
		dataType: "json",
		success: function (result) {
			//1. 拼table
			
			//2. 拼li
			getli(pageTotal,pageNow,flag);
		}
		});
}

lode{
	initTable(str,pageNum,pageSize,'init');
}
