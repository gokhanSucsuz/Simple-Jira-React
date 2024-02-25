/* eslint-disable react/prop-types */
import { useState } from "react"

export default function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
    const [title, setTitle] = useState(task ? task.title : "")
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')

    const handleInputChange = (event) => {
        setTitle(event.target.value)
    }
    const handleTextareaChange = (event) => {
        setTaskDesc(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskFormUpdate) { onUpdate(task.id, title, taskDesc) } else {
            onCreate(title, taskDesc)

        }
        setTaskDesc('')
        setTitle('')
    }
    return (
        <>
            {taskFormUpdate ?
                <form className="firstForm">
                    <div className="formElements">
                        <label>Edit Title</label>
                        <input
                            onChange={handleInputChange}
                            value={title} />
                        <label>Update the Task!</label>
                        <textarea
                            onChange={handleTextareaChange}
                            rows={5}
                            value={taskDesc} />
                        <button onClick={handleSubmit}>Update</button>
                    </div>
                </form> :
                <form className="firstForm">
                    <div className="formElements">
                        <label>Title</label>
                        <input onChange={handleInputChange} value={title} />
                        <label>Enter the Task!</label>
                        <textarea onChange={handleTextareaChange} rows={5} value={taskDesc} />
                        <button onClick={handleSubmit}>Create</button>
                    </div>
                </form>}

        </>
    )
}