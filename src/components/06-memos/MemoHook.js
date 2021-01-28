import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/simple-effect.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter (1000);
    const [show, setShow] = useState(true)

    const heavyProcess = ( iterations ) => {

        for ( let i = 0; i < iterations; i++){
            console.log('Go!');
        }

        return `${iterations} Iterations done!`;
    }

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [ counter ])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> { counter } </small> </h3>
            <hr />

            <p> {heavyProcess(counter)} </p>

            <button
                className="btn btn-primary"
                onClick= { increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick= { () => {
                    setShow (!show);
                }}
            >
                Show/Hide {JSON.stringify ( show )}
            </button>
        </div>
    )
}
