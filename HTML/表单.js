function ChecktxtUserName(str) {//对用户名进行检查
	str = form.form1.value.toLowerCase();
	if(str.length<3 || str.length>18) {
		document.getElementById("txtUserName").innerHTML = "<font color = 'red'>请输入正确的用户名！</font>"
		form.form1.focus();
		return false;
	}	
	if(isWhiteSpace(str)) {
		document.getElementById("txtUserName").innerHTML = "<font color = 'red'>用户名开头不能有空格！</font>"
		form.form1.focus();
		return false;
	}
	if(isTrueFirstLast(str)) {
		document.getElementById("txtUserName").innerHTML = "<font color = 'red'>用户名首、尾字母必须为数字或字母</font>"
		form.form1.focus();
		return false;
	} 
	document.getElementById("txtUserName").innerHTML = "";
	return true;
}

function isWhiteSpace(str) {//开头不能有空格！
	str = form.form1.value.toLowerCase();
	var i;
	var withspace = " \t\r\n";
    for(i = 0;i<str.length;i++) {
		var c = str.charAt(i);
		if(withspace.indexOf(c) >= 0)
			return true;
		return false;
	}
}

function isTrueFirstLast(str) {//首尾字母必须为数字或字母
	str = form.form1.value.toLowerCase();
	var cun = /^[0-9a-z][\w-.]*[0-9a-z]$/i;
	if(cun.test(str))
		return true;
	else false;
}

function ChecktxtUserPass(str) {//对密码进行检查
	str = form.form1.value.toLowerCase();
	if(str.length<3 || str.length>10) {
		document.getElementById("txtUserPass").innerHTML = "<font color = 'red'>密码位数不正确！</font>"
	}
	
	if(str.length == "") {
		document.getElementById("txtUserPass").innerHTML = "<font color = 'red'>密码不能为空！</font>"
	}
} 

function ChecktxtUserPassp(str) {
	str = form.form1.value.toLowerCase();
	if(form.txtUserPass.value != form.txtUserPassp.value) {
		document.getElementById("txtUserPassp").innerHTML = "<font color = 'red'>两次密码不一致！</font>"
		return false;
	}
	document.getElementById("txtUserPassp").innerHTML = "";
	return true;
}