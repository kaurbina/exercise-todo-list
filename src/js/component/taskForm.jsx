import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Task extends Component {
	static get propTypes() {
		return {
			addTask: PropTypes.any
		};
	}

	state = {
		title: "",
		description: ""
	};

	onSubmit = event => {
		event.preventDefault();
		this.props.addTask(this.state.title, this.state.description);
		event.target.reset();
	};

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type="text"
					name="title"
					className="form-control no-border"
					placeholder="Write a Tasks"
					onChange={this.onChange}
				/>
			</form>
		);
	}
}
