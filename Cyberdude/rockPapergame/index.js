document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.lengh == 0){
        alert('please enter task')
    }
    else{
        document.querySelector('#task').innerHTML += ` <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete"></button>
        </div>`
    }
}