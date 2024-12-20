


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



                    		for(
                    			let i = 0;
                    			i < response["buckets"].length;
                    			i++
                    		){


	                    		let div = document.createElement('div');
	                    		div.className = "buckets-main-item";
	                    		div.innerHTML = '<div class="buckets-main-table-header-title"><span>' + response["buckets"][i]["bucket"] + '</span></div><div class="buckets-main-table-header-region">' + regions[response["buckets"][i]["regionid"]] + '</div><div class="buckets-main-table-header-type">标准存储</div><div class="buckets-main-table-header-async">单AZ</div><div class="buckets-main-table-header-datetime">' + response["buckets"][i]["createdatetime"] + '</div><div class="buckets-main-table-header-manager-buttons"><span class="buckets-main-table-header-manager-buttons-delete">删除</span></div>';

	                    		document.getElementsByClassName('buckets-main-items')[0].append(div);


                    		}


                    		// 给桶列表设置点击事件
                    		setBucketTitleClickFunction();








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





let regions = {};

// 获取桶大区 全部大区
function getRegions(){


    // 创建 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();

    // 设置请求地址和方法
    const url = getRegionsURL;
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
                    		console.log('获取 Regions 成功！');

                    		for( let i = 0; i < response["regions"].length ; i++){
                    			regions[response["regions"][i]["id"]] = response["regions"][i]["regionname"];
                    		}

                    		// 获取桶列表
                    		getBuckets();


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









// 设置 点击 打开 桶
function setBucketTitleClickFunction(){


	let buckets_items = document.getElementsByClassName('buckets-main-table-header-title');
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



// Buckets.html
if(document.getElementsByClassName('buckets')[0]!=undefined){


	




	// 点击创建桶按钮
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('create-bucket')[0].onclick = function(){
		window.location.href = 'create-bucket.html'; // create-bucket.html
	}







}















