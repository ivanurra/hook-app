import React, { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/simple-effect.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = () => {
        setCounter ( counter + 1)
    }

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={ increment }/>
        </div>
    )
}
