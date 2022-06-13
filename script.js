
let fields = [];
let currentShape = 'cross';
let gameOver = false;

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        fields[id] = currentShape;
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.remove('inactive');
            document.getElementById('player2').classList.add('inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player2').classList.remove('inactive');
            document.getElementById('player1').classList.add('inactive');
        }

        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle${i}`).classList.remove('dnone')
        }
        if (fields[i] == 'cross') {
            document.getElementById(`cross${i}`).classList.remove('dnone')
        }

    }

}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line0').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line1').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line2').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line6').style.transform = 'rotate(45deg) scaleX(1.2)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }
    if (winner) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('dnone');
            document.getElementById('restart').classList.remove('dnone');
        }, 2000);

    }
}

function restart() {
    gameOver = false;
    document.getElementById('gameOver').classList.add('dnone');
    document.getElementById('restart').classList.add('dnone');
    fields = [];
    for (let i = 0; i < 8; i++) {
        document.getElementById('line' + i).classList.add('dnone');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle' + i).classList.add('dnone');
        document.getElementById('cross' + i).classList.add('dnone');

    }
}