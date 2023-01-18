const quizQuestions = [
  {
    question: "What is the difference between == and === ?",
    choices: [
      "There is no difference", 
      "== checks for value equality and === checks for both value and type equality", 
      "== checks for type equality and === checks for value equality"],
    correctAnswers: ["== checks for value equality and === checks for both value and type equality"],
    userAnswer: []
  },
  {
    question: "What is a higher-order function in JavaScript?",
    choices: [
      "A function that returns a function", 
      "A function that takes a function as an argument", 
      "Javascript doesn't have high-order functions"],
    correctAnswers: [
      "A function that returns a function", 
      "A function that takes a function as an argument"
    ],
    userAnswer: []
  },
  {
    question: "What is a pure function in JavaScript?",
    choices: [
      "A function that always returns the same output for the same input", 
      "A function that has no side effects", 
      "All functions are pure functions"],
    correctAnswers: [
      "A function that always returns the same output for the same input", 
      "A function that has no side effects"
    ],
    userAnswer: []
  },
  {
    question: "What is the purpose of the `console.log()` function?",
    choices: [
      "To print output to the console", 
      "To create a new line in the console", 
      "To clear the console"],
    correctAnswers: ["To print output to the console"],
    userAnswer: []
  },
  {
    question: "How does a webpage read the .js file?",
    choices: [
      "It reads it all at once",
      "It reads it left to right",
      "It reads it from the top to the bottom",
      "It reads it from the bottom to the top"],
    correctAnswers: ["It reads it from the top to the bottom"],
    userAnswer: []
  }
];


let maxCorrectAnswers = 0

const quizScoreDisplay = document.getElementById("quiz-score")
const quizElement = document.getElementById("quiz")
const formElement = document.querySelector("form")
const btnSub = document.getElementById("btn-sub")
const btnNext = document.getElementById("btn-next")
const btnReset = document.getElementById("restart")

let numberGoUp = 0
let numberGoUp2 = 0
let gg1 = document.getElementById("g1")
let gg2 = document.getElementById("g2")
let gg3 = document.getElementById("g3")
let ggZero = document.getElementById("g4")
let ggFull = document.getElementById("g6")
let qWrong = document.getElementById("h1-wrong")
let qCorrect = document.getElementById("h1-correct")

for (const question of quizQuestions) {
  // incremenet the maxCorrectAnswers by the number of possible correct answers in the question
  maxCorrectAnswers += question.correctAnswers.length
  // render the question elements
  renderQuestion(question)
}

function renderQuestion(question) {
  
  numberGoUp = numberGoUp + 1

  const questionElement = document.createElement("div")
  questionElement.setAttribute("id", numberGoUp)
  questionElement.innerHTML += `<p>${question.question}</p>`

  for (const choice of question.choices) {
    numberGoUp2 = numberGoUp2 + 1
    questionElement.innerHTML += `
    <label>
      <input class="checkId0" id="specificID${numberGoUp2}"  type="checkbox" name="${question.question}" value="${choice}">${choice}
    </label>
    `
  }

  quizElement.appendChild(questionElement)
}

checkArray = []


document.getElementById(1).style.display = "block"
document.getElementById(2).style.display = "none"
document.getElementById(3).style.display = "none"
document.getElementById(4).style.display = "none"
document.getElementById(5).style.display = "none"
btnSub.disabled = true
btnNext.disabled = true

let checkElements = document.getElementsByClassName("checkId0")


for (let i = 0; i<checkElements.length; i++){
  checkElements[i].addEventListener("change", function(){
    if(this.checked) {
      console.log("checked")
      btnNext.disabled = false
      if(clicks == 8){
        btnSub.disabled = false
      }
    } else { 
      console.log("checkbox is not checked")
    }
  })
}

btnNext.addEventListener("click", nextQuestion);

let clicks = 0;


