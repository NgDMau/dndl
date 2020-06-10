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
const emptyBox = document.getElementById("emptybox")

var score = 0;

var tempSelectedAnswer = "";

var audioright = new Audio('/audio/correct1.mp3');
var audiowrong = new Audio('/audio/wrong1.mp3');

var listQuestion = [], currentQuestionIndex
var numberQuestion = 20;

startButton.addEventListener('click', start)
resetButton.addEventListener('click',()=> {
  reset()
})

nextButton.addEventListener('click', () => {

  selectedAnswerNoti.style.display = 'none';

  if(nextButton.dataset.correct=="true"){
    delete listQuestion[currentQuestionIndex];
    score++
  }

  console.log(score)
  console.log (listQuestion)
  currentQuestionIndex++
  setNextQuestion()
})

resultButton.addEventListener('click', () => {
  if(resultButton.dataset.correct=="true"){
    delete listQuestion[currentQuestionIndex];
    score++
  }
     // HIDE the selected answer noti
  console.log(score)
  console.log (listQuestion)
  result()
})

function start() {
  // check and add (if exists) saved-score in localStorage to current score
  if (localStorage.savedscore) {
    score += Number(localStorage.savedscore);
  }
  
  alert("HELLO HELLO")

  startButton.classList.add('hide')
  shuffledQuestions(numberQuestion);
  currentQuestionIndex = 0
  labelElement.classList.remove('hide')
  titleElement.innerText = 'CÂU HỎI'
  // document.getElementById("shortcut_label").classList.remove('hide')

  setNextQuestion()
}

function reset() {
  document.getElementById('content').classList.remove('hide');
  resultButton.classList.add('hide');;
  startButton.classList.add('hide')
  currentQuestionIndex = 0
  labelElement.classList.remove('hide')
  titleElement.innerText = 'CÂU HỎI'
  document.getElementById('result_content').innerText = "Chúc mừng bạn đã hoàn thành phần đào tạo phân tích sắc thái văn bản. Bây giờ hãy bắt đầu với phần đào tạo tiếp theo."
  document.getElementById('btn-next-lvl').classList.remove('hide');
  resetButton.classList.add('hide');
  resultElement.classList.add('hide');
  listQuestion = listQuestion.filter(function (el) {
    return el != null;
  });
  // document.getElementById("shortcut_label").classList.remove('hide')

  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion (listQuestion[currentQuestionIndex])
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
  responsiveVoice.speak("Bạn đã chọn: " + selectedButton.innerText,'Vietnamese Female');

  if (correct=='true'){
    nextButton.dataset.correct = true;
    resultButton.dataset.correct = true;
  } else {
    nextButton.dataset.correct = false;
    resultButton.dataset.correct = false;
  }
  if  (listQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {

    resultButton.classList.remove('hide')
  }   

  
}

function shuffledQuestions(index) {
  var shuffled = questions.sort(() => Math.random() - .5);
  for (var i = 0; i < index; i++) {
    listQuestion.push(shuffled[i]);
  }
}

function result(){
  
  if(score == numberQuestion){


    audioright.play();
    document.getElementById('content').classList.add('hide');
    resultElement.classList.remove('hide');

    // window.location.href = '/3rd_result'
  }else{
    audiowrong.play();
    document.getElementById('content').classList.add('hide');
    document.getElementById('result_content').innerText = `Chà, bạn đã làm đúng ${score} câu rồi đấy, cùng làm lại ${numberQuestion-score} câu chưa chính xác nhé!`
    document.getElementById('btn-next-lvl').classList.add('hide');
    //document.getElementById('btn-again').innerHTML = 'Làm lại những câu sai';
    document.getElementById('btn-again').classList.remove('hide');
    resultElement.classList.remove('hide');
    listQuestion = listQuestion.filter(function (el) {
      return el != null;
    });
  }
}

function nextLvl(){
  var formData = new FormData();
    $.ajax({
        type: "POST",
        url: "/training_topic",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
          location.href="/dashboard"
        }
    });
}


