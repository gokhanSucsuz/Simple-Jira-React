/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
	const [tasks, setTasks] = useState([]);
	const createTask = async (title, taskDesc) => {
		const response = await axios.post("http://localhost:3002/tasks", {
			title,
			taskDesc,
		});

		setTasks([...tasks, response.data]);
	};

	const fetchTask = async () => {
		const response = await axios.get("http://localhost:3002/tasks");
		setTasks(response.data);
	};
	const onDelete = async (id) => {
		await axios.delete(`http://localhost:3002/tasks/${id}`);

		const tasksFiltered = tasks.filter((task) => task.id !== id);

		setTasks(tasksFiltered);
	};

	const editTask = async (id, updatedTitle, updatedTaskDesc) => {
		await axios.put(`http://localhost:3002/tasks/${id}`, {
			title: updatedTitle,
			taskDesc: updatedTaskDesc,
		});
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return {
					id,
					title: updatedTitle,
					taskDesc: updatedTaskDesc,
				};
			}
			return task;
		});
		setTasks(updatedTasks);
	};
	const sharedValuesAndMethods = {
		tasks,
		createTask,
		fetchTask,
		onDelete,
		editTask,
	};
	return (
		<TasksContext.Provider value={sharedValuesAndMethods}>
			{children}
		</TasksContext.Provider>
	);
}

export default TasksContext;
export { Provider };
