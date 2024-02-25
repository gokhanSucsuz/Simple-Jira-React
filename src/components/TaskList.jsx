import TaskShow from "./TaskShow"

/* eslint-disable react/prop-types */
export default function TaskList({ tasks, onDelete, onUpdate }) {


    return (
        <>
            <div className="taskElements">
                {
                    tasks.map(task => {
                        return <TaskShow key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
                    })
                }
            </div>
        </>
    )
}