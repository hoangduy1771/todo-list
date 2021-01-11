import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./components/TodoList.css"


function App() {
	// States
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([])

	// Use Effect
	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		saveLocalTodos();
		console.log("Effect");
		filterHandler();
	}, [todos, status]);

	// functions
	function filterHandler() {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter(todo => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	}

	// save to local
	function saveLocalTodos() {
		localStorage.setItem("todos", JSON.stringify(todos));

	}

	function getLocalTodos() {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let localTodos = JSON.parse(localStorage.getItem("todos"));
			setTodos(localTodos);
		}
	}


	return (
		<div className="App">
			<h1>Todo List</h1>
			<img src={logo} className="App-logo" alt="logo" />


			<h1>Any plans for today?</h1>

			<Form todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />


		</div>
	);
}

export default App;
