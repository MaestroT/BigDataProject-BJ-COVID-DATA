var ec_right2 = echarts.init(document.getElementById("r2"), "dark");

var datamessage = [];
var option_right2 = {
    title: {
        text: "今日疫情热搜",
        textStyle: {
            color: 'white'
        },
        left: 'left'
    },

};
//使用制定的配置项和数据显示图表
ec_right2.setOption(option_right2);