



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




}












