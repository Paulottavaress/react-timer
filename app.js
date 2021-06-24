// Receive and store the value that the user inserts in the 'add task' button
document.querySelector('input.btn').addEventListener('click',  
function(e){
    const taskInput = document.getElementById('task');
    const li = document.createElement('li');
    const link = document.createElement('a');
    const taskList = document.querySelector('.collection');

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

// Create an element that goes on top of all others with what the user inputed inside

// Delete the element when the user clicks on the X button
document.querySelectorAll('.delete-item').forEach(function(current){
   current.addEventListener('click', function(e){
      current.parentElement.remove();
      console.log(e);
   });
});

// Delete all elements when the user clicks on 'clear tasks'
document.querySelector('.clear-tasks').addEventListener('click',  
function(e){
    const list = document.querySelector('ul');
     while (list.childElementCount > 0){
        
        list.removeChild(list.firstChild)
     };
});




