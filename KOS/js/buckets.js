




// 获取桶列表


function getBuckets(){


    // 创建 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();

    // 设置请求地址和方法
    const url = getBucketsURL;
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

                    		// 用户登录状态
                    		console.log('获取 Buckets 成功！');


                    	}else{


	                    		// 未登录

	                    		swal({
									title: "系统提示",
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
    const params = `session_id=${encodeURIComponent(sessionId)}`;

    // 发送请求
    xhr.send(params);



}




// Buckets.html
if(document.getElementsByClassName('buckets')[0]!=undefined){


	




	// 点击创建桶按钮
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('create-bucket')[0].onclick = function(){
		window.location.href = 'create-bucket.html'; // create-bucket.html
	}


	buckets_items = document.getElementsByClassName('buckets-main-table-header-title');
	for(
		let i=0;
		i<buckets_items.length;
		i++
	){
		if(
			buckets_items[i].getElementsByTagName('span')[0]!=undefined
		){
			buckets_items[i].getElementsByTagName('span')[0].onclick = function(){
				window.location.href = "bucket.html?bucket=" + encodeURIComponent(buckets_items[i].getElementsByTagName('span')[0].innerText);
			}
		}


	}



}















