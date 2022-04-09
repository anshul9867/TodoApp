import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';

function TodoItem(props) {
    const { name, isdone } = props.todo
    return (
        <div>
            <div className="main">
                <div className="list">
                    <input type='checkbox' checked={isdone} />
                    <li>{name}</li>
                </div>
                <div className=''>
                    {isdone ?<Badge bg="secondary" className="badge">Complete</Badge> :
                    <Badge bg="secondary" className="badge">inComplete</Badge>}
                </div>
            </div>
        </div>
    )
}

export default TodoItem;