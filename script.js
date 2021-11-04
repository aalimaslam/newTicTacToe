const $ = s => document.querySelector(s);
const $$ = s=> document.querySelectorAll(s);
const btns = $$(".btn button");
const xwins = $("#x");
const owins = $("#o");
const drawMatches = $("#draw");
const totalMatches = $("#total");

btns.forEach(e=>{
    e.addEventListener('click',()=>{
        updateButtons(e);
    })
})

let playerTurn = 0; 
let winsByX = 0;
let winsByO = 0;
let draws = 0;


function updateButtons(buttonClicked){
    if(playerTurn == 0){
        buttonClicked.innerText = "O";
        buttonClicked.disabled = true;
        playerTurn = 1
    }
    else if (playerTurn == 1){
        buttonClicked.innerText = "X"
        buttonClicked.disabled = true
        playerTurn = 0
    }
    else{
        playerTurn = 0;
    }
    winner();
}


function winner(){
    if(btns[0].innerText == "X" && btns[1].innerText == "X" && btns[2].innerText == "X" || btns[3].innerText == "X" && btns[4].innerText == "X" && btns[5].innerText == "X" || btns[6].innerText == "X" && btns[7].innerText == "X" && btns[8].innerText == "X" || btns[0].innerText == "X" && btns[3].innerText == "X" && btns[6].innerText == "X" || btns[1].innerText == "X" && btns[4].innerText == "X" && btns[7].innerText == "X" || btns[2].innerText == "X" && btns[5].innerText == "X" && btns[8].innerText == "X" || btns[0].innerText == "X" && btns[4].innerText == "X" && btns[8].innerText == "X" || btns[2].innerText == "X" && btns[4].innerText == "X" && btns[6].innerText == "X"){

        alert("X wins!");
        winsByX++;
        clearBtnText();
        saveInfo(winsByX,winsByO,draws);

    }
    else if(btns[0].innerText == "O" && btns[1].innerText == "O" && btns[2].innerText == "O" || btns[3].innerText == "O" && btns[4].innerText == "O" && btns[5].innerText == "O" || btns[6].innerText == "O" && btns[7].innerText == "O" && btns[8].innerText == "O" || btns[0].innerText == "O" && btns[3].innerText == "O" && btns[6].innerText == "O" || btns[1].innerText == "O" && btns[4].innerText == "O" && btns[7].innerText == "O" || btns[2].innerText == "O" && btns[5].innerText == "O" && btns[8].innerText == "O" || btns[0].innerText == "O" && btns[4].innerText == "O" && btns[8].innerText == "O" || btns[2].innerText == "O" && btns[4].innerText == "O" && btns[6].innerText == "O"){

        alert("O wins!");
        winsByO++;
        clearBtnText();
        saveInfo(winsByX,winsByO,draws);

    }
    else if(btns[0].innerText != "" && btns[1].innerText != "" && btns[2].innerText != "" && btns[3].innerText != "" && btns[4].innerText != "" && btns[5].innerText != "" && btns[6].innerText != "" && btns[7].innerText != "" && btns[8].innerText != ""){
        
        alert("Draw!");
        draws++;
        clearBtnText();
        saveInfo(winsByX,winsByO,draws);

    }

    updateInfo()

}

function clearBtnText(){

    for(let i = 0; i < btns.length; i++){
        btns[i].innerText = "";
        btns[i].disabled = false;
    }

}

function saveInfo(x,o,draw,totals){

    localStorage.setItem("winsByX",x);
    localStorage.setItem("winsByo",o);
    localStorage.setItem("draw",draw);
    totals = x+o+draw;
    localStorage.setItem("total",totals);

}

function updateInfo(){
    const xwon = localStorage.getItem("winsByX");
    const owon = localStorage.getItem("winsByo");
    const draws = localStorage.getItem("draw");
    const total= localStorage.getItem("total");

    xwins.innerText = xwon;
    owins.innerText = owon;
    drawMatches.innerText = draws;
    totalMatches.innerText = total;

    if(xwon == null) xwins.innerText = 0;
    if(owon == null) owins.innerText = 0;
    if(draws == null) drawMatches.innerText = 0;
    if(total == null) totalMatches.innerText = 0;
}

function clearInfo(){
    localStorage.clear();
    updateInfo()
}
