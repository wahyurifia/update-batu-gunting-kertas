const startGame = document.querySelector('.startGame');
const main = document.getElementById("main")
const cover =  document.getElementById("cover")
startGame.addEventListener("click", () => {
    startGame.classList.toggle("hilang");
    main.classList.toggle("hilang");
    cover.classList.toggle("hilang");
});

function getcomputerPicked() {
    const comp = Math.random();
    // console.log(comp);
    if(comp < 0.34) return '✊';
    if(comp >= 0.34 && comp <= 0.67) return '✌️';
    return '🖐️';
}

function getResult(comp, player) {
    if(player == comp) return 'Draw';
    if(player == '✊') return (comp == '✌️') ? 'You Win!' : 'You Lose!';
    if(player == '✌️') return (comp == '✊') ? 'You Lose!' : 'You Win!';
    if(player == '🖐️') return (comp == '✊') ? 'You Win!' : 'You Lose!';
}


const once = function() {
    if(once.done) return;

    question = document.querySelector(".question").remove();
    const compBox =  document.querySelector('.computerPickBox')
    cc = document.createElement("div");
    compBox.appendChild(cc);
    cc.classList = 'item';

    // console.log(compBox);
    once.done = true;
};

function putar() {
    const gambar = ['✊', '✌️', '🖐️'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1500) {
            clearInterval;
            return;
        }
        cc.innerHTML = gambar[i++];
        if ( i == gambar.length ) i = 0;
    }, 100);
};

const computerPick = document.querySelector('.computerPick');
const resultDisplay =  document.getElementById('result')
const pilihan = document.querySelectorAll('.playerPick div');
    pilihan.forEach(function(pil) {
        pil.addEventListener('click', function() {
    
        if (this == pilihan[0]) {
            pilihan[1].classList = 'paper item hilang';
            pilihan[2].classList = 'scissors item hilang';
        }else if(this == pilihan[1]) {
            pilihan[0].classList = 'rock item hilang';
            pilihan[2].classList = 'scissors item hilang';
        }else if (this == pilihan[2]) {
            pilihan[0].classList = 'rock item hilang';
            pilihan[1].classList = 'paper item hilang';
        }
    
        const computerPicked = getcomputerPicked();
        const playerPicked = pil.innerHTML;
        const result = getResult(computerPicked, playerPicked);
        // console.log(result);
    
        once();
        // console.log(cc);
        putar();
    
        setTimeout(function() {
            cc.innerHTML = computerPicked;
            // console.log(computerPicked);
            resultDisplay.innerHTML = result;
    
            setTimeout(finalPopUp, 500)
    
        },1500)
        console.log(pilihan);
        
        });
    });


const confirm = document.getElementById('confirm');
confirm.addEventListener('click', function() {
    document.getElementById('final').style.display = 'none';
    console.log(pilihan[0]);
    pilihan[0].classList.remove('hilang');
    pilihan[1].classList.remove('hilang');
    pilihan[2].classList.remove('hilang');
});


function finalPopUp() {
    document.getElementById('final').style.display = 'block';
}