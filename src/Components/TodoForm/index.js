import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


function TodoForm(props) {
//console.log(props)
const {handleAddTODO,handleInputChange}=props

    
    return (
        <div>
            <Form className="form" onSubmit={handleAddTODO}>
                <input type="text" class="myinput" placeholder="Add Task name" onChange={handleInputChange} required/>
                <Button type="submit" class="addBtn">Add</Button>
            </Form>
        </div>
    )
}

export default TodoForm;