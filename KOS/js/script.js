








// 接口信息配置区域
// 接口信息配置区域
// 接口信息配置区域




// 获取桶文件对应上传地址 用于上传文件页面
let getBucketFileUploadTokenURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/upload/upload";

// 获取文件夹列表
let getBucketFoldersURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/folders";

// 获取文件列表
let getBucketFilesURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/files";

// 登录
let loginURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/login";

// 用户信息
let getUserinfoURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/userinfo";

// 获取桶列表
let getBucketsURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/buckets";

// 本接口服务器PHP文件暂时正在开发中暂未上传GitHub








// 定义 sessid
let sessionId = "undefined";
// 尝试获取存储位于本地的 sessionId start
getSessionId202412201355A1 = localStorage.getItem("sessionId");
if(
	getSessionId202412201355A1 != null && getSessionId202412201355A1 != undefined && getSessionId202412201355A1!= "" && getSessionId202412201355A1!= "undefined" && getSessionId202412201355A1!= "null"
){
	sessionId = getSessionId202412201355A1;
}
// 尝试获取存储位于本地的 sessionId end




// 计算MD5
function calcMD5(string) {
  function md5Cycle(x, k) {
    let a = x[0], b = x[1], c = x[2], d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }

  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }

  function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  function md51(s) {
    let txt = '';
    const n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878];
    for (let i = 64; i <= n; i += 64) {
      md5Cycle(state, md5Blk(s.substring(i - 64, i)));
    }
    s = s.substring(n - (n % 64));
    const tail = Array(16).fill(0);
    for (let i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) * 8);
    tail[s.length >> 2] |= 0x80 << ((s.length % 4) * 8);
    if (s.length > 55) {
      md5Cycle(state, tail);
      for (let i = 0; i < 16; i++) tail[i] = 0;
    }
    tail[14] = n * 8;
    md5Cycle(state, tail);
    return state;
  }

  function md5Blk(s) {
    const md5blks = [];
    for (let i = 0; i < 64; i += 4) {
      md5blks[i >> 2] =
        s.charCodeAt(i) +
        (s.charCodeAt(i + 1) << 8) +
        (s.charCodeAt(i + 2) << 16) +
        (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  function rhex(n) {
    const s = '0123456789abcdef';
    let j = 0;
    let output = '';
    for (; j < 4; j++) output += s.charAt((n >> (j * 8 + 4)) & 0x0f) + s.charAt((n >> (j * 8)) & 0x0f);
    return output;
  }

  function hex(x) {
    for (let i = 0; i < x.length; i++) x[i] = rhex(x[i]);
    return x.join('');
  }

  function add32(a, b) {
    return (a + b) & 0xffffffff;
  }

  if (calcMD5.prototype.add32) add32 = (a, b) => (a + b) & 0xffffffff;

  return hex(md51(string));
}









// 计算文件大小显示单位
function getSizeUnit(size){
	let unit = 'B';
	if(size >= 1024){
		size /= 1024;
		unit = 'KB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'MB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'GB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'TB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'PB';
	}
	try{
		size = size.toFixed(2);
	}catch(e){};
	return size + unit;
}


// UTC to Beijing Time
// 将时间字符串转换为北京时间
function convertToBeijingTime(utcString) {
    // 将时间字符串解析为 Date 对象
    const date = new Date(utcString);

    // 获取北京时间偏移量 (UTC+8)
    const beijingOffset = 8 * 60 * 60 * 1000;

    // 使用原始时间的 UTC 偏移进行计算
    const utcOffset = date.getTimezoneOffset() * 60 * 1000;
    const beijingTime = new Date(date.getTime() + beijingOffset + utcOffset);

    // 格式化北京时间为字符串
    const year = beijingTime.getFullYear();
    const month = String(beijingTime.getMonth() + 1).padStart(2, '0');
    const day = String(beijingTime.getDate()).padStart(2, '0');
    const hours = String(beijingTime.getHours()).padStart(2, '0');
    const minutes = String(beijingTime.getMinutes()).padStart(2, '0');
    const seconds = String(beijingTime.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
// 示例
if(false){
	let utcString = "2024-12-09T04:33:33+00:00";
	let beijingTime = convertToBeijingTime(utcString);
	console.log(beijingTime); // 输出：2024-12-09 12:33:33
}


// 提取目标字符串中指定子字符串首次出现之后的部分
function extractAfterSubstring(inputString, targetSubstring) {
    // 找到目标子字符串首次出现的位置
    const position = inputString.indexOf(targetSubstring);

    // 如果找到了目标子字符串
    if (position !== -1) {
        // 返回从目标子字符串之后的部分
        return inputString.slice(position + targetSubstring.length);
    } else {
        // 如果未找到，返回原字符串
        return inputString;
    }
}

if(false){
	// 示例
	const originalString = "aini/2023/ainiyo/66";
	const target = "aini/";
	const result = extractAfterSubstring(originalString, target);
	console.log(result); // 输出：2023/ainiyo/66
}




// 保留指定/之前的字符
function getStringBeforeNthSlash(str, n) {
  const parts = str.split('/'); // 将字符串按照斜杠分割
  if (n <= 0 || n > parts.length) {
    return ''; // 如果 n 超出了有效范围，返回空字符串
  }
  return parts.slice(0, n).join('/'); // 返回第 n 个斜杠之前的部分
}

if(false){
	// 示例用法
	const str = 'otherfiles/2023/sharefolder/Everything';
	console.log(getStringBeforeNthSlash(str, 1)); // 输出 'otherfiles'
	console.log(getStringBeforeNthSlash(str, 2)); // 输出 'otherfiles/2023'
	console.log(getStringBeforeNthSlash(str, 3)); // 输出 'otherfiles/2023/sharefolder'
}






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
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.opacity = "0";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.opacity = "0";
	}
	


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
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.display = "none";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.display = "none";
	}
	


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
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.display = "unset";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.display = "unset";
	}


	

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
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.opacity = "1";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.opacity = "1";
	}






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
		items[i].className = items[i].className.replace(/select-option-item-selected-index/g,'');
		items[i].className = items[i].className.replace(/  /g,' ');
		// items[i].className = "select-option-item";
	}


}





