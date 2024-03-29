const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const nextLevelButton = document.getElementById('next-lvl-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const titleElement = document.getElementById('title')
const labelElement = document.getElementById('label')
const resultElement = document.getElementById('result')
const audioElement = document.getElementById('src_audio')
const playButton = document.getElementById('btn_play')
const resultButton = document.getElementById('result-btn')
const resetButton = document.getElementById("btn-again")
const selectedAnswerNoti = document.getElementById("noti-selected-answer")

var startTime, endTime;

var seconds;

var score = 0;

var res;

var audioright = new Audio('/audio/correct1.mp3');
var audiowrong = new Audio('/audio/wrong1.mp3');

var listQuestion = [], currentQuestionIndex
var numberQuestion = 30;

startButton.addEventListener('click', start)

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
  console.log(score)
  console.log (listQuestion)
  result()
})

function start() {
  startRecord_time()
  startButton.classList.add('hide')
  shuffledQuestions(numberQuestion)
  currentQuestionIndex = 0
  currentField =0
  labelElement.classList.remove('hide')
  titleElement.innerText = 'CÂU HỎI'
  
  // document.getElementById("shortcut_label").classList.remove('hide')

  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion (listQuestion[currentQuestionIndex])
}

function showQuestion(question) {
  console.log(question.quest)
  if (question.src) {
    audioElement.classList.remove('hide')
    playButton.classList.remove('hide')
  } else {
    audioElement.classList.add('hide')
    playButton.classList.add('hide')
  }
  questionElement.innerText = question.quest;
  audioElement.setAttribute("src", question.src);
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
  }else{
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
  endRecord_time();
  if(score >= numberQuestion*0.8){
    res = "true";
    audioright.play();
    document.getElementById('content').classList.add('hide');
    resultElement.classList.remove('hide');
    
  }else{
    res = "false";
    audiowrong.play();
    document.getElementById('content').classList.add('hide');
    document.getElementById('result_content').innerText = `Bạn đã không hoàn thành được bài kiểm tra. Hãy làm lại phần đào tạo và bài kiểm tra một lần nữa.`
    document.getElementById('btn-next-lvl').classList.add('hide');
    document.getElementById('btn-again').classList.remove('hide');
    resultElement.classList.remove('hide');
    listQuestion = listQuestion.filter(function (el) {
      return el != null;
    });
  }
}

function goto_label(){
  index = parseInt(document.getElementById("sl_label").value) - 1;
  const id_label = "btn_"+ index
  document.getElementById(id_label).click();
}

function uploadResult(){

  var posting = $.post( "/final_test", { time: seconds, resultTest: res, score: score} );

  posting.done(function (data) {
    location.href="/dashboard"
  });


}



function startRecord_time() {
  startTime = new Date();
};

function endRecord_time() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  seconds = parseInt(Math.round(timeDiff));

}


