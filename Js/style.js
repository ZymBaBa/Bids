//搜索框里的内容
$(function () {
    $("#inputBids").focusin(function () {
        this.value = "";
        $("#inputBids").css("border", "2px solid #06c27a");
    });
    $("#inputBids").focusout(function () {
        this.value = "请输入你要查找的标底名称";
        $("#inputBids").css("border", "2px solid #10ac86");
    });

});