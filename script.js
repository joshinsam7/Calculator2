var calculateString = "";
var currentOperator = ""; // To keep track of the selected operator

function ACclicked() {
    calculateString = "";
    currentOperator = "";
    document.getElementById("result").value = "0";
    document.getElementById("buttonWAC").innerText = "AC";
}


function NPclicked() {
    var resultElement = document.getElementById("result");
    var currentValue = parseFloat(resultElement.value);

    if (currentValue !== 0) {
        resultElement.value = (-currentValue).toString();
        calculateString = resultElement.value;
    }
}

function numberclicked(value) {
    var resultElement = document.getElementById("result");

    if (currentOperator === "") {
        if (document.getElementById("buttonWAC").innerText === "AC") {
            resultElement.value = 0; 
            resultElement.value = value;
            calculateString = value;
            document.getElementById("buttonWAC").innerText = "C";
        } else {
            resultElement.value += value;
            calculateString += value;
        }
    } else {
        resultElement.value = value; // Append the value
        calculateString += value;
        currentOperator = "";
    }
}

function setOperator(operator) {
    currentOperator = operator;
    calculateString += operator; 
}


function calculate() {
    try {
        var p = calculateString;
        var answer = eval(p);
        document.getElementById("result").value = answer;
        calculateString = "";
        currentOperator = ""
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}



// Reset styles and currentOperator on AC click
document.getElementById("buttonWAC").addEventListener("click", function() {
    currentOperator = "";
    resetButtonStyles();
});
