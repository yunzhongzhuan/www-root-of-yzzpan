




// Buckets.html
if(document.getElementsByClassName('buckets')[0]!=undefined){


	// 导航栏点击展开或收起按钮
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = navShowAndHide;




	// 点击创建桶按钮
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('create-bucket')[0].onclick = function(){
		window.location.href = 'create-bucket.html'; // create-bucket.html
	}



	// 刷新桶列表的按钮
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('input-button-reload')[0].onclick = function(){
		if(this.clickTimes == undefined){
			this.clickTimes = 0;
		}
		this.clickTimes += 1;
		this.getElementsByTagName('i')[0].style.transform = "rotateZ(" + this.clickTimes*360 + "deg)";
	}


}














