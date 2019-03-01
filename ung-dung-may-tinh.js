// execute additon
function add() {
    var s1 = document.getElementById('s1').value;
        s1 = Number(s1);
    var s2 = document.getElementById('s2').value;
        s2 = Number(s2);
    var add;
    add = s1 + s2;
    document.getElementById('result').innerHTML='Result : '+add;
}
// execute subtraction
function sub() {
    var s1 = document.getElementById('s1').value;
    s1 = Number(s1);
    var s2 = document.getElementById('s2').value;
    s2 = Number(s2);
    var sub;
    sub = s1 - s2;
    document.getElementById('result').innerHTML='Result : '+sub;
}
// execute multiplition
function mul() {
    var s1 = document.getElementById('s1').value;
    s1 = Number(s1);
    var s2 = document.getElementById('s2').value;
    s2 = Number(s2);
    var mul;
    mul = s1 * s2;
    document.getElementById('result').innerHTML='Result : '+mul;
}
// execute division
function div() {
    var s1 = document.getElementById('s1').value;
    s1 = Number(s1);
    var s2 = document.getElementById('s2').value;
    s2 = Number(s2);
    var div;
    div = s1 / s2;
    document.getElementById('result').innerHTML='Result : '+div;
}