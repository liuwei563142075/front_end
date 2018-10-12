// JavaScript Document




function showTab(_id, _index, _Max) {
	for (var i = 1; i <= _Max; i++) {
		$("#" + _id + "_" + i).hide();
		$("#" + _id + "Bar" + i).attr("class", "");
	}
	$("#" + _id + "_" + _index).show();
	$("#" + _id + "Bar" + _index).attr("class", "currentBtn");

}

//以下是滚动图片代码
var prevNext;
var left, width = 158, num;
var bb;
var t;
$(function() {
	num = $(".InsCenter ul li").length;
	left = parseInt($(".InsCenter ul").css("left")) || 0;
	var mWidth = width * num;
	//QQ联系
	var hide = false;
	$(".ContactBottom").click(function() {
		hide = !hide;
		if (hide)
			$(this).find("img").attr("src", "/images/ContractionBtn2.png");
		else
			$(this).find("img").attr("src", "/images/ContractionBtn1.png");
		$(".QQcontainer").slideToggle(500);
	});

	prevNext = function(type) {
		var l = parseInt($(".InsCenter ul").css("left"));
		if (type == "prev") {
			if (l < 0) {
				$(".InsCenter ul").css("left", -170);
				$(".InsCenter ul").prepend($(".InsCenter ul li:last"));
				$(".InsCenter ul").animate({
					"left" : 0
				}, 500);
			} else {
				$(".InsCenter ul").animate({
					"left" : 0
				}, 500);
			}
		} else if (type == "next") {
			$(".InsCenter ul").animate({
				"left" : -170
			});
		}
	}
	var c;
	
	bb = function() {
		c = parseInt($(".InsCenter ul").css("left"))||0;
		if (c < -170) {
			$(".InsCenter ul li:first").appendTo($(".InsCenter ul"));
			c = 0;
		}
		//console.log(c);
		$(".InsCenter ul").css("left", c - 1);
	}
	t = setInterval("bb()", 30);
	$(".InsCenter ul").hover(function() {
		clearInterval(t);
	}, function() {
		t = setInterval('bb()', 30);
	});
	$("#prev,#next").mousedown(function() {
		//clearInterval(t);
	});
	$("#prev,#next").mouseup(function() {
		//t = setInterval('bb()', 30);
	});
	$("#prev").click(function() {
		prevNext("prev");
	});
	$("#next").click(function() {
		prevNext("next");
	});
});

//改变图片大小
function resizepic(thispic) {
	if (thispic.width > 500)
		thispic.width = 500;
}

//无级缩放图片大小
function bbimg(o) {
	return;
	var zoom = parseInt(o.style.zoom, 10) || 100;
	zoom += event.wheelDelta / 12;
	if (zoom > 0)
		o.style.zoom = zoom + '%';
	return false;
}

