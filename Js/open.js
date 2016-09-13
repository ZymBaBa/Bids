/**
 * Created by iform on 2016-09-12.
 */
//延期招标对话框
$(function () {
    function defer() {
        layer.open({
            title:'延期招标',
            type: 1,
            closeBtn: 0, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#defer"),
            area: '360px',
            btn: ['延期', '取消'],
        });
    }
    $("#btn-defer").bind("click",defer);
});
//查看报名对话框
$(function () {
    function apply() {
        layer.open({
            title:'报名查看',
            type: 1,
            closeBtn: 0, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#apply"),
            area: '700px',//这样设置的话高度自增的
            // btn: ['延期', '取消'],
        });
    }
    $("#btn-apply").bind("click",apply);
});
//下载标书
$(function () {
    function downBids() {
        layer.open({
            title:'报名查看',
            type: 1,
            closeBtn: 0, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#downBids"),
            area: '700px',//这样设置的话高度自增的
            // btn: ['延期', '取消'],
        });
    }
    $("#btn-downBids").bind("click",downBids);
});
//查看报价
$(function () {
    function selectCost() {
        layer.tab({
            type:1,
            closeBtn:0,
            shift:2,
            area:'700px',
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            tab: [{
                title: '第一轮报价',
                content:  $('#selectCostOne').html(),
            }, {
                title: '第二轮报价',
                content: $('#selectCostTwo').html(),
            }, {
                title: '第三轮报价',
                content: $('#selectCostThree').html(),
            }],
        });
    }
    $("#btn-selectCost").bind("click",selectCost);
});
//招标方选标
$(function () {
    function bidsHandle() {
        layer.open({
            title:'选标',
            type: 1,
            closeBtn: 0, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#bidsHandle"),
            area: '900px',//这样设置的话高度自增的
            btn: ['稍后再选', '废标'],
        });
    }
    $("#btn-BidsHandle").bind("click",bidsHandle);
});
