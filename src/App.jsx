/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useContext } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import TasksContext from './context/task'

function App() {

  const { fetchTask } = useContext(TasksContext)
  useEffect(() => {
    fetchTask();
  }, [])

  return (
    <>
      <h1>Please Add Task!</h1>
      <TaskCreate />

      <h1>Tasks</h1>

      <TaskList />

    </>
  )
}

export default App
