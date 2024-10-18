const MARKER = Array(10, 1)
//Array(MONTH, DAY)

let IIASD = false;
const day = new Date()

if (day.getMonth() == MARKER[0]) {
    if (day.getDate() == MARKER[1]) {
        IIASD = true
    }
}

if (IIASD) {
    IIASD = 'YES'
    document.getElementById("x").style.color = 'Green';
}
else {
    IIASD = 'POSSIBLY'
    document.getElementById("x").style.color = 'Red';
}

document.getElementById("x").innerHTML = IIASD