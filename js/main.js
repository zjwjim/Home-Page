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
function siteTime() {
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var startYear = "2022";
    var startMonth = "2";
    var startDate = "4";
    var startHour = "0";
    var startMinute = "0";
    var startSecond = "0";
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);

    // 区分是否有年份.
    if (diffYears > 0) {
        var yearsAndDaysTip = '本站已安全运行 ' + diffYears + ' 年 ' + diffDays + ' 天 ' + diffHours + ' 小时 ' + diffMinutes + ' 分钟 ' + diffSeconds + ' 秒';
        document.getElementById("sitetime").innerHTML = yearsAndDaysTip;
    } else {
        var daysTip = '本站已安全运行 ' + diffDays + ' 天 ' + diffHours + ' 小时 ' + diffMinutes + ' 分钟 ' + diffSeconds + ' 秒';
        document.getElementById("sitetime").innerHTML = daysTip;
    }
}
setInterval(siteTime, 1000);

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