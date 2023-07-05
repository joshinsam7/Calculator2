function ACclicked(value) {
    document.getElementById("result").value = "0";
    document.getElementById("buttonWAC").innerText = "AC";
}

function NPclicked(value) {
    if (document.getElementById("result").value > 0) {
        document.getElementById("result").value = -parseFloat(document.getElementById("result").value);
    }
}

function numberclicked(value) {
    if (document.getElementById("buttonWAC").innerText == "AC") {
        document.getElementById("result").value = "";
        document.getElementById("result").value = value;
        document.getElementById("buttonWAC").innerText = "C";
    }
    else {
        document.getElementById("result").value += value;
        document.getElementById("buttonWAC").innerText = "C";
    }
}

function calculate () {
    var p = document.getElementById("result").value ;
    var answer = eval(p) ;
    document.getElementById("result").value = answer ;
}
