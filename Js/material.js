$(function () {
    //显示的数量，最多显示13个，大于13的时候隐藏起来
    $(function () {
        var ddd = $(".select3 dd");
        if (ddd.length > 13) {
            $(".select3 dd:gt(12)").hide();
            $(".ddHide").text("更多");
        } else {
            $(".ddHide").hide();
        }
    });

    $(".ddHide").click(function () {
        if ($(this).text() == "收起") {
            $(".select3 dd:gt(12)").hide();
            $(this).text("更多");
        } else {
            $(".select3 dd:gt(12)").show();
            $(this).text("收起");
        }
    });

    $(".select-list dd").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        var selectType = $(this).parent('dl').attr('select-type');
        if(!$(this).attr('class').indexOf('select-all'))
            $('.select-result .' +selectType ).remove();
        else {
            var copyThis = $(this).clone();
            if ($(".select-result ." + selectType).length > 0)
                $(".select-result ." + selectType + " a").html($(this).text());
            else {
                $(copyThis).addClass(selectType);
                $(".select-result dl").append(copyThis.attr('select-type', selectType));
            }
        }
        if ($(".select-result dd").length > 1)
            $(".select-no").hide();
        else
            $(".select-no").show();
    });

    $(".select-result").on("click", ".selected", function () {
        $(this).remove();
        $('.select-list .' + $(this).attr('select-type') + " .select-all").addClass("selected").siblings().removeClass("selected");
        if ($(".select-result dd").length > 1)
            $(".select-no").hide();
         else
            $(".select-no").show();

    })

});