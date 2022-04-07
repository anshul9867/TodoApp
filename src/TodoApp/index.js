import React from "react";
import { ReactDOM } from "react";
import { Badge} from 'react-bootstrap';

function Todo() {

    const TODO_LIST = [
        {
            name: 'Drink water',
            isdone: false
        },
        {
            name: 'Watch TV',
            isdone: false
        },
        {
            name: 'Go outside',
            isdone: false
        },
        {
            name: 'Go to Bed',
            isdone: true
        }
    ]

    return (
        <div>
            <ul>
                {
                    TODO_LIST.map(val => {
                        return(
                            <div className="main">
                                <div className="list">
                            <input type='checkbox' checked={val.isdone}/>
                            <li>{val.name}</li>
                            <div>
                            {val.isdone===true?<Badge bg="secondary" className="badge">Completed</Badge>:null}
                            </div>
                        </div>
                            </div>
                        
                        )
                    })
                }
            </ul>
        </div>
    );
}
export default Todo;