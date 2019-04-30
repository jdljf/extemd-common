Array.prototype.someSync = async function (callback, thisArr) {
	for (let [index, item] of Object.entries(this)) {
		if (await callback(item, index, this)) return true
	}
	return false
}

Array.prototype.everySync = async function (callback, thisArr) {
	for (const [index, item] of Object.entries(this)) {
		if (!await callback(item, index, this)) return false
	}
	return true
}
