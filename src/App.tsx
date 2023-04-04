import React, {useState} from 'react';
import './App.css';
import {filterKeyType, Todolist} from './Todolist';

function App() {

let [tasks, setTasks] = useState(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false}
        ]
    )


    function removeTasks(taskId: number) {
        setTasks(tasks.filter(el => el.id !== taskId))
        //  Or
        // tasks = tasks.filter(el=> el.id !== taskId)
        // setTasks(tasks)
        // console.log(taskId)
        // console.log(tasks)
    }

    // let [filterValue, setfilterValue]= useState("All")
    // let filteredTask = tasks
    //
    // function filterTasks(n: filterKeyType) {
    //     setfilterValue(n)
    // }
    //     if (filterValue === "Active") filteredTask = tasks.filter(el => !el.isDone)
    //     if (filterValue === "Completed") filteredTask = tasks.filter(el => el.isDone)
    //     if (filterValue === "All") filteredTask = tasks
    //
    //
    //     console.log(filterValue)
// return n


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTasks={removeTasks}
                // filterTasks={filterTasks}
            />

        </div>
    );
}

export default App;
