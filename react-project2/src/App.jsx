// import Card from './component/card';
// import { useState } from 'react';
// import React, { Fragment } from 'react';

// import Fragment from './component/Fragment';

// function App() {
//   const [count, setCount] = useState(0)

//   function increment() {
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)

//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);

//     console.log("Count :", count)
//   }

//   return (
//     <>
//      <h1>Count : {count} </h1>
//      <button onClick={increment}>Increment</button>

//      <Card/>
//     </>

//   )
// }

// const items = [
//   {id : 1, name : "Dharmesh", para : "Hii, I am from MZR"},
//   {id : 2, name : "Gopnarayan", para : "Hii, I am from MZR"},
//   {id : 3, name : "Dharmesh", para : "Hii, I am from MZR"},
//   {id : 4, name : "Gopnarayan", para : "Hii, I am from MZR"},
// ]

// const arr = [1,2,3,4,5,6]


// function App() {
//   return (
//     <>
//     <Fragment data={items}/>
//     {arr.map((a, index) => (
//       <h1 key={index}>{a}</h1>
//     ))}
//    </>
//   );
// }

// import { useEffect, useState } from "react"

// function App() {
//   const [user, setUser] = useState({
//     // name : "Dharmesh", age : 20, address : "Bengaluru", stepCount : 0
//     name : "Dharmesh", age : 20, address : "Bengaluru", healthMatrix : {stepCount : 0}
//   })

//   function update() {
//     // setUser({...user, stepCount : user.stepCount + 1});
//     // setUser((prev) => ({...prev, stepCount : prev.stepCount + 1}));
//     setUser((prev) => ({...prev, healthMatrix, stepCount: prev?.healthMatrix?.stepCount + 1}))
//   }


//   return (
//     <>
//       <h1>Steps : {user?.healthMatrix?.stepCount}</h1>
//       <button onClick={update}>CLick</button>
//     </>
//   )
// }

// function App() {
//   const [user, setUser] = useState([1,2,3,4])


//   function update() {
//     setUser((prev) => {
//       const ar = prev.map(ele => ele == 2 ? ele + 2 : ele)
//       return ar
//     })
//   }


//   return(
//     <>
//     <h1>Steps : {user}</h1>
//     <button onClick={update}>Click</button>
//     </>
//   )
// }

// function App() {
//   const [user, setUser] = useState(0)
//   function update() {
//     setTimeout(() => {
//       setUser((prev) => prev + 1)
//     }, 1000)
//   }

//   return (
//     <>
//     <h1>Steps : {user}</h1>
//     <button onClick={update}>Click</button>
//     </>
//   )
// }


// import Child from "./component/child"

// function App() {
//   const [count, setCount] = useState(0)
//   const [stop, setStop] = useState(0)


//   function toggleStop() {
//     setStop(prev => !prev)
//   }

//   useEffect(() => {
//     let id;

//     if(!stop) {
//       const id = setTimeout(() => {
//       setCount(prev => prev + 1)
//     }, 1000)
//     }

//     return function () {
//       clearTimeout(id)

//     }
//   }, [count])



//   return (
//     <>
//       <h1>StopWatch: {count}</h1>
//       {/* {stop && <Child stop={stop} />} */}
//       <button onClick={toggleStop}>{stop ? "start" : "stop"}</button>


//     </>
//   )
// }


import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  
  
  function submitHandler(e) {
    e.preventDefault(); 
  
    if (taskInput.trim() === '') return;

    if (editingId) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingId ? { ...task, text: taskInput.trim() } : task
        )
      );
      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: taskInput.trim()
      };
      setTasks((prev) => [...prev, newTask]);
    }

    setTaskInput('');
  }
  

  function deleteTask(id) {
    setTasks((prev) => prev.filter(task => task.id !== id));
  }


  function startEdit(task) {
    setEditingId(task.id);   
    setTaskInput(task.text);
  }

  return (
    <>
    <center>
      <h1>Task Management</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)} 
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
          
          {editingId && (
            <button onClick={() => { setEditingId(null); setTaskInput(''); }}>Cancel</button>
          )}
      </form>
      <ol>
      {tasks.map((task) => {
        return (
          <>
            <li key={task.id}>{task.text}</li>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => startEdit(task)}>Edit</button>
          </>
        )
      })}
      </ol>
    </center>
    </>
  );
}



export default App
