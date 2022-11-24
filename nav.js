// 页面切换
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
    window.open('https://www.wanqiu.tk')
}