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

//这里区分不同系统
const ua = typeof window === 'object' ? window.navigator.userAgent : '';

let _isIOS = -1;
let _isAndroid = -1;

function isIOS() {
    if (_isIOS === -1) {
        _isIOS = /iPhone|iPod|iPad/i.test(ua) ? 1 : 0;
    }
    return _isIOS === 1;
}

function isAndroid() {
    if (_isAndroid === -1) {
        _isAndroid = /Android/i.test(ua) ? 1 : 0;
    }
    return _isAndroid === 1;
}

if (isAndroid()) {
    const innerHeight = window.innerHeight;
    window.addEventListener('resize', () => {
        const newInnerHeight = window.innerHeight;
        if (innerHeight > newInnerHeight) {
            // 键盘弹出事件处理
            // alert("android 键盘弹窗事件");
            $('.android').html('键盘抬起')

        } else {
            // 键盘收起事件处理
            // alert("android 键盘收起事件处理")
            $('.android').html('键盘收起')
        }
    });
} else if (isIOS()) {
    window.addEventListener('focusin', () => {
        // 键盘弹出事件处理
        // alert("iphone 键盘弹出事件处理")
        $('.ios').html('键盘收起')
    });
    window.addEventListener('focusout', () => {
        // 键盘收起事件处理
        // alert("iphone 键盘收起事件处理")
        $('.ios').html('键盘收起')

    });
}

//如果需要移除监听事件可以使用removeEventListener，但如果监听事件中使用的函数是匿名函数，可能移除事件没有任何效果，可以将监听事件执行的函数，提取出来，使用函数名来指定例如:    window.addEventListener('focusout', focusoutFunc);    function focusoutFunc (){       /*.....*/    }        window.removeEventListener('focusout', focusoutFunc);  //移除事件