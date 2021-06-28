// 传入两个nodelist对象,前者为模板对象,后者为要填充的对象



/* copyEmement(temlement, targetObject) {
    console.log("模块test");
}, */

/* window.onload = function () {

} */
export default {
    // 传入两个nodelist对象和一个长度,前者为模板对象,后者为要填充的对象
    // 如果不输入第三个长度,默认填充全部,输入参数，填充前面一定长度的参数
    copyEmement(temlement, targetObject, length) {
        if (length != 0) {
            targetObject.forEach(function (item, index) {
                if (index < length) {
                    // console.log(EmementTemplate.innerHTML);
                    item.innerHTML = temlement.innerHTML;
                }
            })
        } else {
            targetObject.forEach(function (item, index) {
                // console.log(EmementTemplate.innerHTML);
                item.innerHTML = temlement.innerHTML;
            })
        }
    }

}


