

// 全选文件
function selectAllFiles(){
	swal('全选测试');
}



if(
	document.getElementsByClassName('bucket')[0]!=undefined
){



	// 文件列表头部的全选按钮
	document.getElementsByClassName('bucket-files-headers')[0].getElementsByClassName('bucket-files-headers-select')[0].onclick = selectAllFiles;
	// 文件列表底部翻页全选按钮
	document.getElementsByClassName('bucket-file-pages')[0].getElementsByClassName('bucket-files-headers-select')[0].onclick = selectAllFiles;


	document.getElementsByClassName('bucket')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('top-page-title-main-icon-button')[0].onclick = function(){

		window.location.href = "buckets.html";


	}



	// 获取所有文件 item
	let bucket_files_items = document.getElementsByClassName('bucket-files-items')[0].getElementsByClassName('bucket-files-item');
	for(
		let i=0;
		i<bucket_files_items.length;
		i++
	){
		bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].onclick = function(){
			swal('还没做点击事件');
		}
	}




}