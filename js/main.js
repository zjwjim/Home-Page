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

// 控制台输出
console.log(String.raw`
                             _      
 _      ______ _____  ____ _(_)_  __
| | /| / / __ '/ __ \/ __ '/ / / / /
| |/ |/ / /_/ / / / / /_/ / / /_/ / 
|__/|__/\__,_/_/ /_/\__, /_/\__,_/  
                      /_/           
                            
`)
console.log("%c Made with love by %c 晚秋 | wanqiu.tk ","background:#35495e ; padding: 5px; border-radius: 3px 0 0 3px;  color: #fff","background:#41b883 ; padding: 5px; border-radius: 0 3px 3px 0;  color: #fff");
console.log("\n%c Home-Page  %c https://github.com/zjwjim/Home-Page ","color: #fadfa3; background: #030307; padding: 5px; border-radius: 3px 0 0 3px;", "background: #fadfa3; padding: 5px; border-radius: 0 3px 3px 0;");