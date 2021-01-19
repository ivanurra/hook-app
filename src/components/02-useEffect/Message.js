import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        window.addEventListener('mousemove', (e)=>{
            // console.log(e);
            const coors = {x: e.x, y: e.y};
            console.log(coors)
        })

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

