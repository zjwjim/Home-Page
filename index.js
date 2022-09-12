
console.log("2022.09.12");
console.log("version: 220912测试版");
console.log("测试版代码，后期仍需优化");
console.log("©2022 晚秋 | Made with love by 晚秋");
console.log("你tm看什么，刚写好没优化的代码也敢抄？");
console.log("稳定版代码已开源");

function nav(id) {
    var classname1 = document.getElementsByClassName("right");
    var classname2 = document.getElementsByClassName("nav1");
    var i;
    for (i = 0; i < classname1.length; i++) {
        classname1[i].style.display = "none";
        classname2[i].removeAttribute('style');
    }
    document.getElementById(id).style.display = "block";
    document.getElementById("button-"+id).style.backgroundColor = "rgba(0, 0, 0, .5)";
    // document.getElementById("button-"+id).className="nav1 current"
}
function blog() {
    window.open('//blog.wanqiu.tk')
}