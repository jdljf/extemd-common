// 数组 async some
Array.prototype.someSync = async function (callback, thisArr) {
	for (let [index, item] of Object.entries(this)) {
		if (await callback(item, index, this)) return true
	}
	return false
}

// 数组 async every
Array.prototype.everySync = async function (callback, thisArr) {
	for (const [index, item] of Object.entries(this)) {
		if (!await callback(item, index, this)) return false
	}
	return true
}

// 字符串去掉两边的空格
function strTrim(str){
	return str.replace(/(^\s*)|(\s*$)/g, '')
}

// 判断某个 DOM 是否有某个类（class）
function hasClass (elementDom, className) {
	// ( \\s|^ ) 判断前面是否有空格 （\\s|$ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
	return !!elementDom.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}

// 给元素添加class，首先使用hasClass方法进行了判断
function addClass(elementDom, className) {
	if (!hasClass(elementDom, className)) {
		elementDom.className += ' ' + className
	}
}

// 删除元素的一个class
function deleteClass(elementDom, className) {
	if (hasClass(elementDom, className)) {
		elementDom.className = elementDom.className.replace(new RegExp("(\\s|^)" + className + '(\\s|$)'), '')
	}
}
