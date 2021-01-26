import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/simple-effect.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const { data } = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect (() => {

        console.log( pTag.current.getBoundingClientRect())

    },[])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                    <p 
                        className="mb-0"
                        ref= { pTag }
                    >
                        {quote}
                    </p>
            </blockquote>

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>

        </div>
    )
}
