import React from 'react';

function Form(props) {
	// pass input in the textbox to setInputText hook state
	function inputTextHandler(e) {
		// console.log(e.target.value);
		props.setInputText(e.target.value);
	}

	// stop refresh page after clicking submit button
	function submitTodoHandler(e) {
		e.preventDefault();
		props.setTodos([
			...props.todos,
			{
				text: props.inputText,
				completed: false,
				id: performance.now()
			}
		]);
		props.setInputText("");
	}

	function statusHandler(e) {
		// console.log(e.target.value);
		props.setStatus(e.target.value);
	}

	return (

		<form>
			<input
				value={props.inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
				placeholder="Write your plans here..."
			/>

			<button onClick={submitTodoHandler} className="todo-button" type="submit">
				<i className="fa fa-plus" />
			</button>

			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>



	)
}

export default Form;