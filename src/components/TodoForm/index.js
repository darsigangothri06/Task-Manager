import {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [ids, setId] = useState(1)

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: ids,
            text: input
        })
        setId(prev => prev + 1)
        setInput('')
    }
    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder={props.edit ? 'Update your task' : 'Add a task'} 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className={props.edit ? 'todo-input edit' : 'todo-input'}
                ref={inputRef}
                name='text'
            />
            <button className={props.edit ? 'todo-button edit' : 'todo-button'}>{props.edit ? 'Update Task' : 'Add Task'}</button>
        </form>
    )
}

export default TodoForm