/*function gettime() {
    $.ajax({
        url: "/time",
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            $("#time").html(data)
        },
        error: function(xhr, type, errorThrown) {

        }
    });
}

function get_c1_data() {
    $.ajax({
        url: "/c1",
        success: function(data) {
            $(".num h1").eq(0).html(data.confirm)
            $(".num h1").eq(2).html(data.heal)
            $(".num h1").eq(3).html(data.dead)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}
function get_c2_data() {
    $.ajax({
        url:"/c2",
        success: function(data) {
            optionMap.series[0].data = data.data
            ec_center.setOption(optionMap)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

function get_l1_data() {
    $.ajax({
        url:"/l1",
        success: function(data) {
            option_left1.xAxis.data = data.day
            option_left1.series[0].data = data.confirm
            option_left1.series[1].data = data.suspect
            option_left1.series[2].data = data.heal
            option_left1.series[3].data = data.dead
            ec_left1.setOption(option_left1)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}



function get_l2_data() {
    $.ajax({
        url:"/l2",
        success: function(data) {
            option_left2.xAxis.data = data.day
            option_left2.series[0].data = data.confirm_add
            option_left2.series[1].data = data.suspect_add
            ec_left2.setOption(option_left2)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}


function get_r1_data() {
    $.ajax({
        url:"/r1",
        success: function(data) {
            option_right1.xAxis.data = data.city
            option_right1.series[0].data = data.confirm
            ec_right1.setOption(option_right1)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}


function get_r2_data() {
    $.ajax({
        url:"/r2",
        success: function(data) {
            option_right2.series[0].data = data.kws
            ec_right2.setOption(option_right2)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

var res;
//定时向服务器发出ajax请求，将请求结果动态的添加到多行文本框中
function ajaxrequest() {
    //var no = Math.ceil(Math.random()*10);
    $.get("/test/Con19/time",
        //{ index: no},
        function(data){
            //回调函数
            //$("#ta").text(data);
            res=JSON.parse(data);
            console.log(res);

        }
    )
}
//setInterval("ajaxrequest()",15000);
ajaxrequest();

gettime()
get_c1_data()
get_c2_data()
get_l1_data()
get_l2_data()
get_r1_data()
get_r2_data()
setInterval(gettime, 1000)
setInterval(get_c1_data, 1000*10)
setInterval(get_c2_data, 1000*10)
setInterval(get_l1_data, 1000*10)
setInterval(get_l1_data, 1000*10)
setInterval(get_r1_data, 1000*10)
setInterval(get_r1_data, 1000*10)
*/


