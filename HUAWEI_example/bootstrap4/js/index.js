$(function () {
    $(".navbar-toggler").click(function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    });
    $(".login").hover(function () {
        console.log("移入");
        $(this).addClass("on");
    }, function () {
        console.log("移出");
        $(this).removeClass("on");
    });
    $(".modal-close").click(function () {
        $('.modal').modal('hide')
    });
    let headerHeight = $(".header-top").height() + $(".header-middle").height();
    $(window).scroll(function () {
        let offsetY = $("body").scrollTop() + $("html").scrollTop();
        if (offsetY >= headerHeight) {
            $(".header-top").removeClass("d-xl-block");
            $(".header-middle").hide();
        } else {
            $(".header-top").addClass("d-xl-block");
            $(".header-middle").show();
        }
    });
    // $("body").css("padding-top", $(".header").height());
    let mySwiper = new Swiper('.swiper-container', {
        //自动轮播
        autoplay: {
            delay: 1000,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',//需设置.my-bullet样式
            bulletActiveClass: 'my-bullet-active',
        },
        on: {
            init: function () {
                swiperAnimateCache(this);//隐藏动画元素
                swiperAnimate(this);//初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this);//每个slide切换结束时也运行当前slide动画
                console.log(this.activeIndex);
                let offsetY = this.activeIndex * 45;
                $(".swiper-name>span").animate({top: -offsetY}, 1000);
                $(".swiper-num>span").animate({top: -offsetY}, 1000);
            }
        }
    });
    mySwiper.autoplay.stop();

    //1.创建一个控制器对象
    let constructor = new ScrollMagic.Controller();
    //2.创建一个场景对象
    let scene = new ScrollMagic.Scene({
        triggerElement: ".trigger-section1",
        triggerHook: "onLeave",
        duration: "110%",
    });
    scene.setPin(".section1", {pushFollowers: false});
    scene.setTween(".section1", 1, {opacity: 0.5});
    //3.将场景对象加到控制器对象中
    constructor.addScene(scene);


    //2.创建一个场景对象
    let scene2 = new ScrollMagic.Scene({
        triggerElement: ".trigger-section2",
        triggerHook: "onEnter",
    });
    scene2.setVelocity([".section2-top>div", ".section2-top>div>p"], {
        top: "0px",
        opacity: "1"
    }, {
        duration: 1200,
    });
    //3.将场景对象加到控制器对象中
    constructor.addScene(scene2);

    //2.创建一个场景对象
    let scene3 = new ScrollMagic.Scene({
        triggerElement: ".trigger-section2",
        triggerHook: "onLeave",
        offset: $(".section2-top").height() + 100,
        duration: "100%"
    });
    scene3.setPin(".section2", {pushFollowers: false});
    let tm = new TimelineMax();
    tm.add([
        new TweenMax(".middle-left", 1.5, {
            transform: "translateX(-100%)",
            opacity: 0,
        }),
        new TweenMax(".middle-right", 1.5, {
            transform: "translateX(100%)",
            opacity: 0,
        }),
        new TweenMax(".middle-text", 1.5, {
            opacity: 1,
            delay: 0.4,
        }),
    ]);

    tm.add(
        new TweenMax(".middle-phone", 1.5, {
            opacity: 1,
        }),
    );
    scene3.setTween(tm);
    //3.将场景对象加到控制器对象中
    constructor.addScene(scene3);


    //2.创建一个场景对象
    let scene4 = new ScrollMagic.Scene({
        triggerElement: ".section2-bottom",
        triggerHook: "onCenter",
    });
    scene4.on("start", function (event) {
        // mySwiper.autoplay.start();
        if (event.scrollDirection === "FORWARD") {
            mySwiper.autoplay.start();
        } else {
            mySwiper.autoplay.stop();
        }

    });

    //3.将场景对象加到控制器对象中
    constructor.addScene(scene4);

});