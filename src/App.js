import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./components/TodoList.css"


function App() {
	const [inputText, setInputText] = useState(""); 
	const [todos, setTodos] = useState([]);

	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />

			<h1>Todo List</h1>
			<h1>What do you need to get done today?</h1>

			<Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
			<TodoList todos={todos} setTodos={setTodos}/>


		</div>
	);
}

export default App;
