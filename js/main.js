function clock() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();
    var daydate = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    var h = checkClock(hour);
    var m = checkClock(minutes);
    var s = checkClock(seconds);

    var d = checkDay(day);
    var monthS = checkMonth(month);


    var time = h + ":" + m + ":" + s;
    var dates = d+ ", " + daydate + "."+ monthS + "."+ year;

    document.getElementById("date").innerHTML = dates;
    document.getElementById("clock").innerHTML = time;
    t = setTimeout(function() {clock() }, 500);
}

function checkClock(t) {
    if (t < 10) {
        t = "0" + t;
    }
    else {
        //nuthing
    }
    return t;
}

function checkDay(d) {
    if (d == 1) { return "Mo";}
    else if (d ==2) {return "Di";}
    else if (d == 3) {return "Mi";}
    else if (d == 4) {return "Do";}
    else if (d == 5) {return "Fr";}
    else if (d == 6) {return "Sa";}
    else if (d == 0) {return "So";}
    else {return null;}
}
function checkMonth(d) {
    if (d == 0) {return "Jan";}
    else if (d == 1) {return "Feb";}
    else if (d == 2) {return "Mar";}
    else if (d == 3) {return "Apr";}
    else if (d == 4) {return "Mai";}
    else if (d == 5) {return "Jun";}
    else if (d == 6) {return "Jul";}
    else if (d == 7) {return "Aug";}
    else if (d == 8) {return "Sep";}
    else if (d == 9) {return "Okt";}
    else if (d == 10) {return "Nov";}
    else if (d == 11) {return "Dez";}
    else {return null;}
}

function background() {
    var a = Math.round(Math.random() * 5);
    console.log(a);
    var urln = "";
    console.log(urln);
    if (a == 0) { urln = "/screensaver/pic/el_capitan_yosemite_valley_4k-1920x1080.jpg"; }
    else if (a == 1) { urln = "/screensaver/pic/karersee_lake_winter_italy-1920x1080.jpg"; }
    else if (a == 2) { urln = "/screensaver/pic/macos_high_sierra_stock_5k-1920x1080.jpg"; }
    else if (a == 3) { urln = "/screensaver/pic/sunset_mountain_lake-1920x1080.jpg"; }
    else if (a == 4) { urln = "/screensaver/pic/sunset_scenery-1920x1080.jpg"; }
    else { url = "/screensaver/pic/macos_high_sierra_stock_5k-1920x1080.jpg"; }
    console.log(urln);
    var body = document.getElementsByTagName('body')[0];
    console.log(body);
    body.style.backgroundImage = 'url('+urln+')';

}

function test() {
    var a = Math.round(Math.random() * 5);
    if (a == 0) { console.log(0); }
    else if (a == 1) { console.log(1); }
    else if (a == 2) { console.log(2); }
    else if (a == 3) { console.log(3); }
    else if (a == 4) { console.log(4); }
    else { console.log(5); }
}

function init() {
    alert("Have a lovely Day.");
    clock();
    background();
}
