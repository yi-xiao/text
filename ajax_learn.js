/* ======================= 原生js编写ajax ==============================*/

/*
* 1.定义ajax对象
* 2.兼容ie5,6与其他浏览器的获取对象
*/
let xhr = '';

if(window.XMLHttpRequest){
	xhr = new XMLHttpRequest();
}else{//ie 5 6
	xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

// async 为true时, 请先看下面的代码再看本段code
xhr.onreadystatechange = function() {
	/*
	*	服务器返回的数据类型为xml与非xml格式
	*
	*		xml格式 接收使用 responseXML
	*			注：需要解析xml对象
	*
	*		非xml格式  使用 responseText
	*			注：只有readyState ==4 时才可用
	*	readyState状态0-4
	*		0：请求未初始化，未调用open（）
	*		1：服务器连接已建立，未调用send（）
	*		2：请求已接收，通常可获取内容头
	*		3：请求处理中，部分数据可用
	*		4：请求完成，响应就绪
	*				
	*/
	if(xhr.readyState === 4 && xhr.status == 200){
		//请求成功状态,执行操作
		
	}
}

/*
* 发送请求到服务器方法：open（）、send（）
*	open（method，url，async） 
*		1.请求类型：常见GET或POST
*		2.URL：文件在服务器的位置（请求路径）
*		3.是否异步请求
*	send（string）
*		1.string参数仅在post方法时使用
*	setRequestHeader（header, value） 以表单形式post数据
*		1.请求头的名称
*		2.请求头的值
*/

xhr.open('GET', 'ajax_info.text', true);
xhr.send();


xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.open('POST', 'ajax_text.html', true);
xhr.send('uname=Jack&upwd=12300');



/* ======================= jquery编写ajax ==============================*/

//常见用法  
$.ajax({
	url: xx, //默认当前页面url
	data: xx,
	type: xx, // GET、POST
	success: function (result, status, xhr) {

	},
	error: function (xhr, status, err) {

	},
	complete: function (xhr, status) {
		
	},
	beforeSend: function (xhr) {

	}
})