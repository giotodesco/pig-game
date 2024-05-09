const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const currenteEl0 = document.querySelector('#current--0')
const currenteEl1 = document.querySelector('#current--1')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

let playing, currentScore, score, activePlayer

const init = function(){
    playing = true;
    currentScore = 0;
    score = [0, 0]
    activePlayer = 0;

    score0El.textContent = 0
    score1El.textContent = 0
    currenteEl0.textContent = 0
    currenteEl1.textContent = 0

    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
}
init()

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function() {

    const dice = Math.trunc(Math.random() * 6) + 1

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    if (dice !== 1) {
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore

    } else {
        switchPlayer()
    }
})
btnHold.addEventListener('click', function(){
    if(playing){
        score[activePlayer] += currentScore


        document.getElementById(`score--${activePlayer}`).textContent 
        = score[activePlayer]

        if(score[activePlayer] >= 100){
            playing = false

            diceEl.classList.add('hidden')

            document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner')

            document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active')
        } else {
            switchPlayer()
        }
    }

})

document.querySelector('.btn--new').addEventListener('click', init)