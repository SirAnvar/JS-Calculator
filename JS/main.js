var out = document.getElementById('display');
answered = false;
var answer = "";

function toDisplay(x) {

    if(answered) {
        out.value = '';
        out.value += x;
        answered = false;
    }
    else if(!answered) {
        out.value += x;
    }

    if (out.value.indexOf('C') > -1) {
        out.value = '';
    }

}

function equals() {
    out.value = eval(out.value);
    answer = out.value;
    answered = true;
}

function square() {
    out.value *= out.value;
    answer = out.value;
    answered = true;
}

function backspace() {
    var num = out.value;
    var len = num.length - 1;
    var newNum = num.substring(0, len);
    out.value = newNum;
}

function ans() {
    out.value += answer;
}