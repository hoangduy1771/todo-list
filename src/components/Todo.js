import React from 'react';


function Todo(props) {
    function deleteHandlder() {
        props.setTodos(props.todos.filter((item) => item.id !== props.todo.id))
    }

    function completeHandler() {
        props.setTodos(props.todos.map((item) => {
            if(item.id === props.todo.id) {
                return {
                    ...item , completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : "" }`}>{props.text}</li>

            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"/>
            </button>

            <button onClick={deleteHandlder} className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
        </div>
    )
}





export default Todo;