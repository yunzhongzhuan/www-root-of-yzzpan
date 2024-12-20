


function login(){

	let phone = document.getElementsByClassName('login-phone-input')[0].value;
	let password = document.getElementsByClassName('login-password-input')[0].value;
	password = calcMD5(password);



    // 创建 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();

    // 设置请求地址和方法
    const url = loginURL;
    xhr.open("POST", url, true);

    // 设置请求头，告诉服务器接收 JSON 数据
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // 处理服务器响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // 请求完成
            if (xhr.status === 200) { // 请求成功

                try {
                    const response = JSON.parse(xhr.responseText); // 解析 JSON 响应
                    // console.log("成功获取文件夹:", response);



                    	if(
                    		response["status"] == true
                    	){

                    		if(
                    			response["session_id"] != undefined
	                    	){

	                    		localStorage.setItem("sessionId", response["session_id"]);

	                    		window.location.href = "buckets";

	                    	}

                    	}else{

                    		// 登录失败

                    		swal({
								title: "登录失败",
								text: response["message"],
								icon: "error",
								buttons: true,
								closeOnClickOutside: false,
								dangerMode: true,
							}).then((willDelete) => {
								if (willDelete) {
									// pass
								}
							});

                    	}


                } catch (e) {
                    console.error("解析响应失败:", e);
                }
            } else {
                console.error("请求失败，状态码:", xhr.status);
            }
        }
    };

    // 准备请求参数
    const params = `session_id=${encodeURIComponent(sessionId)}&phone=${encodeURIComponent(phone)}&passwordMD5=${password}`;

    // 发送请求
    xhr.send(params);

}



// login
if(document.getElementsByClassName('login-main')[0]!=undefined){


	document.getElementsByClassName('login-main')[0].getElementsByClassName('login')[0].onclick = function(){

		// window.location.href = "buckets"; // buckets

		login();

	}






}










