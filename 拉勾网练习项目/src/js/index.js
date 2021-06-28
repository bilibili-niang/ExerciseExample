import "../css/index.less";
import kai from "./kai.js";
/* var opacdiv = document.querySelector(".right");
document.querySelector(".right").onclick = function () {
    opacdiv.style.cssText += "opacity:0;";
}
var opacdiv2 = document.querySelector(".left");
document.querySelector(".left").onclick = function () {
    opacdiv2.style.cssText += "opacity:0;";
} */

// 模板li数据
var templateContainer = document.querySelector(".information_list ul li");
// console.log(templateContainer.innerHTML);
// 选中的所有li
var Allli = document.querySelectorAll(".information_list ul li");
Allli.forEach(function (item, index) {
    // console.log(item);
    if (index < 9) {
        item.innerHTML = templateContainer.innerHTML;
    }
})



// 填充第二个ui>li区域的数据:
var templateHotContainer = document.querySelector(".innerLi");
// console.log(templateHotContainer.innerHTML);
var AllHotList = document.querySelectorAll(".moreListItems li");
AllHotList.forEach(function (item, index) {
    // console.log(item);
    // console.log(index);
    // if (index < 9) {
    item.innerHTML = templateHotContainer.innerHTML;
    // }
})

var AllHotList2 = document.querySelectorAll(".list2 li");

AllHotList2.forEach(function (item, index) {
    // item.innerHTML = templateHotContainer.innerHTML;

    // console.log(item);
})

var lastListContent = document.querySelector(".li_template");
var targetEmement = document.querySelectorAll(".endList ul li");
// console.log(lastListContent.innerHTML + "测试");

kai.copyEmement(lastListContent, targetEmement, 6);

// console.log("测试" + document.querySelector(".tempUlList").innerHTML);
/* document.querySelectorAll(".rightDiv ul").forEach(function (item, index) {
    item.innerHTML = document.querySelector(".tempUlList").innerHTML;
}) */

var UlTemplate = document.querySelector(".tempUlList");
var UlTargetElement = document.querySelectorAll(".rightDiv ul");
kai.copyEmement(UlTemplate, UlTargetElement,3);




