// 假设当前桶文件夹位置是
let currentFolderPath;


// 点击事件修改响应的地方代码
function onClickOfSelectOptionItemsByItem(THIS){
	
	// console.log(THIS);



	// 处于上传页面
	if(
		document.getElementsByClassName('upload')[0]!=undefined
	){




		// 如果是上传页面点击了以当前目录为位置
		if(
			THIS.className.indexOf('upload-folder-path-current')!=-1
		){


			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = true;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value = currentFolderPath;


		}



		// 如果是点击了根目录
		if(
			THIS.className.indexOf('upload-folder-path-root')!=-1
		){
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = true;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value = "/";

		}




		// 如果点击了演示目录
		
		if(
			THIS.className.indexOf('upload-folder-path-test')!=-1
		){
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = true;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value = "/demo/downloads/files";

		}


		// 如果点击了自定义目录
		
		if(
			THIS.className.indexOf('upload-folder-path-custom')!=-1
		){
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = false;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].focus();
			let length = document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value.length;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].setSelectionRange(length, length);
		}




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

			// 点击了自己 触发对应代码
			onClickOfSelectOptionItemsByItem(this);

			this.className = this.className + " select-option-item-selected-index";

		}

	}

	

}
















// 刷新按钮的点击动画
if(
	document.getElementsByClassName('buckets-main')[0] != undefined
	&&
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('input-button-reload')[0]!=undefined
){
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('input-button-reload')[0].onclick = function(){
		if(this.clickTimes == undefined){
			this.clickTimes = 0;
		}
		this.clickTimes += 1;
		this.getElementsByTagName('i')[0].style.transform = "rotateZ(" + this.clickTimes*360 + "deg)";
	}
}



// 导航栏点击收起或者展开
// 导航栏点击展开或收起按钮
if(
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0]!=undefined
	&&
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0]!=undefined
){

	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = navShowAndHide;

}




let userinfo = {};

function getUserinfo(){


    // 创建 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();

    // 设置请求地址和方法
    const url = getUserinfoURL;
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
                    		console.log('用户处于登录状态');

                    		userinfo["id"] = response["id"];
                    		userinfo["phone"] = response["phone"];



                    		// 处于登录页面
                    		// 已经登录，不要停留在登录页面
                    		if(
                    			document.getElementsByClassName('login-html')[0]!=undefined
                    		){
                    			window.location.href = "buckets.html";
                    		}


                    		// 如果处于 Buckets 页面 获取 桶列表
                    		if(
                    			document.getElementsByClassName('buckets-html')[0]!=undefined
                    		){
                    			getBuckets();
                    		}




                    	}else{

                    		if(
                    			document.getElementsByClassName('login-html')[0] == undefined
                    		){

	                    		

	                    		// 未登录

	                    		swal({
									title: "请先登录",
									text: response["message"],
									icon: "warning",
									buttons: true,
									closeOnClickOutside: false,
									dangerMode: true,
								}).then((willDelete) => {



									// 处于上传页面 未登录，要求登录
		                    		if(
		                    			document.getElementsByClassName('upload-html')[0]!=undefined
		                    		){
		                    			window.location.href = "login.html";
		                    		}

		                    		// 处于创建桶页面 未登录，要求登录
		                    		if(
		                    			document.getElementsByClassName('create-bucket-html')[0]!=undefined
		                    		){
		                    			window.location.href = "login.html";
		                    		}

		                    		// 处于桶列表页面 未登录，要求登录
		                    		if(
		                    			document.getElementsByClassName('buckets-html')[0]!=undefined
		                    		){
		                    			window.location.href = "login.html";
		                    		}

		                    		// 处于桶页面 未登录，要求登录
		                    		if(
		                    			document.getElementsByClassName('bucket-html')[0]!=undefined
		                    		){
		                    			window.location.href = "login.html";
		                    		}





									if (willDelete) {
										// pass
									}
								});


							}

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


// 页面加载完成获取用户信息
window.onload = function(){



	setTimeout(getUserinfo,1);










}







