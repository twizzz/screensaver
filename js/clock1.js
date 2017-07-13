var Clock = function () {
    function e(e, t, n, r, i, a) {
        this.baseClock = e;
        this.rootPath = t;
        this.adId = n;
        this.redirectUrl = r;
        this.adImageUrl = i;
        this.properties = a;
        s = new ClockPanel(this.getHexColor(), true);
        o = new ClockPanel(this.getHexColor(), false);
        u = new ClockPanel(this.getHexColor(), false);
        animFrame.push(s);
        animFrame.push(o);
        animFrame.push(u)
    } e.prototype = new AnimCanvas;
    e.prototype.__super__ = AnimCanvas.prototype;
    e.prototype.init = function () {
        this.__super__.init.apply(this, arguments);
        var e = 227;
        document.write('<canvas id="' + this.properties.clock + '" width="' + this.properties.size + '" height="' + window.innerHeight + '"></canvas>');
        this.baseClock.initAdImage(this.adId, this.properties.size, window.innerHeight, this.adImageUrl, this.redirectUrl, this.properties.clock, this.properties.color, this.properties.size, e); this.setCanvas(this.properties.clock); this.setScale(this.properties.size / e)
    };
    var t, n, r;
    var i = 1;
    var s, o, u;
    e.prototype.getSrcPath = function () {
        return this.rootPath + "html5-" + this.properties.clock + "/"
    };
    e.prototype.getHexColor = function () {
        switch (this.properties.color) { case "blue": return "#0000ff"; break; case "gray": return "#808080"; break; case "green": return "#008000"; break; case "orange": return "#ffa500"; break; case "pink": return "#ffc0cb"; break; case "red": return "#ff0000"; break; case "white": return "#ffffff"; break; case "black": default: return "#000000"; break }
    };
    e.prototype.setScale = function (e) { i = e };
    e.prototype.draw = function () { t = this.canvas; n = this.context; r = this.time; n.clearRect(0, 0, t.width, t.height); n.save(); var e = this.baseClock.countTime(r); n.translate(0, t.height / 2); n.scale(i, i); s.setNumber(e.hour); n.drawImage(s.canvas, 0, -s.canvas.height / 2); o.setNumber(e.minute); n.drawImage(o.canvas, 77, -o.canvas.height / 2); u.setNumber(e.second); n.drawImage(u.canvas, 154, -u.canvas.height / 2); n.restore() }; return e
}();
var Number = function () { function e(e, t, n) { this.pm = false; this.createCanvas(73, 61); this.isHour = n; this.setNumber(e); this.setColor(t); this.render() } e.prototype = new SimpleCanvas; var t, n, r; var i = { x: 10, y: 8 }; e.prototype.draw = function () { t = this.canvas; n = this.context; r = this.time; n.clearRect(0, 0, t.width, t.height); n.save(); n.beginPath(); n.moveTo(0, i.y); n.quadraticCurveTo(0, 0, i.x, 0); n.lineTo(t.width - i.x, 0); n.quadraticCurveTo(t.width, 0, t.width, i.y); n.lineTo(t.width, t.height - i.y); n.quadraticCurveTo(t.width, t.height, t.width - i.x, t.height); n.lineTo(i.x, t.height); n.quadraticCurveTo(0, t.height, 0, t.height - i.y); n.closePath(); n.fillStyle = this.color; n.fill(); n.font = "62px Arial"; n.textAlign = "center"; n.textBaseline = "Alphabetic"; n.fillStyle = "#ffffff"; if (this.color.toLowerCase() == "white" || this.color.toLowerCase() == "#ffffff") { n.fillStyle = "#000000" } n.fillText(this.number, t.width / 2, t.height - 8.5); if (this.isHour) { n.font = "8px Arial"; n.textAlign = "left"; if (this.pm) { n.fillText("PM", 4, t.height - 8.5) } else { n.fillText("AM", 4, t.height - 8.5) } } n.strokeStyle = this.color; n.lineWidth = 1; n.beginPath(); n.moveTo(0, t.height / 2); n.lineTo(t.width, t.height / 2); n.stroke(); n.restore() }; e.prototype.setColor = function (e) { this.color = e.toString() }; e.prototype.setNumber = function (e) { this.number = e; if (this.isHour && this.number >= 12) { this.pm = true; this.number = this.number - 12; this.number = this.number != 0 ? this.number : 12 } this.number = this.number.toString(); if (this.number.length == 1 && !this.isHour) { this.number = "0" + this.number } }; return e }(); var ClockPanel = function () { function e(e, t) { this.currentNum = 0; this.previousNum = 0; this.count = 0; this.createCanvas(73, 61); this.setFps(30); this.previous = new Number(this.currentNum, e, t); this.current = new Number(this.previousNum, e, t) } e.prototype = new AnimCanvas; e.prototype.__super__ = AnimCanvas.prototype; e.prototype.init = function () { this.__super__.init.apply(this, arguments) }; var t, n, r; var i = 10; e.prototype.draw = function () { t = this.canvas; n = this.context; r = this.time; n.clearRect(0, 0, t.width, t.height); n.save(); if (this.currentNum == this.previousNum) { if (this.current != undefined) n.drawImage(this.current.canvas, 0, 0) } else { this.count++; var e = Math.cos(Math.PI * this.count / i); var s = this.current.canvas; var o = this.previous.canvas; n.save(); n.translate(0, s.height / 2); n.drawImage(s, 0, 0, s.width, s.height / 2, 0, -s.height / 2, s.width, s.height / 2); n.drawImage(o, 0, o.height / 2, o.width, o.height / 2, 0, 0, o.width, o.height / 2); if (e > 0) { n.drawImage(o, 0, 0, o.width, o.height / 2, 0, -o.height / 2 * e, o.width, o.height / 2 * e) } else { e = e * -1; n.drawImage(s, 0, s.height / 2, s.width, s.height / 2, 0, 0, s.width, s.height / 2 * e) } n.restore(); if (this.count == i) { this.count = 0; this.previousNum = this.currentNum; this.previous.setNumber(this.previousNum); this.previous.draw() } } n.restore() }; e.prototype.setNumber = function (e) { this.currentNum = e; this.current.setNumber(this.currentNum); this.current.draw() }; return e }()