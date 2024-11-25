





// 是否全部文件已经被选中
let bucket_all_files_selected = false;
// 检查是否全部文件都已经被选中
function filesAllSelectedYesOrNo(){

	// 获取所有文件 item
	let bucket_files_items = document.getElementsByClassName('bucket-files-items')[0].getElementsByClassName('bucket-files-item');
	// 文件总数
	document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;

	let files_items_selected_count = 0;
	for(
		let i=0;
		i<bucket_files_items.length;
		i++
	){
		if(
			bucket_files_items[i].getElementsByClassName('bucket-files-headers-selected-index')[0]!=undefined
		){
			files_items_selected_count += 1;
		}
	}


	// 选中多少个文件了？
	// 文件总数
	document.getElementsByClassName('bucket-files-items-selected-count')[0].innerText = files_items_selected_count;

	if(
		files_items_selected_count == bucket_files_items.length
	){
		// swal('已经全选');
		// 让已经全选的按钮亮起来
		// 文件列表头部的全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-files-headers')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select bucket-files-headers-selected-index";
		// 文件列表底部翻页全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-file-pages')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select bucket-files-headers-selected-index";
		bucket_all_files_selected = true;
	}else{
		// 不是全选状态
		// 文件列表头部的全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-files-headers')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select";
		// 文件列表底部翻页全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-file-pages')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select";
		bucket_all_files_selected = false;
	}

}

// 全选文件
function selectAllFiles(){

	// 全部文件已经被选中，那就进行对所有文件取消选中。
	if(
		bucket_all_files_selected
	){

		// 全部文件已经被选中，那就进行对所有文件取消选中。
		// 获取所有文件 item
		let bucket_files_items = document.getElementsByClassName('bucket-files-items')[0].getElementsByClassName('bucket-files-item');
		// 文件总数
		document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;

		for(
			let i=0;
			i<bucket_files_items.length;
			i++
		){
			if(
				bucket_files_items[i].selected == true
			){
				bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].click();
			}
		}



	}else{

		// 否则文件没有被全选中，对未选中的文件进行选中
		// 获取所有文件 item
		let bucket_files_items = document.getElementsByClassName('bucket-files-items')[0].getElementsByClassName('bucket-files-item');
		// 文件总数
		document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;


		for(
			let i=0;
			i<bucket_files_items.length;
			i++
		){
			if(
				bucket_files_items[i].selected == false
			){
				bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].click();
			}
		}


	}
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
	// 文件总数
	document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;

	for(
		let i=0;
		i<bucket_files_items.length;
		i++
	){

		bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].parentElement = bucket_files_items[i];
		if(
			bucket_files_items[i].selected == undefined
		){
			bucket_files_items[i].selected = false;
		}
		bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].onclick = function(){
			if(
				this.parentElement.selected
			){
				// 取消选中/解除选中
				this.parentElement.getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select";
				this.parentElement.selected = false;
			}else{
				// 进行选中
				this.parentElement.getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select bucket-files-headers-selected-index";
				this.parentElement.selected = true;
			}

			// 最后，检查是否全选中。
			filesAllSelectedYesOrNo();
			
		}
	}




}