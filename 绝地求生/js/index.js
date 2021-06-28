window.onload = function () {
    //1.拿到需要操作的元素
    let oToolbar = document.querySelector(".toolbar");
    let oNav = document.querySelector(".nav");
    let oMenu = document.querySelector("#myMenu");
    let oMenuUp = document.querySelector(".menu-up");
    let oMenuDown = document.querySelector(".menu-down");
    let oTips = document.querySelector(".tips");

    new fullpage('#fullpage', {
        sectionsColor: ['#413c3c', '#376237', '#23234e', '#ff00', '#1b4c4c', '#f0f', '#000'],
        // 控制section文字是否上下居中
        verticalCentered: false,
        //显示小圆点
        navigation: true,
        //实现无限循环滚动
        // loopTop: true,
        // loopBottom: true,
        /*根据对应的类名设置 active ,如果没有 firstPage ,他就会在第一屏显示右侧菜单栏,如果有 firstPage ,那么会先寻找 firstPage ,但是此时找不到,也就不用显示了*/
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        menu: 'myMenu',
        //实现监听向下滚动
        onLeave: function (origin, destination, direction) {
            //destination:滚入的这一屏的数据
            // isFirst:是否为第一屏
            if (destination.isFirst) {
                oToolbar.style.display = 'block';
                oNav.style.top = '42px';
                oMenu.style.display = "none";
            } else {
                //不是第一屏
                oToolbar.style.display = 'none';
                oNav.style.top = '0px';
                oMenu.style.display = "block";
            }
            /*如果是最后一屏*/
            if (destination.isLast) {
                oTips.style.display = "none";
            } else {
                //不是最后一屏
                oTips.style.display = "block";
            }
        }
    });

    /*监听菜单的点击事件*/
    oMenuUp.onclick = function () {
        fullpage_api.moveSectionUp();
    }
    oMenuDown.onclick = function () {
        fullpage_api.moveSectionDown();
    }

    /*初始化第四屏动画*/
    initSection4Animation();

    function initSection4Animation() {
        //1.拿到需要操作的元素
        let oLis = document.querySelectorAll(".section-four>ul>li");
        let oImages = document.querySelectorAll(".section-four>ul>li>img");
        let oH3 = document.querySelectorAll(".section-four>ul>li>h3");
        //2.给所有的li添加移入,移出
        for (let i = 0; i < oLis.length; i++) {
            let item = oLis[i];
            //移入事件
            item.onmouseenter = function () {
                oLis[0].style.width = "20%";
                oLis[1].style.width = "20%";
                oLis[2].style.width = "20%";
                oLis[i].style.width = "60%";
                oLis[i].style.opacity = "0.9";
                //控制文字透明度
                oH3[i].style.opacity = "0";
                if (i === 0) {
                    oImages[0].style.left = "0";
                } else if (i === 2) {
                    oImages[2].style.right = "0";
                }
            }
            //移出事件
            item.onmouseleave = function () {
                oLis[0].style.width = "33%";
                oLis[1].style.width = "34%";
                oLis[2].style.width = "33%";
                oLis[i].style.opacity = "1";
                oH3[i].style.opacity = "1";
                if (i === 0) {
                    oImages[0].style.left = "-180px";
                } else if (i === 2) {
                    oImages[2].style.right = "-180px";
                }
            }
        }

    }

}