const startGame = document.querySelector('.startGame');
const container = document.querySelector(".container");
const section =  document.querySelector("section");
startGame.addEventListener("click", () => {
    startGame.classList.toggle("hidden");
    container.classList.toggle("hilang");
    section.classList.toggle("hidden");
}) 

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

    question = document.querySelector(".question").style.display = 'none';
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
        computerPick.innerHTML = gambar[i++];
        if ( i == gambar.length ) i = 0;
    }, 100);
};


const computerPick = document.querySelector('.computerPick');
const resultDisplay =  document.getElementById('result')
const pilihan = document.querySelectorAll('.playerPick div');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {

    if (this == pilihan[0]) {
        pilihan[1].classList = 'hilang';
        pilihan[2].classList = 'hilang';
    }else if(this == pilihan[1]) {
        pilihan[0].classList = 'hilang';
        pilihan[2].classList = 'hilang';
    }else if (this == pilihan[2]) {
        pilihan[0].classList = 'hilang';
        pilihan[1].classList = 'hilang';
    }

    const computerPicked = getcomputerPicked();
    // console.log(computerPicked);
    const playerPicked = pil.innerHTML;
    const result = getResult(computerPicked, playerPicked);
    console.log(result);

    once();
    putar();

    computerPick.classList = 'item';

    setTimeout(function() {
        computerPick.innerHTML = computerPicked;
        resultDisplay.innerHTML = result;
    },1500)
    
   
        
        
    });
});
