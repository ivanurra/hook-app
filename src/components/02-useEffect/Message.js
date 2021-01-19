import React from 'react'

export const Message = () => {

    useEffect(() => {

        console.log('component mounted!')

        return () => {
            console.log('component unmounted!')
        }
    }, [])

    return (
        <div>
            <h3>You're great!</h3>
        </div>
    )
}

