import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type filterKeyType = "All"|"Active"|"Completed"

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
    // filterTasks: (n: filterKeyType) => void
}

export function Todolist(props: PropsType) {


    let [filterValue, setfilterValue]= useState("All")
    let filteredTask = props.tasks

    function filterTasks(n: filterKeyType) {
        setfilterValue(n)
    }
        if (filterValue === "Active") filteredTask = props.tasks.filter(el=>!el.isDone)
        if (filterValue === "Completed") filteredTask = props.tasks.filter(el=>el.isDone)
        // if (filterValue === "All") filteredTask = props.tasks


        console.log(filterValue)
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTask.map(el => {
                // debugger
                // console.log("rendered")
                return (
                    <li key={el.id}>
                        <button onClick={() => props.removeTasks(el.id)}>x</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => {filterTasks("All")
            }}>All
            </button>
            <button onClick={() => {
                filterTasks("Active")
            }}>Active
            </button>
            <button onClick={() => {
                filterTasks("Completed")
            }}>Completed
            </button>
        </div>
    </div>
}
