const form = document.querySelector('form')
form.addEventListener('submit', addTodo)

function addTodo(event) {
    event.preventDefault()
    const newItem = document.createElement('li')
    const input = document.querySelector('#item')
    newItem.innerText = input.value
    const list = document.querySelector('ul')
    list.appendChild(newItem)
}