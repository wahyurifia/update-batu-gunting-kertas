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
    console.log(comp);
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

const computerPick = document.querySelector('.computerPick');

const pilihan = document.querySelectorAll('.playerPick div');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const computerPicked = getcomputerPicked();
        const playerPicked = pil.innerHTML;
        const result = getResult(computerPicked, playerPicked);

        once();
        putar();

        computerPick.classList = 'item';

        
        setTimeout(function() {
            console.log(computerPick);
            computerPick.innerHTML = computerPicked;
        },1000)

    
        });
});



function putar() {
    const gambar = ['✊', '✌️', '🖐️'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        computerPick.innerHTML = gambar[i++];
        if ( i == gambar.length ) i = 0;
    }, 100);
}