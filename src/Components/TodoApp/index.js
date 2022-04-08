import React from "react";
import TODO_LIST from "../../Constants/Todolist.json";
import TodoItem from "../TodoItem";

function TodoApp() {
    return (
        <div className="main1">
            <div className="todo">
                <h2 className="head">MY TODO LIST</h2>
                    <ul>
                        {
                            TODO_LIST.TODO_LIST.map(val => {
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