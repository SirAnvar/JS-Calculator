var out = document.getElementById('display');

function toDisplay(x) {

    out.value += x;
    if (out.value.indexOf('C') > -1) {
        out.value = '';
    }

}

function equals() {
    out.value = eval(out.value);
}

function square() {
    out.value *= out.value;
}

function backspace() {
    var num = out.value;
    var len = num.length - 1;
    var newNum = num.substring(0, len);
    out.value = newNum;
}