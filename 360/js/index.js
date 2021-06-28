window.onload = function () {
    new fullpage('#fullpage', {
        sectionsColor: ['#0da5d5', '#2ab561', '#de8910', '#16ba9d', '#0da5d5'],
        verticalCentered: false,
        afterLoad: function (origin, destination, direction) {
            /*
            afterLoad:滚动结束之后调用的回调参数,
            origin:保存了滚动出去的那一屏相关的信息
            destination:保存了滚入的那一屏的相关信息
            direction:保存了当前滚动的方向 down / up
            注意点:第一次进入网页,也会调用afterLoad方法,之不过第一个参数和最后一个参数是null而已

            * */
            // console.log(origin, destination, direction);
            // 为滚入的那页添加current类名

            if (origin !== null) {
                // 将上一屏的类名中的 current 给去掉
                origin.item.className = origin.item.className.replace(" current", "");
            }
            destination.item.className = destination.item.className + " current";

        },
        navigation: true,
        //实现无限循环滚动
        // continueVertical: true,
        loopTop: true,
        loopBottom: true,
    });


}