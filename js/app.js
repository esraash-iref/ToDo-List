let inputTask = document.getElementById('inputTask');
let addButton = document.getElementById('addButton');
let newtask = document.getElementById('newtask');
let noTask = document.getElementById('noTask');
let count = document.getElementById('count');

function show() {
    if (newtask.childElementCount > 0) {
        noTask.classList.add('none');
    } else {
        noTask.classList.remove('none');
    }
    // number of task
    count.innerText = newtask.childElementCount;
}
let addNewTask = () => {
    let data = inputTask.value;
    let newdata = data.trim();
    if (newdata.length == 0) {
        window.alert('Please Enter Your Task First!');
    } else if (newdata.length <= 3) {
        window.alert('Task should be greater than 3 character ');
    } else if (newdata.length > 50) {
        window.alert('Task should be less than 50 character ');
    }
    else {
        newtask.innerHTML += `<div class="alert alert-info  "><input class="form-check-input checked text-success px-2 " type="checkbox" value="" id="flexCheckDefault"></input>
         ${data} 
        <i class="fa-solid fa-trash text-danger  fs-5 float-end btn delete"></i> </div>`;
        inputTask.value = '';
        // remove notask
        show();
    }

}
addButton.addEventListener('click', addNewTask);
// delete task
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        show();
    }
})
// check task
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('checked')) {
        e.target.parentElement.classList.toggle('check');
    }
})

