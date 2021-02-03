import React, { useReducer } from 'react';
import './styles.css';

const initialState = [{
    id: new Date().getTime()
}]

export const TodoApp = () => {

    const [ state ] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Task1</li>
                <li>Task2</li>
                <li>Task3</li>
                <li>Task4</li>
            </ul>

        </div>
    )
