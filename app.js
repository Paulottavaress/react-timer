// Common variables
const taskList = document.querySelector('.collection');
const li = document.createElement('li');

// Receive and store the value that the user inserts in the 'add task' button
document.querySelector('input.btn').addEventListener('click',  
function(e){
    const taskInput = document.getElementById('task');
    const link = document.createElement('a');
    const taskList = document.querySelector('.collection');
    const li = document.createElement('li');

    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    link.className = 'delete-item secondary-content';
    link.href = '#';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);

   // Store in local storage
   storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

   e.preventDefault();
});

// Store in local storage
function storeTaskInLocalStorage(task) {
   let tasks;
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.push(task);

   localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Loads the values in local storage
document.addEventListener('DOMContentLoaded', 
function(e){
   let tasks;
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task){
      const li = document.createElement('li');
      const link = document.createElement('a');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(task));
      link.className = 'delete-item secondary-content';
      link.href = '#';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
      taskList.appendChild(li);
   });
});


// Delete the element when the user clicks on the X button
taskList.addEventListener('click',
function(e){
      if(e.target.parentElement.classList.contains('delete-item')){
         if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
         }
      }
   });

// Remove from local storage
function removeTaskFromLocalStorage(taskItem){
   let tasks;
   if(localStorage.getItem('tasks') === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
         tasks.splice(index, 1);
      }
   });

   localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete all elements when the user clicks on 'clear tasks'
document.querySelector('.clear-tasks').addEventListener('click',  
function(e){
     while (taskList.childElementCount > 0){
        taskList.removeChild(taskList.firstChild)
     };

     // Clear from local storage
     clearTasksFromLocalStorage();
});

function clearTasksFromLocalStorage(){
   localStorage.clear();
}

// Filter tasks
document.querySelector('#filter').addEventListener('keyup', 
function(e){
   const text = e.target.value.toLowerCase();

   document.querySelectorAll('.collection-item').forEach
   (function(task){
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1){
         task.style.display = 'block';
      } else {
         task.style.display = 'none';
      }
   });
});


