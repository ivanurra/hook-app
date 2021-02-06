import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}]

export const TodoApp = () => {

    const [ state ] = useReducer(todoReducer, initialState)

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Task1</li>
                <li>Task2</li>
                <li>Task3</li>
            </ul>

        </div>
    )
}