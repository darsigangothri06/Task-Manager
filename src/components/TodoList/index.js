import { useState } from "react"
import TodoForm from "../TodoForm"
import Todo from "../Todo"

const TodoList = () => {
    const [tasks, setTasks] = useState([])

    const addTodo = (task) => {
        if(!task.text || /^\s*$/.test(task.text)){
            return
        }

        setTasks((prev) => [...prev, task])
    }

    const updateTask = (taskid, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTasks(prev => prev.map(item => (item.id === taskid ? newValue : item)))
    }

    const completeTask = (id) => {
        let updatedTasks = tasks.map(task => {
            if(task.id === id) task.isComplete = !task.isComplete
            return task
        })

        setTasks(updatedTasks)
    }

    const removeTask = (id) => {
        const removeArr = [...tasks.filter(task => task.id !== id)]

        setTasks(removeArr)
    }

    return(
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo
                tasks={tasks}
                completeTask={completeTask}
                removeTask={removeTask}
                updateTask={updateTask}
            />
        </div>
    )
}

export default TodoList