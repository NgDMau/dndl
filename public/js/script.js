const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const nextLevelButton = document.getElementById('next-lvl-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const titleElement = document.getElementById('title')
const labelElement = document.getElementById('label')
const resultElement = document.getElementById('result')
var score = 0;

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
  // document.getElementById("shortcut_label").classList.remove('hide')

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

  if (correct=='true'){
    score++;
    selectedButton.dataset.correct = false;
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    result();
  }   
  
}

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function result(){
  if(score >= 7){
    document.getElementById('content').classList.add('hide');
    resultElement.classList.remove('hide');
    
  }else{
    document.getElementById('content').classList.add('hide');
    document.getElementById('result_content').innerText = "Bạn chưa đạt tiêu chuẩn rồi hãy làm lại nhé!"
    document.getElementById('btn-next-lvl').classList.add('hide');
    document.getElementById('btn-again').classList.remove('hide');
    resultElement.classList.remove('hide');
  }
}

function goto_label(){
  index = parseInt(document.getElementById("sl_label").value) - 1;
  const id_label = "btn_"+ index
  document.getElementById(id_label).click();
}

// const questions = [
//   {
//     id: '1',
//     question: 'Cửa hàng này chán quá',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: true},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: false}
//     ]
//   },
//   {
//     id: '2',
//     question: 'Thời tiêt thật đẹp',
//     answers: [
//       { text: 'Tích cực', correct: true},
//       { text: 'Tiêu cực', correct: false},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: false}
//     ]
//   },
//   {
//     id: '3',
//     question: 'Đi làm',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: false},
//       { text: 'Trung tính', correct: true},
//       { text: 'Không biết', correct: false}
//     ]
//   },
//   {
//     id: '4',
//     question: '111111111111',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: false},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: true}
//     ]
//   },
//   {
//     id: '5',
//     question: 'Em làm chưa được tốt',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: true},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: false}
//     ]
//   },
//   {
//     id: '6',
//     question: 'Đi đấu thế này ?',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: false},
//       { text: 'Trung tính', correct: true},
//       { text: 'Không biết', correct: false}
//     ]
//   },
//   {
//     id: '7',
//     question: 'Việc làm thiếu trách nhiệm đã để lại nhiều hậu quả',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: true},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: false}
//     ]
//   },
//   {
//     id: '8',
//     question: 'Món này ngon quá',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: true},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: false}
//     ]
//   },
//   {
//     id: '9',
//     question: 'This branch has no conflicts with the base branch',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: false},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: true}
//     ]
//   },
//   {
//     id: '10',
//     question: 'Cửa hàng này chán quá',
//     answers: [
//       { text: 'Tích cực', correct: false},
//       { text: 'Tiêu cực', correct: true},
//       { text: 'Trung tính', correct: false},
//       { text: 'Không biết', correct: false}
//     ]
//   }
// ]

