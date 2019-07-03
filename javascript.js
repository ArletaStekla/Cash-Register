//Sounds
function totalSound() {
    var totalSound = new Audio();
    totalSound.src = "audio/total.mp3";
    totalSound.src = "audio/total.ogg";
    totalSound.play();
}

function buttonsSound() {
    var buttonsSound = new Audio();
    buttonsSound.src = "audio/numbers.mp3";
    buttonsSound.src = "audio/numbers.ogg";
    buttonsSound.play();
}

//Total due
function total() {
    totalSound();
    document.getElementById("amountScreen").style.display = "none";
    document.getElementById("totalScreen").style.display = "block";
    document.getElementById("total").style.backgroundColor = "#3e8e41";
    document.getElementById("amount").style.backgroundColor = "#4CAF50";
}

//Amount paid
function amount() {
    totalSound();
    document.getElementById("totalScreen").style.display = "none";
    document.getElementById("amountScreen").style.display = "block";
    document.getElementById("amount").style.backgroundColor = "#3e8e41";
    document.getElementById("total").style.backgroundColor = "#4CAF50";
}

//Reset
function change() {
    buttonsSound();
    document.getElementById("change").placeholder = "Change:";

    var euro = document.getElementsByClassName("euro");
    for (var i = 0; i < euro.length; i++) {
        euro[i].style.color = "black";
        if (euro[i].className == "euro cent") {
            euro[i].innerHTML = euro[i].id + " &cent;: ";
        } else {
            euro[i].innerHTML = euro[i].id + " &euro;: ";
        }
    }
}

function count() {

    document.getElementById("total").style.backgroundColor = "#4CAF50";
    document.getElementById("amount").style.backgroundColor = "#4CAF50";

    var totalValue = document.getElementById("enterTotal").value;
    var moneyPaid = document.getElementById("enterAmount").value;

    totalValue = parseFloat(totalValue).toFixed(2);
    moneyPaid = parseFloat(moneyPaid).toFixed(2);
    document.getElementById("enterTotal").value = totalValue;
    document.getElementById("enterAmount").value = moneyPaid;
    var caltulatedChange = (moneyPaid - totalValue).toFixed(2);

    if (isNaN(caltulatedChange) == false) {
        document.getElementById("change").placeholder = "Change: " + caltulatedChange;

    } else {
        document.getElementById("change").placeholder = "Change:";
        change();
        var error = new Audio();
        error.src = "audio/error.mp3";
        error.src = "audio/error.ogg";
        error.play();
    }

    if ((isNaN(caltulatedChange) == false) && (caltulatedChange > 0)) {
        var countAudio = new Audio();
        countAudio.src = "audio/count.mp3";
        countAudio.src = "audio/count.ogg";
        countAudio.play();
    }

    var abs = Math.abs(caltulatedChange).toFixed(2);
    if (caltulatedChange < 0) {

        document.getElementById("change").placeholder = "Missing: " + abs;
        var error = new Audio();
        error.src = "audio/error.mp3";
        error.src = "audio/error.ogg";
        error.play();
    }

    document.getElementById("enterTotal").value = "";
    document.getElementById("enterAmount").value = "";
    total();

    var to_return, note_coin;
    var x = document.getElementsByClassName("euro");
    for (var i = 0; i < x.length; i++) {
        if (x[i].className == "euro cent") {
            note_coin = {
                value: x[i].id,
                name: x[i].id + ' &cent;: ',
                return: 0
            };
        } else {
            note_coin = {
                value: x[i].id,
                name: x[i].id + ' &euro;: ',
                return: 0
            };
        }

        note_coin.return = Math.floor(caltulatedChange / note_coin.value);
        caltulatedChange = (caltulatedChange % note_coin.value).toFixed(2);

        note_coin.return > 0 ? console.log(note_coin.name + note_coin.return) : 0;
        x[i].innerHTML = (note_coin.name + note_coin.return);
        if (note_coin.return > 0) {
            x[i].style.color = "red";
        }
        if ((isNaN(note_coin.return) != false) || (note_coin.return <= 0)) {

            if (x[i].className == "euro cent") {
                x[i].innerHTML = x[i].id + " &cent;: ";
            } else {
                x[i].innerHTML = x[i].id + " &euro;: ";
            }
        }

    }

}