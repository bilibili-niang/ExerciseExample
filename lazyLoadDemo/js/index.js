// 默认:
// $(function () {
//     $("img.lazyload").lazyload()
// });
// 加点东西:
$(".lazyload").lazyload({
    effect: "fadeIn",
    threshold: 200,
    failurelimit: 15,
    skip_invisible: false
})