/**
 * Created by iform on 2016-09-12.
 */
/**
 *@Bidding.html
 */
//延期招标对话框
$(function () {
    function defer() {
        layer.open({
            title: '延期招标',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#defer"),
            area: '360px',
            btn: ['延期', '取消'],
        });
    }

    $("#btn-defer").bind("click", defer);
});
//查看报名对话框
$(function () {
    function apply() {
        layer.open({
            title: '报名查看',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#apply"),
            area: '700px',//这样设置的话高度自增的
            // btn: ['延期', '取消'],
        });
    }

    $("#btn-apply").bind("click", apply);
});
//下载标书
$(function () {
    function downBids() {
        layer.open({
            title: '报名查看',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#downBids"),
            area: '700px',//这样设置的话高度自增的
            // btn: ['延期', '取消'],
        });
    }

    $("#btn-downBids").bind("click", downBids);
});
//查看报价
$(function () {
    function selectCost() {
        layer.tab({
            type: 1,
            closeBtn: 1,
            shift: 2,
            area: '700px',
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            tab: [{
                title: '第一轮报价',
                content: $('#selectCostOne').html(),
            }, {
                title: '第二轮报价',
                content: $('#selectCostTwo').html(),
            }, {
                title: '第三轮报价',
                content: $('#selectCostThree').html(),
            }],
        });
    }

    $("#btn-selectCost").bind("click", selectCost);
});
//招标方选标
$(function () {
    function bidsHandle() {
        layer.open({
            title: '选标',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#bidsHandle"),
            area: '900px',//这样设置的话高度自增的
            btn: ['稍后再选', '废标'],
        });
    }

    $("#btn-BidsHandle").bind("click", bidsHandle);
});
/**
 *@Tender.html
 */
//交标书
$(function () {
    function upBids() {
        layer.open({
            title: '交标书',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#upBids"),
            area: '500px',//这样设置的话高度自增的
            btn: ['提交', '稍后再交', '撤标'],//撤标这个动作，只有在交了标书以后出现。
        });
    }

    $("#btn-upBids").bind("click", upBids);
});

//报价
$(function () {
    function supplyCost() {
        layer.open({
            title: '报价',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#supplyCost"),
            area: '650px',//这样设置的话高度自增的
        });
    }

    $("#btn-supplyCost").bind("click", supplyCost);
});


//待选标的时候查看三轮报价
$(function () {
    function BidsCostWait() {
        layer.open({
            title: '查看报价',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#BidsCostWait"),
            area: '650px',//这样设置的话高度自增的
        });
    }

    $("#btn-BidsCostWait").bind("click", BidsCostWait);
});
//删除
$(function () {
    function biddingDelete() {
        layer.confirm('是否删除些条记录？', {
            title:'重要提示',
            closeBtn:1,
            shadeClose:true,
            btn: ['删除', '取消'] //按钮
        }, function () {
            layer.msg('删除成功',
                {
                    icon: 1,
                    time: 1500,
                });
        });
    }
    $(".btn-biddingDelete").bind("click", biddingDelete);
});
//Performance.html
//上传合同
$(function () {
    function upPact() {
        layer.open({
            title: '上传合同',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#upPact"),
            area: '500px',//这样设置的话高度自增的
            btn: ['确认', '取消'],
        });
    }
    $("#btn-upPact").bind("click", upPact);
});
//确认验收
$(function () {
    function upCheckYes() {
        layer.confirm('是否完成验收？', {
            title:'履约验收',
            closeBtn:0,
            shadeClose:true,
            btn: ['确认验收', '取消'] //按钮
        }, function () {
            layer.msg('验收完成',
                {
                    icon: 6,
                    time: 1500,
                });
        });
    }
    $("#btn-checkYes").bind("click", upCheckYes);
});
//驳回验收
$(function () {
    function upCheckNo() {
        layer.confirm('是否驳回验收？', {
            title:'驳回验收',
            closeBtn:1,
            shadeClose:true,
            btn: ['驳回', '取消'] //按钮
        }, function () {
            layer.msg('已经驳回',
                {
                    icon: 5,
                    time: 1500,
                });
        });
    }
    $("#btn-checkNo").bind("click", upCheckNo);
});


//投标方-确认合同
$(function () {
    function upPact() {
        layer.confirm('是否确认此份合同？', {
            title:'合同确认',
            closeBtn:1,
            shadeClose:true,
            btn: ['签约', '驳回'] //按钮
        }, function () {
            layer.msg('在线签约完成',
                {
                    icon: 1,
                    time: 1500,
                });
        });
    }
    $("#btn-affPact").bind("click", upPact);
});
//申请验收
$(function () {
    function askCheck() {
        layer.confirm('是否向招标方申请验收？', {
            title:'申请验收',
            closeBtn:1,
            shadeClose:true,
            btn: ['申请', '取消'] //按钮
        }, function () {
            layer.msg('申请已提交，请耐心等待',
                {
                    icon: 1,
                    time: 1500,
                });
        });
    }
    $("#btn-askCheck").bind("click", askCheck);
});
//accounts.html
//修改密码
$(function () {
    function revamp() {
        layer.open({
            title: '修改密码',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#revamp"),
            area: '500px',//这样设置的话高度自增的
            btn: ['修改', '取消'],
        });
    }
    $("#btn-revamp").bind("click", revamp);
});
//修改手机号
$(function () {
    function revampTel() {
        layer.open({
            title: '旧手机号码验证',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#revampTel"),
            area: '500px',//这样设置的话高度自增的
            btn: ['验证', '取消'],
            btn1:function (index) {
                layer.close(index);
                layer.open({
                    title: '新手机号码验证',
                    type: 1,
                    closeBtn: 0, //不显示关闭按钮
                    shift: 2,
                    move: '.mine-move',
                    shadeClose: true, //开启遮罩关闭
                    content: $("#revampTelNew"),
                    area: '350px',//这样设置的话高度自增的
                    btn: ['确认修改', '取消'],
                    });
            }
        });
    }
    $("#btn-revampTel").bind("click", revampTel);
});

//设置选标密码
$(function () {
    function setBidsPwFist() {
        layer.open({
            title: '选标密码',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#setBidsPwFist"),
            area: '500px',//这样设置的话高度自增的
            btn: ['设置', '取消'],
        });
    }
    $("#btn-setBidsPw").bind("click", setBidsPwFist);
});

//niche.html 商机管理
$(function () {
    function addKeyword() {
        layer.open({
            title: '设置关键字',
            type: 1,
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            move: '.mine-move',
            shadeClose: true, //开启遮罩关闭
            content: $("#addKeyword"),
            area: '500px',//这样设置的话高度自增的
            btn: ['设置', '取消'],
        });
    }
    $("#btn-addKeyword").bind("click", addKeyword);
});
