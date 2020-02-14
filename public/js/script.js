const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const titleElement = document.getElementById('title')
const resultElement = document.getElementById('result')
const labelElement = document.getElementById('label')

const status = {
  label_id: '',
  label_tapped: '',
  work_id: '1',
  time: ''
}

let shuffledQuestions, currentQuestionIndex
let currentField=0,pre_currentField

startButton.addEventListener('click', start)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  currentField=0
  resultElement.classList.add("hide");
  setNextQuestion()
  console.log(status)
})

function start() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort()
  currentQuestionIndex = 0
  currentField =0
  labelElement.classList.remove('hide')
  titleElement.innerText = 'Câu hỏi'
  document.getElementById("shortcut_label").classList.remove('hide')

  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  index = 0
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.id += "btn_"+index
    button.innerText = answer.text
    button.classList.add('btn-answer')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    index++
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  status.label_tapped = selectedButton.innerHTML
  status.label_id = shuffledQuestions[currentQuestionIndex].id
  status.time = new Date();

  if (correct){
    resultElement.style.backgroundColor = "lime";
    resultElement.classList.remove("hide");
    resultElement.getElementsByTagName("P")[0].innerHTML = 'Bạn đã lựa chọn đúng!'

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
    
  }else{
    resultElement.style.backgroundColor = "rgb(255, 128, 128)";
    resultElement.classList.remove("hide");
    resultElement.getElementsByTagName("P")[0].innerHTML  = 'Bạn đã lựa chọn sai!'
  }

  
}

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }


}

function goto_label(){
  index = parseInt(document.getElementById("sl_label").value) - 1;
  const id_label = "btn_"+ index
  document.getElementById(id_label).click();
}

const questions = [
  {
    id: '12203',
    question: 'Cửa hàng này chán quá',
    answers: [
      { text: 'Tích cực', correct: false},
      { text: 'Tiêu cực', correct: true},
      { text: 'Trung tính', correct: false},
      { text: 'Không biết', correct: false}
    ]
  },
  {
    id: '12204',
    question: 'Em đẹp lắm',
    answers: [
      { text: 'Tích cực', correct: true},
      { text: 'Tiêu cực', correct: false},
      { text: 'Trung tính', correct: false},
      { text: 'Không biết', correct: false}
    ]
  },
  {
    id: '12205',
    question: 'Đi làm',
    answers: [
      { text: 'Tích cực', correct: false},
      { text: 'Tiêu cực', correct: false},
      { text: 'Trung tính', correct: true},
      { text: 'Không biết', correct: false}
    ]
  },
  {
    id: '12206',
    question: '111111111111',
    answers: [
      { text: 'Tích cực', correct: false},
      { text: 'Tiêu cực', correct: false},
      { text: 'Trung tính', correct: false},
      { text: 'Không biết', correct: true}
    ]
  }
]
