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

<<<<<<< HEAD
  if (correct){
    resultElement.style.backgroundColor = "lime";
    resultElement.classList.remove("hide");
    resultElement.getElementsByTagName("P")[0].innerHTML = 'Bạn đã lựa chọn đúng!'

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Quay về trang chủ'
      startButton.onclick = function() {
        window.location = '/dashboard'
      }
      startButton.classList.remove('hide')
      resultElement.innerHTML = 'Chúc mừng bạn đã hoàn thành bài đầu tiên trong tổng số 2 bài thi để nhận chứng chỉ. Hệ thống sẽ tự động chuyển sang bài thi tiếp theo trong 10 giây'
    }
    
  }else{
    resultElement.style.backgroundColor = "rgb(255, 128, 128)";
    resultElement.classList.remove("hide");
    resultElement.getElementsByTagName("P")[0].innerHTML  = 'Bạn đã lựa chọn sai!'
=======
  if (correct=='true'){
    score++;
    selectedButton.dataset.correct = false;
>>>>>>> cd3dc082fb88866aceca9670e83b9b1e2d15b77b
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
  },
  {
<<<<<<< HEAD
    id: '12207',
    question: 'Hôm nay thời tiết thật là đẹp',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '12208',
    question: 'Hôm nay đen quá vừa bị mất ví trên xe bus',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: true },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '12209',
    question:'Học lực của cháu bình thường, không tốt cũng không kém',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: true },
      { text: 'Không biết', correct: true}
    ]
  },
  {
    id: '12210',
    question: 'Lê Lợi lên ngôi năm 1428',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
    ]
  },
  {
    id: '12211',
    question: 'Cảm ơn cậu vì đã giúp mình lúc nãy nhé',
    answers: [
      { text: 'Tích cực', correct: true },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: false }
    ]
  },
  {
    id: '12206',
    question: '111111111111',
    answers: [
      { text: 'Tích cực', correct: false },
      { text: 'Tiêu cực', correct: false },
      { text: 'Trung tính', correct: false },
      { text: 'Không biết', correct: true }
=======
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
    id: '12203',
    question: 'Cửa hàng này chán quá',
    answers: [
      { text: 'Tích cực', correct: false},
      { text: 'Tiêu cực', correct: true},
      { text: 'Trung tính', correct: false},
      { text: 'Không biết', correct: false}
>>>>>>> cd3dc082fb88866aceca9670e83b9b1e2d15b77b
    ]
  }
]

