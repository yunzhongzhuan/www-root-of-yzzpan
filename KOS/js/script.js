




let navLocked = false;
let navShow = true;

// 缩小导航栏
function miniNav(){

	if(navLocked){return  false;};
	navLocked = true;

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.opacity = "0";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.maxHeight = "0px";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.margin = "0px 0px 0px 0px";

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

	setTimeout(showNavSpan,70);

}

function showNavSpan(){


	// 导航栏 对象存储 文字标题
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.display = "unset";


	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.display = "unset";


	

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.opacity = "1";


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


	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.opacity = "1";
		}

	}

	navShow = true;


}



// 导航栏点击展开或收起按钮
document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = function(){
	if(navShow){
		miniNav();
	}else{
		showNav();
	}
}