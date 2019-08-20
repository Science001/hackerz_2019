// $('#technical').hide();
// $('#non-technical').hide();
// $('#workshops').hide();

let cards = Array(document.querySelectorAll('.card2'));
var ind = 0;
function swipeNextCard() {
    if (ind >= cards.length) {
        ind = 0;
    }
    if (ind == 0) {
        $('#workshops').fadeOut();
        $('#technical').fadeIn();
    }else if (ind == 7) {
        $('#technical').fadeOut();
        $('#non-technical').fadeIn();
    }else if(ind == 15){
        $('#non-technical').fadeOut();
        $('#workshops').fadeIn();
    }
    document.querySelector('.slide-top').classList.remove('slide-top');
    document.querySelectorAll('.card2')[ind].classList.add('slide-top');
    ind++;
    
}

// setInterval(swipeNextCard, 1000);