import React, { useReducer } from 'react';
import './styles.css';

export const TodoApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState, init)

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Tarea1</li>
                <li>Tarea2</li>
                <li>Tarea3</li>
            </ul>

        </div>
    )
}
