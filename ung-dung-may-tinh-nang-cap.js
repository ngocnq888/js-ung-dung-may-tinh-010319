// execute additon
var s0,s1,s2,s3,s4,s5,s6,s7,s8,s9
function clickm(s){
    var rs = s ;
    result.value = result.value + rs;

    /*var s1 = document.getElementById('1').value;
    s1 = Number(s1);
    var s2 = document.getElementById('2').value;
    s2 = Number(s2);
    var s3 = document.getElementById('3').value;
    s3 = Number(s3);
    var s4 = document.getElementById('4').value;
    s4 = Number(s4);
    */
}

function execute() {
    var execute = eval(document.getElementById('result').value);
    result.value = execute ;
}
function clear(){
    document.getElementById('result').innerHTML='' ;
}