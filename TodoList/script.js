const sub = document.querySelector(".sub")
const input = document.querySelector("#text")
const listOut = document.querySelector('.output')
const containerEdit = document.querySelector('.editContainer')
const wall = document.querySelector('.wall')
const save = document.querySelector('.save')


sub.addEventListener('click', (e) => {
e.preventDefault()
const value = input.value
if(!value){
    alert("Please enter a text!")
    return;
}

const Task = document.createElement('div')
Task.classList.add('item');


const inputEdit = document.createElement('input')
inputEdit.classList.add('textEdit')
inputEdit.type = 'text'
inputEdit.value = value
inputEdit.setAttribute("readonly","readonly")

Task.appendChild(inputEdit)

const actions = document.createElement('div')
actions.classList.add('actions')
const Edit = document.createElement('button')
Edit.innerText="Edit"
Edit.classList.add('editBtn')

const Del = document.createElement('button')
Del.innerText='Delete'  
Del.classList.add('delBtn')

actions.appendChild(Del)
actions.appendChild(Edit)

Task.appendChild(actions)

Edit.addEventListener('click', () => {
    
    inputEdit.removeAttribute("readonly")
    containerEdit.classList.add('block')
    containerEdit.style.display = 'block'
    inputEdit.style.marginTop = '50px'
    containerEdit.appendChild(inputEdit)
    wall.style.display = 'block'



})

save.addEventListener('click', () => {

    if(!(inputEdit.value == '')){
        inputEdit.setAttribute('readonly','readonly')
        inputEdit.style.marginTop = '0'
       containerEdit.classList.add('exit')
        setTimeout(() => {
            Task.appendChild(inputEdit)
            wall.style.display = 'none'
            containerEdit.style.display = 'none'
        },400)

        setTimeout(() => {
         containerEdit.classList.remove('exit')
        },600)
       
    } else {
        alert('Please enter a task!')
    }
  
    



})

Del.addEventListener('click',() => {
    listOut.removeChild(Task)
})





listOut.appendChild(Task)
input.value = ''


})