/// variables

const addTask = document.getElementById('add-task');

const taskContainer = document.getElementById('task-container');

const inputTask = document.getElementById('input-task');

let checkButton = document.createElement('button');

addTask.addEventListener('click',()=>{

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText =`${inputTask.value}`;
    task.appendChild(li);

    
    checkButton.innerHTML = 'Check';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'delete';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);
    if(inputTask.value === ""){
        alert('please enter a task')
    }else{
        taskContainer.append(task);
    }
    inputTask.value = "";

    checkButton.addEventListener('click', ()=>{
    checkButton.previousElementSibling.style.textDecoration = 'line-through'
    console.log(checkButton.previousElementSibling);
    })
    
    deleteButton.addEventListener('click', (e)=>{
       let target = e.target;
       target.parentElement.remove();
    })


})


