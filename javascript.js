const addButton = document.querySelector('.btn-add')
const input = document.querySelector('.input-add')
const cancelButton = document.querySelector('.btn-cancel')
const addToList = document.querySelector(".btn-addToList")
const toDoList = document.querySelector('.to-do-list')
const boxTitle = document.querySelector('.titleCard')
const inputNewTitle = document.querySelector('.inputNewTitle')


cancelButton.addEventListener("click", toggleAddButton);
addButton.addEventListener("click", toggleInput);


addToList.addEventListener("click", function (e) {
    e.preventDefault();

    const inputValue = input.value;

    if (inputValue){
        saveTodo(inputValue)
    }
})


document.addEventListener("click", function (e) {
    const targetElement = e.target
    const parentElement = targetElement.closest("div")

    if (targetElement.classList.contains("done-button")){
        parentElement.remove(targetElement)
    }
})


document.addEventListener("click", function (e) {
    const targetElement = e.target;
    const parentElement = targetElement.closest("h2");
  
    if (targetElement.classList.contains("toDoTitle")) {
      const inputNewTitle2 = document.createElement("input");
 
      parentElement.innerHTML = ""; // Clear the content of parentElement
      parentElement.appendChild(inputNewTitle2); // Append inputNewTitle to parentElement
  
      inputNewTitle2.addEventListener("input", function (event) {
        const userInput = event.target.value;
        parentElement.innerText = userInput; // Update the inner text of the parent element with the user input
      });
  
      inputNewTitle2.focus();
  
      const emojiArea = $(inputNewTitle2).emojioneArea({
        pickerPosition: "right",
      });
  
      emojiArea[0].emojioneArea.on("keydown", function () {
        if (event.keyCode == 13){
        const userInput = emojiArea[0].emojioneArea.getText();
        parentElement.innerText = userInput; // Update the inner text of the parent element with the user input
      }
    });
    }
  });
  

function saveTodo(text) {

    input.value = ""

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("done-button")

    todo.appendChild(doneBtn)

    const todoTitle = document.createElement("p")
    todoTitle.innerText = text
    todoTitle.classList.add("task-text")
    todo.appendChild(todoTitle)

    toDoList.appendChild(todo)

    input.value = ""
    input.focus()
}


function toggleInput(){
    addButton.style.display = "none"
    input.style.visibility = "visible"
    input.style.opacity = "1"
    cancelButton.style.display = "block"
    addToList.style.display = "block"
}

function toggleAddButton(){
    addButton.style.display = "block"
    input.style.visibility = "hidden"
    input.style.opacity = "0"
    cancelButton.style.display = "none"
    addToList.style.display = "none"
}

function bgChange(color){
  document.documentElement.style.setProperty('--main-color', color);
  
}

