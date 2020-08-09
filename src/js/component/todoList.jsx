import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import "./todoList.css";

class Tasks extends Component {
	static get propTypes() {
		return {
			tasks: PropTypes.array,
			deleteTask: PropTypes.func
		};
	}

	render() {
		return (
			<div>
				{this.props.tasks.map(task => (
					<li
						key={task.id}
						className="form-control no-border closeBtn">
						{task.title}
						<span
							className="btnClose float-right h4 text-danger"
							onClick={this.props.deleteTask.bind(this, task.id)}
						/>
					</li>
				))}
			</div>
		);
	}
}

export default Tasks;
