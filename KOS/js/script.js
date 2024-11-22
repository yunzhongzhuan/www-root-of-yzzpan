



















let navLocked = false;
let navShow = true;

// 缩小导航栏
function miniNav(){

	if(navLocked){return  false;};
	navLocked = true;

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.opacity = "0";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.maxHeight = "0px";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.margin = "0px 20px 0px 20px";


	// 导航栏 对象存储 文字标题
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.opacity = "0";


	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.opacity = "0";
		}

	}






	setTimeout(hideNavSpan,200);

}




// 隐藏导航栏的span标签
function hideNavSpan(){

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.display = "none";


	// 导航栏 对象存储 文字标题
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.display = "none";


	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.display = "none";
		}

	}



	// 导航栏宽度
	document.getElementsByClassName('buckets-nav')[0].style.width = "50px";
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].style.width = "50px";

	// 桶列表宽度
	document.getElementsByClassName('buckets-main')[0].style.width = "calc(100% - 120px)";

	// 展开或收缩导航栏的按钮
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].className = "fa fa-indent";


	setTimeout(function(){
		navLocked = false;
		navShow = false;
	},200);

}






// 显示导航栏
function showNav(){



	// 导航栏宽度
	document.getElementsByClassName('buckets-nav')[0].style.width = "200px";
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].style.width = "200px";

	// 桶列表宽度
	document.getElementsByClassName('buckets-main')[0].style.width = "calc(100% - 270px)";

	// 展开或收缩导航栏的按钮
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].className = "fa fa-dedent";

	setTimeout(showNavSpan,200);

}

function showNavSpan(){


	// 导航栏 对象存储 文字标题
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.display = "unset";


	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.display = "unset";


	

	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.display = "unset";

		}

	}

	setTimeout(showNavSpan2,10);


}



function showNavSpan2(){

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.opacity = "1";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.maxHeight = "30px";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.margin = "10px 20px 20px 20px";


	// 导航栏 对象存储 文字标题
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.opacity = "1";


	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.opacity = "1";
		}

	}

	setTimeout(function(){
		navShow = true;
	},200);

}





function navShowAndHide(){


	// 让展开或收起左侧导航栏的按钮短暂失效
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = function(){}

	// 恢复点击事件
	setTimeout(function(){
		document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = navShowAndHide;
	},202);

	// 如果正在展开或收起
	if(navLocked){
		return false;
	}
	if(navShow){
		miniNav();
	}else{
		showNav();
	}





}







// 消除 创建存储桶 页面 已选中的 item
function removeSelectedIndex(parent){

	let items = parent.getElementsByClassName('select-option-item');

	for(
		let i=0;
		i<items.length;
		i++
	){
		items[i].className = "select-option-item";
	}


}



// 给所有选项上点击事件
let select_option_items_all = document.getElementsByClassName('select-option-items');

for(
	let i=0;
	i<select_option_items_all.length;
	i++
){

	select_option_items = select_option_items_all[i];

	
	let select_option_item = select_option_items.getElementsByClassName('select-option-item');
	for(
		let i2 = 0;
		i2 < select_option_item.length;
		i2++
	){

		let item = select_option_item[i2];

		item.parent = select_option_items;

		item.onclick = function(){

			removeSelectedIndex(this.parent);

			this.className = "select-option-item select-option-item-selected-index";

		}

	}

	

}






