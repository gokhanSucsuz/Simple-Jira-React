/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = async (title, taskDesc) => {

    const response = await axios.post('http://localhost:3002/tasks', {
      title,
      taskDesc
    })

    setTasks([...tasks, response.data])

  }

  const fetchTask = async () => {
    const response = await axios.get('http://localhost:3002/tasks')
    setTasks(response.data)
  }

  useEffect(() => {
    fetchTask();
  }, [])
  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3002/tasks/${id}`)

    const tasksFiltered = tasks.filter(task => task.id !== id)

    setTasks(tasksFiltered)
  }

  const editTask = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3002/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc
    })
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id, title: updatedTitle, taskDesc: updatedTaskDesc
        }
      }
      return task;

    })
    setTasks(updatedTasks)

  }

  return (
    <>
      <h1>Please Add Task!</h1>
      <TaskCreate onCreate={createTask} />

      <h1>Tasks</h1>

      <TaskList tasks={tasks} onDelete={onDelete} onUpdate={editTask} />

    </>
  )
}

export default App
