// Using event attributes
// Using event property
// Using event Listner

// const a = document.getElementById("Output")
// a.style.color = "blue"

// function updateOutputfirst() {
//     const output = document.getElementById('output');
//     const imgele = document.createElement('img');
//     imgele.setAttribute('src','https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg');
//     output.append(imgele);
//     output.firstElementChild.style.width = "100px";
//     output.firstElementChild.style.height = "100px";
// }


// document.getElementById("btn").addEventListener("click", function (e) {
//     console.log("Button clicked!");
//     e.stopPropagation();
// });


// document.getElementById("child").addEventListener("click", function () {
//     console.log("Child clicked");
// });

// document.getElementById("parent").addEventListener("click", function () {
//     console.log("Parent clicked");
// });

// document.getElementById("grandparent").addEventListener("click", function () {
//     console.log("Grandparent clicked");
// });



// const fun = (relfi) => {
//     relfi.style.dispaly = "none"
// }

// const l1 = document.getElementById('task1')
// l1.children[0].addEventListener('click', () =>(
//     fun// l1.style.display = "none"
// ))

// const l2 = document.getElementById('task2')
// l2.children[0].addEventListener('click', () =>(
//     l2.style.display = "none"
// ))

// const l3 = document.getElementById('task3')
// l3.children[0].addEventListener('click', () =>(
//     l3.style.display = "none"
// ))

// const todolist = document.getElementById('todolist');

// todolist.addEventListener('click', () =>(

// ))


// const addTask = document.getElementById('addTask');
// const task = document.getElementById('task');
// const todolist = document.getElementById('todolist');

// addTask.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (task.value === "") {
//         const currenttask = task.value;
//         const existingitem = todolist.innerHTML;

//         const newList = existingitem + `<li>
//     ${currenttask}
//         <button class="delete">Delete</button>
//     </li>`
//         todolist.innerHTML = newList;
//         task.value = "";
//     } else {
//         alert("Please enter task!!!")
//     }

// })

// todolist.addEventListener('click', (e) => {
//     console.log(e,)
// });

// let seconds = 0;
// const timerElement = document.getElementById("timer");

// setInterval(() => {
//   seconds++;
//   timerElement.textContent = seconds;
// }, 1000);

function counterfunc() {
    let count = 0;

    function increment() {
        count++;
        console.log(count)
    }
    return increment;
}

var countvar = counterfunc();
countvar();
countvar();
countvar();
