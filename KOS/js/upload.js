


// 检测是否没有文件在上传列表
function uploadFilesListIsNull(){

	// 如果文件列表的文件不等于0，则隐藏列表是空的提示
	let files_to_browser_upload_list_files_items = document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-item');
	if(
		files_to_browser_upload_list_files_items.length > 0
	){
		document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-null')[0].style.display = "none";
	}else{
		document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-null')[0].style.display = "block";
	}

}


// 给上传列表的文件做点击删除操作。
function setUploadFilesListItemRemoveButton(){
	// 如果文件列表的文件不等于0，则隐藏列表是空的提示
	let files_to_browser_upload_list_files_items = document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-item');
	
	for(
		let i=0;
		i<files_to_browser_upload_list_files_items.length;
		i++
	){

		if(
			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0].getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].theParentElement == undefined
		){

			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0].getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].theParentElement = files_to_browser_upload_list_files_items[i];
			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0].getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].onclick = function(){
				// delete self

				deleteFile(this.theParentElement.theFile.name, this.theParentElement.theFile.size);

				this.theParentElement.remove();
				uploadFilesListIsNull();// 上传列表是否为空

			}

		}

	}

}






if(
	document.getElementsByClassName('upload')[0]!=undefined
){



	// 返回桶列表
	document.getElementsByClassName('upload')[0].getElementsByClassName('top-page-title-main-icon-button')[0].onclick = function(){
		window.location.href = "bucket.html";
	}


	// 点击 取消 返回桶列表
	document.getElementsByClassName('upload')[0].getElementsByClassName('bottom-buttons-parent')[0].getElementsByClassName('cancel-upload-back-bucket')[0].onclick = function(){
		window.location.href = "bucket.html";
	}






	// 上传列表是否为空
	uploadFilesListIsNull();


	// 给上传列表的文件做点击删除操作。
	setUploadFilesListItemRemoveButton();


	// 存储需要上传的文件
	const filesToUpload = [];


	// 被移除被删除的文件，从上传队列中取消！
	function deleteFile(fileName , fileSize) {
		// 从队列中移除文件
		const fileIndex = filesToUpload.findIndex(item => item.file.name === fileName && item.file.size == fileSize);
		if (fileIndex !== -1) {
			filesToUpload.splice(fileIndex, 1);
		}

		uploadFilesListIsNull();// 上传列表是否为空
	}


	// 选择文件或文件夹
	document.getElementsByClassName('input-for-files-and-folder')[0].addEventListener('change', function(event) {
		const fileList = event.target.files; // 获取文件对象


		for (const file of fileList) {

			const div = document.createElement('div');
			div.className = "files-to-browser-upload-list-files-item";
			div.innerHTML = '<div class="files-to-browser-upload-list-files-item"><div class="files-to-browser-upload-list-files-headers-title">'+file.webkitRelativePath+'</div><div class="files-to-browser-upload-list-files-headers-size">'+file.size+'</div><div class="files-to-browser-upload-list-files-headers-actions"><span class="files-to-browser-upload-list-files-headers-actions-remove">移除</span></div>';

			div.theFile = file;

			// 读取文件的二进制数据并保存到数组中
			const binaryData = readFileAsBinary(file);
			filesToUpload.push({ file, binaryData , div});


			//listItem.textContent = file.webkitRelativePath; // 显示文件的相对路径
			//console.log(listItem);
			// console.log(file);
			document.getElementsByClassName('files-to-browser-upload-list-files-items')[0].append(div);
			uploadFilesListIsNull();// 上传列表是否为空
			setUploadFilesListItemRemoveButton();// 给文件列表的文件做删除按钮操作
		}

		// 如果没有准备上传的文件，则不能点击
		if(
			filesToUpload.length > 0
		){
			// 可以上传 可以点击上传按钮
		}else{
			// 没有文件，禁止上传
		}

	});




	// 选择文件处理
	// 处理文件选择
	document.getElementsByClassName('upload')[0].getElementsByClassName('input-just-for-files')[0].addEventListener('change', async function (event) {
		

		const fileList = event.target.files; // 获取文件对象

		for (const file of fileList) {

			const div = document.createElement('div');
			div.className = "files-to-browser-upload-list-files-item";
			div.innerHTML = '<div class="files-to-browser-upload-list-files-item"><div class="files-to-browser-upload-list-files-headers-title">'+file.name+'</div><div class="files-to-browser-upload-list-files-headers-size">'+file.size+'</div><div class="files-to-browser-upload-list-files-headers-actions"><span class="files-to-browser-upload-list-files-headers-actions-remove">移除</span></div>';

			div.theFile = file;

			// 读取文件的二进制数据并保存到数组中
			const binaryData = readFileAsBinary(file);
			filesToUpload.push({ file, binaryData , div });


			//listItem.textContent = file.webkitRelativePath; // 显示文件的相对路径
			//console.log(listItem);
			// console.log(file);
			document.getElementsByClassName('files-to-browser-upload-list-files-items')[0].append(div);
			uploadFilesListIsNull();// 上传列表是否为空
			setUploadFilesListItemRemoveButton();// 给文件列表的文件做删除按钮操作
		}


		// 如果没有准备上传的文件，则不能点击
		if(
			filesToUpload.length > 0
		){
			// 可以上传 可以点击上传按钮
		}else{
			// 没有文件，禁止上传
		}


	});







	let filesIsUploading = false;

	// 上传按钮被点击
	document.getElementsByClassName('upload-files-to-bucket')[0].addEventListener('click', async function () {

		if(
			filesToUpload.length == 0
		){
			swal('没有可以上传的文件。');
			return false;
		}
		
		swal('正在上传，请看 console.log 输出信息测试。');
		console.log(filesToUpload);
		
		if(
			filesIsUploading == true
		){
			return false;
		}

		filesIsUploading = true;
		console.log('正在上传');
		

		for (const { file, binaryData } of filesToUpload) {
			// 上传文件到服务器
			const response = await uploadFile(binaryData, file.name);
			console.log(`文件: ${file.name} 上传结果:`, response.ok ? '成功' : `失败 (状态码: ${response.status})`);
		}

		console.log('上传完成');
		filesIsUploading = false;
	});


	// 选择文件夹按钮被点击
	document.getElementsByClassName('upload-options')[0].getElementsByClassName('upload-folder')[0].onclick = function(){
		document.getElementsByClassName('input-for-files-and-folder')[0].click();
	}
	// 选择  文件  按钮被点击
	document.getElementsByClassName('upload-options')[0].getElementsByClassName('upload-files')[0].onclick = function(){
		document.getElementsByClassName('input-just-for-files')[0].click();
	}


	/**
	 * 将文件读取为二进制数据的异步函数
	 * @param {File} file 文件对象
	 * @returns {Promise<ArrayBuffer>} 文件的二进制数据
	 */
	function readFileAsBinary(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result); // 读取成功
			reader.onerror = () => reject(reader.error); // 读取失败
			reader.readAsArrayBuffer(file); // 读取为二进制数据
		});
	}



	/**
	 * 上传文件到服务器
	 * @param {ArrayBuffer} binaryData 文件的二进制数据
	 * @param {string} fileName 文件名
	 * @returns {Promise<Response>} 上传请求的响应对象
	 */
	function uploadFile(binaryData, fileName) {
		const apiUrl = 'upload.html'; // 替换为你的上传接口地址

		// 创建 FormData（如果 API 要求直接传二进制，可以去掉 FormData 部分）
		const formData = new FormData();
		formData.append('file', new Blob([binaryData]), fileName);

		// 发送 POST 请求上传文件
		return fetch(apiUrl, {
			method: 'POST',
			body: formData,
		});
	}




	// 清空列表文件
	document.getElementsByClassName('clear-upload-files-items')[0].onclick = function(){

		// 如果文件列表的文件不等于0，则隐藏列表是空的提示
		let files_to_browser_upload_list_files_items = document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-item');
		
		for(
			let i=0;
			i<files_to_browser_upload_list_files_items.length;
			i++
		){

			setTimeout(function(item){
				item.getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].click();
			},1,files_to_browser_upload_list_files_items[i]);
			
		}



	}



}












