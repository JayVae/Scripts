// �����ҳ�Ŀγ����ӱ�ǩ
var ll = $("a:contains('ȥ�ۿ�')");
var j = 0;

// ������ʽ��ȡurl�еĲ���ֵ
function getUrlParam(url, name) {
    var reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)");
    //����һ������Ŀ�������������ʽ����
    var r = url.match(reg);
    //ƥ��Ŀ�����
    if (r != null)
        return unescape(r[2]);
    return null;
    //���ز���ֵ
}

// ֱ�����������ַ���ͽ����Լ�������Ϣ
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

// ִ�в���
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