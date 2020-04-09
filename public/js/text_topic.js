const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const nextLevelButton = document.getElementById('next-lvl-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const titleElement = document.getElementById('title')
const labelElement = document.getElementById('label')
const resultElement = document.getElementById('result')
const resultButton = document.getElementById('result-btn')
const resetButton = document.getElementById("btn-again")
const selectedAnswerNoti = document.getElementById("noti-selected-answer")
var score = 0;

var audioright = new Audio('/audio/correct1.mp3');
var audiowrong = new Audio('/audio/wrong1.mp3');

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', start)
resetButton.addEventListener('click',()=> {
  reset()
})

nextButton.addEventListener('click', () => {

  selectedAnswerNoti.style.display = 'none';

  if(nextButton.dataset.correct=="true"){
    delete shuffledQuestions[currentQuestionIndex];
    score++
  }

  console.log(score)
  console.log (shuffledQuestions)
  currentQuestionIndex++
  setNextQuestion()
})

resultButton.addEventListener('click', () => {
  if(resultButton.dataset.correct=="true"){
    delete shuffledQuestions[currentQuestionIndex];
    score++
  }
     // HIDE the selected answer noti
  console.log(score)
  console.log (shuffledQuestions)
  result()
})

function start() {
  // check and add (if exists) saved-score in localStorage to current score
  if (localStorage.savedscore) {
    score += Number(localStorage.savedscore);
  } 

  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  labelElement.classList.remove('hide')
  titleElement.innerText = 'Câu hỏi'
  // document.getElementById("shortcut_label").classList.remove('hide')

  setNextQuestion()
}

function reset() {
  document.getElementById('content').classList.remove('hide');
  resultButton.classList.add('hide');;
  startButton.classList.add('hide')
  shuffledQuestions = shuffledQuestions
  currentQuestionIndex = 0
  labelElement.classList.remove('hide')
  titleElement.innerText = 'Câu hỏi'
  document.getElementById('result_content').innerText = "Chúc mừng bạn đã hoàn thành phần đào tạo phân tích sắc thái văn bản. Bây giờ hãy bắt đầu với phần đào tạo tiếp theo."
  document.getElementById('btn-next-lvl').classList.remove('hide');
  resetButton.classList.add('hide');
  resultElement.classList.add('hide');
  shuffledQuestions = shuffledQuestions.filter(function (el) {
    return el != null;
  });
  // document.getElementById("shortcut_label").classList.remove('hide')

  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion (shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.quest
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
  
  selectedButton.innerText = `Bạn đã chọn: ${selectedButton.innerText}`; // thử xem có biến chính nút bấm thành thông báo được không

  selectedAnswerNoti.innerHTML = "Bạn đã chọn: " + selectedButton.innerText;
  selectedAnswerNoti.style.display = 'block';

  if (correct=='true'){
    nextButton.dataset.correct = true;
    resultButton.dataset.correct = true;
  } else {
    nextButton.dataset.correct = false;
    resultButton.dataset.correct = false;
  }
  if  (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {

    resultButton.classList.remove('hide')
  }   
  
}

function result(){
  
  if(score == 10){
    // audioright.play();
    // document.getElementById('content').classList.add('hide');
    // resultElement.classList.remove('hide');
    window.location.href = '/3rd_result';
  }else{
    audiowrong.play();
    document.getElementById('content').classList.add('hide');
    document.getElementById('result_content').innerText = `Chà, bạn đã làm đúng ${score} câu rồi đấy, cùng làm lại ${10-score} câu chưa chính xác nhé!`
    document.getElementById('btn-next-lvl').classList.add('hide');
    //document.getElementById('btn-again').innerHTML = 'Làm lại những câu sai';
    document.getElementById('btn-again').classList.remove('hide');
    resultElement.classList.remove('hide');
    shuffledQuestions = shuffledQuestions.filter(function (el) {
      return el != null;
    });
  }
}


