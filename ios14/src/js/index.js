import '../css/reset.css'
import '../css/index.less'
import '../css/mobileSide.less'
import $ from 'jquery'
import 'animate.css'
import {WOW} from 'wowjs'


//初始化wow
new WOW({
    boxClass: 'wow',      // default 盒子类名
    animateClass: 'animated', // default 为animate.css触发css动画的库
    offset: 0,          // default 偏移量
    mobile: true,       // default 是否支持手机
    live: true,       // 异步加载的内容是否有效
    scrollContainer: null, // default 检查新元素

}).init()


//全局监听滚动
var navBar = $(".bannerContainer");
var navToTop = navBar.offset().top;
$(document).on('scroll', function () {
    var scrollDistance = $(document).scrollTop();
    if (scrollDistance > navToTop) {
        navBar.addClass("fix");
    } else {
        navBar.removeClass("fix");
    }
})


$('.hideMenuMark').on('click', function () {
    $('.hideMenuMark').toggleClass('menuChange').toggleClass('hideMenu');
    // $('.hideMenuMark > p').css({
    //     "top": "1.2rem"
    // })
    $('.headerAllListToggleMark').toggleClass('headerAllList').toggleClass('headerAllListToggleClass');
    $('.hideSectionMark').toggleClass("hideSection").toggleClass("hideSection_2");
})

// $('.buttonFlag').on('click', function () {
//     $('.buttonFlag').toggleClass('buttonToggleColor')
// })

$('.buttonFlag').on('click', function () {
    // $('.cardContainerFlag').toggleClass('buttonToggleColor')
    // $('.hideMask').toggleClass('hideMaskHideAttribute').toggleClass('hideMaskNormalAttribute').animate({
    $('.hideMask').removeClass('hideMaskChangeZ-index').toggleClass('hideMaskColorChange')
// console.log('test')
// $('.fontColorToggleClass').toggleClass('fontColorChange')
    $('.fontColorToggleClass').toggleClass('h3FontColor').toggleClass('fontColorChange')
    $('.maskText').toggleClass('maskTextChangeOpacity')
    $(this).toggleClass('buttonFlagChangeRotate').toggleClass('buttonRotateReverse')
})