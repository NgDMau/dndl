function progress(){
    var prg = document.getElementById('progress');
    var percent = document.getElementById('percentCount');
    var counter = 0;
    var progress = 0;
    var id = setInterval(frame, 15);

function frame(){
    if(counter == 100){
        clearInterval(id);
    }
    else{
        progress += 1;
        counter += 1;
        prg.style.width = progress + '%';
        percent.innerHTML = counter + '%';

        }
    }
}

progress();