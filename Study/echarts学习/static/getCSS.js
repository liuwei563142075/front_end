function getCss() {
    var styles = "";
    $.get("./test.css", function(result){
        styles = result;
    });
    return styles;
}