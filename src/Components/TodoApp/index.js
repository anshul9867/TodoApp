import React, { useState } from "react";
import TODO_LIST from "../../Constants/Todolist.json";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

function TodoApp() {
    const [title, setTitle] = useState("");
    const [todoList, setTodoList] = useState([])
   

    const handleAddTODO = (e) => {
        e.preventDefault();
        // let prev=[...todoList]
        // prev.push({name: title, isdone: false })
        // setTodoList(prev)
        setTodoList((prevState) => [...prevState, { name: title, isdone: false }])
    };
    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div className="main1">
            <div className="todo">
                <h2 className="head">MY TODO LIST</h2>
                <TodoForm handleAddTODO={handleAddTODO}  handleInputChange={handleInputChange}/>
                    <ul>
                        {
                            todoList.map(val => {
                                return (
                                    <TodoItem todo={val}/>
                                )
                            })
                        }
                    </ul>
            </div>
        </div>
    );
}
export default TodoApp;