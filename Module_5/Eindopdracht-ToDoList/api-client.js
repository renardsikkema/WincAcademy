const getTask = function () {
    return fetch(`https://wincacademydatabase.firebaseio.com/renard.json`)
        .then(response => response.json())
}

const patchTask = function (obj) {
    fetch(`https://wincacademydatabase.firebaseio.com/renard.json`,
        {
            method: 'PATCH',
            body: JSON.stringify(obj)
        })
}

const deleteTask = function (id) {
    fetch(`https://wincacademydatabase.firebaseio.com/renard/${id}.json`,
        {
            method: 'DELETE'
        })
}

const changeDone = function (id, value) {
    fetch(`https://wincacademydatabase.firebaseio.com/renard/${id}/done.json`,
        {
            method: 'PUT',
            body: value
        })
}

const changeText = function (id, value) {
    fetch(`https://wincacademydatabase.firebaseio.com/renard/${id}/text.json`,
        {
            method: 'PUT',
            body: JSON.stringify(value)
        })
}