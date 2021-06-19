// Receive and store the value that the user inserts in the 'add task' button
// Create an element that goes on top of all others with what the user inputed inside

// Delete the element when the user clicks on the X button

// Delete all elements when the user clicks on 'clear tasks'

val = document.querySelector('.clear-tasks').addEventListener('click',  
function(e){
    const list = document.querySelector('ul');
     while (list.childElementCount > 0){
        
        list.removeChild(list.firstChild)
     };
});

console.log(val);



