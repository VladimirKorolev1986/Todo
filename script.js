document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form')
    const input = document.querySelector('#task')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log('Задача добавлена', input.value)
    })
})
