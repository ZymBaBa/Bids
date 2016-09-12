/**
 * Created by iform on 2016-09-12.
 */
$(function () {
    function ku() {
        layer.open({
            title:'查看报价',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: false, //开启遮罩关闭
            content: $("#baoJia"),
            area: ['600px', '300px'],
            btn: ['yes', 'NO'],
        });
    }
    $("#daKai").bind("click",ku);
})