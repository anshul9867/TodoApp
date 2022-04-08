import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


function TodoForm() {
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
    console.log(todoList, '--')
    return (
        <div>
            <Form className="form" onSubmit={handleAddTODO}>
                <input type="text" class="myinput" placeholder="Add Task name" onChange={handleInputChange}/>
                <Button type="submit" class="addBtn">Add</Button>
            </Form>
        </div>
    )
}

export default TodoForm;