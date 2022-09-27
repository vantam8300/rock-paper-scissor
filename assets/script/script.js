let wannaPlay = true;

let win = 0, lose = 0, tie = 0;

let values = ["r", "p", "s"];

while (wannaPlay) {

    let myValue = window.prompt("you are playing Rock paper scissor \r\nPlease choose R, P, or S");

    while (!values.includes(myValue)) {
        myValue = window.prompt("you entered wrong input \r\nPlease choose R, P, or S")
    };

    let opponentValue = values[Math.floor(Math.random() *  values.length)];

    window.alert("your opponent chose: " + opponentValue);

    if (myValue === opponentValue) {
        tie++;
        window.alert("it is tie!");
    } else if ((myValue == "r" && opponentValue == 's') || (myValue == "s" && opponentValue == "p") || (myValue == "p" && opponentValue == "r")) {
        win++;
        window.alert("you win");

    } else {
        lose++;
        window.alert("you lose!");
    }

    wannaPlay = window.confirm("Win: " + win +"\r\nLose: " + lose + "\r\nTie: " + tie + "\r\nDo you want to play again?")

}
