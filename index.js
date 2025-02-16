let homeStoreBtnOne = document.getElementById("score-btn-1")
let scoreElbtn = document.getElementById("homescore")
let homeStoreBtntwo = document.getElementById("score-btn-2")
let homescoreBtnthree = document.getElementById("score-btn-3")
let homeScoreEl = document.getElementById("homescore")

let homescore = 0
function increasehomescorebyone() {
    homescore += 1
    scoreElbtn.textContent = homescore
   
}

function increasehomescorebytwo() {
  homescore += 2
  scoreElbtn.textContent = homescore
}

function increasehomescorebythree() {
    homescore += 3
    scoreElbtn.textContent = homescore
}

function resethomescores() {
    homescore = 0
   homeScoreEl.textContent = homescore
}

let guestScore1 = document.getElementById("guest-score-1")
let guestScoreEl = document.getElementById("guestscore")
let guestScore2 = document.getElementById("guest-score-2")
let guestScore3 = document.getElementById("guest-3")
let guestreset = document.getElementById("guestscore")
let guestscore = 0

function resetguestscores() {
    guestscore = 0
    guestreset.textContent = guestscore
}


function increaseguestscorebyone() {
    guestscore += 1
    guestScoreEl.textContent = guestscore
}

function increaseguestscorebytwo() {
    guestscore += 2
    guestScoreEl.textContent = guestscore
}

function guest3() {
    guestscore = guestscore + 3
    guestScoreEl.textContent = guestscore
}


