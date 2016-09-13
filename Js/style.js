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

//bidsPust页面的物资采购和工程项目点击效果
$(function () {
    $("#scBids").click(function () {
        $("#pjBids").removeClass("showCard-foucs");
        $("#pjBids>div").addClass("pjBidsFoucs");
        $("#pjBids>p").removeClass("pFoucs");
        $("#scBids").addClass("showCard-foucs");
        $("#scBids>div").removeClass("scBidsFoucs");
        $("#scBids>p").removeClass("pFoucsD");
        $("#ciList").html("物资采购");
    });
    $("#pjBids").click(function () {
        $("#pjBids").addClass("showCard-foucs");
        $("#pjBids>div").removeClass("pjBidsFoucs");
        $("#pjBids>p").removeClass("pFoucsD");
        $("#scBids").removeClass("showCard-foucs");
        $("#scBids>div").addClass("scBidsFoucs");
        $("#scBids>p").addClass("pFoucsD");
        $("#ciList").html("工程项目");
    })
});


$(document).ready(function () {
    $("#calendar1").bootstrapDatepickr({date_format: "Y-m-d"});
});
