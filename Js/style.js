//搜索框里的内容
$(function () {
    $("#inputBids").focusin(function () {
        this.value = "";
    });
    $("#inputBids").focusout(function () {
        this.value = "请输入你要查找的标底名称";
    });

});
$(function () {
    $("input[type='submit']").mousemove(function () {
        $("input[type='submit']").css("background", "#06c27a");
    });
    $("input[type='submit']").mouseout(function () {
        $("input[type='submit']").css("background", "#10ac86");
    });
    $("input[type='submit']").mousedown(function () {
        $("input[type='submit']").css("background", "#10ac86");
    });
    $("a[rel='next']").mousemove(function () {
        $("a[rel='next']").css("background", "#06c27a");
    });
    $("a[rel='next']").mouseout(function () {
        $("a[rel='next']").css("background", "#10ac86");
    });
    $("a[rel='next']").mousedown(function () {
        $("a[rel='next']").css("background", "#10ac86");
    });
})