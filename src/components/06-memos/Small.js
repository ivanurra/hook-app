import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('Call');

    return (
        <small>
            { value }
        </small>
    )
});