// Function to add task when Enter key is pressed 
 document
.getElementById("taskInput")
.addEventListener("keyup", function (event) {
  if (event.keycode=== 13) {
      event.preventDefault();
      addTask();
  }
});

 // Function to add task 
 function addTask() {
    var taskInput = document.getElementById("taskinput"); 
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var tasklist = document.getElementById("taskList"); 
        var listItem = document.createElement("li"); 
        listitem.classList.add("task-item");

         var taskTextElement = document.createElement("span"); 
         taskTextElement.classList.add("task-text"); 
         taskTextElement.textContent = taskText;
         listItem.appendChild(taskTextElement);

        var buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("task-buttons");

        var completeButton = document.createElement("button"); 
        completeButton.innerHTML="";
        completeButton.classList.add("complete-button"); 
        completeButton.onclick = function () {
            toggleComplete(listItem);

        };
        buttonsDiv.appendChild(completeButton);

        var deleteButton = document.createElement("button")
        deletellutton.innerHTML = "";
        deleteButton.classList.add("delete-button"); 
        deleteButton.onclick = function () {
         deleteTask(listItem);
        };
        buttonsDiv.appendChild(deleteButton);

        ListItem.appendChild(buttonsDiv);

        taskList.appendChild(listitem); 
        taskInput, value
    }
}
// Function to toggle task completion 53 
// Function to toggle task completion

function toggleComplete (taskItem) {
    taskItem.classList.toggle("completed"); 
    var taskText = taskItem.querySelector(".task-text");
    if (taskItem.classList.contains("completed")) {
        taskText.style.textDecoration = "line-through";
        taskText.style.backgroundColor ="#4CAF50"; // Change background color
        } else {
            taskText.style.textDecoration = "none";
           taskText.style.backgroundColor = "transparent"; // Reset background color
        }
    }
       
        
        // Function to delete task 
         function deleteTask(taskItem) {
        taskItem.remove();
         }