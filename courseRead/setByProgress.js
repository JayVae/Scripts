// 获得网页的课程链接标签
var ll = $("a:contains('去观看')");
var j = 0;

// 正则表达式获取url中的参数值
function getUrlParam(url, name) {
    var reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)");
    //构造一个含有目标参数的正则表达式对象
    var r = url.match(reg);
    //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null;
    //返回参数值
}

// 直接向服务器地址发送进度以及其他信息
function timeout(t) {
    $.ajax({
        url: 'http://xjtudj.edu.cn/partyconstruction/client/course/setLearnedHistory',
        type: "POST",
        data: {
            "userId": "c42c4817da81469599bec909c6496169",
            "time": 1549022960000,
            "encodeToken": "0307be7b2a3e4ca763a486e5f6047de4",
            "requestType": "",
            "courseId": courseID,
            "coursewareId": coursewareId,
            "progress": t
        },
        async: false,
        dataType: "json",
        success: function(data) {
            if (data.code == 208) {
                console.info(data);
            } else {
                console.log("ok");
            }

            /* if(data.flag){
			window.location.href = "http://xjtudj.edu.cn:80/html/course/course_opened.jsp"
		} */
        }
    });

}

// 执行部分
for (j = 4; j < 30; j++) {
    console.log(ll[j].href);
    courseID = getUrlParam(ll[j].href, "courseId");
    coursewareId = getUrlParam(ll[j].href, "coursewareId");
    // 	console.log(courseID);
    var data = {
        "userId": "c42c4817da81469599bec909c6496169",
        "time": 1549022960000,
        "encodeToken": "0307be7b2a3e4ca763a486e5f6047de4",
        "requestType": "",
        "courseId": courseID,
        "coursewareId": coursewareId,
        "progress": 890000.156
    };

    console.log(JSON.stringify(data));
}