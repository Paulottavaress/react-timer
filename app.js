// Common variables
const taskList = document.querySelector('.collection');
const li = document.createElement('li');

// Receive and store the value that the user inserts in the 'add task' button
document.querySelector('input.btn').addEventListener('click',  
function(e){
   console.log('teste');
    const taskInput = document.getElementById('task');
    const link = document.createElement('a');

    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    link.className = 'delete-item secondary-content';
    link.href = '#';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = '';

   e.preventDefault();
});

// Delete the element when the user clicks on the X button
   taskList.addEventListener('click',
   function(e){
      if(e.target.parentElement.classList.contains('delete-item')){
         if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
         }
      }
   });

// Delete all elements when the user clicks on 'clear tasks'
document.querySelector('.clear-tasks').addEventListener('click',  
function(e){
     while (taskList.childElementCount > 0){
        taskList.removeChild(taskList.firstChild)
     };
});

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

   console.log(text);
});