var res;
//定时向服务器发出ajax请求，将请求结果动态的添加到多行文本框中
function ajaxrequest() {
    //var no = Math.ceil(Math.random()*10);
    $.get("/test/Con19",
        //{ index: no},
        function(data){
            //回调函数
            //$("#ta").text(data);
            //var data="{\"todaydetail\":{\"西城区\":{\"suspected\":\"0\",\"cured\":\"2\",\"dead\":\"0\",\"confirmed\":\"59\"},\"平谷区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"0\"},\"门头沟区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"5\"},\"顺义区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"10\"},\"密云区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"7\"},\"朝阳区\":{\"suspected\":\"0\",\"cured\":\"1\",\"dead\":\"0\",\"confirmed\":\"77\"},\"外地来京\":{\"suspected\":\"0\",\"cured\":\"2\",\"dead\":\"0\",\"confirmed\":\"25\"},\"怀柔区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"7\"},\"房山区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"19\"},\"丰台区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},\"大兴区\":{\"suspected\":\"0\",\"cured\":\"16\",\"dead\":\"0\",\"confirmed\":\"104\"},\"石景山区\":{\"suspected\":\"0\",\"cured\":\"1\",\"dead\":\"0\",\"confirmed\":\"15\"},\"东城区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"19\"},\"未公布来源\":{\"suspected\":\"0\",\"cured\":\"533\",\"dead\":\"9\",\"confirmed\":\"2\"},\"境外输入\":{\"suspected\":\"0\",\"cured\":\"174\",\"dead\":\"0\",\"confirmed\":\"174\"},\"海淀区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"82\"},\"昌平区\":{\"suspected\":\"0\",\"cured\":\"1\",\"dead\":\"0\",\"confirmed\":\"30\"},\"延庆区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"1\"},\"通州区\":{\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"20\"}},\"today\":{\"date\":\"2020-07-15\",\"suspected\":0,\"cured\":730,\"dead\":9,\"confirmed\":929},\"history\":[{\"date\":\"2020-01-20\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"5\"},{\"date\":\"2020-01-21\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"10\"},{\"date\":\"2020-01-22\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"14\"},{\"date\":\"2020-01-23\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"22\"},{\"date\":\"2020-01-24\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"36\"},{\"date\":\"2020-01-25\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"41\"},{\"date\":\"2020-01-26\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"68\"},{\"date\":\"2020-01-27\",\"suspected\":\"0\",\"cured\":\"2\",\"dead\":\"1\",\"confirmed\":\"80\"},{\"date\":\"2020-01-28\",\"suspected\":\"0\",\"cured\":\"4\",\"dead\":\"1\",\"confirmed\":\"91\"},{\"date\":\"2020-01-29\",\"suspected\":\"0\",\"cured\":\"4\",\"dead\":\"1\",\"confirmed\":\"114\"},{\"date\":\"2020-01-30\",\"suspected\":\"0\",\"cured\":\"5\",\"dead\":\"1\",\"confirmed\":\"132\"},{\"date\":\"2020-01-31\",\"suspected\":\"0\",\"cured\":\"5\",\"dead\":\"1\",\"confirmed\":\"156\"},{\"date\":\"2020-02-01\",\"suspected\":\"0\",\"cured\":\"9\",\"dead\":\"1\",\"confirmed\":\"183\"},{\"date\":\"2020-02-02\",\"suspected\":\"0\",\"cured\":\"12\",\"dead\":\"1\",\"confirmed\":\"212\"},{\"date\":\"2020-02-03\",\"suspected\":\"0\",\"cured\":\"23\",\"dead\":\"1\",\"confirmed\":\"228\"},{\"date\":\"2020-02-04\",\"suspected\":\"0\",\"cured\":\"24\",\"dead\":\"1\",\"confirmed\":\"253\"},{\"date\":\"2020-02-05\",\"suspected\":\"0\",\"cured\":\"31\",\"dead\":\"1\",\"confirmed\":\"274\"},{\"date\":\"2020-02-06\",\"suspected\":\"157\",\"cured\":\"33\",\"dead\":\"1\",\"confirmed\":\"297\"},{\"date\":\"2020-02-07\",\"suspected\":\"0\",\"cured\":\"34\",\"dead\":\"2\",\"confirmed\":\"315\"},{\"date\":\"2020-02-08\",\"suspected\":\"0\",\"cured\":\"37\",\"dead\":\"2\",\"confirmed\":\"326\"},{\"date\":\"2020-02-09\",\"suspected\":\"0\",\"cured\":\"44\",\"dead\":\"2\",\"confirmed\":\"337\"},{\"date\":\"2020-02-10\",\"suspected\":\"0\",\"cured\":\"48\",\"dead\":\"3\",\"confirmed\":\"342\"},{\"date\":\"2020-02-11\",\"suspected\":\"0\",\"cured\":\"56\",\"dead\":\"3\",\"confirmed\":\"352\"},{\"date\":\"2020-02-12\",\"suspected\":\"0\",\"cured\":\"68\",\"dead\":\"3\",\"confirmed\":\"366\"},{\"date\":\"2020-02-13\",\"suspected\":\"0\",\"cured\":\"79\",\"dead\":\"3\",\"confirmed\":\"372\"},{\"date\":\"2020-02-14\",\"suspected\":\"0\",\"cured\":\"97\",\"dead\":\"4\",\"confirmed\":\"375\"},{\"date\":\"2020-02-15\",\"suspected\":\"0\",\"cured\":\"105\",\"dead\":\"4\",\"confirmed\":\"380\"},{\"date\":\"2020-02-16\",\"suspected\":\"0\",\"cured\":\"114\",\"dead\":\"4\",\"confirmed\":\"381\"},{\"date\":\"2020-02-17\",\"suspected\":\"0\",\"cured\":\"122\",\"dead\":\"4\",\"confirmed\":\"387\"},{\"date\":\"2020-02-18\",\"suspected\":\"0\",\"cured\":\"145\",\"dead\":\"4\",\"confirmed\":\"393\"},{\"date\":\"2020-02-19\",\"suspected\":\"0\",\"cured\":\"153\",\"dead\":\"4\",\"confirmed\":\"395\"},{\"date\":\"2020-02-20\",\"suspected\":\"0\",\"cured\":\"169\",\"dead\":\"4\",\"confirmed\":\"396\"},{\"date\":\"2020-02-21\",\"suspected\":\"0\",\"cured\":\"178\",\"dead\":\"4\",\"confirmed\":\"399\"},{\"date\":\"2020-02-22\",\"suspected\":\"0\",\"cured\":\"189\",\"dead\":\"4\",\"confirmed\":\"399\"},{\"date\":\"2020-02-23\",\"suspected\":\"0\",\"cured\":\"198\",\"dead\":\"4\",\"confirmed\":\"399\"},{\"date\":\"2020-02-24\",\"suspected\":\"0\",\"cured\":\"215\",\"dead\":\"4\",\"confirmed\":\"400\"},{\"date\":\"2020-02-25\",\"suspected\":\"0\",\"cured\":\"235\",\"dead\":\"4\",\"confirmed\":\"400\"},{\"date\":\"2020-02-26\",\"suspected\":\"0\",\"cured\":\"248\",\"dead\":\"5\",\"confirmed\":\"410\"},{\"date\":\"2020-02-27\",\"suspected\":\"0\",\"cured\":\"257\",\"dead\":\"7\",\"confirmed\":\"410\"},{\"date\":\"2020-02-28\",\"suspected\":\"0\",\"cured\":\"271\",\"dead\":\"8\",\"confirmed\":\"411\"},{\"date\":\"2020-02-29\",\"suspected\":\"0\",\"cured\":\"276\",\"dead\":\"8\",\"confirmed\":\"413\"},{\"date\":\"2020-03-01\",\"suspected\":\"0\",\"cured\":\"282\",\"dead\":\"8\",\"confirmed\":\"414\"},{\"date\":\"2020-03-02\",\"suspected\":\"0\",\"cured\":\"288\",\"dead\":\"8\",\"confirmed\":\"414\"},{\"date\":\"2020-03-03\",\"suspected\":\"0\",\"cured\":\"294\",\"dead\":\"8\",\"confirmed\":\"417\"},{\"date\":\"2020-03-04\",\"suspected\":\"0\",\"cured\":\"297\",\"dead\":\"8\",\"confirmed\":\"418\"},{\"date\":\"2020-03-05\",\"suspected\":\"0\",\"cured\":\"298\",\"dead\":\"8\",\"confirmed\":\"422\"},{\"date\":\"2020-03-06\",\"suspected\":\"0\",\"cured\":\"303\",\"dead\":\"8\",\"confirmed\":\"426\"},{\"date\":\"2020-03-07\",\"suspected\":\"0\",\"cured\":\"308\",\"dead\":\"8\",\"confirmed\":\"428\"},{\"date\":\"2020-03-08\",\"suspected\":\"0\",\"cured\":\"315\",\"dead\":\"8\",\"confirmed\":\"428\"},{\"date\":\"2020-03-09\",\"suspected\":\"0\",\"cured\":\"320\",\"dead\":\"8\",\"confirmed\":\"429\"},{\"date\":\"2020-03-10\",\"suspected\":\"0\",\"cured\":\"326\",\"dead\":\"8\",\"confirmed\":\"435\"},{\"date\":\"2020-03-11\",\"suspected\":\"0\",\"cured\":\"334\",\"dead\":\"8\",\"confirmed\":\"435\"},{\"date\":\"2020-03-12\",\"suspected\":\"0\",\"cured\":\"342\",\"dead\":\"8\",\"confirmed\":\"436\"},{\"date\":\"2020-03-13\",\"suspected\":\"0\",\"cured\":\"349\",\"dead\":\"8\",\"confirmed\":\"437\"},{\"date\":\"2020-03-14\",\"suspected\":\"0\",\"cured\":\"353\",\"dead\":\"8\",\"confirmed\":\"442\"},{\"date\":\"2020-03-15\",\"suspected\":\"0\",\"cured\":\"358\",\"dead\":\"8\",\"confirmed\":\"446\"},{\"date\":\"2020-03-16\",\"suspected\":\"0\",\"cured\":\"368\",\"dead\":\"8\",\"confirmed\":\"455\"},{\"date\":\"2020-03-17\",\"suspected\":\"0\",\"cured\":\"373\",\"dead\":\"8\",\"confirmed\":\"458\"},{\"date\":\"2020-03-18\",\"suspected\":\"0\",\"cured\":\"379\",\"dead\":\"8\",\"confirmed\":\"479\"},{\"date\":\"2020-03-19\",\"suspected\":\"0\",\"cured\":\"384\",\"dead\":\"8\",\"confirmed\":\"485\"},{\"date\":\"2020-03-20\",\"suspected\":\"0\",\"cured\":\"392\",\"dead\":\"8\",\"confirmed\":\"499\"},{\"date\":\"2020-03-21\",\"suspected\":\"0\",\"cured\":\"398\",\"dead\":\"8\",\"confirmed\":\"512\"},{\"date\":\"2020-03-22\",\"suspected\":\"0\",\"cured\":\"400\",\"dead\":\"8\",\"confirmed\":\"522\"},{\"date\":\"2020-03-23\",\"suspected\":\"0\",\"cured\":\"401\",\"dead\":\"8\",\"confirmed\":\"554\"},{\"date\":\"2020-03-24\",\"suspected\":\"0\",\"cured\":\"401\",\"dead\":\"8\",\"confirmed\":\"559\"},{\"date\":\"2020-03-25\",\"suspected\":\"0\",\"cured\":\"403\",\"dead\":\"8\",\"confirmed\":\"565\"},{\"date\":\"2020-03-26\",\"suspected\":\"0\",\"cured\":\"406\",\"dead\":\"8\",\"confirmed\":\"569\"},{\"date\":\"2020-03-27\",\"suspected\":\"0\",\"cured\":\"409\",\"dead\":\"8\",\"confirmed\":\"572\"},{\"date\":\"2020-03-28\",\"suspected\":\"0\",\"cured\":\"411\",\"dead\":\"8\",\"confirmed\":\"576\"},{\"date\":\"2020-03-29\",\"suspected\":\"0\",\"cured\":\"412\",\"dead\":\"8\",\"confirmed\":\"577\"},{\"date\":\"2020-03-30\",\"suspected\":\"0\",\"cured\":\"416\",\"dead\":\"8\",\"confirmed\":\"580\"},{\"date\":\"2020-03-31\",\"suspected\":\"0\",\"cured\":\"418\",\"dead\":\"8\",\"confirmed\":\"580\"},{\"date\":\"2020-04-01\",\"suspected\":\"0\",\"cured\":\"424\",\"dead\":\"8\",\"confirmed\":\"582\"},{\"date\":\"2020-04-02\",\"suspected\":\"0\",\"cured\":\"434\",\"dead\":\"8\",\"confirmed\":\"583\"},{\"date\":\"2020-04-03\",\"suspected\":\"0\",\"cured\":\"438\",\"dead\":\"8\",\"confirmed\":\"585\"},{\"date\":\"2020-04-04\",\"suspected\":\"0\",\"cured\":\"441\",\"dead\":\"8\",\"confirmed\":\"586\"},{\"date\":\"2020-04-05\",\"suspected\":\"0\",\"cured\":\"443\",\"dead\":\"8\",\"confirmed\":\"587\"},{\"date\":\"2020-04-06\",\"suspected\":\"0\",\"cured\":\"448\",\"dead\":\"8\",\"confirmed\":\"587\"},{\"date\":\"2020-04-07\",\"suspected\":\"0\",\"cured\":\"455\",\"dead\":\"8\",\"confirmed\":\"588\"},{\"date\":\"2020-04-08\",\"suspected\":\"0\",\"cured\":\"464\",\"dead\":\"8\",\"confirmed\":\"588\"},{\"date\":\"2020-04-09\",\"suspected\":\"0\",\"cured\":\"469\",\"dead\":\"8\",\"confirmed\":\"588\"},{\"date\":\"2020-04-10\",\"suspected\":\"0\",\"cured\":\"474\",\"dead\":\"8\",\"confirmed\":\"589\"},{\"date\":\"2020-04-11\",\"suspected\":\"0\",\"cured\":\"479\",\"dead\":\"8\",\"confirmed\":\"589\"},{\"date\":\"2020-04-12\",\"suspected\":\"0\",\"cured\":\"484\",\"dead\":\"8\",\"confirmed\":\"589\"},{\"date\":\"2020-04-13\",\"suspected\":\"0\",\"cured\":\"491\",\"dead\":\"8\",\"confirmed\":\"589\"},{\"date\":\"2020-04-14\",\"suspected\":\"0\",\"cured\":\"495\",\"dead\":\"8\",\"confirmed\":\"590\"},{\"date\":\"2020-04-15\",\"suspected\":\"0\",\"cured\":\"503\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-16\",\"suspected\":\"0\",\"cured\":\"509\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-17\",\"suspected\":\"0\",\"cured\":\"509\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-18\",\"suspected\":\"0\",\"cured\":\"510\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-19\",\"suspected\":\"0\",\"cured\":\"514\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-20\",\"suspected\":\"0\",\"cured\":\"516\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-21\",\"suspected\":\"0\",\"cured\":\"518\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-22\",\"suspected\":\"0\",\"cured\":\"522\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-23\",\"suspected\":\"0\",\"cured\":\"524\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-24\",\"suspected\":\"0\",\"cured\":\"525\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-25\",\"suspected\":\"0\",\"cured\":\"525\",\"dead\":\"8\",\"confirmed\":\"593\"},{\"date\":\"2020-04-26\",\"suspected\":\"0\",\"cured\":\"525\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-04-27\",\"suspected\":\"0\",\"cured\":\"536\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-04-28\",\"suspected\":\"0\",\"cured\":\"538\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-04-29\",\"suspected\":\"0\",\"cured\":\"538\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-04-30\",\"suspected\":\"0\",\"cured\":\"542\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-01\",\"suspected\":\"0\",\"cured\":\"547\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-02\",\"suspected\":\"0\",\"cured\":\"547\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-03\",\"suspected\":\"0\",\"cured\":\"551\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-04\",\"suspected\":\"0\",\"cured\":\"553\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-05\",\"suspected\":\"0\",\"cured\":\"554\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-06\",\"suspected\":\"0\",\"cured\":\"555\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-07\",\"suspected\":\"0\",\"cured\":\"557\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-08\",\"suspected\":\"0\",\"cured\":\"560\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-09\",\"suspected\":\"0\",\"cured\":\"563\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-10\",\"suspected\":\"0\",\"cured\":\"565\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-11\",\"suspected\":\"0\",\"cured\":\"568\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-12\",\"suspected\":\"0\",\"cured\":\"571\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-13\",\"suspected\":\"0\",\"cured\":\"573\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-14\",\"suspected\":\"0\",\"cured\":\"574\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-15\",\"suspected\":\"0\",\"cured\":\"574\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-16\",\"suspected\":\"0\",\"cured\":\"576\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-17\",\"suspected\":\"0\",\"cured\":\"578\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-18\",\"suspected\":\"0\",\"cured\":\"578\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-19\",\"suspected\":\"0\",\"cured\":\"578\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-20\",\"suspected\":\"0\",\"cured\":\"578\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-21\",\"suspected\":\"0\",\"cured\":\"579\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-22\",\"suspected\":\"0\",\"cured\":\"579\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-23\",\"suspected\":\"0\",\"cured\":\"579\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-24\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-25\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-26\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-27\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-28\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-29\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-30\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-05-31\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-06-01\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-06-02\",\"suspected\":\"0\",\"cured\":\"581\",\"dead\":\"9\",\"confirmed\":\"593\"},{\"date\":\"2020-06-03\",\"suspected\":\"0\",\"cured\":\"582\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-04\",\"suspected\":\"0\",\"cured\":\"583\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-05\",\"suspected\":\"0\",\"cured\":\"583\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-06\",\"suspected\":\"0\",\"cured\":\"583\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-07\",\"suspected\":\"0\",\"cured\":\"583\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-08\",\"suspected\":\"0\",\"cured\":\"583\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-09\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-10\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"594\"},{\"date\":\"2020-06-11\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"595\"},{\"date\":\"2020-06-12\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"597\"},{\"date\":\"2020-06-13\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"601\"},{\"date\":\"2020-06-14\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"645\"},{\"date\":\"2020-06-15\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"673\"},{\"date\":\"2020-06-16\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"700\"},{\"date\":\"2020-06-17\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"731\"},{\"date\":\"2020-06-18\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"752\"},{\"date\":\"2020-06-19\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"777\"},{\"date\":\"2020-06-20\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"799\"},{\"date\":\"2020-06-21\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"821\"},{\"date\":\"2020-06-22\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"830\"},{\"date\":\"2020-06-23\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"843\"},{\"date\":\"2020-06-24\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"850\"},{\"date\":\"2020-06-25\",\"suspected\":\"0\",\"cured\":\"584\",\"dead\":\"9\",\"confirmed\":\"863\"},{\"date\":\"2020-06-26\",\"suspected\":\"0\",\"cured\":\"585\",\"dead\":\"9\",\"confirmed\":\"874\"},{\"date\":\"2020-06-27\",\"suspected\":\"0\",\"cured\":\"585\",\"dead\":\"9\",\"confirmed\":\"891\"},{\"date\":\"2020-06-28\",\"suspected\":\"0\",\"cured\":\"585\",\"dead\":\"9\",\"confirmed\":\"905\"},{\"date\":\"2020-06-29\",\"suspected\":\"0\",\"cured\":\"586\",\"dead\":\"9\",\"confirmed\":\"912\"},{\"date\":\"2020-06-30\",\"suspected\":\"0\",\"cured\":\"587\",\"dead\":\"9\",\"confirmed\":\"919\"},{\"date\":\"2020-07-01\",\"suspected\":\"0\",\"cured\":\"587\",\"dead\":\"9\",\"confirmed\":\"922\"},{\"date\":\"2020-07-02\",\"suspected\":\"0\",\"cured\":\"590\",\"dead\":\"9\",\"confirmed\":\"923\"},{\"date\":\"2020-07-03\",\"suspected\":\"0\",\"cured\":\"592\",\"dead\":\"9\",\"confirmed\":\"925\"},{\"date\":\"2020-07-04\",\"suspected\":\"0\",\"cured\":\"594\",\"dead\":\"9\",\"confirmed\":\"926\"},{\"date\":\"2020-07-05\",\"suspected\":\"0\",\"cured\":\"595\",\"dead\":\"9\",\"confirmed\":\"928\"},{\"date\":\"2020-07-06\",\"suspected\":\"0\",\"cured\":\"596\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-07\",\"suspected\":\"0\",\"cured\":\"600\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-08\",\"suspected\":\"0\",\"cured\":\"613\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-09\",\"suspected\":\"0\",\"cured\":\"645\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-10\",\"suspected\":\"0\",\"cured\":\"657\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-11\",\"suspected\":\"0\",\"cured\":\"669\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-12\",\"suspected\":\"0\",\"cured\":\"680\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-13\",\"suspected\":\"0\",\"cured\":\"694\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-14\",\"suspected\":\"0\",\"cured\":\"716\",\"dead\":\"9\",\"confirmed\":\"929\"},{\"date\":\"2020-07-15\",\"suspected\":\"0\",\"cured\":\"730\",\"dead\":\"9\",\"confirmed\":\"929\"}],\"historydetail\":[{\"date\":\"2020-01-21\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"1\"},{\"date\":\"2020-01-22\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"1\"},{\"date\":\"2020-01-23\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"1\"},{\"date\":\"2020-01-24\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"2\"},{\"date\":\"2020-01-25\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"2\"},{\"date\":\"2020-01-26\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"4\"},{\"date\":\"2020-01-27\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"4\"},{\"date\":\"2020-01-28\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"7\"},{\"date\":\"2020-01-29\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"11\"},{\"date\":\"2020-01-30\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"11\"},{\"date\":\"2020-01-31\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"12\"},{\"date\":\"2020-02-01\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"16\"},{\"date\":\"2020-02-02\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"17\"},{\"date\":\"2020-02-03\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"18\"},{\"date\":\"2020-02-04\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"20\"},{\"date\":\"2020-02-05\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"20\"},{\"date\":\"2020-02-06\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"22\"},{\"date\":\"2020-02-07\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"22\"},{\"date\":\"2020-02-08\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"26\"},{\"date\":\"2020-02-09\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"27\"},{\"date\":\"2020-02-10\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"30\"},{\"date\":\"2020-02-11\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"30\"},{\"date\":\"2020-02-12\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"32\"},{\"date\":\"2020-02-13\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"36\"},{\"date\":\"2020-02-14\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"36\"},{\"date\":\"2020-02-15\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"38\"},{\"date\":\"2020-02-16\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"39\"},{\"date\":\"2020-02-17\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"39\"},{\"date\":\"2020-02-18\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"40\"},{\"date\":\"2020-02-19\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"40\"},{\"date\":\"2020-02-20\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"40\"},{\"date\":\"2020-02-21\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"41\"},{\"date\":\"2020-02-22\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"41\"},{\"date\":\"2020-02-23\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"41\"},{\"date\":\"2020-02-24\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"41\"},{\"date\":\"2020-02-25\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"41\"},{\"date\":\"2020-02-26\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"41\"},{\"date\":\"2020-02-27\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"42\"},{\"date\":\"2020-02-28\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"42\"},{\"date\":\"2020-02-29\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"42\"},{\"date\":\"2020-03-01\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"42\"},{\"date\":\"2020-03-02\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"42\"},{\"date\":\"2020-03-03\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"42\"},{\"date\":\"2020-03-04\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-05\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-06\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-07\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-08\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-09\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-10\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-11\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-12\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-13\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-14\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-15\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-16\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-17\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-18\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-19\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-20\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-21\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-22\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-23\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-24\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-25\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-26\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-27\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-28\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-29\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-30\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-03-31\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-01\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-02\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-03\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-04\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-05\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-06\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-07\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-08\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-09\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-10\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-11\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-12\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-13\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-14\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-15\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-16\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-17\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-18\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-19\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-20\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-21\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-22\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-23\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-24\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-25\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-26\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-27\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-28\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-29\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-04-30\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-01\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-02\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-03\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-04\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-05\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-06\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-07\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-08\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-09\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-10\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-11\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-12\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-13\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-14\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-15\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-16\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-17\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-18\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-19\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-20\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-21\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-22\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-23\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-24\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-25\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-26\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-27\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-28\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-29\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-30\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-05-31\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-01\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-02\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-03\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-04\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-05\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-06\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-07\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-08\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-09\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-10\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-11\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"43\"},{\"date\":\"2020-06-12\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"45\"},{\"date\":\"2020-06-13\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"48\"},{\"date\":\"2020-06-14\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"80\"},{\"date\":\"2020-06-15\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"101\"},{\"date\":\"2020-06-16\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"123\"},{\"date\":\"2020-06-17\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"142\"},{\"date\":\"2020-06-18\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"156\"},{\"date\":\"2020-06-19\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"174\"},{\"date\":\"2020-06-20\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"187\"},{\"date\":\"2020-06-21\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"197\"},{\"date\":\"2020-06-22\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"202\"},{\"date\":\"2020-06-23\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"208\"},{\"date\":\"2020-06-24\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"214\"},{\"date\":\"2020-06-25\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"223\"},{\"date\":\"2020-06-26\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"230\"},{\"date\":\"2020-06-27\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"245\"},{\"date\":\"2020-06-28\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"255\"},{\"date\":\"2020-06-29\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"260\"},{\"date\":\"2020-06-30\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"266\"},{\"date\":\"2020-07-01\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"266\"},{\"date\":\"2020-07-02\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"267\"},{\"date\":\"2020-07-03\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"269\"},{\"date\":\"2020-07-04\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"270\"},{\"date\":\"2020-07-05\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"272\"},{\"date\":\"2020-07-06\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-07\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-08\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-09\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-10\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-11\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-12\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-13\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-14\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"},{\"date\":\"2020-07-15\",\"suspected\":\"0\",\"cured\":\"0\",\"dead\":\"0\",\"confirmed\":\"273\"}]}"

            res=JSON.parse(data);
            console.log(res);

            //$("#time").text(res.today.confirmed.date);
            $(".num h1").eq(0).html(res.today.confirmed);
            $(".num h1").eq(1).html(res.today.cured);
            $(".num h1").eq(2).html(res.today.dead);

            var map_data = [{'name':"丰台区",'value': res.todaydetail.丰台区.confirmed},
                {'name':"西城区",'value': res.todaydetail.西城区.confirmed},
                {'name':"海淀区",'value': res.todaydetail.海淀区.confirmed},
                {'name':"东城区",'value': res.todaydetail.东城区.confirmed},
                {'name':"朝阳区",'value': res.todaydetail.朝阳区.confirmed},
                {'name':"石景山区",'value': res.todaydetail.石景山区.confirmed},
                {'name':"门头沟区",'value': res.todaydetail.门头沟区.confirmed},
                {'name':"顺义区",'value': res.todaydetail.顺义区.confirmed},
                {'name':"房山区",'value': res.todaydetail.房山区.confirmed},
                {'name':"密云区",'value': res.todaydetail.密云区.confirmed},
                {'name':"延庆区",'value': res.todaydetail.延庆区.confirmed},
                {'name':"通州区",'value': res.todaydetail.通州区.confirmed},
                {'name':"大兴区",'value': res.todaydetail.大兴区.confirmed},
                {'name':"怀柔区",'value': res.todaydetail.怀柔区.confirmed},
                {'name':"昌平区",'value': res.todaydetail.昌平区.confirmed},
                {'name':"平谷区",'value': res.todaydetail.平谷区.confirmed},];
            optionMap.series[0].data = map_data
            ec_center.setOption(optionMap)

            var date=[];
            var confirmed=[];
            var cured=[];
            var dead=[];
            for(i=0;i<res.history.length;i++){
                date.push(res.history[i].date);
                confirmed.push(res.history[i].confirmed);
                cured.push(res.history[i].cured);
                dead.push(res.history[i].dead);
            }
            option_left1.xAxis.data = date;
            option_left1.series[0].data = confirmed;
            option_left1.series[1].data = cured;
            option_left1.series[2].data = dead;
            ec_left1.setOption(option_left1);

            var date1=[];
            var confirmed1=[];
            var cured1=[];
            var dead1=[];
            for(i=0;i<res.historydetail.length;i++){
                date1.push(res.historydetail[i].date);
                confirmed1.push(res.historydetail[i].confirmed);
                cured1.push(res.historydetail[i].cured);
                dead1.push(res.historydetail[i].dead);
            }

            option_left2.xAxis.data = date1;
            option_left2.series[0].data = confirmed1;
            option_left2.series[1].data = cured1;
            option_left2.series[2].data = dead1;
            ec_left2.setOption(option_left2);



            option_right1.xAxis.data = ["丰台区","西城区","海淀区","东城区","朝阳区","石景山区","门头沟区","顺义区","房山区","密云区","延庆区","通州区","大兴区","怀柔区","昌平区","平谷区"];
            option_right1.series[0].data = [ res.todaydetail.丰台区.confirmed, res.todaydetail.西城区.confirmed,
                res.todaydetail.海淀区.confirmed,res.todaydetail.东城区.confirmed,
                res.todaydetail.朝阳区.confirmed,
                res.todaydetail.石景山区.confirmed,
                res.todaydetail.门头沟区.confirmed,
                res.todaydetail.顺义区.confirmed,
                res.todaydetail.房山区.confirmed,
                res.todaydetail.密云区.confirmed,
                res.todaydetail.延庆区.confirmed,
                res.todaydetail.通州区.confirmed,
                res.todaydetail.大兴区.confirmed,
                res.todaydetail.怀柔区.confirmed,
                res.todaydetail.昌平区.confirmed,
                res.todaydetail.平谷区.confirmed];
            ec_right1.setOption(option_right1);

        }
    )
}
//setInterval("ajaxrequest()",15000);
ajaxrequest();

setInterval(function(){
    var date = new Date();
    var year = date.getFullYear();    //获取当前年份
    var mon = date.getMonth()+1;      //获取当前月份
    var da = date.getDate();          //获取当前日
    var day = date.getDay();          //获取当前星期几
    var h = date.getHours();          //获取小时
    var m = date.getMinutes();        //获取分钟
    var s = date.getSeconds();        //获取秒
    var d = document.getElementById('time');
    d.innerHTML='当前时间:'+year+'年'+mon+'月'+da+'日'+' '+h+':'+m+':'+s;
},1000)

