function clock() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var h = checkClock(hour);
    var m = checkClock(minutes);
    var s = checkClock(seconds);

    var time = h + ":" + m + ":" + s;

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

function background() {
    var a = Math.round(Math.random() * 5);
    console.log(a);
    var url = "";
    console.log(url);
    if (a == 0) { url = "../pic/el_capitan_yosemite_valley_4k-1920x1080.jpg"; }
    else if (a == 1) { url = "../pic/karersee_lake_winter_italy-1920x1080.jpg"; }
    else if (a == 2) { url = "../pic/macos_high_sierra_stock_5k-1920x1080.jpg"; }
    else if (a == 3) { url = "../pic/sunset_mountain_lake-1920x1080.jpg"; }
    else if (a == 4) { url = "../pic/sunset_scenery-1920x1080.jpg"; }
    else { url = "../pic/macos_high_sierra_stock_5k-1920x1080.jpg"; }
    console.log(url);
    var body = document.getElementById('body')[0];
    console.log(body);
    body.style.backgroundImage = url;

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
    clock();
    background();
}