function nextQuestion(){
  event.preventDefault()
  clicks++
  console.log(checkArray)
    if (clicks ==1 && document.getElementById("specificID2").checked === true){
    ggFull.style.display = "block"
    qCorrect.style.display = "block"
    document.getElementById(1).style.display = "none"
  } else if (clicks ==1 && document.getElementById("specificID1").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(1).style.display = "none"
  } else if (clicks ==1 && document.getElementById("specificID3").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(1).style.display = "none"
  }
  else if (clicks ==2){
    document.getElementById(2).style.display = "block"
    ggZero.style.display = "none"
    ggFull.style.display = "none"
    qCorrect.style.display = "none"
    qWrong.style.display = "none"
    btnNext.disabled = true
  } else if (clicks ==3 && document.getElementById("specificID4").checked === true) {
    ggFull.style.display = "block"
    qCorrect.style.display = "block"
    document.getElementById(2).style.display = "none"
  } else if (clicks ==3 && document.getElementById("specificID5").checked === true) {
    ggFull.style.display = "block"
    qCorrect.style.display = "block"
    document.getElementById(2).style.display = "none"
  } else if (clicks ==3 && document.getElementById("specificID6").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(2).style.display = "none"
  } else if (clicks ==4){
    document.getElementById(3).style.display = "block"
    ggZero.style.display = "none"
    ggFull.style.display = "none"
    qCorrect.style.display = "none"
    qWrong.style.display = "none"
    btnNext.disabled = true
  } else if (clicks ==5 && document.getElementById("specificID7").checked === true) {
    ggFull.style.display = "block"
    qCorrect.style.display = "block"
    document.getElementById(3).style.display = "none"
  } else if (clicks ==5 && document.getElementById("specificID8").checked === true) {
    ggFull.style.display = "block"
    qCorrect.style.display = "block"
    document.getElementById(3).style.display = "none"
  } else if (clicks ==5 && document.getElementById("specificID9").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(3).style.display = "none"
  } else if (clicks ==6){
    document.getElementById(4).style.display = "block"
    ggZero.style.display = "none"
    ggFull.style.display = "none"
    qCorrect.style.display = "none"
    qWrong.style.display = "none"
    btnNext.disabled = true
  } else if (clicks ==7 && document.getElementById("specificID10").checked === true) {
    ggFull.style.display = "block"
    qCorrect.style.display = "block"
    document.getElementById(4).style.display = "none"
  } else if (clicks ==7 && document.getElementById("specificID11").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(4).style.display = "none"
  } else if (clicks ==7 && document.getElementById("specificID12").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(4).style.display = "none"
  } else if (clicks ==8){
    document.getElementById(5).style.display = "block"
    ggZero.style.display = "none"
    ggFull.style.display = "none"
    qCorrect.style.display = "none"
    qWrong.style.display = "none"
    document.getElementById(btnNext.style.display = "none")
    btnNext.disabled = true
  } else if (clicks ==9 && document.getElementById("specificID13").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(5).style.display = "none"
  } else if (clicks ==9 && document.getElementById("specificID14").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(5).style.display = "none"
  } else if (clicks ==9 && document.getElementById("specificID15").checked === true) {
    ggFull.style.display = "block"
    qCorrect.style.display = "block"
    document.getElementById(5).style.display = "none"
  } else if (clicks ==9 && document.getElementById("specificID16").checked === true) {
    ggZero.style.display = "block"
    qWrong.style.display = "block"
    document.getElementById(5).style.display = "none"
  }
}

btnReset.addEventListener("click", function(){
  window.location.reload()
})

btnSub.addEventListener("click", function(event) {
  
  event.preventDefault()
  document.getElementById(5).style.display = "none"
  let numCorrect = 0

  for (const question of quizQuestions) {
    const selectedAnswers = []
    const checkboxInputs = document.getElementsByName(question.question)
    for (const checkbox of checkboxInputs) {
      if (checkbox.checked) selectedAnswers.push(checkbox.value)
    }

    for (const answer of selectedAnswers) {
      if (question.correctAnswers.includes(answer)) 
      numCorrect++
    }
  }

  function endImage(){
    if (numCorrect <= 2){
      gg1.style.display = "block"
    } else if (numCorrect <= 5){
      gg2.style.display = "block"
    } else if (numCorrect <= 7){
      gg3.style.display = "block"
    }
  }

  quizScoreDisplay.textContent = `You got ${numCorrect} of ${maxCorrectAnswers} correct!`
  quizScoreDisplay.style = "display: block;"
  endImage()
  btnSub.style.display = "none"
  btnReset.style.display = "block"
})

