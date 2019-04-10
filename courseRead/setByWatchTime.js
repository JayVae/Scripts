var ll=$(acontains('去观看'));
var j=0;
var i = 0 ;

        function getUrlParam(url,name) {
            var reg = new RegExp((^&) + name + =([^&])(&$)); 构造一个含有目标参数的正则表达式对象
            var r = url.match(reg);  匹配目标参数
            if (r != null) return unescape(r[2]); return null; 返回参数值
        }

 发送观看时间
function timeout(t){
	$.ajax({ 
	url'httpxjtudj.edu.cn80coursecourse_updateUserWatchRecord.do',
	typePOST,
	data{courseIDcourseID,watchTimet2,ccIDccID,classIDclassID},
	async  false,
	dataTypejson,
	successfunction(data){
		 console.info(data);
		 if(data.flag){
			window.location.href = httpxjtudj.edu.cn80htmlcoursecourse_opened.jsp
		} 
	}
	});

}

for(j=0;jll.length;j++){
	console.log(ll[j].href);
	courseID=getUrlParam(ll[j].href,courseID);
	ccID=getUrlParam(ll[j].href,ccID);
	classID=getUrlParam(ll[j].href,classID);
 	console.log(courseID);

	for(i = 0;i900;i++){
		setTimeout(timeout(2i),1);

	}

}




setTimeout(function(){
		

	},10)