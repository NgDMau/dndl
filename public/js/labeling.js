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


var result = {"id":'',"sentence":'',"labeled_values":''};
result.id = data.id;

if(data == 'none'){
    document.getElementById('content').classList.add('hide');
    resultElement.classList.remove('hide');
}

function showQuestion(question) {
    //   if (question.src) {
    //     audioElement.classList.remove('hide')
    //     playButton.classList.remove('hide')
    //   } else {
    //     audioElement.classList.add('hide')
    //     playButton.classList.add('hide')
    //   }
    questionElement.innerText = question.sentence;
    //   audioElement.setAttribute("src", question.src);

    label[0].sentiment.forEach(text => {
        const button = document.createElement('button')
        button.innerText = text.text
        button.classList.add('btn-answer')
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function selectAnswer(e) {
    const selectedButton = e.target
    responsiveVoice.speak("Bạn đã chọn: " + selectedButton.innerText, 'Vietnamese Female');
    nextButton.classList.remove('hide');
    result.labeled_values = selectedButton.innerText;
    console.log(result)

}

function uploadResult() {

    $('#labeled_values').val(result.labeled_values);
    $('#labeled_time').val(Date().toString());
    $('#id').val(result.id);
    $('#table').val(table);

    $("form").submit();


    // $.post("/labeling", { labeled_values: result.labeled_values, labeled_time: Date().toString(), id: result.id, table:table})
    //     .done(function (data) {
    //         result.id = data.id;
    //         result.sentence = data.sentence;
    //         showQuestion(result);
    //     });

}

showQuestion(data);

var label = [{
    sentiment: [
        { text: 'Tích cực' },
        { text: 'Tiêu cực' },
        { text: 'Trung tính' },
        { text: 'Không biết' }
    ]
}]
