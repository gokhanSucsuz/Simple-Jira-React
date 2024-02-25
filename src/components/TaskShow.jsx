/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import TaskCreate from "./TaskCreate"
import TasksContext from "../context/task"

/* eslint-disable react/prop-types */
export default function TaskShow({ task }) {

    const { onDelete, editTask } = useContext(TasksContext)
    const [showEdit, setShowEdit] = useState(false)
    const removeTask = () => {
        onDelete(task.id)
    }

    const handleUpdate = () => {
        setShowEdit(true)
    }

    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false)
        editTask(id, updatedTitle, updatedTaskDesc)
    }
    return (
        <>
            {
                showEdit ?
                    <>
                        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
                    </> :
                    <div className="listElements">
                        <h3>Your Task</h3>
                        <p>{task.title}</p>
                        <h3>Todo</h3>
                        <p>{task.taskDesc}</p>
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={removeTask} className="removeButton">Remove</button>
                    </div>
            }
        </>
    )
}