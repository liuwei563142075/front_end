var checkImg = function(id,bgImg) {
    var bx = document.getElementById("box");
    var m = document.getElementById(id);
    m.onmouseover = function() {
        bx.style.backgroundImage = bgImg;
    }
}