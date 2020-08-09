import React, { Component } from "react";

import tasks from "./tasks.json";
import Tasks from "./todoList.jsx";
import TaskForm from "./taskForm.jsx";

//create your first component
export class Home extends Component {
	state = {
		tasks: tasks
	};

	addTask = (title, description) => {
		const newTask = {
			title: title,
			description: description,
			id: this.state.tasks.length
		};
		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
	};

	deleteTask = id => {
		const deleteTasks = this.state.tasks.filter(task => task.id != id);
		this.setState({ tasks: deleteTasks });
	};

	render() {
		return (
			<div className="container text-center">
				<h2 className="text-danger mt-5">Todos</h2>
				<TaskForm addTask={this.addTask} />
				<Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
			</div>
		);
	}
}
