$('.input').focus(function () {
    $('.pcText').html('pc端input获取了焦点')
}).blur(function () {
    $('.pcText').html('pc端input失去了焦点')
});

// 移动端:

var body = document.getElementById("input");
body.addEventListener('touchmove', function (event) {
    setTimeout(function () {
        $('.text').html('移动端inpu失去了焦点')
    }, 100)
}, false);
body.addEventListener('touchend', function (event) {
    setTimeout(function () {
        $('.text').html('移动端input获取了焦点')
    }, 100)

}, false);