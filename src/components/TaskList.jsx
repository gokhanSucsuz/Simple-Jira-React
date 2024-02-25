import { useContext } from "react"
import TaskShow from "./TaskShow"
import TasksContext from "../context/task"

/* eslint-disable react/prop-types */
export default function TaskList() {
    const { tasks } = useContext(TasksContext)

    return (
        <>
            <div className="taskElements">
                {
                    tasks.map(task => {
                        return <TaskShow key={task.id} task={task} />
                    })
                }
            </div>
        </>
    )
}