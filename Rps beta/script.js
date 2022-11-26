

let totalscore = { playerscore: 0, computerscore: 0 }


function getComputerChoice() {
  let aichoice = ['Rock', 'Paper', 'Scissors']
  let computerChoice = aichoice[Math.floor(Math.random(aichoice) * 3)]

  return computerChoice
}


function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0


  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1

    // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }

  // return score
  return score
}
//   let score;
//   if (playerChoice == computerChoice) {
//     score = 0
//   }
//   else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
//     score = -1
//   }
//   else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
//     score = 1
//   }
//   else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
//     score = 1
//   }

//   else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
//     score = -1
//   }
//   else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
//     scoree = -1
//   }

//   else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
//     score = 1
//   }
//   console.log(score)
//   return score
// }



function showResult(score, playerChoice, computerChoice) {

  // let winOrLose = (score) => {
  //   if (score == -1) {
  //     result.innerText = 'You Lose!'
  //   }
  //   else if (score == 1) {
  //     result.innerText = 'You won!'
  //   }
  //   if (score == 0) {
  //     result.innerText = 'Its a DRAW!!!'
  //   }
  // }

  //   let playerScore = document.getElementById('player-score')

  //   let hands = document.getElementById('hands')

  //   let result = document.getElementById('result')

  //   playerScore.innerText = totalscore['playerscore']
  //     // `${Number(playerScore.innerText) + score}`
  //   hands.innerText = `🧔 : ${playerChoice}|  VS  | ${computerChoice} : 🖥`
  //   // result.innerText=`${winOrLose(score)}`
  // }
  let resultdiv = document.getElementById('result')
  let handsdiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultdiv.innerText = 'You Lose!'
  }
  else if (score == 0) {
    resultdiv.innerText = 'Its a TIE!'
  }
  else {
    resultdiv.innerText = 'You Won!'
  }
  handsdiv.innerText = `${playerChoice} |  VS  | ${computerChoice}`
  
  playerScoreDiv.innertext = totalscore['playerscore']
}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice()
  let score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)


}



function playGame() {

  let buttons = document.querySelectorAll('.rpsButton')

  buttons.forEach(button => {
    button.onclick = () => onClickRPS(button.value)

  }
  )
   let exit = document.getElementById('endGameButton')
  exit.onclick =() => endGame()
}


function endGame(totalscore) {
 totalscore[playerscore] = 0
  totalscore[computerscore] =0
   let resultdiv =
    document.getElementById('result')
  let handsdiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')


  playerScoreDiv.innerText = ''
  handsdiv.innerText = ''
  resultdiv.innerText = ''

}

playGame()