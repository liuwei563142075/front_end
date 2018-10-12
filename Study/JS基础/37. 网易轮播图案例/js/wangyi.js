var slider_contr = document.getElementById("slider_contr");
var slider = slider_contr.parentNode;
var slider_img = slider_contr.parentNode.children[0];
var d_imgs = slider_img.children;
var s_contr = slider_contr.children;
var clientWidth = slider_img.clientWidth;

for(var i=0;i<d_imgs.length;i++) {
    d_imgs[i].style.left = clientWidth + "px";

    var span = document.createElement("span");
    span.className = "slider-contr-icon";
    span.innerHTML = d_imgs.length-i;
    slider_contr.insertBefore(span,slider_contr.children[1]);
}
d_imgs[0].style.left = 0;
slider_contr.children[1].className = "slider-contr-icon current";

var now = 0;
var timer = null;
for(var s in s_contr) {
    s_contr[s].onclick = function () {
        if(this.className == "slider-contr-pre") {
            autoplay();
        }else if(this.className == "slider-contr-next") {
            animate(d_imgs[now],{left:clientWidth});
            slider_contr.children[now+1].className = "slider-contr-icon";
            now--;
            if(now < 0) {
                now = d_imgs.length-1;
            }
            /*下一张不管在哪，都立即回到-clientWidth，然后在缓缓进去*/
            d_imgs[now].style.left = -clientWidth + "px";
            animate(d_imgs[now],{left:0});
            slider_contr.children[now+1].className = "slider-contr-icon current";
        }else {
            var inNum = this.innerHTML - 1;
            slider_contr.children[now+1].className = "slider-contr-icon";
            if(now > inNum){
                animate(d_imgs[now],{left:clientWidth});
                d_imgs[inNum].style.left = -clientWidth + "px"
            }else if(now < inNum){
                animate(d_imgs[now],{left:-clientWidth});
                d_imgs[inNum].style.left = clientWidth + "px"
            }
            now = inNum;
            animate(d_imgs[inNum],{left:0});
            slider_contr.children[now+1].className = "slider-contr-icon current";
        }
    }
}

function autoplay() { /* 和点击向左按钮一样 */
    animate(d_imgs[now],{left:-clientWidth});   /*上一张缓缓出去*/
    slider_contr.children[now+1].className = "slider-contr-icon";
    now++;
    /*  思路错误！ */
    /*if(now >= d_imgs.length) {
        for (var re = 0; re < d_imgs.length-1; re++) {
            d_imgs[re].style.left = clientWidth + "px";
        }
        now = 0;
    }*/
    if(now > d_imgs.length-1) {
        now = 0;
    }
    /*下一张不管在哪，都立即回到clientWidth，然后在缓缓进去*/
    d_imgs[now].style.left = clientWidth + "px";
    animate(d_imgs[now],{left:0});
    slider_contr.children[now+1].className = "slider-contr-icon current";
}
timer = setInterval(autoplay,1000);
slider.onmouseover = function () {
    clearInterval(timer);
}
slider.onmouseout = function () {
    timer = setInterval(autoplay,1000);
}