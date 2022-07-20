//
(function () {
	const $imageList = $('.swiper > div')
	let num = 0
	setInterval(function () {
		// 判断当前num是不是为0,为0:
		const itemId = $imageList[num].id
		$('#' + itemId).siblings().fadeOut()
		$('#' + itemId).fadeIn()
		//itemId超出(不存在时,重置为0)
		if (num == $imageList.length - 1) {
			num = 0
		} else {
			num ++
		}
	}, 3000)
})();


