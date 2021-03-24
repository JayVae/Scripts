# 一些批处理脚本或工具

1. hexo目录下是自动部署hexo博客，点击deploy.bat即可；

2. autoInternet是自动连接校园网，并登陆账号进行验证。

3. CourseRead中是观看课程的脚本，有两种不同的方式。其中，由于通过progress需要带cooki，而浏览器中无法用ajax带cookie，因此只能每次登陆了执行，或通过postman来带cookie执行。

4.http-server为使用node-js的http-server模块建立一个http服务器。

也可以通过js代码实现

var http = require('http');
 
http.createServer(function (request, response) {
 
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
 
	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);
 
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
