function realtimeClock() {

    var clockerhehe = new Date();
    var hrs = clockerhehe.getHours();
    var mins = clockerhehe.getMinutes();
    
    hrs = ("0" + hrs).slice(-2);
    mins = ("0" + mins).slice(-2);

    document.getElementById('clock').innerHTML = hrs + ":" + mins;
    var t = setTimeout(realtimeClock, 500);
}