//here we create the CRUD functionality

window.addEventListener("load", () => {
  const form = document.querySelector("#newTask");
  const input = document.querySelector("#newTaskText");
  const listItem = document.querySelector("#tasks");
  

  form.addEventListener("submit", (e) => {
    //prevents form refresh
    e.preventDefault();

    const inputtedTask = input.value;

    // create 
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskDivText = document.createElement("div");
    taskDivText.classList.add("content");

    taskDiv.appendChild(taskDivText);

    //content is an "input" here we create it 
    const taskInputItem = document.createElement("input");

    taskInputItem.classList.add("text");
    taskInputItem.type = "text";
    taskInputItem.value = inputtedTask;
    taskInputItem.setAttribute("readonly", "readonly");

    taskDivText.appendChild(taskInputItem);

    const taskActions = document.createElement("div");
    taskActions.classList.add("actions");
    //edit button
    const taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");
    taskEdit.innerHTML = "Edit";
    //delete button
    const taskDelete = document.createElement("button");
    taskDelete.classList.add("delete");
    taskDelete.innerHTML = "Delete";
    //buttons into actions
    taskActions.appendChild(taskEdit);
    taskActions.append(taskDelete);
    //actions into the task div
    taskDiv.appendChild(taskActions);

    // adding each task to the list of tasks
    listItem.appendChild(taskDiv);


    input.value = "";

    taskEdit.addEventListener("click", e => {
      if (taskEdit.innerText.toLowerCase() == "edit") {
        taskEdit.innerText = "Save";
        taskInputItem.removeAttribute("readonly");
//focus brings the user straight to typing 
        taskInputItem.focus();
      } else {
        taskEdit.innerText = "Edit";
        taskEdit.setAttribute("readonly", "readonly");
      }
    });

    //event listener listening for click on delete button
    //removes the entire task div
    taskDelete.addEventListener("click", e => {
      listItem.removeChild(taskDiv);
    });
  });
});