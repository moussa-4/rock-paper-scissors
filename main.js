console.log("I drink wine 🤫")

let playgain_sc = document.getElementById('triangel');
let play_sc = document.getElementById('play-sc');
let score = document.getElementById('score');

let pc = document.getElementById('pc');
let you = document.getElementById('you');
let pcback = document.getElementById('pcback');
let youback = document.getElementById('youback');

let papericon = 'images/icon-paper.svg';
let scissorsicon = 'images/icon-scissors.svg';
let rockicon = 'images/icon-rock.svg';

let papericonB = "10px solid hsl(230, 89%, 65%)";
let scissorsiconB = "10px solid hsl(349, 70%, 56%)";
let rockiconB = "10px solid hsl(40, 84%, 53%)";

let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let resuit = document.getElementById('resuit');
let scor_num = 0

let win = "You Win";
let lose = "You Lose";


function play(name, you2,border2) {
    let randomNumber = Math.floor(Math.random() * 3); 

    you.src = you2;
    youback.style.border = border2;

    playgain_sc.style.display = 'none';
    play_sc.style.display = 'flex';
    resuit.style.display = 'none';


    if (randomNumber == 0) {
        pc.src = papericon;
        pcback.style.border = papericonB;
    } else if (randomNumber == 1) {
        pc.src = rockicon;
        pcback.style.border = rockiconB;
    } else {
        pc.src = scissorsicon;
        pcback.style.border = scissorsiconB;
    }

    if (randomNumber == name) {
        resuit.innerText = "Draw";
    } else if ((name == 0 && randomNumber == 2) || (name == 1 && randomNumber == 0) || (name == 2 && randomNumber == 1)) {
        resuit.innerText = lose;
    } else {
        resuit.innerText = win;
        scor_num++
        score.innerText = scor_num;
        
    }

    resuit.style.display = 'block';
}



function playgain() {
    playgain_sc.style.display = 'unset';
    play_sc.style.display = 'none';
    resuit.style.display = 'none';
    randomNumber = Math.floor(Math.random() * 3) + 1;
}
