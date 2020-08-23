let taskListNode = document.getElementById('task-list');
let taakId = 1;

const addTask = function () {
    let newTaskText = document.getElementById('new-task-text');
    addTaskToDom(newTaskText.value, taakId, false)
    let obj = {};
    let objId = 'taak' + taakId
    obj[objId] = { done: false }
    obj[objId].text = newTaskText.value;
    patchTask(obj);
    taakId = taakId + 1;
    newTaskText.value = '';
}

const addTaskToDom = function (newTaskText, id, done) {
    let newLiElem = document.createElement('li');
    newLiElem.innerHTML = `<div><input type="checkbox"><label>${newTaskText}</label></div>
    <img id="taak${id}" src="trash-delete-icon.jpg">`;
    taskListNode.appendChild(newLiElem);
    taskListNode.lastChild.querySelector('input').checked = done;
    taskListNode.lastChild.querySelector('img').addEventListener('click', (event) => {
        deleteTask(event.target.id);
        const taak = event.target.parentElement;
        taak.parentNode.removeChild(taak);
    });
    taskListNode.lastChild.querySelector('input').addEventListener('click', (event) => {
        let checkId = event.target.parentElement.nextSibling.nextSibling.id
        changeDone(checkId, event.target.checked);
    });
    taskListNode.lastChild.querySelector('label').addEventListener('click', (event) => {
        editTask(event.target);
    });
}

const editTask = function (tasklabelNode) {
    tasklabelNode.innerHTML = `<input type="text"> <button class="add-btn">Voeg toe</button>`;
    tasklabelNode.querySelector('button')
        .addEventListener('click', (event) => {
            let changeId = tasklabelNode.parentElement.nextSibling.nextSibling.id;
            let newText = tasklabelNode.querySelector('input').value
            changeText(changeId, newText)
            tasklabelNode.innerHTML = newText;
        });
}

const start = async function () {
    const tasks = await getTask();
    let keys = Object.keys(tasks);
    let keyNumbers = keys.map(item => {
        return parseInt(item.substring(4));
    });
    taakId = 1 + keyNumbers.reduce((acc, item) => {
        if (acc < item) {
            return item;
        } else return acc;
    });
    keys.forEach((item, index) => {
        addTaskToDom(tasks[item].text, keyNumbers[index], tasks[item].done);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    start();
})